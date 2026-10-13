/* Question data – rules. Fields: q, a (correct), w (3 wrong options), why, src, vis (optional). */
MQ.add("rules", [
  {
    q: "The COLREGS apply to which vessels and waters?",
    a: "All vessels on the high seas and in connected waters navigable by sea-going vessels",
    w: [
      "Commercial vessels over 12 metres operating on the high seas outside port limits",
      "Only vessels that are fitted with radar and are more than 3 nm from the coast",
      "Ships over 500 gross tonnes together with the tugs and tows that they are using"
    ],
    why: "Rule 1 applies the Regulations to all vessels upon the high seas and in all waters connected with them navigable by sea-going vessels. Local authorities may make special rules for harbours, rivers and inland waters, which must conform as closely as possible.",
    src: "COLREGS Rule 1 · MARI003"
  },
  {
    q: "Rule 2 (Responsibility) says that a vessel may depart from the Rules when…",
    a: "It is necessary to avoid immediate danger",
    w: [
      "The vessel is on a Coast Guard tasking",
      "The other vessel is much larger",
      "It is night and the lights cannot be seen clearly"
    ],
    why: "Rule 2 does not exonerate any vessel from the consequences of neglecting the Rules or the ordinary practice of seamen, but allows departures needed to avoid immediate danger, with due regard to all dangers and the limitations of the vessels involved.",
    src: "COLREGS Rule 2 · MARI003"
  },
  {
    q: "In the COLREGS, a vessel is “underway” when she is…",
    a: "Not at anchor, made fast to the shore, or aground",
    w: [
      "Making way through the water, whether under power or drifting with the current",
      "Moving under her own power, but not when she is being towed or is drifting",
      "Not moored to a pontoon or wharf, even when she is lying at her anchor"
    ],
    why: "Underway is defined by what the vessel is NOT doing: not at anchor, not made fast to the shore, not aground. A drifting vessel with engines stopped is still underway.",
    src: "COLREGS Rule 3 · MARI003"
  },
  {
    q: "Under Rule 3, vessels are “in sight of one another” only when…",
    a: "One can be observed visually from the other",
    w: [
      "One is detected by the other on radar or by an AIS target on a screen",
      "They are less than 2 nm apart and hold each other on the radar display",
      "They can talk to each other directly on VHF or by a handheld radio"
    ],
    why: "Rules 11–18 (conduct in sight of one another) apply only when a vessel is seen visually from the other. A radar or AIS contact alone does not make the vessels “in sight”, so avoid relying on the give-way/stand-on rules until you can see each other.",
    src: "COLREGS Rule 3 · MARI003"
  },
  {
    q: "Which is the COLREGS definition of a power-driven vessel?",
    a: "Any vessel propelled by machinery",
    w: [
      "Any vessel over 12 m with an engine fitted",
      "Any vessel that is making way against the wind",
      "Any vessel carrying fuel for its propulsion"
    ],
    why: "A power-driven vessel is any vessel propelled by machinery. A sailing vessel with her engine running is therefore a power-driven vessel while the machinery is in use (and shows a cone, apex down, by day).",
    src: "COLREGS Rule 3 · MARI003"
  },
  {
    q: "A yacht under sail has her engine running to charge the batteries. For the COLREGS she is a…",
    a: "Power-driven vessel",
    w: [
      "Sailing vessel with right of way",
      "Vessel restricted in her ability to manoeuvre",
      "Vessel not under command"
    ],
    why: "A vessel is a sailing vessel only “provided that propelling machinery, if fitted, is not being used”. Once the engine is propelling her she is a power-driven vessel and must show the power-driven lights, and a downward-pointing cone by day.",
    src: "COLREGS Rules 3 and 25 · MARI003"
  },
  {
    q: "Which of these is NOT counted as a “vessel engaged in fishing”?",
    a: "A vessel trolling with lines that do not restrict her manoeuvrability",
    w: [
      "A trawler that is dragging a net across the seabed with her gear out",
      "A vessel working long lines that restrict her ability to manoeuvre",
      "A vessel working nets which restrict her manoeuvring to a marked degree"
    ],
    why: "Rule 3(d): fishing means using nets, lines, trawls or other apparatus that RESTRICT manoeuvrability. Trolling lines or gear that does not restrict manoeuvrability does not qualify, so the vessel is treated as an ordinary power-driven vessel.",
    src: "COLREGS Rule 3 · MARI003"
  },
  {
    q: "A vessel “not under command” is one that…",
    a: "Cannot manoeuvre as the Rules require owing to an exceptional circumstance",
    w: [
      "Is anchored in a channel and showing the proper anchor lights for the hours of darkness",
      "Is moving slowly through the water because the skipper is unsure of the channel",
      "Has stopped her engines to carry out some routine maintenance on a quiet day"
    ],
    why: "NUC is about an exceptional circumstance (e.g. steering or engine failure). Routine work or a decision to stop is not exceptional circumstance. Her day shape is two balls in a vertical line.",
    src: "COLREGS Rule 3 · MARI003"
  },
  {
    q: "Which of these vessels is “restricted in her ability to manoeuvre” (RAM)?",
    a: "A vessel laying a submarine cable",
    w: [
      "A fishing boat under way with no gear out",
      "A yacht with a flat battery",
      "A rescue boat motoring towards an incident"
    ],
    why: "RAM includes vessels laying, servicing or picking up a navigation mark, cable or pipeline; dredging, surveying or underwater work; replenishment; launching/recovering aircraft; mine clearance; and towing that severely restricts the tow and the tug.",
    src: "COLREGS Rule 3(g) · MARI003"
  },
  {
    q: "When is a towing operation classed as “restricted in ability to manoeuvre”?",
    a: "When it severely restricts the tug and her tow in deviating from their course",
    w: [
      "Whenever any vessel at all is under tow, whatever its size or the conditions",
      "Only when the tow is more than 200 metres long from the stern of the tug",
      "Only at night, when the towing lights are being shown by the tug and tow"
    ],
    why: "Rule 3(g)(vi) uses the word “severely”. A small dinghy in open water may not qualify; a large, heavy tow on a long line over a bar in a seaway probably does. Even a RAM vessel must still avoid collision (Rule 2).",
    src: "COLREGS Rule 3(g)(vi) · NATRAC002 Towing"
  },
  {
    q: "A “vessel constrained by her draught” is…",
    a: "A power-driven vessel severely restricted in deviating from her course by her draught",
    w: [
      "Any vessel with a keel deeper than 2 m, whether she is under power or at anchor",
      "A vessel that has run aground on a falling tide and cannot be refloated",
      "A vessel anchored in less than 5 m of water that cannot swing clear"
    ],
    why: "Only a power-driven vessel can be constrained by draught, and only if the available depth severely limits her deviation. She shows three red all-round lights (or a cylinder). Other vessels should avoid impeding her safe passage (Rule 18(d)).",
    src: "COLREGS Rules 3 and 28 · MARI003"
  },
  {
    q: "The COLREGS define “restricted visibility” as…",
    a: "Any condition where fog, mist, heavy rain, snow or sandstorm restricts visibility",
    w: [
      "Any time visibility is under 5 nm, whether by day or by night",
      "Darkness from sunset to sunrise when no moon or shore lights are showing",
      "Only conditions in which the horizon cannot be seen at all from the helm"
    ],
    why: "Darkness alone is not restricted visibility. Rule 19 applies to vessels NOT in sight of one another when navigating in or near an area of restricted visibility.",
    src: "COLREGS Rule 3 · MARI003"
  },
  {
    q: "Rule 5 requires every vessel to keep a proper lookout…",
    a: "At all times, by sight, hearing and all available means suited to the conditions",
    w: [
      "By sight only, with radar used as a backup for the lookout at night",
      "By sight, but only when the vessel is making more than 6 knots through the water",
      "By a dedicated person on watch, but only if the vessel is more than 12 m long"
    ],
    why: "Rule 5 is a legal requirement: sight, hearing and all available means, in all conditions, to make a full appraisal of the situation and of the risk of collision. An autopilot, chart plotter or radar does not replace a visual lookout.",
    src: "COLREGS Rule 5 · GPH Part 1 · MARI003"
  },
  {
    q: "Which factor is NOT one that Rule 6 lists for determining a safe speed?",
    a: "The colour of the other vessel's hull",
    w: [
      "The state of visibility",
      "Background light at night",
      "The draught in relation to the available depth of water"
    ],
    why: "Rule 6 factors include visibility, traffic density, manoeuvrability (stopping distance and turning ability), background light, wind/sea/current and proximity of hazards, draught versus depth, and for radar users the limitations of the equipment.",
    src: "COLREGS Rule 6 · MARI003"
  },
  {
    q: "Rule 6 says a safe speed is one at which you can…",
    a: "Take effective action to avoid collision and stop within a distance suited to the conditions",
    w: [
      "Always keep the vessel planing so that it responds quickly to the helm in all conditions",
      "Maintain the planned ETA shown on the passage plan so the shore party is not kept waiting",
      "Keep below the maximum speed that is printed on the chart for that stretch of water"
    ],
    why: "Safe speed is relative to the conditions, not a fixed number. Excess speed removes the time to assess risk (Rule 7) and make a large, early alteration (Rule 8).",
    src: "COLREGS Rule 6 · Passage Planning Guide"
  },
  {
    q: "Under Rule 6, which extra factors apply to vessels with working radar?",
    a: "Radar limitations, range scale in use, sea clutter, and small vessels or objects going undetected",
    w: [
      "None – radar removes the need to slow down because it sees everything around the vessel",
      "Only the maximum range of the set, since a greater range always gives earlier warning",
      "Whether the radar is connected to the autopilot and the chart plotter display"
    ],
    why: "Radar-fitted vessels must also consider the characteristics, efficiency and limitations of their equipment, the range scale, interference from sea and weather, and the chance that small boats or debris are missed.",
    src: "COLREGS Rule 6 · MARI003"
  },
  {
    q: "How do you tell if risk of collision exists with an approaching vessel?",
    a: "Its compass bearing does not appreciably change while the range decreases",
    w: [
      "Its masthead light looks brighter than expected as the other vessel gets closer to yours",
      "It is larger than your own vessel and is showing two masthead lights at night",
      "It sounds a single short blast on the whistle as it approaches from ahead"
    ],
    why: "Rule 7: a steady compass bearing means risk of collision. Risk may still exist when the bearing changes, especially with a very large vessel, a tow, or at close range. If in doubt, assume risk exists.",
    src: "COLREGS Rule 7 · MARI003"
  },
  {
    q: "Rule 7 warns against making assumptions based on…",
    a: "Scanty information, especially scanty radar information",
    w: [
      "Visual bearings taken with a hand-bearing compass held clear of the vessel's ironwork",
      "AIS data that was received a little more than one minute earlier on the display",
      "Forecasts that were issued more than six hours earlier by the Bureau of Meteorology"
    ],
    why: "Use all available means – including long-range radar scanning and systematic plotting – and do not decide on the basis of a glimpse of a radar echo or a few seconds of observation.",
    src: "COLREGS Rule 7 · MARI003"
  },
  {
    q: "Rule 8 says an alteration of course or speed to avoid collision should be…",
    a: "Large enough to be readily apparent to the other vessel; avoid a series of small alterations",
    w: [
      "Small and gradual, so as not to alarm the other vessel or surprise its helmsman",
      "Made at the last moment so the other vessel cannot misread or second-guess it",
      "Made by changes of speed alone and never by any change of the vessel's course"
    ],
    why: "Positive, early and bold: a series of small alterations can be missed by an observer on the other vessel. If sea room allows, a substantial alteration of course alone may be the most effective action – provided it does not create another close-quarters situation.",
    src: "COLREGS Rule 8 · MARI003"
  },
  {
    q: "After taking avoiding action, how long must you check its effectiveness?",
    a: "Until the other vessel is finally past and clear",
    w: [
      "Until the bearing starts to change",
      "For two minutes after the alteration",
      "Until the other vessel acknowledges with a sound signal"
    ],
    why: "Rule 8(d): the action must result in passing at a safe distance, and its effectiveness must be carefully checked until the other vessel is finally past and clear.",
    src: "COLREGS Rule 8 · MARI003"
  },
  {
    q: "If necessary to avoid collision or allow more time to assess a situation, Rule 8 allows you to…",
    a: "Slacken speed or take all way off by stopping or reversing your propulsion",
    w: [
      "Switch off the navigation lights to avoid confusing the other vessel at close range",
      "Cross ahead of the other vessel at full speed to clear her track as fast as possible",
      "Sound five short blasts and then hold your course and speed until she acts"
    ],
    why: "Reducing speed or stopping is a recognised avoiding action. It buys time, particularly when sea room is limited or another close-quarters situation would result from a turn.",
    src: "COLREGS Rule 8 · MARI003"
  },
  {
    q: "In a narrow channel or fairway, a power-driven vessel should keep…",
    a: "As near to the outer limit of the channel on her starboard side as is safe and practicable",
    w: [
      "Keep to the middle of the channel at all times since that is where the water is deepest",
      "Keep to the port side so that she can see oncoming traffic coming around the bend",
      "Keep wherever the water is deepest, whichever side of the channel that happens to be"
    ],
    why: "Rule 9(a). The deeper water in the middle of a dredged channel is for vessels that can use only the channel.",
    src: "COLREGS Rule 9 · MARI003"
  },
  {
    q: "A vessel of less than 20 metres in a narrow channel must…",
    a: "Not impede the passage of a vessel that can safely navigate only within the channel",
    w: [
      "Give way to all sailing vessels that are in the channel, whatever their draught",
      "Always stay in the centre line of the channel so that others know where she is",
      "Anchor clear of the channel as soon as any larger vessel is seen approaching"
    ],
    why: "Rule 9(b): vessels under 20 m, and sailing vessels, must not impede a vessel that can safely navigate only within the narrow channel or fairway – such as a deep-draught ship. Take early action and give her room.",
    src: "COLREGS Rule 9 · MARI003"
  },
  {
    q: "You are crossing a narrow channel and a ship that can only use the channel is approaching. You should…",
    a: "Not cross if doing so would impede her – wait clear of the channel",
    w: [
      "Cross quickly ahead of her, because your vessel is faster and can clear her track easily",
      "Stop in the middle of the channel and wait there until she has passed by you",
      "Sound one prolonged blast and hold your course and speed straight across the channel"
    ],
    why: "Rule 9(d): a vessel shall not cross a narrow channel if that impedes a vessel that can navigate only within it. That vessel may sound five short blasts if in doubt about your intentions.",
    src: "COLREGS Rule 9 · Passage Planning Guide"
  },
  {
    q: "Approaching a bend in a channel where other vessels may be hidden, you should navigate with particular caution and sound…",
    a: "One prolonged blast",
    w: [
      "Two short blasts",
      "Five short and rapid blasts",
      "One long and two short blasts"
    ],
    why: "Rule 9(f) with Rule 34(e): one prolonged blast. Any approaching vessel that hears it on the other side of the bend answers with one prolonged blast.",
    src: "COLREGS Rules 9 and 34 · MARI003"
  },
  {
    q: "Crossing a Traffic Separation Scheme lane, you should steer a heading…",
    a: "As nearly as practicable at right angles to the general direction of traffic flow",
    w: [
      "Parallel to the lane for some distance, then turn in at the end of the lane",
      "At a shallow angle to the traffic so that you cross the lane as quickly as you can",
      "Directly towards the next waypoint on your plan, whatever the angle to the traffic flow"
    ],
    why: "Rule 10(c): avoid crossing lanes where practicable but, if obliged, cross on a heading at right angles – this minimises the time spent in the lane.",
    src: "COLREGS Rule 10 · MARI003"
  },
  {
    q: "Which vessels may use the inshore traffic zone of a TSS even when they could use the lane?",
    a: "Vessels under 20 m in length, sailing vessels and vessels engaged in fishing",
    w: [
      "Only vessels that are carrying passengers on a regular scheduled service",
      "Only vessels that are under tow or are being pushed by another vessel",
      "Any power-driven vessel, provided the weather is good and the visibility is reasonable"
    ],
    why: "Rule 10(d): other vessels may not use the inshore zone when they can safely use the adjacent lane, unless bound to or from a port or place within it, or to avoid immediate danger.",
    src: "COLREGS Rule 10 · MARI003"
  },
  {
    q: "Two sailing vessels meet. One has the wind on her port side, the other on her starboard. Who gives way?",
    a: "The vessel with the wind on the port side",
    w: [
      "The vessel with the wind on the starboard side",
      "The smaller vessel",
      "The vessel to windward"
    ],
    why: "Rule 12(a)(i): port tack gives way to starboard tack. If both have the wind on the same side, the windward vessel gives way to the leeward vessel.",
    src: "COLREGS Rule 12 · MARI003"
  },
  {
    q: "Two sailing vessels are both on the same tack. Which gives way?",
    a: "The vessel to windward",
    w: [
      "The vessel to leeward",
      "The vessel on the starboard side",
      "The faster vessel"
    ],
    why: "Rule 12(a)(ii): when both have the wind on the same side, the windward vessel keeps out of the way of the leeward vessel.",
    src: "COLREGS Rule 12 · MARI003"
  },
  {
    q: "A vessel is “overtaking” when she approaches another from a direction more than…",
    a: "22.5 degrees abaft the other vessel's beam",
    w: [
      "45 degrees abaft the other vessel's beam",
      "22.5 degrees forward of the other vessel's beam",
      "10 degrees either side of dead astern"
    ],
    why: "Rule 13(b): the overtaking sector is anywhere more than 22.5° abaft the beam – the arc in which, at night, only the other vessel's sternlight (and neither sidelight) is visible.",
    src: "COLREGS Rule 13 · MARI003"
  },
  {
    q: "If you are in any doubt whether you are overtaking another vessel, you should…",
    a: "Assume you are overtaking and act accordingly",
    w: [
      "Assume you are crossing and act accordingly",
      "Assume the other vessel is overtaking you",
      "Sound five short blasts and stop"
    ],
    why: "Rule 13(c). Assuming you are the overtaking vessel keeps you in the safer, give-way role.",
    src: "COLREGS Rule 13 · MARI003"
  },
  {
    q: "You are overtaking a slower vessel and later the bearing between you changes so she is on your beam. You are now…",
    a: "Still the overtaking vessel, and must keep clear until finally past and clear",
    w: [
      "A crossing vessel, so the Crossing rule now applies to the situation between the two",
      "The stand-on vessel, because the other vessel is now abeam on one side of you",
      "Free to alter course to port to pass ahead of her now that she is on your beam"
    ],
    why: "Rule 13(d): any subsequent alteration of bearing does not make the overtaking vessel a crossing vessel or relieve her of the duty of keeping clear.",
    src: "COLREGS Rule 13 · MARI003"
  },
  {
    q: "Two power-driven vessels meet on reciprocal courses with risk of collision. Each shall…",
    a: "Alter course to starboard so that each passes on the port side of the other",
    w: [
      "Alter course to port so that each vessel passes on the starboard side of the other",
      "Reduce speed and sound three short blasts while each holds the present course",
      "Stand on, with the larger vessel being the one to alter course for the smaller one"
    ],
    why: "Rule 14: head-on, both turn to starboard (“port to port”). By night you would see both sidelights and/or the masthead lights in line. If in doubt, assume it is head-on.",
    src: "COLREGS Rule 14 · MARI003"
  },
  {
    q: "At night you see another vessel dead ahead showing two masthead lights in a line and both red and green sidelights. This is a…",
    a: "Head-on situation – both vessels alter to starboard",
    w: [
      "A crossing situation, in which you are the give-way vessel and should turn to starboard",
      "An overtaking situation in which you stand on while the other vessel passes you",
      "A vessel at anchor, which you may pass on either side if you keep a good distance"
    ],
    why: "Seeing masthead lights in line and/or both sidelights means you are looking at her bow: Rule 14 head-on.",
    src: "COLREGS Rule 14 · MARI003"
  },
  {
    q: "Two power-driven vessels are crossing with risk of collision. Which gives way?",
    a: "The vessel that has the other on her own starboard side",
    w: [
      "The vessel that has the other on her own port side, since she is the one on the left",
      "The vessel with the longer overall length, because larger vessels take longer to turn",
      "The vessel that is making the higher speed through the water at that moment"
    ],
    why: "Rule 15: “give way to the right”. She should also, if circumstances admit, avoid crossing ahead of the other vessel – so turn to starboard or slow down and pass astern.",
    src: "COLREGS Rule 15 · MARI003"
  },
  {
    q: "What must a give-way vessel do under Rule 16?",
    a: "Take early and substantial action to keep well clear",
    w: [
      "Hold her course and speed until the other vessel has altered to avoid her",
      "Sound five short blasts on the whistle and then wait to see what the other does",
      "Wait until the stand-on vessel alters before she makes any change of her own"
    ],
    why: "Rule 16: so far as possible, take early and substantial action. Late or timid action is the usual cause of close-quarters situations.",
    src: "COLREGS Rule 16 · MARI003"
  },
  {
    q: "What must the stand-on vessel do under Rule 17?",
    a: "Keep course and speed, but act alone if the give-way vessel is not acting appropriately",
    w: [
      "Alter course to starboard at once so that she can pass well clear of the give-way vessel",
      "Stop and sound three short blasts so the other vessel knows that she is astern",
      "Reduce speed and alter course to port so as to pass astern of the give-way vessel"
    ],
    why: "Rule 17(a): keep course and speed, but she MAY manoeuvre as soon as it is apparent the give-way vessel is not acting. Rule 17(b): she MUST act to best avoid collision once collision cannot be avoided by the give-way vessel alone.",
    src: "COLREGS Rule 17 · MARI003"
  },
  {
    q: "A stand-on power-driven vessel decides to act on her own in a crossing situation. She should avoid…",
    a: "Altering course to port for a vessel on her own port side",
    w: [
      "Altering course to starboard, because that turns her away from the other vessel",
      "Reducing her speed, since that makes her intentions harder for the other to see",
      "Sounding the manoeuvring signals, because these are only for overtaking in channels"
    ],
    why: "Rule 17(c): turning to port into the path of a vessel on your port side can turn a crossing into a collision. Turn to starboard or slow down.",
    src: "COLREGS Rule 17 · MARI003"
  },
  {
    q: "A power-driven vessel underway must keep out of the way of all of the following EXCEPT…",
    a: "A vessel at anchor in open water",
    w: [
      "A vessel not under command that is showing two black balls in a vertical line",
      "A vessel engaged in fishing with nets or lines out that restrict her manoeuvring",
      "A sailing vessel under sail alone and not using any engine at the time"
    ],
    why: "Rule 18(a): power-driven gives way to vessels not under command, restricted in ability to manoeuvre, engaged in fishing, and sailing vessels. You must of course still keep clear of an anchored vessel as a matter of good seamanship (Rule 2).",
    src: "COLREGS Rule 18 · MARI003"
  },
  {
    q: "A sailing vessel underway must keep out of the way of…",
    a: "A vessel not under command, restricted in ability to manoeuvre, or fishing",
    w: [
      "Any power-driven vessel that is in sight of her and on her starboard side",
      "Only vessels engaged in fishing, but not those that are not under command",
      "Other sailing vessels only, but never a power-driven vessel in any circumstances"
    ],
    why: "Rule 18(b). Note the power-driven vessel gives way to the sailing vessel, not the other way round – except where Rules 9, 10 and 13 require otherwise (e.g. a sailing vessel overtaking, or in a narrow channel).",
    src: "COLREGS Rule 18 · MARI003"
  },
  {
    q: "Which Rule requires other vessels to avoid impeding the safe passage of a vessel constrained by her draught?",
    a: "Rule 18(d)",
    w: [
      "Rule 9(a)",
      "Rule 15",
      "Rule 19(b)"
    ],
    why: "Any vessel other than NUC or RAM shall, if circumstances admit, avoid impeding the safe passage of a vessel constrained by her draught showing the Rule 28 signals. She, in turn, must navigate with particular caution.",
    src: "COLREGS Rule 18 · MARI003"
  },
  {
    q: "In restricted visibility, vessels not in sight of one another…",
    a: "Have no stand-on vessel: every vessel must take avoiding action in ample time",
    w: [
      "Follow the usual give-way and stand-on rules, since the Rules do not change in fog",
      "Must anchor immediately wherever they are, as soon as visibility is restricted",
      "Must stop engines and sound two prolonged blasts continuously until it clears"
    ],
    why: "Rule 19 replaces the give-way/stand-on rules for vessels not in sight of one another in or near restricted visibility. Everyone proceeds at a safe speed with engines ready for immediate manoeuvre and takes early action.",
    src: "COLREGS Rule 19 · MARI003"
  },
  {
    q: "In fog you detect another vessel by radar alone and a close-quarters situation is developing. If you alter course, which is the action to avoid for a vessel that is ahead of your beam?",
    a: "Turning to port",
    w: [
      "Turning to starboard",
      "Reducing speed",
      "Holding your course"
    ],
    why: "Rule 19(d): for a vessel forward of the beam (other than one you are overtaking), avoid altering to port. Also avoid turning towards a vessel that is abeam or abaft your beam. Turning to starboard or slowing down are the preferred actions.",
    src: "COLREGS Rule 19 · MARI003"
  },
  {
    q: "In fog you hear a fog signal apparently forward of your beam. Unless you have determined there is no risk of collision, you should…",
    a: "Reduce to minimum speed to keep steerage, stop if necessary, and navigate with extreme caution",
    w: [
      "Maintain speed and sound one prolonged blast so that the other vessel can find you",
      "Alter course to port and increase speed to clear the area as quickly as you can",
      "Switch on every light on the vessel and continue on at the present speed"
    ],
    why: "Rule 19(e).",
    src: "COLREGS Rule 19 · MARI003"
  },
  {
    q: "In restricted visibility, a power-driven vessel must proceed at a safe speed with her engines…",
    a: "Ready for immediate manoeuvre",
    w: [
      "Idling in neutral",
      "Switched off to listen for fog signals",
      "Set to the speed on the passage plan"
    ],
    why: "Rule 19(b). Safe speed also means being able to stop within the distance you can see (Rule 6).",
    src: "COLREGS Rule 19 · MARI003"
  },
  {
    q: "A Coast Guard rescue vessel is proceeding at speed to a tasking. Which statement is correct?",
    a: "Urgency creates no right of way; the vessel must keep a good lookout and a safe speed",
    w: [
      "She has priority over all other vessels while she is responding to a tasking",
      "She may ignore the Rules if her lifeboat flashing lights are switched on and visible",
      "She is automatically a vessel restricted in her ability to manoeuvre once she sails"
    ],
    why: "Without the signals of a genuinely restricted vessel, a vessel proceeding to a tasking has no special status. If anything she carries more obligation – she is the one generating the risk with speed. Amber flashing lights do not exempt you from the collision regulations.",
    src: "Passage Planning Guide · MRQ Vessel Crew Guide"
  },
  {
    q: "Crossing close ahead of a large ship is unwise even when the Rules say she must give way, because…",
    a: "She cannot stop or turn quickly, may not see you, and moves faster than she appears",
    w: [
      "She is required to sound a signal to you before she alters course to give way",
      "Radar makes her look closer than she really is, so there is always a safe gap",
      "She always has right of way over small vessels in every type of situation"
    ],
    why: "The Rules allocate responsibility but do not change physics. A ship may need a mile to stop, has a long blind sector ahead and covers 3 nm in ten minutes at 18 knots. Alter early and boldly, and pass astern.",
    src: "Passage Planning Guide – Manoeuvring difficulties of larger vessels"
  },
  {
    q: "Why must you never pass between a tug and her tow?",
    a: "The towline may be long, low and nearly invisible, and can sweep across your path",
    w: [
      "It is only prohibited at night, when the lights of the tug and tow are showing",
      "The tow has priority and may sound five blasts if it considers you too close",
      "The tug's wash will always capsize a small vessel that comes in between them"
    ],
    why: "Look for the tug's towing lights and the shape of the tow and give the whole assembly a very wide berth.",
    src: "Passage Planning Guide · NATRAC002 Towing"
  },
  {
    q: "Which statement about using an autopilot is correct?",
    a: "It steers a heading but does not keep a lookout, so position monitoring continues",
    w: [
      "It satisfies the lookout requirement for the vessel whenever the radar is switched on",
      "It can be left unattended in open water by day when no other vessels are around",
      "It relieves the skipper of the safe speed requirement of Rule 6 in open water"
    ],
    why: "Every watchkeeper must be able to disengage it instantly (the “standby” switch) and must keep a proper lookout. An autopilot will steer faithfully into a reef.",
    src: "Passage Planning Guide – Autopilot · COLREGS Rule 5"
  },
  {
    q: "The COLREGS are arranged in parts. Which part contains the steering and sailing rules (Rules 4–19)?",
    a: "Part B",
    w: [
      "Part A",
      "Part C",
      "Part D"
    ],
    why: "Part A General (1–3); Part B Steering and Sailing (4–19), with Section I any visibility, Section II in sight, Section III restricted visibility; Part C Lights and Shapes (20–31); Part D Sound and Light Signals (32–37); Part E Exemptions. Annex IV covers distress signals.",
    src: "COLREGS structure · MARI003"
  },
  {
    q: "In Australia the COLREGS are given the force of law by…",
    a: "The Navigation Act and state legislation (applied through Marine Order 30)",
    w: [
      "The Australian Maritime Safety Authority Act, with no state legislation involved at all",
      "Local council by-laws, which apply in each harbour and each bay",
      "The Safety Management System of each individual vessel, as the operator has written it"
    ],
    why: "The IMO is the UN agency responsible for the COLREGS; in Australia they have legal force under the Navigation Act 2012 and state Acts. A breach is an offence and the first thing an investigation examines.",
    src: "GPH Part 1 · Passage Planning Guide · MARI003"
  },
  {
    q: "You are the stand-on vessel but the give-way vessel is plainly not acting. You may take avoiding action…",
    a: "As soon as it becomes apparent that she is not taking appropriate action",
    w: [
      "Only after sounding five short blasts and then waiting for two full minutes",
      "Never – you must hold course and speed until a collision has become certain",
      "Only once the range between the two vessels has fallen to under 1 cable"
    ],
    why: "Rule 17(a)(ii) lets you manoeuvre as soon as it is apparent; Rule 17(b) requires it when collision can no longer be avoided by the give-way vessel alone. Five short blasts can also warn her of your doubt (Rule 34(d)).",
    src: "COLREGS Rules 17 and 34 · MARI003"
  }
]);

