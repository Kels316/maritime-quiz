/* Question data – lights. Fields: q, a (correct), w (3 wrong options), why, src, vis (optional). */
MQ.add("lights", [
  {
    q: "Over what arc does a masthead light show?",
    a: "225°, from right ahead to 22.5° abaft the beam on each side",
    w: [
      "360°, all round the horizon, as for an anchor light",
      "112.5° on each side, from right ahead to 22.5° abaft the beam",
      "135°, centred on astern, as for a sternlight"
    ],
    why: "Masthead 225° (white); each sidelight 112.5° (red port, green starboard); sternlight 135° (white); all-round light 360°.",
    src: "COLREGS Rule 21 · MARI003"
  },
  {
    q: "Over what arc does a sternlight show?",
    a: "135°, centred on astern",
    w: [
      "225°, centred on astern, reaching forward of the beam",
      "112.5°, centred on astern, as for a sidelight",
      "360°, all round the horizon, as for an anchor light"
    ],
    why: "The sternlight shows white over 135°, so that together with the 225° masthead light and the two 112.5° sidelights the horizon is covered with no gaps or overlap.",
    src: "COLREGS Rule 21 · GPH Part 1"
  },
  {
    q: "The port sidelight is…",
    a: "Red, showing 112.5° from right ahead to 22.5° abaft the port beam",
    w: [
      "Green, showing 112.5° from right ahead to 22.5° abaft the port beam",
      "Red, showing 225° from ahead",
      "Red, showing 135° centred on astern"
    ],
    why: "Red to port, green to starboard. Each sidelight covers 112.5°.",
    src: "COLREGS Rule 21 · GPH Part 1"
  },
  {
    q: "The navigation lights must be shown…",
    a: "From sunset to sunrise, and in restricted visibility by day",
    w: [
      "Only when underway at night, and not when at anchor",
      "Only between 2000 and 0500, which is the usual period of darkness",
      "Only when other vessels are within 5 nm of your own vessel"
    ],
    why: "Rule 20: lights from sunset to sunrise (and by day in restricted visibility if carried); shapes by day. No other lights that could be mistaken for the prescribed ones may be shown.",
    src: "COLREGS Rule 20 · MARI003"
  },
  {
    q: "A power-driven vessel less than 12 m long may instead show…",
    a: "An all-round white light and sidelights",
    w: [
      "A single masthead light only",
      "A flashing yellow light",
      "Red over white all-round lights"
    ],
    why: "Rule 23(d)(i). A vessel under 7 m whose maximum speed does not exceed 7 knots may show just an all-round white light (and sidelights if practicable).",
    src: "COLREGS Rule 23 · MARI003"
  },
  {
    q: "A power-driven vessel under 20 m may combine her sidelights in…",
    a: "One lantern on the fore-and-aft centreline",
    w: [
      "One all-round green lantern",
      "The masthead lantern",
      "A lantern on the port side only"
    ],
    why: "Rule 21(b). A sailing vessel under 20 m may combine sidelights and sternlight in one tricolour lantern at the masthead.",
    src: "COLREGS Rules 21 and 25 · MARI003"
  },
  {
    q: "A power-driven vessel of 50 m or more underway shows…",
    a: "Two masthead lights (the after one higher), sidelights and a sternlight",
    w: [
      "One masthead light, sidelights and a sternlight, as for a smaller vessel",
      "Two all-round white lights, one above the other, and sidelights",
      "Three masthead lights in a vertical line, sidelights and a sternlight"
    ],
    why: "Rule 23(a): a vessel under 50 m need not show the second masthead light but may.",
    src: "COLREGS Rule 23 · MARI003"
  },
  {
    q: "What does an air-cushion vessel in non-displacement mode add to the power-driven lights?",
    a: "An all-round flashing yellow light",
    w: [
      "A red over white all-round light",
      "Two additional masthead lights",
      "A blue flashing light"
    ],
    why: "Rule 23(b). Hovercraft are easily recognised by the flashing yellow.",
    src: "COLREGS Rule 23 · MARI003"
  },
  {
    q: "What is the minimum visibility of the masthead light of a power-driven vessel of 12–20 m in length?",
    a: "3 nautical miles",
    w: [
      "1 nautical mile",
      "5 nautical miles",
      "6 nautical miles"
    ],
    why: "Rule 22: masthead light 2 nm (<12 m), 5 nm (12–50 m; 3 nm if under 20 m), 6 nm (over 50 m). Sidelights 1 / 2 / 3 nm; stern, towing and all-round lights 2 / 2 / 3 nm.",
    src: "COLREGS Rule 22 · MARI003"
  },
  {
    q: "What is the minimum visibility of sidelights on a vessel under 12 m?",
    a: "1 nautical mile",
    w: [
      "2 nautical miles",
      "3 nautical miles",
      "5 nautical miles"
    ],
    why: "Rule 22: sidelights are 1 nm for vessels under 12 m, 2 nm for 12–50 m, and 3 nm over 50 m.",
    src: "COLREGS Rule 22 · MARI003"
  },
  {
    q: "A power-driven vessel towing, with the length of tow not exceeding 200 m, shows…",
    a: "Two masthead lights in a vertical line, sidelights, a sternlight and a yellow towing light",
    w: [
      "One masthead light, sidelights and a sternlight only, as for any power-driven vessel",
      "Three masthead lights in a vertical line, sidelights, a sternlight and a diamond",
      "Two all-round red lights in a vertical line above the usual sidelights"
    ],
    why: "Rule 24(a). Over 200 m the tug shows three masthead lights and, by day, a diamond shape where best seen. The yellow towing light has the same characteristics as a sternlight.",
    src: "COLREGS Rule 24 · NATRAC002 Towing"
  },
  {
    q: "The length of a tow is measured as 220 m. By day the towing vessel shows…",
    a: "A diamond shape where it can best be seen",
    w: [
      "A cylinder",
      "Two balls in a vertical line",
      "Nothing – shapes are not required for towing"
    ],
    why: "Over 200 m (measured from the stern of the tug to the after end of the tow): three masthead lights by night, a diamond by day on both tug and tow.",
    src: "COLREGS Rule 24 · MARI003"
  },
  {
    q: "What lights does the vessel being towed show (tow under 200 m)?",
    a: "Sidelights and a sternlight",
    w: [
      "Masthead lights only",
      "Two red all-round lights",
      "No lights – the tug's lights cover it"
    ],
    why: "Rule 24(e). A towed vessel shows sidelights and a sternlight; over 200 m she also shows a diamond by day.",
    src: "COLREGS Rule 24 · MARI003"
  },
  {
    q: "You are towing a distressed vessel and cannot practicably show the towing lights required by Rule 24. What must you do?",
    a: "Take all possible measures to show the link between the vessels, e.g. light the towline",
    w: [
      "Switch off all lights so that other vessels are not confused by them",
      "Show five short flashes continuously from the stern until the tow ends",
      "Show the lights of a vessel at anchor until the tow is made fast"
    ],
    why: "Rule 24(g) lets a vessel not normally engaged in towing omit the prescribed lights when assisting a vessel in distress, but she must use Rule 36 measures – such as lighting the towline – to indicate the relationship.",
    src: "COLREGS Rule 24 · MARI003"
  },
  {
    q: "Seen from astern at night, this is…",
    a: "A vessel towing, with the towing light above her sternlight",
    w: [
      "A vessel at anchor, with two white lights one above the other",
      "A vessel aground, with two red lights above her sternlight",
      "A vessel not under command, with a yellow light over her stern"
    ],
    why: "A yellow light above a white sternlight is the tug's towing light above her sternlight.",
    src: "COLREGS Rule 24 · MARI003",
    vis: {"k":"lights","items":[{"c":"yellow","x":100,"y":62},{"c":"white","x":100,"y":88}],"alt":"Yellow light above a white light"}
  },
  {
    q: "Seen from ahead at night, a tug with a long tow shows…",
    a: "Three white masthead lights in a vertical line over red and green sidelights",
    w: [
      "Two red all-round lights over a white light and two sidelights",
      "A single white all-round light and no sidelights, as for an anchored vessel",
      "Green over white over green, all-round, with a masthead light beneath"
    ],
    why: "For a tow of more than 200 m the tug shows three masthead lights in a vertical line (two if the tow is 200 m or less), plus sidelights, a sternlight and the yellow towing light.",
    src: "COLREGS Rule 24 · MARI003",
    vis: {"k":"lights","items":[{"c":"white","x":100,"y":28},{"c":"white","x":100,"y":52},{"c":"white","x":100,"y":76},{"c":"red","x":76,"y":100},{"c":"green","x":124,"y":100}],"alt":"Three white lights over red and green"}
  },
  {
    q: "What are these lights?",
    a: "A vessel not under command (not making way)",
    w: [
      "A vessel restricted in her ability to manoeuvre",
      "A vessel constrained by her draught",
      "A vessel at anchor"
    ],
    why: "Two all-round red lights in a vertical line = not under command. If she is making way she also shows sidelights and a sternlight. Day shape: two black balls.",
    src: "COLREGS Rule 27 · MARI003",
    vis: {"k":"lights","stack":["red","red"],"alt":"Two red lights in a vertical line"}
  },
  {
    q: "What are these lights?",
    a: "A vessel restricted in her ability to manoeuvre",
    w: [
      "A vessel not under command and making no way",
      "A vessel engaged in trawling with her gear down",
      "A pilot vessel on pilotage duty"
    ],
    why: "Red–white–red, all-round, in a vertical line. Day shape: ball–diamond–ball. If making way she adds masthead light(s), sidelights and a sternlight; at anchor she adds anchor light(s).",
    src: "COLREGS Rule 27 · MARI003",
    vis: {"k":"lights","stack":["red","white","red"],"alt":"Red over white over red"}
  },
  {
    q: "What are these lights?",
    a: "A vessel constrained by her draught",
    w: [
      "A vessel not under command",
      "A vessel aground",
      "A vessel restricted in her ability to manoeuvre"
    ],
    why: "Three red all-round lights in a vertical line, in addition to her power-driven lights. Day shape: a cylinder.",
    src: "COLREGS Rule 28 · MARI003",
    vis: {"k":"lights","stack":["red","red","red"],"alt":"Three red lights in a vertical line"}
  },
  {
    q: "What are these lights?",
    a: "A vessel engaged in trawling",
    w: [
      "A vessel engaged in fishing other than trawling",
      "A pilot vessel",
      "A vessel at anchor"
    ],
    why: "Green over white all-round = trawling (a masthead light abaft and higher for vessels of 50 m or more, and sidelights and sternlight when making way). Day shape: two cones apex-to-apex.",
    src: "COLREGS Rule 26 · MARI003",
    vis: {"k":"lights","stack":["green","white"],"alt":"Green over white"}
  },
  {
    q: "What are these lights?",
    a: "A vessel engaged in fishing other than trawling",
    w: [
      "A vessel engaged in trawling with her nets down",
      "A vessel not under command and making no way",
      "A pilot vessel on pilotage duty"
    ],
    why: "Red over white all-round = fishing other than trawling. If outlying gear extends more than 150 m, an additional all-round white light (or a cone apex up) shows in the direction of the gear.",
    src: "COLREGS Rule 26 · MARI003",
    vis: {"k":"lights","stack":["red","white"],"alt":"Red over white"}
  },
  {
    q: "What are these lights?",
    a: "A pilot vessel on pilotage duty",
    w: [
      "A vessel engaged in fishing",
      "A vessel restricted in her ability to manoeuvre",
      "A vessel at anchor"
    ],
    why: "White over red all-round at or near the masthead (“white over red, pilot ahead”). Underway she adds sidelights and a sternlight; at anchor, anchor light(s).",
    src: "COLREGS Rule 29 · MARI003",
    vis: {"k":"lights","stack":["white","red"],"alt":"White over red"}
  },
  {
    q: "What are these lights?",
    a: "A vessel aground (anchor light plus two red lights)",
    w: [
      "A vessel not under command",
      "A vessel constrained by her draught",
      "A vessel restricted in her ability to manoeuvre"
    ],
    why: "Rule 30(d): the anchor light(s) plus two all-round red lights in a vertical line. Day shape: three black balls in a vertical line.",
    src: "COLREGS Rule 30 · MARI003",
    vis: {"k":"lights","stack":["white","red","red"],"alt":"White over two red lights"}
  },
  {
    q: "What is a single white all-round light seen at night most likely to be?",
    a: "A vessel at anchor (under 50 m), or a small power-driven vessel",
    w: [
      "A vessel not under command and making no way through the water",
      "A trawler working her nets, seen from well off her bow",
      "A vessel aground, which would show two red lights below it"
    ],
    why: "Under 50 m an anchored vessel may show one all-round white light; larger vessels show two. A very small vessel underway may show an all-round white light plus sidelights. Check the bearing and movement before assuming.",
    src: "COLREGS Rules 23 and 30 · GPH Part 1",
    vis: {"k":"lights","stack":["white"],"alt":"One white light"}
  },
  {
    q: "A vessel at anchor of 50 m or more shows…",
    a: "An all-round white light forward and a lower one at or near the stern",
    w: [
      "Red over white all-round lights, with sidelights and a sternlight",
      "One masthead light and sidelights, as for a vessel underway",
      "Two all-round red lights in a vertical line above an anchor light"
    ],
    why: "Rule 30(a). The forward light is higher than the after light. By day she shows one black ball in the fore part.",
    src: "COLREGS Rule 30 · MARI003"
  },
  {
    q: "A vessel engaged in mine clearance shows…",
    a: "Three all-round green lights (or balls): keep 1000 m clear",
    w: [
      "Three all-round red lights in a vertical line",
      "Green over white over green",
      "Two green lights over one red light"
    ],
    why: "Rule 27(f): in addition to normal lights, three green all-round lights or three balls – one near the masthead and one at each end of the fore yard.",
    src: "COLREGS Rule 27 · MARI003"
  },
  {
    q: "A dredger working with an obstruction on one side shows two red lights (or balls) on one side and two green lights (or diamonds) on the other. Which side may you pass?",
    a: "The side showing the green lights (or diamonds)",
    w: [
      "The side showing the red lights (or balls)",
      "Either side",
      "Neither – keep clear altogether"
    ],
    why: "Rule 27(d): red marks the side on which the obstruction exists; green marks the side on which another vessel may pass.",
    src: "COLREGS Rule 27 · MARI003"
  },
  {
    q: "At night a sailing vessel underway shows…",
    a: "Sidelights and a sternlight",
    w: [
      "A masthead light, sidelights and a sternlight",
      "Two all-round red lights in a vertical line",
      "One all-round white light only"
    ],
    why: "Rule 25. In addition she may show red over green all-round lights at the top of the mast (not with the combined lantern). A sailing vessel does not show a masthead light unless she is also using her engine.",
    src: "COLREGS Rule 25 · MARI003"
  },
  {
    q: "A sailing vessel is also using her engine. By day she must show…",
    a: "A cone, apex downwards, forward where it is best seen",
    w: [
      "A black ball, shown forward where it is best seen",
      "A cylinder, shown at the masthead where it is best seen",
      "A diamond, shown from the yard where it is best seen"
    ],
    why: "Rule 25(e): she is then a power-driven vessel and must follow the rules for one, including the power-driven lights at night.",
    src: "COLREGS Rule 25 · MARI003"
  },
  {
    q: "A vessel under oars that does not show the sailing vessel lights must…",
    a: "Have ready a torch or lantern showing white, to be shown in time to prevent collision",
    w: [
      "Show a single all-round red light on the stern throughout the night",
      "Show an all-round green light on the bow and a white light on the stern",
      "Display a small orange flag from the stern, day and night"
    ],
    why: "Rule 25(d).",
    src: "COLREGS Rule 25 · MARI003"
  },
  {
    q: "What is the vessel showing these day shapes?",
    a: "Not under command",
    w: [
      "Restricted in her ability to manoeuvre",
      "Aground",
      "Constrained by her draught"
    ],
    why: "Two black balls in a vertical line = not under command (two red lights at night).",
    src: "COLREGS Rule 27 · MARI003",
    vis: {"k":"shapes","stack":["ball","ball"],"alt":"Two black balls"}
  },
  {
    q: "What is the vessel showing these day shapes?",
    a: "Restricted in her ability to manoeuvre",
    w: [
      "Not under command",
      "Engaged in fishing with nets out",
      "Aground"
    ],
    why: "Ball–diamond–ball in a vertical line = RAM (red–white–red at night).",
    src: "COLREGS Rule 27 · MARI003",
    vis: {"k":"shapes","stack":["ball","diamond","ball"],"alt":"Ball, diamond, ball"}
  },
  {
    q: "What is the vessel showing this day shape?",
    a: "Constrained by her draught",
    w: [
      "Towing with a tow over 200 m",
      "Engaged in mine clearance",
      "At anchor"
    ],
    why: "A black cylinder = constrained by her draught (three red lights at night).",
    src: "COLREGS Rule 28 · MARI003",
    vis: {"k":"shapes","stack":["cylinder"],"alt":"A cylinder"}
  },
  {
    q: "What is the vessel showing these day shapes?",
    a: "Engaged in fishing",
    w: [
      "Towing a long tow",
      "Not under command",
      "Under sail with the engine running"
    ],
    why: "Two cones with their apexes together in a vertical line = fishing (trawling or other).",
    src: "COLREGS Rule 26 · MARI003",
    vis: {"k":"shapes","stack":["cone_down","cone_up"],"alt":"Two cones, apexes together"}
  },
  {
    q: "What is the vessel showing this day shape?",
    a: "A sailing vessel under sail and power (motor-sailing)",
    w: [
      "A vessel engaged in fishing with her gear out",
      "A pilot vessel waiting for a ship",
      "A vessel constrained by her draught in a channel"
    ],
    why: "A single cone, apex downwards, forward where best seen: she is a power-driven vessel.",
    src: "COLREGS Rule 25 · MARI003",
    vis: {"k":"shapes","stack":["cone_down"],"alt":"A cone point down"}
  },
  {
    q: "What is the vessel showing these day shapes?",
    a: "Aground",
    w: [
      "Not under command",
      "At anchor",
      "Restricted in her ability to manoeuvre"
    ],
    why: "Three black balls in a vertical line = aground. At anchor she would show just one ball in the fore part.",
    src: "COLREGS Rule 30 · MARI003",
    vis: {"k":"shapes","stack":["ball","ball","ball"],"alt":"Three black balls"}
  },
  {
    q: "A single black ball in the fore part of a vessel by day means she is…",
    a: "At anchor",
    w: [
      "Not under command",
      "Aground",
      "Engaged in fishing"
    ],
    why: "Rule 30(a): one ball by day (anchor light(s) by night).",
    src: "COLREGS Rule 30 · MARI003",
    vis: {"k":"shapes","stack":["ball"],"alt":"One black ball"}
  },
  {
    q: "A diamond shape shown by a tug and her tow by day indicates…",
    a: "A tow of more than 200 m, from tug's stern to the end of the tow",
    w: [
      "That the tow is a vessel in distress being helped by the tug",
      "That the tow is aground and the tug is trying to refloat her",
      "That the tug is a pilot vessel and the tow is a ship under pilotage"
    ],
    why: "Rules 24(a)(iv) and 24(e)(iii).",
    src: "COLREGS Rule 24 · MARI003",
    vis: {"k":"shapes","stack":["diamond"],"alt":"A diamond"}
  },
  {
    q: "One short blast on the whistle (vessels in sight of one another) means…",
    a: "“I am altering my course to starboard”",
    w: [
      "“I am altering my course to port”",
      "“I am operating astern propulsion”",
      "“I do not understand your intentions”"
    ],
    why: "Rule 34(a): 1 short = starboard; 2 short = port; 3 short = astern propulsion. A short blast is about 1 second.",
    src: "COLREGS Rule 34 · GPH Part 1 · MARI003"
  },
  {
    q: "Two short blasts mean…",
    a: "“I am altering my course to port”",
    w: [
      "“I am altering my course to starboard”",
      "“I am operating astern propulsion”",
      "“I intend to overtake you on your port side”"
    ],
    why: "Rule 34(a). Mnemonic: one short blast – “I turn to starboard”; two short – “to port”.",
    src: "COLREGS Rule 34 · MARI003"
  },
  {
    q: "Three short blasts mean…",
    a: "“I am operating astern propulsion”",
    w: [
      "“I am altering my course to starboard”",
      "“Man overboard”",
      "“I am in distress”"
    ],
    why: "Rule 34(a). Light signals may supplement: one, two or three flashes respectively, each about 1 second, with at least 10 seconds between signals.",
    src: "COLREGS Rule 34 · MARI003"
  },
  {
    q: "You are uncertain of another vessel's intentions and doubt she is taking sufficient action. You should sound…",
    a: "At least five short and rapid blasts",
    w: [
      "One prolonged blast",
      "Two prolonged and two short blasts",
      "Three short blasts"
    ],
    why: "Rule 34(d): the doubt/danger signal, optionally supplemented by at least five short rapid flashes.",
    src: "COLREGS Rule 34 · MARI003"
  },
  {
    q: "In a narrow channel, the signal for “I intend to overtake you on your starboard side” is…",
    a: "Two prolonged blasts followed by one short blast",
    w: [
      "Two short blasts followed by one prolonged",
      "One prolonged blast followed by two short blasts",
      "Two prolonged blasts followed by two short blasts"
    ],
    why: "Rule 34(c)(i): 2 prolonged + 1 short = starboard side; 2 prolonged + 2 short = port side. The vessel to be overtaken agrees with prolonged–short–prolonged–short (Morse “C”) – or disagrees with the five-blast doubt signal.",
    src: "COLREGS Rule 34 · MARI003"
  },
  {
    q: "In a narrow channel, the signal for “I intend to overtake you on your port side” is…",
    a: "Two prolonged blasts followed by two short blasts",
    w: [
      "Two prolonged blasts followed by one short blast",
      "Two short blasts followed by two prolonged",
      "Three prolonged blasts"
    ],
    why: "Rule 34(c)(i).",
    src: "COLREGS Rule 34 · MARI003"
  },
  {
    q: "The vessel being overtaken in a channel agrees to the overtaking signal by sounding…",
    a: "Prolonged, short, prolonged, short (Morse “C”)",
    w: [
      "Five short blasts",
      "Two short blasts",
      "One prolonged blast and two short blasts"
    ],
    why: "Rule 34(c)(ii). If she does not agree she sounds the doubt signal of at least five short and rapid blasts.",
    src: "COLREGS Rule 34 · MARI003"
  },
  {
    q: "How long is a “prolonged” blast?",
    a: "Four to six seconds",
    w: [
      "About one second",
      "Eight to ten seconds",
      "Two seconds"
    ],
    why: "Rule 32: a short blast is about one second; a prolonged blast is four to six seconds.",
    src: "COLREGS Rule 32 · GPH Part 1 · MARI003"
  },
  {
    q: "In or near restricted visibility, a power-driven vessel MAKING WAY sounds…",
    a: "One prolonged blast at intervals of not more than 2 minutes",
    w: [
      "Two prolonged blasts every 2 minutes",
      "One prolonged and two short blasts every minute",
      "Five short blasts every 30 seconds"
    ],
    why: "Rule 35(a). Underway but stopped and making no way: two prolonged blasts about 2 seconds apart, every 2 minutes.",
    src: "COLREGS Rule 35 · MARI003"
  },
  {
    q: "A power-driven vessel underway but stopped and making no way in fog sounds…",
    a: "Two prolonged blasts about 2 seconds apart, at least every 2 minutes",
    w: [
      "One prolonged blast, repeated at intervals of not more than 2 minutes",
      "One prolonged and two short blasts at intervals of not more than 2 minutes",
      "A continuous sounding of the horn until she is under way again"
    ],
    why: "Rule 35(b).",
    src: "COLREGS Rule 35 · MARI003"
  },
  {
    q: "In fog, a vessel not under command, RAM, constrained by draught, sailing, fishing or towing sounds, at intervals of not more than 2 minutes…",
    a: "One prolonged blast followed by two short blasts",
    w: [
      "Two prolonged blasts",
      "One prolonged blast followed by three short blasts",
      "Three short blasts"
    ],
    why: "Rule 35(c). A rescue vessel towing uses this signal: prolonged, then two short.",
    src: "COLREGS Rule 35 · GPH Part 1 · MARI003"
  },
  {
    q: "In fog, the last vessel in a tow (if manned) sounds…",
    a: "One prolonged and three short blasts, just after the tug's signal",
    w: [
      "One prolonged and two short blasts, just before the tug's signal",
      "Two prolonged blasts and one short",
      "Three short blasts"
    ],
    why: "Rule 35(e). Only the last vessel of the tow makes the signal.",
    src: "COLREGS Rule 35 · MARI003"
  },
  {
    q: "In fog, a vessel at anchor signals by…",
    a: "Ringing the bell rapidly for about 5 seconds every minute",
    w: [
      "One prolonged blast on the whistle every 2 minutes",
      "Three prolonged blasts on the whistle every minute",
      "A continuous sounding of the foghorn until visibility improves"
    ],
    why: "Rule 35(g). She may add one short, one prolonged and one short blast to warn an approaching vessel. Vessels under 20 m need not ring a bell but must make some other efficient sound signal at intervals of not more than 2 minutes.",
    src: "COLREGS Rule 35 · MARI003"
  },
  {
    q: "A vessel under 12 m that does not carry a whistle must provide…",
    a: "Some other means of making an efficient sound signal",
    w: [
      "A bell and a gong, as for a vessel over 100 m",
      "Nothing at all, as small vessels are exempt from sound signals",
      "A siren with a range of at least 5 nm"
    ],
    why: "Rule 33: ≥12 m must carry a whistle; ≥20 m a bell as well; ≥100 m a gong too. Under 12 m, some other efficient means is required.",
    src: "COLREGS Rule 33 · MARI003"
  },
  {
    q: "Which of these is a recognised distress signal?",
    a: "A red parachute rocket flare",
    w: [
      "A white hand flare",
      "A single short blast",
      "A green hand flare"
    ],
    why: "Rule 37/Annex IV includes red hand or parachute flares, orange smoke, a continuous fog-signal sounding, SOS, “Mayday”, rockets or shells throwing red stars, flames on the vessel, N over C flags, a square flag with a ball, slow raising and lowering of outstretched arms, EPIRB signals and gun/explosive signals at about 1-minute intervals. A white flare is a warning, not distress.",
    src: "COLREGS Rule 37 · MARI003 · Marine SAR Guide"
  },
  {
    q: "You sight a red hand flare during a training exercise. You should…",
    a: "Treat it as genuine distress unless a supervising authority clearly confirms it is training",
    w: [
      "Ignore it, as during a training exercise it is almost certainly a drill flare",
      "Wait for a second flare before acting, as one could be accidental",
      "Log it and carry on, unless another flare is seen during the next hour"
    ],
    why: "A red flare is an internationally recognised distress signal. Record bearing, range, time and type, proceed at best safe speed, and notify the coordinator.",
    src: "Marine SAR Guide – Responding to pyrotechnic distress signals"
  },
  {
    q: "Orange smoke is…",
    a: "A daytime distress signal",
    w: [
      "A night-time distress signal",
      "A signal to ask for a pilot",
      "A warning that fog is approaching"
    ],
    why: "Orange smoke marks a position by day. Red flares are the main night signal.",
    src: "COLREGS Rule 37 · Passage Planning Guide"
  },
  {
    q: "Which flag signal is the international distress signal?",
    a: "Code flags N over C",
    w: [
      "Code flags C over N",
      "A solid red flag",
      "Code flag B alone"
    ],
    why: "Rule 37 / Annex IV: N (November) above C (Charlie). Code flag B (Bravo) means a vessel is taking in, discharging or carrying dangerous goods.",
    src: "COLREGS Rule 37 · MARI003"
  },
  {
    q: "Slowly and repeatedly raising and lowering outstretched arms is…",
    a: "A distress signal",
    w: [
      "An invitation to approach",
      "A request to pass port to port",
      "A signal that the vessel is aground"
    ],
    why: "Rule 37 / Annex IV. In an emergency, any signal that makes the situation clear is better than none.",
    src: "COLREGS Rule 37 · MARI003"
  },
  {
    q: "In the MRQ Vessel Crew Guide, what does flag D mean?",
    a: "Keep clear: I am manoeuvring with difficulty",
    w: [
      "Pass at slow speed and make no wash when passing",
      "I am carrying dangerous goods and need others to keep clear",
      "I require a pilot, and ask for one to be sent to me"
    ],
    why: "Per the MRQ Vessel Crew Guide v0.1: flag D = keep clear, I am manoeuvring with difficulty; flags R over Y = pass at slow speed, no wash.",
    src: "MRQ Vessel Crew Guide v0.1 – Towing"
  },
  {
    q: "While refuelling, a vessel flies code flag “B”. What does it mean?",
    a: "She is taking on or carrying dangerous goods: keep clear",
    w: [
      "She is in distress and needs immediate assistance",
      "A diver is down in the water close to her",
      "She is at anchor and her crew are ashore for the night"
    ],
    why: "The B flag is flown while refuelling. It is a red swallow-tailed flag in the International Code.",
    src: "GPH Part 2 – Refuelling operations"
  }
]);

