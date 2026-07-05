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

   Image slots load /images/decor/pos-XX.jpg — drop the Figma exports
   in with those names (see public/images/decor/README.txt). A missing
   file just shows the black placeholder block.
   ============================================================ */
const BASE = import.meta.env.BASE_URL;
const img = (pos, ratio) => ({ pos, kind: 'img', ratio, src: `${BASE}images/decor/pos-${String(pos).padStart(2, '0')}.jpg` });

export const DECOR_SCHEDULE = [
  img(2,  'r169'), /* golf shot        — before "Product Designer."        (Figma 2264:320) */
  img(8,  'r34'),  /* portrait         — before "LinkedIn↗"                (Figma 2264:376) */
  img(9,  'r169'), /* fashion shot     — before "Mitchells & Butler."      (Figma 2264:325) */
  img(15, 'r169'), /* football poster  — before "The Sunday Times."        (Figma 2264:330) */
  img(18, 'r34'),  /* ceramics         — before "Monokoto."                (Figma 2264:378) */
  img(22, 'r169'), /* app UI           — before "National Bank Australia." (Figma 2264:337) */
  img(25, 'r34'),  /* phone UI         — before "Australian Super."        (Figma 2264:374) */
  img(27, 'r169'), /* UEFA stage       — before "Volkswagen."              (Figma 2264:341) */
  img(30, 'r34'),  /* match photo      — before "Builder.io."              (Figma 2264:344) */
  img(37, 'r169'), /* car              — before "Nespresso."               (Figma 2264:350) */
  img(38, 'r169'), /* editorial        — before "Elespacio."               (Figma 2264:382) */
  { pos: 39, kind: 'sym', sym: '\u263A\uFE0E' } /* the keeper ☺ — before "That's" */
];

export const WORD_DELAY = 46;  /* ms between words   */
export const FLASH = 108;      /* ms of green flash  */
