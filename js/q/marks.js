/* Question data – marks. Fields: q, a (correct), w (3 wrong options), why, src, vis (optional). */
MQ.add("marks", [
  {
    q: "Which buoyage region applies in Australian waters, and what does it mean for lateral marks?",
    a: "IALA Region A: red marks to port, green to starboard, going with the buoyage",
    w: [
      "IALA Region B: red marks to starboard, green to port, going with the buoyage",
      "IALA Region A: green marks to port, red to starboard, going with the buoyage",
      "Region B: “red right returning”, as used in the Americas and Japan"
    ],
    why: "Region B (Americas, Japan, Korea, Philippines) reverses the lateral colours – “red right returning”. Never apply Region B habits in Australian waters.",
    src: "Passage Planning Guide – The IALA System · GPH Part 1"
  },
  {
    q: "What does this mark show?",
    a: "A port-hand lateral mark: leave it to port in the conventional direction",
    w: [
      "A starboard-hand lateral mark: leave it to starboard in the conventional direction",
      "A cardinal mark showing that the safe water lies to the north of the mark",
      "A special mark that has no navigational significance for passing vessels"
    ],
    why: "Red, can-shaped (cylindrical) with a can topmark, and a red light of any rhythm at night.",
    src: "Passage Planning Guide – Lateral marks",
    vis: {"k":"buoy","t":"port","alt":"Red can buoy"}
  },
  {
    q: "What does this mark show?",
    a: "A starboard-hand lateral mark: leave it to starboard in the conventional direction",
    w: [
      "A port-hand lateral mark: leave it to port when proceeding in the conventional direction",
      "An isolated danger mark with navigable water on every side of it",
      "A safe-water mark that may be passed on either side by vessels"
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
    a: "An isolated danger: a hazard of limited extent with navigable water all round it",
    w: [
      "A safe-water mark: navigable water all round it, so it may be passed either side",
      "A port-hand lateral mark: a hazard to be left to port going with the buoyage",
      "A special mark that shows a cable area or an anchorage that is prohibited"
    ],
    why: "Black with one or more red bands; two black spheres as topmark; white light Fl(2). Do not pass close.",
    src: "Passage Planning Guide – Isolated danger",
    vis: {"k":"buoy","t":"isolated","alt":"Isolated danger mark"}
  },
  {
    q: "What does this mark show?",
    a: "Safe water all round it: pass either side (often a mid-channel or landfall mark)",
    w: [
      "An isolated danger of limited extent: pass well clear on whichever side suits you",
      "A starboard-hand lateral mark: leave it to starboard in the conventional direction",
      "An emergency wreck marking buoy: a new, uncharted wreck close to the mark"
    ],
    why: "Red and white vertical stripes with a single red sphere topmark. Light: white Iso, Oc, one long flash every 10 s, or Morse “A”.",
    src: "Passage Planning Guide – Safe water mark",
    vis: {"k":"buoy","t":"safe","alt":"Red and white spherical buoy"}
  },
  {
    q: "What does this mark show?",
    a: "A special mark: a feature in the publications (cable, spoil ground, outfall, exercise area)",
    w: [
      "An isolated danger: a hazard of limited extent with navigable water all round it",
      "A cardinal mark: safe water lies in the quadrant named by the position of the cones",
      "A safe-water mark: mid-channel or landfall, which may be passed on either side"
    ],
    why: "Yellow with a yellow X topmark and a yellow light. It is not primarily a navigational danger mark – read the chart notes.",
    src: "Passage Planning Guide – Special mark",
    vis: {"k":"buoy","t":"special","alt":"Yellow buoy with X topmark"}
  },
  {
    q: "A buoy with blue and yellow vertical stripes and a yellow cross topmark marks…",
    a: "A new, uncharted wreck – do not pass close",
    w: [
      "A swimming area",
      "A seaplane landing area or a prohibited zone",
      "A preferred channel"
    ],
    why: "The emergency wreck marking buoy has alternating blue and yellow vertical stripes, a yellow cross and an alternating blue/yellow light. If you see one that is not on your chart, slow down, keep clear and report it.",
    src: "Passage Planning Guide – Emergency wreck marking",
    vis: {"k":"buoy","t":"wreck","alt":"Blue and yellow striped buoy"}
  },
  {
    q: "What does this mark show?",
    a: "Preferred channel to starboard: the main channel is on the starboard hand, so leave it to port",
    w: [
      "Preferred channel to port: the main channel is on the port hand, so leave it to starboard",
      "An isolated danger mark with navigable water all round it and no preferred side",
      "A cardinal mark showing that the safe water lies on the side of the black cones"
    ],
    why: "Red with a single broad green band and a can topmark (a modified port-hand mark), usually with a red Fl(2+1) light. It marks a junction where the channel divides.",
    src: "Passage Planning Guide – Lateral marks",
    vis: {"k":"buoy","t":"pref_stbd","alt":"Red buoy with green band"}
  },
  {
    q: "What does this mark show?",
    a: "Preferred channel to port: the main channel is on the port hand, so leave it to starboard",
    w: [
      "Preferred channel to starboard: the main channel is on the starboard hand, so leave it to port",
      "A safe-water mark showing the middle of the channel, with navigable water on both sides",
      "An emergency wreck marking buoy showing a new wreck that is not yet on the chart"
    ],
    why: "Green with a single broad red band and a cone topmark (a modified starboard-hand mark), usually with a green Fl(2+1) light.",
    src: "Passage Planning Guide – Lateral marks",
    vis: {"k":"buoy","t":"pref_port","alt":"Green buoy with red band"}
  },
  {
    q: "The “conventional direction of buoyage” is…",
    a: "The direction when approaching a harbour from seaward, or the general direction set by the buoyage authority",
    w: [
      "Always north to south along the coast, whichever direction the vessel is travelling",
      "The direction of the flood stream as it enters the harbour or river mouth at the time of the tide",
      "The direction in which the prevailing wind blows across the entrance on most days"
    ],
    why: "Where it is not obvious it is shown on the chart with a large open arrow.",
    src: "Passage Planning Guide – IALA System"
  },
  {
    q: "What is the difference between a buoy and a beacon?",
    a: "A buoy floats on a mooring; a beacon is fixed to the seabed or land",
    w: [
      "A beacon always shows a light at night; a buoy never shows a light",
      "A buoy is fixed to the seabed; a beacon floats on a mooring chain",
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
    a: "Group flashing 2+1, red, 15 second period, 8 m above MHWS, nominal range 4 nm",
    w: [
      "Group flashing 2+1, red, 15 minute period, 8 m above chart datum, range 4 km",
      "Fixed red light, 15 s, 8 m, 4 nm",
      "Two red flashes then one green every 15 s, range 8 nm"
    ],
    why: "Rhythm, colour, period (s), elevation above mean high water springs (m), nominal range (M, nautical miles). A red Fl(2+1) marks a preferred channel to starboard.",
    src: "Passage Planning Guide – Reading a full light description"
  },
  {
    q: "The “nominal range” of a light is…",
    a: "The distance at which it would be seen in a meteorological visibility of 10 nm",
    w: [
      "The distance to the horizon from the light, for an observer at deck level",
      "The greatest distance at which the light can ever be seen on a clear night",
      "The distance at which the colour of the light can first be identified at sea"
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
      "Red group flashing (2), the same as for a preferred-channel mark to starboard",
      "Yellow flashing at any rate, which is used for special marks and exercise areas",
      "Green quick flashing, as for starboard-hand marks in a busy channel entrance"
    ],
    why: "Isolated danger shows white Fl(2); special marks show yellow; lateral marks red or green; cardinals white quick/very quick.",
    src: "Passage Planning Guide – Buoyage"
  },
  {
    q: "Which colour of light is shown by a special mark?",
    a: "Yellow",
    w: [
      "White or blue",
      "Blue",
      "Red"
    ],
    why: "Special marks are yellow with a yellow X topmark and a yellow light of any rhythm not used for white lights.",
    src: "Passage Planning Guide – Buoyage"
  },
  {
    q: "You are on a leading line. The front (lower) mark appears to the RIGHT of the rear mark. You are…",
    a: "To starboard of the line: alter to starboard to bring the marks into line",
    w: [
      "To port of the line, so you should alter to port to bring the marks into line",
      "Exactly on the line, so you hold your course and speed as you were steering",
      "To starboard of the line, so you should alter to port to bring the marks back"
    ],
    why: "Alter in the direction the front mark has moved. The front mark is nearer and moves faster for a given displacement, so the correction is usually small.",
    src: "Passage Planning Guide – Leading lights and marks"
  },
  {
    q: "While following a sectored light you see it change from white to red. This means…",
    a: "You have strayed to one side of the white sector: alter back until white returns",
    w: [
      "You are in the deepest part of the channel, so you hold your present course",
      "The light has been extinguished and a standby light has been switched on instead",
      "You must alter away from the white sector to stay clear of the red or green"
    ],
    why: "The white sector covers the safe approach; red and green sectors cover the dangers either side. Sector bearings are read from seaward off the chart during planning.",
    src: "Passage Planning Guide – Light colours and sectors"
  },
  {
    q: "The light you expected does not appear when it should. Which is NOT a plausible explanation?",
    a: "The light is always visible at its full nominal range whatever the weather",
    w: [
      "Visibility is worse than you assessed, haze or rain having cut the range",
      "You are not where you think you are, so the light has not yet come up",
      "The light is not working and a defect notice will need to be raised"
    ],
    why: "Non-appearance is information: poor visibility, wrong position or a failed light. Each needs action – slow down and resolve it, and report a faulty light at the end of the passage.",
    src: "Passage Planning Guide – Light ranges"
  },
  {
    q: "Why is it unwise to plot a fix from a charted buoy symbol on a small-scale chart?",
    a: "The symbol may be displaced from the true position, and the buoy swings on its mooring",
    w: [
      "Buoys are always positioned exactly under the symbol on a small-scale chart, so there is no problem",
      "Charts never show buoys, only the beacons and lighthouses along the coast",
      "Buoys do not have a unique position, so the chart leaves them out altogether"
    ],
    why: "On a small-scale chart the buoy symbol may be offset from the danger it marks. Fix from fixed marks (beacons, lighthouses, charted landmarks) in preference.",
    src: "Passage Planning Guide – Light ranges"
  },
  {
    q: "What is the best way to avoid mis-identifying a mark in pilotage?",
    a: "State its identity aloud (shape, colour, number, light) and check it against the chart",
    w: [
      "Assume it is the next mark on the chart, since the marks are in order along the track",
      "Identify it by its colour alone, as the colour is the first thing seen at a distance",
      "Rely on the chart plotter symbol and not look out of the window for the mark"
    ],
    why: "A substantial proportion of pilotage errors are misidentification – one beacon taken for another, or a mooring buoy for a channel mark. Saying it aloud lets the crew challenge it.",
    src: "Passage Planning Guide – Basic pilotage techniques"
  },
  {
    q: "What should you do if a mark is missing, off station, or does not match its charted description?",
    a: "Slow down and resolve it (chart uncorrected? position wrong?), then report it",
    w: [
      "Ignore it, since marks are often moved and the chart is generally right",
      "Assume the chart is correct and the mark is wrong, and carry on as planned",
      "Increase speed to clear the area before the visibility or the light gets worse"
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

