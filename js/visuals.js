/* Maritime Quiz – inline SVG drawings: lights, day shapes, buoys, encounter diagrams */
(function () {
  'use strict';
  let uid = 0;
  const COL = { white: '#fff6d6', red: '#ff3b30', green: '#27e06a', yellow: '#ffd60a', blue: '#3b82ff' };

  function lightsSVG(spec) {
    let items = spec.items;
    if (!items) {
      const n = spec.stack.length, gap = 27, y0 = 70 - (n - 1) * gap / 2;
      items = spec.stack.map(function (c, i) { return { c: c, x: 100, y: y0 + i * gap }; });
    }
    const id = 'gl' + (++uid);
    let s = '<svg viewBox="0 0 200 140" role="img" aria-label="' + esc(spec.alt || 'Lights seen at night') + '">' +
      '<defs><radialGradient id="' + id + 'bg" cx="50%" cy="40%" r="80%"><stop offset="0" stop-color="#0e1a2e"/><stop offset="1" stop-color="#03070f"/></radialGradient>' +
      '<filter id="' + id + '" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="5"/></filter></defs>' +
      '<rect width="200" height="140" rx="10" fill="url(#' + id + 'bg)"/>' +
      '<path d="M0 128 Q 25 122 50 128 T 100 128 T 150 128 T 200 128 V140 H0Z" fill="#071225"/>';
    items.forEach(function (it) {
      const c = COL[it.c] || it.c;
      s += '<circle cx="' + it.x + '" cy="' + it.y + '" r="13" fill="' + c + '" opacity=".55" filter="url(#' + id + ')"/>' +
           '<circle cx="' + it.x + '" cy="' + it.y + '" r="6.5" fill="' + c + '"/>' +
           '<circle cx="' + (it.x - 1.8) + '" cy="' + (it.y - 1.8) + '" r="2" fill="#fff" opacity=".7"/>';
    });
    return s + '</svg>';
  }

  function shapeEl(t, cx, cy) {
    const f = '#10151c';
    switch (t) {
      case 'ball': return '<circle cx="' + cx + '" cy="' + cy + '" r="12" fill="' + f + '"/>';
      case 'diamond': return '<polygon points="' + cx + ',' + (cy - 15) + ' ' + (cx + 13) + ',' + cy + ' ' + cx + ',' + (cy + 15) + ' ' + (cx - 13) + ',' + cy + '" fill="' + f + '"/>';
      case 'cone_up': return '<polygon points="' + cx + ',' + (cy - 14) + ' ' + (cx + 13) + ',' + (cy + 12) + ' ' + (cx - 13) + ',' + (cy + 12) + '" fill="' + f + '"/>';
      case 'cone_down': return '<polygon points="' + cx + ',' + (cy + 14) + ' ' + (cx + 13) + ',' + (cy - 12) + ' ' + (cx - 13) + ',' + (cy - 12) + '" fill="' + f + '"/>';
      case 'cylinder': return '<rect x="' + (cx - 10) + '" y="' + (cy - 14) + '" width="20" height="28" rx="2" fill="' + f + '"/>';
      case 'cross': return '<path d="M' + (cx - 12) + ' ' + (cy - 12) + 'L' + (cx + 12) + ' ' + (cy + 12) + 'M' + (cx + 12) + ' ' + (cy - 12) + 'L' + (cx - 12) + ' ' + (cy + 12) + '" stroke="' + f + '" stroke-width="5" stroke-linecap="round"/>';
    }
    return '';
  }
  function shapesSVG(spec) {
    const n = spec.stack.length, gap = 34, y0 = 82 - (n - 1) * gap / 2;
    const id = 'sk' + (++uid);
    let s = '<svg viewBox="0 0 200 160" role="img" aria-label="' + esc(spec.alt || 'Day shapes') + '">' +
      '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3ff"/><stop offset="1" stop-color="#eaf6ff"/></linearGradient></defs>' +
      '<rect width="200" height="160" rx="10" fill="url(#' + id + ')"/><rect y="140" width="200" height="20" fill="#5a9bc9"/>' +
      '<line x1="100" y1="6" x2="100" y2="150" stroke="#7a8794" stroke-width="2"/>';
    spec.stack.forEach(function (t, i) { s += shapeEl(t, 100, y0 + i * gap); });
    return s + '</svg>';
  }

  /* ---------- buoys ---------- */
  const BLACK = '#17191c', YEL = '#ffcf1f', RED = '#e0302b', GRN = '#1fa857', WHT = '#f4f4f4', BLU = '#2457c5';
  function buoySpec(t) {
    const map = {
      port:      { body: 'can',    bands: [RED], top: ['can_red'] },
      stbd:      { body: 'cone',   bands: [GRN], top: ['cone_up_green'] },
      N:         { body: 'pillar', bands: [BLACK, YEL], top: ['cone_up', 'cone_up'] },
      S:         { body: 'pillar', bands: [YEL, BLACK], top: ['cone_down', 'cone_down'] },
      E:         { body: 'pillar', bands: [BLACK, YEL, BLACK], top: ['cone_up', 'cone_down'] },
      W:         { body: 'pillar', bands: [YEL, BLACK, YEL], top: ['cone_down', 'cone_up'] },
      isolated:  { body: 'pillar', bands: [BLACK, RED, BLACK], top: ['ball', 'ball'] },
      safe:      { body: 'sphere', stripes: [RED, WHT], top: ['ball_red'] },
      special:   { body: 'pillar', bands: [YEL], top: ['x_yellow'] },
      wreck:     { body: 'pillar', stripes: [BLU, YEL], top: ['plus_yellow'] }
    };
    return map[t];
  }
  /* night light: sequence of [colour|null, seconds] over one cycle */
  function fl(c, on, offs) { const o = []; offs.forEach(function (x, i) { o.push([c, on]); o.push([null, x]); }); return o; }
  function quick(c, n, tail) { const o = []; for (let i = 0; i < n; i++) o.push([c, .3], [null, .5]); if (tail) o.push([null, tail]); return o; }
  function buoyLight(t) {
    const Wh = '#fff8c8', Rd = '#ff3b30', Gn = '#25e06b', Ye = '#ffd60a', Bl = '#3a8dff';
    const m = {
      port:      [[Rd, .5], [null, 3.5]],
      stbd:      [[Gn, .5], [null, 3.5]],
      N:         quick(Wh, 5),
      E:         quick(Wh, 3, 7.6),
      S:         quick(Wh, 6).concat([[null, .2], [Wh, 2], [null, 8]]),
      W:         quick(Wh, 9, 7.8),
      isolated:  [[Wh, .5], [null, 1], [Wh, .5], [null, 3]],
      safe:      [[Wh, 2], [null, 8]],
      special:   [[Ye, .5], [null, 4.5]],
      wreck:     [[Bl, 1], [null, .5], [Ye, 1], [null, .5]]
    };
    return m[t];
  }
  function nightPanel(seq, x0, id) {
    const total = seq.reduce(function (a, g) { return a + g[1]; }, 0);
    const OFF = '#2a3340', W = 112, sx = x0 + 10, sy = 150;
    let kt = [], vals = [], t = 0;
    seq.forEach(function (g) { kt.push((t / total).toFixed(4)); vals.push(g[0] || OFF); t += g[1]; });
    const dur = total + 's', kts = kt.join(';'), vs = vals.join(';');
    let s = '<rect x="' + x0 + '" y="0" width="130" height="220" rx="10" fill="#050b18"/>' +
      '<text x="' + (x0 + 65) + '" y="22" fill="#7fb6e6" font-size="11" text-anchor="middle">AT NIGHT</text>' +
      '<defs><filter id="' + id + 'g" x="-150%" y="-150%" width="400%" height="400%"><feGaussianBlur stdDeviation="7"/></filter></defs>' +
      '<circle cx="' + (x0 + 65) + '" cy="78" r="26" fill="' + OFF + '" filter="url(#' + id + 'g)" opacity=".9"><animate attributeName="fill" calcMode="discrete" dur="' + dur + '" repeatCount="indefinite" keyTimes="' + kts + '" values="' + vs + '"/></circle>' +
      '<circle cx="' + (x0 + 65) + '" cy="78" r="12" fill="' + OFF + '" stroke="#555" stroke-width="1"><animate attributeName="fill" calcMode="discrete" dur="' + dur + '" repeatCount="indefinite" keyTimes="' + kts + '" values="' + vs + '"/></circle>' +
      '<text x="' + (x0 + 65) + '" y="138" fill="#9fb4c8" font-size="10" text-anchor="middle">one cycle = ' + (Math.round(total * 10) / 10) + ' s</text>';
    t = 0;
    seq.forEach(function (g) {
      const w = Math.max(2, g[1] / total * W);
      s += '<rect x="' + (sx + t / total * W).toFixed(1) + '" y="' + sy + '" width="' + w.toFixed(1) + '" height="22" fill="' + (g[0] || OFF) + '"/>';
      t += g[1];
    });
    s += '<rect x="' + sx + '" y="' + sy + '" width="' + W + '" height="22" fill="none" stroke="#5b6b7c"/>' +
      '<line x1="' + sx + '" y1="' + (sy - 5) + '" x2="' + sx + '" y2="' + (sy + 27) + '" stroke="#fff" stroke-width="1.5"><animate attributeName="x1" dur="' + dur + '" repeatCount="indefinite" values="' + sx + ';' + (sx + W) + '"/><animate attributeName="x2" dur="' + dur + '" repeatCount="indefinite" values="' + sx + ';' + (sx + W) + '"/></line>' +
      '<text x="' + (x0 + 65) + '" y="196" fill="#7a8ea3" font-size="9" text-anchor="middle">light (coloured) / dark (grey)</text>';
    return s;
  }
  function buoySVG(spec) {
    const b = buoySpec(spec.t);
    if (spec.view === 'night') {
      return '<svg viewBox="0 0 130 220" role="img" aria-label="' + esc(spec.alt || 'A navigation light at night') + '">' + nightPanel(buoyLight(spec.t), 0, 'nb' + (++uid)) + '</svg>';
    }
    const night = null;
    const W = 160;
    const id = 'bu' + (++uid);
    const cx = 80, water = 168;
    let bodyPath, top, bot;
    if (b.body === 'can')      { top = 100; bot = water; bodyPath = '<rect x="52" y="' + top + '" width="56" height="' + (bot - top) + '" rx="3"/>'; }
    else if (b.body === 'cone'){ top = 96;  bot = water; bodyPath = '<polygon points="80,' + top + ' 112,' + bot + ' 48,' + bot + '"/>'; }
    else if (b.body === 'sphere'){ top = 100; bot = water; bodyPath = '<circle cx="80" cy="' + (top + 34) + '" r="34"/>'; bot = top + 68; }
    else                       { top = 82;  bot = water; bodyPath = '<path d="M68 ' + top + ' H92 L98 ' + (bot - 14) + ' L110 ' + bot + ' H50 L62 ' + (bot - 14) + 'Z"/>'; }
    let s = '<svg viewBox="0 0 ' + W + ' 220" role="img" aria-label="' + esc(spec.alt || 'Buoy') + '">' +
      '<defs><clipPath id="' + id + '">' + bodyPath + '</clipPath><linearGradient id="' + id + 'k" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe9ff"/><stop offset="1" stop-color="#f1f8ff"/></linearGradient></defs>' +
      '<rect width="160" height="220" rx="10" fill="url(#' + id + 'k)"/>';
    /* body with bands/stripes */
    s += '<g clip-path="url(#' + id + ')">';
    const h = bot - top;
    if (b.stripes) {
      const n = 6, w = 80 / n;
      for (let i = 0; i < n; i++) s += '<rect x="' + (40 + i * w) + '" y="' + (top - 2) + '" width="' + (w + .5) + '" height="' + (h + 4) + '" fill="' + b.stripes[i % 2] + '"/>';
    } else {
      const n = b.bands.length;
      for (let i = 0; i < n; i++) s += '<rect x="40" y="' + (top + i * h / n - .5) + '" width="80" height="' + (h / n + 1) + '" fill="' + b.bands[i] + '"/>';
    }
    s += '</g><g fill="none" stroke="#222" stroke-width="1.5" opacity=".6">' + bodyPath.replace('<', '<').replace(/^<(\w+)/, '<$1') + '</g>';
    /* topmarks */
    let y = top - 6;
    s += '<line x1="80" y1="' + (top + 2) + '" x2="80" y2="' + (top - 6 - b.top.length * 24) + '" stroke="#444" stroke-width="2.5"/>';
    b.top.slice().reverse().forEach(function (m) {   // spec lists topmarks top-to-bottom; draw from the bottom up
      const cy = y - 11; y -= 24;
      if (m === 'cone_up') s += '<polygon points="80,' + (cy - 11) + ' 93,' + (cy + 10) + ' 67,' + (cy + 10) + '" fill="' + BLACK + '"/>';
      if (m === 'cone_down') s += '<polygon points="80,' + (cy + 11) + ' 93,' + (cy - 10) + ' 67,' + (cy - 10) + '" fill="' + BLACK + '"/>';
      if (m === 'ball') s += '<circle cx="80" cy="' + cy + '" r="10" fill="' + BLACK + '"/>';
      if (m === 'ball_red') s += '<circle cx="80" cy="' + cy + '" r="10" fill="' + RED + '"/>';
      if (m === 'can_red') s += '<rect x="70" y="' + (cy - 10) + '" width="20" height="20" fill="' + RED + '"/>';
      if (m === 'cone_up_green') s += '<polygon points="80,' + (cy - 11) + ' 93,' + (cy + 10) + ' 67,' + (cy + 10) + '" fill="' + GRN + '"/>';
      if (m === 'x_yellow') s += '<path d="M69 ' + (cy - 11) + 'L91 ' + (cy + 11) + 'M91 ' + (cy - 11) + 'L69 ' + (cy + 11) + '" stroke="' + YEL + '" stroke-width="6" stroke-linecap="round"/>';
      if (m === 'plus_yellow') s += '<path d="M80 ' + (cy - 12) + 'V' + (cy + 12) + 'M68 ' + cy + 'H92" stroke="' + YEL + '" stroke-width="6" stroke-linecap="round"/>';
    });
    s += '<path d="M0 ' + water + ' Q 20 ' + (water - 6) + ' 40 ' + water + ' T 80 ' + water + ' T 120 ' + water + ' T 160 ' + water + ' V220 H0Z" fill="#3b84b8"/>' +
      '<path d="M0 ' + (water + 16) + ' Q 20 ' + (water + 10) + ' 40 ' + (water + 16) + ' T 80 ' + (water + 16) + ' T 120 ' + (water + 16) + ' T 160 ' + (water + 16) + ' V220 H0Z" fill="#2c6d99"/>';
    if (night) s += nightPanel(night, 165, id);
    return s + '</svg>';
  }

  /* ---------- encounter diagram (top-down, your heading is up) ---------- */
  function shipPath(sail) {
    let p = '<path d="M0,-17 L7,-5 L7,13 L-7,13 L-7,-5 Z" />';
    if (sail) p += '<path d="M0,-12 L0,8 L-13,8 Z" fill="#fff" stroke="#ccc" stroke-width=".8"/>';
    return p;
  }
  function encounterSVG(spec) {
    const cx = 160, cy = 165, dist = spec.dist || 105;
    const b = spec.b * Math.PI / 180;
    const ox = cx + dist * Math.sin(b), oy = cy - dist * Math.cos(b);
    const hd = spec.h, hr = hd * Math.PI / 180;
    const label = spec.label || 'OTHER';
    const moving = spec.moving !== false;
    let s = '<svg viewBox="0 0 320 330" role="img" aria-label="' + esc(spec.alt || 'Top-down view of two vessels') + '">' +
      '<defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="#fff"/></marker></defs>' +
      '<rect width="320" height="330" rx="12" fill="#0b2a46"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="60" fill="none" stroke="#1b4a73" stroke-dasharray="3 5"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="125" fill="none" stroke="#1b4a73" stroke-dasharray="3 5"/>' +
      '<line x1="' + cx + '" y1="10" x2="' + cx + '" y2="320" stroke="#1b4a73"/><line x1="10" y1="' + cy + '" x2="310" y2="' + cy + '" stroke="#1b4a73"/>' +
      '<text x="' + (cx + 6) + '" y="24" fill="#7fb6e6" font-size="11">AHEAD</text>' +
      '<text x="14" y="' + (cy - 6) + '" fill="#7fb6e6" font-size="11">PORT</text><text x="270" y="' + (cy - 6) + '" fill="#7fb6e6" font-size="11">STBD</text>' +
      '<line x1="' + cx + '" y1="' + cy + '" x2="' + ox + '" y2="' + oy + '" stroke="#ffd60a" stroke-width="1.5" stroke-dasharray="5 4"/>';
    /* own vessel */
    s += '<g transform="translate(' + cx + ',' + cy + ') scale(1.35)" fill="#3da5ff" stroke="#fff" stroke-width="1">' + shipPath(false) + '</g>' +
      '<line x1="' + cx + '" y1="' + (cy - 26) + '" x2="' + cx + '" y2="' + (cy - 58) + '" stroke="#fff" stroke-width="2" marker-end="url(#ar)"/>' +
      '<text x="' + (cx + 14) + '" y="' + (cy + 22) + '" fill="#fff" font-size="12" font-weight="700">YOU</text>';
    if (spec.tow) {
      s += '<line x1="' + cx + '" y1="' + (cy + 17) + '" x2="' + cx + '" y2="' + (cy + 60) + '" stroke="#fff" stroke-width="1.5"/>' +
        '<g transform="translate(' + cx + ',' + (cy + 78) + ') scale(1)" fill="#8fa3b5" stroke="#fff" stroke-width="1">' + shipPath(false) + '</g>' +
        '<text x="' + (cx + 14) + '" y="' + (cy + 84) + '" fill="#cfe3f5" font-size="10">TOW</text>';
    }
    /* other vessel */
    s += '<g transform="translate(' + ox + ',' + oy + ') rotate(' + hd + ') scale(1.35)" fill="#ff9f43" stroke="#fff" stroke-width="1">' + shipPath(spec.sail) + '</g>';
    if (moving) {
      const ax = ox + 40 * Math.sin(hr), ay = oy - 40 * Math.cos(hr);
      const sx = ox + 24 * Math.sin(hr), sy = oy - 24 * Math.cos(hr);
      s += '<line x1="' + sx + '" y1="' + sy + '" x2="' + ax + '" y2="' + ay + '" stroke="#fff" stroke-width="2" marker-end="url(#ar)"/>';
    }
    const lx = Math.max(50, Math.min(270, ox)), ly = (oy < cy && oy - 30 > 40) ? oy - 30 : oy + 42;
    s += '<text x="' + lx + '" y="' + Math.max(16, Math.min(320, ly)) + '" fill="#ffd9a8" font-size="12" font-weight="700" text-anchor="middle">' + esc(label) + '</text>';
    return s + '</svg>';
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function render(vis) {
    if (!vis) return '';
    switch (vis.k) {
      case 'lights': return lightsSVG(vis);
      case 'shapes': return shapesSVG(vis);
      case 'buoy': return buoySVG(vis);
      case 'enc': return encounterSVG(vis);
    }
    return '';
  }
  window.MQV = { render: render, esc: esc };
})();
