# Maritime Daily Quiz

A 10-question daily refresher for **GPH**, **Coxswain 1** and **Coxswain 2** knowledge, built as an installable, offline-capable PWA. Open it on a phone or computer, answer the day's ten, keep the streak.

- **Same ten questions on every device** each calendar day (picked deterministically from the date – no account or server needed).
- **Covers the whole syllabus** by rotating through 14 topics: COLREGS situations and rules, lights/shapes/signals, buoyage, navigation, passage planning, tides, weather, seamanship, fire, WHS/emergencies, engines/electrics, SAR/radio/beacons and towing.
- **Generated scenarios** – COLREGS encounter diagrams (give-way/stand-on/head-on/overtaking, vessels with priority, lights seen at night), compass conversions, tide/depth/twelfths, fuel, SAR arithmetic, light-characteristic decoding – so the numbers change every time.
- **Spaced repetition lite** – missed questions go to a *Review* list and come up more often in *Practice*.
- Progress (streak, per-topic accuracy, calendar) is stored on the device; there is a copy/paste export to move it between devices.

## Install

Open the site once while online, then:

- **iPhone/iPad (Safari):** Share → *Add to Home Screen*.
- **Android/desktop Chrome or Edge:** the install icon in the address bar, or menu → *Install app*.

It then runs full-screen and works offline. When you are online it quietly picks up updates.

## Hosting (GitHub Pages)

Static files only, no build step. In the repo: **Settings → Pages → Deploy from a branch → `main` / root**. The site is served at `https://<user>.github.io/maritime-quiz/`.

## Project layout

```
index.html            app shell
css/style.css
js/engine.js          topics, daily selection, question helpers
js/generators.js      generated questions (encounters, compass, tides, SAR …)
js/visuals.js         inline SVG: lights, day shapes, buoys, encounter diagrams
js/app.js             UI, local progress, import/export
js/q/*.js             the written question bank (data files)
sw.js, manifest.webmanifest, icons/
tools/                validate.js, dump.js (maintenance helpers), visuals.html (drawing gallery)
```

## Adding or editing questions

Question files in `js/q/` are plain data:

```js
MQ.add("rules", [
  {
    q: "Question text?",
    a: "The correct answer",
    w: ["Wrong 1", "Wrong 2", "Wrong 3"],   // exactly three
    why: "Short explanation shown after answering.",
    src: "Where it came from",
    vis: { "k": "buoy", "t": "N" }           // optional picture – see js/visuals.js
  }
]);
```

Option order is shuffled at runtime, so always write the correct answer in `a`. Aim for answer options of similar length so the right one is not the obvious longest.

Check your work (needs Node):

```bash
node tools/validate.js      # structure, duplicate options, generators, 400 days of daily sets, COLREGS geometry
node tools/dump.js --tell   # lists questions whose correct option is much longer than the wrong ones
```

Topics that can be used: `rules lights marks nav plan tides weather seamanship fire whs engines sar towing` (and `encounter`, which is generator-only).

> Changing the bank changes which questions a given future date produces. That is harmless, but two devices on different versions may briefly show different "daily" sets.

## Run locally

```bash
python3 -m http.server 8765      # then open http://localhost:8765
```

Append `?date=2026-12-25` to preview any day's quiz.

## Source material and caveats

Questions are drawn from the Phase Zero learner guides (MARG012, MARN016, MARB053, MARF028, MARH013, MARB027/MARC038, NATRAC002, Marine SAR), the MARI003 COLREGS deck and the MRQ Vessel Crew Guide v0.1. This is a memory aid only: always defer to the current regulations, your vessel's SMS and your organisation's SOPs. See `CONTENT-NOTES.md` for places where the source guides disagree with each other or with the COLREGS.
