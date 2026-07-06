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
    caseCopy: [
      `Principal Product Designer specialising in design systems. Currently tokenising foundations for a multi-brand, multi-mode design system. My work most recently has focused on tokenisation, multi-theming, component build, and aligning and creating foundations that support complex product environments across e-commerce, media/tech, and hospitality.`,
      `While systems and scalable foundations are my core focus, I'm equally comfortable working end-to-end, from research and ideation through to high-fidelity UI and prototyping.`
    ] },
  { t: 'ext',     s: 'LinkedIn↗', href: 'https://www.linkedin.com/in/samuelhohuk/' },

  { t: 'project', s: 'Mitchells & Butler.', images: 8, caseCopy: [
    `Mitchells & Butlers is one of the UK's largest hospitality operators, running over 1,700 pubs and restaurants across brands including Harvester, All Bar One and Toby Carvery — each with its own distinct identity, audience and digital estate, yet all built on shared infrastructure. Supporting that many brands without a unified system meant duplicated effort, inconsistent experiences and slower delivery at every turn.`,
    `I led the build of a multi-brand design system from the ground up — a solo undertaking spanning the full stack of systems work. At its core is a three-tier token architecture — global, semantic and brand — implemented in Token Studio, allowing every brand to flex its own identity from a single shared foundation without duplicating a single component. This is the hard part of multi-brand systems design, and getting it right meant one source of truth could serve many distinct brands at once.`,
    `Alongside the token architecture, I refactored the entire legacy component library, built a new icon library and established the design foundations underpinning it all. Working directly with stakeholders and engineers on the bookings value stream, I embedded the system into live product delivery and helped raise the organisation's design maturity — turning a fragmented set of brand estates into a scalable, coherent system built to grow with the business.`
  ] },

  { t: 'project', s: 'Dentsu.', images: 5, caseCopy: [
    `Dentsu Connect is the agency's platform for consistent audience intelligence across markets, built to be interoperable across global and local applications and dynamic in how it orchestrates client, agency and partner teams across campaign lifecycles. Working on and off with Dentsu over several years, I supported this ambition through ongoing documentation in Zeroheight, scoping and building components as the library evolved. Most recently, I led a full refactor of the token structure, with a heavy focus on dark mode support and new colour foundations — a significant undertaking given the scale of the library and the governance required across the business. The work involved balancing technical implementation with cross-team alignment, ensuring the new foundations could scale consistently across Dentsu Connect's many touchpoints.`
  ] },

  { t: 'project', s: 'John Lewis.', images: 6, caseCopy: [
    `John Lewis & Partners is one of the UK's most recognisable and trusted retail brands, with a large, complex digital estate spanning multiple value streams and millions of customers. I worked with them on and off over several years, contributing across a number of those streams before joining the design system team — the point at which my work moved from individual products to the infrastructure underneath all of them.`,
    `There, I executed two full rebrands and rebuilt the component library from the ground up, introducing a new tokenised system designed to scale beyond a single brand. That system was significant enough to be proposed for adoption across two other major parts of the business — Waitrose and John Lewis Money — extending its reach well past its original remit.`,
    `Drawing on experience from other design system teams, I helped implement the governance models that keep a system consistent as it grows, and advocated for Zeroheight as the documentation platform — which was subsequently brought in, with the strategy behind it shaped by my work on other systems. I also created new icon and foundation systems, working directly with engineers and product leads to roll these out site-wide, embedding the system into live delivery rather than leaving it as theory.`
  ] },

  { t: 'project', s: 'The Sunday Times.', images: 5, caseCopy: [
    `The Sunday Times is one of the UK's best-known newspapers, published by News UK alongside its sister title The Times and known for its quality journalism and large, loyal subscriber base. I joined the acquisitions team with a single focus: converting more readers to the digital product across both titles. My main project was a full redesign of the subscription checkout, streamlining a critical step in the conversion journey. It was here that I first started working seriously with design systems, contributing to the shared library and seeing first-hand how systems thinking drives commercial outcomes, not just visual consistency.`
  ] },

  { t: 'project', s: 'Monokoto.', images: 4, caseCopy: [
    `Monokoto is a London design studio with a unified practice spanning industrial, interaction and brand design, working with the likes of Marantz, Virgin Atlantic and Sony. I was contracted to lead the visual design for the Marantz and Denon website rebuild — two storied audio brands under the same parent company, each with a distinct heritage and premium positioning. My focus spanned the core commerce and content journey: product listing pages, product description pages, checkout and marketing content pages. The work called for a careful balance between the brands' high-end design language and the practical demands of a clear, usable e-commerce experience, translating a refined visual identity into templates that could scale across a large product range.`
  ] },

  { t: 'project', s: 'Belong.', images: 4, caseCopy: [
    `Belong is Telstra's low-cost, digital-first telco brand, launched in 2013 to offer simple, great-value mobile and nbn plans across Australia. This was the first dedicated design system team I joined — a short contract, but a formative one, and my first taste of systems work within an Australian team. My brief was to redesign the icon and illustration set within their design system, refining a core part of the brand's visual language. During a hackathon day, I also contributed to a proof of concept exploring personalised illustration assets, where each customer received a unique visual generated by combining different image components based on secure, individual identifiers — a playful demonstration of how a system's building blocks could be recomposed to create something bespoke at scale.`
  ] },

  { t: 'project', s: 'NUA.', images: 0, caseCopy: [
    `NUA — short for "nothing unnecessary added" — was a London protein and health brand built on a simple promise: high-quality supplements with the fewest possible ingredients and no fillers. As an early-stage start-up, they brought me in to shape the brand from the ground up and explore how best to bring it to market. I created the brand identity, guidelines and asset library, along with website mock-ups to help visualise the launch and pressure-test the direction. The challenge was distilling the brand's "nothing unnecessary" philosophy into a visual language that felt as clean and considered as the product itself — stripping things back without feeling sparse, and giving a new company a confident, coherent identity to launch behind.`
  ] },

  { t: 'project', s: 'AKQA.', images: 5, caseCopy: [
    `AKQA is a global design and innovation company, part of WPP, known for pairing technology and craft across experience, product and digital design. I contracted at their Australian studio, working across a strong roster of clients including National Australia Bank, AustralianSuper and the European Tour golf. This was a period focused on hands-on visual design, UI, UX and product design, working alongside a genuinely talented team on high-profile briefs. What made it valuable wasn't a single deliverable but the calibre of the work and the people — embedding within an established agency, contributing across sectors from banking to sport, and sharpening my craft in a fast-moving, standards-driven environment. It's a chapter I look back on as formative for the breadth and quality of experience it gave me.`
  ] },

  { t: 'project', s: 'National Bank Australia.', images: 6, caseCopy: [
    `National Australia Bank (NAB) is one of Australia's "Big Four" banks and the country's largest business bank, serving around ten million customers across personal, business and institutional banking. While at AKQA, I worked on NAB's email communications, designing a componentised email system for the bank. The task was to bring structure and consistency to a high-volume, high-stakes channel — building reusable, modular components that could be assembled into reliable, on-brand emails at scale, rather than designed from scratch each time. For an institution of NAB's size, where every customer touchpoint carries weight, a systematic approach to email meant faster production, tighter brand consistency and fewer opportunities for error across the millions of messages the bank sends.`
  ] },

  { t: 'project', s: 'Australian Super.', images: 4, caseCopy: [
    `AustralianSuper is the country's largest superannuation fund, managing the retirement savings of more than 3.6 million members — around one in seven working Australians — with over A$410 billion under management. Also at AKQA, I worked across key member journeys, from onboarding and acquisition through to the account areas members use to manage their super day to day. My focus was UX and UI across these flows, designing clear, considered experiences for moments that carry real financial weight. Superannuation is a category most people find complex and easy to defer, so the challenge was reducing friction and building confidence at every step — making it easier for members to join, engage with and manage a product that has a direct impact on their long-term financial future.`
  ] },

  { t: 'project', s: 'Volkswagen.', images: 7, caseCopy: [
    `Tribal DDB is the digital arm of DDB Worldwide, part of the Omnicom group, and was Volkswagen's long-standing global digital partner for more than two decades. Working on the Volkswagen account, I designed a chatbot to support the brand's customers — leading the UX and UI, from conversational flows and interface design through to the finished product. Volkswagen is one of the world's most recognisable automotive brands, so the work called for an experience that felt genuinely helpful and on-brand, guiding users to the right information quickly while carrying the polish expected of a marque of that stature. It was an early piece of conversational design work, balancing usability with brand voice to make a familiar customer touchpoint smarter and more responsive.`
  ] },

  { t: 'project', s: 'UEFA.', images: 6, caseCopy: [
    `UEFA is the governing body of European football, overseeing 55 member associations and running some of the world's most-watched competitions, from the Champions League and Europa League to the youth and women's tournaments. Working with TwelfthMan on UEFA's digital platforms, I delivered UX and UI across this full portfolio of competitions — spanning apps and web, promotional pages, seasonal campaigns and new concept exploration. Much of the work centred on templating and theming: building flexible, systematic layouts that could carry the distinct identity of each competition while holding together as one coherent digital ecosystem. With a global audience and a packed calendar of fixtures and campaigns, the challenge was producing visually striking, on-brand experiences at pace and at scale, across many properties and screens.`
  ] },

  { t: 'project', s: 'TwelfthMan.', images: 3, caseCopy: [
    `TwelfthMan is a London creative agency that pairs a love of sport with a passion for design, working with some of the biggest names in the game — from governing bodies and federations to elite clubs. During my time there I worked predominantly within the sports industry for clients including UEFA, AS Roma and Manchester City, delivering across a broad spread of output: publications, brand dashboards, bespoke tools, websites, apps and presentations. The variety was the defining feature of the role — moving between print and digital, between polished client-facing deliverables and the internal tools that made brands easier to manage. Working at this level of sport meant every piece had to meet a high creative bar while staying true to each club or competition's distinct identity.`
  ] },

  { t: 'project', s: 'Bylder.', images: 3, caseCopy: [
    `bylder is a brand-led communication suite built and run by TwelfthMan, drawing on the agency's decades of experience with leading sport and entertainment organisations. Every customer gets both the product and the team that knows it best. Developed and used internally at TwelfthMan to serve client work, it lets people build and manage their own on-brand presentations and decks, alongside digital asset management and related tools. I worked on the SaaS product itself, contributing to the design as the platform evolved. A key piece of this was re-skinning the existing product: helping maintain and correctly apply a new UI kit so a fresh visual language could be rolled out consistently across every detail of the interface — the same systematic, template-and-theming thinking that runs through my design systems work.`
  ] },

  { t: 'project', s: 'Premier League.', images: 8, caseCopy: [
    `The Premier League is the most-watched football league in the world, broadcast across more than 200 territories to a potential audience of billions. Contracting through the agency Studio.info, I worked on the Premier League doing UX and UI for data-driven interfaces — live scores, match fixtures and tournament events. The work centred on turning fast-moving, real-time data into interfaces that are clear and instantly readable in the moment. Live football is unforgiving as a design problem: information changes second by second, fans expect it at a glance, and every element has to hold up under the league's globally recognisable brand. My focus was designing these data-rich, dynamic experiences — standings, live match states and fixture flows — so complex information stayed legible, engaging and on-brand at pace.`
  ] },

  { t: 'project', s: 'Tribal DDB.', images: 5, caseCopy: [
    `Tribal is the digital arm of DDB Worldwide, part of the Omnicom group, and served as Volkswagen's long-standing global digital partner for over two decades. Working within the EMEA team, I contributed to the Volkswagen account across multiple projects, delivering design work spanning the brand's digital products and customer-facing experiences. Volkswagen is one of the world's most recognisable automotive brands, with a consistent, tightly governed visual language, so the work called for design that was both polished and faithful to a mature global brand system. Across the projects I worked on, the constant was maintaining that high standard of craft while adapting to the varied needs of a large, multi-market account.`
  ] },

  { t: 'project', s: 'Fujitsu.', images: 4, caseCopy: [
    `Fujitsu is one of the world's largest technology and IT services companies, a Japanese multinational operating across more than 50 countries. Working at Affaria Media, I contributed to a range of digital campaigns for Fujitsu, producing design work across the brand's marketing and communications output. Fujitsu is an established global enterprise brand with a broad, technical product and service portfolio, so the work involved translating complex offerings into clear, engaging campaign creative that held to a consistent corporate identity. Across the different campaigns, the focus was on delivering polished, on-brand digital work that communicated effectively to a professional, enterprise audience.`
  ] },

  { t: 'project', s: 'Hotels.com.', images: 4, caseCopy: [
    `Hotels.com is one of the world's largest online travel and accommodation booking platforms, operating across dozens of markets worldwide. Working at Elespacio, a digital creative agency based in Barcelona and Berlin, I produced a range of marketing creative for the brand, including display banners and campaign assets. The work sat within a high-volume, performance-driven environment, where creative has to grab attention quickly, work hard across many formats and markets, and stay tightly on-brand while driving clicks and conversions. The focus was delivering polished, adaptable advertising creative at pace, built to perform across the many placements and sizes a global travel brand demands.`
  ] },

  { t: 'project', s: 'Nespresso.', images: 5, caseCopy: [
    `Nespresso is one of the world's most recognisable premium coffee brands, part of the Nestlé group, known for its distinctive design-led identity and global retail presence. Working at Elespacio, a digital creative agency based in Barcelona and Berlin, I produced a range of marketing creative for the brand, including display banners and campaign assets. Nespresso holds a famously refined, consistent brand aesthetic, so the work called for creative that felt premium and precise while performing across many formats and markets. The focus was delivering polished, on-brand advertising assets at pace, adaptable across the placements and sizes a global brand of Nespresso's stature demands.`
  ] },

  { t: 'project', s: 'Elespacio.', images: 4, caseCopy: [
    `Elespacio is an award-winning digital creative agency based in Barcelona and Berlin, working with global brands including Nespresso, Hotels.com and Beefeater. This was where I began my career — joining as an intern and moving into a junior digital designer role, working across a range of clients and campaigns. Beyond the work itself, it was a formative first job: moving to Barcelona and seeing first-hand what good looked like at a genuinely excellent digital agency. I attended Awwwards and other design conferences, absorbing the standards and craft of the wider industry at a pivotal early stage. It gave me a strong foundation in digital design and a benchmark for quality that has shaped how I've approached every role since.`
  ] },

  { t: 'text',    s: 'That\u2019s everything, for now.' },
  { t: 'text',    s: 'If any of this resonates,' },
  { t: 'sheet',   s: 'let\u2019s talk.', underline: true,
    caseCopy: ['hellosamuelhoh@gmail.com', '+44 07493 347 802'] }
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
     27 Volkswagen. · 28 UEFA. · 29 TwelfthMan. · 30 Bylder. ·
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
  img(30, 'r45'),  /* football legends poster — before "Bylder."                 */
  img(37, 'r169'), /* Volkswagen T-Cross      — before "Nespresso."               */
  img(38, 'r169'), /* Eurovision, b&w         — before "Elespacio."               */
];

export const WORD_DELAY = 46;  /* ms between words   */
export const FLASH = 108;      /* ms of green flash  */
