# Progression System — Implementation Spec

## Overview

Three interlocking features:
1. **Points** — earned from daily Challenge, accumulate in localStorage
2. **Map unlocks** — spend points to access practice maps (permanent)
3. **Map color state** — globe + difficulty buttons reflect best quiz grade per map

---

## localStorage Schema (New Keys)

### `atlasquest_points`
```json
{ "total": 42, "history": [{ "date": "2026-04-07", "earned": 12 }] }
```
- `total` is the spendable balance
- `history` is append-only; one entry per challenge day

### `atlasquest_unlocked`
```json
{ "usa_capitals": true, "france_easy": true, "france_medium": true }
```
- Keys are `${country}_${difficulty}` (e.g. `france_easy`, `usa_capitals_plus`)
- `usa_capitals` is pre-seeded `true` on first load (free starter map)
- Once `true`, never removed (unlocks are permanent)

### `atlasquest_practice_results`
```json
{ "france_easy": "A+", "france_medium": "B-", "usa_capitals": "C" }
```
- Keys same format as above
- Value is **best grade label ever achieved** on that map in Quiz mode
- Only updated on Quiz completion (not Learn or Names mode)
- Never downgrades: only write if new grade is better than existing

---

## Map Keys Reference

All countries use `${country}_${difficulty}`:

| Country | Difficulties |
|---|---|
| france, germany, russia, japan, canada, india, china, british_isles, oceania | easy, medium, hard, veryhard |
| usa | capitals, capitals_plus |

Full set: `france_easy`, `france_medium`, `france_hard`, `france_veryhard`, (same pattern for germany/russia/japan/canada/india/china/british_isles/oceania), `usa_capitals`, `usa_capitals_plus`

---

## Points Earning (challenge.html)

### Scoring formula
Per city, based on grade label:

```javascript
function gradePoints(label) {
  if (label === 'A+')              return 4;
  if (label === 'A' || label === 'A-') return 3;
  if (label.startsWith('B'))       return 2;
  if (label.startsWith('C'))       return 1;
  return 0; // D+, D, D-, F
}
```

- A+ = 4, A/A- = 3, B+/B/B- = 2, C+/C/C- = 1, D+/D/D-/F = 0

Range: 5 cities × 0–4 pts = **0–20 pts per day**

### Where to hook in

In `showEndScreen()` (challenge.html), after `if (!fromStorage) saveChallenge();`, add:

```javascript
if (!fromStorage) awardChallengePoints(quizCityGrades);
```

### `awardChallengePoints(grades)` function

```javascript
function awardChallengePoints(grades) {
  const earned = grades.reduce((sum, g) => sum + gradePoints(g), 0);
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  let data;
  try { data = JSON.parse(localStorage.getItem('atlasquest_points')) || { total: 0, history: [] }; }
  catch (_) { data = { total: 0, history: [] }; }
  data.total += earned;
  data.history.push({ date: today, earned });
  localStorage.setItem('atlasquest_points', JSON.stringify(data));
}
```

---

## Map Costs

```javascript
const MAP_COSTS = {
  easy:          10,
  medium:        25,
  hard:          50,
  veryhard:      100,
  capitals:      0,    // free
  capitals_plus: 100
};
```

---

## Initialization (practice.html, on load)

On first load (or any load where `atlasquest_unlocked` doesn't exist), seed:

```javascript
function initUnlocked() {
  let unlocked;
  try { unlocked = JSON.parse(localStorage.getItem('atlasquest_unlocked')) || {}; }
  catch (_) { unlocked = {}; }
  if (!('usa_capitals' in unlocked)) {
    unlocked.usa_capitals = true;
    localStorage.setItem('atlasquest_unlocked', JSON.stringify(unlocked));
  }
}
```

Call `initUnlocked()` once near the top of the practice.html script section.

---

## Helper Functions (practice.html)

Add these utility functions — referenced throughout:

```javascript
function getPoints() {
  try { return (JSON.parse(localStorage.getItem('atlasquest_points')) || {}).total || 0; }
  catch (_) { return 0; }
}

function getUnlocked() {
  try { return JSON.parse(localStorage.getItem('atlasquest_unlocked')) || {}; }
  catch (_) { return {}; }
}

function getPracticeResults() {
  try { return JSON.parse(localStorage.getItem('atlasquest_practice_results')) || {}; }
  catch (_) { return {}; }
}

function isUnlocked(country, difficulty) {
  return !!getUnlocked()[`${country}_${difficulty}`];
}

function getBestGrade(country, difficulty) {
  return getPracticeResults()[`${country}_${difficulty}`] || null;
}

function saveBestGrade(country, difficulty, grade) {
  const GRADE_ORDER = ['A+','A','A-','B+','B','B-','C+','C','C-','D+','D','D-','F'];
  const results = getPracticeResults();
  const key = `${country}_${difficulty}`;
  const existing = results[key];
  if (!existing || GRADE_ORDER.indexOf(grade) < GRADE_ORDER.indexOf(existing)) {
    results[key] = grade;
    localStorage.setItem('atlasquest_practice_results', JSON.stringify(results));
  }
}

function spendPoints(cost) {
  let data;
  try { data = JSON.parse(localStorage.getItem('atlasquest_points')) || { total: 0, history: [] }; }
  catch (_) { data = { total: 0, history: [] }; }
  if (data.total < cost) return false;
  data.total -= cost;
  localStorage.setItem('atlasquest_points', JSON.stringify(data));
  return true;
}

function unlockMap(country, difficulty) {
  const unlocked = getUnlocked();
  unlocked[`${country}_${difficulty}`] = true;
  localStorage.setItem('atlasquest_unlocked', JSON.stringify(unlocked));
}
```

---

## Globe Color Logic (practice.html — `draw()` function)

### Color rule
Fill color = **highest difficulty tier passed** (any recorded quiz result counts as "passed").
Colors represent progression milestone, not grade quality.

| Highest tier passed | Color | Notes |
|---|---|---|
| None | `#4a6080` muted blue-grey | Unplayed |
| Easy / Capitals | `#FFE500` yellow | No glow |
| Medium | `#39FF14` neon green | No glow |
| Hard | `#0798F3` blue | No glow |
| Very Hard / Capitals Plus | `#0798F3` blue | Vibrant glow (shadowBlur 35) |

### Glow rule
Only the **final difficulty tier** (Very Hard / Capitals Plus) triggers a glow.
shadowBlur = 35, shadowColor = rgba(255,255,255,0.9).

### Difficulty ordering

```javascript
const DIFF_ORDER = {
  france: ['easy','medium','hard','veryhard'],
  germany: ['easy','medium','hard','veryhard'],
  russia: ['easy','medium','hard','veryhard'],
  japan: ['easy','medium','hard','veryhard'],
  canada: ['easy','medium','hard','veryhard'],
  india: ['easy','medium','hard','veryhard'],
  china: ['easy','medium','hard','veryhard'],
  british_isles: ['easy','medium','hard','veryhard'],
  oceania: ['easy','medium','hard','veryhard'],
  usa: ['capitals','capitals_plus']
};
```

### Globe color function

```javascript
function getCountryGlobeColor(key) {
  const results = getPracticeResults();
  const diffs = DIFF_ORDER[key] || [];
  let bestIdx = GRADE_ORDER.length; // start at worst
  for (const d of diffs) {
    const g = results[`${key}_${d}`];
    if (g) {
      const idx = GRADE_ORDER.indexOf(g);
      if (idx < bestIdx) bestIdx = idx;
    }
  }
  if (bestIdx === GRADE_ORDER.length) return '#4a6080'; // no completions — muted blue-grey
  const letter = GRADE_ORDER[bestIdx][0];
  if (letter === 'A') return '#7effa0';
  if (letter === 'B' || letter === 'C') return '#f5c842';
  return '#ff6b6b';
}
```

### Globe glow function

```javascript
function getCountryGlow(key) {
  const results = getPracticeResults();
  const diffs = DIFF_ORDER[key] || [];
  let highestCompleted = -1;
  for (let i = 0; i < diffs.length; i++) {
    if (results[`${key}_${diffs[i]}`]) highestCompleted = i;
  }
  const blurs = [14, 22, 30, 38];
  return highestCompleted >= 0 ? blurs[highestCompleted] : 0;
}
```

### Modify `draw()` — replace countries block at practice.html:1854-1861

**Old:**
```javascript
// Countries
for (const {feature, key} of allFeatures) {
  ctx.beginPath(); path(feature);
  if (key && key === hoveredKey) ctx.fillStyle = '#ffffff';
  else if (key)                  ctx.fillStyle = '#f5c842';
  else                           ctx.fillStyle = '#243558';
  ctx.fill();
}
```

**New:**
```javascript
// Countries
for (const {feature, key} of allFeatures) {
  ctx.beginPath(); path(feature);
  if (key && key === hoveredKey) {
    ctx.fillStyle = '#ffffff';
    ctx.shadowBlur = 0;
  } else if (key) {
    ctx.fillStyle = getCountryGlobeColor(key);
    ctx.shadowColor = 'rgba(255,255,255,0.9)';
    ctx.shadowBlur  = getCountryGlow(key);
  } else {
    ctx.fillStyle = '#243558';
    ctx.shadowBlur = 0;
  }
  ctx.fill();
  ctx.shadowBlur = 0; // always reset — prevents bleed into borders pass
}
```

---

## Globe Label Enhancement

### Modify `setLabel(key)` — currently at practice.html:1807

Show lock status and cost range when hovering a fully-locked country. Show best grade when unlocked.

```javascript
function setLabel(key) {
  if (!key) { label.innerHTML = ''; return; }

  const diffs = DIFF_ORDER[key] || [];
  const unlocked = getUnlocked();
  const anyUnlocked = diffs.some(d => unlocked[`${key}_${d}`]);
  const name = KEY_LABELS[key];
  const flag = KEY_FLAGS[key];

  if (!anyUnlocked) {
    const minCost = Math.min(...diffs.map(d => MAP_COSTS[d]));
    label.innerHTML = `<div id="globe-label-name">🔒 ${name}</div><div id="globe-label-flag">${flag}</div><div id="globe-label-sub">from ${minCost} pts</div>`;
  } else {
    label.innerHTML = `<div id="globe-label-name">${name}</div><div id="globe-label-flag">${flag}</div>`;
  }
}
```

Add CSS for `#globe-label-sub` — small muted text below the flag.

---

## Purchase Gate Rule (deferred — implement after unlock system)

Before a harder difficulty can be purchased, **all easier difficulties for that country must be green** (A grade recorded in `atlasquest_practice_results`). Specifically:
- Medium requires Easy = A
- Hard requires Easy + Medium both = A
- Very Hard requires Easy + Medium + Hard all = A
- Capitals Plus requires Capitals = A

This check runs inside `attemptUnlock()` before showing the confirmation dialog. If the gate isn't met, show a message: "Ace [easier difficulty] first to unlock this."

---

## Difficulty Selector — Lock State & Unlock Flow (practice.html)

### Modify `startCountry(country)` — currently at practice.html:1690

After building `diffButtons.innerHTML`, replace the button event listener loop with a new one that checks lock state:

```javascript
diffButtons.querySelectorAll('.diff-btn').forEach(btn => {
  const diff = btn.dataset.difficulty;
  const cost = MAP_COSTS[diff];
  const locked = !isUnlocked(country, diff);
  const grade = getBestGrade(country, diff);

  if (locked) {
    btn.classList.add('diff-btn-locked');
    btn.querySelector('.diff-btn-desc').textContent = `${cost} pts to unlock`;
    btn.addEventListener('click', () => attemptUnlock(country, diff, cost));
  } else {
    // Apply grade color class
    btn.classList.remove('diff-btn-locked');
    if (grade) {
      const letter = grade[0];
      if (letter === 'A') btn.classList.add('diff-btn-green');
      else if (letter === 'B' || letter === 'C') btn.classList.add('diff-btn-yellow');
      else btn.classList.add('diff-btn-red');
    }
    btn.addEventListener('click', () => startDifficulty(diff));
  }
});
```

### `attemptUnlock(country, difficulty, cost)` function

```javascript
function attemptUnlock(country, difficulty, cost) {
  const pts = getPoints();
  const countryLabel = document.getElementById('diff-country-name').textContent;
  const diffLabel = { easy:'Easy', medium:'Medium', hard:'Hard', veryhard:'Very Hard',
                      capitals:'Capitals', capitals_plus:'Capitals Plus' }[difficulty];

  if (pts < cost) {
    showUnlockDialog(
      `Not enough points`,
      `You need ${cost} pts to unlock ${countryLabel} ${diffLabel}. You have ${pts} pts.\n\nEarn more by completing the daily Challenge.`,
      null
    );
    return;
  }

  showUnlockDialog(
    `Unlock ${countryLabel} — ${diffLabel}?`,
    `Cost: ${cost} pts  ·  You have: ${pts} pts`,
    () => {
      spendPoints(cost);
      unlockMap(country, difficulty);
      startCountry(country); // re-render buttons with new state
    }
  );
}
```

### `showUnlockDialog(title, body, onConfirm)` function

```javascript
function showUnlockDialog(title, body, onConfirm) {
  document.getElementById('unlock-dialog-title').textContent = title;
  document.getElementById('unlock-dialog-body').textContent = body;
  const confirmBtn = document.getElementById('unlock-dialog-confirm');
  const dialog = document.getElementById('unlock-dialog');
  dialog.style.display = 'flex';

  if (onConfirm) {
    confirmBtn.style.display = 'block';
    confirmBtn.onclick = () => { dialog.style.display = 'none'; onConfirm(); };
  } else {
    confirmBtn.style.display = 'none';
  }

  document.getElementById('unlock-dialog-cancel').onclick = () => {
    dialog.style.display = 'none';
  };
}
```

### New dialog HTML (add to practice.html body, after difficulty-selector div)

```html
<div id="unlock-dialog">
  <div id="unlock-dialog-box">
    <div id="unlock-dialog-title"></div>
    <div id="unlock-dialog-body"></div>
    <div id="unlock-dialog-buttons">
      <button id="unlock-dialog-confirm">Unlock</button>
      <button id="unlock-dialog-cancel">Cancel</button>
    </div>
  </div>
</div>
```

### New CSS for lock states and dialog

```css
/* Difficulty button states */
.diff-btn-locked {
  opacity: 0.5;
  filter: grayscale(1);
  cursor: not-allowed; /* override in JS with pointer for the unlock action */
  cursor: pointer;
}
.diff-btn-green { border-color: #7effa0; background: rgba(126,255,160,0.08); }
.diff-btn-yellow { border-color: #f5c842; background: rgba(245,200,66,0.08); }
.diff-btn-red { border-color: #ff6b6b; background: rgba(255,107,107,0.08); }

/* Unlock dialog */
#unlock-dialog {
  position: fixed; inset: 0; z-index: 9999;
  display: none; align-items: center; justify-content: center;
  background: rgba(0,0,0,0.7);
}
#unlock-dialog-box {
  background: #1a2a4a; border: 1px solid #2a4a7a;
  border-radius: 12px; padding: 24px 28px;
  max-width: 320px; text-align: center; color: #fff;
}
#unlock-dialog-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 10px; }
#unlock-dialog-body { font-size: 0.9rem; color: #aac; margin-bottom: 20px; }
#unlock-dialog-buttons { display: flex; gap: 10px; justify-content: center; }
#unlock-dialog-confirm { /* use existing .diff-btn styles or style separately */ }
```

---

## Practice Quiz Result Tracking (practice.html)

### Track current difficulty

`currentDifficulty` needs to be stored when `startDifficulty(difficulty)` is called. Add at top of `startDifficulty()`:

```javascript
currentDifficulty = difficulty;
```

(Declare `let currentDifficulty = null;` near `let currentCountry`.)

### Save best grade on quiz completion

Find where practice quiz finishes (the equivalent of `showEndScreen` in practice.html — look for where the quiz grade is computed and displayed). At that point, call:

```javascript
saveBestGrade(currentCountry, currentDifficulty, grade.label);
```

Where `grade.label` is the string like `'A+'`, `'B-'`, etc.

---

## Points Balance Display

Show in the difficulty selector, under the country name, as a small subtitle:

In `startCountry()`, after setting `diff-country-name`, add:

```javascript
document.getElementById('diff-points-display').textContent = `${getPoints()} pts`;
```

Add HTML to difficulty-selector:

```html
<div id="diff-points-display"></div>
```

Add CSS:
```css
#diff-points-display { font-size: 0.8rem; color: #7effa0; margin-bottom: 8px; }
```

---

## Implementation Order

Do these in sequence — each step is independently testable:

1. **challenge.html only:** Add `gradePoints()` and `awardChallengePoints()`. Hook into `showEndScreen()`. Test: complete a challenge, check `atlasquest_points` in DevTools.

2. **practice.html — helpers + init:** Add all helper functions and `initUnlocked()`. Call `initUnlocked()` on load. Test: check `atlasquest_unlocked` has `usa_capitals: true`.

3. **practice.html — globe color:** Add `DIFF_ORDER`, `MAP_COSTS`, `getCountryGlobeColor()`. Modify `draw()`. Modify `setLabel()`. Test: all countries except USA show grey (locked); USA shows white/colorless (unlocked, unquizzed).

4. **practice.html — difficulty buttons:** Modify `startCountry()` event listener loop. Add `attemptUnlock()`, `showUnlockDialog()`. Add dialog HTML + all new CSS. Test: locked buttons show cost; USA Capitals button is clickable; attempting to unlock with insufficient points shows the "not enough" dialog.

5. **practice.html — quiz result tracking:** Add `currentDifficulty` variable. Set it in `startDifficulty()`. Call `saveBestGrade()` on quiz completion. Test: complete a quiz, check `atlasquest_practice_results`.

6. **practice.html — points display:** Add `#diff-points-display` element + CSS. Update it in `startCountry()`. Test: points show correctly and update after unlocking.

---

## Unknowns to Verify Before Coding

- **Where exactly does practice quiz completion fire?** Search for the grade display logic in practice.html quiz mode — find the function that sets the final grade and displays the end state. That's where `saveBestGrade()` goes.
- **Does `currentCountry` already exist as a variable?** Yes — used in `startDifficulty()` to call `allCities[currentCountry]`. Just add `currentDifficulty` alongside it.
- **`#globe-label-sub` CSS** — check if the existing `#globe-label` flex layout needs adjustment to accommodate the third line.
