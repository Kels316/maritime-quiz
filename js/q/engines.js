/* Question data – engines. Fields: q, a (correct), w (3 wrong options), why, src, vis (optional). */
MQ.add("engines", [
  {
    q: "Under NSCV, extra-low voltage (ELV) is…",
    a: "Not exceeding 50 V AC or 120 V ripple-free DC",
    w: [
      "Not exceeding 12 V DC or 24 V DC, as fitted to vessels",
      "Up to 240 V AC",
      "Up to 1000 V AC"
    ],
    why: "Low voltage: above ELV up to 1000 V AC or 1500 V DC. A 12 V or 24 V DC system is ELV; 240 V shore power or a generator makes a low-voltage system. Crew without electrical qualifications work only on the ELV side as authorised by the SMS.",
    src: "Propulsion Guide – Electrical safety hazards"
  },
  {
    q: "Why remove rings and metal jewellery before working on electrical systems?",
    a: "A short across high-current contacts can melt metal, causing severe burns or loss of a finger",
    w: [
      "Metal jewellery reduces the voltage of the battery as it is connected to the circuit",
      "Rings corrode in salt water and can leave marks on the terminals",
      "Metal prevents static building up on the hands of the person working"
    ],
    why: "Arcing from ELV supplies can also cause eye damage from molten metal spatter.",
    src: "Propulsion Guide – Electrical safety hazards"
  },
  {
    q: "Why must a blown fuse never be replaced with one of higher rating?",
    a: "It removes the circuit's designed protection and may create a fire hazard",
    w: [
      "The larger fuse would not fit in the holder that is on the panel",
      "Higher-rated fuses blow more often and so are a nuisance on board for the crew",
      "It would void the registration of the vessel with the authority"
    ],
    why: "If a replacement of the correct rating blows again, there is a faulty circuit or equipment – switch off and have it serviced. A fuse protects wiring and equipment but not a person: a dangerous current to a person is around 100 mA.",
    src: "Propulsion Guide – Fuses and circuit breakers"
  },
  {
    q: "A circuit breaker differs from a fuse in that it…",
    a: "Can be reset rather than replaced",
    w: [
      "Only works on AC",
      "Protects people from electric shock",
      "Never trips on overload"
    ],
    why: "Special earth-leakage breakers trip on very small shorts to earth and offer a higher level of protection. An RCD rapidly cuts supply when current leaks to earth.",
    src: "Propulsion Guide · GPH Part 3"
  },
  {
    q: "Batteries wired in series…",
    a: "Add their voltages; amp-hour capacity stays the same",
    w: [
      "Add their capacity in amp-hours, while the voltage stays the same",
      "Add both voltage and capacity",
      "Cancel each other out"
    ],
    why: "Parallel adds capacity (Ah) and keeps voltage. A bank should always be matched – same voltage and Ah rating.",
    src: "Propulsion Guide – Battery banks"
  },
  {
    q: "Which battery type must be stored in a well-ventilated space because it gives off hydrogen while charging?",
    a: "Wet-cell (flooded) lead-acid",
    w: [
      "AGM",
      "Gel",
      "Lithium-ion (lithium iron phosphate)"
    ],
    why: "Hydrogen is highly flammable – avoid sparks near batteries. A battery removed for charging goes in a ventilated space with cell caps off. Top up electrolyte only with distilled or demineralised water (3–9 mm above plates), never tap water.",
    src: "Propulsion Guide – Storage batteries"
  },
  {
    q: "What specific gravity indicates a fully charged wet-cell lead-acid battery?",
    a: "Around 1250",
    w: [
      "Around 1000",
      "Around 1500",
      "Around 800"
    ],
    why: "Below about 1160 usually indicates the battery is nearing end of life. Under load a healthy 12 V system should not fall below 11.4 V, nor a 24 V system below 22.8 V.",
    src: "Propulsion Guide – Battery care"
  },
  {
    q: "Which should never be stored in the same locker?",
    a: "Lead-acid and nickel-cadmium batteries",
    w: [
      "Two lead-acid batteries",
      "A battery and a spare fuse box that is kept dry",
      "Two AGM batteries"
    ],
    why: "The differing electrolyte chemistries present a cross-contamination and reaction hazard. Don't store batteries directly on concrete.",
    src: "Propulsion Guide – Battery care"
  },
  {
    q: "The smell of rotten eggs near batteries or in a machinery space may indicate…",
    a: "Hydrogen sulphide (H₂S) from an overcharging lead-acid battery: ventilate and report",
    w: [
      "Fresh diesel fuel that has been spilled into the bilge near the battery",
      "A refrigerant leak from the galley fridge that has spread to the engine room below",
      "The normal smell of a healthy charging system after a long passage"
    ],
    why: "H₂S is harmful even at low concentrations. Run engine-compartment blowers before starting petrol engines; outboards can also emit carbon monoxide (colourless, odourless and lethal in enclosed spaces).",
    src: "Propulsion Guide – Environmental obligations"
  },
  {
    q: "Test and tag of portable electrical equipment means…",
    a: "Regular inspection and testing by a competent person, with a tag showing pass and next due date",
    w: [
      "A one-off check done when the equipment is bought and then never again",
      "Tagging the equipment only when it fails, to mark that it is out of use and unsafe",
      "A label on the equipment that identifies the owner and the vessel"
    ],
    why: "Use only equipment in good condition and currently tagged, inspect leads and plugs, and remove damaged or out-of-test equipment. Shore power leads are tested and tagged annually; use an RCD in circuit.",
    src: "GPH Part 3 – Test and tag"
  },
  {
    q: "You find a “Do Not Operate” tag on a pump switch. You are fairly sure the pump is fine. You should…",
    a: "Not operate it or remove the tag: find out who tagged it and why",
    w: [
      "Remove the tag and test the pump to see if it still works properly",
      "Operate it briefly, since you are fairly sure that it is working fine",
      "Move the tag to another switch and run the pump for the job at hand"
    ],
    why: "The tag means someone may be working on the equipment and could be killed if it starts. Only the person who applied the lock and tag, or an authorised person following the procedure, may remove it.",
    src: "GPH Part 3 – Lock-out/tag-out"
  },
  {
    q: "Lock-out/tag-out (LOTO) is…",
    a: "Isolating a machine from its energy and stopping it being operated during maintenance",
    w: [
      "A way of locking the cabin door and tagging the key for the next watch",
      "A security measure for the fuel tanks, to stop anyone from tampering with them",
      "A system for labelling the spare parts so they are easy to find on board"
    ],
    why: "Apply LOTO before greasing, oiling or working near moving parts. Isolation includes disconnecting electrical supply, closing and tagging fuel/seacock valves and relieving hydraulic pressure.",
    src: "GPH Part 3 · Propulsion Guide"
  },
  {
    q: "How does ignition occur in a diesel engine?",
    a: "By compression heat: fuel is injected into air already compressed and very hot",
    w: [
      "By a spark from a plug, as in a petrol engine, at the top of each stroke",
      "By a glow plug that stays hot throughout running and lights the fuel",
      "By a magneto that is driven from the camshaft and fires each cylinder"
    ],
    why: "Compression ratio 16:1–20:1 and compression temperatures over 425°C. Glow plugs only help cold starting. Petrol engines use spark ignition at 7:1–11:1.",
    src: "Propulsion Guide – Petrol and diesel compared"
  },
  {
    q: "Why is diesel considered the safer marine fuel?",
    a: "Its flashpoint is far higher than petrol's, so it gives off ignitable vapour much less readily",
    w: [
      "It is heavier than water and so sinks away from the engine if it spills",
      "It contains no hydrocarbons and so cannot take part in a fire",
      "It cannot burn at all unless it is at a very high pressure in the engine cylinders"
    ],
    why: "Petrol's flashpoint is around −40°C; diesel is around 80°C. Petrol exhaust also contains 2–4% CO; diesel negligible.",
    src: "Propulsion Guide – Petrol and diesel compared"
  },
  {
    q: "In a four-stroke engine one complete cycle takes…",
    a: "Two rotations of the crankshaft (720°): intake, compression, power, exhaust",
    w: [
      "One rotation of the crankshaft (360°), with all four events happening together",
      "Four rotations of the crankshaft, one for each of the four events",
      "Half a rotation of the crankshaft, with each event taking a quarter"
    ],
    why: "A two-stroke completes all four events in one rotation (two piston strokes) and uses oil mixed into the fuel.",
    src: "Propulsion Guide – Two-stroke and four-stroke principles"
  },
  {
    q: "The connecting rod…",
    a: "Connects the piston to the crankshaft, changing linear motion into rotary motion",
    w: [
      "Opens the valves at the correct moment in each cycle of the engine",
      "Delivers atomised fuel into the cylinder at high pressure and on time in each cycle",
      "Cools the pistons by carrying the lubricating oil up to their crowns"
    ],
    why: "Camshaft lobes open the valves via rockers; timing gear keeps the camshaft in step with the crankshaft; injectors deliver atomised fuel.",
    src: "Propulsion Guide – Anatomy of a marine diesel"
  },
  {
    q: "A packed stuffing box on a propeller shaft should…",
    a: "Leak very slightly while the shaft turns, to lubricate and cool the packing",
    w: [
      "Never leak at all, since any water that gets in will flood the bilge",
      "Leak a steady stream, so the bilge pump has something to do on passage",
      "Be tightened hard while hot, to stop the leak from getting any worse"
    ],
    why: "Too tight overheats and damages the packing and shaft; too loose admits excessive water. Never over-tighten a hot gland. The propeller is retained on a 1-in-12 taper by a key and locking pin or nut.",
    src: "Propulsion Guide – The propeller shaft and stern gear"
  },
  {
    q: "The most common cooling arrangement on marine diesels is…",
    a: "Indirect (closed-circuit): fresh water in the engine, cooled by raw seawater in a heat exchanger",
    w: [
      "Air cooling, with a fan blowing air over fins cast on the engine block",
      "Direct raw-water cooling of the block, with seawater passing right through the engine",
      "Oil cooling only, with the lubricating oil taking the heat to a cooler"
    ],
    why: "Advantages: thermostat-controlled warm-up, correct running temperature and reduced corrosion and scale. Check coolant only when the engine is cold.",
    src: "Propulsion Guide – Cooling methods"
  },
  {
    q: "The raw-water pump impeller will quickly be destroyed if…",
    a: "Run dry for more than a few seconds",
    w: [
      "Run in cold water",
      "Run at idle",
      "Fitted with a strainer in the raw-water line"
    ],
    why: "Carry spare impellers and the tools to change one. Service an outboard impeller every 300 hours or three years.",
    src: "Propulsion Guide – The heat exchanger"
  },
  {
    q: "An outboard is running but there is no tell-tale water stream. You should…",
    a: "Stop the engine immediately",
    w: [
      "Run it faster to clear it",
      "Continue until it overheats",
      "Spray water on the cowling"
    ],
    why: "Causes: blocked intake (bag, weed, mud), intake not submerged, salt-blocked passages, or a worn or broken impeller.",
    src: "Propulsion Guide – Outboard motors"
  },
  {
    q: "What does BLUE exhaust smoke at operating temperature suggest?",
    a: "Lubricating oil is being burnt",
    w: [
      "A fuel delivery or overload problem",
      "Water or moisture",
      "Normal operation"
    ],
    why: "Black: fuel delivery, combustion or overload problem. White: water or moisture (may be normal briefly at start-up).",
    src: "Propulsion Guide – Operating within defined limits"
  },
  {
    q: "The diesel engine loses power and stops after a low-fuel warning. Air has entered the fuel system. What is the first step?",
    a: "Make the situation safe: gather containment, rags, pads and the right spanners before bleeding",
    w: [
      "Keep cranking the engine until it fires again and the air has been cleared from the lines",
      "Loosen all of the fuel lines at once to let the air out together",
      "Add water to the primary filter to push the air through to the pump"
    ],
    why: "Bleed from the motor side of the lift pump first, then the secondary filter, then the injector pump, hand-actuating the lift pump until bubble-free fuel emerges. If it stops again, check all connections are tight. Don't use shifting spanners.",
    src: "Propulsion Guide – Bleeding the diesel fuel system"
  },
  {
    q: "The engine fails to start. You should not…",
    a: "Keep cranking it repeatedly: this drains the battery and can damage the starter",
    w: [
      "Report what you observed to the skipper before you try anything else at all",
      "Check that there is fuel in the tank and that the valve is open",
      "Check that the kill switch is in the run position and fully engaged"
    ],
    why: "Note whether it cranked at all, any warning lights and smells. Common causes: flat battery, poor connection, no fuel, air in the fuel, blocked filters.",
    src: "Propulsion Guide – Engine operating procedures"
  },
  {
    q: "What should you check first when an engine is started?",
    a: "Oil pressure immediately, then seawater flow and leaks",
    w: [
      "The paint finish and the colour of the exhaust",
      "The fuel price",
      "The trim tabs"
    ],
    why: "Listen for unusual noises. Compare gauges against the manufacturer's ranges, not what “looks normal”, and don't silence an alarm without identifying the cause.",
    src: "Propulsion Guide – Engine run checks"
  },
  {
    q: "Which pre-start check is correct for an inboard diesel?",
    a: "Gearbox in neutral, seacocks open, strainer clear, coolant checked cold, belts checked, guards on",
    w: [
      "Gearbox in gear, seacocks closed, strainer left until the first run, coolant checked hot, guards off",
      "Coolant checked hot, so that its level is correct when the engine runs",
      "Guards removed to see the belts, and the engine turned by hand once"
    ],
    why: "Also clear tools and oily rags, check fuel and drain the water trap, open the tank pick-up valve, check oil levels, batteries and switches, and if possible turn the engine over by hand once.",
    src: "Propulsion Guide – Diesel engine pre-start checks"
  },
  {
    q: "Avoid “lugging” a diesel engine. What is lugging?",
    a: "Running at low RPM under high load, which causes excessive wear",
    w: [
      "Running the engine without any lubricating oil in the sump at all",
      "Running at idle for long periods while the vessel lies at the berth",
      "Running the engine without a thermostat in the cooling circuit"
    ],
    why: "Also avoid prolonged maximum RPM and change between ahead and astern smoothly at low throttle. Turbocharged engines need an idle period after heavy load before shutdown.",
    src: "Propulsion Guide – Operating within defined limits"
  },
  {
    q: "What does an oil pressure that is abnormally low suggest checking first?",
    a: "The oil level, the last oil change, the sender connection, then call your service agent",
    w: [
      "Replace the gauge first, since gauges are the commonest cause of this",
      "Add a thicker oil at once to raise the pressure back to normal",
      "Run the engine harder so that the oil pump speeds up and the oil warms to its normal pressure"
    ],
    why: "Possible causes: low oil level, blocked filter, high temperature, faulty gauge or sender, contaminated oil, pump faults. Report a repeating pattern, even if it clears when warm.",
    src: "Propulsion Guide – Fault finding"
  },
  {
    q: "In a hydraulic steering system, air in the lines typically shows as…",
    a: "A sloppy or spongy helm response",
    w: [
      "An overly stiff and heavy wheel",
      "A louder engine",
      "A warm rudder stock"
    ],
    why: "Low fluid or a failing seal may make it stiff or inconsistent. Investigate before going to sea – steering failure during berthing or towing is a serious hazard. Rudder angle is commonly limited to about 35° by tiller arm stops.",
    src: "Propulsion Guide – Steering gear"
  },
  {
    q: "The bypass/relief valve in a hydraulic steering system…",
    a: "Protects against excessive pressure and may let the rudder be moved by hand if hydraulics fail",
    w: [
      "Steers the vessel by turning the rudder in response to the helm",
      "Controls the speed of the engine in response to the throttle lever",
      "Cools the hydraulic oil as it circulates between the pump and the ram at the rudder"
    ],
    why: "The ram converts fluid pressure to rudder movement; the directional control valve directs oil to either side of the ram.",
    src: "Propulsion Guide – Hydraulic steering systems"
  },
  {
    q: "Which statement about bilge pumps is correct?",
    a: "Test before leaving and after returning, even automatic ones, and keep a manual or second pump",
    w: [
      "Automatic pumps never need testing, as they switch on by themselves when needed",
      "Leave the pump running dry for a time to prove that it still works",
      "The rating on the pump is the output that you will get in real life"
    ],
    why: "Real-world performance is only about 60% of the listed rating once lift, discharge distance and hose diameter apply. Oily bilge water must be retained for shore reception – never pumped overboard.",
    src: "Propulsion Guide – Bilge systems"
  },
  {
    q: "LPG on a vessel must be…",
    a: "Stored above deck or in a gas locker venting overboard, with a flame-out shut-off",
    w: [
      "Stored in the bilge, where it is cool and out of the way of the crew and the engine",
      "Stored in the cabin, where the stove is, so the line is short",
      "Stored next to the battery, so the wiring and the pipe run together"
    ],
    why: "Soapy-water test all fittings whenever a new bottle is fitted. LPG is explosive, heavier than air and an asphyxiant.",
    src: "Propulsion Guide – LPG"
  },
  {
    q: "A refrigeration leak is dangerous in a poorly ventilated space because the gas…",
    a: "Is heavier than air and collects low down, displacing oxygen",
    w: [
      "Is highly flammable at room temperature and so can be set off by a spark",
      "Rises and condenses on the deckhead, where it drips down onto the crew",
      "Is lighter than air and so rises quickly out of the hatch to the deck"
    ],
    why: "If refrigerant is involved in a fire outside the sealed unit it becomes poisonous. A change in fridge temperature can indicate a leak.",
    src: "Propulsion Guide – Refrigeration"
  },
  {
    q: "Where is a vessel's maintenance information found?",
    a: "In the vessel's SMS (and in a Ship's Maintenance Manual where one exists)",
    w: [
      "On the engine nameplate that is fitted to the side of the engine block",
      "In the crew's personal diaries, kept by each member on the vessel",
      "Only on the manufacturer's website, which is updated each year"
    ],
    why: "A GPH assists under supervision with the routine tasks and checks, reports anything that isn't as it should be, and records the work. You aren't expected to diagnose complex faults.",
    src: "GPH Part 3 – Introduction to routine maintenance"
  },
  {
    q: "After every outing in salt water, an outboard or sterndrive should be…",
    a: "Flushed with fresh water, and the exterior hosed down",
    w: [
      "Left to dry in the sun",
      "Run for an hour in port with the engine warm",
      "Flushed with seawater"
    ],
    why: "Salt is corrosive. Grease lower-unit points with waterproof grease after saltwater use.",
    src: "GPH Part 3 – Maintenance after each trip"
  },
  {
    q: "Which is a principle of good lubrication?",
    a: "Use the right lubricant, don't mix them, keep it clean, don't over-grease, colour-code the guns",
    w: [
      "Use any grease on any fitting, since all greases do the same job",
      "Pump until the grease is firm and fills the whole of the housing",
      "Mix lubricants together for better protection of the moving parts and the seals"
    ],
    why: "Over-greasing can damage seals and bearings. Wipe the nipple clean first and stop when a small amount purges. Make sure machinery is stopped before greasing.",
    src: "GPH Part 3 – Lubrication"
  },
  {
    q: "An RCD (residual current device) protects you by…",
    a: "Rapidly cutting the supply if current is leaking to earth",
    w: [
      "Increasing the voltage to the tool so that it runs faster on load",
      "Storing the excess current in a capacitor until the tool is stopped",
      "Boosting the charging rate of the battery to hold the voltage up"
    ],
    why: "It should be in the circuit whenever portable electrical equipment is used.",
    src: "GPH Part 3 – Tools and PPE"
  },
  {
    q: "Where can you find a hazardous chemical's required PPE, hazards, storage and first-aid information?",
    a: "Its Safety Data Sheet (SDS)",
    w: [
      "The product's colour",
      "The skipper's notebook",
      "The vessel's registration papers"
    ],
    why: "Read the SDS before using an unfamiliar chemical. Never mix chemicals unless instructed – some combinations give toxic gases.",
    src: "GPH Part 3 – Cleaning agents and chemicals"
  },
  {
    q: "Why is surface preparation described as the most important part of painting?",
    a: "Paint on a dirty, greasy, damp, loose or rusty surface won't stick and soon fails",
    w: [
      "It uses up the most paint of all the stages in a coating system",
      "It is the quickest step, so the time saved can go to the top coats",
      "It is required only for varnish, not for paint on steel or on aluminium fittings"
    ],
    why: "Preparation may involve cleaning and degreasing, removing loose paint, sanding to key, treating rust, and ensuring the surface is dry. Primer promotes adhesion and inhibits corrosion on metal.",
    src: "GPH Part 3 – Surface preparation, painting and rust treatment"
  },
  {
    q: "When painting inside a vessel you should…",
    a: "Ventilate well, keep flames away, never smoke, and wear gloves and a respirator if needed",
    w: [
      "Close all the hatches to keep dust out of the wet paint while it dries, and use a heater",
      "Smoke only outside the cabin, away from the wet paint and the thinners",
      "Wear no PPE if the can is small, since the fumes will be slight"
    ],
    why: "Paint, solvents and strippers produce flammable vapours.",
    src: "GPH Part 3 – Painting inside a vessel"
  },
  {
    q: "Which hull material is most vulnerable to galvanic and electrolytic corrosion, particularly with dissimilar metals?",
    a: "Aluminium",
    w: [
      "Fibreglass",
      "Timber",
      "Rope"
    ],
    why: "Steel's main enemy is rust; timber needs protection from rot and marine borers; GRP gelcoat degrades under UV and can osmose. Sacrificial anodes (zinc/aluminium) corrode in place of more important metal and must be checked and replaced before fully consumed.",
    src: "GPH Part 3 – Maintaining different hull materials"
  },
  {
    q: "A used oil change generates waste oil. It should be…",
    a: "Collected, contained and taken ashore to a waste-oil facility, never discharged overboard",
    w: [
      "Poured down a scupper with a good flow of water to wash it away",
      "Burnt in the engine as it is mixed with the diesel at the fuel filter",
      "Left in the bilge, where it is collected with the bilge water for the pump to remove"
    ],
    why: "Fuel waste, chemical waste and paint waste go ashore as hazardous waste. Oily rags are contained in a sealed, fire-rated container.",
    src: "GPH Part 3 – Safe disposal of maintenance waste"
  },
  {
    q: "Which is a hot-surface hazard in an engine room?",
    a: "Exhaust manifolds, turbochargers and coolant lines",
    w: [
      "The bilge pump label",
      "The wooden steps",
      "The battery cable insulation and the fuse labels"
    ],
    why: "Never touch any machinery surface without confirming it is safe. Don't loosen fittings or caps on pressurised cooling or hydraulic systems without training and authorisation.",
    src: "GPH Part 1 – General safety practices on the vessel"
  },
  {
    q: "A maintenance task is not finished until…",
    a: "The area is cleaned, waste dealt with, tools stowed, and work and defects recorded",
    w: [
      "The last bolt is tightened and the engine has been started and run",
      "The skipper is off duty and the vessel has been put away for the night at the berth",
      "The tools are put away in the locker and the crew have gone ashore"
    ],
    why: "Tools must be stowed securely before the vessel goes to sea.",
    src: "GPH Part 3 – Cleaning up and stowing after maintenance"
  },
  {
    q: "When a coolant level has dropped and you see a dried coolant trail on the engine block, you should…",
    a: "Report it – don't just top up – and record what you found",
    w: [
      "Top it up and say nothing, as the level will be right for the trip",
      "Run the engine to see if it stops losing coolant while it is hot",
      "Remove the trail with a rag and carry on, as it has not caused a failure"
    ],
    why: "A falling level plus a trail suggests a leak. Tell the skipper what you found, where and when.",
    src: "GPH Part 3 – Routine checks scenario"
  }
]);

