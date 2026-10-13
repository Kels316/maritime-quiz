/* Question data – nav. Fields: q, a (correct), w (3 wrong options), why, src, vis (optional). */
MQ.add("nav", [
  {
    q: "On a Mercator chart a straight line between two points is…",
    a: "A rhumb line – a line of constant true course",
    w: [
      "A great circle – the shortest distance between two points",
      "A line of constant magnetic variation",
      "A line of constant latitude"
    ],
    why: "Mercator keeps shapes and directions true, so a straight line gives direction and distance and can be steered on a constant compass course. Over near-coastal distances rhumb line and great circle are practically identical.",
    src: "Passage Planning Guide – Mercator chart"
  },
  {
    q: "On a gnomonic chart a straight line is…",
    a: "A great circle – the shortest distance between two points",
    w: [
      "A rhumb line, which crosses every meridian at the same angle",
      "A line of constant bearing as seen from a vessel steering a compass course",
      "A line of equal depth joining the sounding points on the sheet"
    ],
    why: "Gnomonic charts are used at large scale for harbour plans, and for great-circle route planning, where the great circle is transferred to Mercator charts as rhumb-line legs.",
    src: "Passage Planning Guide – Gnomonic projection"
  },
  {
    q: "Which chart has the LARGER scale?",
    a: "1:12,500",
    w: [
      "1:150,000",
      "1:1,000,000",
      "1:10,000,000"
    ],
    why: "The smaller the second number, the larger the scale. Large scale = small area in fine detail. Always plan harbour approaches and bars on the largest-scale chart available.",
    src: "Passage Planning Guide – Chart categories and scale"
  },
  {
    q: "What is chart datum on Australian charts?",
    a: "Lowest Astronomical Tide (LAT)",
    w: [
      "Mean sea level",
      "Mean low water springs",
      "Mean high water springs (MHWS)"
    ],
    why: "Soundings are measured down from LAT. Because it is chosen low, the height of tide is almost always a positive number added to the charted depth. (Heights of lights, bridges and clearances are referred to MHWS.)",
    src: "Passage Planning Guide – Chart datum"
  },
  {
    q: "Chart corrections from a Notice to Mariners are made in…",
    a: "Magenta (violet) ink, never pencil, and the Notice number is logged at bottom left",
    w: [
      "Soft pencil, so that they can be rubbed out when a later Notice supersedes them",
      "Red ink, with the date of the correction written on the front of the chart",
      "Black pen, with the correction noted only in the log and not on the chart"
    ],
    why: "Pencil is used only for preliminary (P) and temporary (T) notices that will later be cancelled or made permanent. Electronic charts are corrected by installing update files, which is not automatic.",
    src: "Passage Planning Guide – Applying chart corrections"
  },
  {
    q: "Australian Notices to Mariners are published…",
    a: "Fortnightly by the Australian Hydrographic Office, free online",
    w: [
      "Monthly by the Bureau of Meteorology, as a paid subscription service for vessels",
      "Annually, bound in with the tide tables for the following year",
      "Daily by each state maritime authority, and by email to registered vessels"
    ],
    why: "State and port authorities also issue local notices (dredging, moved channel markers, temporary restrictions) that may not appear in the national set.",
    src: "Passage Planning Guide – Sourcing corrections"
  },
  {
    q: "A chart is “current” only if…",
    a: "It is the current edition, all Notices to Mariners are applied and local notices considered",
    w: [
      "It was printed this year and has no pencil marks or coffee stains on its face or edges",
      "It has the correct scale printed on it and all of its margins are intact",
      "It has been signed by the skipper at the start of the season for the flotilla"
    ],
    why: "An uncorrected chart can show a light that no longer exists, a moved beacon or a depth that has shoaled. If you cannot confirm a chart is corrected, treat every mark as unverified, reduce speed and use the echo sounder continuously.",
    src: "Passage Planning Guide – Checking a chart for currency"
  },
  {
    q: "A chart showing the abbreviation Mag Anomaly means…",
    a: "Don't fix by compass bearing there; use radar ranges, transits or a confirmed GPS position",
    w: [
      "Magnetic variation is zero throughout the area shown on that particular chart, so no correction is needed",
      "A magnetic buoy has been moored in the area as an aid for compass swinging",
      "Variation changes by about one degree each year, so apply the new figure"
    ],
    why: "Local geology can disturb compass readings by many degrees.",
    src: "Passage Planning Guide – Reading a chart"
  },
  {
    q: "The Zone of Confidence (ZOC) diagram on a chart tells you…",
    a: "How reliable the survey data is in each area, graded A1, A2, B, C, D (U = unassessed)",
    w: [
      "How deep the water is in each area, graded from shallow to deep with colours",
      "Where the tidal streams are strongest, graded A1 to D from spring to neap rates",
      "Which areas are subject to traffic reporting, graded by the port authority"
    ],
    why: "The most important of the four criteria is seafloor coverage, because it determines whether an uncharted obstruction could have been missed. Increase clearances in poorly assessed areas.",
    src: "Passage Planning Guide – Reading a chart"
  },
  {
    q: "Which statement about chart symbols is correct?",
    a: "Heights and clearances are above MHWS; drying heights are underlined and above chart datum",
    w: [
      "All heights and depths are measured from chart datum, whether they are above or below",
      "Drying heights are measured from MHWS and are shown underlined on the chart",
      "Overhead clearances are measured above mean sea level at the time of the survey"
    ],
    why: "Also: the position of a sounding is the centre of the figures, and bearings are given from seaward in true. Chart 5011 (INT 1) is the symbols booklet and should be on the chart table.",
    src: "Passage Planning Guide – Chart symbols and abbreviations"
  },
  {
    q: "A charted depth of 10⁷ on a metric chart means…",
    a: "10.7 metres below chart datum",
    w: [
      "107 metres below chart datum",
      "10 metres 7 feet",
      "10.7 fathoms"
    ],
    why: "On metric charts depths under 21 m show metres and decimetres. On old fathom charts 8⁵ would be 8 fathoms 5 feet – a factor-of-six trap. Always read the units under the title.",
    src: "Passage Planning Guide – Reading a chart"
  },
  {
    q: "A submarine cable is charted across your intended anchorage. You should…",
    a: "Choose another anchorage: charted cable and pipeline areas are prohibited for anchoring",
    w: [
      "Anchor just clear of the dotted line, because the charted position is only approximate",
      "Anchor on the line itself, because a cable is probably buried well below the seabed",
      "Anchor there only if the weather is calm and you have a crew member on watch"
    ],
    why: "An anchor dropped on a power cable can electrocute the crew recovering it. The charted position is approximate, so keep well clear.",
    src: "Passage Planning Guide – Tidal streams, currents and disturbed water"
  },
  {
    q: "On a chart, which seabed generally gives the poorest holding?",
    a: "Weed: the anchor rests in the mat and does not reach the bottom",
    w: [
      "Stiff mud, which grips the flukes firmly but is slow to break out",
      "Firm sand, which allows the flukes to bury but drags under high loads",
      "Clay, which holds well but fouls the anchor on a hard turn of the tide"
    ],
    why: "Mud, clay and sand generally hold well. Fine sand (fS) drags under load; rock, coral and stones may hold immovably or not at all and foul the anchor. Choose an anchorage on bottom type and shelter, not on where other vessels lie.",
    src: "Passage Planning Guide – Nature of the seabed"
  },
  {
    q: "How is distance measured on a chart?",
    a: "With dividers against the latitude scale at the side, near the area of interest",
    w: [
      "With dividers against the longitude scale at the top, near the area of interest",
      "With a parallel rule set to the compass rose at the centre of the chart sheet",
      "By counting the grid squares and multiplying by the number of miles in each"
    ],
    why: "One minute of latitude is one nautical mile (1852 m). One minute of longitude equals a mile only at the equator – measuring against it makes distances look too big.",
    src: "Passage Planning Guide – Measuring distance"
  },
  {
    q: "A GPS shows 34° 50.697′ S. A position written as 34° 50′ 42″ S is…",
    a: "The same position, written in degrees, minutes and seconds",
    w: [
      "About half a mile away from the first position, in a northerly direction",
      "The same latitude, but the position is in the northern hemisphere",
      "Not a valid latitude, because seconds are not used in modern navigation"
    ],
    why: "0.697′ × 60 = 41.8″ ≈ 42″. But 34° 50.42′ is a different place (about half a mile away). Check the receiver format against the chart before plotting; set it to degrees, minutes and decimal minutes and leave it there.",
    src: "Passage Planning Guide – Latitude and longitude"
  },
  {
    q: "A nautical mile is…",
    a: "1852 metres",
    w: [
      "1609 metres",
      "1000 metres",
      "1760 metres"
    ],
    why: "A knot is one nautical mile per hour. A cable is one tenth of a nautical mile (about 185 m).",
    src: "Passage Planning Guide – Latitude and distance"
  },
  {
    q: "What does a DR (dead reckoning) position take into account?",
    a: "Only true course steered and distance run through the water, not tide, current or leeway",
    w: [
      "Course, distance run, and the effect of the tidal stream during the period of the run",
      "The tidal stream only, with the course and distance taken from the log",
      "The GPS course over the ground and the speed over the ground at that time"
    ],
    why: "DR (cross with time) < EP (dot in a triangle, adjusted for set, drift and leeway) < Fix (dot in a circle, two or more position lines). When reporting a position, say which of the three it is.",
    src: "Passage Planning Guide – DR, EP and fix"
  },
  {
    q: "Which symbol is used for a fix on a chart?",
    a: "A dot in a circle, with the time",
    w: [
      "A cross with the time",
      "A dot in a triangle with the time",
      "A square with the time"
    ],
    why: "British Admiralty convention: DR = cross; EP = dot in triangle; fix = dot in circle. Course = single arrowhead; track = double; set and drift = triple.",
    src: "Passage Planning Guide – Chartwork conventions"
  },
  {
    q: "When should a DR position be plotted?",
    a: "At least hourly, after any change of course or speed, and after every fix",
    w: [
      "Only when the GPS has failed and no electronic position is available",
      "Only at the start of each leg, once the vessel has settled on its course",
      "Every six hours, to match the changeover of the watches on board"
    ],
    why: "And reset the DR to each fix by running the new course line from the fix, not from the old DR.",
    src: "Passage Planning Guide – When to plot a DR position"
  },
  {
    q: "How do you find set and drift?",
    a: "Compare the DR with a fix for the same time: set is the direction DR→fix, drift is distance ÷ time",
    w: [
      "Read them directly from the log, which measures the water speed and direction for you",
      "Compare the compass with the GPS heading when a strong tide is running",
      "Subtract the speed over the ground from the speed through the water only"
    ],
    why: "No instrument measures the combined effect of stream, current and leeway directly. Apply the figure as an allowance on the next leg and check at the next fix.",
    src: "Passage Planning Guide – Course and speed terminology"
  },
  {
    q: "What is “course made good” (CMG)?",
    a: "The direction of the line joining two successive fixes",
    w: [
      "The direction you set on the compass",
      "The direction the bow is pointing at the moment of the fix",
      "The direction shown by the autopilot"
    ],
    why: "Course to steer is what you set; heading is where the bow points; CMG/COG is what you achieve over the ground. SMG (speed made good) is distance between fixes ÷ time – use it to recalculate ETAs.",
    src: "Passage Planning Guide – Course and speed terminology"
  },
  {
    q: "A 2-knot cross-stream acts on a vessel making 10 knots. About how far off track will it push you?",
    a: "About 11° off the intended track",
    w: [
      "About 2° off track",
      "About 45° off track",
      "It will not affect the track at all"
    ],
    why: "tan⁻¹(2/10) ≈ 11°. Hold a compass course without monitoring position and the error accumulates the whole way.",
    src: "Passage Planning Guide – Tidal streams"
  },
  {
    q: "Variation is…",
    a: "The angle between true and magnetic north at a place and time, from the chart compass rose",
    w: [
      "The angle between magnetic north and compass north, caused by the vessel and read from the card",
      "The error in the gyro compass caused by acceleration and latitude, as found on the card",
      "The change in the compass reading when the helm is put hard over at speed"
    ],
    why: "Deviation is the vessel-caused angle between magnetic north and compass north and depends on the ship's head; it comes from the deviation card. Compass error = variation + deviation.",
    src: "Passage Planning Guide – Three norths"
  },
  {
    q: "Deviation on a magnetic compass changes with…",
    a: "The ship's head",
    w: [
      "The time of day",
      "The depth of water",
      "The height of tide"
    ],
    why: "It is caused by the vessel's own magnetism, which turns with the vessel. Use the deviation for the ship's head at the moment the bearing was taken – not for the bearing itself.",
    src: "Passage Planning Guide – Compass errors"
  },
  {
    q: "Variation 7°E and deviation 2°W give a compass error of…",
    a: "5°E",
    w: [
      "9°E",
      "9°W",
      "5°W"
    ],
    why: "Opposite names subtract, and the result takes the name of the larger. “Compass least, error east.”",
    src: "Passage Planning Guide – Combining variation and deviation"
  },
  {
    q: "Going from true to compass (uncorrecting), you…",
    a: "Subtract easterly errors and add westerly errors",
    w: [
      "Add easterly errors and subtract westerly errors",
      "Add all errors",
      "Subtract all errors"
    ],
    why: "From compass towards true (correcting) it is the reverse: add east, subtract west. Mnemonic: “Can Dead Men Vote Twice, At Elections” – Compass, Deviation, Magnetic, Variation, True; Add East. Always run the reverse check.",
    src: "Passage Planning Guide – Converting between true, magnetic and compass"
  },
  {
    q: "You take a bearing with a hand-bearing compass held well clear of the vessel's ironwork. Which correction do you apply?",
    a: "Variation only",
    w: [
      "Variation and deviation",
      "Deviation only",
      "No correction"
    ],
    why: "A hand-bearing compass clear of ironwork is not subject to the vessel's deviation. If you use the azimuth ring on the steering compass, the deviation for the ship's head applies as well.",
    src: "Passage Planning Guide – Taking a bearing: which error to apply"
  },
  {
    q: "What is the best way to check the steering compass for error?",
    a: "By transit: compare the compass bearing of two charted marks in line with the true bearing",
    w: [
      "By comparing it with the GPS heading in a strong tide, as both read the same",
      "By checking it against the autopilot heading display while steering a steady course",
      "By swinging the vessel once in port and reading the lubber line against the card"
    ],
    why: "A transit involves no instrument so it is the most accurate position line available. Record the observed error with date, heading and method, and compare it with the card; a discrepancy over about 1° needs explaining.",
    src: "Passage Planning Guide – Checking the compass for error"
  },
  {
    q: "Which of these placed next to the steering compass can change its deviation?",
    a: "A mobile phone, handheld radio, torch or tin of drink",
    w: [
      "A plastic chart ruler or a wooden pencil",
      "A cotton lifejacket",
      "A rope fender"
    ],
    why: "A phone left on the console can produce tens of degrees of error. The change is not recorded on the deviation card, so it will not be allowed for. Brief all crew.",
    src: "Passage Planning Guide – Fitting, care and maintenance of the compass"
  },
  {
    q: "A gyro compass differs from a magnetic compass because it…",
    a: "It seeks true north, so needs no corrections, but needs power and time to settle",
    w: [
      "It points to magnetic north without any power, as a magnetic compass does",
      "It needs a deviation card for every heading, as the magnetic compass does",
      "It is unaffected by a loss of power and continues to work on its own flywheel"
    ],
    why: "The satellite compass derives heading from multiple GNSS antennas and has no variation or deviation – but depends on satellite reception and power, so the magnetic compass remains the fallback.",
    src: "Passage Planning Guide – Other types of compass"
  },
  {
    q: "Variation and deviation correct…",
    a: "Directions (courses and bearings), but never a latitude and longitude",
    w: [
      "Positions as well as bearings, so that the GPS fix is shifted by the variation",
      "Only courses and not bearings, which must be corrected by a separate card",
      "Only GPS positions, since a magnetic compass reads directly in true"
    ],
    why: "A GPS position needs no variation correction. The only correction a position may need is a datum shift if the chart is drawn to a different horizontal datum.",
    src: "Passage Planning Guide – Converting between true, magnetic and compass"
  },
  {
    q: "For a two-bearing fix, the best angle between the bearings is…",
    a: "About 90° (60–120° is acceptable)",
    w: [
      "About 10°",
      "About 180° (opposite bearings)",
      "Exactly 0°"
    ],
    why: "Shallow-angle cuts give poor fixes. For three bearings choose objects about 60° apart and well spread.",
    src: "Passage Planning Guide – Taking and plotting a visual bearing"
  },
  {
    q: "When taking three bearings in quick succession, which object do you take last?",
    a: "The one whose bearing is changing fastest, usually the nearest or closest to abeam",
    w: [
      "The most distant one, since its bearing changes least while the others are taken",
      "The one closest to dead ahead, because a bearing from the bow is easiest to read",
      "The one with the lowest bearing, since that makes it quickest to lay off"
    ],
    why: "It changes most in the time the other bearings take, so take it last to keep it nearest in time to the fix.",
    src: "Passage Planning Guide – Taking and plotting a visual bearing"
  },
  {
    q: "Three bearings form a small “cocked hat”. Where do you take your position if a danger lies nearby?",
    a: "At the corner of the triangle nearest the danger",
    w: [
      "At the centre of the triangle",
      "At the corner of the triangle furthest from the danger",
      "On the longest side"
    ],
    why: "This assumes the worst case. A large cocked hat means a fault – misidentified object, wrong-way error, or a magnetic anomaly – so retake the bearings.",
    src: "Passage Planning Guide – Taking and plotting a visual bearing"
  },
  {
    q: "You are on a leading line. How do you turn this one position line into a fix?",
    a: "Cross it with a second position line, e.g. a beam bearing, radar range or soundings",
    w: [
      "It is already a fix, because the two marks give position along the whole line",
      "Add a DR position from the last waypoint and treat the intersection as the fix",
      "Take a second bearing of the front mark with the hand-bearing compass alone"
    ],
    why: "A transit tells you that you are somewhere on the line, not how far along it. The same applies to a clearing bearing or a sectored light: one position line is never a fix.",
    src: "Passage Planning Guide – Fixing while on a leading line"
  },
  {
    q: "A running fix is made by…",
    a: "Moving the first position line along the course by the distance run, then crossing it with a second bearing",
    w: [
      "Taking one bearing of a mark and one GPS position taken at the same instant",
      "Taking two bearings of two different marks at exactly the same moment in time",
      "Using one depth contour and one sounding taken half an hour later on a different course and speed"
    ],
    why: "Errors in the course steered, tidal set and leeway go straight into the answer, so treat it as a good EP rather than a true fix. Transfer for the track made good where the stream is known.",
    src: "Passage Planning Guide – The running fix"
  },
  {
    q: "Why is a radar range generally better than a radar bearing for a fix?",
    a: "Radar measures distance very precisely, but bearings are limited by beam width",
    w: [
      "Radar bearings are always magnetic, so they must be converted before plotting",
      "Radar range does not depend on the aerial, so it can be read without it turning",
      "Radar ranges can be taken without a target, using only the sea clutter echoes"
    ],
    why: "A three-range fix is markedly better than a three-bearing radar fix. Use bearings only to identify targets.",
    src: "Passage Planning Guide – Radar"
  },
  {
    q: "Which pilotage technique gives a range from a single object using only the bow angle?",
    a: "Doubling the angle on the bow: distance run equals distance off at the second sighting",
    w: [
      "Rising and dipping, which gives the range as a light appears over the horizon at night",
      "A clearing bearing, which keeps the object at a fixed angle from the bow",
      "A head mark, which keeps the bow pointing at a single charted object"
    ],
    why: "Note the relative bearing, run until it has doubled, and the distance run is the distance off the object at that moment.",
    src: "Passage Planning Guide – Other pilotage techniques"
  },
  {
    q: "An error of 1° in a bearing displaces the position line by about…",
    a: "100 metres at 1 nm range",
    w: [
      "10 metres at 1 nm range",
      "1 nm at 1 nm range",
      "1 km at 1 nm range"
    ],
    why: "About half a mile at 30 nm. So prefer near objects and fixed marks to distant ones and floating ones.",
    src: "Passage Planning Guide – Position fixing"
  },
  {
    q: "A clearing bearing is…",
    a: "A bearing of a charted object which, kept on the safe side of a figure, keeps you clear of a danger",
    w: [
      "A bearing used to calibrate the steering compass against a transit",
      "The bearing of the next waypoint on the plan, as seen from the last fix",
      "A bearing taken with radar only, in conditions where visual bearings are impossible to take"
    ],
    why: "E.g. “keep the lighthouse bearing more than 285°T to clear the reef”. A clearing line can also be a depth contour, transit or range.",
    src: "Passage Planning Guide – Clearing bearings"
  },
  {
    q: "Your GPS receiver uses WGS84 but the chart is drawn to AGD66. Plotting the raw GPS position will place you about…",
    a: "200 metres from where you really are, in a consistent direction",
    w: [
      "2 nautical miles from where you really are, in a random direction each time",
      "Exactly right, because GPS positions are always accurate on any chart",
      "About 20 metres from where you really are, which is within normal GPS error"
    ],
    why: "Modern charts state WGS84/GDA (no shift) or the correction for satellite positions. Set the receiver's datum to match the chart and check it pre-departure – it is a menu item that can change inadvertently.",
    src: "Passage Planning Guide – Horizontal datums"
  },
  {
    q: "What does a high HDOP (horizontal dilution of precision) figure mean?",
    a: "The satellite geometry is poor and the position is less accurate than usual",
    w: [
      "The receiver has the best possible fix and is tracking all the satellites",
      "More than twelve satellites are being tracked and the signal is very strong",
      "The receiver is set to the correct datum and the chart has been corrected"
    ],
    why: "A low number is good. Check satellites tracked, HDOP and any warning flag before accepting a fix.",
    src: "Passage Planning Guide – Errors in a GPS position"
  },
  {
    q: "What is the fundamental rule guarding against GPS dangers?",
    a: "Never navigate on a single source: confirm every fix by an independent method",
    w: [
      "Trust the plotter if it is tracking more than eight satellites at once",
      "Use the GPS only in daylight, when the marks can also be seen from the deck",
      "Always enter waypoints from memory, since the plotter's list can be corrupted"
    ],
    why: "Independent means genuinely different: a visual bearing or transit, radar range, echo sounder against charted depth, or looking out of the window. The plotter, radar overlay, autopilot track and AIS are often all driven by the same GPS receiver and will all agree even if it is wrong.",
    src: "Passage Planning Guide – GPS: what it does well and where it fails"
  },
  {
    q: "Which is the most common serious GPS error?",
    a: "Human error entering waypoints (transposed digits, minutes read as seconds, south as north)",
    w: [
      "Satellite failure, which switches the whole constellation off for several hours",
      "Solar flares, which regularly make the plotter show positions in the wrong ocean altogether",
      "Receiver overheating on a hot day in direct sunlight at the helm"
    ],
    why: "A wrongly entered waypoint will be followed faithfully into shallow water. Verify the route against the paper plot leg by leg – course and distance – before departure.",
    src: "Passage Planning Guide – GPS dangers"
  },
  {
    q: "Which is a limitation of an electronic charting system (ECS)?",
    a: "Over-zooming can imply detail the survey lacks, and decluttering can hide soundings and marks",
    w: [
      "It is always legally equivalent to the paper chart for the whole passage",
      "It does not need updating because it corrects itself when it is online",
      "It cannot show the position of the vessel when she is moving at less than three knots"
    ],
    why: "An ECS is an aid, not a type-approved ECDIS. It needs updating exactly as a paper chart does, and the update date should be checked pre-departure.",
    src: "Passage Planning Guide – Electronic charting systems"
  },
  {
    q: "Why does an echo sounder's transducer offset matter?",
    a: "The reading may be from transducer, keel or waterline: know which, and set the alarm accordingly",
    w: [
      "It only matters in fresh water, where the sound travels differently",
      "It changes the speed of sound in the water between the vessel and the seabed",
      "It sets the height of tide automatically, so the screen shows the charted depth at all times"
    ],
    why: "A dense bait-fish layer, aerated water, weed or soft mud can also give a reading that is not the seabed.",
    src: "Passage Planning Guide – Echo sounder"
  },
  {
    q: "The shallow-water alarm sounds. Your first actions are to…",
    a: "Reduce speed, determine your position, and alter into deeper water, normally back along your track",
    w: [
      "Silence the alarm, note the depth in the log, and continue on the same heading and speed",
      "Increase speed to clear the shoal as quickly as the engine will allow",
      "Reset the alarm to a lower depth so that it stops sounding in these waters"
    ],
    why: "Correct sequence for any alarm: acknowledge, identify the cause, take action, then reset. If an alarm triggers spuriously, change the threshold to a correct value and record it – don't disable it. A silenced depth alarm has preceded many groundings.",
    src: "Passage Planning Guide – Proximity and other alarms"
  },
  {
    q: "Your cross-track-error alarm sounds. You should…",
    a: "Find out why (set, steering error, wrong waypoint) and regain the track or replan",
    w: [
      "Switch the autopilot to track mode and ignore the alarm until the next leg",
      "Turn the alarm radius up so that it no longer sounds on the present leg",
      "Wait for the next waypoint alarm, which will confirm that you are on the track"
    ],
    why: "XTE shows the perpendicular distance from the planned leg. Set the alarm to a value suited to the width of safe water.",
    src: "Passage Planning Guide – Proximity and other alarms"
  },
  {
    q: "Which statement about VHF Channel 70 is correct?",
    a: "It is for Digital Selective Calling only, and is never used for voice",
    w: [
      "It is the international voice distress channel, monitored by all vessels",
      "It is the working channel used by Coast Guard bases for routine radio checks",
      "It is used for the broadcast of weather and navigational warnings by the coast stations"
    ],
    why: "Channel 16 (156.8 MHz) is the international voice distress, safety and calling channel. After a DSC alert on Ch 70 the voice traffic follows on Ch 16. On 27 MHz, channel 88 is the distress and calling channel and 91 is used for supplementary safety traffic.",
    src: "Passage Planning Guide – Radio equipment"
  },
  {
    q: "When doing a radio operational check before departure, you should…",
    a: "Radio check with base on a working channel, not Channel 16, and log it",
    w: [
      "Do it on Channel 16 so that every vessel in range can confirm that it works",
      "Press the DSC distress button briefly to see that the alert goes out",
      "Skip it if the radio powered up and showed the normal display on the panel"
    ],
    why: "Never press the DSC distress button to “see if it works” – it starts a real response. Use the self-test function or an individual DSC test call to a station that has agreed.",
    src: "Passage Planning Guide – The radio operational check"
  },
  {
    q: "How should the autopilot be used?",
    a: "As a steering aid you can disengage instantly, with lookout and position checks unchanged",
    w: [
      "As a substitute for a lookout in open water, if the radar guard zone is set",
      "Only with the radar guard zones set to zero and the alarms switched off",
      "Engaged whenever the helmsman is tired, with nobody else left on watch at the helm or the radar"
    ],
    why: "Every watchkeeper must be practised at the “standby” switch. It steers a heading; it does not navigate.",
    src: "Passage Planning Guide – Autopilot"
  },
  {
    q: "Radar is poor at detecting…",
    a: "Small wooden, fibreglass and inflatable craft, low land and unlit beacons, especially in sea clutter",
    w: [
      "Large steel ships, which return a strong echo at long range even in rain",
      "Vessels carrying an effective radar reflector, large steel ships and high headlands, which return strong echoes",
      "Steep headlands and high cliffs, which show up clearly at long range"
    ],
    why: "Rain and sea clutter can hide contacts; shadow sectors behind the mast leave unswept arcs. Radar supplements a visual lookout and never replaces it.",
    src: "Passage Planning Guide – Radar"
  }
]);

