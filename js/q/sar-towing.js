/* Question data – sar-towing. Fields: q, a (correct), w (3 wrong options), why, src, vis (optional). */
MQ.add("sar", [
  {
    q: "JRCC Australia is…",
    a: "AMSA's Joint Rescue Coordination Centre in Canberra, which coordinates offshore incidents",
    w: [
      "A state police unit based in each capital, which coordinates inshore incidents",
      "A volunteer marine rescue radio base that relays distress calls to the coast",
      "The Bureau of Meteorology's centre that issues cyclone warnings"
    ],
    why: "JRCC Australia (AMSA, Canberra, 1800 641 792) is the primary coordinator for offshore maritime incidents. State and territory police are the primary authority for coastal and inshore incidents. JRCC must still be advised even when police keep coordination: it can provide drift modelling, satellite pass schedules and extra assets.",
    src: "Marine SAR Guide – SAR coordination structure"
  },
  {
    q: "The SAR Mission Coordinator (SMC) and the On-Scene Coordinator (OSC) differ in that…",
    a: "The SMC plans and coordinates the operation; the OSC directs the assets at the scene",
    w: [
      "The OSC declares the emergency phase and the SMC follows the orders given",
      "The SMC is always the first vessel to arrive on the scene of the search",
      "They are the same person, named by the first asset to arrive"
    ],
    why: "The OSC (often the first skipper on scene) establishes an on-scene communications net on a secondary VHF working channel to keep Ch16 free, directs patterns, gives SITREPs and manages crew safety and fuel.",
    src: "Marine SAR Guide – SAR coordination structure"
  },
  {
    q: "An incident is reported to an AVCGA flotilla and Police have not yet arrived. The senior duty officer should…",
    a: "Take the SMC role in the interim, declare the phase, notify JRCC and Police, and hand over when they arrive",
    w: [
      "Wait for Police to arrive before taking any action to launch vessels",
      "Send every available vessel to sea without telling anyone else",
      "Pass the call to the publicity officer and wait for her directions"
    ],
    why: "No action that commits assets or escalates the emergency phase should be taken without notifying JRCC.",
    src: "Marine SAR Guide – SAR coordination structure"
  },
  {
    q: "The Uncertainty Phase (INCERFA) is declared when…",
    a: "There is doubt about the safety of a vessel or person, such as an overdue report",
    w: [
      "A Mayday has been received and the vessel's position is known",
      "A vessel is known to be sinking and her crew are in the water",
      "All SAR resources have been mobilised and are on their way"
    ],
    why: "ALERFA (alert): apprehension, vessel known to be in difficulty, assets alerted. DETRESFA (distress): immediate assistance required, all available resources mobilised.",
    src: "Marine SAR Guide – SAR phases"
  },
  {
    q: "What are the first actions when notified of a potential SAR incident?",
    a: "Set up the coordination centre, declare and time the phase, notify JRCC, and start the log",
    w: [
      "Send all vessels to sea straight away, then work out where to search",
      "Post a request for sightings on social media and await replies",
      "Wait an hour for more information in case the vessel arrives"
    ],
    why: "Every piece of information received is evidence – log source, time and content.",
    src: "Marine SAR Guide – Setting up the coordination centre"
  },
  {
    q: "Which piece of target information most drives the urgency of the response?",
    a: "The number of persons on board (POB)",
    w: [
      "The vessel's colour",
      "The registration number",
      "The home port"
    ],
    why: "Also gather vessel description and engines, voyage plan and ETA, fuel endurance, emergency equipment (EPIRB registration, raft, flares), LKP and last contact, and weather at LKP.",
    src: "Marine SAR Guide – Gathering target information"
  },
  {
    q: "Before committing a search, which is one communication check you should make?",
    a: "Call marinas, fuel docks and ramps, family and friends, and ask JRCC for a beacon check",
    w: [
      "Wait for the target to call in, as most overdue vessels turn up",
      "Start with a search of the coast, as that is where most are found",
      "Contact the media and ask the public to look out for the vessel"
    ],
    why: "Many searches are resolved at this stage. Document every check and result.",
    src: "Marine SAR Guide – Communication checks"
  },
  {
    q: "You sight a red parachute rocket flare at night. Your immediate actions are to…",
    a: "Record the bearing, range, time and type, head there at best safe speed, notify authorities, and set lookouts",
    w: [
      "Wait for a second flare before moving, as one could be a mistake",
      "Assume it is part of a training exercise and carry on",
      "Fire a white flare in return so the other vessel knows you saw it"
    ],
    why: "SOLAS Ch V Reg 33 obliges the master to proceed with all speed to assist unless doing so places the rescuer at unreasonable risk. A flare sighting is a single line of position. A parachute flare is visible at greater range than a hand-held flare, which burns at a fixed point and indicates close proximity.",
    src: "Marine SAR Guide – Responding to pyrotechnic distress signals"
  },
  {
    q: "Which pyrotechnic is NOT a distress signal?",
    a: "A white flare",
    w: [
      "A red hand flare",
      "Orange smoke",
      "A red parachute rocket"
    ],
    why: "Orange smoke marks position by day.",
    src: "Marine SAR Guide – Pyrotechnic signal types"
  },
  {
    q: "Which position fix is the most reliable for SAR, in normal conditions?",
    a: "A GPS fix (about ±5 m), cross-checked visually",
    w: [
      "A dead reckoning position worked up from the last fix",
      "A single radar bearing of a headland or a charted object",
      "A position estimated from memory by the skipper of the vessel"
    ],
    why: "In order: GPS, radar (range and bearing), visual (cross bearings), DR. The method used to establish the LKP sets the initial position error (x).",
    src: "Marine SAR Guide – Position fixing"
  },
  {
    q: "Total drift of a target is the vector sum of…",
    a: "Sea current, wind current and leeway",
    w: [
      "Tide, swell and rain",
      "Wind speed, sea state and visibility",
      "Leeway, divergence and datum"
    ],
    why: "The datum (most probable position) is the LKP moved by total drift. Tidal stream dominates inshore; ocean currents offshore.",
    src: "Marine SAR Guide – Drift"
  },
  {
    q: "Wind current speed is approximately what proportion of the wind speed in deep water?",
    a: "3%",
    w: [
      "30%",
      "0.3%",
      "50%"
    ],
    why: "It is calculated for 6-hour synoptic periods using wind data from the 48 hours before the splash time. For a short coastal response it can be small enough to omit – but confirm first.",
    src: "Marine SAR Guide – Wind current"
  },
  {
    q: "What is leeway?",
    a: "Movement of the target caused by wind acting on its exposed surface above the waterline",
    w: [
      "Movement of the target caused by the tidal stream running past the hull",
      "The width of the search area on each side of the datum point",
      "The error in the GPS fix of the target at the last known position"
    ],
    why: "A yacht with high freeboard has more leeway than a low-profile boat; a PIW has little (about 0.29 kt in 20 kt of wind) but significant divergence (up to about 30° either side of downwind).",
    src: "Marine SAR Guide – Leeway and divergence"
  },
  {
    q: "Divergence in SAR means…",
    a: "The target drifts at an angle to the downwind direction, so left and right datums are plotted",
    w: [
      "The search legs spread apart as the vessel moves away from the datum",
      "The wind changes direction by more than 30° during the search",
      "The datum marker sinks below the surface after a time in the water"
    ],
    why: "The datum is the midpoint between the left and right leeway end points, and the drift error circle surrounds it.",
    src: "Marine SAR Guide – Divergence"
  },
  {
    q: "For an initial response, when must you start allowing for water movement (the “four-hour rule”)?",
    a: "Only if more than four hours have passed since the LKP (earlier in high-drift areas)",
    w: [
      "Immediately, in all cases, from the time of the first call to the base",
      "After twelve hours, once the first search has failed to find the target",
      "Never, as water movement only matters for a person in the water"
    ],
    why: "Within 4 hours the target is assumed close to the LKP. After that, drift must be calculated first and the search radius applied to the drifted datum.",
    src: "Marine SAR Guide – Three-stage search response · Coastal search model"
  },
  {
    q: "The coastal search model for a distress within 25 nm of the coast, reported within 6 hours, gives…",
    a: "A 6 nm radius circle squared off to 12 × 12 nm, an area of 144 nm²",
    w: [
      "A 1 nm radius circle around the datum, an area of about 3 nm²",
      "A 25 nm radius circle around the last known position of the target",
      "A 3 nm radius circle squared off to 6 × 6 nm, an area of 36 nm²"
    ],
    why: "x = 5 nm (unknown navigation method), y = 1 nm (GPS search asset): E = √26 = 5.1 nm × 1.1 safety factor = 5.6, rounded to 6 nm.",
    src: "Marine SAR Guide – The coastal search model"
  },
  {
    q: "The safety factor applied to the initial search radius is…",
    a: "1.1, rising to 1.6, 2.0, 2.3 and 2.5 with each expansion",
    w: [
      "2.5 for the initial search, falling to 1.1 with each expansion",
      "1.0 throughout, the same for every search that is carried out",
      "5.0 for the initial search, and 10.0 for any expansion after that"
    ],
    why: "R = E × safety factor. The factors ensure the expanding area still contains the target.",
    src: "Marine SAR Guide – Total probable error"
  },
  {
    q: "Datum should be recomputed…",
    a: "Every 2–4 hours on a coastal search, and at once if wind changes by over 10 knots or 30°",
    w: [
      "Once at the start of the search, when the LKP has been confirmed",
      "Every 24 hours, at the same time of day as the first calculation",
      "Only when the target is found, so that its position can be reported"
    ],
    why: "Drift error always increases with time, so the search area grows as the search progresses.",
    src: "Marine SAR Guide – Measuring set and drift"
  },
  {
    q: "Sweep width is…",
    a: "A calculated measure of detection capability, not how far you can see",
    w: [
      "How far you can see on a clear day from the bridge of the vessel",
      "The width of the search area on each side of the vessel's track",
      "The distance between successive search legs, set by the SMC"
    ],
    why: "Beam sighting distance (BSD) = W ÷ 2, applied to each side. Sea state is the largest single variable for vessel searches.",
    src: "Marine SAR Guide – Sweep width"
  },
  {
    q: "Sweep width for a vessel is calculated as…",
    a: "W = Wu × Fw × Ff (uncorrected width × weather factor × fatigue factor)",
    w: [
      "W = BSD ÷ 2, where BSD is the beam sighting distance on each side",
      "W = S × C, the track spacing multiplied by the coverage factor",
      "W = speed × time, the distance covered during the search"
    ],
    why: "Rotate observers every 20–30 minutes. At night, base sweep width on the range at which survivors would see the vessel's navigation lights.",
    src: "Marine SAR Guide – Sweep width formulas"
  },
  {
    q: "A coverage factor below what value is unsatisfactory except in extreme circumstances?",
    a: "0.5",
    w: [
      "0.1",
      "1.0",
      "2.0"
    ],
    why: "C = W ÷ S. C = 1.0 is ideal; higher values overlap and give very high POD but slow area coverage.",
    src: "Marine SAR Guide – Coverage factor"
  },
  {
    q: "Which statement about POD is correct?",
    a: "Five searches at C = 0.5 give almost as much cumulative POD as five at C = 1.0",
    w: [
      "POD is directly proportional to the coverage factor in all conditions",
      "More searches never raise the POD once the area has been covered",
      "POD is independent of the weather, sea state and target type"
    ],
    why: "Single search POD: 78% at C = 1.0; 47% at C = 0.5. Five searches: 99.9% versus 95.8%. In resource-limited situations a larger area at C = 0.5 can be the better choice – provided the target is in the area.",
    src: "Marine SAR Guide – Probability of detection"
  },
  {
    q: "Standard coastal track spacing in good conditions (wind <15 kn, visibility >3 nm) is up to…",
    a: "3 nm (0.25 nm for a person in water)",
    w: [
      "0.25 nm for every target",
      "10 nm",
      "1 nm for every target"
    ],
    why: "Poor conditions: about 1 nm. PIW in poor conditions: reduce as appropriate.",
    src: "Marine SAR Guide – Track spacing"
  },
  {
    q: "The drift rate problem occurs when…",
    a: "The target drifts through the area faster than the search can creep across it",
    w: [
      "The search vessel drifts off the datum while her engine is stopped",
      "The datum buoy is lost and no tidal information can be measured",
      "The sweep width falls to zero as the light fades near the end of the day"
    ],
    why: "Fix: orient search legs along the drift direction (most effective), shorten legs, increase speed, add a barrier search downcurrent, or request more assets. If legs must cross the drift, complete each in 30 minutes or less.",
    src: "Marine SAR Guide – The drift rate problem"
  },
  {
    q: "Which search pattern gives the best POD in a small area when the datum is well established (reliable GPS, <2–3 hours)?",
    a: "Sector search",
    w: [
      "Parallel track",
      "Creeping line",
      "Barrier search"
    ],
    why: "Sector: each course change 120°, limited to legs not exceeding about 3× the sweep width. Expanding square: area up to about 5 nm radius, every pair of legs one track spacing longer. Parallel track is the most adaptable and commonly used.",
    src: "Marine SAR Guide – Search patterns"
  },
  {
    q: "Which pattern suits a large area where the target is more likely to be at one end?",
    a: "Creeping line",
    w: [
      "Sector",
      "Shore line",
      "Expanding square"
    ],
    why: "Same as parallel track but with legs at right angles to the major axis. Barrier: river or channel with strong flow. Shore line: target may have grounded or survivors swum ashore. Track line: along a known route.",
    src: "Marine SAR Guide – Search patterns"
  },
  {
    q: "When running a search pattern for a floating target you steer legs by…",
    a: "Compass for direction and time at set speed for length, not GPS course over ground",
    w: [
      "GPS course and speed over the ground, to keep the legs exact on the chart",
      "The plotter's autopilot track, set to follow the pattern lines",
      "Radar range rings alone, set at the track spacing for the search"
    ],
    why: "Tide and current distort the pattern relative to the water; legs can cross or track spacing stretch to twice the intended distance. Use speed through the water and constant revs.",
    src: "Marine SAR Guide – GPS and search patterns"
  },
  {
    q: "When pausing a search you should return afterwards to…",
    a: "The floating datum marker you deployed, not the GPS waypoint",
    w: [
      "The GPS waypoint you saved when you left the pattern",
      "The original LKP, as plotted on the chart at the start of the search",
      "The nearest buoy or beacon marked on the chart in that area"
    ],
    why: "The water moves: with a 0.5 kn current about 200 m in 10 minutes. The marker also gives a real measurement of the tide/current.",
    src: "Marine SAR Guide – Floating datum"
  },
  {
    q: "A report of a possible sighting arrives from an untrained observer. What do you do?",
    a: "Log it, assess it against drift and the search area, tell the SMC, and send an extra asset if plausible",
    w: [
      "Divert all of the assets to the sighting, as every report must be checked at once",
      "Ignore it, since reports from untrained observers are rarely reliable",
      "Tell the media, who may be able to find a witness to confirm it"
    ],
    why: "Modify the search for confirmed intelligence, material drift changes (wind shift >30°, speed >10 kn), or an exhausted area – not for a “feeling” or a lack of results.",
    src: "Marine SAR Guide – On-scene intelligence"
  },
  {
    q: "A search can be suspended only when…",
    a: "There is no reasonable chance of finding survivors alive and the SAR Authority agrees",
    w: [
      "The SMC alone decides, once the first day's search has been completed",
      "The weather turns bad, or the light fades so the search is hard to continue",
      "The first day ends without a sighting, whatever state the target is in"
    ],
    why: "NATSAR 2026 s.6.3. Reopening requires careful evaluation of new information (s.6.4).",
    src: "Marine SAR Guide – Managing a search suspension"
  },
  {
    q: "A reporter calls and asks whether a search is under way. A crew member should…",
    a: "Not confirm or deny it, and refer the enquiry to the SMC or Police",
    w: [
      "Give the details so that the family are told what is being done",
      "Post a note on social media to ask the public to help in the search",
      "Say the target is probably lost, so the reporter will not wait"
    ],
    why: "Do not reveal identities, search areas, assets or likely outcome. Within AVCGA the Flotilla Captain or duty officer refers all media enquiries upward.",
    src: "Marine SAR Guide – Media and public information"
  },
  {
    q: "A 406 MHz EPIRB with an internal GPS gives a position accurate to roughly…",
    a: "100 m",
    w: [
      "5 km",
      "50 km",
      "1 nm"
    ],
    why: "Non-GPS 406 MHz (LEOSAR Doppler) is ~5 km; MEOSAR is ~2–5 km within 10 minutes. 121.5 MHz is a short-range homing signal on modern beacons; satellite processing of 121.5 MHz ceased on 1 February 2009.",
    src: "Marine SAR Guide – From EPIRB activation to asset dispatch"
  },
  {
    q: "Why does beacon registration matter?",
    a: "A registered beacon tells JRCC the vessel, owner and contacts, often resolving the alert by phone",
    w: [
      "It makes the beacon louder and the signal stronger for the satellites overhead",
      "It extends the battery life of the beacon by several years in storage",
      "It only matters for insurance and has no effect on the response"
    ],
    why: "Beacon chain: beacon → COSPAS-SARSAT satellites (MEOSAR/GEOSAR/LEOSAR) → Local User Terminal → AMSA Mission Control Centre (AUMCC) → JRCC Australia → check register and phone owner → declare phase → dispatch. Many activations are accidental.",
    src: "Marine SAR Guide – From EPIRB activation to asset dispatch"
  },
  {
    q: "DSC distress alerts are first sent on…",
    a: "VHF Channel 70 (digital only); follow-up voice traffic is on Channel 16",
    w: [
      "Channel 16 by voice, followed by a digital alert on Channel 70",
      "Channel 22A, which is the Coast Guard working channel in Australia",
      "Channel 80, which is reserved for marina and port operations"
    ],
    why: "MF: 2187.5 kHz DSC with voice on 2182 kHz. HF DSC is monitored by AMSA in the 4–16 MHz bands. Ch16 = 156.8 MHz.",
    src: "Marine SAR Guide – GMDSS and distress frequencies"
  },
  {
    q: "In water at 4–10°C, approximately what proportion of people survive longer than one hour?",
    a: "About 50%",
    w: [
      "About 5%",
      "Nearly everyone",
      "About 90%"
    ],
    why: "Water conducts heat about 25 times faster than air. At 15–21°C survival can be up to 12 hours; above 21°C depends on fatigue. The first 4 hours of an incident are the most critical.",
    src: "Marine SAR Guide – Person in water"
  },
  {
    q: "In a night aural search for a person in the water you should…",
    a: "Stop engines, sound the horn once, listen for up to 60 seconds, with lights on and occasional searchlight sweeps",
    w: [
      "Run engines flat out to cover the area faster while the light holds, sounding the horn",
      "Sound the horn continuously so that the person in the water can find the vessel",
      "Switch all lights off to keep your night vision while you listen"
    ],
    why: "Only at the OSC's direction after consulting the SMC. The horizon from a person floating in the water is only about 0.85 nm.",
    src: "Marine SAR Guide – Aural search"
  },
  {
    q: "If rescue of located survivors will be delayed more than 30 minutes, the best marking option is…",
    a: "A strobe light or a self-locating datum marker buoy (SLDMB)",
    w: [
      "Orange smoke only, which lasts for several hours and is easily seen",
      "Sea marker dye only, which stays on the surface in a rough sea",
      "Nothing at all: just stay in sight of the survivors until help arrives"
    ],
    why: "Smoke and dye are short-term and dissipate quickly. Long-term options include EPIRBs packed in rafts, SLDMBs and See-Blitz strobes (4–5 hours).",
    src: "Marine SAR Guide – Marking targets when rescue is delayed"
  },
  {
    q: "The minimum fuel reserve for a SAR vessel is…",
    a: "One third of the total fuel (and at least 30 minutes)",
    w: [
      "5% of the tank, as gauges show usable fuel quite accurately",
      "None, if the tide is favourable for the whole of the trip home",
      "Half of the fuel, kept for the passage home and for use on arrival"
    ],
    why: "Available search endurance = (total fuel − reserve) ÷ consumption. A vessel that runs out of fuel becomes a second incident.",
    src: "Marine SAR Guide – Calculating search time · Vessel operational limits"
  },
  {
    q: "A SAR vessel log entry…",
    a: "Must be made for every operation, whatever the outcome, and is a legal document",
    w: [
      "Is optional for short jobs that take less than an hour on the water",
      "Is only needed when a rescue is made and someone is brought aboard",
      "Can be written up some weeks later, once the debrief has been held"
    ],
    why: "Record time and nature of the alert, positions, phase declared, actions, communications, resources, weather, arrival, outcome, stand-down and authority, and the officer's name and signature.",
    src: "Marine SAR Guide – Vessel log and regulatory documentation"
  }
]);

MQ.add("towing", [
  {
    q: "The AVCGA liability waiver before a tow is delivered…",
    a: "Verbally, word for word, with the DV master's acceptance recorded in the Ship's Log first",
    w: [
      "In writing the next day, once the DV master has signed the form ashore",
      "Only for large vessels, where the risk of damage to the tow is higher",
      "By radio after the tow is under way, once the line has been secured"
    ],
    why: "“…responsibility for your vessel's safety remains with yourself.” The DV master remains responsible for their vessel, crew and passengers; the skipper of the rescue vessel remains responsible for the tow operation.",
    src: "NATRAC002 Towing Guide §1.1 · Ops"
  },
  {
    q: "A skipper may refuse or defer a request for assistance when…",
    a: "Proceeding would place the rescue vessel, crew or others at unacceptable risk",
    w: [
      "The DV owner is rude or unwilling to follow instructions on the radio",
      "The tow would be a long one, back to the base at the end of the day",
      "It is raining, and the crew would get wet on the afterdeck"
    ],
    why: "Examples: unsafe sea/bar conditions, inadequate vessel or crew, DV too unseaworthy, night/reduced visibility/fatigue, or the DV cannot be reached safely. Communicate the decision clearly to the radio room.",
    src: "NATRAC002 Towing Guide §1.1"
  },
  {
    q: "A displacement vessel towed faster than its hull speed…",
    a: "Climbs its own bow wave: drag soars, the towline may part and she may yaw or swamp",
    w: [
      "Planes over the water and runs easily, with less strain on the towline",
      "Needs less force from the tug, as the wave helps to push it along",
      "Puts less strain on the towline, as the bow lifts clear of the water"
    ],
    why: "Hull speed ≈ 1.34 × √LWL (feet). Planing hulls are different – the MRQ guide says stay below hull speed unless the tow has a planing hull.",
    src: "NATRAC002 Towing Guide §1.2"
  },
  {
    q: "Yawing in a tow can be reduced by…",
    a: "A drogue, a longer line, lower speed, a bridle, motor down, or active steering in the wake",
    w: [
      "A shorter, tighter towline, so the DV cannot swing from side to side",
      "Higher speed, so the DV is pulled straight by the force of the water",
      "Moving all the crew forward onto the bow of the DV to hold it down"
    ],
    why: "Jet-powered craft have no prop or rudder drag, so a drogue is considered essential for them.",
    src: "NATRAC002 Towing Guide §1.2"
  },
  {
    q: "Which tow configuration is suited to confined waters or when the DV cannot steer?",
    a: "Rafted (alongside)",
    w: [
      "Long stern line tow",
      "Bridle tow behind a drogue",
      "Tow with the DV at 2 wave lengths"
    ],
    why: "It gives close control, access to the DV and is used entering a marina, but reduces manoeuvrability and raises collision risk. Open water is normally a stern line tow.",
    src: "NATRAC002 Towing Guide §1.3"
  },
  {
    q: "As a general guide the length of towline run out places the DV…",
    a: "One to two wave lengths astern of the rescue vessel (two if rough or large)",
    w: [
      "As close as possible, just clear of the rescue vessel's wash and propellers",
      "Exactly 10 m astern, whatever the sea state and the size of the DV",
      "Alongside the rescue vessel, rafted up so it can be steered easily"
    ],
    why: "The DV then sits on the same part of the wave cycle, reducing slack-then-snatch loading. A longer line also gives more catenary and absorbs shock.",
    src: "NATRAC002 Towing Guide §1.3"
  },
  {
    q: "Before crossing a bar with a vessel under tow you should…",
    a: "Transfer excess people, seat the rest in lifejackets with the helm centred, brief the DV master and ready a drogue",
    w: [
      "Leave everyone on the DV standing, so they can react to the waves and keep it balanced",
      "Take off the lifejackets so that the crew can swim free if the DV capsizes on the bar",
      "Tow at hull speed plus 2 knots to get through the bar before it breaks"
    ],
    why: "Slack water or a flooding tide is generally preferred. If the DV is unlikely to survive the bar, don't cross. Show the restricted-manoeuvrability signals before approaching.",
    src: "NATRAC002 Towing Guide §1.4"
  },
  {
    q: "Which sound signal does a TOWING vessel give in restricted visibility (every 2 minutes at most)?",
    a: "One prolonged blast followed by two short blasts",
    w: [
      "Two short blasts followed by one prolonged",
      "Three short blasts followed by one prolonged",
      "Two prolonged blasts"
    ],
    why: "COLREGS Rule 35(c). The last vessel in the tow (if manned) gives one prolonged then three short. Note that the NATRAC002 study guide prints these reversed – check against Rule 35 itself.",
    src: "COLREGS Rule 35"
  },
  {
    q: "Which pump is the usual choice for portable dewatering on Coast Guard jobs?",
    a: "A portable vacuum/diaphragm pump, which is self-priming and tolerates debris",
    w: [
      "A centrifugal pump, which is self-priming and easy to carry aboard",
      "A bucket and bilge sponge, which are the quickest and cheapest option",
      "The fire main pump alone, which has capacity for any flooding"
    ],
    why: "Centrifugal pumps move large volumes but are not generally self-priming and can be blocked by debris – more common as fixed installations.",
    src: "NATRAC002 Towing Guide §1.7"
  },
  {
    q: "Why would you transfer a crew member to the distressed vessel?",
    a: "To run a pump, take the helm, help an injured person, fight a fire or help rig the tow, at the skipper's decision",
    w: [
      "To save fuel by reducing the weight carried on the rescue vessel and lighten her",
      "To lighten the DV's bow and so raise it clear of the water ahead",
      "Because the DV master has asked for one of the crew to be sent across"
    ],
    why: "Weigh the risk of placing a crew member on a potentially unsafe vessel against the benefit; maintain communication.",
    src: "NATRAC002 Towing Guide §1.8"
  },
  {
    q: "When attaching the towline to a towing tyre, the recommended knot is…",
    a: "A double sheet bend – not a bowline, which can chafe and snap",
    w: [
      "A bowline, which holds well and is quick to tie",
      "A reef knot, which is easy to untie when the tow ends",
      "A single half hitch, finished with a stopper in the tail"
    ],
    why: "Never secure the towline with a half hitch – it jams under load and cannot be released in an emergency.",
    src: "NATRAC002 Towing Guide · SOP-111"
  },
  {
    q: "On the NS 11 samson post the towline is made fast with…",
    a: "Two or three figure-of-eights, then two or three loose round turns above the standing part",
    w: [
      "A single half hitch, finished with a stopper knot in the tail of the line",
      "A reef knot made from the tail and the standing part of the line",
      "Four tight half hitches, one after another, around the post"
    ],
    why: "Keep hands well clear of the samson post. The alternate method for large vessels is the lighterman's hitch, which can be released under load.",
    src: "NATRAC002 Towing Guide · SOP-111"
  },
  {
    q: "What is the purpose of closing one half of the cabin door during a tow?",
    a: "To protect crew from towline recoil if it parts",
    w: [
      "To keep spray out",
      "To stop the engine noise on the afterdeck",
      "To lock the radio room"
    ],
    why: "Deckhands move to the cabin area after the tow is established. The snap-back zone extends across the stern.",
    src: "NATRAC002 Towing Guide · SOP-111"
  },
  {
    q: "After passing the towline, the lead deckhand reports…",
    a: "“TOW LINE PASSED”, then “YOU HAVE THE TOW” once the line is secured and takes up",
    w: [
      "“LINE ON”, then “TOWING” when the vessel starts to move ahead",
      "“MAKE FAST”, then “ALL FAST” when the DV master has the line",
      "“STAND BY”, then “LET GO” when the line has been taken aboard"
    ],
    why: "The skipper orders “MAKE FAST THE LINE” at the correct length. Rigging must be done quickly to prevent fouling the jets or propeller of the towed vessel.",
    src: "NATRAC002 Towing Guide · SOP-111"
  },
  {
    q: "How should the towline be stowed after recovery?",
    a: "Loosely in the bin, not coiled (“higgledy-piggledy”), so it runs freely next time",
    w: [
      "Tightly coiled in a neat flake, so it does not take up space in the bin",
      "Tied in a figure-of-eight and hung from the rail on the afterdeck",
      "Left in a heap on the deck, ready to use on the next tasking"
    ],
    why: "Recovering: skipper orders “RECOVER THE TOW”; lead deckhand orders “STOP ENGINES”, signals the DV to cast off, and calls “TOW RECOVERED”. If a drogue was used, recover it too.",
    src: "NATRAC002 Towing Guide · SOP-120"
  },
  {
    q: "What is the tow watch?",
    a: "A deckhand set to watch the towed vessel and report to the skipper, rotated on long tows",
    w: [
      "The skipper alone, who watches the DV from the helm at all times",
      "The DV master, who keeps a record of the tow and reports by radio",
      "An automatic alarm that sounds when the towline tension is too high"
    ],
    why: "The skipper regularly checks that tow length remains satisfactory.",
    src: "NATRAC002 Towing Guide · SOP-111"
  },
  {
    q: "Instructions you give to the DV master once the waiver is accepted include…",
    a: "Motor down (if outboard), helm centred, lifejackets on, crew seated, steer in the wake, excess crew across",
    w: [
      "Pull the kill cord and drift while the rescue vessel secures the line to the post",
      "Set the motor to full throttle to help the rescue vessel to pull the tow",
      "Stand on the bow to watch the towline and be ready to cast it off"
    ],
    why: "Consider a drogue, which is vital for jet craft.",
    src: "NATRAC002 Towing Guide · Ops"
  },
  {
    q: "MRQ requires that a tow goes to…",
    a: "The nearest reasonable place of safety, and only when needed for safety",
    w: [
      "The tower's home berth, whichever is closest to the base on the day",
      "Wherever the DV master asks, since they are responsible for their vessel",
      "The nearest boat ramp, regardless of safety or the state of the bar"
    ],
    why: "The towed vessel must not exceed the MRQ vessel's rated towing capacity, and a risk assessment must find the risk acceptable. For tows over 50 m overall in a pilotage area, notify VTS first.",
    src: "MRQ Vessel Crew Guide v0.1 – Towing"
  },
  {
    q: "When towing, a vessel that qualifies as restricted in ability to manoeuvre still has…",
    a: "A duty under Rule 2 to do whatever it can to avoid a collision",
    w: [
      "No duty to avoid a collision, since other vessels must keep clear",
      "A duty to give way to all other vessels in the vicinity at all times",
      "Right of way over every other vessel, whatever the circumstances"
    ],
    why: "RAM status gives higher priority in the hierarchy, not a licence to be passive. Display the correct lights and shapes regardless.",
    src: "NATRAC002 Towing Guide §1.6"
  },
  {
    q: "In daylight within 1 nm of the bar, a MRQ/Coast Guard towing vessel displays…",
    a: "The “restricted manoeuvrability” day shape (ball–diamond–ball) on the halyard",
    w: [
      "A cylinder hoisted on the halyard to show the draught of the tow",
      "A white flag hoisted from the mast to show the tow is under way",
      "A single black ball hoisted forward to show the vessel is at anchor"
    ],
    why: "At night, activate towing lights; RAM lights may also be shown.",
    src: "NATRAC002 Towing Guide · Ops (SOP-111 s.4.20)"
  },
  {
    q: "What is the “line clear” signal from the DV crewman when the tow is released?",
    a: "An arm extended sharply sideways, then swept across the front of the chest",
    w: [
      "Both arms raised above the head and held there until the line is clear",
      "A thumbs-up held out so the tow watch can see it from the stern",
      "A circle drawn in the air with the arm to show the line is free"
    ],
    why: "The signal may not always be given – the DV may also confirm by radio.",
    src: "NATRAC002 Towing Guide · SOP-120"
  },
  {
    q: "What safety factor does the towing guide apply to a fibre rope's MBS to find its safe working load?",
    a: "At least 6, and a further 50% off for knotted or damaged line",
    w: [
      "1, because the MBS figure already includes a safety factor for the line",
      "2, as for most other items of lifting and rigging gear on board",
      "60, as the MBS figure is given in tonnes and not in kilonewtons"
    ],
    why: "Note: the GPH guide uses a factor of safety of 5 for marine equipment generally; check your SMS for the factor it requires.",
    src: "NATRAC002 Towing Guide §1.2 · GPH Part 1"
  },
  {
    q: "Why is the stern line tow the standard configuration in open water?",
    a: "It gives the rescue vessel maximum manoeuvrability and a long line to absorb snatch loads",
    w: [
      "It is the shortest tow, using the least line, so it saves time on deck",
      "It needs no towline at all, because the DV is held in the wake",
      "It reduces fuel use to almost zero, as the DV is pulled along behind"
    ],
    why: "The trade-off in confined water is less control, hence rafting alongside.",
    src: "NATRAC002 Towing Guide §1.3"
  }
]);

