import { CONTENT, DECOR_SCHEDULE, PLACEHOLDER_CASE, WORD_DELAY, FLASH } from './content.js';
import { createFace } from './face3d.js';

const indexEl   = document.getElementById('index');
const sheetWrap = document.getElementById('sheetWrap');
const sheet     = document.getElementById('sheet');
const sheetHead = document.getElementById('sheetHead');
const carousel  = document.getElementById('carousel');
const caseText  = document.getElementById('caseText');

const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* The face is the home link everywhere it appears. */
const face = createFace(goHome);
/* Marker so the face can return to its exact index position after a sheet closes. */
const faceAnchor = document.createComment('face-anchor');

function goHome() {
  if (sheetWrap.classList.contains('open')) closeSheet();
  scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' });
}

/* ================= DECOR ================= */

function makeDecorSchedule() {
  const sched = new Map();
  DECOR_SCHEDULE.forEach(d => sched.set(d.pos, d));
  return sched;
}

function mkDecor(d) {
  if (d.kind === 'img') {
    const el = document.createElement('span');
    el.className = 'inl ' + d.ratio;
    el.setAttribute('aria-hidden', 'true');
    if (d.src) {
      /* black block until the export exists; swaps in silently when it does */
      const probe = new Image();
      probe.onload = () => { el.style.backgroundImage = `url("${d.src}")`; };
      probe.src = d.src;
    }
    return el;
  }
  if (d.kind === 'icon') {
    const el = document.createElement('span');
    el.className = 'icon-glyph';
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = d.svg;
    return el;
  }
  const el = document.createElement('span');
  el.className = 'sym';
  el.setAttribute('aria-hidden', 'true');
  el.textContent = d.sym;
  return el;
}

/* ================= INDEX BUILD ================= */

function mkWord(w) {
  const s = document.createElement('span');
  s.className = 'w';
  s.textContent = w;
  return s;
}

function buildIndex() {
  indexEl.innerHTML = '';
  indexEl.appendChild(faceAnchor);
  face.moveTo(indexEl, faceAnchor.nextSibling ?? null);
  indexEl.appendChild(document.createTextNode(' '));

  const allWords = [face.slot];
  const decor = makeDecorSchedule();
  let wc = 0;

  const maybeDecor = () => {
    if (!decor.has(wc)) return;
    const el = mkDecor(decor.get(wc));
    indexEl.appendChild(el);
    allWords.push(el); /* rides the same word-by-word animation */
    indexEl.appendChild(document.createTextNode(' '));
  };

  CONTENT.forEach(item => {
    const words = item.s.split(' ');

    if (item.t === 'text') {
      words.forEach(w => {
        const span = mkWord(w);
        indexEl.appendChild(span);
        indexEl.appendChild(document.createTextNode(' '));
        allWords.push(span);
        wc++;
        maybeDecor(); /* decor can land mid-sentence in plain copy */
      });
    } else {
      const a = document.createElement('a');
      a.className = 'lnk' + (item.underline ? ' u' : '');
      a.href = item.href || '#';
      if (item.t === 'ext') {
        a.target = '_blank';
        a.rel = 'noopener';
      } else {
        a.addEventListener('click', e => { e.preventDefault(); openProject(item); });
      }
      words.forEach((w, wi) => {
        const span = mkWord(w);
        a.appendChild(span);
        if (wi < words.length - 1) a.appendChild(document.createTextNode(' '));
        allWords.push(span);
        wc++;
      });
      indexEl.appendChild(a);
      indexEl.appendChild(document.createTextNode(' '));
      maybeDecor(); /* decor only between links, never inside one */
    }
  });

  animateWords(allWords);
}

function animateWords(words, done) {
  if (REDUCED) {
    words.forEach(w => w.classList.add('on'));
    if (done) done();
    return;
  }
  let i = 0;
  const tick = () => {
    if (i >= words.length) { if (done) done(); return; }
    const w = words[i++];
    w.classList.add('on', 'loading');
    setTimeout(() => w.classList.remove('loading'), FLASH);
    setTimeout(tick, WORD_DELAY);
  };
  tick();
}

/* ================= PROJECT SHEET ================= */

function openProject(item) {
  const hasImages = (item.images || 0) > 0;

  /* head line: face + name masthead + project title */
  sheetHead.innerHTML = '';
  face.moveTo(sheetHead);
  sheetHead.appendChild(document.createTextNode(' '));
  const headWords = [face.slot];
  ('Samuel Hoh. ' + item.s).split(' ').forEach(w => {
    const s = mkWord(w);
    sheetHead.appendChild(s);
    sheetHead.appendChild(document.createTextNode(' '));
    headWords.push(s);
  });

  /* learn more / less toggle (only when there are images to collapse behind) */
  if (hasImages) {
    const learn = document.createElement('a');
    learn.className = 'learn';
    learn.href = '#';
    learn.textContent = 'Learn more.';
    learn.addEventListener('click', e => {
      e.preventDefault();
      const showing = caseText.classList.toggle('show');
      carousel.classList.toggle('hidden', showing); /* swap images out for text */
      learn.textContent = showing ? 'Learn less.' : 'Learn more.';
      learn.classList.toggle('less', showing);
    });
    const lw = document.createElement('span');
    lw.className = 'w';
    lw.appendChild(learn);
    sheetHead.appendChild(lw);
    headWords.push(lw);
  }

  /* carousel */
  carousel.innerHTML = '';
  carousel.classList.toggle('hidden', !hasImages);
  for (let i = 0; i < (item.images || 0); i++) {
    const d = document.createElement('div');
    d.className = 'slide';
    carousel.appendChild(d);
  }

  /* case text */
  const copy = item.caseCopy || PLACEHOLDER_CASE;
  caseText.innerHTML = copy.map(p => `<p>${p}</p>`).join('');
  caseText.classList.toggle('show', !hasImages); /* no images → straight to text */

  sheet.scrollTop = 0;
  sheetWrap.classList.add('open');
  document.body.style.overflow = 'hidden';
  animateWords(headWords);
}

function closeSheet() {
  sheetWrap.classList.remove('open');
  document.body.style.overflow = '';
  /* the face goes home to the top of the index */
  face.moveTo(indexEl, faceAnchor.nextSibling);
  face.slot.classList.add('on');
}

document.getElementById('backBtn').addEventListener('click', closeSheet);
document.getElementById('closeBtn').addEventListener('click', closeSheet);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && sheetWrap.classList.contains('open')) closeSheet();
});

/* go */
buildIndex();
