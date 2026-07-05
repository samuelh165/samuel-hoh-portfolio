/* ============================================================
   CONTENT — source of truth: Figma frame 2264:312
   t: "project" opens the sheet with carousel + case text
      "sheet"   opens the sheet straight to text (About me / let's talk)
      "ext"     plain external link
      "text"    non-link copy
   images: carousel slot count (0 = straight to text state)
   ============================================================ */
export const CONTENT = [
  { t: 'text',    s: 'Samuel Hoh.' },
  { t: 'text',    s: 'Product Designer.' },
  { t: 'text',    s: 'Design Systems.' },
  { t: 'sheet',   s: 'About me.',
    caseCopy: ['About copy coming soon — Samuel will drop his story in here.'] },
  { t: 'ext',     s: 'LinkedIn↗', href: 'https://www.linkedin.com/in/samuelhohuk/' },
  { t: 'project', s: 'Mitchells & Butler.',      images: 8 },
  { t: 'project', s: 'Dentsu.',                  images: 5 },
  { t: 'project', s: 'John Lewis.',              images: 6 },
  { t: 'project', s: 'The Sunday Times.',        images: 5 },
  { t: 'project', s: 'Monokoto.',                images: 4 },
  { t: 'project', s: 'Belong.',                  images: 4 },
  { t: 'project', s: 'NUA.',                     images: 0 },
  { t: 'project', s: 'AKQA.',                    images: 5 },
  { t: 'project', s: 'National Bank Australia.', images: 6 },
  { t: 'project', s: 'Australian Super.',        images: 4 },
  { t: 'project', s: 'Volkswagen.',              images: 7 },
  { t: 'project', s: 'UEFA.',                    images: 6 },
  { t: 'project', s: 'TwelfthMan.',              images: 3 },
  { t: 'project', s: 'Builder.io.',              images: 3 },
  { t: 'project', s: 'Premier League.',          images: 8 },
  { t: 'project', s: 'Tribal DDB.',              images: 5 },
  { t: 'project', s: 'Fujitsu.',                 images: 4 },
  { t: 'project', s: 'Hotels.com.',              images: 4 },
  { t: 'project', s: 'Nespresso.',               images: 5 },
  { t: 'project', s: 'Elespacio.',               images: 4 },
  { t: 'text',    s: 'That\u2019s everything, for now.' },
  { t: 'text',    s: 'If any of this resonates,' },
  { t: 'sheet',   s: 'let\u2019s talk.', underline: true,
    caseCopy: ['Contact details coming soon — email and phone will live here.'] }
];

/* Neutral placeholder case copy (Samuel to replace per project). */
export const PLACEHOLDER_CASE = [
  'Placeholder — the role. What Samuel was brought in to do, for whom, and the shape of the team around the work.',
  'Placeholder — the problem. The constraint or mess that made the project worth doing, stated plainly and without hindsight polish.',
  'Placeholder — the system. How the work was structured: tokens, components, decisions, and the trade-offs behind them.',
  'Placeholder — the outcome. What changed for the client and the people using the thing, with real numbers once they land.',
  'Placeholder — the takeaway. One honest lesson that survived the project.'
];

/* ============================================================
   DECOR_SCHEDULE — hand-placed, mirrors the Figma composition.
   `pos` = the global word index the decor sits before.
   Decor never lands inside a link phrase (build enforces it).

   Word-index map:
     0 Samuel · 2 Product · 4 Design · 6 About · 8 LinkedIn↗ ·
     9 Mitchells · 12 Dentsu. · 13 John · 15 The(Sunday) · 18 Monokoto. ·
     19 Belong. · 20 NUA. · 21 AKQA. · 22 National · 25 Australian(Super) ·
     27 Volkswagen. · 28 UEFA. · 29 TwelfthMan. · 30 Builder.io. ·
     31 Premier · 33 Tribal · 35 Fujitsu. · 36 Hotels.com. · 37 Nespresso. ·
     38 Elespacio. · 39 That's · 43 If · 48 let's

   Images live in public/images/decor/pos-XX.jpg — all 11 are in place.
   ============================================================ */
const BASE = import.meta.env.BASE_URL;
const img = (pos, ratio) => ({ pos, kind: 'img', ratio, src: `${BASE}images/decor/pos-${String(pos).padStart(2, '0')}.jpg` });

export const DECOR_SCHEDULE = [
  img(2,  'r169'), /* golf, European Tour    — before "Product Designer."        */
  img(8,  'r169'), /* woman, striped swimsuit — before "LinkedIn↗"                */
  img(9,  'r45'),  /* man with medicine ball  — before "Mitchells & Butler."      */
  img(15, 'r169'), /* Aubameyang, UEFA.com    — before "The Sunday Times."        */
  img(18, 'r45'),  /* Le Creuset pots         — before "Monokoto."                */
  img(22, 'r169'), /* Premier League app UI   — before "National Bank Australia." */
  img(25, 'r45'),  /* The Times app           — before "Australian Super."        */
  img(27, 'r169'), /* UEFA Christmas party    — before "Volkswagen."              */
  img(30, 'r45'),  /* football legends poster — before "Builder.io."              */
  img(37, 'r169'), /* Volkswagen T-Cross      — before "Nespresso."               */
  img(38, 'r169'), /* Eurovision, b&w         — before "Elespacio."               */
];

export const WORD_DELAY = 46;  /* ms between words   */
export const FLASH = 108;      /* ms of green flash  */
