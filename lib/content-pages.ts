export type ContentCard = {
  title: string;
  body?: string;
  items?: string[];
  href?: string;
  image?: string;
  imageAlt?: string;
};

export type ContentPage = {
  slug: string;
  title: string;
  navLabel?: string;
  eyebrow: string;
  hero: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  sections: Array<{
    eyebrow: string;
    title: string;
    body?: string;
    cards?: ContentCard[];
  }>;
};

const media = {
  heroWorkshop: "https://neoone.com.my/wp-content/uploads/2025/10/Learning-and-development-consultant.jpg",
  team: "https://neoone.com.my/wp-content/uploads/2026/06/Our-Team-scaled.png",
  people: "https://neoone.com.my/wp-content/uploads/2025/10/Our-Team-neOOne-Associates-e1763521162129.jpg",
  associates: "https://neoone.com.my/wp-content/uploads/2025/10/Our-Associates-neOOne-profile-e1763521238153.jpg",
  yasmin: "https://neoone.com.my/wp-content/uploads/2025/10/Yasmin-yellow-circle.png",
  juara: "https://neoone.com.my/wp-content/uploads/2025/10/Juara-yellow-circle.png",
  transformation: "https://neoone.com.my/wp-content/uploads/2025/10/1.png",
  innovation: "https://neoone.com.my/wp-content/uploads/2025/10/2.png",
  learning: "https://neoone.com.my/wp-content/uploads/2025/10/3.png",
  programs: "https://neoone.com.my/wp-content/uploads/2026/01/THEORY-METHODOLOGY-SERIES.jpg",
  learningPass: "https://neoone.com.my/wp-content/uploads/2026/01/Learning-Pass-2.jpg",
  publicProgram: "https://neoone.com.my/wp-content/uploads/2020/06/IMG_0455.jpg",
  apple: "https://neoone.com.my/wp-content/uploads/2026/02/Hello-Aids-and-Props-For-Productive-Learning-Enggagement.jpg",
  hotHero: "https://neoone.com.my/wp-content/uploads/2026/06/Hero-1-picture-HOT.webp",
  hotLogo: "https://neoone.com.my/wp-content/uploads/2026/06/Style-1-logo-hot-cropped.png",
  sustainability: "https://neoone.com.my/wp-content/uploads/2026/01/The-neOOne-Way-Growth-Model-updated.png",
  contact: "https://neoone.com.my/wp-content/uploads/2025/07/Contact-Us-Neoone-Associate.png",
  beDoHave: "https://neoone.com.my/wp-content/uploads/2026/01/Be-Do-Have-Why.png",
  trainerCred: "https://neoone.com.my/wp-content/uploads/2025/12/Trainer-Credibility-Index-Poster-6p.png",
  calp: "https://neoone.com.my/wp-content/uploads/2026/02/CERTIFICATE-IN-ACCELERATED-LEARNING-PRACTICE-CALP.png",
  virtualLearning: "https://neoone.com.my/wp-content/uploads/2026/02/Certified-Virtual-Learning-Facilitation.png",
  gamesTrainer: "https://neoone.com.my/wp-content/uploads/2026/02/Games-Trainer-Play.jpg",
};

export const contentPages: ContentPage[] = [
  {
    slug: "about",
    title: "About",
    navLabel: "About",
    eyebrow: "Company story",
    hero: "A Malaysian growth consultancy built on learning, innovation and impact.",
    summary:
      "Founded in 2010 by Yasmin Ahmad Mazlani and Rosihan Juara Baharuddin, neOOne has evolved from a learning and development practice into a Malaysian growth consultancy.",
    image: media.team,
    imageAlt: "neOOne team",
    sections: [
      {
        eyebrow: "Company story",
        title: "Empowering growth. Unleashing potential.",
        body:
          "Growth at neOOne is about people, organisations and communities building the capability to move forward with clarity. The practice connects leadership, innovation and learning so change becomes usable in real work.",
      },
      {
        eyebrow: "Pillars of impact",
        title: "How neOOne organises its work.",
        cards: [
          {
            title: "Transformation and change",
            body: "Guiding teams through shifts in leadership, culture, structure and operating rhythm.",
            href: "/transformation-and-change",
            image: media.transformation,
          },
          {
            title: "Entrepreneurship and innovation",
            body: "Helping emerging teams test ideas, build ventures and make innovation more disciplined.",
            href: "/entrepreneurship-innovation",
            image: media.innovation,
          },
          {
            title: "Learning and development",
            body: "Designing capability journeys for facilitators, leaders and future-ready teams.",
            href: "/learning-development",
            image: media.learning,
          },
        ],
      },
      {
        eyebrow: "Working principles",
        title: "Commitment, passion, trust, innovation and abundance.",
        body:
          "The live site positions neOOne around doing what it takes with integrity, putting heart into the work, earning confidence through reliability, designing innovative solutions and growing by adding value to others.",
      },
    ],
  },
  {
    slug: "vision-mission",
    title: "Vision and Mission",
    eyebrow: "Direction",
    hero: "Redefining growth as the empowerment of people and progress of communities.",
    summary:
      "neOOne’s direction frames growth as capability, contribution and progress rather than financial gain alone.",
    image: media.sustainability,
    imageAlt: "The neOOne growth model",
    sections: [
      {
        eyebrow: "Direction",
        title: "Vision and mission",
        cards: [
          {
            title: "Vision",
            body:
              "To become Southeast Asia's premier growth consulting firm, redefining growth not merely as profit, but as the empowerment of people and the progress of communities.",
          },
          {
            title: "Mission",
            body:
              "To empower leaders and organisations through transformational strategies, entrepreneurial innovation and learning experiences that drive sustainable and inclusive growth.",
          },
        ],
      },
      {
        eyebrow: "Values",
        title: "The working principles behind neOOne.",
        cards: [
          { title: "Commitment", body: "Do whatever it takes, with integrity, to deliver services with excellence." },
          { title: "Innovation", body: "Design solutions that enable better results and performance." },
          { title: "Passion", body: "Put heart and soul into every service offered." },
          { title: "Trustworthiness", body: "Earn trust and confidence through reliability and dependability." },
          { title: "Abundance", body: "Grow by giving and adding value to others." },
        ],
      },
    ],
  },
  {
    slug: "people",
    title: "Our People",
    eyebrow: "Leadership",
    hero: "The people behind neOOne's learning and growth work.",
    summary:
      "neOOne is led by practitioners who connect facilitation, strategy, learning design and innovation practice.",
    image: media.people,
    imageAlt: "neOOne people",
    sections: [
      {
        eyebrow: "Leadership",
        title: "Founders and growth practitioners",
        cards: [
          {
            title: "Yasmin Ahmad Mazlani (TzeYasmin)",
            body:
              "Co-Founder and Managing Director of neOOne Associates and CEO of Lakar Technologies. Yasmin is recognised for transformative work in learning, innovation and organisational strategy across corporate, government and international sectors.",
            image: media.yasmin,
            imageAlt: "Yasmin Ahmad Mazlani",
          },
          {
            title: "Rosihan Juara Baharuddin",
            body:
              "Co-Founder. Rosihan supports neOOne's growth and facilitation work across learning, development and innovation programmes for organisations and communities.",
            image: media.juara,
            imageAlt: "Rosihan Juara Baharuddin",
          },
        ],
      },
      {
        eyebrow: "Associates",
        title: "A wider practice built around facilitation, design and delivery.",
        cards: [
          { title: "Team profile", body: "Core team and associates supporting programme delivery.", image: media.associates },
          { title: "Practice focus", body: "Learning design, strategy facilitation, innovation practice and community programmes." },
        ],
      },
    ],
  },
  {
    slug: "partners-clients",
    title: "Partners and Clients",
    eyebrow: "Collaboration",
    hero: "Collaborating with organisations that invest in growth that lasts.",
    summary:
      "The work is shaped for teams and partners that treat capability as a strategic investment, not a one-off event.",
    image: media.associates,
    imageAlt: "neOOne associates",
    sections: [
      {
        eyebrow: "Collaborating for impact",
        title: "Trusted by teams that believe capability is strategic.",
        body:
          "neOOne works across organisations, public programmes and partner ecosystems where learning must translate into useful behaviour and measurable follow-through.",
      },
      {
        eyebrow: "Client and partner signals",
        title: "What the collaboration model supports.",
        cards: [
          { title: "Corporate teams", body: "Leadership, change and team capability programmes." },
          { title: "Public sector and ecosystem partners", body: "Innovation, entrepreneurship and community capability." },
          { title: "Learning communities", body: "Trainer, facilitator and professional development pathways." },
        ],
      },
      {
        eyebrow: "Past projects",
        title: "Capability work across Malaysia and beyond.",
        body:
          "The live site describes past work across corporate capacity-building, national-level social innovation, leadership development and ecosystem programmes.",
      },
    ],
  },
  {
    slug: "solutions",
    title: "Solutions",
    navLabel: "Solutions",
    eyebrow: "Solution pillars",
    hero: "Three connected pillars for purposeful growth.",
    summary:
      "Choose the route that fits the organisational challenge: transformation, innovation or learning capability.",
    image: media.heroWorkshop,
    imageAlt: "Learning and development consultant",
    sections: [
      {
        eyebrow: "Solution pillars",
        title: "Choose the route that fits the organisational challenge.",
        cards: [
          {
            title: "Transformation and change",
            body: "Leadership, culture, strategy and future-readiness support.",
            href: "/transformation-and-change",
            image: media.transformation,
          },
          {
            title: "Entrepreneurship and innovation",
            body: "Venture growth, design thinking, experimentation and ecosystem development.",
            href: "/entrepreneurship-innovation",
            image: media.innovation,
          },
          {
            title: "Learning and development",
            body: "Facilitation, learning design, professional development and impact measurement.",
            href: "/learning-development",
            image: media.learning,
          },
        ],
      },
    ],
  },
  {
    slug: "transformation-and-change",
    title: "Transformation and Change",
    eyebrow: "Change pillar",
    hero: "From complexity to resilient, values-driven change.",
    summary:
      "Transformation work helps organisations align leadership, culture, strategy and adoption support.",
    image: media.transformation,
    imageAlt: "Transformation and change",
    sections: [
      {
        eyebrow: "Focus areas",
        title: "What this pillar covers.",
        cards: [
          {
            title: "Focus areas",
            items: [
              "Leadership and talent development",
              "Culture and organisational transformation",
              "Change and strategy enablement",
              "Sustainability and future readiness",
            ],
          },
          {
            title: "Solutions",
            items: [
              "Leadership development journeys",
              "Executive and team coaching",
              "Culture transformation and alignment",
              "Strategic visioning and scenario planning",
              "Organisational design and change management consultancy",
              "Compassionate systems leadership and psychological safety labs",
              "Strategic narrative building and communication frameworks",
              "ESG and sustainability readiness assessments",
              "Adaptive strategy and systems thinking for change leaders",
              "Diagnostics for leadership, culture and change readiness",
            ],
          },
          {
            title: "Tools and methodologies",
            items: [
              "Ontological coaching",
              "Systems thinking and learning organisation models",
              "Compassionate systems leadership",
              "Culture transformation diagnostics",
              "Denison DOCS performance culture benchmarking",
              "Organisational Network Analysis",
              "Strategic narrative design",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "entrepreneurship-innovation",
    title: "Entrepreneurship and Innovation",
    eyebrow: "Innovation pillar",
    hero: "From ideas to scalable impact.",
    summary:
      "Innovation work becomes practical when teams learn how to frame problems, test ideas and build ventures with discipline.",
    image: media.innovation,
    imageAlt: "Entrepreneurship and innovation",
    sections: [
      {
        eyebrow: "Focus areas",
        title: "Where innovation work becomes practical.",
        cards: [
          {
            title: "Focus areas",
            items: [
              "Venture and start-up growth",
              "Technology and digital innovation",
              "Inclusive and social innovation",
              "Ecosystem and policy development",
            ],
          },
          {
            title: "Solutions",
            items: [
              "Venture acceleration and business model innovation labs",
              "Design thinking and innovation sprints",
              "Start-up coaching and venture building programmes",
              "Corporate innovation and intrapreneurship programmes",
              "Impact and inclusive entrepreneurship bootcamps",
              "Ecosystem development and policy design facilitation",
              "Innovation readiness diagnostics",
              "Green tech and AI for innovation masterclasses",
              "Pitch development and investor readiness workshops",
            ],
          },
          {
            title: "Tools and methodologies",
            items: [
              "Design thinking and LUMA innovation frameworks",
              "Disciplined entrepreneurship",
              "Lean startup and business model canvas",
              "Theory of change and impact measurement",
              "Ecosystem mapping tools",
              "Corporate innovation and intrapreneurship playbooks",
              "Funding and investor readiness frameworks",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "learning-development",
    title: "Learning and Development",
    eyebrow: "Learning pillar",
    hero: "Learning design for facilitators, leaders and future-ready teams.",
    summary:
      "Capability work for people who teach, lead and learn, with practical methods that make sessions easier to apply.",
    image: media.learning,
    imageAlt: "Learning and development",
    sections: [
      {
        eyebrow: "Focus areas",
        title: "Capability work for people who teach, lead and learn.",
        cards: [
          {
            title: "Focus areas",
            items: [
              "Learning design and delivery",
              "Professional development and mastery",
              "Credentials and future skills",
              "Communities and ecosystems",
            ],
          },
          {
            title: "Solutions",
            items: [
              "Certified learning and facilitation programmes",
              "Learning design consultancy",
              "Trainer, coach and facilitator development pathways",
              "Digital learning strategy and future skills mapping",
              "Learning impact and ROI frameworks",
              "Learning conferences, summits and peer learning communities",
              "Community of practice development",
              "Future of learning research and diagnostics",
              "Learning analytics and capability benchmarking",
            ],
          },
          {
            title: "Tools and methodologies",
            items: [
              "Accelerated learning",
              "Experiential learning cycle",
              "Game-based learning",
              "Graphic facilitation and generative scribing",
              "Learning impact and ROI frameworks",
              "AI-enhanced learning design",
              "Neurodiversity and inclusive learning design",
              "Inclusive learning design",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "impact",
    title: "Sustainability and Impact",
    navLabel: "Impact",
    eyebrow: "Commitment",
    hero: "Driving growth for good through responsible practices.",
    summary:
      "Sustainability is built into how programmes are designed, delivered and followed through with partners.",
    image: media.sustainability,
    imageAlt: "The neOOne growth model",
    sections: [
      {
        eyebrow: "Commitment",
        title: "A sustainable future is designed into the work.",
        cards: [
          {
            title: "Environmental stewardship",
            body:
              "A digital-first and paperless model, hybrid learning options and responsible supplier choices reduce operational footprint.",
            image: media.sustainability,
          },
          {
            title: "Social responsibility",
            body: "Mentorship and inclusive learning initiatives equip youth and women with future-ready skills.",
          },
          {
            title: "Partnership",
            body:
              "Sustainability work is strengthened through collaboration across organisations, communities and ecosystems.",
          },
        ],
      },
      {
        eyebrow: "SDG alignment",
        title: "Focus areas from the public sustainability page.",
        cards: [
          { title: "Quality education", body: "Learning access, facilitation and future skill pathways." },
          { title: "Decent work and growth", body: "Capability building for employability, enterprise and leadership." },
          { title: "Partnerships", body: "Shared programmes with communities and organisations." },
        ],
      },
      {
        eyebrow: "Policy documents",
        title: "Live-site sustainability references.",
        cards: [
          { title: "Environmental and Sustainability Policy", body: "Policy direction aligned with ISO 14001 and ISO 14064 principles." },
          { title: "Corporate Sustainability Commitment Statement", body: "Commitment to responsible practice and continual improvement." },
          { title: "Sustainability Action Plan 2025-2030", body: "Action plan for waste reduction, carbon awareness and measurable environmental goals." },
          { title: "Sustainability Practices and Impact Log", body: "Impact tracking for sustainability practices and community work." },
        ],
      },
    ],
  },
  {
    slug: "programs",
    title: "Programs",
    navLabel: "Programs",
    eyebrow: "Programme catalogue",
    hero: "Programmes and certifications for practical learning mastery.",
    summary:
      "Public and custom programme groups for facilitation, accelerated learning, virtual learning and trainer development.",
    image: media.programs,
    imageAlt: "Theory and methodology programme series",
    sections: [
      {
        eyebrow: "Programme catalogue",
        title: "Current public programme groups.",
        cards: [
          {
            title: "Learning Pass",
            body: "Four course theory and methodology selections plus a trainer's toolkit.",
            href: "/learning-pass",
            image: media.learningPass,
          },
          {
            title: "A.P.P.L.E Products",
            body: "Learning aids and facilitation props for productive learning engagement, including Ti Yan and Alfa tools.",
            href: "/apple-products",
            image: media.apple,
          },
          {
            title: "Theory and Methodology Series",
            body: "Accelerated learning, game-based learning, session design, graphic facilitation and more.",
            href: "/public-program",
            image: media.programs,
          },
          {
            title: "Certificate in Accelerated Learning Practice",
            body: "A certification pathway for facilitation and learning design mastery.",
            href: "/public-program",
            image: media.calp,
          },
          {
            title: "Certified Virtual Learning Facilitation",
            body: "A pathway for effective virtual and hybrid facilitation.",
            href: "/public-program",
            image: media.virtualLearning,
          },
        ],
      },
      {
        eyebrow: "University collaboration",
        title: "Co-developed and quality-assured with DRB-HICOM University.",
        body:
          "The live site states that neOOne serves as Lead Curriculum Designers and Assessors for nationally and professionally recognised certifications including Game-Based Learning, Virtual Learning Facilitation, Accelerated Learning, Design Thinking, Enterprise Coaching and ESG Transformation.",
      },
    ],
  },
  {
    slug: "public-program",
    title: "Public Program",
    eyebrow: "Public programme",
    hero: "Public programme registration and enquiry.",
    summary:
      "Explore programme categories first. Registration details can be finalised after the participant route is confirmed.",
    image: media.publicProgram,
    imageAlt: "Public programme",
    sections: [
      {
        eyebrow: "Available programme categories",
        title: "Choose the right route before registration is connected.",
        cards: [
          { title: "Trainer's Toolkit", body: "Half-day practical tools for facilitators and trainers." },
          {
            title: "Theory and Methodology",
            body: "Full-day methodology programmes including GBL, SDC, Graphic Recording, Design Thinking and Doodlenotes.",
          },
          {
            title: "GAMES Trainer's Play",
            body: "A certification-style programme for game-based and learner-centred facilitation.",
            image: media.gamesTrainer,
          },
          {
            title: "AI-Powered Instructional Design",
            body: "A future-facing programme for learning design with AI support.",
          },
          {
            title: "A.P.P.L.E Product Packages",
            body: "Ti Yan Cards, guides, user manuals, booster packs and Alfa Cards package options.",
          },
          { title: "Mentoring and Coaching", body: "Discovery call and premium mentoring options." },
        ],
      },
      {
        eyebrow: "Available dates and routes",
        title: "Live-site programme routes currently represented.",
        cards: [
          { title: "AI-Powered Instructional Design", body: "Live site lists 1st-2nd August as the available date." },
          { title: "GAMES Trainer's Play", body: "Live site lists 4 July 2026 with limited availability." },
          { title: "HOT Project contribution", body: "HOT voucher and collective contribution options are represented as enquiry routes." },
          { title: "Certification Program", body: "Certificate in Accelerated Learning Practice and Certified Virtual Learning Facilitator." },
        ],
      },
    ],
  },
  {
    slug: "learning-pass",
    title: "Learning Pass",
    eyebrow: "Learning pass",
    hero: "Build your own four-course learning pass.",
    summary:
      "A flexible learning pathway for trainers and facilitators who want to combine theory, methodology and practical tools.",
    image: media.learningPass,
    imageAlt: "Learning Pass",
    sections: [
      {
        eyebrow: "Course choices",
        title: "Theory and methodology options.",
        cards: [
          {
            title: "Course menu",
            items: [
              "Hello Accelerated Learning",
              "Hello Game Based Learning",
              "Hello Session Design Canvas",
              "Hello Graphic Recording",
              "Hello Design Thinking",
              "Hello Graphic Facilitation",
              "Hello Doodlenotes",
              "Hello Debriefing",
              "Hello Experiential Learning",
              "Hello Reflective Practice",
              "Hello APPLE",
              "Hello V.I.B.E.S",
            ],
          },
        ],
      },
      {
        eyebrow: "Learning pass format",
        title: "Four course selections plus trainer toolkit.",
        body:
          "The live page positions Learning Pass as a bundle where participants select four theory and methodology courses. This rebuild keeps the selection as an enquiry flow until the registration system is confirmed.",
      },
    ],
  },
  {
    slug: "apple-products",
    title: "A.P.P.L.E Products",
    navLabel: "A.P.P.L.E",
    eyebrow: "Learning tools",
    hero: "Aids and props for productive learning engagement.",
    summary:
      "A.P.P.L.E brings together facilitation tools designed to spark reflection, creativity, language play and meaningful human connection in learning spaces.",
    image: media.apple,
    imageAlt: "A.P.P.L.E learning tools",
    sections: [
      {
        eyebrow: "Product family",
        title: "Learning tools for trainers, facilitators and reflective teams.",
        cards: [
          {
            title: "Ti Yan Cards Version 4",
            body:
              "A card-based facilitation tool for reflection, discussion prompts, storytelling and participant engagement.",
            image: media.apple,
          },
          {
            title: "Alfa Cards",
            body:
              "A companion deck for trainers who need quick prompts, energisers and practical ways to unlock dialogue.",
          },
          {
            title: "A.P.P.L.E Packages",
            body:
              "Package options combine cards, user guides, manuals, booster packs and additional facilitation materials.",
          },
        ],
      },
      {
        eyebrow: "Package options",
        title: "Current live-site package structure.",
        cards: [
          {
            title: "Package 1",
            body: "Ti Yan Cards and user guide.",
          },
          {
            title: "Package 2",
            body: "Ti Yan Cards, user guide and Ti Yan 4.0 user manual.",
          },
          {
            title: "Package 3",
            body: "Ti Yan Cards, user guide, Ti Yan 4.0 manual and booster pack.",
          },
          {
            title: "Package 4",
            body: "Ti Yan Cards, user guide, Ti Yan 4.0 manual, booster pack and Alfa Cards deck.",
          },
        ],
      },
      {
        eyebrow: "Use cases",
        title: "Designed for productive learning engagement.",
        cards: [
          { title: "Reflection", body: "Prompt deeper thinking and personal connection during debriefs." },
          { title: "Creativity", body: "Help groups move from abstract ideas into visible language and examples." },
          { title: "Human connection", body: "Create safer entry points for dialogue, storytelling and shared meaning." },
        ],
      },
    ],
  },
  {
    slug: "hot-csr-project",
    title: "HOT CSR",
    eyebrow: "Community project",
    hero: "Empower a child to think beyond their circumstances.",
    summary:
      "The HOT Project supports children through doodlenotes learning, meals, materials and partner reporting.",
    image: media.hotHero,
    imageAlt: "HOT CSR project",
    sections: [
      {
        eyebrow: "Contribution",
        title: "What a sponsor supports.",
        cards: [
          { title: "Sponsor a cohort", body: "Support a group of children through the HOT Project." },
          { title: "Included", body: "Doodlenotes learning workshop, meals and learning materials.", image: media.hotLogo },
          { title: "Reported", body: "Impact report provided to sponsors and partners." },
        ],
      },
      {
        eyebrow: "The challenge",
        title: "Every child deserves the opportunity to learn, grow and thrive.",
        body:
          "The project is shaped around learning confidence, visual thinking and support for underserved students.",
      },
      {
        eyebrow: "What is HOT?",
        title: "High Order Thinker Project.",
        body:
          "The live site describes HOT as a CSR initiative for children from B40 families and underserved communities, created to support critical thinking, creativity, communication and lifelong learning skills.",
      },
    ],
  },
  {
    slug: "blog",
    title: "Blog",
    navLabel: "Blog",
    eyebrow: "Ideas",
    hero: "Ideas on learning, trust, leadership and growth.",
    summary:
      "Short reflections from neOOne on learning models, trainer credibility and growth practice.",
    image: media.beDoHave,
    imageAlt: "BE-DO-HAVE model",
    sections: [
      {
        eyebrow: "Latest articles",
        title: "Current posts from neOOne.",
        cards: [
          {
            title: "The Power of Being: Understanding the BE-DO-HAVE Model",
            body: "A reflection on how being shapes doing, and doing shapes what people have.",
            href: "/be-do-have-model",
            image: media.beDoHave,
          },
          {
            title: "Trainer Credibility Index (6P): Building the Foundation of Trust",
            body: "A practical reflection on choosing programmes wisely and building credibility as a trainer.",
            href: "/trainer-credibility-index",
            image: media.trainerCred,
          },
        ],
      },
    ],
  },
  {
    slug: "be-do-have-model",
    title: "BE-DO-HAVE",
    eyebrow: "Article summary",
    hero: "The Power of Being: Understanding the BE-DO-HAVE Model.",
    summary:
      "At neOOne, the BE-DO-HAVE model guides how people think about results, growth and meaningful action.",
    image: media.beDoHave,
    imageAlt: "BE-DO-HAVE model",
    sections: [
      {
        eyebrow: "Article summary",
        title: "Being shapes doing, and doing shapes what people have.",
        body:
          "The model starts with identity, mindset and intention. From there, action becomes more aligned, and outcomes become a reflection of who people are practicing to become.",
      },
      {
        eyebrow: "Core argument",
        title: "Action alone is not enough.",
        body:
          "The live article explains that many people start with doing: plans, tasks and actions. neOOne frames the missing piece as being: the attitude, mindset and emotional quality behind action.",
        cards: [
          { title: "Attitude behind action", body: "Two people can do the same thing and create different outcomes because their inner state is different." },
          { title: "Human BE-ings", body: "The article invites readers to design a to-be list, not only a to-do list." },
          { title: "Power of WHY", body: "Purpose clarifies intention, intention shapes attitude and attitude drives action." },
        ],
      },
      {
        eyebrow: "Reflection corner",
        title: "Questions carried from the live article.",
        cards: [
          { title: "What result feels stuck?", body: "Name the life or work result that is not moving." },
          { title: "What do you need to become?", body: "Identify the mindset, attitude or way of being needed to move it forward." },
          { title: "How does your why connect?", body: "Use purpose as the anchor for action." },
        ],
      },
    ],
  },
  {
    slug: "trainer-credibility-index",
    title: "Trainer Credibility",
    eyebrow: "Article summary",
    hero: "Trainer Credibility Index (6P): Building the foundation of trust.",
    summary:
      "Credibility is built before a programme begins through preparation, presence, proof and professional consistency.",
    image: media.trainerCred,
    imageAlt: "Trainer Credibility Index 6P poster",
    sections: [
      {
        eyebrow: "Article summary",
        title: "Credibility is built before a programme begins.",
        body:
          "The 6P lens helps trainers and buyers look beyond activity design and consider the trust signals that make a learning experience credible.",
      },
      {
        eyebrow: "The 6P framework",
        title: "Six credibility signals for trainers.",
        cards: [
          { title: "Practitioner Experience", body: "A credible trainer brings lived experience, current context and real examples." },
          { title: "Pedigree of Learning", body: "Learning lineage, mentors, books and credited sources strengthen credibility." },
          { title: "Professional Qualification", body: "Qualifications are a start; continuous learning sustains credibility." },
          { title: "Public Persona and Presence", body: "Community contribution and industry engagement show commitment beyond the classroom." },
          { title: "Program Design", body: "Strong training is not only delivery; it is structured learning design." },
          { title: "Personality and Principles", body: "Ethical, approachable and professional behaviour makes credibility visible." },
        ],
      },
    ],
  },
  {
    slug: "contact",
    title: "Contact",
    navLabel: "Contact",
    eyebrow: "Contact",
    hero: "Tell neOOne what your team needs to grow into next.",
    summary:
      "Share the team context, the growth challenge and the outcome you want to create.",
    image: media.contact,
    imageAlt: "Contact neOOne Associates",
    sections: [
      {
        eyebrow: "Contact details",
        title: "NEOONE Accelerated Learning Center",
        cards: [
          { title: "Training and workshops", body: "tzeyasmin@neoone.com.my" },
          { title: "General enquiries", body: "admin@neoone.com.my" },
          { title: "Phone", body: "013-4523292" },
          {
            title: "Learning centre",
            body: "14-1, Jalan Wan Kadir 1, Taman Tun Dr Ismail, 60000 Kuala Lumpur.",
          },
          { title: "Best first step", body: "Send a short brief about the audience, challenge and desired outcome." },
        ],
      },
      {
        eyebrow: "Social updates",
        title: "Follow upcoming programme updates.",
        cards: [
          { title: "Facebook", body: "Follow neOOne updates and public programme announcements." },
          { title: "Instagram", body: "Visual updates from learning events and programmes." },
          { title: "LinkedIn", body: "Professional updates, articles and capability-building work." },
          { title: "Flickr", body: "Photo archive and event galleries." },
        ],
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy",
    eyebrow: "Privacy policy",
    hero: "Privacy policy.",
    summary:
      "How personal information is collected, protected and used for enquiries and programme communication.",
    sections: [
      {
        eyebrow: "Privacy policy",
        title: "How personal information is handled.",
        cards: [
          {
            title: "Information collected",
            body:
              "The website may collect name, email address, phone number and organisation details to manage programmes, respond to enquiries and share updates with consent.",
          },
          {
            title: "Data protection",
            body:
              "Personal information is stored securely and is not shared, sold or disclosed to third parties without permission unless required by law.",
          },
          { title: "Cookies", body: "Cookies may be used to enhance browsing. Visitors can disable cookies in browser settings." },
          {
            title: "Third-party links",
            body: "The site may link to external websites. neOOne is not responsible for those privacy practices or content.",
          },
          { title: "Contact", body: "Questions about privacy can be sent to admin@neoone.com.my." },
        ],
      },
    ],
  },
];

export const pageAliases: Record<string, string> = {
  "our-solutions": "solutions",
  "our-sustainability-impact": "impact",
  "our-programs-and-certifications": "programs",
  "our-people": "people",
  "our-partners-and-clients": "partners-clients",
  "pillar-two-entrepreneurship-innovation": "entrepreneurship-innovation",
  "a-p-p-l-e-products": "apple-products",
  "a-p-p-l-e-products-2": "apple-products",
  "public-program-2": "public-program",
  "learning-pass-3": "learning-pass",
  "privacy-policy": "privacy",
  "the-power-of-being-understanding-the-be-do-have-model": "be-do-have-model",
  "trainer-credibility-index-6p-building-the-foundation-of-trust": "trainer-credibility-index",
};

export function resolveContentPage(slug: string) {
  const canonicalSlug = pageAliases[slug] ?? slug;
  return contentPages.find((page) => page.slug === canonicalSlug);
}
