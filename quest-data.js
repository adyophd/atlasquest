const QUEST_REGIONS = {

  northern_new_england: {
    name: "Northern New England",
    states: ["ME", "NH", "VT"],
    adjacent: ["southern_new_england", "new_york"],
    cities: [
      { name: "Portland", state: "ME", capital: false, lat: 43.6591, lng: -70.2568, fact: "Built on a peninsula jutting into Casco Bay whose deep harbor could shelter large ships. By the 1840s it was connected by rail to Montreal, becoming Canada's winter port when the St. Lawrence froze — the closest ice-free Atlantic harbor to the Canadian interior." },
      { name: "Augusta", state: "ME", capital: true, lat: 44.3106, lng: -69.7795, fact: "Sited at the head of navigation on the Kennebec River — the farthest point upstream ocean-going ships could reach. It began as a fur trading post in 1754. When Maine separated from Massachusetts in 1820, its central position on the state's main river made it the natural capital." },
      { name: "Burlington", state: "VT", capital: false, lat: 44.4759, lng: -73.2121, fact: "Set above the best natural harbor on Lake Champlain's Vermont shore, controlling the main water route between Canada and New England. It boomed as a timber port, floating logs down the Winooski River to the lake and loading them onto boats bound for New York." },
      { name: "Montpelier", state: "VT", capital: true, lat: 44.2601, lng: -72.5754, fact: "Chosen as Vermont's capital in 1805 for its central position in the state, at the confluence of the North Branch and Winooski rivers. It remains the least-populous state capital in the US — a deliberate choice to prevent any single city from dominating state politics." },
      { name: "Concord", state: "NH", capital: true, lat: 43.2081, lng: -71.5376, fact: "Situated at the first major ford on the Merrimack River above tidewater — the head of inland navigation and a Penacook settlement for centuries before English settlers arrived in 1725. Its position at the river's navigable limit made it the natural hub of central New Hampshire." },
      { name: "Manchester", state: "NH", capital: false, lat: 42.9956, lng: -71.4548, fact: "Built around Amoskeag Falls, the most powerful waterfall in New England, where the Merrimack drops 55 feet. The Amoskeag Manufacturing Company harnessed the falls in the 1830s to build what became the world's largest textile complex — a mile of red brick mills still lining the riverbank." },
      { name: "Portsmouth", state: "NH", capital: false, lat: 43.0718, lng: -70.7626, fact: "Founded at the mouth of the Piscataqua River, whose exceptionally fast tidal current kept the harbor ice-free year-round. The river's deep channel allowed large ships to dock directly, making Portsmouth the most important colonial port north of Boston and a major shipbuilding center for 200 years." }
    ]
  },

  southern_new_england: {
    name: "Southern New England",
    states: ["MA", "RI", "CT"],
    adjacent: ["northern_new_england", "new_york"],
    cities: [
      { name: "Boston", state: "MA", capital: true, lat: 42.3601, lng: -71.0589, fact: "Puritan settlers chose a small, easily defended peninsula jutting into the harbor in 1630. The original landmass was a third of today's size; 400 years of landfill have tripled it, burying the original shoreline under downtown streets." },
      { name: "Plymouth", state: "MA", capital: false, lat: 41.9584, lng: -70.6673, fact: "The Pilgrims landed here in 1620 not by plan but because it was the first harbor they found with cleared land — the result of a 1616 epidemic that had wiped out the Patuxet people, leaving fields empty and a natural harbor undefended. The clearing that saved the settlers was itself a graveyard." },
      { name: "Salem", state: "MA", capital: false, lat: 42.5195, lng: -70.8967, fact: "Settled in 1626 on a peninsula between two tidal rivers feeding into a protected harbor. Salem was one of colonial America's busiest ports — its merchant fleet rivaled Boston's and reached China — a prosperity that funded the courthouse where 19 people were hanged as witches in 1692." },
      { name: "Cambridge", state: "MA", capital: false, lat: 42.3736, lng: -71.1097, fact: "Established across the Charles River from Boston as the colonial capital, then quickly eclipsed by Boston's superior harbor. Harvard College was planted here in 1636 to train Puritan ministers — the first university in the English colonies, sited to serve the colony's spiritual leadership." },
      { name: "Providence", state: "RI", capital: true, lat: 41.8240, lng: -71.4128, fact: "Founded in 1636 by Roger Williams after his banishment from Massachusetts for preaching religious tolerance. He settled at the head of Narragansett Bay where the Providence and Moshassuck rivers meet — a site purchased from the Narragansett, one of the first such transactions in New England." },
      { name: "Hartford", state: "CT", capital: true, lat: 41.7658, lng: -72.6851, fact: "Founded in 1635 at the head of deep-water navigation on the Connecticut River — the farthest inland point ocean-going vessels could reach. Dutch traders had built a fort there two years earlier. Its river position made Hartford the commercial capital of the Connecticut Valley for two centuries." },
      { name: "New Haven", state: "CT", capital: false, lat: 41.3083, lng: -72.9279, fact: "Founded in 1638 by Puritans on a harbor fed by three rivers and laid out as a nine-square grid — one of the first planned cities in North America. Yale was placed here in 1718 to anchor the colony's intellectual life, making New Haven the template for the American college town." }
    ]
  },

  new_york: {
    name: "New York",
    states: ["NY"],
    adjacent: ["northern_new_england", "southern_new_england", "mid_atlantic"],
    cities: [
      { name: "New York City", state: "NY", capital: false, lat: 40.7128, lng: -74.0060, fact: "Built where the Hudson River meets the Atlantic, giving it simultaneous access to ocean trade and the North American interior. The Dutch chose Manhattan Island in 1624 because a single fort at its southern tip could control all ship traffic entering the harbor." },
      { name: "Albany", state: "NY", capital: true, lat: 42.6526, lng: -73.7562, fact: "Sited where the Mohawk River joins the Hudson at the head of tidal navigation — the precise point where ocean ships met the interior waterway system. The Dutch built Fort Nassau here in 1614 to control the fur trade. When the Erie Canal opened in 1825, Albany became the gateway to the Great Lakes basin." },
      { name: "Buffalo", state: "NY", capital: false, lat: 42.8864, lng: -78.8784, fact: "Positioned where Lake Erie narrows into the Niagara River, Buffalo became the western terminus of the Erie Canal in 1825. Every bushel of Great Lakes grain heading east transferred here from lake vessel to canal boat — a geographic chokehold that made it one of the fastest-growing cities in America." },
      { name: "Rochester", state: "NY", capital: false, lat: 43.1566, lng: -77.6088, fact: "Built around three waterfalls on the Genesee River, which drop 96 feet before the river reaches Lake Ontario. The falls powered flour mills fed by Genesee Valley wheat, making Rochester the Flour City and the first boomtown on the Erie Canal — laid out on a grid before it had any settlers." },
      { name: "Syracuse", state: "NY", capital: false, lat: 43.0481, lng: -76.1474, fact: "Built around the salt springs of Onondaga Lake, where the Haudenosaunee had harvested salt for centuries. When the Erie Canal ran through in 1825, Syracuse became the salt-processing capital of North America — at its peak supplying most of the nation's salt, vital for preserving food before refrigeration." },
      { name: "Ithaca", state: "NY", capital: false, lat: 42.4440, lng: -76.5021, fact: "Set at the southern tip of Cayuga Lake where two gorges — Fall Creek and Cascadilla — drop through waterfalls before reaching the water. Cornell University was built on the hill above in 1865, positioned to look over the lake. The gorges that define the setting also periodically flood the campus." },
      { name: "Saratoga Springs", state: "NY", capital: false, lat: 43.0831, lng: -73.7846, fact: "Built on a cluster of natural mineral springs — carbonated water forced up through limestone — that the Haudenosaunee had used for centuries. By the 1800s it was America's most fashionable resort; the springs that drew wealthy visitors also drew the gambling halls and horse racing that define it today." }
    ]
  },

  mid_atlantic: {
    name: "Mid-Atlantic",
    states: ["NJ", "PA", "DE"],
    adjacent: ["new_york", "chesapeake", "appalachia", "ohio_valley"],
    cities: [
      { name: "Philadelphia", state: "PA", capital: false, lat: 39.9526, lng: -75.1652, fact: "William Penn laid it out in 1682 on the neck between the Delaware and Schuylkill rivers — two navigable waterways giving access to both ocean trade and the Pennsylvania interior, while the peninsula geometry eliminated the need for defensive walls. It was America's largest city for a century." },
      { name: "Pittsburgh", state: "PA", capital: false, lat: 40.4406, lng: -79.9959, fact: "Built at the exact point where the Allegheny and Monongahela rivers converge to form the Ohio. The French built Fort Duquesne here in 1754; the British captured and renamed it Fort Pitt — both recognized that controlling this confluence meant controlling the entire Ohio Valley and the road west." },
      { name: "Harrisburg", state: "PA", capital: true, lat: 40.2732, lng: -76.8867, fact: "Sited at the best natural ford on the Susquehanna River — the first shallow crossing point for travelers heading west from Philadelphia. The ford made it an unavoidable stop on the road to the interior; its central river position made it the obvious choice when Pennsylvania moved its capital from Philadelphia in 1812." },
      { name: "Trenton", state: "NJ", capital: true, lat: 40.2171, lng: -74.7429, fact: "Located at the falls of the Delaware River — the head of tidal navigation and the lowest feasible crossing point between Philadelphia and New York. Its position as a mandatory road junction made it strategically vital; Washington chose it for his surprise crossing on Christmas night 1776." },
      { name: "Newark", state: "NJ", capital: false, lat: 40.7357, lng: -74.1724, fact: "Founded in 1666 by Puritans on the Passaic River where it meets Newark Bay — directly across from Manhattan. The bay's sheltered waters allowed heavy industry while proximity to New York's market made Newark the industrial workshop behind the nation's largest city for two centuries." },
      { name: "Dover", state: "DE", capital: true, lat: 39.1582, lng: -75.5244, fact: "Laid out by William Penn in 1683 on the St. Jones River, several miles inland from Delaware Bay. During the Revolution, it replaced New Castle as capital because New Castle's position on the bay made it too exposed to British naval attack — a defensive choice that has kept Dover the capital ever since." },
      { name: "Wilmington", state: "DE", capital: false, lat: 39.7447, lng: -75.5484, fact: "Built at the confluence of Brandywine Creek and the Christina River, where the Brandywine's falls powered mills before Eleuthère Irénée du Pont built his gunpowder mill there in 1802. The DuPont fortune that transformed it into a corporate capital began at this specific waterfall." }
    ]
  },

  chesapeake: {
    name: "Chesapeake",
    states: ["MD", "DC", "VA"],
    adjacent: ["mid_atlantic", "appalachia", "carolinas"],
    cities: [
      { name: "Washington", state: "DC", capital: true, lat: 38.9072, lng: -77.0369, fact: "Its location is the result of a 1790 political deal: Hamilton got his federal debt assumption plan; the South got a capital on the Potomac, splitting the difference between Virginia and Maryland and keeping it out of any existing state." },
      { name: "Baltimore", state: "MD", capital: false, lat: 39.2904, lng: -76.6122, fact: "Sited on the Patapsco River's inner harbor, one of the deepest anchorages on the Chesapeake Bay. When the National Road opened in 1811 as the first federal highway heading west, it started in Baltimore — positioning the city as the gateway between the mid-Atlantic coast and the Ohio Valley." },
      { name: "Annapolis", state: "MD", capital: true, lat: 38.9784, lng: -76.4922, fact: "Founded on a peninsula where the Severn River meets the Chesapeake Bay, its harbor deep enough for large vessels. Chosen as Maryland's capital in 1694 for its central position on the bay; the same deep-water access that made it a colonial port brought the US Naval Academy here in 1845." },
      { name: "Richmond", state: "VA", capital: true, lat: 37.5407, lng: -77.4360, fact: "Built at the fall line of the James River, where tidal navigation ends and rapids begin. The falls powered mills fed by Virginia's tobacco interior; the same geography that made it a colonial trading hub made it Virginia's capital in 1780 — and in 1861, the Confederate capital, 100 miles from Washington." },
      { name: "Norfolk", state: "VA", capital: false, lat: 36.8508, lng: -76.2859, fact: "Built on the southern shore of Hampton Roads, where the James, Elizabeth, and Nansemond rivers meet the Chesapeake Bay, creating one of the deepest natural harbors on the Atlantic coast. The US Navy's largest base in the world sits here for the same reason the city did: no East Coast port can shelter more ships." },
      { name: "Charlottesville", state: "VA", capital: false, lat: 38.0293, lng: -78.4767, fact: "Thomas Jefferson chose a hilltop here for Monticello in 1769 specifically for its views of the Blue Ridge Mountains. He then designed the University of Virginia below it in 1819 as an academical village laid out on a lawn visible from his porch — the campus as a deliberate extension of the landscape." },
      { name: "Alexandria", state: "VA", capital: false, lat: 38.8048, lng: -77.0469, fact: "Surveyed in 1749 — by a 17-year-old George Washington — on the Potomac at a point where the river narrows and deepens enough to dock large ships. It was originally carved into the District of Columbia in 1791; Virginia reclaimed it in 1847 when it became clear the federal city would not expand that direction." }
    ]
  },

  appalachia: {
    name: "Appalachia",
    states: ["WV", "KY", "TN"],
    adjacent: ["mid_atlantic", "chesapeake", "carolinas", "deep_south", "gulf_coast", "arkansas_missouri", "ohio_valley", "great_lakes"],
    cities: [
      { name: "Nashville", state: "TN", capital: true, lat: 36.1627, lng: -86.7816, fact: "Founded in 1779 at a bend in the Cumberland River where a limestone bluff provided a defensible high bank. The site was a major salt lick that had drawn buffalo herds and hunters for centuries — the first settlers followed the same trail. The river bend gave the new fort a natural moat on three sides." },
      { name: "Memphis", state: "TN", capital: false, lat: 35.1495, lng: -90.0490, fact: "Built on the Chickasaw Bluffs, a rare elevated outcropping above the Mississippi floodplain, giving it the first truly flood-safe ground south of Kentucky. The bluff and a major river bend concentrated all north-south river traffic at this point — the natural chokehold on the lower Mississippi." },
      { name: "Knoxville", state: "TN", capital: false, lat: 35.9606, lng: -83.9207, fact: "At the confluence of the Holston and French Broad rivers, which merge here to form the Tennessee River. The meeting of waterways made it the natural hub for settlers crossing the Appalachians via the Great Wagon Road; Knoxville served as the first capital of Tennessee before the state's center of gravity shifted west." },
      { name: "Louisville", state: "KY", capital: false, lat: 38.2527, lng: -85.7585, fact: "Built at the Falls of the Ohio, the only set of rapids on the river's entire 981-mile length. Every flatboat heading west had to stop and portage around them — a mandatory halt that spawned a town. When a canal bypassed the falls in 1830, Louisville became the lock through which all Ohio River commerce had to pass." },
      { name: "Lexington", state: "KY", capital: false, lat: 38.0406, lng: -84.5037, fact: "The limestone bedrock dissolves calcium into the soil, producing grass that builds unusually dense bones in young horses — which is why the world's thoroughbred industry settled here, not by tradition but by geology. The city was named in 1775 before any settler arrived, by hunters who had just heard news of the Revolution." },
      { name: "Frankfort", state: "KY", capital: true, lat: 38.2009, lng: -84.8733, fact: "Chosen as Kentucky's capital in 1792 as a compromise between the rival claims of Lexington and Louisville. It sits in a narrow gorge where the Kentucky River cuts through the Knobs — a topographically dramatic but commercially awkward site that has kept Frankfort small despite being a major state's capital." },
      { name: "Charleston", state: "WV", capital: true, lat: 38.3498, lng: -81.6326, fact: "Built at the confluence of the Elk and Kanawha rivers, where the valley cuts a navigable route through the Appalachians. The Kanawha sits above salt springs mined since the 1790s, and later coal and natural gas. West Virginia's capital was sited at the valley's industrial heart, not its geographic center." }
    ]
  },

  carolinas: {
    name: "Carolinas",
    states: ["NC", "SC"],
    adjacent: ["chesapeake", "appalachia", "deep_south"],
    cities: [
      { name: "Charlotte", state: "NC", capital: false, lat: 35.2271, lng: -80.8431, fact: "Founded at the intersection of two major Native American trading paths that had crossed the Carolina Piedmont for centuries. When gold was struck nearby in 1799 — the first gold rush in US history — Charlotte got the country's first branch of the US Mint. The same crossroads logic later made it a railroad hub and the second-largest banking center in the US." },
      { name: "Raleigh", state: "NC", capital: true, lat: 35.7796, lng: -78.6382, fact: "One of the first purpose-built state capitals in the US, carved from forest in 1792 on land chosen for its rough equidistance between the state's competing factions. Unlike most cities, it predates its own population — the government buildings came before the residents, making Raleigh a city created by political geometry." },
      { name: "Durham", state: "NC", capital: false, lat: 35.9940, lng: -78.8986, fact: "Named for a railroad station built in 1854, Durham had no particular geographic advantage — but when Sherman's army camped here in 1865, soldiers took local bright-leaf tobacco home and created a national demand. The American Tobacco Company built an empire on the taste those soldiers carried out." },
      { name: "Asheville", state: "NC", capital: false, lat: 35.5951, lng: -82.5515, fact: "Cradled in a high mountain basin where the Swannanoa River meets the French Broad, surrounded by the Blue Ridge. Before railways, its elevation made it a refuge from lowland summer fevers; after the railroad arrived in 1880, George Vanderbilt chose the same mountains for the Biltmore Estate — the largest private home in America." },
      { name: "Columbia", state: "SC", capital: true, lat: 34.0007, lng: -81.0348, fact: "Purpose-built in 1786 as a compromise between South Carolina's coastal planters and inland farmers, who had feuded over the capital for a generation. The site at the confluence of the Broad and Saluda rivers — the geographic center of the state — was chosen to give neither faction an advantage." },
      { name: "Charleston", state: "SC", capital: false, lat: 32.7765, lng: -79.9311, fact: "Founded in 1670 on a peninsula between the Ashley and Cooper rivers, sheltered by barrier islands that create one of the deepest natural harbors on the East Coast. The geography that made it colonial America's richest city also made it a military target: the Civil War began when Confederate guns fired across this harbor at Fort Sumter." },
      { name: "Wilmington", state: "NC", capital: false, lat: 34.2257, lng: -77.9447, fact: "Built where the Cape Fear River meets the Atlantic — the only river in North Carolina with a navigable direct outlet to the sea. Every tobacco hogshead and naval stores barrel from the state's interior had to funnel through this single bottleneck, giving Wilmington a port monopoly no inland competitor could break." }
    ]
  },

  deep_south: {
    name: "Deep South",
    states: ["GA", "FL"],
    adjacent: ["carolinas", "appalachia", "gulf_coast"],
    cities: [
      { name: "Atlanta", state: "GA", capital: true, lat: 33.7490, lng: -84.3880, fact: "Atlanta was a railroad survey marker before it was a city — engineers drove a stake into the Georgia hills in 1837 to mark the southern terminus of a planned railway, and a town grew around it. Originally named Terminus, its geography offered nothing but a convenient altitude; the railroad made it everything." },
      { name: "Savannah", state: "GA", capital: false, lat: 32.0835, lng: -81.0998, fact: "James Oglethorpe chose a 40-foot bluff above the Savannah River in 1733 — high enough to defend, far enough inland to intercept approaching ships, yet navigable by ocean vessels. He then laid the city out as a system of 24 identical squares, a plan so deliberate that all 24 still exist." },
      { name: "Augusta", state: "GA", capital: false, lat: 33.4735, lng: -82.0105, fact: "Sited at the head of navigation on the Savannah River — the farthest inland point flatboats could reach from the coast. Founded in 1736 as a trading post with the Cherokee, it sat at the fall line where Piedmont meets coastal plain; the same rapids that stopped boats later powered the textile mills that rebuilt it after the Civil War." },
      { name: "Miami", state: "FL", capital: false, lat: 25.7617, lng: -80.1918, fact: "Miami existed as a trading post until 1896, when Julia Tuttle sent railroad magnate Henry Flagler a bouquet of fresh orange blossoms during a statewide freeze — proof that the far south was frost-free. Flagler extended his railroad to Biscayne Bay within the year, and the city was incorporated the same day the tracks arrived." },
      { name: "Jacksonville", state: "FL", capital: false, lat: 30.3322, lng: -81.6557, fact: "Built at the first crossing point on the St. Johns River, where it narrows enough to ford — making it the gateway between Georgia and the Florida interior. The St. Johns is one of the few rivers in the US that flows north; Jacksonville sits at its mouth, controlling both the river route inland and the Atlantic coast trade." },
      { name: "Orlando", state: "FL", capital: false, lat: 28.5383, lng: -81.3792, fact: "A small citrus town on Florida's inland lake district until 1965, when Disney secretly assembled 27,000 acres of swamp and scrub — buying land through dummy corporations to keep prices down. Disney chose it for the same reasons developers had ignored it: flat, cheap, central Florida, with two highways under construction." },
      { name: "Tallahassee", state: "FL", capital: true, lat: 30.4518, lng: -84.2807, fact: "Chosen in 1824 as a compromise between Florida's two existing colonial capitals — Pensacola to the west, St. Augustine to the east — which were too far apart to both serve as seat of government. The site was high, dry ground in the Red Hills, roughly equidistant from both coasts and accessible without crossing swamps." },
      { name: "St. Augustine", state: "FL", capital: false, lat: 29.8947, lng: -81.3145, fact: "Founded in 1565 by Pedro Menéndez de Avilés to destroy a French Protestant colony 40 miles north — the site chosen for a harbor inlet deep enough for galleons and a defensible peninsula. As the oldest continuously occupied European settlement in North America, it became the military anchor of Spain's entire eastern seaboard." }
    ]
  },

  gulf_coast: {
    name: "Gulf Coast",
    states: ["AL", "MS", "LA"],
    adjacent: ["appalachia", "deep_south", "arkansas_missouri", "texas"],
    cities: [
      { name: "New Orleans", state: "LA", capital: false, lat: 29.9511, lng: -90.0715, fact: "Placed on a natural levee just 5 feet above sea level in 1718 by Bienville, over his own engineers' objections. The site was indefensible against floods but strategically perfect: whoever held this bend of the Mississippi controlled the outlet for the entire interior of the continent — a basin covering 40% of the US." },
      { name: "Baton Rouge", state: "LA", capital: true, lat: 30.4515, lng: -91.1871, fact: "Built on the first natural bluff above sea level on the Mississippi's eastern bank — a 30-foot rise of solid ground in a landscape of swamp and marsh. French explorers in 1699 named it for a red-stained cypress pole marking a tribal boundary. The same bluff that kept it dry eventually made it Louisiana's capital." },
      { name: "Mobile", state: "AL", capital: false, lat: 30.6954, lng: -88.0399, fact: "Founded in 1702 where the Mobile-Tensaw delta meets a protected bay — the only significant deepwater harbor on the central Gulf Coast. It was the first capital of French Louisiana, predating New Orleans by 16 years; Mardi Gras began in Mobile, not New Orleans, though New Orleans took the credit." },
      { name: "Montgomery", state: "AL", capital: true, lat: 32.3668, lng: -86.3000, fact: "Built at the head of steamboat navigation on the Alabama River, where the current becomes too shallow for large vessels. Two competing settlements on opposite banks of a creek merged into a single city in 1819. In 1861 it became the first capital of the Confederacy, chosen for its central position before Richmond replaced it." },
      { name: "Birmingham", state: "AL", capital: false, lat: 33.5186, lng: -86.8104, fact: "Founded in 1871 at a railroad intersection specifically because Red Mountain above the city contained all three ingredients for steel — iron ore, coal, and limestone — within a 10-mile radius. No other place had this coincidence of geology; Birmingham was built to exploit it, becoming the Pittsburgh of the South." },
      { name: "Jackson", state: "MS", capital: true, lat: 32.2988, lng: -90.1848, fact: "Chosen as Mississippi's capital in 1822 to replace Natchez, which sat on the state's far southwestern edge and served the cotton planters' interests above all others. The new site on the Pearl River was geographically central, accessible by water, and politically neutral — a blank slate for a government meant to represent a whole state." },
      { name: "Natchez", state: "MS", capital: false, lat: 31.5604, lng: -91.4032, fact: "Perched on a 200-foot bluff above the Mississippi — the highest natural point between Memphis and the Gulf — Natchez was a Natchez tribe capital before the French built a fort there in 1716. It became the southern terminus of the Natchez Trace, the road that boatmen walked home after selling their goods downriver." }
    ]
  },

  arkansas_missouri: {
    name: "Arkansas & Missouri",
    states: ["AR", "MO"],
    adjacent: ["appalachia", "gulf_coast", "great_lakes", "upper_midwest", "northern_plains", "southern_plains", "texas"],
    cities: [
      { name: "St. Louis", state: "MO", capital: false, lat: 38.6270, lng: -90.1994, fact: "Pierre Laclède chose this Mississippi bluff in 1764, just below the Missouri confluence, because it would never flood and any fur from the western interior had to pass this point. The Gateway Arch doesn't memorialize St. Louis — it marks the geography that made it the literal door to the continent." },
      { name: "Kansas City", state: "MO", capital: false, lat: 39.0997, lng: -94.5786, fact: "Built at the confluence of the Missouri and Kansas rivers, the last natural stopping point before the treeless plains began. All three great westward trails — the Santa Fe, Oregon, and California — started here. Settlers loaded their wagons at this exact spot before disappearing into what Americans then called the Great American Desert." },
      { name: "Jefferson City", state: "MO", capital: true, lat: 38.5767, lng: -92.1735, fact: "Chosen as Missouri's capital in 1821 on a bluff above the Missouri River, centrally located between the state's competing eastern and western populations. It was a deliberate geographic compromise — placed far enough from St. Louis to prevent that city from dominating state politics." },
      { name: "Little Rock", state: "AR", capital: true, lat: 34.7465, lng: -92.2896, fact: "Named for an actual rock outcropping on the Arkansas River's south bank that French explorers used as a navigation landmark. The rock marked the head of reliable river navigation and the best ford for land travelers — a natural reference point that made it the obvious site for the territorial capital in 1821." },
      { name: "Fayetteville", state: "AR", capital: false, lat: 36.0626, lng: -94.1574, fact: "Sited in the Boston Mountains of the Ozarks, higher and cooler than the Arkansas lowlands. The University of Arkansas came here in 1871 to serve the region's isolated mountain communities; Sam Walton opened his first store in nearby Bentonville in 1945, making this Ozark corner the unlikely origin of the world's largest retailer." },
      { name: "Hot Springs", state: "AR", capital: false, lat: 34.5037, lng: -93.0552, fact: "Rainwater seeping into the Ouachita Mountains percolates thousands of feet down, heats against hot rock, and resurfaces here at 143°F. This geology made Hot Springs America's first federally protected recreation area in 1832 — older than Yellowstone. By the 1920s the same springs attracted both health-seekers and gangsters who ran gambling houses beside the bathhouses." }
    ]
  },

  ohio_valley: {
    name: "Ohio Valley",
    states: ["OH", "IN"],
    adjacent: ["mid_atlantic", "appalachia", "great_lakes"],
    cities: [
      { name: "Columbus", state: "OH", capital: true, lat: 39.9612, lng: -82.9988, fact: "A planned city that barely existed when chosen as Ohio's capital in 1812, picked by private investors who offered to build the state buildings for free if their Scioto River site won. Its central position gave it the political neutrality that Chillicothe lacked — a compromise capital that eventually outgrew every rival." },
      { name: "Cleveland", state: "OH", capital: false, lat: 41.4993, lng: -81.6944, fact: "Surveyed in 1796 at the mouth of the Cuyahoga River — a winding stream that provided a natural harbor on Lake Erie. When the Ohio & Erie Canal opened in 1827, Cleveland became its northern terminal, meaning all goods moving between the Ohio River and the Great Lakes passed through this river mouth." },
      { name: "Cincinnati", state: "OH", capital: false, lat: 39.1031, lng: -84.5120, fact: "Founded in 1788 on a natural terrace above the Ohio River at the mouth of the Licking River. Its position on the main artery west made it the largest American city beyond the Appalachians for decades — so dominant in hog processing that it earned the name Porkopolis, feeding the pig farms of the surrounding hills into the river's trade." },
      { name: "Dayton", state: "OH", capital: false, lat: 39.7589, lng: -84.1916, fact: "Built at the confluence of the Mad and Stillwater rivers with the Great Miami — a three-river meeting that made it a natural transport hub in the Miami Valley. The precision manufacturing tradition of Dayton's factories is why the Wright Brothers ran a bicycle shop here; the workshop culture they absorbed built the first airplane." },
      { name: "Indianapolis", state: "IN", capital: true, lat: 39.7684, lng: -86.1581, fact: "Planned in 1821 at Indiana's geographic center on the White River, which planners expected to be navigable — it wasn't. The city nearly failed when boats couldn't use the river, but its crossroads position in the road network saved it. More interstate highways converge here than in any other US city." },
      { name: "Fort Wayne", state: "IN", capital: false, lat: 41.0793, lng: -85.1394, fact: "At the confluence of the St. Marys and St. Joseph rivers, which form the Maumee — the critical portage connecting the Great Lakes drainage to the Mississippi basin, a short overland carry that every Native trader and French fur man knew. The Miami called it Kekionga and built their largest town here." },
      { name: "South Bend", state: "IN", capital: false, lat: 41.6764, lng: -86.2520, fact: "Named for the sharp southward curve of the St. Joseph River, which creates a natural waterpower site on the riverbend. The Potawatomi had a village here before French traders arrived. Notre Dame was founded on a marshy lake two miles north in 1842 by a small band of Holy Cross brothers with little more than a land grant." }
    ]
  },

  great_lakes: {
    name: "Great Lakes",
    states: ["IL", "WI", "MI"],
    adjacent: ["appalachia", "arkansas_missouri", "ohio_valley", "upper_midwest"],
    cities: [
      { name: "Chicago", state: "IL", capital: false, lat: 41.8781, lng: -87.6298, fact: "Built at the southwestern corner of Lake Michigan, where a half-mile portage once crossed between the lake and the Illinois River — connecting the Great Lakes and Mississippi drainages. Whoever controlled this gap controlled the passage between the two great water systems of the continent. Everything else about Chicago follows from this geography." },
      { name: "Springfield", state: "IL", capital: true, lat: 39.7817, lng: -89.6501, fact: "Abraham Lincoln, then a 28-year-old state legislator, led the effort to move Illinois's capital from Vandalia to Springfield in 1837 — organizing a bloc of legislators to vote as a unit. The selection was political, not geographic; Springfield had no river advantage, just the votes Lincoln could count." },
      { name: "Detroit", state: "MI", capital: false, lat: 42.3314, lng: -83.0458, fact: "Founded in 1701 at the narrowest point of the Detroit River — a strait barely a mile wide connecting Lake Erie to the upper Great Lakes. Antoine Cadillac built Fort Pontchartrain here because the strait was a geographic chokehold: no ship could pass between the upper and lower lakes without going through cannon range of this bank." },
      { name: "Lansing", state: "MI", capital: true, lat: 42.7325, lng: -84.5555, fact: "Michigan's capital was chosen in 1847 as a legislative accident — a deadlock between Detroit and Ann Arbor was broken when a Lansing delegate proposed his own frontier village of 20 settlers, expecting the motion to fail. It passed. Lansing had no rivers, no roads, and no particular geography; it is a capital by error." },
      { name: "Ann Arbor", state: "MI", capital: false, lat: 42.2808, lng: -83.7430, fact: "Named by two land speculators in 1824 after their wives (both named Ann) and the forested canopy along the Huron River. The University of Michigan relocated here from Detroit in 1837 because the founders wanted to keep it out of a large city — a decision that created the modern American model of the public research university in a small town." },
      { name: "Milwaukee", state: "WI", capital: false, lat: 43.0389, lng: -87.9065, fact: "Built where three rivers — the Milwaukee, Menomonee, and Kinnickinnic — converge at a Lake Michigan harbor. The lake kept the surrounding area cold, which was essential for lagering beer; German immigrants who arrived in the 1840s found ideal conditions and made Milwaukee the brewing capital of North America." },
      { name: "Madison", state: "WI", capital: true, lat: 43.0731, lng: -89.4012, fact: "Chosen as Wisconsin's territorial capital in 1836 by Judge James Doty, who owned the land — the isthmus between Lake Mendota and Lake Monona had no settlers and no roads. Doty lobbied legislators with land grants. The site's unusual geography (water on two sides) eventually justified the choice; at the time it was pure speculation." }
    ]
  },

  upper_midwest: {
    name: "Upper Midwest",
    states: ["MN", "IA"],
    adjacent: ["arkansas_missouri", "great_lakes", "northern_plains"],
    cities: [
      { name: "Minneapolis", state: "MN", capital: false, lat: 44.9778, lng: -93.2650, fact: "Built at the Falls of St. Anthony — the only natural waterfall on the entire Mississippi River — which mark the head of navigation and provided waterpower for the flour mills that made Minneapolis the world's leading flour producer from 1880 to 1930. The falls have since been harnessed for hydroelectricity; the mill ruins remain on the riverbank." },
      { name: "St. Paul", state: "MN", capital: true, lat: 44.9537, lng: -93.0900, fact: "Grew from a riverside chapel built by Father Lucien Galtier in 1841 at the first reliable steamboat landing on the upper Mississippi. The spot was already a gathering point for traders and Dakota people; the chapel named it. When Minnesota became a territory in 1849, the steamboat landing everyone used became the natural capital." },
      { name: "Duluth", state: "MN", capital: false, lat: 46.7867, lng: -92.1005, fact: "At the western tip of Lake Superior, the farthest inland deepwater port in the world, where the Iron Range's ore had to transfer from rail to ship. The city exists because ore from the Mesabi Range — discovered in 1866 — needed a port, and this sheltered bay at the lake's head was the obvious endpoint for the rail lines feeding it." },
      { name: "Des Moines", state: "IA", capital: true, lat: 41.5868, lng: -93.6250, fact: "Built as a military fort in 1843 at the confluence of the Des Moines and Raccoon rivers. Its central position on the Iowa prairie made it both capital and financial hub for the most corn-intensive state in America — so much crop insurance is written here that Des Moines has more insurance companies per capita than anywhere else in the US." },
      { name: "Iowa City", state: "IA", capital: false, lat: 41.6611, lng: -91.5302, fact: "Iowa's first territorial capital, chosen in 1839 on the Iowa River for its central position in the eastern part of the state. When the capital moved to Des Moines in 1857, Iowa City became a pure university town — home to the Iowa Writers' Workshop, which since 1936 has produced more major American novelists than any other single program." },
      { name: "Cedar Rapids", state: "IA", capital: false, lat: 41.9779, lng: -91.6656, fact: "Named for the rapids on the Cedar River that powered its first mills in the 1840s. Quaker Oats built its mill here in 1873 because the river provided cheap power and the surrounding farms provided grain; the company's oatmeal smell still drifts over downtown, a reminder that the city was founded on exactly the geography the name describes." }
    ]
  },

  northern_plains: {
    name: "Northern Plains",
    states: ["ND", "SD", "NE"],
    adjacent: ["arkansas_missouri", "upper_midwest", "southern_plains", "rocky_mountain", "northern_rockies"],
    cities: [
      { name: "Omaha", state: "NE", capital: false, lat: 41.2565, lng: -95.9345, fact: "On the west bank of the Missouri River at the Platte confluence — the embarkation point for the Oregon, California, and Mormon Trails, where the Platte's broad flat valley offered the only gentle gradient across the Great Plains. The Union Pacific began its transcontinental railroad here in 1865, following the same Platte Valley the wagon trains had already proved." },
      { name: "Lincoln", state: "NE", capital: true, lat: 40.8136, lng: -96.7026, fact: "Named Lincoln and declared Nebraska's capital in 1867 specifically to spite Omaha — the legislature moved the government inland to prevent the dominant river city from controlling state politics. The site was a small salt-marsh town; the government machinery was the only thing that made it grow." },
      { name: "Sioux Falls", state: "SD", capital: false, lat: 43.5446, lng: -96.7311, fact: "Built on the falls of the Big Sioux River, where the current drops over exposed quartzite ledges in a series of cascades. The pink Sioux quartzite revealed by the falls is the distinctive stone of the region — the same rock the Dakota quarried for ceremonial pipes was what early settlers cut for building foundations." },
      { name: "Pierre", state: "SD", capital: true, lat: 44.3683, lng: -100.3510, fact: "A steamboat landing where the Bad River meets the Missouri — chosen as South Dakota's capital in 1889 for being the most central point accessible by rail in the new state. It remains the second-least-populous state capital in the US; the geography that gave it political neutrality also gave it no economic advantage." },
      { name: "Fargo", state: "ND", capital: false, lat: 46.8772, lng: -96.7898, fact: "Built on the flood plain of the Red River of the North, a former lake bed left by glacial Lake Agassiz — flat to the horizon and some of the most fertile soil on earth. The Northern Pacific Railroad crossed the river here in 1871; the same flatness that makes the land so productive also traps snowmelt, making Fargo chronically flood-prone." },
      { name: "Bismarck", state: "ND", capital: true, lat: 46.8083, lng: -100.7837, fact: "Named Bismarck in 1872 to attract German investment in the Northern Pacific Railroad, which crossed the Missouri River here at a natural ford. The river crossing made it a supply depot for expeditions into the Black Hills; it became North Dakota's capital when Dakota Territory was split in 1889." }
    ]
  },

  southern_plains: {
    name: "Southern Plains",
    states: ["KS", "OK"],
    adjacent: ["arkansas_missouri", "northern_plains", "texas", "desert_southwest", "rocky_mountain"],
    cities: [
      { name: "Oklahoma City", state: "OK", capital: true, lat: 35.4676, lng: -97.5164, fact: "Settled on April 22, 1889, when the federal government opened the Unassigned Lands to homesteaders at a gunshot. Thousands raced in on horses, wagons, and trains to stake claims around a single railroad depot on the Canadian River — a city of tents by sundown. The Sooners who snuck in early gave Oklahoma its nickname." },
      { name: "Tulsa", state: "OK", capital: false, lat: 36.1540, lng: -95.9928, fact: "A Creek Nation settlement on the Arkansas River until 1905, when the Glenn Pool oil field was discovered 15 miles south — then the largest oil field in the world. The Black neighborhood of Greenwood, built on oil-era wealth, was one of the most prosperous in America before it was destroyed in the 1921 Tulsa Race Massacre." },
      { name: "Wichita", state: "KS", capital: false, lat: 37.6872, lng: -97.3301, fact: "Built at the Arkansas River crossing of the Chisholm Trail, where Texas longhorns driven north were loaded onto the Santa Fe Railway starting in 1872. The cattle era ended within a decade as farms fenced the range, but the manufacturing precision it left behind attracted aviation: Cessna, Beechcraft, and Boeing all built planes here." },
      { name: "Topeka", state: "KS", capital: true, lat: 39.0558, lng: -95.6890, fact: "Founded at the natural ford of the Kansas River used by Oregon Trail travelers since the 1840s, and settled in 1854 by antislavery homesteaders as a Free State town. Its central river and rail position made it the natural capital; the name of its school board made it the center of the most important civil rights case of the 20th century." },
      { name: "Dodge City", state: "KS", capital: false, lat: 37.7528, lng: -100.0171, fact: "Established in 1872 at the railhead of the Atchison, Topeka & Santa Fe Railway, where longhorn cattle driven north from Texas could be loaded directly onto trains. Its position at the convergence of the Chisholm and Western Trails made it the cattle-shipping capital of the plains before the ranching frontier moved west." }
    ]
  },

  texas: {
    name: "Texas",
    states: ["TX"],
    adjacent: ["gulf_coast", "arkansas_missouri", "southern_plains", "desert_southwest"],
    cities: [
      { name: "Houston", state: "TX", capital: false, lat: 29.7604, lng: -95.3698, fact: "Founded in 1836 by real estate speculators who named it after Sam Houston and claimed Buffalo Bayou was navigable — an exaggeration. The Houston Ship Channel, dredged to 40 feet in 1914, made it true; the 1901 Spindletop oil discovery nearby made it matter. Today the channel is one of the busiest ports by tonnage in the US." },
      { name: "Dallas", state: "TX", capital: false, lat: 32.7767, lng: -96.7970, fact: "John Neely Bryan built a trading post at a Trinity River crossing in 1841 with no particular geographic advantage — no harbor, no falls, no confluence. Dallas became a city only when two railroads chose to cross here in 1872-73, a decision driven by land grants and politics rather than geography. It is the largest US city with no navigable waterway." },
      { name: "San Antonio", state: "TX", capital: false, lat: 29.4241, lng: -98.4936, fact: "Founded in 1718 by Spanish missionaries around the San Antonio River, which springs from artesian wells north of the city — one of the few reliable water sources in the semi-arid south Texas brush country. Five missions were strung along the river to control the water; the northernmost, repurposed as a fort, became the Alamo." },
      { name: "Austin", state: "TX", capital: true, lat: 30.2672, lng: -97.7431, fact: "Chosen as the Republic of Texas capital in 1839 by Mirabeau Lamar, who visited during a buffalo hunt and was captivated by the Colorado River valley below the Balcones Escarpment. The site combined a natural defensive advantage — hills on three sides — with reliable river water. Sam Houston thought the choice foolish; it became the permanent capital anyway." },
      { name: "Fort Worth", state: "TX", capital: false, lat: 32.7555, lng: -97.3308, fact: "Established in 1849 as a military post on the Trinity River at the edge of Comanche territory — the westernmost point of Texas settlement at the time. When the Chisholm Trail made it the last outfitting stop before cattle drives turned north, Fort Worth became the Queen City of the Prairies, a title it surrendered to Dallas only when the railroads bypassed it." },
      { name: "El Paso", state: "TX", capital: false, lat: 31.7619, lng: -106.4850, fact: "Named for the natural gap where the Rio Grande cuts through the Franklin Mountains — El Paso del Norte, the Pass of the North. For hundreds of miles in either direction, unbroken mountains block east-west travel; this single river gorge was the only viable route connecting the Gulf Coast to California, used by Spanish explorers, the Butterfield mail, and the transcontinental railroad." },
      { name: "Galveston", state: "TX", capital: false, lat: 29.3013, lng: -94.7977, fact: "Built on a barrier island with one of the Gulf's best natural deepwater harbors, Galveston was Texas's largest city and busiest port until the Great Hurricane of 1900 — the deadliest natural disaster in US history — killed up to 12,000 people overnight. The island's geography that made it a port also made it defenseless; the city responded by raising itself 17 feet on pumped-in sand." }
    ]
  },

  desert_southwest: {
    name: "Desert Southwest",
    states: ["NM", "AZ"],
    adjacent: ["southern_plains", "texas", "rocky_mountain", "california"],
    cities: [
      { name: "Phoenix", state: "AZ", capital: true, lat: 33.4484, lng: -112.0740, fact: "Founded in 1867 in the Salt River Valley by settlers who discovered and reused a canal network built by the Hohokam, who had irrigated this desert for 1,500 years before vanishing around 1450. The name Phoenix was chosen deliberately — a city rising from the ruins of a prior civilization. The same canals, now enlarged, still carry water to 5 million people." },
      { name: "Tucson", state: "AZ", capital: false, lat: 32.2226, lng: -110.9747, fact: "The Spanish built a presidio here in 1775 on the Santa Cruz River — one of the only reliable water sources in the Sonoran Desert — at the base of the Santa Catalina Mountains, which provided natural protection from Apache attack. The river has since gone underground due to groundwater pumping; the city now draws from an aqueduct." },
      { name: "Flagstaff", state: "AZ", capital: false, lat: 35.1983, lng: -111.6513, fact: "Sitting at 6,900 feet on the Colorado Plateau — high enough for ponderosa pines and snow — Flagstaff marks where the Atlantic & Pacific Railroad had to pass through a mountain gap in 1882. The San Francisco Peaks nearby, visible for 100 miles, acted as a navigation landmark for travelers crossing the Sonoran Desert below." },
      { name: "Albuquerque", state: "NM", capital: false, lat: 35.0844, lng: -106.6504, fact: "Founded in 1706 in the Rio Grande valley where the river's floodplain provided the only dependable farmland in the high desert. The site controlled a key point on the Camino Real between Mexico City and Santa Fe. Route 66 later ran through its central avenue; every road through the city was forced there by the river valley." },
      { name: "Santa Fe", state: "NM", capital: true, lat: 35.6870, lng: -105.9378, fact: "Founded in 1610 at 7,000 feet on a creek draining the Sangre de Cristo Mountains — the Spanish chose the altitude deliberately, seeking cooler temperatures and a defensible position above the Rio Grande valley. It is the oldest US state capital and the highest; the same creek that fed it in 1610 still flows through the Plaza." },
      { name: "Taos", state: "NM", capital: false, lat: 36.4072, lng: -105.5731, fact: "Taos Pueblo has been continuously occupied for over 1,000 years at the base of Taos Mountain, where the Rio Pueblo de Taos carries snowmelt into the high desert. The Spanish built their church here in the 1600s because the pueblo was already a regional center; the artists who arrived in 1898 came for the same reason — the light is a product of the altitude." }
    ]
  },

  rocky_mountain: {
    name: "Rocky Mountain",
    states: ["CO", "UT", "NV"],
    adjacent: ["northern_plains", "southern_plains", "desert_southwest", "northern_rockies", "pacific_northwest", "california"],
    cities: [
      { name: "Las Vegas", state: "NV", capital: false, lat: 36.1699, lng: -115.1398, fact: "In the Mojave Desert at a cluster of artesian springs — Las Vegas means the meadows in Spanish — that made it a watering stop on the Old Spanish Trail to California. The springs brought a railroad depot; the depot brought a town; Nevada's 1931 gambling legalization brought the Strip. The aquifer that fed the springs is now largely depleted." },
      { name: "Reno", state: "NV", capital: false, lat: 39.5296, lng: -119.8138, fact: "At the foot of the Sierra Nevada where the Truckee River exits the mountains into the Nevada flats — the natural rest stop for emigrants who had just crossed the Sierra. The transcontinental railroad followed the Truckee River through the mountains in 1868; Reno was the first major settlement on the other side." },
      { name: "Carson City", state: "NV", capital: true, lat: 39.1638, lng: -119.7674, fact: "A supply depot for Virginia City's Comstock Lode silver mines, sitting at the base of the Sierra Nevada on the Carson River — the natural staging point for men and equipment heading to the mines. When Nevada was rushed to statehood in 1864 to add a Unionist vote before the election, Carson City was the obvious capital." },
      { name: "Denver", state: "CO", capital: true, lat: 39.7392, lng: -104.9903, fact: "Founded at the confluence of Cherry Creek and the South Platte River in 1858, when gold was discovered in the creek's gravel. Denver became the supply depot for the mountain mining camps above — the last flat ground before the Rockies, where prospectors bought everything they needed. The gold played out; Denver's position at the mountain gateway did not." },
      { name: "Colorado Springs", state: "CO", capital: false, lat: 38.8339, lng: -104.8214, fact: "Founded in 1871 by railroad developer William Palmer at the base of Pikes Peak, designed from the start as a resort for wealthy easterners — wide streets, no saloons, and mountain views. The same mountain that made it a resort made it strategically valuable: NORAD buried its command center in Cheyenne Mountain beside it in 1966." },
      { name: "Salt Lake City", state: "UT", capital: true, lat: 40.7608, lng: -111.8910, fact: "Brigham Young led Mormon pioneers here in 1847 specifically because it was Mexican territory — outside US jurisdiction and, he believed, far enough from persecution. He chose the valley from Emigration Canyon, beside streams draining the Wasatch. The Mexican-American War ended weeks later, making it American soil anyway; the city was already platted." },
      { name: "Boulder", state: "CO", capital: false, lat: 40.0150, lng: -105.2705, fact: "Founded at the base of the Flatirons — massive tilted slabs of red sandstone marking the edge of the Rocky Mountain Front Range — by gold prospectors in 1858 who used the creek mouth as a supply camp. The University of Colorado was planted here in 1876; the mountains that defined the setting eventually made Boulder the template for the American outdoor-tech city." }
    ]
  },

  northern_rockies: {
    name: "Northern Rockies",
    states: ["MT", "ID", "WY"],
    adjacent: ["northern_plains", "rocky_mountain", "pacific_northwest"],
    cities: [
      { name: "Boise", state: "ID", capital: true, lat: 43.6150, lng: -116.2023, fact: "Named wooded in French for the cottonwood trees along the Boise River — visible for miles to Oregon Trail travelers crossing the barren Snake River Plain. The trees meant water; water meant the place to stop. Fort Boise grew from the trail stop; the trail stop became a territorial hub; the hub became a capital." },
      { name: "Helena", state: "MT", capital: true, lat: 46.5958, lng: -112.0270, fact: "Built in a gold-bearing gulch that four exhausted prospectors panned in 1864 after failing everywhere else — they called it Last Chance Gulch. The gulch became the city's main street, still called that today. The gold made Helena Montana's wealthiest city per capita in the 1880s and eventually its capital." },
      { name: "Billings", state: "MT", capital: false, lat: 45.7833, lng: -108.5007, fact: "Founded in 1882 by the Northern Pacific Railroad at its Yellowstone River crossing — the company's land agents laid out lots and sold them before the first train arrived. Named after railroad president Frederick Billings. The Yellowstone Valley's water and bottomland made it the agricultural hub of a wide dry grassland that had no other town." },
      { name: "Missoula", state: "MT", capital: false, lat: 46.8721, lng: -113.9940, fact: "At the mouth of Hellgate Canyon, where the Clark Fork River bursts through a narrow gorge into the Missoula Valley — a natural funnel through the Rockies that both the Salish people and the Northern Pacific Railroad followed. The valley where four rivers meet made it a trading crossroads for millennia before it became a university town." },
      { name: "Cheyenne", state: "WY", capital: true, lat: 41.1400, lng: -104.8202, fact: "Born when the Union Pacific Railroad reached this point in July 1867 and made camp. The engineers chose the route for a single reason: the Gangplank — a natural ramp of ancient alluvium that allows the railroad to climb from the Great Plains to the Rockies at a gentle grade, the only such ramp in the range." },
      { name: "Casper", state: "WY", capital: false, lat: 42.8666, lng: -106.3131, fact: "At the most-used ford on the North Platte River, where virtually every wagon train on the Oregon, California, and Mormon Trails stopped to cross. The ford that fed a ferry service fed a fort, and the fort fed a town. The Salt Creek oil field discovered 40 miles north in the late 1880s made the crossing town into Wyoming's oil capital." }
    ]
  },

  pacific_northwest: {
    name: "Pacific Northwest",
    states: ["WA", "OR"],
    adjacent: ["rocky_mountain", "northern_rockies", "california"],
    cities: [
      { name: "Seattle", state: "WA", capital: false, lat: 47.6062, lng: -122.3321, fact: "Built on a narrow strip between Puget Sound and Lake Washington, chosen in 1851 for Elliott Bay's deep harbor — one of the finest on the Pacific coast. Timber first, then the Klondike: when gold was discovered in 1897, Seattle was the last major port before Alaska. Every miner who went north outfitted here." },
      { name: "Spokane", state: "WA", capital: false, lat: 47.6588, lng: -117.4260, fact: "Built around Spokane Falls, a series of cataracts where the Spokane River drops 100 feet through a basalt canyon — a fishing site used by the Spokane Tribe for centuries. The same falls powered the mills that made it the commercial hub of the Inland Empire, a name for the wheat-growing plateau between the Cascades and the Rockies." },
      { name: "Olympia", state: "WA", capital: true, lat: 47.0379, lng: -122.9007, fact: "Settled at the southern tip of Puget Sound where Budd Inlet provides a protected harbor. Chosen as Washington Territory's capital in 1853 — its position at the end of the Sound, slightly removed from main commercial traffic, was a feature: legislators wanted a capital that wouldn't be dominated by any single port city." },
      { name: "Portland", state: "OR", capital: false, lat: 45.5051, lng: -122.6750, fact: "Its name was decided by a coin flip in 1845: Amos Lovejoy wanted Boston; Francis Pettygrove, who won the toss, chose Portland after his Maine hometown. Built at the Willamette River's deepwater harbor just upstream from the Columbia — the only navigable route into the Pacific Northwest interior — it became the region's commercial capital before Seattle had a railroad." },
      { name: "Salem", state: "OR", capital: true, lat: 44.9429, lng: -123.0351, fact: "Oregon's first American settlement, established in 1834 by Methodist missionary Jason Lee in the center of the Willamette Valley — the most fertile land west of the Rockies. When Congress created Oregon Territory in 1848, Salem's central valley position made it the obvious capital. The valley's rich volcanic soil is why Oregon's entire early agricultural economy grew here." },
      { name: "Eugene", state: "OR", capital: false, lat: 44.0521, lng: -123.0868, fact: "At the southern end of the Willamette Valley where the river's floodplain narrows against the mountains, Eugene Skinner built a cabin on a butte above the Willamette in 1846. The University of Oregon came in 1876; track coach Bill Bowerman's obsession with running shoes on the university's oval eventually produced Nike." }
    ]
  },

  california: {
    name: "California",
    states: ["CA"],
    adjacent: ["desert_southwest", "rocky_mountain", "pacific_northwest"],
    cities: [
      { name: "Los Angeles", state: "CA", capital: false, lat: 34.0522, lng: -118.2437, fact: "The Spanish planted a farming village here in 1781 on a small river that could barely water it. Los Angeles grew by importing water: William Mulholland's 1913 aqueduct drained the Owens Valley 230 miles away, and engineers later reached the Colorado River. The city's geography is defined by the water it doesn't have." },
      { name: "San Francisco", state: "CA", capital: false, lat: 37.7749, lng: -122.4194, fact: "The Golden Gate — a single narrow strait between the Pacific and San Francisco Bay — channels all ship traffic entering California's only major natural harbor through one point. The 1848 gold rush made it a city in months; every ship carrying miners and supplies had to pass through this gap. San Francisco taxed the passage with everything it had." },
      { name: "San Diego", state: "CA", capital: false, lat: 32.7157, lng: -117.1611, fact: "The first California mission was built here in 1769 because Point Loma — a long natural promontory — creates one of the Pacific coast's best protected harbors south of San Francisco. The US Navy arrived for the same reason: the bay shelters ships while the mild climate and open land offered room to build the largest naval complex on the West Coast." },
      { name: "Sacramento", state: "CA", capital: true, lat: 38.5816, lng: -121.4944, fact: "John Sutter built his fort at the American-Sacramento river confluence in 1839 for access to water and valley farmland. Gold discovered on the American River in 1848 flooded the town with miners; Sacramento survived the Gold Rush by supplying it rather than mining, and became California's capital in 1854." },
      { name: "San Jose", state: "CA", capital: false, lat: 37.3382, lng: -121.8863, fact: "The first civilian settlement in California, founded in 1777 in the Santa Clara Valley to supply food to the Spanish presidios and missions. The same mild climate and valley soil that filled it with apricot orchards in the 19th century made it hospitable to a different crop: Hewlett-Packard built its first instrument in a nearby garage in 1939." },
      { name: "Oakland", state: "CA", capital: false, lat: 37.8044, lng: -122.2712, fact: "Built on the eastern shore of San Francisco Bay where an estuary provides natural harbor shelter. The Central Pacific chose Oakland as the transcontinental railroad's western terminus in 1869 — the ferry crossing to San Francisco was the final link. The Bay Bridge replaced the ferries in 1936 and made Oakland a permanent satellite of the city it had once rivaled." },
      { name: "Berkeley", state: "CA", capital: false, lat: 37.8716, lng: -122.2727, fact: "The University of California moved to this east bay hillside in 1873, siting itself — per Frederick Olmsted's recommendation — on terrain with a view of the Golden Gate. The city grew entirely to serve the university; there was no other reason for a town here. The hill that gives it its views also traps summer fog rolling in from the Pacific." }
    ]
  },

  hawaii: {
    name: "Hawaii",
    states: ["HI"],
    adjacent: [],
    cities: [
      { name: "Honolulu", state: "HI", capital: true, lat: 21.3069, lng: -157.8583, fact: "Named protected bay in Hawaiian for the reef-sheltered harbor on O'ahu's south shore. When Western merchant ships began arriving in the early 1800s, they naturally gravitated to the only safe anchorage on the island; Kamehameha I moved his royal court here around 1804. Pearl Harbor, 8 miles west, was developed for the same reason — the same reef system that protected the port." },
      { name: "Hilo", state: "HI", capital: false, lat: 19.7074, lng: -155.0885, fact: "On the Big Island's windward coast where 120 inches of annual rain feed the island's most productive farmland, and Hilo Bay's sweeping curve provides the only harbor. The same bay geometry that makes it a port acts as a tsunami funnel: in 1946 and 1960, ocean waves destroyed the waterfront. Downtown Hilo is now a greenbelt where the old neighborhoods stood." },
      { name: "Lahaina", state: "HI", capital: false, lat: 20.8783, lng: -156.6825, fact: "On Maui's sheltered western shore, protected from the trade winds by the island's volcanic mountains — the preferred anchorage for Pacific whaling ships in the early 1800s. It was the capital of the Hawaiian Kingdom from 1820 to 1845, the point where whalers, missionaries, and ali'i converged. In August 2023, historic Lahaina burned to the ground in a wildfire." },
      { name: "Kailua-Kona", state: "HI", capital: false, lat: 19.6397, lng: -155.9969, fact: "On the Big Island's leeward coast, in the dry rain shadow of Mauna Loa — sheltered from the trade winds and receiving less than 25 inches of rain yearly while the east coast gets over 100. The same volcanic slope and dry-bright weather that drew Hawaiian royalty here (Kamehameha I died here in 1819) creates the specific microclimate for Kona coffee." },
      { name: "Lihue", state: "HI", capital: false, lat: 21.9811, lng: -159.3711, fact: "On Kauai's eastern coast at Nawiliwili Bay — the island's only harbor capable of handling large vessels. The Lihue Plain surrounding it is unusually flat for mountainous Kauai, suited to sugar cane; the plantation economy that dominated Kauai for a century was concentrated here where ships could load directly at the harbor." }
    ]
  },

  alaska: {
    name: "Alaska",
    states: ["AK"],
    adjacent: [],
    cities: [
      { name: "Anchorage", state: "AK", capital: false, lat: 61.2181, lng: -149.9003, fact: "Founded in 1915 as a railroad construction base — ships anchored in Cook Inlet while workers built the line inland. The name stuck. Its central position on the Alaska coast made it the state's hub; its location near the great circle route between Asia and North America makes its airport one of the busiest air freight hubs in the world." },
      { name: "Juneau", state: "AK", capital: true, lat: 58.3005, lng: -134.4197, fact: "Gold was discovered in the Gastineau Channel in 1880, and the mining camp became the territorial capital in 1906. Juneau is hemmed in by mountains rising directly from the sea — there is no road connecting it to the rest of Alaska, making it the only US state capital inaccessible by land. The Juneau Icefield above it covers 1,500 square miles." },
      { name: "Fairbanks", state: "AK", capital: false, lat: 64.8378, lng: -147.7164, fact: "Built on the Chena River after a gold discovery in 1902, 190 miles from the nearest coastline and accessible only by river until the Alaska Railroad reached it in 1923. Its position deep in the interior makes it Alaska's coldest major city — temperatures reach -60°F — and its location under the auroral oval makes it the premier destination for viewing the northern lights." },
      { name: "Sitka", state: "AK", capital: false, lat: 57.0531, lng: -135.3300, fact: "Alexander Baranov chose this island on the Pacific trade route in 1799 for its protected harbor among the Alexander Archipelago's islands. As New Archangel, it became the capital of Russian America — a city of 1,000 with a cathedral, library, and harbor full of sea-otter pelts. The transfer of Alaska to the United States took place on this parade ground in 1867." },
      { name: "Nome", state: "AK", capital: false, lat: 64.5011, lng: -165.4064, fact: "Built on the Bering Sea shore after gold was found in 1899 literally on the beach — no mining equipment needed, just a pan and access to the surf. Tens of thousands of people arrived the following summer. Nome has no natural harbor; ships still anchor offshore and ferry goods to the beach by lighter. It sits 160 miles from Siberia." },
      { name: "Kodiak", state: "AK", capital: false, lat: 57.7900, lng: -152.4072, fact: "Russia's first Alaskan foothold, founded in 1784 by fur trader Grigory Shelikhov on a sheltered northeast harbor. It served as capital of Russian America until Sitka displaced it in 1808. Today the same harbor anchors one of the largest commercial fishing fleets in the US." }
    ]
  }

};

const QUEST_START = "southern_new_england";
