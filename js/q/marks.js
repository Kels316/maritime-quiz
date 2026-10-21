/* Question data – marks. Fields: q, a (correct), w (3 wrong options), why, src, vis (optional). */
MQ.add("marks", [
  {
    q: "Which buoyage region does Australia use, and which way round are its lateral marks?",
    a: "Region A: red to port, green to starboard",
    w: [
      "Region B: red to starboard, green to port",
      "Region A: green to port, red to starboard",
      "Region B: “red right returning”"
    ],
    why: "Region A applies in Australia: red marks to port and green to starboard when proceeding in the conventional direction of buoyage. Region B (Americas, Japan, Korea, Philippines) reverses the colours – “red right returning”. Never apply Region B habits here.",
    src: "Passage Planning Guide – The IALA System · GPH Part 1"
  },
  {
    q: "What does this mark show?",
    a: "A port-hand lateral mark: leave it to port",
    w: [
      "A starboard-hand lateral mark: leave it to starboard",
      "A cardinal mark: safe water is to the north",
      "An isolated danger mark"
    ],
    why: "Red, can-shaped (cylindrical) with a can topmark, and a red light of any rhythm at night.",
    src: "Passage Planning Guide – Lateral marks",
    vis: {"k":"buoy","t":"port","alt":"Red can buoy"}
  },
  {
    q: "What does this mark show?",
    a: "A starboard-hand lateral mark: leave it to starboard",
    w: [
      "A port-hand lateral mark: leave it to port",
      "An isolated danger mark",
      "A safe-water mark"
    ],
    why: "Green, conical, with a cone point-up topmark; a green light of any rhythm at night.",
    src: "Passage Planning Guide – Lateral marks",
    vis: {"k":"buoy","t":"stbd","alt":"Green conical buoy"}
  },
  {
    q: "This cardinal mark tells you that safe water lies…",
    a: "To the north of the mark",
    w: [
      "To the south of the mark",
      "To the east of the mark",
      "On either side of the mark"
    ],
    why: "Both cones up and black on top: North. Cones point to the black. Light: continuous quick (or very quick) white flashing.",
    src: "Passage Planning Guide – Cardinal marks",
    vis: {"k":"buoy","t":"N","alt":"North cardinal mark"}
  },
  {
    q: "This cardinal mark tells you that safe water lies…",
    a: "To the south of the mark",
    w: [
      "To the north of the mark",
      "To the west of the mark",
      "All round the mark"
    ],
    why: "Both cones down and black on the bottom: South. Light: 6 quick flashes plus one long flash, to distinguish it from West.",
    src: "Passage Planning Guide – Cardinal marks",
    vis: {"k":"buoy","t":"S","alt":"South cardinal mark"}
  },
  {
    q: "This cardinal mark tells you that safe water lies…",
    a: "To the east of the mark",
    w: [
      "To the west of the mark",
      "To the north of the mark",
      "To the south of the mark"
    ],
    why: "Cones base-to-base (pointing away from each other), black–yellow–black: East. Light: 3 flashes (“three o’clock”).",
    src: "Passage Planning Guide – Cardinal marks",
    vis: {"k":"buoy","t":"E","alt":"East cardinal mark"}
  },
  {
    q: "This cardinal mark tells you that safe water lies…",
    a: "To the west of the mark",
    w: [
      "To the east of the mark",
      "To the north of the mark",
      "To the south of the mark"
    ],
    why: "Cones point-to-point (a “W” or wine-glass shape), yellow–black–yellow: West. Light: 9 flashes (“nine o’clock”).",
    src: "Passage Planning Guide – Cardinal marks",
    vis: {"k":"buoy","t":"W","alt":"West cardinal mark"}
  },
  {
    q: "A simple way to remember cardinal topmarks is…",
    a: "The cones point towards the black band(s)",
    w: [
      "The cones point towards the yellow band(s)",
      "The cones always point up",
      "The cones point to safe water"
    ],
    why: "North: both up, black on top. South: both down, black on the bottom. East: apart, black top and bottom. West: together, black in the middle.",
    src: "Passage Planning Guide – Cardinal marks"
  },
  {
    q: "On the flashing cardinal marks, how many flashes does each show?",
    a: "East 3, South 6 plus a long flash, West 9; North is continuous quick",
    w: [
      "East 9, South 3, West 6; North shows a single flash every ten seconds",
      "North 3, East 6, South 9, and West shows a continuous quick flash",
      "East 6, South 9 plus a long flash, West 3; North shows twelve flashes"
    ],
    why: "Think of a clock face: 3 (E), 6 (S), 9 (W). The long flash after South's six prevents confusion with West. North is continuous quick flashing.",
    src: "Passage Planning Guide – Cardinal marks"
  },
  {
    q: "What does this mark show?",
    a: "An isolated danger: a small hazard with navigable water all round it",
    w: [
      "A safe-water mark: navigable water all round, so pass on either side",
      "A port-hand mark: a hazard to be left to port going with the buoyage",
      "A special mark: a prohibited anchorage or cable area ahead"
    ],
    why: "Black with one or more red bands; two black spheres as topmark; white light Fl(2). Do not pass close.",
    src: "Passage Planning Guide – Isolated danger",
    vis: {"k":"buoy","t":"isolated","alt":"Isolated danger mark"}
  },
  {
    q: "What does this mark show?",
    a: "Safe water all round: it may be passed on either side",
    w: [
      "An isolated danger: keep well clear",
      "A starboard-hand mark: leave it to starboard",
      "An emergency wreck marking buoy"
    ],
    why: "Red and white vertical stripes with a single red sphere topmark. Light: white Iso, Oc, one long flash every 10 s, or Morse “A”.",
    src: "Passage Planning Guide – Safe water mark",
    vis: {"k":"buoy","t":"safe","alt":"Red and white spherical buoy"}
  },
  {
    q: "What does this mark show?",
    a: "A special mark: a feature described in the chart or publications",
    w: [
      "An isolated danger: a hazard with navigable water all round it",
      "A cardinal mark: safe water lies in the quadrant it names",
      "A safe-water mark: pass either side, often a mid-channel or landfall mark"
    ],
    why: "Yellow with a yellow X topmark and a yellow light. It is not primarily a navigational danger mark – read the chart notes.",
    src: "Passage Planning Guide – Special mark",
    vis: {"k":"buoy","t":"special","alt":"Yellow buoy with X topmark"}
  },
  {
    q: "A buoy with blue and yellow vertical stripes and a yellow cross topmark marks…",
    a: "A new, uncharted wreck – do not pass close",
    w: [
      "A swimming area in which boats must not enter",
      "A seaplane landing area that boats must keep clear of",
      "A fish-aggregating device that boats may tow through"
    ],
    why: "The emergency wreck marking buoy has alternating blue and yellow vertical stripes, a yellow cross and an alternating blue/yellow light. If you see one that is not on your chart, slow down, keep clear and report it.",
    src: "Passage Planning Guide – Emergency wreck marking",
    vis: {"k":"buoy","t":"wreck","alt":"Blue and yellow striped buoy"}
  },
  {
    q: "The “conventional direction of buoyage” is…",
    a: "The direction taken when approaching a harbour from seaward, or set by the buoyage authority",
    w: [
      "Always north to south along the coast, whichever way the vessel is heading",
      "The direction of the flood stream as it enters the harbour or estuary",
      "The direction in which the prevailing wind blows across the entrance"
    ],
    why: "Where it is not obvious it is shown on the chart with a large open arrow.",
    src: "Passage Planning Guide – IALA System"
  },
  {
    q: "What is the difference between a buoy and a beacon?",
    a: "A buoy floats on a mooring; a beacon is fixed to the seabed or land",
    w: [
      "A beacon always shows a light; a buoy never does",
      "A buoy is fixed; a beacon floats",
      "A beacon is a lateral mark only; a buoy is a cardinal mark only"
    ],
    why: "Beacons cannot drag or shift, so they are more reliable fixing marks than buoys. A buoy may be off station, unlit or missing.",
    src: "Passage Planning Guide – Buoyage"
  },
  {
    q: "In a light description, “Oc” (occulting) means…",
    a: "The light is on for longer than it is off",
    w: [
      "The light is off for longer than it is on",
      "The light is on and off for equal periods",
      "The light is continuous"
    ],
    why: "Flashing (Fl): light shorter than dark. Occulting (Oc): light longer than dark. Isophase (Iso): equal periods. Fixed (F): continuous.",
    src: "Passage Planning Guide – Light characteristics"
  },
  {
    q: "Quick (Q), very quick (VQ) and ultra quick (UQ) flashing lights show, respectively…",
    a: "50–79, 80–159, and 160 or more flashes per minute",
    w: [
      "10, 20 and 30 flashes per minute",
      "30–49, 50–79 and 80 or more flashes per minute",
      "1, 2 and 3 flashes per second"
    ],
    why: "Rates are counted over a minute. A “long flash” (LFl) is a flash of 2 seconds or more.",
    src: "Passage Planning Guide – Light characteristics"
  },
  {
    q: "On a chart a light described only as “Fl 5s” shows which colour?",
    a: "White",
    w: [
      "Red",
      "Green",
      "Yellow"
    ],
    why: "A light with no colour stated is white. Other colours are written after the rhythm, e.g. Fl G 5s.",
    src: "Passage Planning Guide – Light colours"
  },
  {
    q: "Decode: Fl(2+1)R.15s8m4M",
    a: "Group flashing 2+1, red, 15 second period, 8 m above mean high water springs, nominal range 4 nm",
    w: [
      "Group flashing 2+1, red, 15 minute period, 8 m above chart datum, range 4 km",
      "Fixed red light, 15 s, 8 m, 4 nm",
      "Two red flashes then one green every 15 s, range 8 nm"
    ],
    why: "Rhythm, colour, period (s), elevation above mean high water springs (m), nominal range (M, nautical miles).",
    src: "Passage Planning Guide – Reading a full light description"
  },
  {
    q: "The “nominal range” of a light is…",
    a: "The distance it can be seen in a meteorological visibility of 10 nm",
    w: [
      "The distance to the horizon from the light, for an observer at deck level",
      "The greatest distance at which the light can ever be seen at night",
      "The distance at which the colour of the light can first be identified"
    ],
    why: "It measures the intensity of the light, not a guarantee of detection. You will see it at the lesser of its nominal range and its geographic range (height of light and height of eye), reduced further by haze or rain.",
    src: "Passage Planning Guide – Light characteristics"
  },
  {
    q: "The elevation of a light on a chart is measured from…",
    a: "Mean high water springs",
    w: [
      "Chart datum (lowest astronomical tide)",
      "Mean sea level",
      "The level of the observer's eye"
    ],
    why: "Charted heights – lights, bridges, cables – are referred to MHWS on Australian and Admiralty charts, deliberately keeping a margin of safety.",
    src: "Passage Planning Guide – Heights and datum"
  },
  {
    q: "What is a safe-water mark's light characteristic?",
    a: "White: isophase, occulting, one long flash every 10 s, or Morse “A”",
    w: [
      "Red group flashing (2), as for a port-hand mark",
      "Yellow flashing at any rate, as for a special mark",
      "Green quick flashing, as for starboard-hand marks at an entrance"
    ],
    why: "Isolated danger shows white Fl(2); special marks show yellow; lateral marks red or green; cardinals white quick/very quick.",
    src: "Passage Planning Guide – Buoyage"
  },
  {
    q: "Which colour of light is shown by a special mark?",
    a: "Yellow",
    w: [
      "White",
      "Blue",
      "Red"
    ],
    why: "Special marks are yellow with a yellow X topmark and a yellow light of any rhythm not used for white lights.",
    src: "Passage Planning Guide – Buoyage"
  },
  {
    q: "You are on a leading line. The front (lower) mark appears to the RIGHT of the rear mark. You are…",
    a: "To starboard of the line: alter to starboard",
    w: [
      "To port of the line: alter to port",
      "On the line: hold your course",
      "To starboard of the line: alter to port"
    ],
    why: "Alter in the direction the front mark has moved. The front mark is nearer and moves faster for a given displacement, so the correction is usually small.",
    src: "Passage Planning Guide – Leading lights and marks"
  },
  {
    q: "While following a sectored light you see it change from white to red. This means…",
    a: "You have strayed from the safe sector: alter back until white returns",
    w: [
      "You are in the deepest water, so you hold your course",
      "The light has failed and a standby light has come on",
      "You must alter away from the white sector to stay clear"
    ],
    why: "The white sector covers the safe approach; red and green sectors cover the dangers either side. Sector bearings are read from seaward off the chart during planning.",
    src: "Passage Planning Guide – Light colours and sectors"
  },
  {
    q: "Which is NOT a plausible reason for a charted light failing to appear when expected?",
    a: "Lights are visible at their nominal range in all weather",
    w: [
      "Visibility is worse than you assessed at the time",
      "You are not where you think you are on the chart",
      "The light is not working and has not yet been reported"
    ],
    why: "Non-appearance is information: poor visibility, wrong position or a failed light. Each needs action – slow down and resolve it, and report a faulty light at the end of the passage.",
    src: "Passage Planning Guide – Light ranges"
  },
  {
    q: "Why is it unwise to plot a fix from a charted buoy symbol on a small-scale chart?",
    a: "The symbol may be displaced from the true position, and the buoy swings on its mooring",
    w: [
      "Buoys are always positioned exactly under the symbol on the chart",
      "Charts never show buoys, only beacons and lighthouses",
      "Buoys have no fixed position, so the chart leaves them out entirely"
    ],
    why: "On a small-scale chart the buoy symbol may be offset from the danger it marks. Fix from fixed marks (beacons, lighthouses, charted landmarks) in preference.",
    src: "Passage Planning Guide – Light ranges"
  },
  {
    q: "What is the best way to avoid mis-identifying a mark in pilotage?",
    a: "Say its identity aloud (shape, colour, number, light) and check it against the chart",
    w: [
      "Assume it is the next mark shown on the chart along your track",
      "Identify it by its colour alone, as that is the first thing you see",
      "Trust the chart plotter symbol and don't look out of the window"
    ],
    why: "A substantial proportion of pilotage errors are misidentification – one beacon taken for another, or a mooring buoy for a channel mark. Saying it aloud lets the crew challenge it.",
    src: "Passage Planning Guide – Basic pilotage techniques"
  },
  {
    q: "What should you do if a mark is missing, off station, or does not match its charted description?",
    a: "Slow down, work out why (uncorrected chart? wrong position?), then report it",
    w: [
      "Ignore it, as marks are often moved and the chart is usually right",
      "Assume the chart is right and the mark is wrong, and carry on",
      "Speed up to clear the area before the light or visibility fails"
    ],
    why: "Reports go (normally via the flotilla) to the Australian Hydrographic Office and the state or port authority; this is how Notices to Mariners come to exist.",
    src: "Passage Planning Guide – Identifying and complying with navigational marks"
  },
  {
    q: "On a chart, bearings of leading lights and sector limits are given…",
    a: "From seaward, in degrees true",
    w: [
      "From the light, in degrees magnetic",
      "From the observer, in degrees compass",
      "From north, in relative bearings"
    ],
    why: "It is one of the four easily misread conventions: sounding position, drying heights, charted heights above MHWS, and bearings from seaward in true.",
    src: "Passage Planning Guide – Chart symbols"
  }
]);

