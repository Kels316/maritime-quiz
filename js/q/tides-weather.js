/* Question data – tides-weather. Fields: q, a (correct), w (3 wrong options), why, src, vis (optional). */
MQ.add("tides", [
  {
    q: "Spring tides occur…",
    a: "Shortly after new and full moon, with the greatest range and strongest streams",
    w: [
      "Shortly after the first and last quarter, with the least range and weakest streams",
      "Only in the spring months, when the sun is higher over the coast",
      "Whenever the wind blows onshore for more than a day"
    ],
    why: "Springs: highest highs, lowest lows, strongest streams. Neaps (after the quarters): least range and weakest streams. Work a spring high water when you need depth over a bank; work a neap when you want to avoid strong stream in a narrow passage.",
    src: "Passage Planning Guide – Tides and tidal streams"
  },
  {
    q: "The difference between “tide” and “tidal stream” is…",
    a: "Tide is the vertical rise and fall; tidal stream is the horizontal movement of water",
    w: [
      "Tide is the horizontal movement; tidal stream is the vertical rise and fall",
      "They are the same thing, and the two words are used interchangeably",
      "Tide is caused by the wind; tidal stream is caused by the moon"
    ],
    why: "Flood is the incoming stream, ebb the outgoing, and slack water the pause near the turn.",
    src: "Passage Planning Guide – Tides and tidal streams"
  },
  {
    q: "Actual depth of water at a given time is…",
    a: "Charted depth plus height of tide",
    w: [
      "Charted depth minus height of tide",
      "Charted depth only",
      "Height of tide minus drying height"
    ],
    why: "Charted depth is below chart datum (LAT); the height of tide is the water surface above datum.",
    src: "Passage Planning Guide – Tides and tidal streams"
  },
  {
    q: "A reef dries 0.9 m. Your draught is 2.1 m and you want 0.5 m under the keel. What height of tide do you need to cross it?",
    a: "3.5 m",
    w: [
      "2.6 m",
      "1.7 m",
      "2.1 m"
    ],
    why: "A drying height is measured above datum and counts against you: 0.9 + 2.1 + 0.5 = 3.5 m.",
    src: "Passage Planning Guide – Rule of quarters"
  },
  {
    q: "The rule of twelfths says that between low and high water the tide rises by how many twelfths of its range in successive hours?",
    a: "1, 2, 3, 3, 2, 1",
    w: [
      "2, 2, 2, 2, 2, 2",
      "3, 3, 2, 2, 1, 1",
      "1, 1, 1, 3, 3, 3"
    ],
    why: "Cumulative 1, 3, 6, 9, 11, 12. The tide runs fastest in the middle two hours. It assumes a regular semi-diurnal tide – it can be well out in diurnal tides (parts of northern Australia) and river entrances.",
    src: "Passage Planning Guide – The rule of twelfths"
  },
  {
    q: "At the end of the second hour of a six-hour rising tide, the tide has risen…",
    a: "A quarter of its range (3 twelfths)",
    w: [
      "A third of its range (4 twelfths)",
      "Half its range",
      "A sixth of its range"
    ],
    why: "A quarter of the range is reached after one third of the duration – not at a quarter of the duration. Half the range is at the mid-point, three quarters after two thirds.",
    src: "Passage Planning Guide – The rule of quarters"
  },
  {
    q: "Australian tide tables are normally published in local standard time. In daylight saving you must…",
    a: "Add one hour to the tabulated times",
    w: [
      "Subtract one hour",
      "Use the times exactly as tabulated",
      "Add two hours"
    ],
    why: "Check the year, the port and the time basis. An hour error can account for an entire safe window on a bar.",
    src: "Passage Planning Guide – Using local tide tables"
  },
  {
    q: "For a secondary port, tide tables give…",
    a: "Time differences and a height difference or ratio of ranges, applied to the standard port",
    w: [
      "Complete daily predictions, printed in a separate volume of the tables",
      "Only the times of high water, with heights taken from the standard port",
      "Corrections for barometric pressure and wind, added to the predictions"
    ],
    why: "A ratio greater than 1.0 means a bigger range than the standard port; it is applied to every height, high and low alike.",
    src: "Passage Planning Guide – Standard ports and secondary ports"
  },
  {
    q: "LAT (lowest astronomical tide) is…",
    a: "The lowest level predictable under average weather and any astronomical combination",
    w: [
      "The average of all the low waters over a period of nineteen years",
      "The lowest level that has ever been recorded at the port",
      "The average of the low waters at springs over a month"
    ],
    why: "It is chart datum on Australian charts. “Rarely” is not “never”: strong offshore wind or high barometric pressure can push the actual level below LAT.",
    src: "Passage Planning Guide – Tidal reference planes"
  },
  {
    q: "MHWS is…",
    a: "Mean high water springs, the datum for charted heights and clearances",
    w: [
      "The highest tide ever recorded, used to find the maximum depth",
      "The mean of all high waters, at both springs and neaps",
      "The level of high water at neaps, used for drying heights"
    ],
    why: "US charts use mean high water (MHW), a lower plane – so a clearance quoted above MHW is more generous than the same figure above MHWS. Read the statement under the chart title.",
    src: "Passage Planning Guide – Tidal reference planes"
  },
  {
    q: "Wind blowing against the tidal stream tends to…",
    a: "Produce short, steep, breaking seas, far worse than either alone",
    w: [
      "Flatten the water, as the stream takes energy from the waves",
      "Reduce the stream to zero, so the entrance is easier to cross",
      "Make the sea longer and gentler, so a bar is safer to cross"
    ],
    why: "A 20 knot onshore wind with a 2 knot ebb out of an entrance can make breaking water where it was flat two hours earlier. Springs make it worse; pass overfalls near slack water or give them a wide berth.",
    src: "Passage Planning Guide – Tidal streams"
  },
  {
    q: "A swell runs in against an ebb stream at a bar. What happens to the waves?",
    a: "They are compressed: shorter, higher and more likely to break",
    w: [
      "They get longer and lower, so the bar is easier to cross",
      "They are unaffected, as the stream only moves the water beneath them",
      "They stop breaking, as the ebb takes the energy out of the swell"
    ],
    why: "A current running with the waves lengthens them and reduces height. This is why a bar workable near high-water slack can be lethal two hours into the ebb.",
    src: "Passage Planning Guide – Why bars break"
  },
  {
    q: "Which swell is more likely to close a bar?",
    a: "A 2 m swell with a 14-second period",
    w: [
      "A 2 m local sea with a 6-second period",
      "A 0.5 m swell with a 14-second period",
      "There is no difference if the heights match"
    ],
    why: "Long-period waves carry more energy, break in deeper water and break bigger. Swell period matters as much as height.",
    src: "Passage Planning Guide – Why bars break"
  },
  {
    q: "Waves break in water about how deep compared with their height?",
    a: "About 1.3 times the average breaker height",
    w: [
      "About half the breaker height",
      "About 5 times the average breaker height",
      "About the same as the wavelength"
    ],
    why: "So a 2 m breaker breaks in roughly 2.6 m of water – a check against charted depth plus tide.",
    src: "Passage Planning Guide – Why bars break"
  },
  {
    q: "Which type of breaker is most dangerous to a small vessel?",
    a: "A plunging breaker, which curls over and breaks with a crash",
    w: [
      "A spilling breaker, which breaks gradually over a long distance",
      "A surging breaker, which peaks up and surges without breaking",
      "None of them, as all three types are equally harmless"
    ],
    why: "Spilling breakers break gradually over a distance; surging ones peak up and surge without properly breaking. Steeper bottoms and waves favour plunging and surging.",
    src: "Passage Planning Guide – Why bars break"
  },
  {
    q: "On a chart, a tidal stream arrow with feathers means…",
    a: "A tidal (reversing) stream; an unfeathered arrow shows a current",
    w: [
      "A permanent ocean current; unfeathered shows a tidal stream",
      "A river outflow; unfeathered shows a flood tide",
      "A prohibited anchorage; unfeathered shows a cable"
    ],
    why: "The figure beside the arrow gives the rate in knots. Charted rates are predictions for average conditions – wind, river run-off after rain and abnormal barometric pressure can change them a lot.",
    src: "Passage Planning Guide – Tidal stream information on the chart"
  },
  {
    q: "You anchor in a bay charted at 2.1 m. Your draught is 2.5 m and the night's low water will be 0.75 m. Which is the best conclusion?",
    a: "You will not touch (0.35 m under the keel), but the margin is too small, so move to deeper water",
    w: [
      "You will go aground at low water, because the draught exceeds the depth",
      "You have a comfortable margin under the keel at the lowest water",
      "You can only anchor there at neaps, but may stay for the night"
    ],
    why: "2.1 + 0.75 = 2.85 m; 2.85 − 2.5 = 0.35 m. That is less than a small wake or swell. The arithmetic says you float; seamanship says the anchorage is not suitable.",
    src: "Passage Planning Guide – Rule of twelfths worked example"
  },
  {
    q: "When mooring overnight in an area with large tidal range, mooring lines should be…",
    a: "Set longer, about three times the tide range, so the vessel is not hung up on a falling tide",
    w: [
      "Set as short as possible, so the vessel cannot move and chafe",
      "Doubled, with extra breast lines only and no springs at either end",
      "Left slack on the wharf, so the lines are free to run as the tide falls"
    ],
    why: "Always check the predicted range before leaving a vessel moored for an extended period.",
    src: "GPH Part 2 – Mooring: allowing for the tide"
  },
  {
    q: "Storm surge is…",
    a: "A rise in sea level above the predicted tide, caused by a deep low and onshore wind",
    w: [
      "The twice-daily atmospheric tide of about 3 hPa seen in the tropics",
      "The fast middle part of the tide in the rule of twelfths",
      "A wave that breaks on a bar when a swell runs against an ebb"
    ],
    why: "A surge coinciding with a high spring tide is what floods low-lying foreshores.",
    src: "Passage Planning Guide – Basic meteorological terms"
  },
  {
    q: "Tidal predictions for the Australian National Tide Tables (ANTT) cover…",
    a: "Over 500 ports in Australia, PNG, the Solomon Islands, Antarctica and East Timor",
    w: [
      "Only the capital city ports and the main commercial ports of each state",
      "Only the east-coast ports, from Cape York to Bass Strait",
      "About 20 major ports, with minor-port differences in another book"
    ],
    why: "The Bureau of Meteorology and state authorities also publish predictions. Always confirm the correct year and the correct port.",
    src: "Passage Planning Guide – Other publications required for planning"
  }
]);

MQ.add("weather", [
  {
    q: "In the southern hemisphere, air circulates…",
    a: "Clockwise around a low and anticlockwise around a high",
    w: [
      "Anticlockwise around a low and clockwise around a high",
      "Clockwise around both",
      "Anticlockwise around both"
    ],
    why: "The Coriolis effect deflects moving air to the left in the southern hemisphere, so wind blows nearly along the isobars. Highs: sinking air, stable fine weather. Lows: rising air, cloud, rain and stronger wind.",
    src: "Passage Planning Guide – The Coriolis effect · Reading a synoptic chart"
  },
  {
    q: "On a synoptic chart, closely spaced isobars mean…",
    a: "A steep pressure gradient and strong wind",
    w: [
      "Light and variable wind",
      "A col",
      "The cold front has just passed"
    ],
    why: "A col – the area between two highs and two lows – has light and variable winds.",
    src: "Passage Planning Guide – Basic meteorological terms"
  },
  {
    q: "The passage of a cold front typically brings…",
    a: "A sharp wind shift, a squall line, heavy rain or storms, a temperature drop and rising pressure",
    w: [
      "Gradual cloud thickening and steady rain, with falling pressure",
      "A long spell of settled weather before the front, then a calm",
      "A steady wind with no shift and a gradual rise in temperature"
    ],
    why: "Warm fronts bring gradual cloud thickening and steady rain. Cold fronts are the dominant type on Australian charts; severe weather is short-lived but arrives quickly. Old sea runs from the previous direction while the new wind builds against it.",
    src: "Passage Planning Guide – Basic meteorological terms"
  },
  {
    q: "A fall of how many hectopascals (hPa) in atmospheric pressure over three hours is a serious warning?",
    a: "3 hPa or more",
    w: [
      "0.3 hPa",
      "1 hPa",
      "There is no significant amount"
    ],
    why: "Allow for the diurnal cycle of up to about 3 hPa (lows around 0400 and 1600, highs around 1000 and 2200) before treating small changes as an approaching system.",
    src: "Passage Planning Guide – The barometer"
  },
  {
    q: "A temperature inversion has which effect?",
    a: "It can extend VHF range (skip) and cause radar ducting, leaving “holes” where targets vanish",
    w: [
      "It improves visibility and makes the radar picture clearer at range",
      "It strengthens the sea breeze and makes the afternoon wind stronger",
      "It has no effect on radio or radar, only on the barometer"
    ],
    why: "Inversions also trap moisture and smoke (fog, haze) and keep winds light and the sea deceptively smooth. If you suspect one, treat radar and radio as degraded, strengthen the lookout, slow down, and confirm position by other means.",
    src: "Passage Planning Guide – Temperature inversions, radio skip and radar ducting"
  },
  {
    q: "Forecast wave heights are “significant wave heights”, meaning…",
    a: "The average height of the highest one third of waves, trough to crest",
    w: [
      "The height of the single largest wave you are likely to meet",
      "The average height of all the waves, measured trough to crest",
      "The height of the swell only, with the local sea given separately"
    ],
    why: "The largest wave over a few hours can be about twice the significant height; about one in ten waves is ~1.3 times it. Sea and swell can coincide to give individual waves higher than either.",
    src: "Passage Planning Guide – Wave height, sea and swell"
  },
  {
    q: "The Bureau warns that wind gusts can be up to how much stronger than the forecast average?",
    a: "40 per cent",
    w: [
      "5 per cent",
      "10 per cent",
      "100 per cent"
    ],
    why: "A forecast of 20–25 knots implies routine gusts to around 35 knots. Plan against the gust.",
    src: "Passage Planning Guide – Wind strength and the Beaufort scale"
  },
  {
    q: "Which marine wind warning is issued for winds of 34–47 knots?",
    a: "Gale warning",
    w: [
      "Strong wind warning",
      "Storm force wind warning",
      "Hurricane force wind warning"
    ],
    why: "Strong wind 26–33 kn; gale 34–47; storm force 48–63; hurricane force 64+.",
    src: "Passage Planning Guide – Marine wind warnings"
  },
  {
    q: "The Bureau of Meteorology (BOM) coastal waters forecast is typically issued…",
    a: "Twice daily (about 0500 and 1530), with an outlook for the next two days",
    w: [
      "Once a week, on Friday, with an outlook for the weekend",
      "Hourly through the day, from the automatic stations along the coast",
      "Only when a warning is current for that district of the coast"
    ],
    why: "Note the issue time and when the next one is due. Scheduled coast-station broadcasts and warnings are announced on Channel 16.",
    src: "Passage Planning Guide – Sources and types of weather reports"
  },
  {
    q: "The official Australian tropical cyclone season runs…",
    a: "1 November to 30 April",
    w: [
      "1 June to 31 October",
      "1 January to 31 March",
      "All year equally"
    ],
    why: "Activity peaks in January and February, though a storm can form in any month. Cyclones need sea surface temperatures of around 26.5°C and weak vertical wind shear.",
    src: "Passage Planning Guide – Cyclonic and storm development"
  },
  {
    q: "A Category 1 tropical cyclone has a strongest gust of…",
    a: "Less than 125 km/h",
    w: [
      "125–169 km/h",
      "More than 280 km/h",
      "Less than 60 km/h"
    ],
    why: "Categories (strongest gust): 1 <125; 2 125–169; 3 170–224; 4 225–279; 5 >280 km/h. Divide km/h by 1.852 for knots.",
    src: "Passage Planning Guide – Tropical cyclone categories"
  },
  {
    q: "In the southern hemisphere the dangerous (non-navigable) semicircle of a tropical cyclone is…",
    a: "Left of the storm track, looking in the direction the storm is moving",
    w: [
      "Right of the storm track, looking in the direction the storm is moving",
      "Directly ahead of the centre only, along the line of the track",
      "The rear of the storm, where the pressure is lowest"
    ],
    why: "There the circulating wind and the storm's forward motion add together. Backing wind = left (dangerous) semicircle; veering = right (navigable). The rule is a strong presumption, not a certainty.",
    src: "Passage Planning Guide – Navigable and non-navigable semicircles"
  },
  {
    q: "For a 12 m Coast Guard vessel, the correct action when a tropical cyclone threatens the area is…",
    a: "Don't sail, or return and secure the vessel days earlier",
    w: [
      "Head out to sea to ride it out in deep water",
      "Practise the wind-shift rule at sea until the track is clear",
      "Wait for the cyclone warning to reach your radio first"
    ],
    why: "A small vessel has neither the sea room nor the endurance to manoeuvre relative to a storm hundreds of miles across. Its priority is the nearest place of refuge.",
    src: "Passage Planning Guide – Navigable and non-navigable semicircles"
  },
  {
    q: "A cyclone a thousand kilometres away can still affect your bar through…",
    a: "Long-period swell, which breaks in water where a short local sea would not",
    w: [
      "Strong local winds, blown ahead of the system towards the coast",
      "Higher tides at neaps, as the low pressure lifts the sea surface",
      "Fog banks that form ahead of the system and settle over the bar"
    ],
    why: "Treat a large long-period swell as a bar-closing condition regardless of how pleasant the wind is.",
    src: "Passage Planning Guide – Navigable and non-navigable semicircles"
  },
  {
    q: "The summer sea breeze cycle on much of the Australian coast means…",
    a: "A light morning offshore breeze, then an onshore 15–25 knots by mid-afternoon",
    w: [
      "The strongest wind is always at dawn, and it eases as the land warms",
      "Onshore winds in the morning and offshore winds in the afternoon",
      "No change at all through the day, with the wind steady from the south"
    ],
    why: "This makes an afternoon return passage – and an afternoon bar crossing – much rougher than the morning outbound leg.",
    src: "Passage Planning Guide – Local weather patterns"
  },
  {
    q: "Which is an indicator of approaching bad weather?",
    a: "A steep fall in pressure, a large change in the wind, and sometimes very clear air with high cirrus",
    w: [
      "A steadily rising barometer, a light wind and low stratus cloud",
      "Falling humidity and a cloudless sky, with steady pressure through the day",
      "A light variable breeze with a perfectly flat sea and poor visibility"
    ],
    why: "Unusually good visibility often precedes deterioration. Marine life behaviour and frequent warnings from coast stations are also signs.",
    src: "Passage Planning Guide – Recognising the approach of bad weather"
  },
  {
    q: "A wind that shifts from north-west through west to south-west is…",
    a: "Backing – changing anticlockwise",
    w: [
      "Veering: changing clockwise",
      "Gusting",
      "Steady"
    ],
    why: "Veering is clockwise (SW to W to NW). Note wind direction at regular intervals so a shift is a measured fact, not an impression.",
    src: "Passage Planning Guide – Basic meteorological terms (wind shifts)"
  },
  {
    q: "Which of these is a “severe thunderstorm” criterion?",
    a: "Gusts of 90 km/h or more, hail of 2 cm or more, flash flooding, or a tornado",
    w: [
      "Any thunder heard, from a storm anywhere within sight of the coast",
      "A wind of 15 knots with a rain shower lasting half an hour",
      "Rain for more than an hour, with a five degree temperature drop"
    ],
    why: "Thunderstorms can produce severe squalls, hail, lightning and near-zero visibility with little lead time – a towering cumulonimbus to windward gives warning.",
    src: "Passage Planning Guide – Cyclonic and storm development"
  },
  {
    q: "Fetch is…",
    a: "The distance of open water over which the wind blows",
    w: [
      "The time between wave crests",
      "The height of a wave",
      "The depth of water at which waves begin to break"
    ],
    why: "A longer fetch produces higher seas for the same wind speed. Close inshore, a short fetch gives lower but steeper and shorter seas, often harder on a 12 m vessel.",
    src: "Passage Planning Guide – Basic meteorological terms"
  },
  {
    q: "Sea and swell differ in that…",
    a: "Sea is made by the local wind; swell comes from a distant system",
    w: [
      "Swell is wind-driven and short; sea is long and has travelled far",
      "They are the same thing, measured twice by different stations",
      "Sea is found only offshore, and swell is found only inside bays"
    ],
    why: "Forecasts give both. Direction matters too: the same 20 knots is a different passage head-on, abeam and astern.",
    src: "Passage Planning Guide – Basic meteorological terms"
  },
  {
    q: "What force on the Beaufort scale marks the start of a gale?",
    a: "Force 8 (34–40 knots)",
    w: [
      "Force 6 (22–27 knots)",
      "Force 10 (48–55 knots)",
      "Force 12 (64+ knots)"
    ],
    why: "Force 7 near gale 28–33; Force 8 gale 34–40; Force 9 strong gale 41–47; Force 10 storm 48–55.",
    src: "Passage Planning Guide – Beaufort scale"
  },
  {
    q: "Relative to a 40-metre ship, a forecast “south to south-easterly 15 to 20 knots” for a 9 m rescue vessel is…",
    a: "Close to a working upper limit, especially against tide or over a bar",
    w: [
      "Unremarkable, since conditions are no worse than a ship can cope with",
      "Dangerous only at night, when sea state cannot be judged by eye",
      "Irrelevant to small vessels, as the forecast is written for ships"
    ],
    why: "A forecast is written for all vessels. Your SMS and flotilla SOP limits are the decision – how the vessel feels on the day is not.",
    src: "Passage Planning Guide – Recognising the approach of bad weather"
  }
]);

