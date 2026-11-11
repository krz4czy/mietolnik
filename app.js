(() => {
  'use strict';

  const STORE = 'puddy-v1';
  const ACCENTS = ['#ffb25a', '#ff5d6a', '#3ddc97', '#5cc8ff', '#c084fc'];
  const CATS = ['Wszystkie', 'Ulubione', 'Światło', 'Miękkie', 'Maszyny', 'Dźwięk', 'Pył', 'Ślad'];
  const TOYS = [
    { id: 'woda', name: 'Woda', cat: 'Światło', hint: 'Stukaj i ciągnij — fale nachodzą na siebie', snd: 'drop' },
    { id: 'glut', name: 'Glut', cat: 'Miękkie', hint: 'Rozciągaj palcem i puść — wraca', snd: 'pluck' },
    { id: 'popit', name: 'Pop-it', cat: 'Maszyny', hint: 'Wciskaj bąbelki, potem zeruj', snd: 'glass' },
    { id: 'gruz', name: 'Gruz', cat: 'Maszyny', hint: 'Rozwalaj klocki — same wracają', snd: 'metal' },
    { id: 'tablica', name: 'Tablica', cat: 'Dźwięk', hint: 'Kliker, przełączniki i klawisze', snd: 'click' },
    { id: 'piasek', name: 'Piasek', cat: 'Miękkie', hint: 'Ryj palcem, piasek usypuje wały', snd: 'scratch' },
    { id: 'struny', name: 'Struny', cat: 'Dźwięk', hint: 'Szarpnij w poprzek', snd: 'pluck' },
    { id: 'wir', name: 'Wir', cat: 'Maszyny', hint: 'Zakręć — kręci się, aż zwolni', snd: 'click' },
    { id: 'opilki', name: 'Opiłki', cat: 'Pył', hint: 'Zbieraj palcem jak magnesem', snd: 'tick' },
    { id: 'farba', name: 'Farba', cat: 'Ślad', hint: 'Maluj. Gumka zdejmuje ślad', snd: 'scratch' },
    { id: 'suwak', name: 'Suwak', cat: 'Maszyny', hint: 'Ciągnij zamek w górę i w dół', snd: 'zip' },
    { id: 'folia', name: 'Folia', cat: 'Maszyny', hint: 'Przebijaj bąbelki', snd: 'glass' },
    { id: 'kulki', name: 'Kulki', cat: 'Pył', hint: 'Popychaj i rzucaj', snd: 'drop' },
    { id: 'trybiki', name: 'Trybiki', cat: 'Maszyny', hint: 'Obróć koło — reszta jedzie za nim', snd: 'metal' },
    { id: 'domino', name: 'Domino', cat: 'Maszyny', hint: 'Ułóż rząd i przewróć', snd: 'click' },
    { id: 'lampa', name: 'Lampa', cat: 'Światło', hint: 'Przyciągnij bąble lawy', snd: 'bell' },
    { id: 'snieg', name: 'Śnieg', cat: 'Pył', hint: 'Potrząśnij kulą', snd: 'snow' },
    { id: 'neon', name: 'Neon', cat: 'Ślad', hint: 'Rysuj światłem — ślad gaśnie', snd: 'chime' },
    { id: 'kolyska', name: 'Kołyska', cat: 'Maszyny', hint: 'Odciągnij kulę i puść', snd: 'metal' },
    { id: 'magnesy', name: 'Magnesy', cat: 'Pył', hint: 'Przeciągaj bieguny', snd: 'click' },
    { id: 'kalejdoskop', name: 'Kalejdoskop', cat: 'Ślad', hint: 'Rysuj — wzór się odbija', snd: 'chime' },
    { id: 'deszcz', name: 'Deszcz', cat: 'Światło', hint: 'Zetrzyj krople z szyby', snd: 'drop' },
    { id: 'sprezyna', name: 'Sprężyna', cat: 'Miękkie', hint: 'Złap dół i rozciągnij', snd: 'pluck' },
    { id: 'galaretka', name: 'Galaretka', cat: 'Miękkie', hint: 'Naciśnij siatkę', snd: 'pluck' },
    { id: 'orbity', name: 'Orbity', cat: 'Pył', hint: 'Rzuć planetę wokół słońca', snd: 'bell' },
    { id: 'wstega', name: 'Wstęga', cat: 'Ślad', hint: 'Prowadź jedwabny ogon', snd: 'zip' },
    { id: 'rtec', name: 'Rtęć', cat: 'Miękkie', hint: 'Zlep krople w jedną', snd: 'drop' },
    { id: 'iskry', name: 'Iskry', cat: 'Światło', hint: 'Przytrzymaj — sypią się skry', snd: 'scratch' },
    { id: 'zamek', name: 'Zamek', cat: 'Maszyny', hint: 'Ustaw szyfr, pałąk się otworzy', snd: 'click' },
    { id: 'ksylofon', name: 'Ksylofon', cat: 'Dźwięk', hint: 'Stukaj w sztabki', snd: 'chime' },
    { id: 'klepsydra', name: 'Klepsydra', cat: 'Maszyny', hint: 'Odwróć — piasek leci na dół', snd: 'snow' },
    { id: 'plomien', name: 'Płomień', cat: 'Światło', hint: 'Odchyl ogień', snd: 'scratch' },
    { id: 'siatka', name: 'Siatka', cat: 'Miękkie', hint: 'Pociągnij tkaninę', snd: 'pluck' },
    { id: 'koraliki', name: 'Koraliki', cat: 'Maszyny', hint: 'Przesuwaj koraliki po drutach', snd: 'click' },
    { id: 'meduza', name: 'Meduza', cat: 'Światło', hint: 'Prowadź dzwon', snd: 'drop' },
    { id: 'kostka', name: 'Kostka', cat: 'Maszyny', hint: 'Obróć sześcian', snd: 'click' },
    { id: 'plazma', name: 'Plazma', cat: 'Światło', hint: 'Przyciągnij wyładowania', snd: 'chime' },
    { id: 'balon', name: 'Balon', cat: 'Miękkie', hint: 'Ściśnij i przesuń', snd: 'pluck' },
    { id: 'plyta', name: 'Płyta', cat: 'Dźwięk', hint: 'Porysuj winyl', snd: 'scratch' },
    { id: 'spiro', name: 'Spiro', cat: 'Ślad', hint: 'Kręć — pióro rysuje pętle', snd: 'chime' },
    { id: 'kompas', name: 'Kompas', cat: 'Maszyny', hint: 'Wskaż kierunek, igła dogania', snd: 'click' },
    { id: 'konfetti', name: 'Konfetti', cat: 'Pył', hint: 'Stuknij, żeby rozerwać', snd: 'glass' },
    { id: 'hustawka', name: 'Huśtawka', cat: 'Maszyny', hint: 'Popchnij siedzisko', snd: 'pluck' },
    { id: 'babelki', name: 'Bąbelki', cat: 'Światło', hint: 'Zamieszaj w szklance', snd: 'drop' },
    { id: 'drut', name: 'Drut', cat: 'Miękkie', hint: 'Wygnij sprężysty drut', snd: 'pluck' }
  ];

  const $ = (id) => document.getElementById(id);
  const app = $('app');
  const home = $('home');
  const play = $('play');
  const world = $('world');
  const tools = $('tools');
  const grid = $('grid');
  const catsEl = $('cats');
  const recentEl = $('recent');
  const q = $('q');
  const sheet = $('sheet');
  const reduceQ = window.matchMedia('(prefers-reduced-motion: reduce)');

  const def = {
    sound: true, volume: 0.8, haptics: false, quality: 'high',
    motion: 'system', theme: 'dark', accent: ACCENTS[0],
    sensors: false, sensorsGranted: false, mic: true,
    favs: [], recent: [], last: ''
  };
  let settings = load();
  let activeCat = 'Wszystkie';
  let favOnly = false;
  let current = null;
  let currentId = '';
  let raf = 0;
  let playing = false;
  let audioCtx = null;
  let master = null;
  const buffers = {};
  const loading = {};

  function load() {
    try {
      const p = JSON.parse(localStorage.getItem(STORE) || 'null');
      if (!p) return Object.assign({}, def, { favs: [], recent: [] });
      return {
        sound: p.sound !== false,
        volume: typeof p.volume === 'number' ? Math.min(1, Math.max(0, p.volume)) : 0.8,
        haptics: p.haptics === true,
        quality: p.quality === 'low' ? 'low' : 'high',
        motion: p.motion === 'less' || p.motion === 'full' ? p.motion : 'system',
        theme: p.theme === 'light' ? 'light' : 'dark',
        accent: ACCENTS.indexOf(p.accent) >= 0 ? p.accent : ACCENTS[0],
        sensors: p.sensors === true,
        sensorsGranted: p.sensorsGranted === true,
        mic: p.mic !== false,
        favs: Array.isArray(p.favs) ? p.favs.filter((id) => TOYS.some((t) => t.id === id)) : [],
        recent: Array.isArray(p.recent) ? p.recent.filter((id) => TOYS.some((t) => t.id === id)).slice(0, 8) : [],
        last: typeof p.last === 'string' ? p.last : ''
      };
    } catch (err) {
      return Object.assign({}, def, { favs: [], recent: [] });
    }
  }
  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(settings)); } catch (err) { /* prywatny */ }
  }
  function motionScale() {
    if (settings.motion === 'less') return 0.35;
    if (settings.motion === 'full') return 1;
    return reduceQ.matches ? 0.35 : 1;
  }
  function hi() { return settings.quality !== 'low' && motionScale() > 0.5; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function rand(a, b) { return a + Math.random() * (b - a); }
  function lerp(a, b, t) { return a + (b - a) * t; }

  function hexRgb(h) {
    const n = parseInt(h.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function mix(a, b, t) {
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  }
  function rgba(c, a) {
    return 'rgba(' + (c[0] | 0) + ',' + (c[1] | 0) + ',' + (c[2] | 0) + ',' + a + ')';
  }
  function shade(hex, t) {
    const c = hexRgb(hex);
    const to = t >= 0 ? [255, 250, 244] : [18, 10, 16];
    return rgba(mix(c, to, Math.min(1, Math.abs(t))), 1);
  }
  function theme() {
    const light = settings.theme === 'light';
    return light
      ? { bg0: '#f7f1e6', bg1: '#e6dccb', ink: '#24180f', floor: 'rgba(90,50,20,.14)', veil: 'rgba(255,255,255,.55)' }
      : { bg0: '#2a2036', bg1: '#120e18', ink: '#f7f1e8', floor: 'rgba(0,0,0,.4)', veil: 'rgba(255,255,255,.08)' };
  }
  function applyTheme() {
    document.documentElement.dataset.theme = settings.theme;
    document.documentElement.style.setProperty('--accent', settings.accent);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = settings.theme === 'light' ? '#f4efe6' : '#161018';
  }

  function fitApp() {
    const vv = window.visualViewport;
    const h = vv ? vv.height : window.innerHeight;
    app.style.height = h + 'px';
  }

  function ensureAudio() {
    if (audioCtx === false) return null;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) { audioCtx = false; return null; }
      if (!audioCtx) {
        audioCtx = new AC();
        master = audioCtx.createGain();
        master.connect(audioCtx.destination);
      }
      master.gain.value = settings.sound ? settings.volume : 0;
      if (audioCtx.state === 'suspended') {
        const pending = audioCtx.resume();
        if (pending && pending.catch) pending.catch(() => {});
      }
      return audioCtx;
    } catch (err) {
      audioCtx = false;
      return null;
    }
  }
  function playSound(name, rate) {
    if (!settings.sound || settings.volume < 0.01) return;
    if (name === 'tick') name = 'click';
    const ctx = ensureAudio();
    if (!ctx) return;
    const file = {
      click: 'click.mp3', chime: 'chime.mp3', drop: 'drop.mp3', glass: 'glass.mp3',
      pluck: 'pluck.mp3', scratch: 'scratch.mp3', zip: 'zip.mp3', switch: 'switch.mp3',
      bell: 'bell.mp3', open: 'open.mp3', metal: 'metal.mp3', snow: 'snow.mp3'
    }[name];
    if (!file) return;
    if (!loading[file]) {
      loading[file] = fetch('sounds/' + file).then((r) => r.arrayBuffer()).then((b) => ctx.decodeAudioData(b)).then((buf) => { buffers[file] = buf; return buf; });
    }
    loading[file].then((buf) => {
      if (!buf || !settings.sound) return;
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.playbackRate.value = rate || 1;
      const g = ctx.createGain();
      g.gain.value = 0.95;
      src.connect(g); g.connect(master);
      src.start();
    }).catch(() => {});
  }
  function buzz(ms) {
    world.classList.remove('pulse');
    void world.offsetWidth;
    world.classList.add('pulse');
    if (settings.haptics && navigator.vibrate) {
      try { navigator.vibrate(ms || 12); } catch (err) { /* brak */ }
    }
  }

  function roundRect(ctx, x, y, w, h, r) {
    const rr = Math.max(0, Math.min(r, w / 2, h / 2));
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }
  function backdrop(ctx, w, h) {
    const t = theme();
    const g = ctx.createLinearGradient(0, 0, w * 0.2, h);
    g.addColorStop(0, t.bg0);
    g.addColorStop(1, t.bg1);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    const light = ctx.createRadialGradient(w * 0.22, h * 0.08, 8, w * 0.3, h * 0.2, Math.max(w, h) * 0.75);
    light.addColorStop(0, t.veil);
    light.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = light;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = t.floor;
    ctx.beginPath();
    ctx.ellipse(w / 2, h * 0.94, w * 0.38, Math.max(8, h * 0.035), 0, 0, Math.PI * 2);
    ctx.fill();
  }
  function ball(ctx, x, y, r, color) {
    if (r < 0.8) return;
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,.28)';
    ctx.beginPath();
    ctx.ellipse(x, y + r * 0.92, r * 0.72, r * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
    const g = ctx.createRadialGradient(x - r * 0.36, y - r * 0.4, r * 0.05, x, y + r * 0.15, r * 1.05);
    g.addColorStop(0, '#fffef8');
    g.addColorStop(0.18, shade(color, 0.42));
    g.addColorStop(0.58, color);
    g.addColorStop(1, shade(color, -0.62));
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.72)';
    ctx.beginPath();
    ctx.ellipse(x - r * 0.28, y - r * 0.34, r * 0.2, r * 0.1, -0.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  function glossRect(ctx, x, y, w, h, r, color) {
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,.25)';
    roundRect(ctx, x + 2, y + 5, w, h, r);
    ctx.fill();
    const g = ctx.createLinearGradient(x, y, x, y + h);
    g.addColorStop(0, shade(color, 0.38));
    g.addColorStop(0.45, color);
    g.addColorStop(1, shade(color, -0.45));
    ctx.fillStyle = g;
    roundRect(ctx, x, y, w, h, r);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.35)';
    roundRect(ctx, x + w * 0.12, y + 3, w * 0.46, Math.max(3, h * 0.16), 3);
    ctx.fill();
    ctx.restore();
  }

  function fitCanvas(canvas) {
    const rect = canvas.getBoundingClientRect();
    const cap = settings.quality === 'low' ? 1 : 2;
    const dpr = Math.min(window.devicePixelRatio || 1, cap);
    const bw = Math.max(1, Math.round(Math.max(1, rect.width) * dpr));
    const bh = Math.max(1, Math.round(Math.max(1, rect.height) * dpr));
    if (canvas.width !== bw || canvas.height !== bh) {
      canvas.width = bw;
      canvas.height = bh;
    }
    const ctx = canvas.getContext('2d', { alpha: false });
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, w: Math.max(1, rect.width), h: Math.max(1, rect.height), dpr };
  }

  function bind(el, handlers) {
    const pts = new Map();
    function fromTouch(t) {
      const r = el.getBoundingClientRect();
      return { id: t.identifier, x: t.clientX - r.left, y: t.clientY - r.top, t: performance.now() };
    }
    function fromPtr(e) {
      const r = el.getBoundingClientRect();
      return { id: e.pointerId, x: e.clientX - r.left, y: e.clientY - r.top, t: performance.now() };
    }
    function down(p) {
      pts.set(p.id, p);
      ensureAudio();
      if (handlers.down) handlers.down(p, pts);
      poke();
    }
    function move(p) {
      if (!pts.has(p.id)) return;
      const prev = pts.get(p.id);
      pts.set(p.id, p);
      if (handlers.move) handlers.move(p, prev, pts);
      poke();
    }
    function up(p) {
      if (!pts.has(p.id)) return;
      const prev = pts.get(p.id);
      pts.delete(p.id);
      if (handlers.up) handlers.up(p, prev, pts);
      poke();
    }
    function onTS(e) {
      if (e.cancelable) e.preventDefault();
      for (const t of e.changedTouches) down(fromTouch(t));
    }
    function onTM(e) {
      if (e.cancelable) e.preventDefault();
      for (const t of e.changedTouches) move(fromTouch(t));
    }
    function onTE(e) {
      if (e.cancelable) e.preventDefault();
      for (const t of e.changedTouches) up(fromTouch(t));
    }
    function onPD(e) {
      if (e.pointerType === 'touch') return;
      if (e.button !== 0) return;
      if (e.cancelable) e.preventDefault();
      down(fromPtr(e));
    }
    function onPM(e) {
      if (e.pointerType === 'touch') return;
      move(fromPtr(e));
    }
    function onPU(e) {
      if (e.pointerType === 'touch') return;
      up(fromPtr(e));
    }
    el.addEventListener('touchstart', onTS, { passive: false });
    el.addEventListener('touchmove', onTM, { passive: false });
    el.addEventListener('touchend', onTE, { passive: false });
    el.addEventListener('touchcancel', onTE, { passive: false });
    window.addEventListener('pointermove', onPM);
    window.addEventListener('pointerup', onPU);
    el.addEventListener('pointerdown', onPD);
    return {
      pts,
      destroy() {
        el.removeEventListener('touchstart', onTS);
        el.removeEventListener('touchmove', onTM);
        el.removeEventListener('touchend', onTE);
        el.removeEventListener('touchcancel', onTE);
        window.removeEventListener('pointermove', onPM);
        window.removeEventListener('pointerup', onPU);
        el.removeEventListener('pointerdown', onPD);
        pts.clear();
      }
    };
  }

  function chip(label, fn) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip';
    b.textContent = label;
    const go = (e) => {
      if (e && e.pointerType === 'mouse' && e.button !== 0) return;
      ensureAudio();
      fn();
      poke();
    };
    b.addEventListener('pointerup', go);
    b.addEventListener('click', (e) => { if (e.detail === 0) go(e); });
    tools.appendChild(b);
    return b;
  }
  function pill() {
    const s = document.createElement('div');
    s.className = 'status';
    tools.appendChild(s);
    return s;
  }

  let view = { ctx: null, w: 2, h: 2, dpr: 1 };
  function poke() {
    if (!current || !current.frame || !playing) return;
    try { current.frame(performance.now()); } catch (err) { console.error(err); }
    wake();
  }
  function wake() {
    if (raf || !playing || !current) return;
    raf = requestAnimationFrame(tick);
  }
  function tick(ts) {
    raf = 0;
    sense.shake *= 0.88;
    if (sense.shake < 0.04) sense.shake = 0;
    if (!playing || !current || !current.frame) return;
    let cont = false;
    try { cont = current.frame(ts) !== false; } catch (err) { console.error(err); }
    if (cont && playing) raf = requestAnimationFrame(tick);
  }

  function destroyToy() {
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
    if (current && current.destroy) {
      try { current.destroy(); } catch (err) { console.error(err); }
    }
    current = null;
    world.replaceChildren();
    tools.replaceChildren();
  }

  function enter(id) {
    const meta = TOYS.find((t) => t.id === id) || TOYS[0];
    destroyToy();
    currentId = meta.id;
    $('play-name').textContent = meta.name;
    $('hint').textContent = meta.hint;
    world.setAttribute('aria-label', meta.name + '. ' + meta.hint);
    syncFavBtn();
    home.hidden = true;
    play.hidden = false;
    requestAnimationFrame(() => play.classList.add('show'));
    const canvas = document.createElement('canvas');
    world.appendChild(canvas);
    view = fitCanvas(canvas);
    const factory = factories[meta.id];
    playing = true;
    const run = () => {
      try { current = factory(canvas); }
      catch (err) {
        console.error(err);
        world.textContent = 'Ta zabawka nie wstała.';
        return;
      }
      if (meta.id === 'balon' || meta.id === 'plomien') ensureMic();
      else stopMic();
      settings.last = meta.id;
      settings.recent = [meta.id].concat(settings.recent.filter((x) => x !== meta.id)).slice(0, 8);
      save();
      poke();
      buildRecent();
    };
    if (meta.id === 'kulki' || meta.id === 'kolyska' || meta.id === 'domino') {
      loadMatter().then(run).catch((err) => { console.error(err); world.textContent = 'Ta zabawka nie wstała.'; });
    } else run();
  }
  function leave() {
    playing = false;
    stopMic();
    play.classList.remove('show');
    destroyToy();
    play.hidden = true;
    home.hidden = false;
    buildRecent();
    paintThumbs();
  }

  const factories = {};

  function mountCanvas(canvas) {
    let input = null;
    const api = {
      get view() { return view; },
      refit() { view = fitCanvas(canvas); return view; },
      bind(h) { input = bind(canvas, h); return input; },
      get pts() { return input ? input.pts : new Map(); },
      play: playSound,
      buzz,
      hi,
      calm: motionScale
    };
    const ro = new ResizeObserver(() => { view = fitCanvas(canvas); poke(); });
    ro.observe(world);
    view = fitCanvas(canvas);
    api.kill = () => { ro.disconnect(); if (input) input.destroy(); };
    return api;
  }

  /* ---------- toys ---------- */
  const sense = { gx: 0, gy: 0, shake: 0, heading: null, mic: 0 };
  let micStream = null;
  let micAnalyser = null;
  let sensorListening = false;

  function tiltVec() {
    if (!settings.sensors) return { x: 0, y: 0, shake: 0 };
    return { x: sense.gx, y: sense.gy, shake: sense.shake };
  }
  function headDeg() {
    if (!settings.sensors || sense.heading == null || Number.isNaN(sense.heading)) return null;
    return sense.heading;
  }
  function micLevel() {
    return settings.mic ? sense.mic : 0;
  }

  function onOrient(e) {
    if (!settings.sensors) return;
    sense.gx = clamp((e.gamma || 0) / 35, -1, 1);
    sense.gy = clamp(((e.beta || 45) - 45) / 40, -1, 1);
    if (typeof e.webkitCompassHeading === 'number' && !Number.isNaN(e.webkitCompassHeading)) sense.heading = e.webkitCompassHeading;
    else if (e.absolute && typeof e.alpha === 'number') sense.heading = (360 - e.alpha + 360) % 360;
    if (playing) wake();
  }
  function onMoveSensor(e) {
    if (!settings.sensors) return;
    const a = e.accelerationIncludingGravity || e.acceleration;
    if (!a) return;
    const mag = Math.hypot(a.x || 0, a.y || 0, a.z || 0);
    if (mag > 20) sense.shake = 1;
    if (playing) wake();
  }
  function listenSensors() {
    if (sensorListening) return;
    sensorListening = true;
    window.addEventListener('deviceorientation', onOrient);
    window.addEventListener('devicemotion', onMoveSensor);
  }
  function requestSensors() {
    const jobs = [];
    try {
      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        jobs.push(DeviceOrientationEvent.requestPermission());
      }
      if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
        jobs.push(DeviceMotionEvent.requestPermission());
      }
    } catch (err) { /* brak API */ }
    const finish = (ok) => {
      settings.sensorsGranted = !!ok;
      settings.sensors = !!ok;
      save();
      if (ok) listenSensors();
      syncSensorUi();
      syncSheet();
    };
    if (!jobs.length) { finish(true); return Promise.resolve(true); }
    return Promise.all(jobs).then((rs) => {
      finish(rs.every((r) => r === 'granted'));
      return settings.sensors;
    }).catch(() => { finish(false); return false; });
  }
  function stopMic() {
    if (micStream) micStream.getTracks().forEach((t) => t.stop());
    micStream = null;
    micAnalyser = null;
    sense.mic = 0;
  }
  function ensureMic() {
    if (!settings.mic || micStream) return;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;
    const ctx = ensureAudio();
    if (!ctx) return;
    navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true }, video: false }).then((stream) => {
      if (!settings.mic) { stream.getTracks().forEach((t) => t.stop()); return; }
      stopMic();
      micStream = stream;
      const src = ctx.createMediaStreamSource(stream);
      micAnalyser = ctx.createAnalyser();
      micAnalyser.fftSize = 512;
      src.connect(micAnalyser);
      const data = new Uint8Array(micAnalyser.fftSize);
      const poll = () => {
        if (!micStream || !micAnalyser) return;
        micAnalyser.getByteTimeDomainData(data);
        let s = 0;
        for (let i = 0; i < data.length; i++) {
          const v = (data[i] - 128) / 128;
          s += v * v;
        }
        sense.mic = sense.mic * 0.55 + Math.sqrt(s / data.length) * 0.45;
        if (playing) wake();
        requestAnimationFrame(poll);
      };
      poll();
    }).catch(() => { sense.mic = 0; });
  }

  function syncSensorUi() {
    const hide = settings.sensorsGranted && settings.sensors;
    const a = $('btn-sensors');
    const b = $('btn-sensors-sheet');
    if (a) a.hidden = hide;
    if (b) b.hidden = hide;
  }

  factories.woda = function (canvas) {
    const api = mountCanvas(canvas);
    let cols = 48, rows = 70, energy = 0;
    let curr = new Float32Array(cols * rows), prev = new Float32Array(cols * rows), next = new Float32Array(cols * rows);
    const off = document.createElement('canvas');
    let offCtx = null;
    const splashes = [];
    let built = { w: 0, h: 0 }, peak = 0;
    function alloc() {
      const v = api.refit();
      if (curr.length > 64 && Math.abs(v.w - built.w) < 8 && Math.abs(v.h - built.h) < 8) return;
      const nc = clamp(Math.round(v.w / 8), 32, hi() ? 72 : 40);
      const nr = clamp(Math.round(v.h / 8), 40, hi() ? 100 : 56);
      cols = nc; rows = nr;
      curr = new Float32Array(cols * rows); prev = new Float32Array(cols * rows); next = new Float32Array(cols * rows);
      built = { w: v.w, h: v.h };
    }
    alloc();
    function disturb(x, y, p) {
      const v = api.view;
      const gx = x / v.w * cols, gy = y / v.h * rows, amp = p * (api.calm() < 1 ? 0.55 : 1);
      for (let j = -3; j <= 3; j++) for (let i = -3; i <= 3; i++) {
        const cx = (gx | 0) + i, cy = (gy | 0) + j;
        if (cx < 1 || cy < 1 || cx >= cols - 1 || cy >= rows - 1) continue;
        const d = Math.hypot(i, j);
        if (d > 3.2) continue;
        curr[cy * cols + cx] += amp * (1 - d / 3.2);
      }
      energy += Math.abs(p);
      splashes.push({ x, y, a: 1 });
      if (splashes.length > 8) splashes.shift();
    }
    const input = api.bind({
      down(p) { disturb(p.x, p.y, 1.3); api.play('drop', 0.85); api.buzz(12); },
      move(p, prev) { if (Math.hypot(p.x - prev.x, p.y - prev.y) > 2) disturb(p.x, p.y, 0.65); }
    });
    function frame() {
      alloc();
      const t = tiltVec();
      const damp = api.calm() < 1 ? 0.9 : 0.96;
      for (let y = 1; y < rows - 1; y++) {
        for (let x = 1; x < cols - 1; x++) {
          const i = y * cols + x;
          let v = ((curr[i - 1] + curr[i + 1] + curr[i - cols] + curr[i + cols]) * 0.5 - prev[i]) * damp;
          v += t.x * 0.012 + t.y * 0.004;
          next[i] = clamp(v, -1.5, 1.5);
        }
      }
      const tmp = prev; prev = curr; curr = next; next = tmp;
      let e = 0;
      const v = api.view, ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      if (off.width !== cols || off.height !== rows) { off.width = cols; off.height = rows; offCtx = off.getContext('2d', { willReadFrequently: true }); }
      const o = offCtx;
      const id = o.createImageData(cols, rows);
      const d = id.data;
      for (let i = 0; i < curr.length; i++) {
        e += curr[i] * curr[i];
        const h = curr[i];
        const light = clamp(h * 1.4, -0.6, 0.9);
        const base = theme().bg0 === '#f7f1e6' ? [70, 140, 190] : [8, 70, 130];
        d[i * 4] = clamp(base[0] + h * 160 + light * 120, 0, 255);
        d[i * 4 + 1] = clamp(base[1] + h * 180 + light * 90, 0, 255);
        d[i * 4 + 2] = clamp(base[2] + 30 + h * 70 + light * 40, 0, 255);
        d[i * 4 + 3] = 255;
      }
      o.putImageData(id, 0, 0);
      ctx.drawImage(off, 0, 0, v.w, v.h);
      energy = e;
      peak = Math.max(peak, e);
      const vg = ctx.createRadialGradient(v.w / 2, v.h * 0.4, v.w * 0.1, v.w / 2, v.h * 0.5, v.w * 0.8);
      vg.addColorStop(0, 'rgba(255,255,255,.05)');
      vg.addColorStop(1, 'rgba(0,0,0,.28)');
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, v.w, v.h);
      for (let i = splashes.length - 1; i >= 0; i--) {
        const s = splashes[i];
        s.a -= 0.04;
        if (s.a <= 0) { splashes.splice(i, 1); continue; }
        ctx.strokeStyle = 'rgba(255,255,255,' + (s.a * 0.85) + ')';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(s.x, s.y, (1.15 - s.a) * 90, 0, Math.PI * 2);
        ctx.stroke();
      }
      return e > 0.001 || input.pts.size > 0 || splashes.length > 0 || Math.abs(t.x) + Math.abs(t.y) > 0.15;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { energy: Math.max(energy, peak) }; } };
  };

  factories.glut = function (canvas) {
    const api = mountCanvas(canvas);
    const N = 28;
    const pts = [];
    let R = 90, peak = 1;
    function seed() {
      const v = api.refit();
      R = Math.min(v.w, v.h) * 0.26;
      pts.length = 0;
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2;
        const x = v.w / 2 + Math.cos(a) * R, y = v.h / 2 + Math.sin(a) * R;
        pts.push({ x, y, px: x, py: y });
      }
    }
    seed();
    const input = api.bind({
      down() { api.play('pluck', 0.7); api.buzz(8); },
      move() {}
    });
    function metrics() {
      let sx = 0, sy = 0, maxR = 0;
      for (const p of pts) { sx += p.x; sy += p.y; }
      const cx = sx / N, cy = sy / N;
      for (const p of pts) maxR = Math.max(maxR, Math.hypot(p.x - cx, p.y - cy));
      return { cx, cy, stretch: maxR / (R || 1) };
    }
    function frame() {
      const v = api.view;
      const holding = input.pts.size > 0;
      const damp = holding ? 0.82 : (api.calm() < 1 ? 0.7 : 0.9);
      for (const p of pts) {
        const vx = (p.x - p.px) * damp, vy = (p.y - p.py) * damp;
        p.px = p.x; p.py = p.y; p.x += vx; p.y += vy;
      }
      if (holding) {
        const m = metrics();
        const grabs = Array.from(input.pts.values());
        if (grabs.length === 1) {
          const g = grabs[0];
          const dx = g.x - m.cx, dy = g.y - m.cy, dl = Math.hypot(dx, dy) || 1;
          for (const p of pts) {
            const along = ((p.x - m.cx) * dx + (p.y - m.cy) * dy) / (dl * dl);
            const extra = clamp(along, 0, 1) * Math.min(90, dl * 0.55);
            p.x += (dx / dl) * extra * 0.35;
            p.y += (dy / dl) * extra * 0.35;
          }
        } else {
          for (const p of pts) {
            let best = grabs[0], bd = 1e9;
            for (const g of grabs) {
              const d = (g.x - p.x) ** 2 + (g.y - p.y) ** 2;
              if (d < bd) { bd = d; best = g; }
            }
            p.x += (best.x - p.x) * 0.2;
            p.y += (best.y - p.y) * 0.2;
          }
        }
      }
      const m = metrics();
      const stiff = holding ? 0.04 : 0.12;
      for (let k = 0; k < 3; k++) {
        for (let i = 0; i < N; i++) {
          const a = (i / N) * Math.PI * 2;
          pts[i].x += (m.cx + Math.cos(a) * R - pts[i].x) * stiff;
          pts[i].y += (m.cy + Math.sin(a) * R - pts[i].y) * stiff;
        }
      }
      peak = Math.max(peak, m.stretch);
      const ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const p = pts[i], q = pts[(i + 1) % N];
        const mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2;
        if (i === 0) ctx.moveTo(mx, my); else ctx.quadraticCurveTo(p.x, p.y, mx, my);
      }
      ctx.closePath();
      const g = ctx.createRadialGradient(m.cx - R * 0.3, m.cy - R * 0.35, R * 0.1, m.cx, m.cy, R * 1.4);
      g.addColorStop(0, '#f6ffc8');
      g.addColorStop(0.4, '#8ee03a');
      g.addColorStop(1, '#5a148c');
      ctx.fillStyle = g;
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(255,255,255,.45)';
      ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,.55)';
      ctx.beginPath();
      ctx.ellipse(m.cx - R * 0.25, m.cy - R * 0.3, R * 0.22, R * 0.1, -0.5, 0, Math.PI * 2);
      ctx.fill();
      let speed = 0;
      for (const p of pts) speed = Math.max(speed, Math.hypot(p.x - p.px, p.y - p.py));
      return holding || speed > 0.2;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { stretch: peak }; } };
  };

  factories.popit = function (canvas) {
    const api = mountCanvas(canvas);
    const colors = ['#ff4d4d', '#ff8a1e', '#ffd23a', '#3ddc6e', '#3aa0ff', '#c46bff'];
    let bubbles = [], pressed = 0;
    const stat = pill();
    function layout() {
      const v = api.refit();
      const cols = clamp(Math.floor(v.w / 58), 4, 7);
      const rows = clamp(Math.floor(v.h / 58), 5, 9);
      const old = bubbles.map((b) => b.on);
      bubbles = [];
      const cw = v.w / cols, rh = v.h / rows;
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        const i = bubbles.length;
        bubbles.push({
          x: (c + 0.5) * cw, y: (r + 0.5) * rh,
          r: Math.min(cw, rh) * 0.38,
          on: !!old[i], c: colors[r % colors.length]
        });
      }
      pressed = bubbles.filter((b) => b.on).length;
      stat.textContent = pressed + ' / ' + bubbles.length;
    }
    layout();
    function hit(x, y) {
      let best = -1, bd = 1e9;
      bubbles.forEach((b, i) => {
        const d = Math.hypot(b.x - x, b.y - y);
        if (d < b.r * 1.35 && d < bd) { bd = d; best = i; }
      });
      return best;
    }
    let last = -1;
    function setOn(i, on) {
      const b = bubbles[i];
      if (!b || b.on === on) return;
      b.on = on;
      pressed += on ? 1 : -1;
      stat.textContent = pressed + ' / ' + bubbles.length;
      api.play(on ? 'glass' : 'click', 0.8 + (i % 5) * 0.06);
      api.buzz(8);
    }
    const input = api.bind({
      down(p) { const i = hit(p.x, p.y); last = i; if (i >= 0) setOn(i, !bubbles[i].on); },
      move(p) { const i = hit(p.x, p.y); if (i >= 0 && i !== last) { last = i; setOn(i, true); } },
      up() { last = -1; }
    });
    chip('Zeruj', () => { bubbles.forEach((b) => { b.on = false; }); pressed = 0; stat.textContent = '0 / ' + bubbles.length; api.play('click', 0.7); });
    function frame() {
      const v = api.view, ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      ctx.fillStyle = settings.theme === 'light' ? '#d9cbb8' : '#3a332a';
      roundRect(ctx, 10, 10, v.w - 20, v.h - 20, 28);
      ctx.fill();
      for (const b of bubbles) {
        const rr = b.on ? b.r * 0.86 : b.r;
        const y = b.on ? b.y + 4 : b.y;
        ball(ctx, b.x, y, rr, b.on ? shade(b.c, -0.25) : b.c);
      }
      return false;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { pressed }; } };
  };

  factories.gruz = function (canvas) {
    const api = mountCanvas(canvas);
    let blocks = [], parts = [], alive = 0;
    const stat = pill();
    const palette = ['#ff5d3a', '#ffb25a', '#3ddc97', '#5cc8ff', '#c084fc', '#f4efe4'];
    function layout() {
      const v = api.refit();
      const cols = clamp(Math.floor(v.w / 56), 5, 8);
      const rows = clamp(Math.floor(v.h / 48), 6, 12);
      const gap = 6, bw = (v.w - gap * (cols + 1)) / cols, bh = (v.h - gap * (rows + 1)) / rows;
      blocks = [];
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        blocks.push({ x: gap + c * (bw + gap), y: gap + r * (bh + gap), w: bw, h: bh, color: palette[(r + c) % palette.length], alive: true, back: 0 });
      }
      alive = blocks.length;
      stat.textContent = alive + ' klocków';
    }
    layout();
    function smashAt(x, y) {
      for (const b of blocks) {
        if (!b.alive) continue;
        if (x >= b.x - 6 && x <= b.x + b.w + 6 && y >= b.y - 6 && y <= b.y + b.h + 6) {
          b.alive = false; alive--; b.back = performance.now() + (api.calm() < 1 ? 600 : 1400);
          const n = hi() ? 8 : 4;
          for (let i = 0; i < n; i++) {
            const a = rand(0, 6.28);
            parts.push({ x: b.x + b.w / 2, y: b.y + b.h / 2, vx: Math.cos(a) * rand(1, 5), vy: Math.sin(a) * rand(1, 4) - 2, life: 1, color: b.color, s: rand(4, 9) });
          }
          stat.textContent = alive + ' klocków';
          api.play('metal', rand(0.8, 1.2));
          api.buzz(14);
        }
      }
    }
    const input = api.bind({
      down(p) { smashAt(p.x, p.y); },
      move(p) { smashAt(p.x, p.y); }
    });
    let shook = false;
    function frame(ts) {
      const t = tiltVec();
      if (t.shake > 0.8 && !shook) {
        shook = true;
        blocks.filter((b) => b.alive).slice(0, 4).forEach((b) => smashAt(b.x + 2, b.y + 2));
      }
      if (t.shake < 0.2) shook = false;
      const v = api.view, ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      let pending = false;
      for (const b of blocks) {
        if (!b.alive && b.back && ts > b.back) { b.alive = true; b.back = 0; alive++; stat.textContent = alive + ' klocków'; }
        if (!b.alive) { if (b.back) pending = true; continue; }
        glossRect(ctx, b.x, b.y, b.w, b.h, 8, b.color);
      }
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.vy += 0.18; p.x += p.vx; p.y += p.vy; p.life -= 0.02;
        if (p.life <= 0) { parts.splice(i, 1); continue; }
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.s, p.s);
        ctx.globalAlpha = 1;
      }
      return parts.length > 0 || pending || input.pts.size > 0;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { alive, parts: parts.length }; } };
  };

  factories.tablica = function (canvas) {
    const api = mountCanvas(canvas);
    let clicks = 0, springs = 0;
    const toggles = [false, false, false, false];
    let downKey = -1, downClick = false;
    function geom() {
      const v = api.view;
      return {
        click: { x: v.w * 0.06, y: 8, w: v.w * 0.88, h: v.h * 0.4 },
        rocksY: v.h * 0.42,
        keysY: v.h * 0.56
      };
    }
    function hitKey(x, y) {
      const v = api.view, g = geom();
      const cols = 4, rows = 2, gap = 8;
      const bw = (v.w - 24 - gap * 3) / 4, bh = (v.h - g.keysY - 16 - gap) / 2;
      for (let i = 0; i < 8; i++) {
        const c = i % cols, r = (i / cols) | 0;
        const bx = 12 + c * (bw + gap), by = g.keysY + r * (bh + gap);
        if (x >= bx && x <= bx + bw && y >= by && y <= by + bh) return i;
      }
      return -1;
    }
    function hitRock(x, y) {
      const v = api.view, g = geom();
      const w = (v.w - 36) / 4;
      for (let i = 0; i < 4; i++) {
        const bx = 12 + i * (w + 4);
        if (x >= bx && x <= bx + w && y >= g.rocksY && y <= g.rocksY + 48) return i;
      }
      return -1;
    }
    const input = api.bind({
      down(p) {
        const g = geom();
        const rock = hitRock(p.x, p.y);
        const key = hitKey(p.x, p.y);
        if (rock >= 0) {
          toggles[rock] = !toggles[rock];
          api.play('switch', toggles[rock] ? 1.15 : 0.75); api.buzz(8);
        } else if (key >= 0) { downKey = key; api.buzz(6); }
        else {
          downClick = true; clicks++; api.play('click', 0.9); api.buzz(12);
        }
      },
      move(p) {
        const key = hitKey(p.x, p.y);
        if (key >= 0 && key !== downKey) { downKey = key; api.buzz(6); }
      },
      up() {
        if (downKey >= 0) { springs++; api.play('click', 0.7 + downKey * 0.05); }
        downKey = -1; downClick = false;
      }
    });
    const keyColors = ['#ff5d3a', '#ffb25a', '#3ddc97', '#5cc8ff', '#c084fc', '#f4efe4', '#ff8a1e', '#7aa2ff'];
    function frame() {
      const v = api.view, ctx = v.ctx, g = geom();
      backdrop(ctx, v.w, v.h);
      glossRect(ctx, g.click.x, g.click.y + (downClick ? 8 : 0), g.click.w, g.click.h - (downClick ? 8 : 0), 28, settings.accent);
      ctx.fillStyle = '#2a1604';
      ctx.font = '800 ' + Math.min(72, v.w * 0.18) + 'px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(String(clicks), v.w / 2, g.click.y + g.click.h * 0.62);
      const rw = (v.w - 36) / 4;
      for (let i = 0; i < 4; i++) {
        const x = 12 + i * (rw + 4);
        ctx.fillStyle = '#2c323e';
        roundRect(ctx, x, g.rocksY, rw, 46, 23); ctx.fill();
        const kx = toggles[i] ? x + rw * 0.5 : x + 4;
        ball(ctx, kx + rw * 0.22, g.rocksY + 23, 16, toggles[i] ? settings.accent : '#c5ccd8');
      }
      const cols = 4, gap = 8, bw = (v.w - 24 - gap * 3) / 4, bh = (v.h - g.keysY - 16 - gap) / 2;
      for (let i = 0; i < 8; i++) {
        const c = i % cols, r = (i / cols) | 0;
        const y = g.keysY + r * (bh + gap) + (downKey === i ? 6 : 0);
        glossRect(ctx, 12 + c * (bw + gap), y, bw, bh - (downKey === i ? 6 : 0), 10, keyColors[i]);
      }
      return false;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { clicks, toggles: toggles.filter(Boolean).length, springs }; } };
  };
  factories.piasek = function (canvas) {
    const api = mountCanvas(canvas);
    let cols = 50, rows = 70, cell = 6, variance = 0;
    let hmap = new Float32Array(16);
    const off = document.createElement('canvas');
    let offCtx = null;
    function alloc() {
      const v = api.refit();
      const nc = clamp(Math.round(v.w / 6), 40, hi() ? 110 : 60);
      const nr = clamp(Math.round(v.h / 6), 50, hi() ? 150 : 80);
      if (nc === cols && nr === rows && hmap.length === nc * nr) return;
      cols = nc; rows = nr; cell = v.w / cols;
      hmap = new Float32Array(cols * rows); hmap.fill(0.55);
    }
    alloc();
    function carve(x, y) {
      const cx = x / cell, cy = y / cell, rad = 7;
      for (let j = -10; j <= 10; j++) for (let i = -10; i <= 10; i++) {
        const gx = (cx | 0) + i, gy = (cy | 0) + j;
        if (gx < 1 || gy < 1 || gx >= cols - 1 || gy >= rows - 1) continue;
        const d = Math.hypot(i, j), idx = gy * cols + gx;
        if (d < rad) hmap[idx] = Math.max(0, hmap[idx] - (1 - d / rad) * 0.45);
        else if (d < rad + 3) hmap[idx] = Math.min(1.4, hmap[idx] + 0.04);
      }
    }
    const input = api.bind({
      down(p) { carve(p.x, p.y); api.play('scratch', 0.8); api.buzz(8); },
      move(p, prev) { if (Math.hypot(p.x - prev.x, p.y - prev.y) > 2) carve(p.x, p.y); }
    });
    function frame() {
      const t = tiltVec();
      if (Math.abs(t.x) + Math.abs(t.y) > 0.2) {
        for (let y = 1; y < rows - 1; y++) for (let x = 1; x < cols - 1; x++) {
          const i = y * cols + x;
          const nx = t.x > 0 ? i + 1 : i - 1;
          const ny = t.y > 0 ? i + cols : i - cols;
          if (hmap[i] > hmap[nx] + 0.08) { const m = (hmap[i] - hmap[nx]) * 0.08; hmap[i] -= m; hmap[nx] += m; }
          if (hmap[i] > hmap[ny] + 0.08) { const m = (hmap[i] - hmap[ny]) * 0.08; hmap[i] -= m; hmap[ny] += m; }
        }
      }
      let mean = 0;
      for (let i = 0; i < hmap.length; i++) mean += hmap[i];
      mean /= hmap.length;
      let vsum = 0;
      const v = api.view, ctx = v.ctx;
      if (off.width !== cols || off.height !== rows) { off.width = cols; off.height = rows; offCtx = off.getContext('2d', { willReadFrequently: true }); }
      const o = offCtx;
      const id = o.createImageData(cols, rows), d = id.data;
      for (let i = 0; i < hmap.length; i++) {
        const dv = hmap[i] - mean; vsum += dv * dv;
        const light = clamp((hmap[Math.max(0, i - 1)] - hmap[Math.min(hmap.length - 1, i + 1)]) * 2, -0.5, 0.7);
        d[i * 4] = clamp(150 + hmap[i] * 70 + light * 60, 0, 255);
        d[i * 4 + 1] = clamp(96 + hmap[i] * 40 + light * 30, 0, 255);
        d[i * 4 + 2] = clamp(42 + hmap[i] * 16, 0, 255);
        d[i * 4 + 3] = 255;
      }
      variance = vsum / hmap.length;
      o.putImageData(id, 0, 0);
      backdrop(ctx, v.w, v.h);
      ctx.drawImage(off, 0, 0, v.w, v.h);
      return input.pts.size > 0 || Math.abs(t.x) + Math.abs(t.y) > 0.2;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { variance }; } };
  };

  factories.struny = function (canvas) {
    const api = mountCanvas(canvas);
    const COUNT = 7, N = 64;
    const colors = ['#ff5d6a', '#ff8a3a', '#ffd23a', '#7dff6a', '#3ec6ff', '#c792ff', '#f4efe4'];
    const strings = [];
    for (let i = 0; i < COUNT; i++) strings.push({ disp: new Float32Array(N), vel: new Float32Array(N), y: 0, glow: 0, color: colors[i] });
    function place() {
      const v = api.refit();
      strings.forEach((s, i) => { s.y = 28 + ((i + 0.5) / COUNT) * (v.h - 56); });
    }
    place();
    let energy = 0;
    function pluck(s, x, amp) {
      const v = api.view;
      const i = clamp(Math.round((x / v.w) * (N - 1)), 1, N - 2);
      s.vel[i] += amp;
      s.glow = 1;
      api.play('pluck', 0.6 + strings.indexOf(s) * 0.1);
    }
    const input = api.bind({
      down(p) {
        let best = strings[0], bd = 1e9;
        for (const s of strings) { const d = Math.abs(p.y - s.y); if (d < bd) { bd = d; best = s; } }
        pluck(best, p.x, 14); api.buzz(8);
      },
      move(p, prev) {
        for (const s of strings) {
          if ((prev.y - s.y) * (p.y - s.y) <= 0) pluck(s, p.x, (p.y - prev.y) * 0.45 || 10);
        }
      }
    });
    function frame() {
      place();
      const v = api.view, ctx = v.ctx;
      energy = 0;
      const damp = api.calm() < 1 ? 0.86 : 0.985;
      for (const s of strings) {
        for (let i = 1; i < N - 1; i++) {
          const acc = 0.2 * (s.disp[i - 1] + s.disp[i + 1] - 2 * s.disp[i]);
          s.vel[i] = s.vel[i] * damp + acc;
          s.disp[i] += s.vel[i];
          energy += s.disp[i] * s.disp[i] + s.vel[i] * s.vel[i];
        }
        s.glow *= 0.92;
      }
      backdrop(ctx, v.w, v.h);
      for (const s of strings) {
        ctx.beginPath();
        for (let i = 0; i < N; i++) {
          const x = (i / (N - 1)) * v.w, y = s.y + s.disp[i];
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 3 + s.glow * 4;
        ctx.stroke();
        if (hi() && s.glow > 0.05) {
          ctx.strokeStyle = 'rgba(255,255,255,' + s.glow * 0.5 + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      return energy > 0.4 || input.pts.size > 0;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { energy }; } };
  };

  factories.wir = function (canvas) {
    const api = mountCanvas(canvas);
    let angle = 0, vel = 0, drag = false, lastA = 0, peak = 0;
    const input = api.bind({
      down(p) {
        const v = api.view, c = { x: v.w / 2, y: v.h / 2 }, r = Math.min(v.w, v.h) * 0.34;
        if (Math.hypot(p.x - c.x, p.y - c.y) > r * 1.15) return;
        drag = true; lastA = Math.atan2(p.y - c.y, p.x - c.x);
      },
      move(p) {
        if (!drag) return;
        const v = api.view, c = { x: v.w / 2, y: v.h / 2 };
        const a = Math.atan2(p.y - c.y, p.x - c.x);
        let d = a - lastA;
        if (d > Math.PI) d -= Math.PI * 2;
        if (d < -Math.PI) d += Math.PI * 2;
        angle += d; vel = d * 0.85; lastA = a;
        if (Math.abs(d) > 0.4) api.play('click', 1.2);
      },
      up() { drag = false; api.buzz(8); }
    });
    function frame() {
      if (!drag) { angle += vel; vel *= api.calm() < 1 ? 0.9 : 0.985; if (Math.abs(vel) < 0.001) vel = 0; }
      peak = Math.max(peak, Math.abs(angle));
      const v = api.view, ctx = v.ctx, cx = v.w / 2, cy = v.h / 2, r = Math.min(v.w, v.h) * 0.34;
      backdrop(ctx, v.w, v.h);
      ctx.fillStyle = 'rgba(0,0,0,.28)';
      ctx.beginPath(); ctx.ellipse(cx, cy + r * 0.85, r * 0.9, r * 0.16, 0, 0, Math.PI * 2); ctx.fill();
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(angle);
      const cols = ['#ff5d3a', '#ffd23a', '#3ec6ff'];
      for (let i = 0; i < 3; i++) {
        ctx.rotate((Math.PI * 2) / 3);
        ball(ctx, r * 0.48, 0, r * 0.28, cols[i]);
      }
      ctx.restore();
      ball(ctx, cx, cy, r * 0.16, '#f4efe4');
      ctx.strokeStyle = 'rgba(255,255,255,.3)'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
      return drag || Math.abs(vel) > 0.001;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { angle: peak, vel }; } };
  };

  factories.opilki = function (canvas) {
    const api = mountCanvas(canvas);
    let parts = [], maxShift = 0;
    function layout() {
      const v = api.refit();
      if (parts.length && Math.abs(parts._w - v.w) < 8) return;
      const n = clamp(Math.round(v.w * v.h / (hi() ? 1600 : 2600)), 60, hi() ? 180 : 90);
      parts = [];
      parts._w = v.w;
      for (let i = 0; i < n; i++) {
        const x = rand(8, v.w - 8), y = rand(8, v.h - 8);
        parts.push({ x, y, hx: x, hy: y, vx: 0, vy: 0 });
      }
    }
    layout();
    const input = api.bind({ down() { api.buzz(6); }, move() {} });
    function frame() {
      layout();
      const v = api.view;
      for (const p of parts) {
        let fx = (p.hx - p.x) * 0.03, fy = (p.hy - p.y) * 0.03;
        for (const g of input.pts.values()) {
          const dx = g.x - p.x, dy = g.y - p.y, d = Math.hypot(dx, dy) + 16;
          const pull = clamp(220 / d, 0, 12);
          fx += dx / d * pull; fy += dy / d * pull;
        }
        p.vx = (p.vx + fx) * 0.7; p.vy = (p.vy + fy) * 0.7;
        p.x = clamp(p.x + p.vx, 2, v.w - 2); p.y = clamp(p.y + p.vy, 2, v.h - 2);
        maxShift = Math.max(maxShift, Math.hypot(p.x - p.hx, p.y - p.hy));
      }
      const ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      for (const g of input.pts.values()) {
        const grd = ctx.createRadialGradient(g.x, g.y, 4, g.x, g.y, 80);
        grd.addColorStop(0, 'rgba(120,190,255,.45)');
        grd.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grd;
        ctx.beginPath(); ctx.arc(g.x, g.y, 80, 0, Math.PI * 2); ctx.fill();
      }
      ctx.strokeStyle = '#e7f2fb'; ctx.lineWidth = 1.7;
      ctx.beginPath();
      for (const p of parts) {
        let ang = 0;
        if (input.pts.size) {
          let sx = 0, sy = 0;
          for (const g of input.pts.values()) { sx += g.x - p.x; sy += g.y - p.y; }
          ang = Math.atan2(sy, sx);
        }
        const len = 7;
        ctx.moveTo(p.x - Math.cos(ang) * len, p.y - Math.sin(ang) * len);
        ctx.lineTo(p.x + Math.cos(ang) * len, p.y + Math.sin(ang) * len);
      }
      ctx.stroke();
      return input.pts.size > 0;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { maxShift }; } };
  };

  factories.farba = function (canvas) {
    const api = mountCanvas(canvas);
    const colors = ['#ff3b30', '#ff9500', '#ffd60a', '#30d158', '#0a84ff', '#bf5af2', '#f6f3ec', '#1c1c1e'];
    let color = colors[0], erase = false, strokes = 0, ink = 0;
    const paper = settings.theme === 'light' ? '#fffaf3' : '#f3ead8';
    function clearPaper() {
      const v = api.refit();
      v.ctx.save(); v.ctx.setTransform(1, 0, 0, 1, 0, 0);
      v.ctx.fillStyle = paper; v.ctx.fillRect(0, 0, canvas.width, canvas.height); v.ctx.restore();
      strokes = 0; ink = 0;
    }
    clearPaper();
    colors.forEach((c, i) => {
      const b = chip(i === 7 ? 'Czarny' : '●', () => { color = c; erase = false; });
      b.style.background = c; b.style.color = i > 5 ? '#111' : '#fff';
      b.textContent = '';
      b.style.width = '36px'; b.style.height = '36px'; b.style.padding = '0';
      b.setAttribute('aria-label', 'Kolor ' + (i + 1));
    });
    chip('Gumka', () => { erase = true; });
    chip('Czysto', () => { clearPaper(); api.play('click', 0.6); });
    function stroke(p, prev) {
      const ctx = api.view.ctx;
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.strokeStyle = erase ? paper : color;
      ctx.lineWidth = erase ? 28 : 14;
      ctx.beginPath();
      ctx.moveTo(prev ? prev.x : p.x, prev ? prev.y : p.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      strokes++; ink++;
    }
    const input = api.bind({
      down(p) { stroke(p, null); api.play('scratch', 1.1); },
      move(p, prev) { stroke(p, prev); }
    });
    function frame() {
      if (!api.view.ctx) api.refit();
      return false;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { strokes, ink }; } };
  };

  factories.suwak = function (canvas) {
    const api = mountCanvas(canvas);
    let t = 0.35, drag = false;
    const input = api.bind({
      down(p) { drag = true; setT(p.y); },
      move(p) { if (drag) setT(p.y); },
      up() { drag = false; }
    });
    let last = -1;
    function setT(y) {
      const v = api.view;
      t = clamp((y - 30) / Math.max(40, v.h - 60), 0, 1);
      const idx = Math.round(t * 16);
      if (idx !== last) { last = idx; api.play('zip', 0.75 + (idx % 4) * 0.08); api.buzz(6); }
    }
    function frame() {
      const v = api.refit(), ctx = v.ctx, mid = v.w / 2, top = 30, bot = v.h - 30;
      const y = top + t * (bot - top);
      backdrop(ctx, v.w, v.h);
      ctx.fillStyle = '#5b2a86'; ctx.fillRect(0, 0, mid, v.h);
      ctx.fillStyle = '#123e44'; ctx.fillRect(mid, 0, v.w - mid, v.h);
      const teeth = 16;
      for (let i = 0; i < teeth; i++) {
        const ty = top + ((i + 0.5) / teeth) * (bot - top);
        const closed = ty <= y;
        const gap = closed ? 0 : 16;
        glossRect(ctx, mid - 18 - gap, ty - 5, 14, 10, 2, closed ? '#f2d48a' : '#b8965a');
        glossRect(ctx, mid + 4 + gap, ty - 5, 14, 10, 2, closed ? '#f2d48a' : '#b8965a');
      }
      glossRect(ctx, mid - 28, y - 26, 56, 52, 14, '#f6f3ec');
      ctx.fillStyle = '#1a1022';
      roundRect(ctx, mid - 14, y - 6, 28, 12, 3); ctx.fill();
      return false;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { t }; } };
  };

  factories.folia = function (canvas) {
    const api = mountCanvas(canvas);
    let bubbles = [], popped = 0;
    const stat = pill();
    function layout() {
      const v = api.refit();
      const gap = clamp(v.w / 7, 42, 64);
      const cols = Math.max(3, Math.floor((v.w - 8) / gap));
      const rows = Math.max(4, Math.floor((v.h - 8) / (gap * 0.86)));
      const prev = bubbles.map((b) => b.popped);
      bubbles = [];
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        const i = bubbles.length;
        bubbles.push({ x: (c + 0.5) * (v.w / cols), y: (r + 0.55) * (v.h / rows), r: 14 + (i % 5), popped: !!prev[i] });
      }
      popped = bubbles.filter((b) => b.popped).length;
      stat.textContent = popped + ' / ' + bubbles.length;
    }
    layout();
    function popAt(x, y) {
      let hit = false;
      for (const b of bubbles) {
        if (b.popped) continue;
        if (Math.hypot(b.x - x, b.y - y) <= b.r + 10) {
          b.popped = true; popped++; hit = true;
          api.play('glass', 0.85 + Math.random() * 0.4); api.buzz(8);
        }
      }
      if (hit) stat.textContent = popped + ' / ' + bubbles.length;
    }
    const input = api.bind({
      down(p) { popAt(p.x, p.y); },
      move(p) { popAt(p.x, p.y); }
    });
    chip('Nowa', () => { bubbles.forEach((b) => { b.popped = false; }); popped = 0; stat.textContent = '0 / ' + bubbles.length; api.play('click', 0.6); });
    function frame() {
      const v = api.view, ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      const g = ctx.createLinearGradient(0, 0, 0, v.h);
      g.addColorStop(0, '#3ec6ff'); g.addColorStop(1, '#0a4a68');
      ctx.fillStyle = g; ctx.fillRect(0, 0, v.w, v.h);
      for (const b of bubbles) {
        if (!b.popped) ball(ctx, b.x, b.y, b.r, '#d7f6ff');
        else {
          ctx.strokeStyle = 'rgba(255,255,255,.35)';
          ctx.beginPath(); ctx.ellipse(b.x, b.y, b.r * 0.8, b.r * 0.45, 0, 0, Math.PI * 2); ctx.stroke();
        }
      }
      return false;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { popped }; } };
  };
  const PHYSICS = { kulki: 1, kolyska: 1, domino: 1 };
  function loadMatter() {
    if (window.Matter) return Promise.resolve(window.Matter);
    if (!loadMatter.p) {
      loadMatter.p = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'vendor/matter.min.js';
        s.async = true;
        s.onload = () => resolve(window.Matter);
        s.onerror = () => reject(new Error('Matter.js'));
        document.head.appendChild(s);
      });
    }
    return loadMatter.p;
  }

  factories.kulki = function (canvas) {
    const api = mountCanvas(canvas);
    const M = window.Matter;
    const engine = M.Engine.create({ gravity: { x: 0, y: 1 } });
    const v0 = api.refit();
    const colors = ['#ff5d3a', '#ffb25a', '#3ddc97', '#5cc8ff', '#c084fc', '#f4efe4', '#ff8a1e'];
    const balls = [];
    const origins = [];
    const n = hi() ? 28 : 18;
    for (let i = 0; i < n; i++) {
      const r = 12 + (i % 5) * 2;
      const x = 30 + (i % 6) * (r * 2.2);
      const y = v0.h - 30 - Math.floor(i / 6) * (r * 2.2);
      const b = M.Bodies.circle(x, y, r, { restitution: 0.72, friction: 0.02, density: 0.002 });
      b.plugin = { color: colors[i % colors.length] };
      balls.push(b);
      origins.push({ x, y });
    }
    const walls = [
      M.Bodies.rectangle(v0.w / 2, v0.h + 30, v0.w + 80, 60, { isStatic: true }),
      M.Bodies.rectangle(-30, v0.h / 2, 60, v0.h * 3, { isStatic: true }),
      M.Bodies.rectangle(v0.w + 30, v0.h / 2, 60, v0.h * 3, { isStatic: true })
    ];
    M.Composite.add(engine.world, balls.concat(walls));
    let held = null, maxShift = 0;
    const input = api.bind({
      down(p) {
        let best = null, bd = 1e9;
        for (const b of balls) {
          const d = Math.hypot(b.position.x - p.x, b.position.y - p.y);
          if (d < b.circleRadius + 14 && d < bd) { best = b; bd = d; }
        }
        held = best;
        if (held) { M.Body.setVelocity(held, { x: 0, y: 0 }); api.play('drop', 0.8); api.buzz(8); }
      },
      move(p, prev) {
        if (!held) return;
        M.Body.setPosition(held, { x: p.x, y: p.y });
        M.Body.setVelocity(held, { x: p.x - prev.x, y: p.y - prev.y });
      },
      up(p, prev) {
        if (!held) return;
        M.Body.setVelocity(held, { x: (p.x - prev.x) * 0.9, y: (p.y - prev.y) * 0.9 });
        held = null;
      }
    });
    function frame() {
      const t = tiltVec();
      engine.gravity.x = t.x * 1.4;
      engine.gravity.y = 1 + t.y * 0.8;
      if (held) M.Body.setVelocity(held, { x: held.velocity.x * 0.2, y: held.velocity.y * 0.2 });
      M.Engine.update(engine, 1000 / 60);
      const v = api.view, ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      balls.forEach((b, i) => {
        maxShift = Math.max(maxShift, Math.hypot(b.position.x - origins[i].x, b.position.y - origins[i].y));
        ball(ctx, b.position.x, b.position.y, b.circleRadius, b.plugin.color);
      });
      return true;
    }
    return { frame, destroy() { M.World.clear(engine.world, false); M.Engine.clear(engine); api.kill(); }, probe() { return { maxShift }; } };
  };

  factories.trybiki = function (canvas) {
    const api = mountCanvas(canvas);
    const teeth = [16, 12, 10, 14];
    const signs = [1, -1, 1, -1];
    const colors = ['#ffb25a', '#ff5d3a', '#5cc8ff', '#b6f23c'];
    let pos = [], rad = [], theta = 0.4, turned = 0, drag = null;
    function layout() {
      const v = api.refit();
      const base = Math.min(v.w, v.h) * 0.16;
      pos = [
        { x: v.w * 0.42, y: v.h * 0.48 },
        { x: v.w * 0.42 + base * 1.7, y: v.h * 0.34 },
        { x: v.w * 0.42 - base * 1.35, y: v.h * 0.66 },
        { x: v.w * 0.42 + base * 0.2, y: v.h * 0.72 }
      ];
      rad = teeth.map((t, i) => base * (i === 0 ? 1 : 0.72));
    }
    layout();
    function drawGear(ctx, x, y, n, radius, angle, color) {
      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const a = angle + (i / n) * Math.PI * 2;
        const r = i % 2 ? radius : radius * 0.78;
        const px = x + Math.cos(a) * r, py = y + Math.sin(a) * r;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,.35)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ball(ctx, x, y, radius * 0.22, '#1a120c');
    }
    const input = api.bind({
      down(p) {
        let best = 0, bd = 1e9;
        for (let i = 0; i < 4; i++) {
          const d = Math.hypot(p.x - pos[i].x, p.y - pos[i].y);
          if (d < bd) { best = i; bd = d; }
        }
        drag = { i: best, a: Math.atan2(p.y - pos[best].y, p.x - pos[best].x) };
      },
      move(p) {
        if (!drag) return;
        const i = drag.i;
        const a = Math.atan2(p.y - pos[i].y, p.x - pos[i].x);
        let d = a - drag.a;
        if (d > Math.PI) d -= Math.PI * 2;
        if (d < -Math.PI) d += Math.PI * 2;
        theta += d * signs[i];
        turned += Math.abs(d);
        drag.a = a;
        if (Math.abs(d) > 0.25) api.play('metal', 0.9);
      },
      up() { drag = null; }
    });
    function frame() {
      const v = api.view, ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      for (let i = 0; i < 4; i++) drawGear(ctx, pos[i].x, pos[i].y, teeth[i], rad[i], signs[i] * theta, colors[i]);
      return false;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { turned, theta }; } };
  };

  factories.domino = function (canvas) {
    const api = mountCanvas(canvas);
    const M = window.Matter;
    const engine = M.Engine.create({ gravity: { x: 0, y: 1 } });
    const v0 = api.refit();
    const floor = M.Bodies.rectangle(v0.w / 2, v0.h - 16, v0.w + 40, 32, { isStatic: true });
    M.Composite.add(engine.world, floor);
    const dominos = [];
    let last = null, placing = false, fallen = 0;
    const stat = pill();
    stat.textContent = '0 kostek';
    function place(x, y) {
      if (dominos.length >= 24) return;
      for (const d of dominos) if (Math.hypot(d.position.x - x, d.position.y - y) < 36) return;
      const body = M.Bodies.rectangle(x, v0.h - 48, 14, 56, { isStatic: true, friction: 0.4, restitution: 0.05 });
      body.plugin = { stood: true };
      M.Composite.add(engine.world, body);
      dominos.push(body);
      last = { x, y: body.position.y };
      stat.textContent = dominos.length + ' kostek';
      api.play('click', 0.8);
    }
    function topple() {
      const standing = dominos.filter((d) => d.isStatic);
      if (!standing.length) return;
      const d = standing[0];
      M.Body.setStatic(d, false);
      M.Body.setVelocity(d, { x: 3.2, y: -0.2 });
      M.Body.setAngularVelocity(d, 0.12);
      api.play('click', 1.1);
      api.buzz(10);
    }
    chip('Przewróć', topple);
    chip('Zetrzyj', () => {
      dominos.forEach((d) => M.Composite.remove(engine.world, d));
      dominos.length = 0; last = null; stat.textContent = '0 kostek';
    });
    const input = api.bind({
      down(p) { placing = true; last = null; place(p.x, p.y); },
      move(p) { if (placing && (!last || Math.hypot(p.x - last.x, p.y - last.y) > 36)) place(p.x, p.y); },
      up() { placing = false; }
    });
    function frame() {
      M.Engine.update(engine, 1000 / 60);
      fallen = dominos.filter((d) => Math.abs(d.angle) > 0.6).length;
      const v = api.view, ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      ctx.fillStyle = '#1c4636';
      ctx.fillRect(0, v.h - 28, v.w, 28);
      for (const d of dominos) {
        ctx.save();
        ctx.translate(d.position.x, d.position.y);
        ctx.rotate(d.angle);
        glossRect(ctx, -7, -28, 14, 56, 3, '#f4efe4');
        ctx.fillStyle = '#1a1a1a';
        ctx.beginPath(); ctx.arc(0, -14, 1.6, 0, 7); ctx.fill();
        ctx.beginPath(); ctx.arc(0, 8, 1.6, 0, 7); ctx.fill();
        ctx.restore();
      }
      if (!dominos.length) {
        ctx.fillStyle = theme().ink;
        ctx.font = '600 16px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Przeciągnij, żeby ułożyć rząd', v.w / 2, v.h / 2);
      }
      stat.textContent = dominos.length + ' kostek' + (fallen ? ' · ' + fallen + ' leży' : '');
      return dominos.some((d) => !d.isStatic && Math.abs(d.angularVelocity) + Math.abs(d.velocity.x) > 0.02);
    }
    return { frame, destroy() { M.World.clear(engine.world, false); M.Engine.clear(engine); api.kill(); }, probe() { return { count: dominos.length, fallen }; } };
  };

  factories.lampa = function (canvas) {
    const api = mountCanvas(canvas);
    const blobs = [];
    let pull = 0;
    function seed() {
      const v = api.refit();
      if (blobs.length) return;
      for (let i = 0; i < 6; i++) blobs.push({ x: rand(v.w * 0.2, v.w * 0.8), y: rand(v.h * 0.4, v.h * 0.9), r: rand(28, 54), vx: rand(-0.3, 0.3), vy: rand(-0.5, -0.15), c: ['#ff4d6a', '#ff8a3a', '#ffd15a', '#ff5d9a'][i % 4] });
    }
    seed();
    const input = api.bind({
      down() { api.play('bell', 0.7); },
      move() { pull = Math.max(pull, 1); }
    });
    function frame() {
      seed();
      const v = api.view;
      for (const b of blobs) {
        let ax = 0, ay = -0.02;
        for (const g of input.pts.values()) {
          const dx = g.x - b.x, dy = g.y - b.y, d = Math.hypot(dx, dy) + 24;
          ax += dx / d * 0.8; ay += dy / d * 0.8;
          pull = Math.max(pull, 2);
        }
        b.vx = (b.vx + ax) * 0.98; b.vy = (b.vy + ay) * 0.98;
        b.x = clamp(b.x + b.vx, b.r, v.w - b.r);
        b.y += b.vy;
        if (b.y + b.r < 0) b.y = v.h + b.r;
      }
      const ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      for (const b of blobs) {
        const g = ctx.createRadialGradient(b.x - b.r * 0.3, b.y - b.r * 0.3, 2, b.x, b.y, b.r);
        g.addColorStop(0, 'rgba(255,250,220,.95)');
        g.addColorStop(0.45, b.c);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
      return true;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { pull }; } };
  };

  factories.snieg = function (canvas) {
    const api = mountCanvas(canvas);
    const flakes = [];
    let wind = 0;
    function seed() {
      const v = api.refit();
      if (flakes.length) return;
      const n = hi() ? 90 : 50;
      for (let i = 0; i < n; i++) flakes.push({ x: rand(0, v.w), y: rand(0, v.h), r: rand(1.2, 3.2), s: rand(0.5, 1.6), p: rand(0, 6) });
    }
    seed();
    const input = api.bind({
      down() { api.play('snow', 1); },
      move(p, prev) { wind = clamp(wind * 0.4 + (p.x - prev.x) * 0.35, -10, 10); }
    });
    function frame() {
      seed();
      const t = tiltVec();
      if (t.shake > 0.7) wind = rand(-8, 8);
      wind = wind * 0.96 + t.x * 1.4;
      const v = api.view, ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      ctx.fillStyle = 'rgba(255,255,255,.08)';
      ctx.beginPath(); ctx.arc(v.w / 2, v.h * 0.46, Math.min(v.w, v.h) * 0.4, 0, 7); ctx.fill();
      ctx.fillStyle = '#f4fbff';
      for (const f of flakes) {
        f.p += 0.03;
        f.x += wind * 0.35 + Math.sin(f.p);
        f.y += f.s * (api.calm() < 1 ? 0.6 : 1.2);
        if (f.y > v.h) { f.y = -4; f.x = rand(0, v.w); }
        if (f.x < 0) f.x += v.w; if (f.x > v.w) f.x -= v.w;
        ctx.globalAlpha = 0.85;
        ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, 7); ctx.fill();
      }
      ctx.globalAlpha = 1;
      return true;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { wind: Math.abs(wind) }; } };
  };

  factories.neon = function (canvas) {
    const api = mountCanvas(canvas);
    const pts = [];
    const colors = ['#ff4d6a', '#ffd23a', '#3ec6ff', '#b6f23c', '#e85dff'];
    let ci = 0;
    function add(p, prev) {
      pts.push({ x: p.x, y: p.y, px: prev ? prev.x : p.x, py: prev ? prev.y : p.y, life: 1, c: colors[ci % colors.length] });
      if (pts.length > (hi() ? 220 : 80)) pts.shift();
    }
    const input = api.bind({
      down(p) { ci++; add(p, null); api.play('chime', 0.8 + (ci % 5) * 0.08); },
      move(p, prev) { add(p, prev); }
    });
    function frame() {
      const v = api.refit(), ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      ctx.lineCap = 'round';
      let live = input.pts.size > 0;
      for (let i = pts.length - 1; i >= 0; i--) {
        const p = pts[i];
        p.life -= api.calm() < 1 ? 0.03 : 0.012;
        if (p.life <= 0) { pts.splice(i, 1); continue; }
        live = true;
        ctx.globalAlpha = p.life;
        ctx.strokeStyle = p.c;
        ctx.lineWidth = 4 + p.life * 10;
        ctx.beginPath(); ctx.moveTo(p.px, p.py); ctx.lineTo(p.x, p.y); ctx.stroke();
      }
      ctx.globalAlpha = 1;
      return live;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { n: pts.length }; } };
  };

  factories.kolyska = function (canvas) {
    const api = mountCanvas(canvas);
    const M = window.Matter;
    const engine = M.Engine.create({ gravity: { x: 0, y: 1 } });
    const v = api.refit();
    const n = 5, gap = Math.min(42, v.w / 9), y0 = 70, len = Math.min(v.h * 0.42, 280);
    const balls = [];
    const cx = v.w / 2 - gap * 2;
    for (let i = 0; i < n; i++) {
      const x = cx + i * gap;
      const b = M.Bodies.circle(x, y0 + len, gap * 0.42, { restitution: 0.98, friction: 0, density: 0.004 });
      const c = M.Constraint.create({ pointA: { x, y: y0 }, bodyB: b, length: len, stiffness: 0.9 });
      balls.push(b);
      M.Composite.add(engine.world, [b, c]);
    }
    let held = -1, pull = 0;
    const input = api.bind({
      down(p) {
        held = 0; let bd = 1e9;
        balls.forEach((b, i) => {
          const d = Math.hypot(b.position.x - p.x, b.position.y - p.y);
          if (d < bd) { bd = d; held = i; }
        });
        api.play('metal', 0.8);
      },
      move(p) {
        if (held < 0) return;
        M.Body.setPosition(balls[held], { x: p.x, y: Math.max(y0 + 20, p.y) });
        M.Body.setVelocity(balls[held], { x: 0, y: 0 });
        pull = Math.max(pull, Math.abs(p.x - (cx + held * gap)));
      },
      up() { held = -1; api.buzz(8); }
    });
    function frame() {
      if (held >= 0) M.Body.setVelocity(balls[held], { x: 0, y: 0 });
      M.Engine.update(engine, 1000 / 60);
      const ctx = api.view.ctx, w = api.view.w, h = api.view.h;
      backdrop(ctx, w, h);
      ctx.strokeStyle = 'rgba(255,255,255,.45)'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(cx - 10, y0); ctx.lineTo(cx + gap * 4 + 10, y0); ctx.stroke();
      balls.forEach((b, i) => {
        ctx.beginPath(); ctx.moveTo(cx + i * gap, y0); ctx.lineTo(b.position.x, b.position.y); ctx.stroke();
        ball(ctx, b.position.x, b.position.y, b.circleRadius, '#d5dde8');
      });
      return true;
    }
    return { frame, destroy() { M.World.clear(engine.world, false); M.Engine.clear(engine); api.kill(); }, probe() { return { pull }; } };
  };
  function fingerToy(canvas, snd, step) {
    const api = mountCanvas(canvas);
    const state = step.init(api);
    const input = api.bind({
      down(p) { if (snd) api.play(snd, 0.9); api.buzz(8); step.down && step.down(state, p, api); },
      move(p, prev) { step.move && step.move(state, p, prev, api); },
      up(p, prev) { step.up && step.up(state, p, prev, api); }
    });
    return {
      frame(ts) { return step.frame(state, api, input, ts); },
      destroy() { api.kill(); },
      probe() { return step.probe(state); }
    };
  }

  factories.magnesy = function (canvas) {
    const api = mountCanvas(canvas);
    const mags = [{ x: 80, y: 200, vx: 0, vy: 0 }, { x: 200, y: 200, vx: 0, vy: 0 }];
    let drag = -1, moved = 0, flip = 1;
    function layout() {
      const v = api.refit();
      if (mags._ready) return;
      mags[0].x = v.w * 0.32; mags[0].y = v.h * 0.5;
      mags[1].x = v.w * 0.68; mags[1].y = v.h * 0.5;
      mags._ready = 1;
    }
    layout();
    chip('Biegun', () => { flip = -flip; api.play('switch', 1); });
    const input = api.bind({
      down(p) {
        drag = Math.hypot(p.x - mags[0].x, p.y - mags[0].y) < Math.hypot(p.x - mags[1].x, p.y - mags[1].y) ? 0 : 1;
      },
      move(p) {
        if (drag < 0) return;
        mags[drag].x = p.x; mags[drag].y = p.y; moved += 1;
      },
      up() { drag = -1; }
    });
    function frame() {
      layout();
      const a = mags[0], b = mags[1];
      const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 1;
      const f = clamp(1400 / (d * d), 0, 1.6) * flip;
      if (drag !== 0) { a.vx += dx / d * f; a.vy += dy / d * f; }
      if (drag !== 1) { b.vx -= dx / d * f; b.vy -= dy / d * f; }
      [a, b].forEach((m, i) => {
        if (i === drag) return;
        m.vx *= 0.9; m.vy *= 0.9;
        m.x = clamp(m.x + m.vx, 30, api.view.w - 30);
        m.y = clamp(m.y + m.vy, 30, api.view.h - 30);
      });
      const ctx = api.view.ctx;
      backdrop(ctx, api.view.w, api.view.h);
      mags.forEach((m) => {
        glossRect(ctx, m.x - 36, m.y - 18, 36, 36, 8, '#ff5d3a');
        glossRect(ctx, m.x, m.y - 18, 36, 36, 8, '#5cc8ff');
      });
      return drag >= 0 || Math.abs(a.vx) + Math.abs(b.vx) > 0.05;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { moved }; } };
  };

  factories.kalejdoskop = function (canvas) {
    const api = mountCanvas(canvas);
    const segs = [];
    const input = api.bind({
      down(p) { segs.push({ x: p.x, y: p.y, px: p.x, py: p.y, life: 1 }); api.play('chime', 1.2); },
      move(p, prev) { segs.push({ x: p.x, y: p.y, px: prev.x, py: prev.y, life: 1 }); if (segs.length > 160) segs.shift(); }
    });
    function frame() {
      const v = api.refit(), ctx = v.ctx, cx = v.w / 2, cy = v.h / 2;
      backdrop(ctx, v.w, v.h);
      let live = input.pts.size > 0;
      for (let i = segs.length - 1; i >= 0; i--) {
        const s = segs[i];
        s.life -= 0.01;
        if (s.life <= 0) { segs.splice(i, 1); continue; }
        live = true;
        for (let k = 0; k < 6; k++) {
          ctx.save();
          ctx.translate(cx, cy); ctx.rotate(k * Math.PI / 3);
          ctx.strokeStyle = 'rgba(255,210,120,' + s.life + ')';
          ctx.lineWidth = 3;
          ctx.beginPath(); ctx.moveTo(s.px - cx, s.py - cy); ctx.lineTo(s.x - cx, s.y - cy); ctx.stroke();
          ctx.scale(1, -1);
          ctx.beginPath(); ctx.moveTo(s.px - cx, s.py - cy); ctx.lineTo(s.x - cx, s.y - cy); ctx.stroke();
          ctx.restore();
        }
      }
      return live;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { n: segs.length }; } };
  };

  factories.deszcz = function (canvas) {
    const api = mountCanvas(canvas);
    const drops = [];
    let wiped = 0;
    function seed() {
      const v = api.refit();
      if (drops.length) return;
      const n = hi() ? 70 : 40;
      for (let i = 0; i < n; i++) drops.push({ x: rand(0, v.w), y: rand(0, v.h), r: rand(7, 16), vy: rand(0.3, 1.2), wet: 1 });
    }
    seed();
    function wipe(x, y) {
      for (const d of drops) if (d.wet > 0 && Math.hypot(d.x - x, d.y - y) < d.r + 24) { d.wet = 0; wiped++; }
    }
    const input = api.bind({
      down(p) { wipe(p.x, p.y); api.play('drop', 0.7); },
      move(p) { wipe(p.x, p.y); }
    });
    function frame() {
      seed();
      const v = api.view, ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      for (const d of drops) {
        if (d.wet <= 0) { if (Math.random() < 0.004) { d.wet = 1; d.y = -8; } continue; }
        d.y += d.vy;
        if (d.y > v.h) d.y = -8;
        ball(ctx, d.x, d.y, d.r, '#c5e8ff');
      }
      return true;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { wiped }; } };
  };

  factories.sprezyna = function (canvas) {
    const api = mountCanvas(canvas);
    let stretch = 1, drag = false;
    const input = api.bind({
      down(p) { drag = true; api.play('pluck', 0.6); },
      move(p) { if (drag) stretch = clamp(0.45 + (p.y / api.view.h) * 1.2, 0.35, 1.8); },
      up() { drag = false; api.buzz(8); }
    });
    function frame() {
      if (!drag) stretch += (1 - stretch) * (api.calm() < 1 ? 0.2 : 0.08);
      const v = api.refit(), ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      const top = 40, bot = top + (v.h - 90) * stretch, amp = Math.min(v.w, 160) * 0.28, coils = 14;
      ctx.strokeStyle = '#e8d2ff'; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.beginPath();
      for (let i = 0; i <= coils; i++) {
        const y = top + (bot - top) * (i / coils);
        const x = v.w / 2 + (i % 2 ? amp : -amp);
        if (i === 0) ctx.moveTo(v.w / 2, top); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ball(ctx, v.w / 2, bot, 16, settings.accent);
      return drag || Math.abs(stretch - 1) > 0.02;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { stretch }; } };
  };

  factories.galaretka = function (canvas) {
    const api = mountCanvas(canvas);
    const N = 8, pts = [];
    let energy = 0;
    function seed() {
      const v = api.refit();
      if (pts.length && Math.abs(pts._w - v.w) < 12) return;
      pts.length = 0; pts._w = v.w;
      const m = 24;
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        const px = m + x * (v.w - m * 2) / (N - 1);
        const py = m + y * (v.h - m * 2) / (N - 1);
        pts.push({ x: px, y: py, ox: px, oy: py, vx: 0, vy: 0 });
      }
    }
    seed();
    const input = api.bind({
      down() { api.play('pluck', 0.5); },
      move(p) {
        for (const q of pts) {
          const d = Math.hypot(q.x - p.x, q.y - p.y);
          if (d < 72) { q.x += (p.x - q.x) * 0.28; q.y += (p.y - q.y) * 0.28; }
        }
      }
    });
    function frame() {
      seed();
      energy = 0;
      for (const q of pts) {
        q.vx += (q.ox - q.x) * 0.08; q.vy += (q.oy - q.y) * 0.08;
        q.vx *= 0.88; q.vy *= 0.88; q.x += q.vx; q.y += q.vy;
        energy += Math.hypot(q.x - q.ox, q.y - q.oy);
      }
      const v = api.view, ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      ctx.strokeStyle = 'rgba(180,255,140,.9)'; ctx.lineWidth = 2;
      ctx.beginPath();
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        const i = y * N + x;
        if (x < N - 1) { ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[i + 1].x, pts[i + 1].y); }
        if (y < N - 1) { ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[i + N].x, pts[i + N].y); }
      }
      ctx.stroke();
      for (const q of pts) ball(ctx, q.x, q.y, 4, '#e8ffb0');
      return energy > 2 || input.pts.size > 0;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { energy }; } };
  };

  factories.orbity = function (canvas) {
    const api = mountCanvas(canvas);
    const bodies = [];
    let drag = -1, flung = 0;
    function seed() {
      const v = api.refit();
      if (bodies.length) return;
      bodies.push({ x: v.w / 2, y: v.h / 2, vx: 0, vy: 0, r: 18, sun: 1, c: '#ffb25a' });
      for (let i = 0; i < 5; i++) {
        const a = i / 5 * 6.28, rad = 48 + i * 26;
        bodies.push({ x: v.w / 2 + Math.cos(a) * rad, y: v.h / 2 + Math.sin(a) * rad, vx: Math.sin(a) * 1.3, vy: -Math.cos(a) * 1.3, r: 7, c: ['#ff5d3a', '#5cc8ff', '#b6f23c', '#c084fc', '#fff'][i] });
      }
    }
    seed();
    const input = api.bind({
      down(p) {
        drag = 1; let bd = 1e9;
        for (let i = 1; i < bodies.length; i++) {
          const d = Math.hypot(bodies[i].x - p.x, bodies[i].y - p.y);
          if (d < bd) { bd = d; drag = i; }
        }
        api.play('bell', 0.6);
      },
      move(p, prev) {
        if (drag < 1) return;
        const b = bodies[drag];
        b.x = p.x; b.y = p.y; b.vx = p.x - prev.x; b.vy = p.y - prev.y; flung += Math.hypot(b.vx, b.vy);
      },
      up() { drag = -1; }
    });
    function frame() {
      seed();
      const sun = bodies[0], v = api.view;
      sun.x = v.w / 2; sun.y = v.h / 2;
      for (let i = 1; i < bodies.length; i++) {
        if (i === drag) continue;
        const b = bodies[i];
        const dx = sun.x - b.x, dy = sun.y - b.y, d = Math.hypot(dx, dy) || 1;
        const pull = clamp(80 / d, 0, 2);
        b.vx += dx / d * pull; b.vy += dy / d * pull;
        b.x += b.vx; b.y += b.vy;
      }
      const ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      for (const b of bodies) ball(ctx, b.x, b.y, b.r * (b.sun ? 1.4 : 1), b.c);
      return true;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { flung }; } };
  };

  factories.wstega = function (canvas) {
    const api = mountCanvas(canvas);
    const pts = [];
    let pull = 0;
    function seed() {
      const v = api.refit();
      if (pts.length) return;
      for (let i = 0; i < 22; i++) pts.push({ x: v.w / 2, y: v.h / 2 });
    }
    seed();
    const input = api.bind({
      down(p) { pts[0].x = p.x; pts[0].y = p.y; pull = 1; },
      move(p) { pts[0].x = p.x; pts[0].y = p.y; pull += 1; }
    });
    function frame() {
      seed();
      for (let i = 1; i < pts.length; i++) {
        pts[i].x += (pts[i - 1].x - pts[i].x) * 0.4;
        pts[i].y += (pts[i - 1].y - pts[i].y) * 0.4;
      }
      const v = api.view, ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      for (let i = pts.length - 1; i > 0; i--) {
        ctx.strokeStyle = 'rgba(255,170,90,' + (1 - i / pts.length) + ')';
        ctx.lineWidth = (pts.length - i) * 0.75;
        ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[i - 1].x, pts[i - 1].y); ctx.stroke();
      }
      return input.pts.size > 0 || pull > 0;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { pull }; } };
  };

  factories.rtec = function (canvas) {
    const api = mountCanvas(canvas);
    const drops = [];
    let drag = -1, merges = 0, moved = 0;
    function seed() {
      const v = api.refit();
      if (drops.length) return;
      for (let i = 0; i < 8; i++) drops.push({ x: rand(40, v.w - 40), y: rand(40, v.h - 40), r: rand(16, 28), vx: 0, vy: 0 });
    }
    seed();
    const input = api.bind({
      down(p) {
        drag = 0; let bd = 1e9;
        drops.forEach((d, i) => { const dist = Math.hypot(d.x - p.x, d.y - p.y); if (dist < bd) { bd = dist; drag = i; } });
        api.play('drop', 0.7);
      },
      move(p, prev) {
        if (drag < 0 || !drops[drag]) return;
        drops[drag].x = p.x; drops[drag].y = p.y;
        drops[drag].vx = p.x - prev.x; drops[drag].vy = p.y - prev.y;
        moved++;
      },
      up() { drag = -1; }
    });
    function frame() {
      seed();
      const v = api.view;
      for (let i = 0; i < drops.length; i++) {
        if (i === drag) continue;
        const a = drops[i];
        a.vy += 0.08; a.vx *= 0.99; a.vy *= 0.99;
        a.x = clamp(a.x + a.vx, a.r, v.w - a.r);
        a.y = clamp(a.y + a.vy, a.r, v.h - a.r);
        if (a.y > v.h - a.r - 1) a.vy *= -0.35;
      }
      for (let i = 0; i < drops.length; i++) for (let j = i + 1; j < drops.length; j++) {
        const a = drops[i], b = drops[j];
        if (Math.hypot(a.x - b.x, a.y - b.y) < (a.r + b.r) * 0.7 && a.r + b.r < 90) {
          const big = a.r >= b.r ? a : b, small = big === a ? b : a;
          big.r = Math.sqrt(big.r * big.r + small.r * small.r);
          drops.splice(drops.indexOf(small), 1);
          merges++; api.play('drop', 0.6);
          i = drops.length; break;
        }
      }
      const ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      for (const d of drops) ball(ctx, d.x, d.y, d.r, '#c5ccd6');
      return true;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { moved, merges }; } };
  };

  factories.iskry = function (canvas) {
    const api = mountCanvas(canvas);
    const sparks = [];
    let made = 0;
    function emit(x, y) {
      const n = hi() ? 5 : 2;
      for (let i = 0; i < n; i++) {
        const a = rand(-2.6, -0.5), sp = rand(1.5, 5);
        sparks.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, c: Math.random() < 0.5 ? '#ffb25a' : '#ff5d3a' });
      }
      made += n;
      if (sparks.length > 140) sparks.splice(0, sparks.length - 140);
    }
    const input = api.bind({
      down(p) { emit(p.x, p.y); api.play('scratch', 1.2); api.buzz(10); },
      move(p) { emit(p.x, p.y); }
    });
    function frame() {
      const v = api.refit(), ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      if (input.pts.size) for (const g of input.pts.values()) emit(g.x, g.y);
      let live = input.pts.size > 0;
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.vy += 0.08; s.x += s.vx; s.y += s.vy; s.life -= 0.02;
        if (s.life <= 0) { sparks.splice(i, 1); continue; }
        live = true;
        ctx.globalAlpha = s.life; ctx.fillStyle = s.c; ctx.fillRect(s.x, s.y, 3, 3);
      }
      ctx.globalAlpha = 1;
      return live;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { made }; } };
  };
  factories.zamek = function (canvas) {
    const api = mountCanvas(canvas);
    const dials = [0, 0, 0];
    const code = [2, 5, 8];
    let drag = -1, lastX = 0, open = 0, spun = 0;
    const stat = pill();
    stat.textContent = 'Szyfr ' + code.join('-');
    function centers() {
      const v = api.view, r = Math.min(64, v.w * 0.2);
      return dials.map((a, i) => ({ x: v.w / 2, y: v.h * (0.22 + i * 0.22), r, a, i }));
    }
    const input = api.bind({
      down(p) {
        const cs = centers();
        drag = 0; let bd = 1e9;
        cs.forEach((c) => { const d = Math.hypot(p.x - c.x, p.y - c.y); if (d < bd) { bd = d; drag = c.i; } });
        lastX = p.x;
      },
      move(p) {
        if (drag < 0 || open) return;
        dials[drag] = (dials[drag] + (p.x - lastX) * 0.03) % 10;
        if (dials[drag] < 0) dials[drag] += 10;
        lastX = p.x; spun += 1;
        if (spun % 6 === 0) api.play('click', 0.8 + drag * 0.1);
        const ok = dials.every((a, i) => Math.round(a) % 10 === code[i]);
        if (ok && !open) { open = 1; api.play('open', 1); api.buzz(20); stat.textContent = 'Otwarte'; }
      },
      up() { drag = -1; }
    });
    function frame() {
      const v = api.refit(), ctx = v.ctx, cs = centers();
      backdrop(ctx, v.w, v.h);
      glossRect(ctx, v.w * 0.2, v.h * 0.08, v.w * 0.6, v.h * 0.78, 24, '#3a2c18');
      ctx.strokeStyle = '#c8b48a'; ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(v.w / 2, v.h * 0.16, 28, Math.PI, open ? Math.PI * 1.7 : 0, false);
      ctx.stroke();
      if (open) {
        ctx.fillStyle = '#ffb25a';
        ctx.font = '700 18px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('otwarte', v.w / 2, v.h * 0.9);
      }
      for (const c of cs) {
        ball(ctx, c.x, c.y, c.r, '#1a120c');
        ctx.save(); ctx.translate(c.x, c.y); ctx.rotate(c.a);
        ctx.fillStyle = '#f4efe4'; ctx.fillRect(-3, -c.r + 8, 6, c.r * 0.55); ctx.restore();
        ctx.fillStyle = '#fff'; ctx.font = '700 16px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(String(Math.round(c.a) % 10), c.x, c.y + 6);
      }
      return false;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { spun, open }; } };
  };

  factories.ksylofon = function (canvas) {
    const api = mountCanvas(canvas);
    const colors = ['#ff5d3a', '#ff8a1e', '#ffd23a', '#b6f23c', '#3ec6ff', '#7aa2ff', '#c084fc', '#f4efe4'];
    let hits = 0, flash = -1, flashT = 0;
    function bars() {
      const v = api.view, n = 8, gap = 8, top = 12;
      const h = (v.h - top - 12 - gap * (n - 1)) / n;
      const out = [];
      for (let i = 0; i < n; i++) out.push({ i, x: 16 + i * 8, y: top + i * (h + gap), w: v.w - 32 - i * 14, h, c: colors[i] });
      return out;
    }
    function hit(x, y) {
      for (const b of bars()) if (x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h) return b.i;
      return bars().length ? 0 : -1;
    }
    const input = api.bind({
      down(p) {
        const i = hit(p.x, p.y);
        if (i >= 0) { flash = i; flashT = 1; hits++; api.play('chime', 0.7 + i * 0.1); api.buzz(8); }
      }
    });
    function frame() {
      if (flashT > 0) flashT -= 0.08;
      const v = api.refit(), ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      for (const b of bars()) glossRect(ctx, b.x, b.y + (flash === b.i ? 5 * flashT : 0), b.w, b.h, 10, b.c);
      return flashT > 0;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { hits }; } };
  };

  factories.klepsydra = function (canvas) {
    const api = mountCanvas(canvas);
    const grains = [];
    for (let i = 0; i < 70; i++) grains.push(true);
    let flips = 0, travel = 0, lastSign = 0;
    function flip() {
      for (let i = 0; i < grains.length; i++) grains[i] = !grains[i];
      flips++; api.play('snow', 0.9); api.buzz(12);
    }
    chip('Odwróć', flip);
    const input = api.bind({
      down() { travel = 0; },
      move(p, prev) { travel += Math.hypot(p.x - prev.x, p.y - prev.y); if (travel > 48) { flip(); travel = 0; } }
    });
    function frame() {
      const t = tiltVec();
      const sign = t.y > 0.45 ? 1 : t.y < -0.45 ? -1 : 0;
      if (sign && lastSign && sign !== lastSign) flip();
      if (sign) lastSign = sign;
      const up = grains.filter(Boolean).length;
      if (up > 0 && Math.random() < (api.calm() < 1 ? 0.35 : 0.7)) {
        const i = grains.findIndex(Boolean);
        if (i >= 0) grains[i] = false;
      }
      const v = api.refit(), ctx = v.ctx, cx = v.w / 2, cy = v.h / 2, H = Math.min(v.h * 0.34, 200), W = Math.min(v.w * 0.26, 80);
      backdrop(ctx, v.w, v.h);
      ctx.strokeStyle = 'rgba(255,230,180,.85)'; ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx - W, cy - H); ctx.lineTo(cx + W, cy - H); ctx.lineTo(cx + 8, cy);
      ctx.lineTo(cx + W, cy + H); ctx.lineTo(cx - W, cy + H); ctx.lineTo(cx - 8, cy); ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = '#e6b15a';
      const topN = grains.filter(Boolean).length;
      for (let i = 0; i < topN; i++) ctx.fillRect(cx - W + 12 + (i % 8) * 6, cy - H + 10 + Math.floor(i / 8) * 5, 3, 3);
      for (let i = 0; i < grains.length - topN; i++) ctx.fillRect(cx - W + 12 + (i % 8) * 6, cy + H - 14 - Math.floor(i / 8) * 5, 3, 3);
      return topN > 0 || input.pts.size > 0;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { flips, bottom: grains.filter((g) => !g).length }; } };
  };

  factories.plomien = function (canvas) {
    const api = mountCanvas(canvas);
    const parts = [];
    let wind = 0, blown = 0;
    const input = api.bind({
      down() { api.play('scratch', 0.5); },
      move(p, prev) { wind = clamp((p.x - prev.x) * 0.3, -8, 8); }
    });
    function frame() {
      const v = api.refit();
      const blow = micLevel();
      if (blow > 0.08) { wind += blow * 6; blown = Math.max(blown, blow); }
      wind *= 0.9;
      const cap = hi() ? 46 : 24;
      if (parts.length < cap) parts.push({ x: v.w / 2 + rand(-6, 6), y: v.h * 0.72, vx: wind * 0.2 + rand(-0.4, 0.4), vy: rand(-2.6, -1.2) * (blow > 0.2 ? 0.3 : 1), life: blow > 0.25 ? 0.45 : 1, r: rand(10, 20) });
      const ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      glossRect(ctx, v.w / 2 - 10, v.h * 0.72, 20, 50, 4, '#c9843a');
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.x += p.vx + wind * 0.12; p.y += p.vy; p.life -= blow > 0.2 ? 0.04 : 0.015;
        if (p.life <= 0) { parts.splice(i, 1); continue; }
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        g.addColorStop(0, 'rgba(255,244,200,' + p.life + ')');
        g.addColorStop(0.5, 'rgba(255,120,30,' + p.life * 0.8 + ')');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill();
      }
      ctx.restore();
      return true;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { wind: Math.abs(wind), blown }; } };
  };

  factories.siatka = function (canvas) {
    const api = mountCanvas(canvas);
    const COL = 9, ROW = 7, pts = [];
    let energy = 0;
    function seed() {
      const v = api.refit();
      if (pts.length && Math.abs((pts._w || 0) - v.w) < 10) return;
      pts.length = 0; pts._w = v.w;
      for (let y = 0; y < ROW; y++) for (let x = 0; x < COL; x++) {
        const px = 16 + x * (v.w - 32) / (COL - 1);
        const py = 24 + y * (v.h - 48) / (ROW - 1);
        pts.push({ x: px, y: py, ox: px, oy: py, vx: 0, vy: 0, pin: y === 0 });
      }
    }
    seed();
    const input = api.bind({
      down() { api.play('pluck', 0.55); },
      move(p) {
        for (const q of pts) {
          if (q.pin) continue;
          const d = Math.hypot(q.x - p.x, q.y - p.y);
          if (d < 60) { q.x += (p.x - q.x) * 0.45; q.y += (p.y - q.y) * 0.45; }
        }
      }
    });
    function frame() {
      seed();
      energy = 0;
      for (const q of pts) {
        if (q.pin) continue;
        q.vy += 0.15; q.vx += (q.ox - q.x) * 0.01; q.vy += (q.oy - q.y) * 0.01;
        q.vx *= 0.94; q.vy *= 0.94; q.x += q.vx; q.y += q.vy;
        energy += Math.hypot(q.vx, q.vy);
      }
      const v = api.view, ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      ctx.strokeStyle = 'rgba(170,230,255,.9)'; ctx.lineWidth = 1.6;
      ctx.beginPath();
      for (let y = 0; y < ROW; y++) for (let x = 0; x < COL; x++) {
        const i = y * COL + x;
        if (x < COL - 1) { ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[i + 1].x, pts[i + 1].y); }
        if (y < ROW - 1) { ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[i + COL].x, pts[i + COL].y); }
      }
      ctx.stroke();
      return energy > 0.3 || input.pts.size > 0;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { energy }; } };
  };

  factories.koraliki = function (canvas) {
    const api = mountCanvas(canvas);
    const rows = [];
    const colors = ['#ff5d3a', '#ffb25a', '#3ddc97', '#5cc8ff', '#c084fc', '#f4efe4'];
    for (let r = 0; r < 5; r++) {
      const beads = [];
      for (let i = 0; i < 6; i++) beads.push({ t: 0.08 + i * 0.12, c: colors[i] });
      rows.push(beads);
    }
    let drag = null, moved = 0;
    function yOf(r) { return api.view.h * (0.18 + r * 0.14); }
    function xOf(t) { return 28 + t * (api.view.w - 56); }
    const input = api.bind({
      down(p) {
        drag = null; let bd = 64;
        rows.forEach((beads, r) => beads.forEach((b, i) => {
          const d = Math.hypot(xOf(b.t) - p.x, yOf(r) - p.y);
          if (d < bd) { bd = d; drag = { r, i }; }
        }));
        if (drag) { moved++; api.play('click', 0.9); api.buzz(6); }
      },
      move(p) {
        if (!drag) return;
        const beads = rows[drag.r], b = beads[drag.i];
        const prev = beads[drag.i - 1], next = beads[drag.i + 1];
        let t = clamp((p.x - 28) / Math.max(1, api.view.w - 56), 0.04, 0.96);
        if (prev) t = Math.max(t, prev.t + 0.07);
        if (next) t = Math.min(t, next.t - 0.07);
        b.t = t; moved++;
      },
      up() { drag = null; }
    });
    function frame() {
      const v = api.refit(), ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      rows.forEach((beads, r) => {
        const y = yOf(r);
        ctx.strokeStyle = '#8a7358'; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(16, y); ctx.lineTo(v.w - 16, y); ctx.stroke();
        for (const b of beads) ball(ctx, xOf(b.t), y, 13, b.c);
      });
      return false;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { moved }; } };
  };

  factories.meduza = function (canvas) {
    const api = mountCanvas(canvas);
    const jellies = [];
    let phase = 0, lead = 0;
    function seed() {
      const v = api.refit();
      if (jellies.length) return;
      for (let i = 0; i < 3; i++) {
        const tent = [];
        for (let t = 0; t < 7; t++) tent.push({ x: v.w * (0.3 + i * 0.2), y: v.h * 0.4 });
        jellies.push({ x: v.w * (0.3 + i * 0.2), y: v.h * (0.28 + i * 0.1), c: ['#9af6ff', '#e2c6ff', '#ffe0a3'][i], tent });
      }
    }
    seed();
    const input = api.bind({
      down(p) { if (jellies[0]) { jellies[0].x = p.x; jellies[0].y = p.y; } lead = 1; api.play('drop', 0.6); },
      move(p) { if (jellies[0]) { jellies[0].x = p.x; jellies[0].y = p.y; } lead += 1; }
    });
    function frame() {
      seed();
      phase += 0.05;
      const v = api.view;
      jellies.forEach((j, idx) => {
        if (!(idx === 0 && input.pts.size)) {
          j.x += Math.sin(phase + idx) * 0.45;
          j.y += Math.cos(phase * 0.7 + idx) * 0.3;
        }
        j.x = clamp(j.x, 24, v.w - 24); j.y = clamp(j.y, 24, v.h - 24);
        let px = j.x, py = j.y;
        j.tent.forEach((t) => { t.x += (px - t.x) * 0.35; t.y += (py + 18 - t.y) * 0.35; px = t.x; py = t.y; });
      });
      const ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      for (const j of jellies) {
        const pulse = 1 + Math.sin(phase * 2) * 0.08;
        ball(ctx, j.x, j.y, 26 * pulse, j.c);
        ctx.strokeStyle = j.c; ctx.lineWidth = 2; ctx.globalAlpha = 0.8;
        ctx.beginPath();
        j.tent.forEach((t, i) => { if (i === 0) ctx.moveTo(j.x, j.y + 10); ctx.lineTo(t.x, t.y + i * 6); });
        ctx.stroke(); ctx.globalAlpha = 1;
      }
      return true;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { lead }; } };
  };

  factories.kostka = function (canvas) {
    const api = mountCanvas(canvas);
    let ax = 0.6, ay = 0.5, spun = 0;
    const faces = [[0,1,2,3],[4,5,6,7],[0,1,5,4],[2,3,7,6],[1,2,6,5],[0,3,7,4]];
    const cols = ['#ff5d3a', '#ffb25a', '#3ddc97', '#5cc8ff', '#c084fc', '#f4efe4'];
    const verts = [[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]];
    function project(v) {
      const x = v[0], y = v[1], z = v[2];
      const cy = Math.cos(ay), sy = Math.sin(ay), cx = Math.cos(ax), sx = Math.sin(ax);
      const x1 = x * cy - z * sy, z1 = x * sy + z * cy;
      const y1 = y * cx - z1 * sx, z2 = y * sx + z1 * cx;
      const p = 2.8 / (4 + z2);
      return [x1 * p, y1 * p, z2];
    }
    const input = api.bind({
      down() { api.play('click', 0.7); },
      move(p, prev) { ay += (p.x - prev.x) * 0.01; ax += (p.y - prev.y) * 0.01; spun += Math.hypot(p.x - prev.x, p.y - prev.y); }
    });
    function frame() {
      const v = api.refit(), ctx = v.ctx, s = Math.min(v.w, v.h) * 0.28;
      backdrop(ctx, v.w, v.h);
      const pv = verts.map(project);
      const order = faces.map((f, i) => ({ i, z: f.reduce((a, k) => a + pv[k][2], 0) })).sort((a, b) => a.z - b.z);
      for (const item of order) {
        const f = faces[item.i];
        ctx.beginPath();
        f.forEach((k, n) => {
          const x = v.w / 2 + pv[k][0] * s, y = v.h / 2 + pv[k][1] * s;
          if (n === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.fillStyle = cols[item.i]; ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.stroke();
      }
      return false;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { spun, ay }; } };
  };

  factories.plazma = function (canvas) {
    const api = mountCanvas(canvas);
    const bolts = Array.from({ length: 6 }, (_, i) => ({ a: i }));
    let charge = 0, t = 0;
    function jag(ctx, x0, y0, x1, y1) {
      ctx.beginPath(); ctx.moveTo(x0, y0);
      const n = 6;
      for (let i = 1; i < n; i++) {
        const k = i / n;
        ctx.lineTo(x0 + (x1 - x0) * k + rand(-12, 12), y0 + (y1 - y0) * k + rand(-12, 12));
      }
      ctx.lineTo(x1, y1); ctx.stroke();
    }
    const input = api.bind({
      down() { charge = 1; api.play('chime', 1.4); },
      move() { charge += 1; }
    });
    function frame() {
      t += 0.08;
      const v = api.refit(), ctx = v.ctx, cx = v.w / 2, cy = v.h / 2;
      backdrop(ctx, v.w, v.h);
      ball(ctx, cx, cy, 28, '#d2a8ff');
      ctx.strokeStyle = 'rgba(220,180,255,.95)'; ctx.lineWidth = 2;
      const fingers = Array.from(input.pts.values());
      bolts.forEach((b, i) => {
        let tx, ty;
        if (fingers.length) {
          const g = fingers[0];
          const ang = Math.atan2(g.y - cy, g.x - cx) + Math.PI / 2;
          const spread = (i - 2.5) * 16;
          tx = g.x + Math.cos(ang) * spread; ty = g.y + Math.sin(ang) * spread;
        } else {
          tx = cx + Math.cos(b.a + t) * Math.min(v.w, v.h) * 0.32;
          ty = cy + Math.sin(b.a * 1.3 + t) * Math.min(v.w, v.h) * 0.32;
        }
        jag(ctx, cx, cy, tx, ty);
      });
      return true;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { charge }; } };
  };

  factories.balon = function (canvas) {
    const api = mountCanvas(canvas);
    let x = 0, y = 0, vx = 0, vy = 0, squash = 1, drag = false, ready = false, inflate = 1;
    function layout() {
      api.refit();
      if (!ready) { x = api.view.w / 2; y = api.view.h * 0.46; ready = true; }
    }
    layout();
    const input = api.bind({
      down(p) { drag = Math.hypot(p.x - x, p.y - y) < 120; api.play('pluck', 0.6); },
      move(p, prev) {
        if (!drag) return;
        vx = p.x - prev.x; vy = p.y - prev.y; x = p.x; y = p.y;
        squash = clamp(1 - Math.hypot(vx, vy) * 0.03, 0.65, 1.2);
      },
      up() { drag = false; api.buzz(8); }
    });
    function frame() {
      const blow = micLevel();
      inflate = lerp(inflate, 1 + Math.min(0.8, blow * 3.2), 0.08);
      const v = api.view;
      if (!drag) {
        vx += (v.w / 2 - x) * 0.004; vy += (v.h * 0.46 - y) * 0.004;
        vx *= 0.96; vy *= 0.96; x += vx; y += vy;
        squash += (1 - squash) * 0.1;
      }
      const ctx = v.ctx, R = 58 * inflate;
      backdrop(ctx, v.w, v.h);
      ctx.fillStyle = 'rgba(0,0,0,.25)';
      ctx.beginPath(); ctx.ellipse(x, y + R + 20, 40, 10, 0, 0, 7); ctx.fill();
      ball(ctx, x, y, R * squash, '#ff5d7a');
      ctx.strokeStyle = '#7a1030'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x, y + R); ctx.quadraticCurveTo(x + 12, y + R + 30, x, y + R + 48); ctx.stroke();
      return drag || blow > 0.02 || Math.hypot(vx, vy) > 0.2;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { inflate, x }; } };
  };

  factories.plyta = function (canvas) {
    const api = mountCanvas(canvas);
    let ang = 0, vel = 0.05, drag = false, last = 0, scratch = 0;
    const input = api.bind({
      down(p) {
        const c = { x: api.view.w / 2, y: api.view.h / 2 };
        drag = true; last = Math.atan2(p.y - c.y, p.x - c.x);
      },
      move(p) {
        if (!drag) return;
        const c = { x: api.view.w / 2, y: api.view.h / 2 };
        const a = Math.atan2(p.y - c.y, p.x - c.x);
        let d = a - last; if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2;
        ang += d; vel = d * 0.7; last = a; scratch += Math.abs(d);
        api.play('scratch', 0.6 + Math.min(1, Math.abs(vel)));
      },
      up() { drag = false; }
    });
    function frame() {
      if (!drag) { ang += vel; vel *= api.calm() < 1 ? 0.97 : 0.995; }
      const v = api.refit(), ctx = v.ctx, cx = v.w / 2, cy = v.h / 2, r = Math.min(v.w, v.h) * 0.36;
      backdrop(ctx, v.w, v.h);
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(ang);
      for (let i = 8; i >= 1; i--) {
        ctx.beginPath(); ctx.arc(0, 0, r * i / 8, 0, 7);
        ctx.strokeStyle = i % 2 ? '#161616' : '#2a2a2a'; ctx.lineWidth = r / 9; ctx.stroke();
      }
      ctx.restore();
      ball(ctx, cx, cy, r * 0.16, settings.accent);
      return drag || Math.abs(vel) > 0.001;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { scratch, ang }; } };
  };

  factories.spiro = function (canvas) {
    const api = mountCanvas(canvas);
    let th = 0, R = 0.62, k = 0.4, drawn = 0;
    const ink = document.createElement('canvas');
    function frame() {
      const v = api.refit();
      if (ink.width !== canvas.width || ink.height !== canvas.height) {
        ink.width = canvas.width; ink.height = canvas.height;
      }
      const ictx = ink.getContext('2d');
      ictx.setTransform(v.dpr, 0, 0, v.dpr, 0, 0);
      const cx = v.w / 2, cy = v.h / 2, rad = Math.min(v.w, v.h) * 0.36;
      ictx.strokeStyle = settings.accent; ictx.lineWidth = 1.4;
      ictx.beginPath();
      for (let i = 0; i < (api.calm() < 1 ? 2 : 5); i++) {
        th += 0.06; drawn++;
        const x = cx + rad * (R * Math.cos(th) + (1 - R) * Math.cos(th * (1 + 1 / k)));
        const y = cy + rad * (R * Math.sin(th) - (1 - R) * Math.sin(th * (1 + 1 / k)));
        if (i === 0) ictx.moveTo(x, y); else ictx.lineTo(x, y);
      }
      ictx.stroke();
      const ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      ctx.drawImage(ink, 0, 0, v.w, v.h);
      return true;
    }
    const input = api.bind({
      down() { api.play('chime', 0.9); },
      move(p, prev) { k = clamp(k + (p.x - prev.x) * 0.002, 0.15, 0.9); R = clamp(R + (prev.y - p.y) * 0.002, 0.3, 0.9); }
    });
    return { frame, destroy() { api.kill(); }, probe() { return { k, drawn }; } };
  };

  factories.kompas = function (canvas) {
    const api = mountCanvas(canvas);
    let target = -Math.PI / 2, ang = -Math.PI / 2, moved = 0;
    const input = api.bind({
      down(p) { target = Math.atan2(p.y - api.view.h / 2, p.x - api.view.w / 2); moved++; api.play('click', 0.8); },
      move(p) { target = Math.atan2(p.y - api.view.h / 2, p.x - api.view.w / 2); moved++; }
    });
    function frame() {
      const heading = headDeg();
      if (heading != null && input.pts.size === 0) target = (heading * Math.PI / 180) - Math.PI / 2;
      let d = target - ang;
      if (d > Math.PI) d -= Math.PI * 2;
      if (d < -Math.PI) d += Math.PI * 2;
      ang += d * 0.12;
      const v = api.refit(), ctx = v.ctx, cx = v.w / 2, cy = v.h / 2, r = Math.min(v.w, v.h) * 0.32;
      backdrop(ctx, v.w, v.h);
      ctx.strokeStyle = 'rgba(200,170,110,.7)'; ctx.lineWidth = 8;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.stroke();
      ctx.fillStyle = '#1a140c';
      ctx.beginPath(); ctx.arc(cx, cy, r - 8, 0, 7); ctx.fill();
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(ang + Math.PI / 2);
      ctx.fillStyle = '#ff5d3a';
      ctx.beginPath(); ctx.moveTo(0, -r + 16); ctx.lineTo(12, 18); ctx.lineTo(-12, 18); ctx.fill();
      ctx.fillStyle = '#f4efe4';
      ctx.beginPath(); ctx.moveTo(0, r - 18); ctx.lineTo(10, -6); ctx.lineTo(-10, -6); ctx.fill();
      ctx.restore();
      ball(ctx, cx, cy, 8, settings.accent);
      return Math.abs(d) > 0.01 || input.pts.size > 0;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { ang, moved }; } };
  };

  factories.konfetti = function (canvas) {
    const api = mountCanvas(canvas);
    const bits = [];
    const cols = ['#ff5d3a', '#ffb25a', '#3ddc97', '#5cc8ff', '#c084fc', '#fff'];
    let made = 0, shook = false;
    function burst(x, y) {
      const n = hi() ? 48 : 24;
      for (let i = 0; i < n; i++) {
        const a = rand(0, 6.28), sp = rand(2, 8);
        bits.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 2, life: 1, c: cols[i % cols.length], s: rand(4, 9) });
      }
      made += n; api.play('glass', 1); api.buzz(16);
    }
    const input = api.bind({ down(p) { burst(p.x, p.y); } });
    function frame() {
      const t = tiltVec();
      if (t.shake > 0.75 && !shook) { shook = true; burst(api.view.w / 2, api.view.h / 2); }
      if (t.shake < 0.2) shook = false;
      const v = api.refit(), ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      if (!bits.length) ball(ctx, v.w / 2, v.h / 2, 36, settings.accent);
      let live = false;
      for (let i = bits.length - 1; i >= 0; i--) {
        const b = bits[i];
        b.vy += 0.12; b.x += b.vx; b.y += b.vy; b.life -= 0.01;
        if (b.life <= 0) { bits.splice(i, 1); continue; }
        live = true;
        ctx.globalAlpha = b.life; ctx.fillStyle = b.c; ctx.fillRect(b.x, b.y, b.s, b.s * 0.55);
      }
      ctx.globalAlpha = 1;
      return live;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { made }; } };
  };

  factories.hustawka = function (canvas) {
    const api = mountCanvas(canvas);
    let ang = 0.25, vel = 0, drag = false;
    function bob() {
      const v = api.view, L = Math.min(v.h * 0.52, 300);
      const cx = v.w / 2, cy = 30;
      return { cx, cy, x: cx + Math.sin(ang) * L, y: cy + Math.cos(ang) * L, L };
    }
    const input = api.bind({
      down() { drag = true; api.play('pluck', 0.5); },
      move(p) { const b = bob(); ang = clamp(Math.atan2(p.x - b.cx, p.y - b.cy), -1.15, 1.15); vel = 0; },
      up() { drag = false; api.buzz(8); }
    });
    function frame() {
      if (!drag) { vel += -Math.sin(ang) * 0.0045; vel *= api.calm() < 1 ? 0.98 : 0.995; ang += vel; }
      const b = bob(), v = api.refit(), ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      ctx.strokeStyle = '#c9843a'; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(b.cx - 50, b.cy); ctx.lineTo(b.cx + 50, b.cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(b.cx, b.cy); ctx.lineTo(b.x, b.y); ctx.stroke();
      glossRect(ctx, b.x - 32, b.y - 12, 64, 26, 8, settings.accent);
      return drag || Math.abs(vel) > 0.001;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { ang }; } };
  };

  factories.babelki = function (canvas) {
    const api = mountCanvas(canvas);
    const bubbles = [];
    let swirl = 0;
    function seed() {
      const v = api.refit();
      if (bubbles.length) return;
      for (let i = 0; i < 16; i++) bubbles.push({ x: rand(v.w * 0.25, v.w * 0.75), y: rand(v.h * 0.3, v.h * 0.85), r: rand(8, 20), vy: rand(-0.7, -0.25) });
    }
    seed();
    const input = api.bind({
      down() { api.play('drop', 0.6); },
      move(p, prev) { swirl = clamp((p.x - prev.x) * 0.25, -8, 8); }
    });
    function frame() {
      seed();
      const t = tiltVec();
      swirl = swirl * 0.94 + t.x * 2;
      const v = api.view, ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      ctx.fillStyle = 'rgba(80,180,200,.18)';
      roundRect(ctx, v.w * 0.14, v.h * 0.12, v.w * 0.72, v.h * 0.78, 30); ctx.fill();
      for (const b of bubbles) {
        b.y += b.vy; b.x += swirl * 0.2;
        if (b.y < v.h * 0.16) { b.y = v.h * 0.84; b.x = rand(v.w * 0.25, v.w * 0.75); }
        ball(ctx, b.x, b.y, b.r, '#d7f6ff');
      }
      return true;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { swirl: Math.abs(swirl) }; } };
  };

  factories.drut = function (canvas) {
    const api = mountCanvas(canvas);
    const pts = [];
    let drag = -1, bend = 0;
    function seed() {
      const v = api.refit();
      if (pts.length && Math.abs((pts._w || 0) - v.w) < 12) return;
      pts.length = 0; pts._w = v.w;
      const n = 12;
      for (let i = 0; i < n; i++) {
        const x = 24 + i * (v.w - 48) / (n - 1);
        pts.push({ x, y: v.h * 0.5, ox: x, oy: v.h * 0.5, vx: 0, vy: 0 });
      }
    }
    seed();
    const input = api.bind({
      down(p) {
        drag = 0; let bd = 1e9;
        pts.forEach((q, i) => { const d = Math.hypot(q.x - p.x, q.y - p.y); if (d < bd) { bd = d; drag = i; } });
        api.play('pluck', 0.7);
      },
      move(p) { if (drag >= 0) { pts[drag].x = p.x; pts[drag].y = p.y; bend += 1; } },
      up() { drag = -1; api.buzz(6); }
    });
    function frame() {
      seed();
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (i === drag) continue;
        p.vx += (p.ox - p.x) * 0.05; p.vy += (p.oy - p.y) * 0.05;
        if (i > 0) { p.vx += (pts[i - 1].x - p.x) * 0.08; p.vy += (pts[i - 1].y - p.y) * 0.08; }
        if (i < pts.length - 1) { p.vx += (pts[i + 1].x - p.x) * 0.08; p.vy += (pts[i + 1].y - p.y) * 0.08; }
        p.vx *= 0.84; p.vy *= 0.84; p.x += p.vx; p.y += p.vy;
      }
      const v = api.view, ctx = v.ctx;
      backdrop(ctx, v.w, v.h);
      ctx.strokeStyle = '#e6b15a'; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.beginPath();
      pts.forEach((p, i) => { if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y); });
      ctx.stroke();
      for (const p of pts) ball(ctx, p.x, p.y, 6, '#ffb25a');
      return drag >= 0;
    }
    return { frame, destroy() { api.kill(); }, probe() { return { bend }; } };
  };

  function fold(s) {
    return String(s || '').toLowerCase().replace(/ł/g, 'l').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  function toyById(id) { return TOYS.find((t) => t.id === id); }
  function isFav(id) { return settings.favs.indexOf(id) >= 0; }

  function drawIcon(id, canvas, phase) {
    const ctx = canvas.getContext('2d');
    const s = canvas.width;
    const toy = toyById(id);
    const pal = {
      Światło: '#5cc8ff', Miękkie: '#c084fc', Maszyny: '#ffb25a', Dźwięk: '#ff5d6a', Pył: '#3ddc97', Ślad: '#ff8a3a'
    };
    const color = pal[toy.cat] || settings.accent;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    const g = ctx.createLinearGradient(0, 0, s, s);
    g.addColorStop(0, shade(color, 0.25));
    g.addColorStop(1, settings.theme === 'light' ? '#efe4d4' : '#140e1c');
    ctx.fillStyle = g;
    roundRect(ctx, 2, 2, s - 4, s - 4, s * 0.22);
    ctx.fill();
    const bob = Math.sin((phase || 0) * 2.2 + id.length) * s * 0.04;
    ctx.save();
    ctx.translate(0, bob);
    ctx.strokeStyle = 'rgba(255,255,255,.9)';
    ctx.fillStyle = 'rgba(255,255,255,.92)';
    ctx.lineWidth = Math.max(2, s * 0.035);
    ctx.lineCap = 'round';
    const kind = toy.cat;
    if (kind === 'Światło') {
      ball(ctx, s * 0.5, s * 0.48, s * 0.2, color);
      ctx.beginPath(); ctx.arc(s * 0.5, s * 0.48, s * 0.3, 0.4, 1.4); ctx.stroke();
    } else if (kind === 'Miękkie') {
      ctx.beginPath(); ctx.ellipse(s * 0.5, s * 0.52, s * 0.28, s * 0.2, 0.2, 0, 7); ctx.fillStyle = color; ctx.fill();
    } else if (kind === 'Maszyny') {
      ball(ctx, s * 0.4, s * 0.5, s * 0.16, color);
      ball(ctx, s * 0.62, s * 0.4, s * 0.1, '#ff5d3a');
    } else if (kind === 'Dźwięk') {
      ctx.beginPath();
      ctx.moveTo(s * 0.18, s * 0.62); ctx.quadraticCurveTo(s * 0.5, s * 0.28 + bob, s * 0.82, s * 0.62);
      ctx.stroke();
    } else if (kind === 'Pył') {
      for (let i = 0; i < 4; i++) ball(ctx, s * (0.32 + (i % 2) * 0.28), s * (0.36 + ((i / 2) | 0) * 0.26), s * 0.08, color);
    } else {
      ctx.beginPath(); ctx.moveTo(s * 0.2, s * 0.68); ctx.quadraticCurveTo(s * 0.45, s * 0.22, s * 0.8, s * 0.55); ctx.stroke();
    }
    ctx.restore();
  }

  function paintThumbs(phase) {
    const t = phase == null ? performance.now() / 1000 : phase;
    grid.querySelectorAll('.card').forEach((card) => {
      if (card.hidden) return;
      const r = card.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight + 40) return;
      const c = card.querySelector('canvas');
      if (c) drawIcon(card.dataset.id, c, t);
    });
  }
  function thumbLoop() {
    if (home.hidden) return;
    paintThumbs();
    requestAnimationFrame(thumbLoop);
  }

  function syncFavBtn() {
    const on = isFav(currentId);
    const b = $('fav-play');
    b.textContent = on ? '★' : '☆';
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  }
  function toggleFav(id) {
    const i = settings.favs.indexOf(id);
    if (i >= 0) settings.favs.splice(i, 1); else settings.favs.push(id);
    save();
    if (id === currentId) syncFavBtn();
    applyFilter();
  }

  function applyFilter() {
    const query = fold(q.value.trim());
    grid.querySelectorAll('.card').forEach((card) => {
      const toy = toyById(card.dataset.id);
      const catOk = activeCat === 'Wszystkie' || (activeCat === 'Ulubione' ? isFav(toy.id) : toy.cat === activeCat);
      const favOk = !favOnly || isFav(toy.id);
      const text = fold(toy.name + ' ' + toy.hint + ' ' + toy.cat);
      card.hidden = !(catOk && favOk && (!query || text.includes(query)));
    });
    catsEl.querySelectorAll('.cat').forEach((b) => b.setAttribute('aria-pressed', b.dataset.cat === activeCat ? 'true' : 'false'));
  }

  function buildRecent() {
    recentEl.replaceChildren();
    settings.recent.forEach((id) => {
      const toy = toyById(id);
      if (!toy) return;
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'recent-btn';
      b.textContent = toy.name;
      b.addEventListener('click', () => enter(id));
      recentEl.appendChild(b);
    });
  }

  function buildHome() {
    catsEl.replaceChildren();
    CATS.forEach((cat) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'cat';
      b.dataset.cat = cat;
      b.textContent = cat;
      b.addEventListener('click', () => { activeCat = cat; applyFilter(); });
      catsEl.appendChild(b);
    });
    grid.replaceChildren();
    TOYS.forEach((toy) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'card';
      card.dataset.id = toy.id;
      card.setAttribute('aria-label', toy.name);
      const c = document.createElement('canvas');
      c.width = 144; c.height = 144;
      const star = document.createElement('button');
      star.type = 'button';
      star.className = 'star' + (isFav(toy.id) ? ' on' : '');
      star.textContent = isFav(toy.id) ? '★' : '☆';
      star.setAttribute('aria-label', 'Ulubione: ' + toy.name);
      star.addEventListener('click', (e) => { e.stopPropagation(); e.preventDefault(); toggleFav(toy.id); star.textContent = isFav(toy.id) ? '★' : '☆'; star.classList.toggle('on', isFav(toy.id)); });
      const lab = document.createElement('span');
      lab.textContent = toy.name;
      card.append(c, lab, star);
      card.addEventListener('click', () => enter(toy.id));
      grid.appendChild(card);
    });
    applyFilter();
    buildRecent();
    paintThumbs(0);
  }

  function syncSheet() {
    $('opt-sound').checked = settings.sound;
    $('opt-vol').value = String(Math.round(settings.volume * 100));
    $('opt-haptic').checked = settings.haptics;
    $('opt-sensors').checked = settings.sensors;
    $('opt-mic').checked = settings.mic;
    document.querySelectorAll('[data-quality]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.quality === settings.quality ? 'true' : 'false'));
    document.querySelectorAll('[data-motion]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.motion === settings.motion ? 'true' : 'false'));
    document.querySelectorAll('[data-theme]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.theme === settings.theme ? 'true' : 'false'));
    document.querySelectorAll('.swatch').forEach((b) => b.setAttribute('aria-pressed', b.dataset.accent === settings.accent ? 'true' : 'false'));
    syncSensorUi();
    applyTheme();
  }
  function openSheet() {
    syncSheet();
    if (sheet.showModal) sheet.showModal(); else sheet.setAttribute('open', '');
  }
  function closeSheet() {
    if (sheet.close) sheet.close();
    sheet.removeAttribute('open');
    if (playing) wake();
  }

  const sw = $('swatches');
  ACCENTS.forEach((color) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'swatch';
    b.style.background = color;
    b.dataset.accent = color;
    b.setAttribute('aria-label', 'Akcent');
    b.addEventListener('click', () => { settings.accent = color; save(); syncSheet(); paintThumbs(); if (playing) poke(); });
    sw.appendChild(b);
  });

  $('btn-settings').addEventListener('click', openSheet);
  $('btn-close').addEventListener('click', closeSheet);
  sheet.addEventListener('cancel', (e) => { e.preventDefault(); closeSheet(); });
  $('back').addEventListener('click', leave);
  $('fav-play').addEventListener('click', () => { if (currentId) toggleFav(currentId); });
  $('btn-favfilter').addEventListener('click', () => {
    favOnly = !favOnly;
    $('btn-favfilter').setAttribute('aria-pressed', favOnly ? 'true' : 'false');
    applyFilter();
  });
  q.addEventListener('input', applyFilter);
  $('opt-sound').addEventListener('change', (e) => { settings.sound = e.target.checked; save(); ensureAudio(); if (settings.sound) playSound('click', 1); });
  $('opt-vol').addEventListener('input', (e) => { settings.volume = Number(e.target.value) / 100; save(); ensureAudio(); });
  $('opt-haptic').addEventListener('change', (e) => { settings.haptics = e.target.checked; save(); if (settings.haptics) buzz(16); });
  $('opt-sensors').addEventListener('change', (e) => {
    if (e.target.checked && !settings.sensorsGranted && (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function')) {
      requestSensors();
    } else {
      settings.sensors = e.target.checked;
      if (settings.sensors) listenSensors();
      save(); syncSensorUi();
    }
  });
  function sensorTap() { ensureAudio(); requestSensors(); }
  $('btn-sensors').addEventListener('click', sensorTap);
  $('btn-sensors-sheet').addEventListener('click', sensorTap);
  $('opt-mic').addEventListener('change', (e) => {
    settings.mic = e.target.checked;
    save();
    if (!settings.mic) stopMic();
    else if (currentId === 'balon' || currentId === 'plomien') ensureMic();
  });
  document.querySelectorAll('[data-quality]').forEach((b) => b.addEventListener('click', () => { settings.quality = b.dataset.quality; save(); syncSheet(); if (playing) poke(); }));
  document.querySelectorAll('[data-motion]').forEach((b) => b.addEventListener('click', () => { settings.motion = b.dataset.motion; save(); syncSheet(); if (playing) wake(); }));
  document.querySelectorAll('[data-theme]').forEach((b) => b.addEventListener('click', () => { settings.theme = b.dataset.theme; save(); syncSheet(); paintThumbs(); if (playing) poke(); }));
  $('btn-reset').addEventListener('click', () => {
    settings.favs = []; settings.recent = [];
    save(); buildHome(); syncSheet();
  });

  document.addEventListener('gesturestart', (e) => e.preventDefault());
  world.addEventListener('touchmove', (e) => { if (e.cancelable) e.preventDefault(); }, { passive: false });
  window.addEventListener('resize', fitApp);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', fitApp);
  fitApp();
  applyTheme();
  if (settings.sensorsGranted && settings.sensors) listenSensors();
  syncSensorUi();
  buildHome();
  thumbLoop();
  syncSheet();

  const missing = TOYS.filter((t) => typeof factories[t.id] !== 'function').map((t) => t.id);
  if (missing.length) console.error('Brak zabawek', missing);

  window.__puddy = {
    ids: TOYS.map((t) => t.id),
    open: enter,
    leave,
    probe() { return current && current.probe ? current.probe() : null; },
    get id() { return currentId; },
    missing,
    setTilt(x, y) { sense.gx = x; sense.gy = y; settings.sensors = true; poke(); },
    setHeading(h) { sense.heading = h; settings.sensors = true; poke(); },
    setMic(v) { sense.mic = v; settings.mic = true; poke(); },
    setShake() { sense.shake = 1; settings.sensors = true; poke(); }
  };
})();
