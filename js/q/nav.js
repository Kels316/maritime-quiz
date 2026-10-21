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
      "A line of constant bearing for a vessel steering a compass course",
      "A line of equal depth joining soundings of the same value"
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
    a: "Magenta ink, never pencil, with the Notice number recorded at bottom left",
    w: [
      "Soft pencil, so that they can be erased if a Notice is cancelled",
      "Red ink, with the date of the correction written on the chart",
      "Black pen, with the correction noted only in the vessel's log"
    ],
    why: "Pencil is used only for preliminary (P) and temporary (T) notices that will later be cancelled or made permanent. Electronic charts are corrected by installing update files, which is not automatic.",
    src: "Passage Planning Guide – Applying chart corrections"
  },
  {
    q: "Australian Notices to Mariners are published…",
    a: "Fortnightly by the Australian Hydrographic Office, free online",
    w: [
      "Monthly by the Bureau of Meteorology, as a paid subscription",
      "Annually, bound in with the Australian National Tide Tables",
      "Daily by each state maritime authority, to registered vessels"
    ],
    why: "State and port authorities also issue local notices (dredging, moved channel markers, temporary restrictions) that may not appear in the national set.",
    src: "Passage Planning Guide – Sourcing corrections"
  },
  {
    q: "A chart is “current” only if…",
    a: "It is the current edition, with all Notices to Mariners applied and local notices checked",
    w: [
      "It was printed this year and carries no pencil marks on its face",
      "It carries the correct scale and all of its margins are intact",
      "The skipper has signed it at the start of the season"
    ],
    why: "An uncorrected chart can show a light that no longer exists, a moved beacon or a depth that has shoaled. If you cannot confirm a chart is corrected, treat every mark as unverified, reduce speed and use the echo sounder continuously.",
    src: "Passage Planning Guide – Checking a chart for currency"
  },
  {
    q: "A chart carries the note “Mag Anomaly”. What should you do there?",
    a: "Not fix by compass bearing; use radar ranges, transits or a checked GPS position",
    w: [
      "Assume variation is zero throughout the area shown on the chart",
      "Steer well clear of a magnetic buoy that is moored in the area",
      "Apply the annual change in variation twice to each compass bearing"
    ],
    why: "Mag Anomaly warns that local geology can disturb compass readings by many degrees. Don't fix by compass bearing there; use radar ranges, transits, or a GPS position confirmed visually.",
    src: "Passage Planning Guide – Reading a chart"
  },
  {
    q: "The Zone of Confidence (ZOC) diagram on a chart tells you…",
    a: "How reliable the survey data is in each area (A1, A2, B, C, D; U = unassessed)",
    w: [
      "How deep the water is in each area, shown in grades from A1 to D",
      "Where the tidal streams are strongest, shown from spring to neap rates",
      "Which areas need traffic reports, as graded by the port authority"
    ],
    why: "The most important of the four criteria is seafloor coverage, because it determines whether an uncharted obstruction could have been missed. Increase clearances in poorly assessed areas.",
    src: "Passage Planning Guide – Reading a chart"
  },
  {
    q: "Which statement about chart symbols is correct?",
    a: "Heights and clearances are above mean high water springs (MHWS); drying heights are underlined, above chart datum",
    w: [
      "All heights and depths are measured from chart datum",
      "Drying heights are measured from MHWS and are shown underlined",
      "Overhead clearances are measured above mean sea level at the survey date"
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
    a: "Choose another anchorage; cable and pipeline areas are prohibited",
    w: [
      "Anchor just clear of the charted line, as its position is approximate",
      "Anchor on the line itself, as a cable is probably buried",
      "Anchor there only if the weather is calm and a watch is kept"
    ],
    why: "An anchor dropped on a power cable can electrocute the crew recovering it. The charted position is approximate, so keep well clear.",
    src: "Passage Planning Guide – Tidal streams, currents and disturbed water"
  },
  {
    q: "On a chart, which seabed generally gives the poorest holding?",
    a: "Weed – the anchor rests in the mat and may not reach the bottom",
    w: [
      "Stiff mud, which grips the flukes but is slow to break out",
      "Firm sand, which lets the flukes bury but may drag under high loads",
      "Clay, which holds well but may foul the anchor on a hard turn of tide"
    ],
    why: "Mud, clay and sand generally hold well. Fine sand (fS) drags under load; rock, coral and stones may hold immovably or not at all and foul the anchor. Choose an anchorage on bottom type and shelter, not on where other vessels lie.",
    src: "Passage Planning Guide – Nature of the seabed"
  },
  {
    q: "How is distance measured on a chart?",
    a: "With dividers against the latitude scale at the side of the chart",
    w: [
      "With dividers against the longitude scale at the top",
      "With a parallel rule on the compass rose",
      "By counting grid squares"
    ],
    why: "One minute of latitude is one nautical mile (1852 m). One minute of longitude equals a mile only at the equator – measuring against it makes distances look too big.",
    src: "Passage Planning Guide – Measuring distance"
  },
  {
    q: "A GPS shows 34° 50.697′ S. A position written as 34° 50′ 42″ S is…",
    a: "The same position, written in degrees, minutes and seconds",
    w: [
      "About half a mile north of the first position",
      "In the northern hemisphere, not the southern",
      "Not a valid position, because seconds are no longer used"
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
    q: "A dead reckoning (DR) position takes into account…",
    a: "Only the true course steered and the distance run through the water",
    w: [
      "The course, the distance run and the effect of the tidal stream",
      "The tidal stream only, with course and distance taken from the log",
      "The GPS course and speed over the ground at that time"
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
    q: "When should a dead reckoning (DR) position be plotted?",
    a: "At least hourly, after every change of course or speed, and after every fix",
    w: [
      "Only when the GPS has failed and no electronic position is available",
      "Only at the start of each leg, once the vessel has settled on course",
      "Every six hours, to match the changeover of the watches on board"
    ],
    why: "And reset the DR to each fix by running the new course line from the fix, not from the old DR.",
    src: "Passage Planning Guide – When to plot a DR position"
  },
  {
    q: "How do you find set and drift?",
    a: "Compare the dead reckoning (DR) position with a fix for the same time: set is the direction DR to fix, drift is distance ÷ time",
    w: [
      "Read them directly from the log, which measures water speed and direction",
      "Compare the compass with the GPS heading while a strong tide is running",
      "Subtract the speed over the ground from the speed through the water"
    ],
    why: "No instrument measures the combined effect of stream, current and leeway directly. Apply the figure as an allowance on the next leg and check at the next fix.",
    src: "Passage Planning Guide – Course and speed terminology"
  },
  {
    q: "What is “course made good” (CMG)?",
    a: "The direction of the line joining two successive fixes",
    w: [
      "The direction you set on the compass and hold",
      "The direction the bow is pointing at the moment of the fix",
      "The direction shown by the autopilot display at that time"
    ],
    why: "Course to steer is what you set; heading is where the bow points; CMG/COG is what you achieve over the ground. SMG (speed made good) is distance between fixes ÷ time – use it to recalculate ETAs.",
    src: "Passage Planning Guide – Course and speed terminology"
  },
  {
    q: "A tidal stream is pushing your vessel sideways across your track. If you steer a compass course and never check your position, what happens to the error?",
    a: "It builds up the whole way, so you end up well off track",
    w: [
      "It cancels itself out over a long passage",
      "It stays the same size however far you go",
      "It only matters in the last mile"
    ],
    why: "A cross-stream sets you off your intended track continuously, so the error accumulates for as long as you keep steering the same compass course. As a rough guide, a 2-knot cross-stream on a vessel making 10 knots pushes you about 11° off track. Allow for set and drift in the course to steer, and check position regularly.",
    src: "Passage Planning Guide – Tidal streams"
  },
  {
    q: "Variation is…",
    a: "The angle between true north and magnetic north at a place, read from the chart compass rose",
    w: [
      "The angle between magnetic north and compass north, read from the deviation card",
      "The error in a gyro compass",
      "The change in compass reading when the helm goes hard over"
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
    why: "From compass towards true (correcting) it is the reverse: add east, subtract west. Picture it as True ⇄ Magnetic ⇄ Compass: true → compass subtracts East and adds West; compass → true adds East and subtracts West. Check the answer with “Compass least, error east; compass best, error west”. Always run the reverse check.",
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
    a: "By transit: compare the compass bearing of two marks in line with their true bearing",
    w: [
      "Compare it with the GPS heading while a strong tide is running",
      "Compare it with the autopilot heading while steering a steady course",
      "Swing the vessel once in port and read the lubber line against the card"
    ],
    why: "A transit involves no instrument so it is the most accurate position line available. Record the observed error with date, heading and method, and compare it with the card; a discrepancy over about 1° needs explaining.",
    src: "Passage Planning Guide – Checking the compass for error"
  },
  {
    q: "Which of these placed next to the steering compass can change its deviation?",
    a: "A mobile phone, handheld radio or torch",
    w: [
      "A plastic chart ruler or a wooden pencil",
      "A cotton lifejacket stowed under the console",
      "A rope fender hung on the rail near the helm"
    ],
    why: "A phone left on the console can produce tens of degrees of error. The change is not recorded on the deviation card, so it will not be allowed for. Brief all crew.",
    src: "Passage Planning Guide – Fitting, care and maintenance of the compass"
  },
  {
    q: "A gyro compass differs from a magnetic compass because it…",
    a: "Seeks true north, so needs no variation or deviation, but needs power and time to settle",
    w: [
      "Points to magnetic north without any power, as a magnetic compass does",
      "Needs a deviation card for every heading, as a magnetic compass does",
      "Keeps working on its own flywheel if the power is lost"
    ],
    why: "The satellite compass derives heading from multiple GNSS antennas and has no variation or deviation – but depends on satellite reception and power, so the magnetic compass remains the fallback.",
    src: "Passage Planning Guide – Other types of compass"
  },
  {
    q: "Variation and deviation correct…",
    a: "Directions (courses and bearings), but never a latitude and longitude",
    w: [
      "Positions as well as bearings, so a GPS fix is shifted by variation",
      "Only courses and not bearings, which need a separate correction card",
      "Only GPS positions, since a magnetic compass reads directly in true"
    ],
    why: "A GPS position needs no variation correction. The only correction a position may need is a datum shift if the chart is drawn to a different horizontal datum.",
    src: "Passage Planning Guide – Converting between true, magnetic and compass"
  },
  {
    q: "For a two-bearing fix, the best angle between the bearings is…",
    a: "About 90° (60–120° is acceptable)",
    w: [
      "About 10°, which gives the sharpest fix",
      "About 180°, using opposite bearings",
      "Exactly 0°, using the same object twice"
    ],
    why: "Shallow-angle cuts give poor fixes. For three bearings choose objects about 60° apart and well spread.",
    src: "Passage Planning Guide – Taking and plotting a visual bearing"
  },
  {
    q: "When taking three bearings in quick succession, which object do you take last?",
    a: "The one whose bearing changes fastest, usually the nearest or closest to abeam",
    w: [
      "The most distant one, since its bearing changes least while you work",
      "The one closest to dead ahead, since it is easiest to read from the bow",
      "The one with the lowest bearing, since it is quickest to lay off"
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
    a: "Cross it with a second position line, such as a beam bearing, radar range or soundings",
    w: [
      "It is already a fix, because the two marks fix you along the whole line",
      "Add a DR position and treat the intersection as the fix",
      "Take a second bearing of the front mark with the hand-bearing compass"
    ],
    why: "A transit tells you that you are somewhere on the line, not how far along it. The same applies to a clearing bearing or a sectored light: one position line is never a fix.",
    src: "Passage Planning Guide – Fixing while on a leading line"
  },
  {
    q: "A running fix is made by…",
    a: "Moving the first position line along your course by the distance run, then crossing it with a second bearing",
    w: [
      "Taking one bearing of a mark and one GPS position at the same time",
      "Taking two bearings of two different marks at exactly the same instant",
      "Crossing one depth contour with a sounding taken half an hour later"
    ],
    why: "Errors in the course steered, tidal set and leeway go straight into the answer, so treat it as a good EP rather than a true fix. Transfer for the track made good where the stream is known.",
    src: "Passage Planning Guide – The running fix"
  },
  {
    q: "Why is a radar range generally better than a radar bearing for a fix?",
    a: "Radar measures distance very precisely, but its bearings are limited by beam width",
    w: [
      "Radar bearings are always magnetic and must be converted before plotting",
      "Range can be read without a target, using only the sea clutter echoes",
      "Range is unaffected by rain or sea clutter, whereas bearings are affected"
    ],
    why: "A three-range fix is markedly better than a three-bearing radar fix. Use bearings only to identify targets.",
    src: "Passage Planning Guide – Radar"
  },
  {
    q: "Which pilotage technique gives your distance off a single object using its bearing on the bow?",
    a: "Doubling the angle on the bow",
    w: [
      "Rising and dipping",
      "A clearing bearing",
      "A head mark"
    ],
    why: "Note the relative bearing of the object on your bow, run on until that bearing has doubled, and the distance run equals your distance off at the second observation.",
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
    a: "A bearing of a charted object that, kept on the safe side of a stated figure, clears a danger",
    w: [
      "A bearing used to check the steering compass against a transit",
      "The bearing of the next waypoint, as seen from the last fix",
      "A bearing taken by radar only, when visual bearings are impossible"
    ],
    why: "E.g. “keep the lighthouse bearing more than 285°T to clear the reef”. A clearing line can also be a depth contour, transit or range.",
    src: "Passage Planning Guide – Clearing bearings"
  },
  {
    q: "Your GPS receiver uses the WGS84 datum, but your chart is drawn to the older AGD66 datum. Plotting the raw GPS position will place you about…",
    a: "About 200 m from where you really are, in a consistent direction",
    w: [
      "About 2 nm from where you really are, in a random direction",
      "Exactly right, since GPS positions are accurate on any chart",
      "About 20 m from where you really are, within normal GPS error"
    ],
    why: "Modern charts state WGS84/GDA (no shift) or the correction for satellite positions. Set the receiver's datum to match the chart and check it pre-departure – it is a menu item that can change inadvertently.",
    src: "Passage Planning Guide – Horizontal datums"
  },
  {
    q: "What does a high HDOP (horizontal dilution of precision) figure mean?",
    a: "The satellite geometry is poor and the position is less accurate than usual",
    w: [
      "The receiver has the best possible fix and is tracking every satellite",
      "More than twelve satellites are being tracked with a strong signal",
      "The receiver is set to the correct datum for the chart in use"
    ],
    why: "A low number is good. Check satellites tracked, HDOP and any warning flag before accepting a fix.",
    src: "Passage Planning Guide – Errors in a GPS position"
  },
  {
    q: "What is the fundamental rule guarding against GPS dangers?",
    a: "Never rely on a single source of position; confirm every fix independently",
    w: [
      "Trust the plotter whenever it is tracking more than eight satellites",
      "Use GPS only in daylight, when the marks can also be seen",
      "Always enter waypoints from memory, as the plotter's list can be corrupted"
    ],
    why: "Independent means genuinely different: a visual bearing or transit, radar range, echo sounder against charted depth, or looking out of the window. The plotter, radar overlay, autopilot track and AIS are often all driven by the same GPS receiver and will all agree even if it is wrong.",
    src: "Passage Planning Guide – GPS: what it does well and where it fails"
  },
  {
    q: "Which is the most common serious GPS error?",
    a: "Human error entering waypoints, such as transposed digits or minutes read as seconds",
    w: [
      "Satellite failure, which switches the whole constellation off for hours",
      "Solar flares, which make the plotter show positions in the wrong ocean",
      "Receiver overheating on a hot day in direct sunlight at the helm"
    ],
    why: "A wrongly entered waypoint will be followed faithfully into shallow water. Verify the route against the paper plot leg by leg – course and distance – before departure.",
    src: "Passage Planning Guide – GPS dangers"
  },
  {
    q: "Which is a limitation of an electronic charting system (ECS)?",
    a: "Over-zooming can imply detail the survey lacks, and decluttering can hide soundings and marks",
    w: [
      "It is always legally equal to a paper chart for the whole passage",
      "It never needs updating, because it corrects itself when online",
      "It cannot show the vessel's position when she is moving slowly"
    ],
    why: "An ECS is an aid, not a type-approved ECDIS. It needs updating exactly as a paper chart does, and the update date should be checked pre-departure.",
    src: "Passage Planning Guide – Electronic charting systems"
  },
  {
    q: "Why does an echo sounder's transducer offset (the point its depth reading is measured from) matter?",
    a: "The reading may be from the transducer, keel or waterline; know which and set the alarm to suit",
    w: [
      "It matters only in fresh water, where sound travels differently",
      "It changes the speed of sound between the vessel and the seabed",
      "It sets the height of tide automatically, so the screen shows charted depth"
    ],
    why: "A dense bait-fish layer, aerated water, weed or soft mud can also give a reading that is not the seabed.",
    src: "Passage Planning Guide – Echo sounder"
  },
  {
    q: "The shallow-water alarm sounds. Your first actions are to…",
    a: "Reduce speed, find your position, and turn into deeper water, usually back along your track",
    w: [
      "Silence the alarm, note the depth in the log, and continue on course",
      "Increase speed to clear the shoal as quickly as the engine allows",
      "Reset the alarm to a lower depth so that it stops sounding"
    ],
    why: "Correct sequence for any alarm: acknowledge, identify the cause, take action, then reset. If an alarm triggers spuriously, change the threshold to a correct value and record it – don't disable it. A silenced depth alarm has preceded many groundings.",
    src: "Passage Planning Guide – Proximity and other alarms"
  },
  {
    q: "Your cross-track-error alarm sounds. You should…",
    a: "Find out why (set, steering error or wrong waypoint), then regain the track or replan",
    w: [
      "Ignore it until the next leg, when the track will be regained anyway",
      "Widen the alarm distance so that it stops sounding on this leg",
      "Wait for the next arrival alarm, which will confirm that you are on track"
    ],
    why: "XTE shows the perpendicular distance from the planned leg. Set the alarm to a value suited to the width of safe water.",
    src: "Passage Planning Guide – Proximity and other alarms"
  },
  {
    q: "Which statement about VHF Channel 70 is correct?",
    a: "It is for Digital Selective Calling only, and is never used for voice",
    w: [
      "It is the international voice distress channel, monitored by all vessels",
      "It is the working channel that MRQ bases use for radio checks",
      "It is used by coast stations to broadcast weather and navigational warnings"
    ],
    why: "Channel 16 (156.8 MHz) is the international voice distress, safety and calling channel. After a DSC alert on Ch 70 the voice traffic follows on Ch 16. On 27 MHz, channel 88 is the distress and calling channel and 91 is used for supplementary safety traffic.",
    src: "Passage Planning Guide – Radio equipment"
  },
  {
    q: "Which is the right way to do a radio operational check before departure?",
    a: "A radio check with base on a working channel, logged",
    w: [
      "A radio check on Channel 16 so everyone hears it",
      "Pressing the DSC distress button briefly",
      "No check if the radio powers up normally"
    ],
    why: "Never press the DSC distress button to “see if it works” – it starts a real response. Use the self-test function or an individual DSC test call to a station that has agreed.",
    src: "Passage Planning Guide – The radio operational check"
  },
  {
    q: "How should the autopilot be used?",
    a: "As a steering aid that can be disengaged instantly, with lookout and position checks continuing",
    w: [
      "As a substitute for a lookout in open water, if a radar guard zone is set",
      "Only with the alarms switched off, so that they do not disturb the crew",
      "Whenever the helmsman is tired, with nobody else left on watch at the helm"
    ],
    why: "Every watchkeeper must be practised at the “standby” switch. It steers a heading; it does not navigate.",
    src: "Passage Planning Guide – Autopilot"
  },
  {
    q: "Radar is poor at detecting…",
    a: "Small wooden, fibreglass and inflatable craft, and low-lying land",
    w: [
      "Large steel ships, which return a strong echo even in rain",
      "Vessels fitted with an effective radar reflector, even at long range",
      "Steep headlands and high cliffs, which show clearly at long range"
    ],
    why: "Rain and sea clutter can hide contacts; shadow sectors behind the mast leave unswept arcs. Radar supplements a visual lookout and never replaces it.",
    src: "Passage Planning Guide – Radar"
  }
]);

