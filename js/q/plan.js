/* Question data – plan. Fields: q, a (correct), w (3 wrong options), why, src, vis (optional). */
MQ.add("plan", [
  {
    q: "MARH013 breaks a passage into four elements. Which order is correct?",
    a: "Plan, pre-departure check, conduct, complete",
    w: [
      "Pre-departure check, plan, conduct, complete",
      "Plan, conduct, pre-departure check, complete",
      "Conduct, plan, complete, pre-departure check"
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
    q: "To check depth on a leg you take the shallowest charted depth, add the height of tide, and then…",
    a: "Subtract your draught to see if the clearance meets your safety management system (SMS) requirement",
    w: [
      "Add your draught to find the clearance your SMS requires",
      "Multiply by the tidal range to find the clearance expected",
      "Subtract your height of eye to find the clearance needed"
    ],
    why: "Where the margin is thin, note the time window during which the leg is passable.",
    src: "Passage Planning Guide – Developing the passage plan"
  },
  {
    q: "Maximum weather limits for a passage should be set…",
    a: "In advance, in settled conditions, per the safety management system (SMS), and written on the plan",
    w: [
      "At sea, as conditions develop, by the skipper's feel for the day",
      "By the most senior passenger, who has the final say on the trip",
      "Only after a gale or strong wind warning has been issued"
    ],
    why: "A limit set in advance is a decision; a limit judged at sea in deteriorating conditions is a rationalisation.",
    src: "Passage Planning Guide – Weather and limits"
  },
  {
    q: "The forecast for your passage deteriorates. In order of preference, your options are normally…",
    a: "Cancel or postpone; shorten exposure by modifying the plan; or proceed with the risk accepted and briefed",
    w: [
      "Proceed and see how it feels; slow down; cancel if it worsens",
      "Proceed at higher speed to beat the weather back to the berth",
      "Proceed at once and brief the crew later, once under way"
    ],
    why: "A decision not to proceed is a legitimate operational decision. If you do proceed, recalculate speeds, ETAs, daylight and fuel, advise your base, brief the crew and prepare the vessel.",
    src: "Passage Planning Guide – Actions on an adverse weather report"
  },
  {
    q: "Which should a passage plan identify for each part of the passage?",
    a: "The nearest shelter, an abort point, and actions for equipment failure, injury or worse weather",
    w: [
      "Only the destination and the ETA there, as base decides contingencies",
      "Only the quickest route and the fuel needed to complete it",
      "The names of other vessels expected in the area during the passage"
    ],
    why: "Contingencies are researched before departure so a diversion is a decision already made.",
    src: "Passage Planning Guide – Developing the passage plan"
  },
  {
    q: "At minimum, which items are recorded for each leg of the passage plan?",
    a: "Waypoint, position, course to steer, distance, speed, leg time, ETA, least depth and hazards",
    w: [
      "Waypoint name, with the colour and number of each buoy expected",
      "Only the total distance for the whole passage and the time taken",
      "The skipper's qualification and the vessel's registration number"
    ],
    why: "The plan must be written where the helmsman can read it, so the failure of a screen is an inconvenience, not an emergency.",
    src: "Passage Planning Guide – Recording the plan"
  },
  {
    q: "When plotting a safe course around dangers you should…",
    a: "Draw a clearance circle round every hazard and join the outsides of the circles",
    w: [
      "Draw the straight line first, then check that it misses everything",
      "Pass each danger as close as possible to save time and fuel",
      "Let the plotter draw the route and trust it without checking"
    ],
    why: "Allow sea room for error in the compass, steering, stream and the chart itself. Where a leg runs between two dangers, check the remaining gap against the navigation accuracy you can actually achieve.",
    src: "Passage Planning Guide – Plotting a safe course"
  },
  {
    q: "The “one-third rule” for fuel means…",
    a: "One third for the outbound leg, one third for the return, one third in reserve",
    w: [
      "Carry one third of a tank at all times, whatever the trip",
      "One third for the engine and the rest for the generator",
      "Burn one third of the fuel before turning back for home"
    ],
    why: "It assumes the return costs the same as the outbound leg, which isn't so into a head sea, under tow, or after long manoeuvring on scene. Then calculate fully. The reserve is never counted as available fuel because the vessel is nearly home.",
    src: "Passage Planning Guide – Calculating fuel consumption and reserve"
  },
  {
    q: "Why can't you rely on a small-vessel tank gauge alone?",
    a: "Gauges are notoriously inaccurate, especially in a sea, so check by a second means",
    w: [
      "They always read high, so there is more fuel than shown",
      "They only work with petrol and are unreliable with diesel",
      "They read in litres per hour, so the total needs converting"
    ],
    why: "Use a dipstick or sight tube, the fuel log (fuel put in and hours run) or a calibrated flow meter. “Usable fuel” is less than the tank's nominal capacity.",
    src: "Passage Planning Guide – Calculating fuel consumption and reserve"
  },
  {
    q: "Which four hazard categories does the unit name specifically?",
    a: "Restricted visibility, shallow water, traffic and unlit beacons",
    w: [
      "Bars, reefs, wrecks and fishing gear across the usual track",
      "Cyclones, fog, thunderstorms and swell during the passage",
      "Rocks, mud, sand and weed on the bottom of the channel"
    ],
    why: "Beyond those, plans should identify bars, reefs, wrecks, overfalls, lee shores, cray pots, aquaculture leases, restricted areas, cables and pipelines, whale and dugong areas, and floating debris after floods.",
    src: "Passage Planning Guide – Navigational hazards"
  },
  {
    q: "Which is a sound control for navigating in restricted visibility?",
    a: "A safe speed, a dedicated lookout, fog signals and radar used systematically",
    w: [
      "Keeping up speed to clear the fog as quickly as possible",
      "Switching the radar off to see better through the window",
      "Relying on the autopilot while the crew keep warm below"
    ],
    why: "Consider whether to continue at all – anchoring in safe water clear of traffic is frequently correct.",
    src: "Passage Planning Guide – Restricted visibility"
  },
  {
    q: "Your passage runs past unlit beacons at night. Which control would NOT be sensible?",
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
      "Checking the tide tables and forecast",
      "Refuelling"
    ],
    why: "Work from the written checklist, not memory – the item omitted is invariably the one not recalled.",
    src: "Passage Planning Guide – The pre-departure check"
  },
  {
    q: "As part of the engine pre-departure check you confirm the alarms by…",
    a: "Testing the audible and visual alarms for oil pressure, coolant temperature and charging",
    w: [
      "Assuming they work if no alarm sounded when the engine started",
      "Disconnecting the alarm wiring to see the panel light go out",
      "Resetting the hour meter to clear the alarm timer on the panel"
    ],
    why: "Also confirm ahead/astern/neutral, full steering travel hard over to hard over, and the emergency stop and kill cord.",
    src: "Passage Planning Guide – Propulsion equipment, alarms and hull"
  },
  {
    q: "Navigation equipment must be “set for the passage”. This includes…",
    a: "Checking waypoints against the paper plot, setting alarms and confirming the display units",
    w: [
      "Switching it on and checking that it shows a position fix",
      "Clearing the track history and setting the screen brightness",
      "Turning all the alarms off so they do not disturb the crew"
    ],
    why: "Check that each leg's course and distance on the plotter match the chart – a mismatch means one of them is wrong.",
    src: "Passage Planning Guide – Navigation equipment"
  },
  {
    q: "During your pre-departure check you find the steering compass has a 3°W error on your outbound heading. What should you do when planning the passage?",
    a: "Correct the compass courses to steer on the passage plan for that error",
    w: [
      "Record the error in the log but leave the planned courses as they are",
      "Ignore it, because an error under 5° does not need correcting",
      "Plan on true courses only and not steer by the compass at all"
    ],
    why: "Finding an error is only half the job: the courses to steer written on the plan must be adjusted for it, otherwise you are steering the wrong heading. An error that has been found and then not applied is worse than one never looked for, because it creates false confidence. Also report a large or changing error so the compass can be swung.",
    src: "Passage Planning Guide – Navigation equipment"
  },
  {
    q: "Which document sets out the safety equipment a domestic commercial vessel must carry?",
    a: "The National Standard for Commercial Vessels, Part C Section 7A (Safety equipment)",
    w: [
      "Marine Order 505, which covers certificates of competency",
      "The COLREGS, in the Rules covering lights and sound signals",
      "The vessel manufacturer's owner's manual supplied with the hull"
    ],
    why: "NSCV Part C7A lists the safety equipment by vessel class and operational area. It is applied to your vessel through the certificate of operation (Marine Order 504) and recorded in the SMS, which is the document you work from day to day. Marine Order 505 deals with certificates of competency, not equipment.",
    src: "Passage Planning Guide – Safety equipment"
  },
  {
    q: "An EPIRB (emergency position-indicating radio beacon) must be…",
    a: "406 MHz, registered with AMSA, with current registration and an in-date battery",
    w: [
      "121.5 MHz and unregistered, as the first beacons were made",
      "Registered once and then never updated, whatever happens to the vessel",
      "Stowed below in a locked cabinet so it cannot go off by accident"
    ],
    why: "An unregistered beacon still alerts, but without the information that makes the response fast. 121.5 MHz satellite processing ceased in 2009; on a modern beacon it is only a homing signal.",
    src: "Passage Planning Guide – Safety equipment · Marine SAR Guide"
  },
  {
    q: "Expired distress flares should be…",
    a: "Landed ashore for disposal, not carried as extras",
    w: [
      "Carried as spares in case more are needed on the day",
      "Fired off at sea to get rid of them",
      "Thrown overboard when they pass their expiry date"
    ],
    why: "Never test-fire a flare except under authorised, supervised conditions with the coordinating authority notified – an unreported sighting starts a search.",
    src: "Passage Planning Guide – Safety equipment"
  },
  {
    q: "When firing a hand flare you should…",
    a: "Hold it downwind and outboard at arm's length, above the horizontal, clear of the boat and people",
    w: [
      "Hold it upwind and close to your body so you can see it burn",
      "Point it towards other crew so they can see where the flare is",
      "Hold it inboard over the deck so the slag falls onto the deck"
    ],
    why: "Hand flares burn hot and drip slag; never look at the flame, and discard into the water – never bring it inboard. Parachute rockets go vertically (about 15° downwind in strong wind) clear of rigging and people. Orange smoke is a daytime signal.",
    src: "Passage Planning Guide – Operating a distress flare"
  },
  {
    q: "What does a departure report (logging on) normally include?",
    a: "Vessel and callsign, departure point and time, destination, route, ETA, people on board, fuel and activity",
    w: [
      "Only the vessel name and callsign, as the base knows the rest",
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
      "Log off and log on again later",
      "Say nothing if you are safe"
    ],
    why: "An overdue vessel triggers action.",
    src: "Passage Planning Guide – Advising the local authority of completion"
  },
  {
    q: "What is the best way to steer a planned course?",
    a: "Steer small, anticipate the swing, use a head mark, and allow for set and drift",
    w: [
      "Make large corrections to regain the line quickly each time you wander",
      "Leave it to the autopilot and check the position only now and then",
      "Always steer the planned compass course, whatever the stream is doing"
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
    a: "Log the time and last position, slow down, fix by bearings or transits on the paper chart, and resume the planned courses",
    w: [
      "Continue at speed on the last heading until the signal comes back, then check position",
      "Wait where you are for the signal to return, then re-enter the waypoints from memory",
      "Follow the AIS tracks of other vessels until you reach port, keeping speed up"
    ],
    why: "If you cannot establish your position with confidence, stop and, if necessary, anchor in safe water. Advise base and shorten the fixing interval.",
    src: "Passage Planning Guide – Correcting errors detected in navigational equipment"
  },
  {
    q: "The sequence for dealing with an error found in navigation equipment is…",
    a: "Detect (sources disagree), diagnose which is wrong, correct or compensate, then record",
    w: [
      "Record, ignore, reset, restart, then carry on with the passage as planned",
      "Reset, restart, record, ignore, then carry on with the passage as planned",
      "Silence, ignore, log, report, then carry on with the passage as planned"
    ],
    why: "Disagreement between two sources is the primary signal. The error and action must be reported at completion so equipment can be repaired or recalibrated.",
    src: "Passage Planning Guide – Correcting errors detected in navigational equipment"
  },
  {
    q: "A useful equipment fault report states…",
    a: "What failed, when, in what conditions, whether it is intermittent, what you did, and whether it is safe to use",
    w: [
      "“Unreliable – needs fixing”, which is enough for the engineer to act on",
      "Only the date, and the name of the person making the report",
      "The name of the last user and the time at which they switched it off"
    ],
    why: "Observations that affect charts – a mark missing, unlit, off station, or an uncharted danger – go to the Australian Hydrographic Office and the state or port authority, normally via your unit.",
    src: "Passage Planning Guide – Reporting defects and observations"
  },
  {
    q: "When mooring up for an extended period you should secure the vessel for…",
    a: "The conditions expected while it is unattended, including tide range and wind change",
    w: [
      "The conditions at the time of arrival, which you can see from the berth",
      "The conditions at the previous mooring, which will be much the same",
      "The strongest conditions recorded at that berth in the last month"
    ],
    why: "A wind change can turn a sheltered berth into a lee shore. Use adequate lines, fenders, chafe protection and allowance for tide.",
    src: "Passage Planning Guide – Mooring the vessel securely"
  },
  {
    q: "The WHS requirements for a passage sit at which three levels?",
    a: "Legislation (WHS Act and shipboard-work code), the vessel's SMS, and the operation's SOPs",
    w: [
      "Federal, state and local council, each with its own safety inspector",
      "Skipper, crew and passengers, each with a different duty of care",
      "Chart, compass and log, which together record the whole passage"
    ],
    why: "The SMS is where the legislation becomes a workable instruction; SOPs may require more than the legal minimum. The passage plan is itself a risk assessment.",
    src: "Passage Planning Guide – WHS/OHS requirements applying to navigation"
  },
  {
    q: "Fatigue affects judgement in a way that…",
    a: "Slows reactions and judgement without the person noticing, much as alcohol does",
    w: [
      "Only affects physical strength and leaves judgement unchanged",
      "Is obvious at once to the person affected, who then asks for relief",
      "Only occurs after 24 hours awake and is cured by a cup of coffee"
    ],
    why: "Plan for it: rotate helm and lookout, set realistic passage lengths, build in rest, maintain food and fluids. A person too fatigued to navigate must say so.",
    src: "Passage Planning Guide – WHS/OHS requirements"
  },
  {
    q: "Before crossing a coastal bar you should…",
    a: "Watch several wave sets, know your abort point, brief the crew, wear lifejackets, and follow the SOP",
    w: [
      "Cross at once on a strong ebb, to beat any worsening swell",
      "Cross without watching, if you have crossed it before in similar conditions",
      "Take off lifejackets so that you can swim if the vessel rolls over"
    ],
    why: "Cross on a flood tide or near high-water slack, never on a strong ebb against a swell. Never attempt a breaking bar to get home – stand off in deep water clear of a lee shore.",
    src: "Passage Planning Guide – Why bars break"
  },
  {
    q: "In heavy weather the safest general approach is to…",
    a: "Slow down to avoid slamming, take the sea slightly off the bow, wear lifejackets, secure gear and consider shelter",
    w: [
      "Keep full speed head-on to the sea to reach a safe place sooner",
      "Turn beam-on to the sea to reduce the pitching that the crew feel",
      "Run before a large following sea at speed to open the distance"
    ],
    why: "Slamming damages the hull and injures crew. Beam-on is the most dangerous; a large following sea at speed risks broaching. Advise base of position, condition and intentions early.",
    src: "Passage Planning Guide – Actions on encountering heavy weather"
  }
]);

