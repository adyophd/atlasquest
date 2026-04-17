// ── Shared city data ──
// Single source of truth for all country city lists.
// Both practice.html and challenge.html load this file.
// Edit only here; changes apply to both modes automatically.

const allCities = {
  france: [
    { name: "Paris",             lat: 48.8566,  lng:  2.3522 }, //  1
    { name: "Versailles",        lat: 48.8049,  lng:  2.1204 }, //  2
    { name: "Nice",              lat: 43.7102,  lng:  7.2620 }, //  3
    { name: "Cannes",            lat: 43.5528,  lng:  7.0174 }, //  4
    { name: "Marseille",         lat: 43.2965,  lng:  5.3698 }, //  5
    { name: "Lyon",              lat: 45.7640,  lng:  4.8357 }, //  6
    { name: "Bordeaux",          lat: 44.8378,  lng: -0.5792 }, //  7
    { name: "Avignon",           lat: 43.9493,  lng:  4.8055 }, //  8
    { name: "Mont-Saint-Michel", lat: 48.6360,  lng: -1.5115 }, //  9
    { name: "Strasbourg",        lat: 48.5734,  lng:  7.7521 }, // 10
    { name: "Carcassonne",       lat: 43.2130,  lng:  2.3491 }, // 11
    { name: "Reims",             lat: 49.2583,  lng:  4.0317 }, // 12
    { name: "Lourdes",           lat: 43.0967,  lng: -0.0447 }, // 13
    { name: "Toulouse",          lat: 43.6047,  lng:  1.4442 }, // 14
    { name: "Chamonix",          lat: 45.9237,  lng:  6.8694 }, // 15
    { name: "Dijon",             lat: 47.3220,  lng:  5.0415 }, // 16
    { name: "Nîmes",             lat: 43.8367,  lng:  4.3601 }, // 17
    { name: "Arles",             lat: 43.6768,  lng:  4.6278 }, // 18
    { name: "Orléans",           lat: 47.9029,  lng:  1.9039 }, // 19
    { name: "Chartres",          lat: 48.4469,  lng:  1.4886 }, // 20
  ],
  japan: [
    { name: "Tokyo",      lat: 35.6762,  lng: 139.6503 }, // 1  universal recognition
    { name: "Hiroshima",  lat: 34.3853,  lng: 132.4553 }, // 2  atomic bomb
    { name: "Kyoto",      lat: 35.0116,  lng: 135.7681 }, // 3  cultural capital
    { name: "Nagasaki",   lat: 32.7503,  lng: 129.8779 }, // 4  atomic bomb + isolation port
    { name: "Osaka",      lat: 34.6937,  lng: 135.5023 }, // 5  second city
    { name: "Kobe",       lat: 34.6901,  lng: 135.1956 }, // 6  Kobe beef
    { name: "Sapporo",    lat: 43.0618,  lng: 141.3545 }, // 7  Sapporo beer
    { name: "Yokohama",   lat: 35.4437,  lng: 139.6380 }, // 8  first modern port
    { name: "Nara",       lat: 34.6851,  lng: 135.8048 }, // 9  deer, first capital
    { name: "Nagoya",     lat: 35.1815,  lng: 136.9066 }, // 10 Toyota, Tokugawa
    { name: "Kamakura",   lat: 35.3197,  lng: 139.5467 }, // 11 Great Buddha, medieval capital
    { name: "Fukuoka",    lat: 33.5904,  lng: 130.4017 }, // 12 gateway to Asia
    { name: "Sendai",     lat: 38.2688,  lng: 140.8721 }, // 13 2011 earthquake
    { name: "Kanazawa",   lat: 36.5613,  lng: 136.6562 }, // 14 Little Kyoto, intact heritage
    { name: "Nikko",      lat: 36.7198,  lng: 139.6985 }, // 15 Toshogu shrine
    { name: "Kagoshima",  lat: 31.5966,  lng: 130.5571 }, // 16 last samurai
    { name: "Hakodate",   lat: 41.7688,  lng: 140.7290 }, // 17 first opened to West
    { name: "Matsuyama",  lat: 33.8395,  lng: 132.7659 }, // 18 oldest onsen, haiku poet Shiki
    { name: "Kumamoto",   lat: 32.8031,  lng: 130.7079 }, // 19 Musashi, great castle
    { name: "Sakai",      lat: 34.5733,  lng: 135.4830 }, // 20 Sen no Rikyu, tea ceremony
  ],
  russia: [
    { name: "Moscow",           lat: 55.7558, lng:  37.6173 },
    { name: "St. Petersburg",   lat: 59.9343, lng:  30.3351 },
    { name: "Volgograd",        lat: 48.7080, lng:  44.5133 },
    { name: "Yekaterinburg",    lat: 56.8389, lng:  60.6057 },
    { name: "Sochi",            lat: 43.6028, lng:  39.7342 },
    { name: "Vladivostok",      lat: 43.1332, lng: 131.9113 },
    { name: "Kazan",            lat: 55.7879, lng:  49.1233 },
    { name: "Novosibirsk",      lat: 54.9833, lng:  82.8964 },
    { name: "Irkutsk",          lat: 52.2978, lng: 104.2964 },
    { name: "Nizhny Novgorod",  lat: 56.3269, lng:  44.0059 },
    { name: "Murmansk",         lat: 68.9585, lng:  33.0827 },
    { name: "Kaliningrad",      lat: 54.7104, lng:  20.4522 },
    { name: "Yakutsk",          lat: 62.0355, lng: 129.6755 },
    { name: "Omsk",             lat: 54.9885, lng:  73.3242 },
    { name: "Veliky Novgorod",  lat: 58.5241, lng:  31.2756 },
    { name: "Astrakhan",        lat: 46.3497, lng:  48.0408 },
    { name: "Chelyabinsk",      lat: 55.1644, lng:  61.4368 },
    { name: "Perm",             lat: 58.0105, lng:  56.2502 },
    { name: "Rostov-on-Don",    lat: 47.2357, lng:  39.7015 },
    { name: "Pskov",            lat: 57.8194, lng:  28.3316 },
  ],
  germany: [
    { name: "Berlin",                    lat: 52.5200,  lng: 13.4050 }, //  1
    { name: "München",                   lat: 48.1351,  lng: 11.5820 }, //  2
    { name: "Hamburg",                   lat: 53.5511,  lng:  9.9937 }, //  3
    { name: "Köln",                      lat: 50.9333,  lng:  6.9503 }, //  4
    { name: "Frankfurt",                 lat: 50.1109,  lng:  8.6821 }, //  5
    { name: "Dresden",                   lat: 51.0504,  lng: 13.7373 }, //  6
    { name: "Nürnberg",                  lat: 49.4521,  lng: 11.0767 }, //  7
    { name: "Heidelberg",                lat: 49.3988,  lng:  8.6724 }, //  8
    { name: "Potsdam",                   lat: 52.3906,  lng: 13.0645 }, //  9
    { name: "Weimar",                    lat: 50.9795,  lng: 11.3235 }, // 10
    { name: "Bonn",                      lat: 50.7374,  lng:  7.0982 }, // 11
    { name: "Trier",                     lat: 49.7596,  lng:  6.6441 }, // 12
    { name: "Leipzig",                   lat: 51.3397,  lng: 12.3731 }, // 13
    { name: "Stuttgart",                 lat: 48.7758,  lng:  9.1829 }, // 14
    { name: "Lübeck",                    lat: 53.8655,  lng: 10.6866 }, // 15
    { name: "Augsburg",                  lat: 48.3705,  lng: 10.8978 }, // 16
    { name: "Bamberg",                   lat: 49.8988,  lng: 10.9028 }, // 17
    { name: "Bremen",                    lat: 53.0793,  lng:  8.8017 }, // 18
    { name: "Rothenburg ob der Tauber",  lat: 49.3774,  lng: 10.1778 }, // 19
    { name: "Düsseldorf",               lat: 51.2217,  lng:  6.7762 }, // 20
  ],
  canada: [
    { name: "Toronto",        lat: 43.6532, lng:  -79.3832 },
    { name: "Vancouver",      lat: 49.2827, lng: -123.1207 },
    { name: "Montréal",       lat: 45.5017, lng:  -73.5673 },
    { name: "Québec City",    lat: 46.8139, lng:  -71.2080 },
    { name: "Ottawa",         lat: 45.4215, lng:  -75.6972 },
    { name: "Niagara Falls",  lat: 43.0962, lng:  -79.0377 },
    { name: "Calgary",        lat: 51.0447, lng: -114.0719 },
    { name: "Banff",          lat: 51.1784, lng: -115.5708 },
    { name: "Halifax",        lat: 44.6488, lng:  -63.5752 },
    { name: "Victoria",       lat: 48.4284, lng: -123.3656 },
    { name: "Whistler",       lat: 50.1163, lng: -122.9574 },
    { name: "Edmonton",       lat: 53.5461, lng: -113.4938 },
    { name: "Winnipeg",       lat: 49.8951, lng:  -97.1384 },
    { name: "St. John's",     lat: 47.5615, lng:  -52.7126 },
    { name: "Charlottetown",  lat: 46.2382, lng:  -63.1311 },
    { name: "Kingston",       lat: 44.2312, lng:  -76.4860 },
    { name: "Hamilton (ON)",  lat: 43.2557, lng:  -79.8711 },
    { name: "Saskatoon",      lat: 52.1332, lng: -106.6700 },
    { name: "Regina",         lat: 50.4452, lng: -104.6189 },
    { name: "Thunder Bay",    lat: 48.3809, lng:  -89.2477 },
  ],
  india: [
    { name: "Mumbai",      lat: 19.0760, lng:  72.8777 },
    { name: "Delhi",       lat: 28.6139, lng:  77.2090 },
    { name: "Agra",        lat: 27.1767, lng:  78.0081 },
    { name: "Varanasi",    lat: 25.3176, lng:  82.9739 },
    { name: "Jaipur",      lat: 26.9124, lng:  75.7873 },
    { name: "Kolkata",     lat: 22.5726, lng:  88.3639 },
    { name: "Amritsar",    lat: 31.6340, lng:  74.8723 },
    { name: "Chennai",     lat: 13.0827, lng:  80.2707 },
    { name: "Bengaluru",   lat: 12.9716, lng:  77.5946 },
    { name: "Hyderabad",   lat: 17.3850, lng:  78.4867 },
    { name: "Ahmedabad",   lat: 23.0225, lng:  72.5714 },
    { name: "Udaipur",     lat: 24.5854, lng:  73.7125 },
    { name: "Mysuru",      lat: 12.2958, lng:  76.6394 },
    { name: "Rishikesh",   lat: 30.0869, lng:  78.2676 },
    { name: "Bhopal",      lat: 23.2599, lng:  77.4126 },
    { name: "Pune",        lat: 18.5204, lng:  73.8567 },
    { name: "Lucknow",     lat: 26.8467, lng:  80.9462 },
    { name: "Darjeeling",  lat: 27.0410, lng:  88.2663 },
    { name: "Surat",       lat: 21.1702, lng:  72.8311 },
    { name: "Chandigarh",  lat: 30.7333, lng:  76.7794 },
  ],

  usa: [
    // ── State Capitals (capital: true) ──
    { name: "Montgomery",    lat: 32.3617,  lng: -86.2792,  capital: true, state: "Alabama" },
    { name: "Juneau",        lat: 58.3005,  lng: -134.4197, capital: true, state: "Alaska" },
    { name: "Phoenix",       lat: 33.4484,  lng: -112.0740, capital: true, state: "Arizona" },
    { name: "Little Rock",   lat: 34.7465,  lng: -92.2896,  capital: true, state: "Arkansas" },
    { name: "Sacramento",    lat: 38.5816,  lng: -121.4944, capital: true, state: "California" },
    { name: "Denver",        lat: 39.7392,  lng: -104.9903, capital: true, state: "Colorado" },
    { name: "Hartford",      lat: 41.7658,  lng: -72.6851,  capital: true, state: "Connecticut" },
    { name: "Dover",         lat: 39.1582,  lng: -75.5244,  capital: true, state: "Delaware" },
    { name: "Tallahassee",   lat: 30.4383,  lng: -84.2807,  capital: true, state: "Florida" },
    { name: "Atlanta",       lat: 33.7490,  lng: -84.3880,  capital: true, state: "Georgia" },
    { name: "Honolulu",      lat: 21.3069,  lng: -157.8583, capital: true, state: "Hawaii" },
    { name: "Boise",         lat: 43.6150,  lng: -116.2023, capital: true, state: "Idaho" },
    { name: "Springfield",   lat: 39.7817,  lng: -89.6501,  capital: true, state: "Illinois" },
    { name: "Indianapolis",  lat: 39.7684,  lng: -86.1581,  capital: true, state: "Indiana" },
    { name: "Des Moines",    lat: 41.5868,  lng: -93.6250,  capital: true, state: "Iowa" },
    { name: "Topeka",        lat: 39.0489,  lng: -95.6780,  capital: true, state: "Kansas" },
    { name: "Frankfort",     lat: 38.2009,  lng: -84.8733,  capital: true, state: "Kentucky" },
    { name: "Baton Rouge",   lat: 30.4515,  lng: -91.1871,  capital: true, state: "Louisiana" },
    { name: "Augusta",       lat: 44.3106,  lng: -69.7795,  capital: true, state: "Maine" },
    { name: "Annapolis",     lat: 38.9784,  lng: -76.4922,  capital: true, state: "Maryland" },
    { name: "Boston",        lat: 42.3601,  lng: -71.0589,  capital: true, state: "Massachusetts" },
    { name: "Lansing",       lat: 42.7325,  lng: -84.5555,  capital: true, state: "Michigan" },
    { name: "St. Paul",      lat: 44.9537,  lng: -93.0900,  capital: true, state: "Minnesota" },
    { name: "Jackson",       lat: 32.2988,  lng: -90.1848,  capital: true, state: "Mississippi" },
    { name: "Jefferson City",lat: 38.5767,  lng: -92.1735,  capital: true, state: "Missouri" },
    { name: "Helena",        lat: 46.5958,  lng: -112.0270, capital: true, state: "Montana" },
    { name: "Lincoln",       lat: 40.8136,  lng: -96.7026,  capital: true, state: "Nebraska" },
    { name: "Carson City",   lat: 39.1638,  lng: -119.7674, capital: true, state: "Nevada" },
    { name: "Concord",       lat: 43.2081,  lng: -71.5376,  capital: true, state: "New Hampshire" },
    { name: "Trenton",       lat: 40.2171,  lng: -74.7429,  capital: true, state: "New Jersey" },
    { name: "Santa Fe",      lat: 35.6870,  lng: -105.9378, capital: true, state: "New Mexico" },
    { name: "Albany",        lat: 42.6526,  lng: -73.7562,  capital: true, state: "New York" },
    { name: "Raleigh",       lat: 35.7796,  lng: -78.6382,  capital: true, state: "North Carolina" },
    { name: "Bismarck",      lat: 46.8083,  lng: -100.7837, capital: true, state: "North Dakota" },
    { name: "Columbus",      lat: 39.9612,  lng: -82.9988,  capital: true, state: "Ohio" },
    { name: "Oklahoma City", lat: 35.4676,  lng: -97.5164,  capital: true, state: "Oklahoma" },
    { name: "Salem",         lat: 44.9429,  lng: -123.0351, capital: true, state: "Oregon" },
    { name: "Harrisburg",    lat: 40.2732,  lng: -76.8867,  capital: true, state: "Pennsylvania" },
    { name: "Providence",    lat: 41.8240,  lng: -71.4128,  capital: true, state: "Rhode Island" },
    { name: "Columbia",      lat: 34.0007,  lng: -81.0348,  capital: true, state: "South Carolina" },
    { name: "Pierre",        lat: 44.3683,  lng: -100.3510, capital: true, state: "South Dakota" },
    { name: "Nashville",     lat: 36.1627,  lng: -86.7816,  capital: true, state: "Tennessee" },
    { name: "Austin",        lat: 30.2672,  lng: -97.7431,  capital: true, state: "Texas" },
    { name: "Salt Lake City",lat: 40.7608,  lng: -111.8910, capital: true, state: "Utah" },
    { name: "Montpelier",    lat: 44.2601,  lng: -72.5754,  capital: true, state: "Vermont" },
    { name: "Richmond",      lat: 37.5407,  lng: -77.4360,  capital: true, state: "Virginia" },
    { name: "Olympia",       lat: 47.0379,  lng: -122.9007, capital: true, state: "Washington" },
    { name: "Charleston",    lat: 38.3498,  lng: -81.6326,  capital: true, state: "West Virginia" },
    { name: "Madison",       lat: 43.0731,  lng: -89.4012,  capital: true, state: "Wisconsin" },
    { name: "Cheyenne",      lat: 41.1400,  lng: -104.8202, capital: true, state: "Wyoming" },
    // ── Non-capital largest cities (Capitals Plus only) ──
    { name: "Birmingham (AL)", lat: 33.5186, lng: -86.8104,  state: "Alabama" },
    { name: "Anchorage",     lat: 61.2181,  lng: -149.9003, state: "Alaska" },
    { name: "Los Angeles",   lat: 34.0522,  lng: -118.2437, state: "California" },
    { name: "Bridgeport",    lat: 41.1865,  lng: -73.1952,  state: "Connecticut" },
    { name: "Wilmington",    lat: 39.7447,  lng: -75.5484,  state: "Delaware" },
    { name: "Jacksonville",  lat: 30.3322,  lng: -81.6557,  state: "Florida" },
    { name: "Chicago",       lat: 41.8781,  lng: -87.6298,  state: "Illinois" },
    { name: "Wichita",       lat: 37.6872,  lng: -97.3301,  state: "Kansas" },
    { name: "Louisville",    lat: 38.2527,  lng: -85.7585,  state: "Kentucky" },
    { name: "New Orleans",   lat: 29.9511,  lng: -90.0715,  state: "Louisiana" },
    { name: "Portland (ME)", lat: 43.6591,  lng: -70.2568,  state: "Maine" },
    { name: "Baltimore",     lat: 39.2904,  lng: -76.6122,  state: "Maryland" },
    { name: "Detroit",       lat: 42.3314,  lng: -83.0458,  state: "Michigan" },
    { name: "Minneapolis",   lat: 44.9778,  lng: -93.2650,  state: "Minnesota" },
    { name: "Kansas City",   lat: 39.0997,  lng: -94.5786,  state: "Missouri" },
    { name: "Billings",      lat: 45.7833,  lng: -108.5007, state: "Montana" },
    { name: "Omaha",         lat: 41.2565,  lng: -95.9345,  state: "Nebraska" },
    { name: "Las Vegas",     lat: 36.1699,  lng: -115.1398, state: "Nevada" },
    { name: "Manchester",    lat: 42.9956,  lng: -71.4548,  state: "New Hampshire" },
    { name: "Newark",        lat: 40.7357,  lng: -74.1724,  state: "New Jersey" },
    { name: "Albuquerque",   lat: 35.0844,  lng: -106.6504, state: "New Mexico" },
    { name: "New York City", lat: 40.7128,  lng: -74.0060,  state: "New York" },
    { name: "Charlotte",     lat: 35.2271,  lng: -80.8431,  state: "North Carolina" },
    { name: "Fargo",         lat: 46.8772,  lng: -96.7898,  state: "North Dakota" },
    { name: "Portland (OR)", lat: 45.5051,  lng: -122.6750, state: "Oregon" },
    { name: "Philadelphia",  lat: 39.9526,  lng: -75.1652,  state: "Pennsylvania" },
    { name: "Sioux Falls",   lat: 43.5446,  lng: -96.7311,  state: "South Dakota" },
    { name: "Houston",       lat: 29.7604,  lng: -95.3698,  state: "Texas" },
    { name: "Burlington",    lat: 44.4759,  lng: -73.2121,  state: "Vermont" },
    { name: "Virginia Beach",lat: 36.8529,  lng: -76.0082,  state: "Virginia" },
    { name: "Seattle",       lat: 47.6062,  lng: -122.3321, state: "Washington" },
    { name: "Milwaukee",     lat: 43.0389,  lng: -87.9065,  state: "Wisconsin" },
  ],
  south_america: [
    { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729, country: "Brazil"    }, //  1
    { name: "Buenos Aires",   lat: -34.6037, lng: -58.3816, country: "Argentina" }, //  2
    { name: "Cusco",          lat: -13.5319, lng: -71.9675, country: "Peru"       }, //  3
    { name: "São Paulo",      lat: -23.5505, lng: -46.6333, country: "Brazil"    }, //  4
    { name: "Cartagena",      lat:  10.3910, lng: -75.4794, country: "Colombia"  }, //  5
    { name: "Lima",           lat: -12.0464, lng: -77.0428, country: "Peru"       }, //  6
    { name: "Medellín",       lat:   6.2442, lng: -75.5812, country: "Colombia"  }, //  7
    { name: "Bogotá",         lat:   4.7110, lng: -74.0721, country: "Colombia"  }, //  8
    { name: "Santiago",       lat: -33.4489, lng: -70.6693, country: "Chile"     }, //  9
    { name: "Montevideo",     lat: -34.9011, lng: -56.1645, country: "Uruguay"   }, // 10
    { name: "Ushuaia",        lat: -54.8019, lng: -68.3030, country: "Argentina" }, // 11
    { name: "Manaus",         lat:  -3.1190, lng: -60.0217, country: "Brazil"    }, // 12
    { name: "Brasília",       lat: -15.7801, lng: -47.9292, country: "Brazil"    }, // 13
    { name: "La Paz",         lat: -16.5000, lng: -68.1193, country: "Bolivia"   }, // 14
    { name: "Salvador",       lat: -12.9714, lng: -38.5014, country: "Brazil"    }, // 15
    { name: "Valparaíso",     lat: -33.0472, lng: -71.6127, country: "Chile"     }, // 16
    { name: "Quito",          lat:  -0.1807, lng: -78.4678, country: "Ecuador"   }, // 17
    { name: "Caracas",        lat:  10.4806, lng: -66.9036, country: "Venezuela" }, // 18
    { name: "Mendoza",        lat: -32.8908, lng: -68.8272, country: "Argentina" }, // 19
    { name: "Cali",           lat:   3.4516, lng: -76.5320, country: "Colombia"  }, // 20
    { name: "Bariloche",      lat: -41.1335, lng: -71.3103, country: "Argentina" }, // 21
    { name: "Potosí",         lat: -19.5836, lng: -65.7531, country: "Bolivia"   }, // 22
    { name: "Asunción",       lat: -25.2867, lng: -57.6470, country: "Paraguay"  }, // 23
    { name: "Georgetown",     lat:   6.8013, lng: -58.1553, country: "Guyana"    }, // 24
    { name: "Paramaribo",     lat:   5.8520, lng: -55.2038, country: "Suriname"  }, // 25
  ],
  china: [
    { name: "Beijing",   lat: 39.9042, lng: 116.4074 },
    { name: "Shanghai",  lat: 31.2304, lng: 121.4737 },
    { name: "Hong Kong", lat: 22.3193, lng: 114.1694 },
    { name: "Xi'an",     lat: 34.3416, lng: 108.9398 },
    { name: "Chengdu",   lat: 30.5728, lng: 104.0668 },
    { name: "Guilin",    lat: 25.2736, lng: 110.2907 },
    { name: "Nanjing",   lat: 32.0603, lng: 118.7969 },
    { name: "Hangzhou",  lat: 30.2741, lng: 120.1551 },
    { name: "Lhasa",     lat: 29.6520, lng:  91.1721 },
    { name: "Guangzhou", lat: 23.1291, lng: 113.2644 },
    { name: "Harbin",    lat: 45.8038, lng: 126.5349 },
    { name: "Chongqing", lat: 29.5630, lng: 106.5516 },
    { name: "Macau",     lat: 22.1987, lng: 113.5439 },
    { name: "Wuhan",     lat: 30.5928, lng: 114.3055 },
    { name: "Suzhou",    lat: 31.2990, lng: 120.5853 },
    { name: "Shenzhen",  lat: 22.5431, lng: 114.0579 },
    { name: "Qingdao",   lat: 36.0671, lng: 120.3826 },
    { name: "Tianjin",   lat: 39.3434, lng: 117.3616 },
    { name: "Kunming",   lat: 25.0389, lng: 102.7183 },
    { name: "Changsha",  lat: 28.2282, lng: 112.9388 },
  ],
  british_isles: [
    { name: "London",               lat: 51.5074,  lng:  -0.1278, country: "England"          }, //  1
    { name: "Edinburgh",            lat: 55.9533,  lng:  -3.1883, country: "Scotland"         }, //  2
    { name: "Dublin",               lat: 53.3498,  lng:  -6.2603, country: "Ireland"          }, //  3
    { name: "Oxford",               lat: 51.7520,  lng:  -1.2577, country: "England"          }, //  4
    { name: "Bath",                 lat: 51.3811,  lng:  -2.3590, country: "England"          }, //  5
    { name: "Cambridge",            lat: 52.2053,  lng:   0.1218, country: "England"          }, //  6
    { name: "Liverpool",            lat: 53.4084,  lng:  -2.9916, country: "England"          }, //  7
    { name: "Stratford-upon-Avon",  lat: 52.1919,  lng:  -1.7083, country: "England"          }, //  8
    { name: "Canterbury",           lat: 51.2802,  lng:   1.0789, country: "England"          }, //  9
    { name: "York",                 lat: 53.9590,  lng:  -1.0815, country: "England"          }, // 10
    { name: "Manchester",           lat: 53.4808,  lng:  -2.2426, country: "England"          }, // 11
    { name: "Windsor",              lat: 51.4839,  lng:  -0.6044, country: "England"          }, // 12
    { name: "Glasgow",              lat: 55.8642,  lng:  -4.2518, country: "Scotland"         }, // 13
    { name: "Bristol",              lat: 51.4545,  lng:  -2.5879, country: "England"          }, // 14
    { name: "Cardiff",              lat: 51.4816,  lng:  -3.1791, country: "Wales"            }, // 15
    { name: "Belfast",              lat: 54.5973,  lng:  -5.9301, country: "Northern Ireland" }, // 16
    { name: "Nottingham",           lat: 52.9548,  lng:  -1.1581, country: "England"          }, // 17
    { name: "St Andrews",           lat: 56.3398,  lng:  -2.7967, country: "Scotland"         }, // 18
    { name: "Birmingham",           lat: 52.4862,  lng:  -1.8904, country: "England"          }, // 19
    { name: "Leeds",                lat: 53.8008,  lng:  -1.5491, country: "England"          }, // 20
  ],
  oceania: [
    { name: "Sydney",        lat: -33.8688, lng:  151.2093, country: "Australia"   }, //  1
    { name: "Melbourne",     lat: -37.8136, lng:  144.9631, country: "Australia"   }, //  2
    { name: "Auckland",      lat: -36.8509, lng:  174.7645, country: "New Zealand" }, //  3
    { name: "Queenstown",    lat: -45.0312, lng:  168.6626, country: "New Zealand" }, //  4
    { name: "Brisbane",      lat: -27.4698, lng:  153.0251, country: "Australia"   }, //  5
    { name: "Perth",         lat: -31.9505, lng:  115.8605, country: "Australia"   }, //  6
    { name: "Wellington",    lat: -41.2866, lng:  174.7756, country: "New Zealand" }, //  7
    { name: "Cairns",        lat: -16.9186, lng:  145.7781, country: "Australia"   }, //  8
    { name: "Alice Springs", lat: -23.6980, lng:  133.8807, country: "Australia"   }, //  9
    { name: "Rotorua",       lat: -38.1368, lng:  176.2497, country: "New Zealand" }, // 10
    { name: "Adelaide",      lat: -34.9285, lng:  138.6007, country: "Australia"   }, // 11
    { name: "Christchurch",  lat: -43.5321, lng:  172.6362, country: "New Zealand" }, // 12
    { name: "Gold Coast",    lat: -28.0167, lng:  153.4000, country: "Australia"   }, // 13
    { name: "Canberra",      lat: -35.2809, lng:  149.1300, country: "Australia"   }, // 14
    { name: "Darwin",        lat: -12.4634, lng:  130.8456, country: "Australia"   }, // 15
    { name: "Hobart",        lat: -42.8821, lng:  147.3272, country: "Australia"   }, // 16
    { name: "Byron Bay",     lat: -28.6474, lng:  153.6020, country: "Australia"   }, // 17
    { name: "Dunedin",       lat: -45.8788, lng:  170.5028, country: "New Zealand" }, // 18
    { name: "Broome",        lat: -17.9614, lng:  122.2359, country: "Australia"   }, // 19
    { name: "Ballarat",      lat: -37.5622, lng:  143.8503, country: "Australia"   }, // 20
  ],
  southeast_asia: [
    { name: "Bangkok",             lat:  13.7563, lng: 100.5018, country: "Thailand"    }, //  1
    { name: "Singapore",           lat:   1.3521, lng: 103.8198, country: "Singapore"   }, //  2
    { name: "Denpasar, Bali",      lat:  -8.6705, lng: 115.2126, country: "Indonesia"   }, //  3
    { name: "Hanoi",               lat:  21.0285, lng: 105.8542, country: "Vietnam"     }, //  4
    { name: "Ho Chi Minh City",    lat:  10.8231, lng: 106.6297, country: "Vietnam"     }, //  5
    { name: "Kuala Lumpur",        lat:   3.1390, lng: 101.6869, country: "Malaysia"    }, //  6
    { name: "Siem Reap",           lat:  13.3671, lng: 103.8448, country: "Cambodia"    }, //  7
    { name: "Chiang Mai",          lat:  18.7883, lng:  98.9853, country: "Thailand"    }, //  8
    { name: "Phuket",              lat:   7.8804, lng:  98.3923, country: "Thailand"    }, //  9
    { name: "Jakarta",             lat:  -6.2088, lng: 106.8456, country: "Indonesia"   }, // 10
    { name: "Manila",              lat:  14.5995, lng: 120.9842, country: "Philippines" }, // 11
    { name: "Luang Prabang",       lat:  19.8845, lng: 102.1348, country: "Laos"        }, // 12
    { name: "Yangon",              lat:  16.8661, lng:  96.1951, country: "Myanmar"     }, // 13
    { name: "Hoi An",              lat:  15.8800, lng: 108.3380, country: "Vietnam"     }, // 14
    { name: "Phnom Penh",          lat:  11.5564, lng: 104.9282, country: "Cambodia"    }, // 15
    { name: "Penang",              lat:   5.4141, lng: 100.3288, country: "Malaysia"    }, // 16
    { name: "Vientiane",           lat:  17.9757, lng: 102.6331, country: "Laos"        }, // 17
    { name: "Cebu",                lat:  10.3157, lng: 123.8854, country: "Philippines" }, // 18
    { name: "Surabaya",            lat:  -7.2575, lng: 112.7521, country: "Indonesia"   }, // 19
    { name: "Da Nang",             lat:  16.0544, lng: 108.2022, country: "Vietnam"     }, // 20
    { name: "Naypyidaw",           lat:  19.7633, lng:  96.0785, country: "Myanmar"     }, // 21
    { name: "Bandar Seri Begawan", lat:   4.9031, lng: 114.9398, country: "Brunei"      }, // 22
    { name: "Medan",               lat:   3.5952, lng:  98.6722, country: "Indonesia"   }, // 23
    { name: "Dili",                lat:  -8.5569, lng: 125.5789, country: "Timor-Leste" }, // 24
    { name: "Davao",               lat:   7.1907, lng: 125.4553, country: "Philippines" }, // 25
  ],
};
