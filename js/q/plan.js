/* Question data – plan. Fields: q, a (correct), w (3 wrong options), why, src, vis (optional). */
MQ.add("plan", [
  {
    q: "MARH013 breaks a passage into four elements. Which order is correct?",
    a: "Plan the passage, pre-departure check, conduct it, complete it",
    w: [
      "Pre-departure check, plan the passage, conduct it, then complete it",
      "Plan the passage, conduct it, pre-departure check, then complete it",
      "Conduct the passage, plan it, complete it, then the pre-departure check"
    ],
    why: "A search and rescue tasking compresses planning but does not remove it – a practised crew does the two-minute version: distance and bearing to datum, time, fuel with reserve, tide and bar, forecast and hazards.",
    src: "Passage Planning Guide – Introduction"
  },
  {
    q: "Where must you plan the approaches to a harbour, bar or anchorage?",
    a: "On the largest-scale chart available for that area",
    w: [
      "On the coastal passage chart, which shows the whole route",
      "On the world chart",
      "On whichever chart is already in use"
    ],
    why: "Small-scale charts omit the beacons, small shoals and channel edges that matter in approaches.",
    src: "Passage Planning Guide – Obtaining the right chart"
  },
  {
    q: "To check depth along a leg you take the shallowest charted depth, add the height of tide at the expected time, and then…",
    a: "Subtract your draught to see if the clearance meets your SMS requirement",
    w: [
      "Add your draught to find the clearance needed by your SMS for that leg",
      "Multiply by the tidal range to find the clearance expected by the SMS",
      "Subtract your height of eye to find the clearance required for that leg"
    ],
    why: "Where the margin is thin, note the time window during which the leg is passable.",
    src: "Passage Planning Guide – Developing the passage plan"
  },
  {
    q: "Maximum weather limits for a passage should be set…",
    a: "In advance, in settled conditions, in line with the SMS, and written on the plan",
    w: [
      "At sea, as the conditions develop, once the skipper has assessed the sea state",
      "By the most senior passenger on board, who has the final say on the trip",
      "Only after a gale or strong wind warning has been issued for the district"
    ],
    why: "A limit set in advance is a decision; a limit judged at sea in deteriorating conditions is a rationalisation.",
    src: "Passage Planning Guide – Weather and limits"
  },
  {
    q: "The forecast for your planned passage deteriorates. In order of preference your options are normally…",
    a: "Cancel or postpone; shorten exposure or seek shelter; or proceed with the risk accepted and briefed",
    w: [
      "Proceed and see how it feels; reduce speed if needed; then cancel if it worsens, keeping the base informed",
      "Proceed at higher speed so as to beat the weather back to the berth",
      "Modify the plan, then cancel the trip, and only then think about proceeding"
    ],
    why: "A decision not to proceed is a legitimate operational decision. If you do proceed, recalculate speeds, ETAs, daylight and fuel, advise your base, brief the crew and prepare the vessel.",
    src: "Passage Planning Guide – Actions on an adverse weather report"
  },
  {
    q: "Which should a passage plan identify for each part of the passage?",
    a: "Nearest shelter, an abort point, and actions on GPS loss, engine failure, injury or worse weather",
    w: [
      "Only the final destination and the ETA there, since contingencies are decided by the base ashore",
      "Only the quickest route, the fuel needed and the time of arrival",
      "The names of all vessels expected in the area during the passage"
    ],
    why: "Contingencies are researched before departure so a diversion is a decision already made.",
    src: "Passage Planning Guide – Developing the passage plan"
  },
  {
    q: "At minimum, which items are recorded for each leg of the passage plan?",
    a: "Waypoint, lat/long, course to steer, distance, speed, leg time, ETA, least depth, marks and hazards",
    w: [
      "Waypoint name, and the colour and number of each buoy that is expected, plus the skipper's initials",
      "Only the total distance for the whole passage and the expected time",
      "The skipper's qualification and the registration number of the vessel"
    ],
    why: "The plan must be written where the helmsman can read it, so the failure of a screen is an inconvenience, not an emergency.",
    src: "Passage Planning Guide – Recording the plan"
  },
  {
    q: "When plotting a safe course around dangers you should…",
    a: "Draw a clearance circle round every hazard and join the outsides of the circles with legs",
    w: [
      "Draw the straight line first, then check whether it happens to miss anything",
      "Pass every danger as close as possible, to keep the passage short and save fuel and time",
      "Use the GPS plotter alone to draw the route, then check it against nothing"
    ],
    why: "Allow sea room for error in the compass, steering, stream and the chart itself. Where a leg runs between two dangers, check the remaining gap against the navigation accuracy you can actually achieve.",
    src: "Passage Planning Guide – Plotting a safe course"
  },
  {
    q: "The “one-third rule” for fuel is…",
    a: "One third out, one third back, one third in reserve, if the return costs no more",
    w: [
      "Carry one third of a tank at all times, whatever the length of the trip and the weather",
      "One third of the fuel for the engine and the rest for the generator",
      "Burn one third of the fuel before turning back, then run for home"
    ],
    why: "It assumes the return costs the same as the outbound leg, which isn't so into a head sea, under tow, or after long manoeuvring on scene. Then calculate fully. The reserve is never counted as available fuel because the vessel is nearly home.",
    src: "Passage Planning Guide – Calculating fuel consumption and reserve"
  },
  {
    q: "Why can't you rely on a small-vessel tank gauge alone?",
    a: "Gauges are notoriously inaccurate, especially in a sea: confirm by a second means",
    w: [
      "They always read high, so the fuel on board is always more than shown",
      "They only work with petrol and are unreliable with diesel fuel on board",
      "They read in litres per hour, not in litres, so the total needs a conversion"
    ],
    why: "Use a dipstick or sight tube, the fuel log (fuel put in and hours run) or a calibrated flow meter. “Usable fuel” is less than the tank's nominal capacity.",
    src: "Passage Planning Guide – Calculating fuel consumption and reserve"
  },
  {
    q: "Which four hazard categories does the unit name specifically?",
    a: "Restricted visibility, shallow water, traffic and unlit beacons",
    w: [
      "Bars, reefs, wrecks and fishing gear that lie across the usual track",
      "Cyclones, fog, thunderstorms and swell that can arrive during the trip",
      "Rocks, mud, sand and weed that are shown as bottom types on the chart"
    ],
    why: "Beyond those, plans should identify bars, reefs, wrecks, overfalls, lee shores, cray pots, aquaculture leases, restricted areas, cables and pipelines, whale and dugong areas, and floating debris after floods.",
    src: "Passage Planning Guide – Navigational hazards"
  },
  {
    q: "Which is a control for navigating in restricted visibility?",
    a: "A safe speed to stop within the distance you can see, a dedicated lookout, fog signals, radar",
    w: [
      "Maintain speed, so that you clear the fog as quickly as you can",
      "Turn off the radar to see better and rely on the bridge windows and the autopilot instead",
      "Rely on the autopilot to hold the course while the crew keep warm below"
    ],
    why: "Consider whether to continue at all – anchoring in safe water clear of traffic is frequently correct.",
    src: "Passage Planning Guide – Restricted visibility"
  },
  {
    q: "Your passage runs past unlit beacons at night. Which control is NOT sensible?",
    a: "Proceed at normal speed and rely on radar to see them",
    w: [
      "Plan the track to give them a wide berth",
      "Post a dedicated lookout and use the sounder actively",
      "Do not undertake the passage at night if confidence is lacking"
    ],
    why: "Radar returns from small timber or plastic marks are unreliable. Reduce speed, identify unlit marks in advance and note their position relative to the track.",
    src: "Passage Planning Guide – Unlit beacons"
  },
  {
    q: "The seven areas of the pre-departure check include propulsion and hull, navigation equipment, fuel, safety equipment, communications, anchoring and mooring equipment, and…",
    a: "Securing the vessel and equipment for sea",
    w: [
      "Replacing the crew list",
      "Checking the tide tables and the forecast",
      "Refuelling"
    ],
    why: "Work from the written checklist, not memory – the item omitted is invariably the one not recalled.",
    src: "Passage Planning Guide – The pre-departure check"
  },
  {
    q: "As part of the engine pre-departure check you confirm the alarms by…",
    a: "Testing the audible and visual alarms (oil pressure, coolant temperature, charging) per procedure",
    w: [
      "Assuming they work, if no alarm sounded when the engine was started",
      "Disconnecting the alarm wiring to confirm that the panel light goes out, then reconnecting it",
      "Resetting the hour meter to confirm the alarm timer has been cleared"
    ],
    why: "Also confirm ahead/astern/neutral, full steering travel hard over to hard over, and the emergency stop and kill cord.",
    src: "Passage Planning Guide – Propulsion equipment, alarms and hull"
  },
  {
    q: "Navigation equipment must be “set for the passage”. This includes…",
    a: "Checking waypoints against the paper plot, setting XTE, arrival and depth alarms, and the display units",
    w: [
      "Simply switching it on and checking that it shows a position fix",
      "Clearing the track history and setting the brightness to the maximum, then switching the alarms off",
      "Loading the newest software and then turning off the alarms for the passage"
    ],
    why: "Check that each leg's course and distance on the plotter match the chart – a mismatch means one of them is wrong.",
    src: "Passage Planning Guide – Navigation equipment"
  },
  {
    q: "You discover the steering compass has a 3°W error on your outbound heading. What does “allowances made in planning” mean?",
    a: "Adjust the courses to steer on the passage plan for that error",
    w: [
      "Note it in the log only, as the plan is made on the true courses",
      "Ignore it, as it is less than the 5° that must be corrected",
      "Fit a new compass before every trip, because the error will change"
    ],
    why: "An error that has been discovered and then not applied is worse than one never looked for – it creates false confidence.",
    src: "Passage Planning Guide – Navigation equipment"
  },
  {
    q: "Who sets out the safety equipment a domestic commercial vessel must carry?",
    a: "The NSCV (Part C, 7A), applied through the certificate of operation and SMS; the flotilla may add more",
    w: [
      "Only the flotilla's verbal instructions, given at the start of the season by the commander",
      "The vessel's manufacturer, in the owner's manual supplied with the hull",
      "The Bureau of Meteorology, in its annual marine safety bulletin"
    ],
    why: "Marine Order 504 covers certificates of operation and operational requirements; Marine Order 505 covers certificates of competency and limits. The SMS is the operative document in practice.",
    src: "Passage Planning Guide – Safety equipment"
  },
  {
    q: "An EPIRB must be…",
    a: "406 MHz, registered with AMSA, with registration current and the battery in date",
    w: [
      "121.5 MHz analogue and unregistered, as these were the first beacons made",
      "Registered once and never updated, whatever happens to the vessel or owner",
      "Stowed below in a locked cabinet so that it cannot be set off by accident"
    ],
    why: "An unregistered beacon still alerts, but without the information that makes the response fast. 121.5 MHz satellite processing ceased in 2009; on a modern beacon it is only a homing signal.",
    src: "Passage Planning Guide – Safety equipment · Marine SAR Guide"
  },
  {
    q: "Expired distress flares should be…",
    a: "Landed ashore for disposal – not carried as extras",
    w: [
      "Carried as spares in case more are needed on the day",
      "Fired off at sea to get rid of them",
      "Thrown overboard"
    ],
    why: "Never test-fire a flare except under authorised, supervised conditions with the coordinating authority notified – an unreported sighting starts a search.",
    src: "Passage Planning Guide – Safety equipment"
  },
  {
    q: "When firing a hand flare you should…",
    a: "Hold it downwind and outboard at arm's length, above the horizontal, clear of the boat and people",
    w: [
      "Hold it upwind and close to your body, so you can see it burning clearly and keep it steady",
      "Point it towards other crew so that they can see where the flare is",
      "Hold it inboard over the deck so as to catch the slag as it falls"
    ],
    why: "Hand flares burn hot and drip slag; never look at the flame, and discard into the water – never bring it inboard. Parachute rockets go vertically (about 15° downwind in strong wind) clear of rigging and people. Orange smoke is a daytime signal.",
    src: "Passage Planning Guide – Operating a distress flare"
  },
  {
    q: "What does a departure report (logging on) normally include?",
    a: "Vessel and callsign, departure point and time, destination, route, ETA, POB, fuel and activity",
    w: [
      "Only the vessel name and callsign, since the base already knows the rest of the particulars",
      "The crew's home addresses and their next-of-kin telephone numbers",
      "The skipper's licence number and the vessel's insurance policy details"
    ],
    why: "The trip report exists so that a failure to arrive is detected promptly and searching starts in the right place. Advise material changes, and log off on arrival – an unnecessary search diverts resources from real incidents.",
    src: "Passage Planning Guide – Advising the local authority of departure"
  },
  {
    q: "Your arrival will be materially later than the ETA you reported. You should…",
    a: "Advise base before the ETA passes, not after",
    w: [
      "Wait until you are overdue",
      "Log off immediately and log on again later",
      "Say nothing if safe"
    ],
    why: "An overdue vessel triggers action.",
    src: "Passage Planning Guide – Advising the local authority of completion"
  },
  {
    q: "What is the best way to steer a planned course?",
    a: "Steer small, anticipate the swing, use a head mark, and offset for set and drift",
    w: [
      "Make large corrections to regain the line quickly each time you wander",
      "Follow the autopilot without checking position, as it holds the best course",
      "Always steer the compass course regardless of the stream or the wind"
    ],
    why: "Large corrections give a snaking track, longer distance and higher fuel use. Change helmsmen with a proper handover.",
    src: "Passage Planning Guide – Steering the planned course"
  },
  {
    q: "Two independent methods in agreement make a fix. A single method is…",
    a: "An assumption",
    w: [
      "Also a fix",
      "A DR position",
      "An estimated position"
    ],
    why: "Each fix should combine a visual element (bearing, transit or recognised mark) with an instrument element (GPS or depth). Fix at intervals matched to the proximity of danger.",
    src: "Passage Planning Guide – Monitoring the vessel's position"
  },
  {
    q: "The GPS or plotter fails mid-passage. Your immediate actions are to…",
    a: "Log time and last position, slow down, fix on the paper chart, and resume planned courses and times",
    w: [
      "Continue at speed on the last heading until the signal returns again",
      "Wait where you are for the signal to return, then re-enter the waypoints from memory",
      "Navigate by the AIS track of the other vessels until you reach port"
    ],
    why: "If you cannot establish your position with confidence, stop and, if necessary, anchor in safe water. Advise base and shorten the fixing interval.",
    src: "Passage Planning Guide – Correcting errors detected in navigational equipment"
  },
  {
    q: "The sequence for dealing with an error found in navigation equipment is…",
    a: "Detect (sources disagree), diagnose which is wrong, correct or compensate, then record",
    w: [
      "Record, ignore, reset, restart, in that order, and then carry on with the passage as planned",
      "Reset, restart, record, ignore, in that order, and then carry on",
      "Silence, ignore, log, report, in that order, and then carry on"
    ],
    why: "Disagreement between two sources is the primary signal. The error and action must be reported at completion so equipment can be repaired or recalibrated.",
    src: "Passage Planning Guide – Correcting errors detected in navigational equipment"
  },
  {
    q: "A useful equipment fault report states…",
    a: "What it is, what it did, when, conditions, constant or intermittent, action taken, and safety",
    w: [
      "“Unreliable – needs fixing”, which is enough for the engineer to act on without being told more",
      "Only the date, and the name of the person who made the report",
      "The name of the last user and the time at which they switched it off"
    ],
    why: "Observations that affect charts – a mark missing, unlit, off station, or an uncharted danger – go to the Australian Hydrographic Office and the state or port authority, normally via your flotilla.",
    src: "Passage Planning Guide – Reporting defects and observations"
  },
  {
    q: "When mooring up for an extended period you should secure the vessel for…",
    a: "The conditions expected while it is unattended, including tide range and wind change",
    w: [
      "The conditions at the time of arrival, which are the ones that you can see from the berth",
      "The conditions at the previous mooring, which will be much the same",
      "The strongest conditions recorded in the last month at that berth"
    ],
    why: "A wind change can turn a sheltered berth into a lee shore. Use adequate lines, fenders, chafe protection and allowance for tide.",
    src: "Passage Planning Guide – Mooring the vessel securely"
  },
  {
    q: "The WHS requirements for a passage sit at which three levels?",
    a: "Legislation (WHS Act, shipboard-work code), the vessel (SMS), and the operation (flotilla SOPs)",
    w: [
      "Federal, state and local council, each with its own safety inspector",
      "Skipper, crew and passengers, each of whom has a different duty of care",
      "Chart, compass and log, which together record the conduct of the passage from start to finish"
    ],
    why: "The SMS is where the legislation becomes a workable instruction; SOPs may require more than the legal minimum. The passage plan is itself a risk assessment.",
    src: "Passage Planning Guide – WHS/OHS requirements applying to navigation"
  },
  {
    q: "Fatigue affects judgement in a way that…",
    a: "Degrades reaction time and situational awareness without the person noticing, like alcohol",
    w: [
      "Only affects physical strength and does not change your judgement at all",
      "Is noticeable immediately to the person affected, who then asks for relief from the helm",
      "Only occurs after 24 hours without sleep and is easily cured by coffee"
    ],
    why: "Plan for it: rotate helm and lookout, set realistic passage lengths, build in rest, maintain food and fluids. A person too fatigued to navigate must say so.",
    src: "Passage Planning Guide – WHS/OHS requirements"
  },
  {
    q: "Before crossing a coastal bar you should…",
    a: "Watch several wave sets, know your abort point, brief the crew, wear lifejackets, follow the SOP",
    w: [
      "Cross at once on a strong ebb to save time and beat any worsening swell",
      "Cross without checking if you have crossed the bar in these conditions before, and trust the swell",
      "Remove lifejackets so that you can swim if the vessel is rolled over"
    ],
    why: "Cross on a flood tide or near high-water slack, never on a strong ebb against a swell. Never attempt a breaking bar to get home – stand off in deep water clear of a lee shore.",
    src: "Passage Planning Guide – Why bars break"
  },
  {
    q: "In heavy weather the safest general approach is to…",
    a: "Slow to avoid slamming, take the sea off the bow, lifejackets on, secure gear, consider shelter",
    w: [
      "Maintain full speed head-on to the sea to get to a safe place faster",
      "Turn beam-on to the sea to reduce the pitching that the crew would otherwise feel on deck",
      "Run before a large following sea at speed to open the distance from it"
    ],
    why: "Slamming damages the hull and injures crew. Beam-on is the most dangerous; a large following sea at speed risks broaching. Advise base of position, condition and intentions early.",
    src: "Passage Planning Guide – Actions on encountering heavy weather"
  }
]);

