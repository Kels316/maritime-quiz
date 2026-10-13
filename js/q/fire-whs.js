/* Question data – fire-whs. Fields: q, a (correct), w (3 wrong options), why, src, vis (optional). */
MQ.add("fire", [
  {
    q: "Which four elements make up the fire tetrahedron?",
    a: "Fuel, oxygen, heat and the chemical chain reaction",
    w: [
      "Fuel, oxygen, water and spark",
      "Fuel, air, wind and ignition",
      "Heat, smoke, fuel and pressure inside the compartment"
    ],
    why: "Remove any one and the fire goes out: move fuel or shut the fuel cut-off; exclude oxygen by closing vents/hatches; cool with water-spray boundary cooling; break the chain reaction with dry chemical or CO₂.",
    src: "MARF028 Fire Guide §1.1"
  },
  {
    q: "The flashpoint of a liquid is…",
    a: "The lowest temperature at which it gives off vapour that flashes momentarily",
    w: [
      "The lowest temperature at which it burns continuously once it has been lit",
      "The temperature at which the liquid explodes when it is heated in a closed tank",
      "The boiling point of the liquid at normal pressure at sea level"
    ],
    why: "Ignition temperature: burns continuously if ignited. Auto-ignition temperature: ignites with no external source. A flammable liquid (e.g. petrol) has a flashpoint at or below 60.5°C; diesel is combustible, with a higher flashpoint.",
    src: "MARF028 Fire Guide §1.1"
  },
  {
    q: "Petrol vapour has a vapour density greater than 1. What does that mean aboard?",
    a: "The vapour sinks and collects in the bilges, where one spark can ignite it",
    w: [
      "The vapour rises and disperses harmlessly into the open air above the deck",
      "The vapour floats just above the deck, where the wind carries it away",
      "The vapour dissolves in the bilge water and is carried out by the pump"
    ],
    why: "Always ventilate and check for vapour before starting an engine, especially after refuelling. Allow at least 30 minutes airing after a fuel spill with no smell.",
    src: "MARF028 Fire Guide §1.1 · §1.3"
  },
  {
    q: "Oily or paint-soaked rags can ignite without any flame because of…",
    a: "Spontaneous combustion: slow oxidation makes heat that cannot escape",
    w: [
      "Static electricity that builds up in the fabric as the rags are handled",
      "Sunlight shining through the window and focused onto the rags by the glass",
      "Radio transmissions from the vessel's VHF set heating the loose fabric"
    ],
    why: "Store them in a sealed, fire-rated container and dispose of them ashore.",
    src: "MARF028 Fire Guide §1.3 · GPH Part 3"
  },
  {
    q: "Heat spreads a fire by radiation, convection and…",
    a: "Conduction (through solids)",
    w: [
      "Condensation (through the air)",
      "Evaporation",
      "Combustion"
    ],
    why: "Radiation: in all directions. Convection: through liquid or air. Conduction: through solids – hence boundary cooling of adjacent compartments.",
    src: "MARF028 Fire Guide §1.1"
  },
  {
    q: "Which is a Class B fire?",
    a: "Petrol, diesel and other flammable or combustible liquids",
    w: [
      "Wood, paper, cloth and other carbonaceous solids found in the cabin",
      "Cooking fats and oils in the galley, which are fought with wet chemical",
      "Magnesium and other metals, which need a special powder extinguisher"
    ],
    why: "A: carbonaceous solids; B: liquids; C: gases; D: metals; (E): electrical; F: cooking fats/oils. Class B burns with toxic black smoke.",
    src: "MARF028 Fire Guide §1.2"
  },
  {
    q: "For a Class C (gas) fire the first action is to…",
    a: "Shut off the gas supply before fighting the fire",
    w: [
      "Apply water spray at the source of the leak",
      "Smother it with a blanket",
      "Open the hatches to ventilate"
    ],
    why: "Gas fires are explosive in nature. LPG is stored above deck or in a gas locker that vents overboard.",
    src: "MARF028 Fire Guide §1.2"
  },
  {
    q: "Which extinguisher or medium is correct for a galley fat fire (Class F)?",
    a: "Wet chemical extinguisher or a fire blanket",
    w: [
      "Water extinguisher",
      "A fire bucket of seawater, thrown across the pan",
      "Foam extinguisher"
    ],
    why: "Water on superheated fat vaporises instantly and scatters burning oil (“splatback”). A fire blanket must be stowed close to any stove where oil may be heated.",
    src: "MARF028 Fire Guide §1.2 · §2.1"
  },
  {
    q: "Which of these should NEVER be used on a live electrical fire?",
    a: "Water",
    w: [
      "CO₂",
      "Dry chemical powder",
      "Isolating the circuit first"
    ],
    why: "Water conducts electricity. Isolate the circuit, use CO₂ sparingly (1–2 short squirts) or DCP, and ventilate thoroughly after CO₂.",
    src: "MARF028 Fire Guide §2.1 · §4.6"
  },
  {
    q: "A portable extinguisher with a red body and a white band is…",
    a: "Dry chemical powder (ABC/BE), which interrupts the chain reaction",
    w: [
      "Carbon dioxide, which dilutes the oxygen so that the fire goes out",
      "Foam, which blankets the fuel and so keeps the oxygen from the surface",
      "Wet chemical, which turns cooking fat into a soapy film on the surface"
    ],
    why: "Water: red. Foam: blue band. DCP: white band. CO₂: black band. Wet chemical: beige band. B570 powder (Class D metals) is yellow.",
    src: "MARF028 Fire Guide §2.1"
  },
  {
    q: "A red extinguisher with a black band is…",
    a: "CO₂, which dilutes the oxygen: for small or electrical fires",
    w: [
      "Foam, which blankets fuel and is used mainly on liquid fires",
      "Water, which removes heat and is used only on carbonaceous solids",
      "Dry chemical powder, which is used on A, B, C and electrical fires"
    ],
    why: "Ventilate after use – CO₂ can asphyxiate in a confined space.",
    src: "MARF028 Fire Guide §2.1"
  },
  {
    q: "A foam extinguisher (red with a blue band) is suitable for…",
    a: "Class A and B fires",
    w: [
      "Class A only",
      "Class C and D fires",
      "Class F fires only"
    ],
    why: "It blankets the fuel/oxygen interface. Water extinguishers are for Class A only.",
    src: "MARF028 Fire Guide §2.1"
  },
  {
    q: "A fire bucket on a vessel is used for…",
    a: "Class A fires only; the lanyard must reach the water",
    w: [
      "Fuel fires, where the water will float the fuel clear of the hull",
      "Electrical fires, where the water cools the wiring and isolates it",
      "Galley oil fires, where the water chills the oil below its flashpoint"
    ],
    why: "Metal, painted red, marked FIRE. Small vessels not required to carry fire hose appliances carry fire buckets instead.",
    src: "MARF028 Fire Guide §2.1"
  },
  {
    q: "Using a portable extinguisher, the PASS sequence is…",
    a: "Pull the pin, Aim at the base of the fire, Squeeze the handle, Sweep across it",
    w: [
      "Point, Aim, Spray, Stop, repeating until the fire is out completely",
      "Pull, Arm, Shoot, Stand back, and then check the gauge for pressure",
      "Push, Aim, Squeeze, Step back, then retreat to the exit and watch the fire from there"
    ],
    why: "Stay low, upright, back to an exit, protected from heat and smoke.",
    src: "MARF028 Fire Guide §2.2"
  },
  {
    q: "After using a portable extinguisher you should…",
    a: "Lay it on its side to show it needs recharging, don't reuse it part-discharged, and report it",
    w: [
      "Hang it back in its bracket so that it is ready to use again at once",
      "Keep it in service until it is empty, since a part-used unit is still useful in an emergency",
      "Throw it overboard, as an extinguisher that has been used cannot be refilled"
    ],
    why: "Recharge and re-inspect all equipment used.",
    src: "MARF028 Fire Guide §2.1"
  },
  {
    q: "What is the maximum working weight of a “portable” extinguisher?",
    a: "23 kg",
    w: [
      "5 kg",
      "50 kg",
      "12 kg"
    ],
    why: "Designed to be carried and operated by hand (MO15 Sch 2). Marine portables are built and tested to IMO Res. A.951(23).",
    src: "MARF028 Fire Guide §2.1"
  },
  {
    q: "Six-monthly inspection of a stored-pressure extinguisher may be done by…",
    a: "A crew member who holds a certificate of competency other than GPH",
    w: [
      "Any General Purpose Hand who has completed the fire unit successfully",
      "Only an accredited service provider, who issues a certificate each time",
      "Only the manufacturer of the extinguisher, at the factory or an agent"
    ],
    why: "12-monthly and five-yearly services need an accredited or licensed provider. CO₂, wheeled and non-stored-pressure types are not crew-serviceable. Record the date and the name and qualification of the person.",
    src: "MARF028 Fire Guide §2.1 (AMSA 707 / AS 1851-2012)"
  },
  {
    q: "A six-monthly crew inspection of an extinguisher confirms the pressure gauge reads…",
    a: "In the operable (green) range, and the unit is weighed to confirm it is fully charged",
    w: [
      "Just above zero, which shows that the unit has stored pressure in reserve for use",
      "In the red zone, which is the safety margin that is set by the maker",
      "Whatever it read last time, as the needle never moves in storage"
    ],
    why: "Also check location and access, anti-tamper device, tag, hose and nozzle, damage or corrosion, bracket, free-flowing powder (invert powder units) and a free-moving actuating device. A unit that fails must be replaced or serviced before getting underway.",
    src: "MARF028 Fire Guide §2.1"
  },
  {
    q: "On detecting a fire, ventilation should be…",
    a: "Shut down (fans off, dampers closed), as ventilation rapidly spreads fire and smoke",
    w: [
      "Increased to clear the smoke from the spaces and let the crew breathe",
      "Left as it is, because stopping it would reduce the air for the engine",
      "Opened up wide to let the heat out of the compartment through the vents and the doors"
    ],
    why: "Keep fire doors closed underway. All vessels must have remote stops for the fuel supply and for ventilation, accessible outside the space they serve.",
    src: "MARF028 Fire Guide §2.3"
  },
  {
    q: "A centrifugal fire pump must be…",
    a: "Primed (filled with water) before the engine is started",
    w: [
      "Run dry for a minute first to warm the casing before it is primed",
      "Fitted with a gas line from the cylinder to the suction side first",
      "Started with the hose uncoupled so that air can be pushed out of it"
    ],
    why: "Priming is quickest by pumping the suction hose up and down in the water. A 2-inch hose delivers roughly 600 L/min; 3-inch about 1,000 L/min. Jet gives range, spray gives personal protection and cooling, fog gives suppression.",
    src: "MARF028 Fire Guide §2.4"
  },
  {
    q: "The alarm signal for fire on board is…",
    a: "“FIRE. FIRE. FIRE.” announced three times",
    w: [
      "Five short blasts",
      "Two prolonged blasts",
      "One long blast on the whistle, repeated"
    ],
    why: "On discovery: sound the alarm immediately, notify the master and muster all crew.",
    src: "MARF028 Fire Guide §2.5"
  },
  {
    q: "An International Shore Connection (ISC) is…",
    a: "A standard flanged coupling letting shore brigades or other vessels connect to the fire main",
    w: [
      "A shore power plug letting the vessel use mains electricity at the berth",
      "A fuel hose connection used at the fuel wharf for filling the main tanks",
      "A bilge pump adaptor, allowing a shore pump to be used on a flooded vessel at the berth"
    ],
    why: "Stowed accessibly on the open deck, remote from fire risk. Vessels of 35 m and over fit at least one ISC on the fire main under NSCV C4.",
    src: "MARF028 Fire Guide §2.5"
  },
  {
    q: "Before a fixed CO₂, mist or aerosol system discharges you must…",
    a: "Evacuate and seal the space (vents, flaps, dampers); a pre-discharge alarm gives 20+ seconds",
    w: [
      "Open all the hatches to give the agent room to spread out in the space around the fire",
      "Stay inside the space to monitor the discharge and check the gauges",
      "Ventilate the space first, so that the agent does not build up in it"
    ],
    why: "CO₂ is an asphyxiant. FirePro condensed aerosol (potassium carbonate particles under 10 µm) interrupts the chain reaction without significantly depleting oxygen; it replaced halon after the Montreal Protocol.",
    src: "MARF028 Fire Guide §2.7–2.8"
  },
  {
    q: "Why is CO₂ a hazard after a fire has been fought?",
    a: "It displaces oxygen, risking asphyxiation, and a fire can re-ignite if oxygen returns",
    w: [
      "It is highly flammable and can catch light from a hot engine surface in the space",
      "It corrodes the hull plating and the pipework once the fire is out",
      "It is toxic to engines only and has no effect on people in the space"
    ],
    why: "Evacuate before fixed-system discharge; ventilate the cabin afterwards because gas can seep through bulkheads into the bilge area.",
    src: "MARF028 Fire Guide §2.7 · §4.3"
  },
  {
    q: "The RACE acronym stands for…",
    a: "Rescue, Alarm, Confine, Extinguish or Evacuate",
    w: [
      "Run, Alert, Call, Escape",
      "Report, Assess, Cool, Exit",
      "Rescue, Attack, Contain, End the incident"
    ],
    why: "Rescue anyone in immediate danger without risking yourself; alarm and call 000; confine by closing doors; extinguish only if safe, otherwise evacuate. We are not firefighters – respond effectively while remaining safe.",
    src: "MARF028 Fire Guide §3.1"
  },
  {
    q: "What is the primary cause of death in fires?",
    a: "Smoke (and toxic gases such as CO)",
    w: [
      "Burns",
      "Explosions of fuel vapour",
      "Falls"
    ],
    why: "Smoke blocks light and causes disorientation; CO/CO₂ cause hypoxia; plastics give toxic black smoke. Don't enter a smoke-filled space without breathing apparatus.",
    src: "MARF028 Fire Guide §3.2"
  },
  {
    q: "Water used to fight a fire on deck can endanger the vessel by…",
    a: "The free surface effect: water on deck destabilises the vessel, so pump it overboard",
    w: [
      "Making the deck slippery only, so the crew should wear non-slip boots when fighting the fire",
      "Raising the temperature of the hull plating above the safe limit",
      "Blocking the scuppers permanently with burnt debris from the fire"
    ],
    why: "Keep scuppers and freeing ports clear.",
    src: "MARF028 Fire Guide §3.2"
  },
  {
    q: "You suspect a fire in the engine compartment. Which action is wrong?",
    a: "Open the hatch to look at it",
    w: [
      "Stop the engines and close air vents",
      "Operate the fixed system and transmit a MAYDAY",
      "Check the deck above for heat and cool it"
    ],
    why: "Opening a compartment reintroduces oxygen and risks a backdraught. Return to shore and let the fire service open it. Ventilate the cabin against CO/CO₂, prepare to abandon, and do not re-open hatches; if not controlled, abandon ship.",
    src: "MARF028 Fire Guide §4.2–4.3"
  },
  {
    q: "An outboard engine is on fire. You should NOT…",
    a: "Remove the engine cowling",
    w: [
      "Switch off the ignition and close the fuel stopcock",
      "Isolate the battery for that motor",
      "Smother with a wet fire blanket held as a shield"
    ],
    why: "Removing the cowling adds oxygen and intensifies the fire. Don't pour water directly onto a fuel fire. When controlled, isolate fully (electrics and fuel) and return on the other engine.",
    src: "MARF028 Fire Guide §4.4"
  },
  {
    q: "A crew member's clothing is soaked in fuel. Before removing it you should…",
    a: "Soak it with seawater first: removing it dry can create static that ignites vapour",
    w: [
      "Remove it quickly, since fuel against the skin can cause serious burns to the person",
      "Dry it with a rag first, to stop the fuel from running onto the deck",
      "Light a cigarette to test whether any fuel vapour remains in the cloth"
    ],
    why: "Also stop engines, close the cabin door and fuel stopcocks, mop with rags kept in a fire bucket on deck, wash fuel off through scuppers, and allow 30 minutes of airing before restart.",
    src: "MARF028 Fire Guide §4.5"
  },
  {
    q: "In the fire drill at sea on hearing “FIRE. FIRE. FIRE.”, the first action by everyone is to…",
    a: "Don lifejackets",
    w: [
      "Launch the life raft",
      "Stop all engines",
      "Open the engine hatch"
    ],
    why: "Helmsman steers into wind and reduces speed (engines not stopped yet) and takes the EPIRB; the skipper radios PAN PAN or MAYDAY with position; the lead deckhand prepares the raft (does not release it); the second deckhand collects extinguisher and fire bucket.",
    src: "MARF028 Fire Guide §4.1 (SOP-145)"
  },
  {
    q: "Multiple fires break out in several locations on the vessel. The sequence is…",
    a: "MAYDAY or EPIRB, engines off, close hatches, skipper takes EPIRB and flares, raft launched, abandon on order",
    w: [
      "Fight each fire in turn with the buckets and the extinguishers on board before sending any message",
      "Open the hatches to find the source of each fire and then attack it",
      "Anchor and wait for the fires to burn out before sending any message"
    ],
    why: "Multiple fires suggest fuel spillage or arson.",
    src: "MARF028 Fire Guide §4.8 (SOP-149)"
  },
  {
    q: "You suspect a fire behind a closed door. You should…",
    a: "Not open it",
    w: [
      "Open it slowly and look",
      "Open it and use a fire bucket",
      "Kick it open"
    ],
    why: "Evacuate and raise the alarm. Your safety is paramount.",
    src: "MARF028 Fire Guide §4.9"
  },
  {
    q: "Under what standard do small domestic commercial vessels (such as QF5 vessels) meet fire-safety requirements?",
    a: "NSCV Part C Section 4 (Fire Safety)",
    w: [
      "SOLAS Chapter II-2 applied directly",
      "The Navigation Act 1912",
      "AS 1851 alone"
    ],
    why: "MO15 gives effect to SOLAS Chapter II-2 for regulated vessels; small DCVs use NSCV C4. Under Marine Order 504 the operator must have and implement an SMS (Section G – Emergency Procedures).",
    src: "MARF028 Fire Guide §3.3"
  },
  {
    q: "After a fire at sea, which report is completed?",
    a: "The Queensland Transport Incident Report (F3071) and CG Incident Reports",
    w: [
      "Only a verbal report to the Commander at the end of the duty day",
      "A tide table entry in the log showing the time the fire was fought",
      "A fuel log entry showing the quantity of fuel burnt in the fire"
    ],
    why: "Retain all documents and damaged equipment; the Commander institutes a Board of Inquiry.",
    src: "MARF028 Fire Guide §5.1"
  },
  {
    q: "PFOS-containing firefighting foam…",
    a: "May no longer be used or stored (from 1 Jan 2026) and must go to a shore reception facility",
    w: [
      "Is mandatory on all vessels from 1 January 2026 under MO15 and the NSCV for small vessels",
      "May be discharged overboard in deep water, more than 12 nm offshore",
      "Is the preferred foam for Class A fires on small vessels in future"
    ],
    why: "Check the SDS of any legacy AFFF foam.",
    src: "MARF028 Fire Guide §2.1"
  }
]);

MQ.add("whs", [
  {
    q: "What is a Safety Management System (SMS)?",
    a: "A documented set of policies, procedures and records for the safe operation of one vessel",
    w: [
      "A national law that applies equally to all vessels in domestic waters",
      "The maintenance manual for the engine and the gearbox, with its service tasks and spares list",
      "A list of the qualified crew and their certificates, kept in the wheelhouse"
    ],
    why: "Typically covers routine maintenance and checks, risk assessments, safety instructions and PPE, injury reporting and first aid, SOPs, emergency procedures and drills, and environmental/waste management. Under Marine Order 504 it is required for domestic commercial vessels.",
    src: "GPH Part 1 – The Safety Management System"
  },
  {
    q: "Exemption 24 (to Marine Order 505) allows…",
    a: "Eligible volunteer emergency services to crew vessels with trained volunteers lacking the usual certificate",
    w: [
      "Vessels to operate without any survey or certificate of operation",
      "Operators to skip having a safety management system on the vessel",
      "Skippers to hold no qualifications at all when they take a vessel out on duty days"
    ],
    why: "It relates to crew competency only. The vessel still needs its approvals, certificate of operation (unless exempt), an SMS meeting Marine Order 504, and a unique vessel identifier (unless exempt).",
    src: "GPH Part 1 – The regulatory framework"
  },
  {
    q: "Which Marine Order covers certificates of competency (such as a GPH or Coxswain)?",
    a: "Marine Order 505",
    w: [
      "Marine Order 504",
      "Marine Order 15",
      "Marine Order 30"
    ],
    why: "MO 504 covers certificates of operation and operational requirements (including the SMS); MO 15 covers fire protection; MO 30 gives effect to the collision regulations.",
    src: "GPH Part 1 · Passage Planning Guide"
  },
  {
    q: "Where does a GPH sit in the chain of command?",
    a: "At the base: taking direction from skipper, engineer and senior hand, and referring upward when unsure",
    w: [
      "Alongside the skipper, sharing the command of the vessel on duty days and on SAR operations",
      "Above the senior hand on deck, but below the skipper at the helm",
      "Outside it, since GPHs act independently when they are on deck"
    ],
    why: "You report progress, don't make decisions belonging to senior personnel, and don't act on instructions from outside the chain without the skipper's knowledge. If the skipper is incapacitated, the next person in the chain takes responsibility.",
    src: "GPH Part 1 – The chain of command"
  },
  {
    q: "You are a GPH and you notice a crack at the base of a stern cleat. What should you do?",
    a: "Report it promptly to the senior hand or skipper, and keep the cleat out of use",
    w: [
      "Continue to use it carefully, since a cleat is made to take large loads at the berth",
      "Wait until the end of the day, then raise it with the engineer ashore",
      "Weld it yourself with the tools on board to save the engineer time"
    ],
    why: "Hazard reporting is a legal obligation regardless of how minor it seems. Follow the SMS reporting procedure and record it.",
    src: "GPH Part 1 – Chain of command scenario"
  },
  {
    q: "The correct order of the hierarchy of controls is…",
    a: "Elimination, substitution, isolation, engineering, administrative, PPE",
    w: [
      "PPE, administrative, engineering, isolation, substitution, elimination",
      "Administrative, PPE, engineering, elimination, isolation, substitution",
      "Elimination, PPE, isolation, substitution, administrative, engineering"
    ],
    why: "PPE is the last line of defence – never sufficient alone if higher-order controls are practicable.",
    src: "GPH Part 1 – Hazard identification and risk management"
  },
  {
    q: "What is the difference between a hazard and a risk?",
    a: "A hazard can cause harm; risk is the likelihood and severity of harm from exposure to it",
    w: [
      "They are the same thing, and either word can be used on a risk assessment form",
      "A risk is a physical object on the vessel; a hazard is a rule in the SMS",
      "A hazard is always a chemical, and a risk is always a mechanical injury"
    ],
    why: "Risk is managed by identifying hazards and implementing control measures.",
    src: "GPH Part 1 – Work health and safety"
  },
  {
    q: "A task you were told to do has become unsafe because conditions changed. You should…",
    a: "Stop and report to your supervisor: the order was given under earlier conditions",
    w: [
      "Complete it, because the order was given and has not been cancelled",
      "Continue, but go faster so that you spend less time exposed to the hazard",
      "Hand it to a trainee, who has less experience to be put at risk by it"
    ],
    why: "A changed situation requires a fresh assessment. You may also take action to make an immediate serious hazard safe if it is within your competence and doesn't create a greater hazard.",
    src: "GPH Part 1 – Managing factors that affect work"
  },
  {
    q: "When must lifejackets generally be worn aboard?",
    a: "Working on deck underway, in heavy weather, at night, and in MOB or SAR work – and if in doubt",
    w: [
      "Only when the skipper is not watching the deck from the wheelhouse",
      "Only when the wind is above 20 knots on the forecast for the day",
      "Only for passengers and new crew members who are not yet experienced on the vessel"
    ],
    why: "Your vessel's SMS specifies exactly when. Personal lifejackets are not endorsed by MRQ (v0.1); personal locator beacons are allowed at your own cost and risk.",
    src: "GPH Part 1 – General safety practices on the vessel"
  },
  {
    q: "You hear a MAYDAY on Channel 16 while a GPH on watch. You should…",
    a: "Report it to the skipper immediately",
    w: [
      "Reply on Channel 16 at once",
      "Wait until the end of the watch to report it",
      "Switch the radio off"
    ],
    why: "A GPH does not transmit without the skipper's authorisation unless life is in immediate danger and the skipper cannot act. Channel 16 (156.800 MHz) is the international distress, safety and calling channel.",
    src: "GPH Part 1 – VHF radio procedures"
  },
  {
    q: "MAYDAY, PAN PAN and SECURITÉ correspond respectively to which SAR phases?",
    a: "Distress (DETRESFA), Alert (ALERFA) and Uncertainty (INCERFA)",
    w: [
      "Uncertainty (INCERFA), Alert (ALERFA) and Distress (DETRESFA)",
      "Alert (ALERFA), Distress (DETRESFA) and Uncertainty (INCERFA)",
      "They do not correspond to any of the phases that the SMC declares"
    ],
    why: "Use the radio signals with vessels and reserve INCERFA/ALERFA/DETRESFA for internal coordination between SAR authorities.",
    src: "Marine SAR Guide – SAR phases"
  },
  {
    q: "A GPH's role in an emergency is to…",
    a: "Recognise it, report it at once to the skipper or OOW, and carry out assigned tasks",
    w: [
      "Manage the emergency independently until the skipper arrives on deck",
      "Wait until you are sure that it is serious enough to report to the skipper on watch",
      "Leave the vessel immediately and wait ashore for the emergency services"
    ],
    why: "The most dangerous thing is to delay reporting out of uncertainty. It is far better to report something minor than delay reporting something serious.",
    src: "GPH Part 1 – Recognising and reporting emergencies"
  },
  {
    q: "Someone falls overboard. What is the first thing you do?",
    a: "Shout “Man overboard” and keep pointing at the person, keeping them in sight",
    w: [
      "Dive in after them at once, since time is short in cold water",
      "Go below to find the skipper and tell him what has happened",
      "Start the tender and head for the person as fast as it will go through the water"
    ],
    why: "Alert the helm, deploy a lifebuoy with light and drogue if within reach, and initiate the MOB procedure. The “pointer” keeps continuous visual contact throughout recovery. The skipper needs to know where and when.",
    src: "GPH Part 1 – Emergency scenario"
  },
  {
    q: "The vessel runs aground. Which statement is correct?",
    a: "Report at once; don't try to power off unless instructed",
    w: [
      "Reverse out at full power straight away to float the vessel free",
      "Hold the throttle forward to push the vessel further onto the bank",
      "Lower the anchor and leave the vessel to the skipper alone"
    ],
    why: "Report immediately. On collision, also report immediately and do not move injured persons unless there is an immediate further risk. On flooding, the skipper needs the rate of ingress and its source quickly.",
    src: "GPH Part 1 – Recognising and reporting emergencies"
  },
  {
    q: "When is participation in emergency drills required?",
    a: "Always: drills are an SMS requirement and participation is mandatory",
    w: [
      "Only for new crew who have not yet been through the drill before",
      "Only when the vessel is offshore and a long way from help",
      "Voluntary, if the weather is good and the skipper has no objection"
    ],
    why: "Drills test equipment, rehearse roles and expose weaknesses before a real event.",
    src: "GPH Part 1 – Emergency drills"
  },
  {
    q: "You are filling in an activity sheet. A colleague suggests leaving the incident section blank since “nothing happened”. The correct practice is…",
    a: "Record the facts accurately and completely, including near-misses, in the required time",
    w: [
      "Leave it blank to save time, since nothing was reported on the day and nothing needs recording",
      "Fill in approximate times only, and add the detail at a later date",
      "Write what you think the skipper would like to see on the form"
    ],
    why: "Incorrect records can be more problematic than incomplete ones. If unsure how to complete a section, ask rather than guessing.",
    src: "GPH Part 1 – Completing workplace forms"
  },
  {
    q: "Under COLREGS Rule 5, a GPH on lookout should report a vessel's…",
    a: "Bearing, estimated range and apparent heading – facts, not guesses",
    w: [
      "Name and registration, read from the hull with the binoculars",
      "Cargo and destination, as shown in the shipping movements list",
      "Owner and home port, as listed in the register of vessels"
    ],
    why: "“Vessel off the port beam, bearing about 270, range half a mile, heading towards us” is useful. “I think there might be a boat over there” is not. Report anything unusual immediately.",
    src: "GPH Part 1 – Lookout duties"
  },
  {
    q: "The master's obligation to render assistance to persons in distress at sea is…",
    a: "Absolute under SOLAS, unless it puts the rescuing vessel and crew at unreasonable risk",
    w: [
      "Optional if it is raining or the sea state is rough on the day",
      "Limited to commercial ships; volunteer vessels are not bound by it in domestic waters",
      "Applies only within 3 nm of the coast, but not further out to sea"
    ],
    why: "SOLAS Ch V Reg 33. When risk to the rescuer becomes unacceptable, the master must advise the coordinating authority and act accordingly.",
    src: "Marine SAR Guide – Legislative framework"
  },
  {
    q: "Before entering a machinery space, a GPH should…",
    a: "Tell the skipper or senior hand, identify hazards, apply LOTO if needed, and be seen or heard",
    w: [
      "Enter alone and quietly, so as not to disturb the others on watch",
      "Close the door behind you for safety and keep the noise to a minimum",
      "Skip the checks if the engine is cold and has been stopped for some hours before you enter"
    ],
    why: "Hazards include moving parts, hot surfaces, pressurised systems, noise, electrical, fuel/fumes and restricted exits.",
    src: "GPH Part 3 – Machinery space hazards"
  },
  {
    q: "What does the AVCGA/MRQ standard say about alcohol on duty? (MRQ guide)",
    a: "0.00% BAC whenever you operate an MRQ vessel, vehicle or machinery",
    w: [
      "0.05% is allowed, the same as the limit for driving a car ashore",
      "Alcohol is permitted if you are off the water and out of uniform",
      "Only restricted for the skipper; crew may drink if they are not at the helm"
    ],
    why: "No alcohol on duty, on call, during meal breaks, or in uniform unless authorised. If you suspect another member is impaired, report it to the Duty Officer straight away.",
    src: "MRQ Vessel Crew Guide v0.1 – Fit for duty"
  },
  {
    q: "According to the MRQ guide, you shouldn't carry a phone or smartwatch on you while…",
    a: "Connecting or watching a tow, launching, rafting, anchoring or handling lines",
    w: [
      "Eating lunch in the cabin while the vessel is moored at the pontoon with the engines off",
      "Sitting in the cabin on a long transit with the engines on cruise",
      "Washing the vessel on the pontoon after the duty is finished"
    ],
    why: "Personal use is allowed only inside the cabin or helm space; no PED use at the helm or while operating the radio.",
    src: "MRQ Vessel Crew Guide v0.1 – Phones and personal gear"
  },
  {
    q: "MRQ amber flashing lights are for…",
    a: "SAR use only (to warn of a hazard or when directed); they don't exempt you from the COLREGS",
    w: [
      "Transits between bases, to make other vessels give way for the rescue boat on passage",
      "Giving way to other vessels in a crossing, instead of the sound signals",
      "Night navigation in a narrow channel with shoals on either side"
    ],
    why: "The same section confirms flag R over Y means “pass at slow speed, no wash” and flag D means “keep clear, manoeuvring with difficulty”.",
    src: "MRQ Vessel Crew Guide v0.1 – Towing"
  },
  {
    q: "You must never exceed the number of persons on the vessel's Certificate of Operation, unless…",
    a: "It is to save life and doesn't add risk",
    w: [
      "The weather is fine and the sea is calm",
      "The skipper agrees",
      "It is a short trip"
    ],
    why: "Non-crew aboard need an induction, their names in the log, a lifejacket demonstration and a signed safety induction recorded in the Ship's Log.",
    src: "MRQ Vessel Crew Guide v0.1 – People on board"
  },
  {
    q: "MRQ situation reports (sitreps) should be sent at least…",
    a: "Every 2 hours, and more often for higher-risk work like bar crossings or night in rough conditions",
    w: [
      "Every 8 hours, in line with the changeover of the watches on board the vessel",
      "Once per trip, on the return to base at the end of the duty day",
      "Only when requested by the coast station, if they need an update"
    ],
    why: "The master logs on with the coast station before leaving, giving callsign, number on board, trip plan and next call time or expected return.",
    src: "MRQ Vessel Crew Guide v0.1 – Every shift"
  },
  {
    q: "After a death, serious injury, or loss or significant damage to a vessel, AMSA Form 19 must be submitted within…",
    a: "72 hours (the incident itself is reported to AMSA as soon as reasonably practical)",
    w: [
      "24 hours, since the form is needed at once by the regional office in the state",
      "7 days, to give the Unit Commander time to complete the enquiry",
      "30 days, which is the usual period allowed for insurance reports"
    ],
    why: "Check everyone for injuries first, assess damage and seaworthiness, help others if safe, call for help, and phone the Duty Officer.",
    src: "MRQ Vessel Crew Guide v0.1 – If your vessel has an incident"
  },
  {
    q: "Defects that don't affect capability or safety should be logged within…",
    a: "48 hours",
    w: [
      "1 week",
      "At the end of the month",
      "Immediately by phone"
    ],
    why: "If a defect affects capability or safety, contact the Unit Commander and Unit Asset Coordinator first.",
    src: "MRQ Vessel Crew Guide v0.1 – Phones & personal gear (defects)"
  },
  {
    q: "A Trainee Crew member may perform duties…",
    a: "Only under direct supervision",
    w: [
      "Unsupervised on a calm day",
      "Unsupervised in daylight",
      "Unsupervised if they have a lifejacket"
    ],
    why: "Uncertified helming is only under the direct physical supervision of a certified master, who remains fully responsible; bring the vessel to a complete stop if you're unsure.",
    src: "MRQ Vessel Crew Guide v0.1 – Ratings and authority"
  },
  {
    q: "Under the MRQ guide, a sick or injured person should be transported by an MRQ vessel only if…",
    a: "The Queensland Ambulance Service cannot do so in a reasonable time",
    w: [
      "The patient asks to be taken by sea to the nearest hospital instead",
      "The skipper is off duty and the crew are willing to take them",
      "The patient is a crew member who has been hurt during the duty day"
    ],
    why: "Weigh condition, stretcher needs, sea conditions and distance; tell the DO and make sure QAS Communications knows.",
    src: "MRQ Vessel Crew Guide v0.1 – People on board"
  },
  {
    q: "In an incident involving a person lost overboard, the medical priority is to treat shock and cold immersion. Water conducts heat away roughly how many times faster than air?",
    a: "About 25 times",
    w: [
      "About 2 times",
      "About 5 times",
      "No faster"
    ],
    why: "In water at 4–10°C only about half survive longer than an hour; above 21°C survival depends on fatigue. The first 4 hours are the most critical.",
    src: "Marine SAR Guide – Person in water"
  }
]);

