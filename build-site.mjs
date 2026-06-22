import { writeFileSync } from "node:fs";

const logo = "https://neoone.com.my/wp-content/uploads/2025/04/neoone-2025-logo-e1744470350864-400x181.png";
const logoSmall = "https://neoone.com.my/wp-content/uploads/2025/04/neoone-2025-logo-e1744470350864-100x45.png";
const heroTraining = "https://neoone.com.my/wp-content/uploads/2025/10/Learning-and-development-consultant-768x576.jpg";
const teamPhoto = "https://neoone.com.my/wp-content/uploads/2026/06/Our-Team-scaled.png";
const valuesImage = "https://neoone.com.my/wp-content/uploads/2020/06/VALUES-001.png";
const transformationImage = "https://neoone.com.my/wp-content/uploads/2020/06/88207382_3317132158339386_6295648240268214272_n-768x512.jpg";
const innovationImage = "https://neoone.com.my/wp-content/uploads/2025/10/Business-Model-Canvas-Template-768x512.jpg";
const learningImage = "https://neoone.com.my/wp-content/uploads/2025/10/Accelerated-learning-768x512.jpg";
const calpImage = "https://neoone.com.my/wp-content/uploads/2026/02/CERTIFICATE-IN-ACCELERATED-LEARNING-PRACTICE-CALP.png";
const learningPassImage = "https://neoone.com.my/wp-content/uploads/2026/01/Learning-Pass-2.jpg";
const hotImage = "https://neoone.com.my/wp-content/uploads/2026/06/Hero-1-picture-HOT.webp";
const thankYouImage = "https://neoone.com.my/wp-content/uploads/2026/02/Thank-You-Page-Final.png";
const sdgImage = "https://neoone.com.my/wp-content/uploads/2025/10/SDG-17-1.png";
const beDoHaveImage = "https://neoone.com.my/wp-content/uploads/2026/01/Be-Do-Have-Why.png";
const trainerIndexImage = "https://neoone.com.my/wp-content/uploads/2025/12/Trainer-Credibility-Index-Poster-6p.png";
const theoryImage = "https://neoone.com.my/wp-content/uploads/2026/01/THEORY-METHODOLOGY-SERIES.jpg";

const pages = [
  {
    slug: "home",
    file: "index.html",
    nav: "Home",
    title: "Build the people system behind real growth.",
    kicker: "Malaysia-based learning and transformation partner",
    description:
      "neOOne Associates helps organisations move from intent to capability through leadership development, innovation practice, change work and sustainability-focused learning.",
    image: heroTraining,
    imageMode: "photo",
    cta: { label: "Start a conversation", href: "contact.html" },
    sections: [
      {
        type: "split",
        kicker: "What neOOne does",
        title: "Practical transformation, designed around how people actually learn.",
        body:
          "Growth is more than numbers on a chart. It is the transformation of people, organisations and ecosystems. neOOne turns that belief into practical development support for corporate teams, entrepreneurs and partners looking for structured growth in Malaysia.",
      },
      {
        type: "cards",
        kicker: "Three pillars of impact",
        title: "Solutions that connect strategy with behaviour.",
        cards: [
          ["Change", "Transformation and change", "Guide teams through shifts in structure, culture and operating rhythm with practical adoption support.", "transformation-and-change.html"],
          ["Venture", "Entrepreneurship and innovation", "Build problem-solving confidence, commercial thinking and experiment discipline across emerging teams.", "pillar-two-entrepreneurship-innovation.html"],
          ["Capability", "Learning and development", "Design programmes that strengthen leadership, communication, collaboration and workplace readiness.", "learning-development.html"],
        ],
      },
      {
        type: "impact",
        kicker: "Sustainability and impact",
        title: "Growth for good needs operating discipline.",
        body:
          "neOOne's work is positioned around responsible practices, empowered communities and sustainable innovation. Programmes are designed to help people build useful habits, make better decisions and carry progress back into their communities.",
        items: ["Responsible practice", "Empowered communities", "Sustainable innovation"],
      },
      {
        type: "pathway",
        kicker: "For teams ready to move",
        title: "A focused path from need to programme.",
        steps: [
          ["Diagnose", "Clarify the growth challenge, audience and organisational constraints."],
          ["Design", "Shape workshops, coaching or learning journeys around the business outcome."],
          ["Deliver", "Run practical sessions with reflection, action planning and adoption support."],
          ["Measure", "Capture progress through feedback, behaviour signals and follow-up actions."],
        ],
      },
    ],
  },
  {
    slug: "about",
    file: "about.html",
    nav: "About",
    title: "A Malaysian growth consultancy built on learning, innovation and impact.",
    kicker: "About neOOne Associates",
    description:
      "Founded in 2010 by Yasmin Ahmad Mazlani and Rosihan Juara Baharuddin, neOOne began as a pioneering learning and development practice and evolved into a growth consultancy.",
    image: teamPhoto,
    imageMode: "contain",
    sections: [
      {
        type: "split",
        kicker: "Company story",
        title: "Empowering growth. Unleashing potential.",
        body:
          "neOOne helps leaders, teams and organisations unlock potential and channel it into lasting impact. Its work is grounded in commitment, fuelled by passion, guided by trustworthiness and brought to life through innovation.",
      },
      {
        type: "media",
        kicker: "Team and associates",
        title: "A people-centred consulting practice.",
        images: [
          [teamPhoto, "neOOne team", "photo"],
          ["https://neoone.com.my/wp-content/uploads/2026/05/Our-Team-pictures.jpg.jpeg", "Team practice", "photo"],
          ["https://neoone.com.my/wp-content/uploads/2026/05/Our-Associates-pictures.jpg.jpeg", "Associate network", "photo"],
        ],
      },
      {
        type: "cards",
        kicker: "Pillars of impact",
        title: "How neOOne organises its work.",
        cards: [
          ["Pillar 1", "Transformation and change", "Leadership, culture, change enablement and sustainability readiness.", "transformation-and-change.html"],
          ["Pillar 2", "Entrepreneurship and innovation", "Venture growth, digital innovation, inclusive entrepreneurship and ecosystem development.", "pillar-two-entrepreneurship-innovation.html"],
          ["Pillar 3", "Learning and development", "Learning design, facilitation, credentialing, communities and future skills.", "learning-development.html"],
        ],
      },
    ],
  },
  {
    slug: "vision-mission",
    file: "vision-mission.html",
    nav: "Vision & Mission",
    title: "Redefining growth as the empowerment of people and progress of communities.",
    kicker: "Vision and mission",
    description:
      "neOOne's purpose connects transformational strategy, entrepreneurial innovation and learning experiences that drive sustainable and inclusive growth.",
    image: valuesImage,
    imageMode: "contain",
    sections: [
      {
        type: "values",
        kicker: "Direction",
        title: "Vision and mission",
        items: [
          ["Vision", "To become Southeast Asia's premier growth consulting firm, redefining growth not merely as profit, but as the empowerment of people and the progress of communities."],
          ["Mission", "To empower leaders and organisations through transformational strategies, entrepreneurial innovation and learning experiences that drive sustainable and inclusive growth."],
        ],
      },
      {
        type: "cards",
        kicker: "Values",
        title: "The working principles behind neOOne.",
        cards: [
          ["Commitment", "Do what it takes with integrity", "Deliver services with excellence and responsibility.", ""],
          ["Innovation", "Design better solutions", "Create solutions that enable greater results and performance.", ""],
          ["Trustworthiness", "Earn confidence", "Build reliability and dependability into every engagement.", ""],
          ["Abundance", "Grow by adding value", "The more value neOOne gives to others, the more everyone grows.", ""],
        ],
      },
    ],
  },
  {
    slug: "our-people",
    file: "our-people.html",
    nav: "Our People",
    title: "The people behind neOOne's learning and growth work.",
    kicker: "Our people",
    description:
      "The public site highlights Yasmin Ahmad Mazlani and Rosihan Juara Baharuddin as the founders and driving partners behind neOOne Associates.",
    image: "https://neoone.com.my/wp-content/uploads/2025/10/Yasmin-yellow-circle.png",
    imageMode: "portrait",
    sections: [
      {
        type: "people",
        kicker: "Leadership",
        title: "Founders and growth practitioners",
        people: [
          {
            name: "Yasmin Ahmad Mazlani (TzeYasmin)",
            role: "Co-Founder & Managing Director, neOOne Associates",
            bio:
              "Yasmin is recognised for transformative work in learning, innovation and organisational strategy. She also leads Lakar Technologies, an EdTech venture exploring real-time speech-to-visual learning notes using generative AI.",
            image: "https://neoone.com.my/wp-content/uploads/2025/10/Yasmin-yellow-circle.png",
          },
          {
            name: "Rosihan Juara Baharuddin",
            role: "Co-Founder, neOOne Associates",
            bio:
              "Rosihan supports neOOne's growth and facilitation work across learning, development and innovation programmes for organisations and communities.",
            image: "https://neoone.com.my/wp-content/uploads/2025/10/Juara-yellow-circle.png",
          },
        ],
      },
    ],
  },
  {
    slug: "our-partners-and-clients",
    file: "our-partners-and-clients.html",
    nav: "Partners & Clients",
    title: "Collaborating with organisations that invest in growth that lasts.",
    kicker: "Our partners and clients",
    description:
      "neOOne works with forward-thinking organisations across Malaysia and beyond to design learning, leadership and innovation programmes.",
    image: "https://neoone.com.my/wp-content/uploads/2026/06/Malaysia_CommunityDevt_Pilot-second-image-1.jpg",
    imageMode: "photo",
    sections: [
      {
        type: "split",
        kicker: "Collaborating for impact",
        title: "Trusted by teams that believe capability is strategic.",
        body:
          "Past projects include corporate capacity-building, national-level social innovation initiatives, entrepreneurship support and leadership development programmes.",
      },
      {
        type: "logos",
        kicker: "Client and partner signals",
        title: "Selected organisations from the public site.",
        logos: [
          "https://neoone.com.my/wp-content/uploads/2025/10/BANK_ISLAM_LOGO-Photoroom.png-Photoroom-400x93.png",
          "https://neoone.com.my/wp-content/uploads/2025/10/Bank_Rakyat_BM-400x96.png",
          "https://neoone.com.my/wp-content/uploads/2025/10/Bank-Negara-Malaysia-logo.png",
          "https://neoone.com.my/wp-content/uploads/2025/10/BritishCouncil-400x115.png",
          "https://neoone.com.my/wp-content/uploads/2025/10/AVPN_academy_logo-black-min-1024x516-1-400x127.png",
          "https://neoone.com.my/wp-content/uploads/2025/10/bioeconomy-logo-circle-seo-400x400.png",
        ],
      },
    ],
  },
  {
    slug: "our-solutions",
    file: "our-solutions.html",
    nav: "Solutions",
    title: "Three connected pillars for purposeful growth.",
    kicker: "Our solutions",
    description:
      "Everything neOOne does is anchored in three pillars: transformation and change, entrepreneurship and innovation, and learning and development.",
    image: heroTraining,
    imageMode: "photo",
    sections: [
      {
        type: "cards",
        kicker: "Solution pillars",
        title: "Choose the route that fits the organisational challenge.",
        cards: [
          ["Transformation", "Transformation and change", "Build resilient organisations with adaptive leaders and values-driven cultures.", "transformation-and-change.html"],
          ["Innovation", "Entrepreneurship and innovation", "Scale ideas into real-world impact through venture acceleration and innovation design.", "pillar-two-entrepreneurship-innovation.html"],
          ["Learning", "Learning and development", "Advance the practice of learning through experiential design and digital innovation.", "learning-development.html"],
        ],
      },
    ],
  },
  {
    slug: "transformation-and-change",
    file: "transformation-and-change.html",
    nav: "Transformation",
    title: "From complexity to resilient, values-driven change.",
    kicker: "Pillar one",
    description:
      "Transformation and Change focuses on leadership, talent development, culture, strategy enablement, sustainability and future readiness.",
    image: transformationImage,
    imageMode: "photo",
    sections: [
      {
        type: "lists",
        kicker: "Focus areas",
        title: "What this pillar covers.",
        lists: [
          ["Focus areas", ["Leadership and talent development", "Culture and organisational transformation", "Change and strategy enablement", "Sustainability and future readiness"]],
          ["Solutions", ["Leadership development journeys", "Executive and team coaching", "Culture transformation and alignment", "Strategic visioning and scenario planning", "ESG and sustainability readiness assessments"]],
          ["Tools and methodologies", ["Ontological coaching", "Systems thinking and learning organisation models", "Compassionate systems leadership", "Culture transformation diagnostics", "Strategic narrative design"]],
        ],
      },
    ],
  },
  {
    slug: "pillar-two-entrepreneurship-innovation",
    file: "pillar-two-entrepreneurship-innovation.html",
    nav: "Innovation",
    title: "From ideas to scalable impact.",
    kicker: "Pillar two",
    description:
      "Entrepreneurship and Innovation helps entrepreneurs, intrapreneurs and ecosystems move ideas into tested, useful and scalable action.",
    image: innovationImage,
    imageMode: "photo",
    sections: [
      {
        type: "lists",
        kicker: "Focus areas",
        title: "Where innovation work becomes practical.",
        lists: [
          ["Focus areas", ["Venture and start-up growth", "Technology and digital innovation", "Inclusive and social innovation", "Ecosystem and policy development"]],
          ["Solutions", ["Venture acceleration and business model innovation labs", "Design thinking and innovation sprints", "Corporate innovation and intrapreneurship programmes", "Pitch development and investor readiness workshops"]],
          ["Tools and methodologies", ["Design thinking and LUMA innovation frameworks", "Disciplined entrepreneurship", "Lean startup and business model canvas", "Theory of change and impact measurement", "Ecosystem mapping tools"]],
        ],
      },
    ],
  },
  {
    slug: "learning-development",
    file: "learning-development.html",
    nav: "Learning",
    title: "Learning design for facilitators, leaders and future-ready teams.",
    kicker: "Pillar three",
    description:
      "Learning and Development advances the practice of facilitation, professional mastery, credentialing, learning communities and future skills.",
    image: learningImage,
    imageMode: "photo",
    sections: [
      {
        type: "lists",
        kicker: "Focus areas",
        title: "Capability work for people who teach, lead and learn.",
        lists: [
          ["Focus areas", ["Learning design and delivery", "Professional development and mastery", "Credentials and future skills", "Communities and ecosystems"]],
          ["Solutions", ["Certified learning and facilitation programmes", "Learning design consultancy", "Trainer, coach and facilitator development pathways", "Digital learning strategy and future skills mapping", "Learning impact and ROI frameworks"]],
          ["Tools and methodologies", ["Accelerated learning", "Experiential learning cycle", "Game-based learning", "Graphic facilitation and generative scribing", "AI-enhanced learning design", "Inclusive learning design"]],
        ],
      },
    ],
  },
  {
    slug: "our-sustainability-impact",
    file: "our-sustainability-impact.html",
    nav: "Sustainability",
    title: "Driving growth for good through responsible practices.",
    kicker: "Sustainability and impact",
    description:
      "neOOne aligns its work with SDG 4, 8, 9, 13 and 17, connecting education, decent work, innovation, climate action and partnership.",
    image: sdgImage,
    imageMode: "contain",
    sections: [
      {
        type: "values",
        kicker: "Commitment",
        title: "A sustainable future is designed into the work.",
        items: [
          ["Environmental stewardship", "A digital-first and paperless model, hybrid learning options and responsible supplier choices reduce operational footprint."],
          ["Social responsibility", "Mentorship and inclusive learning initiatives equip youth and women with future-ready skills."],
          ["Partnership", "Sustainability work is strengthened through collaboration across organisations, communities and ecosystems."],
        ],
      },
      {
        type: "media",
        kicker: "SDG alignment",
        title: "Focus areas from the public sustainability page.",
        images: [
          ["https://neoone.com.my/wp-content/uploads/2025/10/SDG-4-1.png", "Quality education", "contain"],
          ["https://neoone.com.my/wp-content/uploads/2025/10/SDG-8-1.png", "Decent work and economic growth", "contain"],
          [sdgImage, "Partnerships for the goals", "contain"],
        ],
      },
    ],
  },
  {
    slug: "blog",
    file: "blog.html",
    nav: "Blog",
    title: "Ideas on learning, trust, leadership and growth.",
    kicker: "Blog",
    description:
      "The public site currently features articles on the BE-DO-HAVE model and the Trainer Credibility Index.",
    image: beDoHaveImage,
    imageMode: "contain",
    sections: [
      {
        type: "articles",
        kicker: "Latest articles",
        title: "Current posts from neOOne.",
        articles: [
          ["The Power of Being: Understanding the BE-DO-HAVE Model", "At neOOne, the BE-DO-HAVE model guides how people think about results, growth and meaningful action.", "the-power-of-being-understanding-the-be-do-have-model.html"],
          ["Trainer Credibility Index (6P): Building the Foundation of Trust", "A practical reflection on choosing programmes wisely and building credibility as a trainer.", "trainer-credibility-index-6p-building-the-foundation-of-trust.html"],
        ],
      },
    ],
  },
  {
    slug: "our-programs-and-certifications",
    file: "our-programs-and-certifications.html",
    nav: "Programs",
    title: "Programmes and certifications for practical learning mastery.",
    kicker: "Programs and certifications",
    description:
      "neOOne offers learning passes, methodology series, certification programmes and public learning experiences for trainers and facilitators.",
    image: theoryImage,
    imageMode: "poster",
    sections: [
      {
        type: "programs",
        kicker: "Programme catalogue",
        title: "Current public programme groups.",
        programs: [
          ["Learning Pass", "Including four course theory and methodology selections plus a trainer's toolkit.", "learning-pass-3.html"],
          ["Theory and Methodology Series", "Programmes covering accelerated learning, game-based learning, session design, graphic facilitation and more.", "public-program-2.html"],
          ["Certificate in Accelerated Learning Practice", "A certification pathway for facilitation and learning design mastery.", "public-program-2.html"],
          ["Certified Virtual Learning Facilitation", "A pathway for effective virtual and hybrid facilitation.", "public-program-2.html"],
        ],
      },
      {
        type: "media",
        kicker: "Programme visuals",
        title: "Selected programme materials.",
        images: [
          [learningPassImage, "Learning Pass", "poster"],
          [theoryImage, "Theory and Methodology Series", "poster"],
          [calpImage, "Certificate in Accelerated Learning Practice", "poster"],
        ],
      },
    ],
  },
  {
    slug: "public-program-2",
    file: "public-program-2.html",
    nav: "Public Program",
    title: "Public programme registration and enquiry.",
    kicker: "Public program",
    description:
      "The original page lists trainer toolkits, theory and methodology courses, certification programmes, HOT Project contributions, mentoring and coaching options.",
    image: "https://neoone.com.my/wp-content/uploads/2026/02/Games-Trainer-Play.jpg",
    imageMode: "poster",
    sections: [
      {
        type: "notice",
        kicker: "Checkout status",
        title: "Payment is intentionally not live in this static build.",
        body:
          "This page is ready for programme selection and enquiry. The payment gateway should be connected later through a secure Malaysian payment provider such as Billplz, HitPay or Stripe FPX, with server-side amount validation and verified webhooks.",
      },
      {
        type: "programs",
        kicker: "Available programme categories",
        title: "Choose the right route before checkout is connected.",
        programs: [
          ["Trainer's Toolkit", "Half-day practical tools for facilitators and trainers.", "contact.html"],
          ["Theory and Methodology", "Full-day methodology programmes including GBL, SDC, Graphic Recording, Design Thinking and Doodlenotes.", "contact.html"],
          ["GAMES Trainer's Play", "A certification-style programme for game-based and learner-centred facilitation.", "contact.html"],
          ["AI-Powered Instructional Design", "A future-facing programme for learning design with AI support.", "contact.html"],
          ["Mentoring and Coaching", "Discovery call and premium mentoring options.", "contact.html"],
        ],
      },
    ],
  },
  {
    slug: "learning-pass-3",
    file: "learning-pass-3.html",
    nav: "Learning Pass",
    title: "Build your own four-course learning pass.",
    kicker: "Learning pass",
    description:
      "The Learning Pass includes four theory and methodology course choices plus a trainer's toolkit. The public site lists the price as RM2,000.",
    image: learningPassImage,
    imageMode: "poster",
    sections: [
      {
        type: "notice",
        kicker: "Payment status",
        title: "RM2,000 learning pass checkout will need secure backend payment.",
        body:
          "This static page does not process payment. The next build phase should add server-side order creation, payment redirect, webhook verification and a Malaysian payment gateway.",
      },
      {
        type: "lists",
        kicker: "Course choices",
        title: "Theory and methodology options.",
        lists: [
          ["Course menu", ["Hello Accelerated Learning", "Hello Game Based Learning", "Hello Session Design Canvas", "Hello Graphic Recording", "Hello Design Thinking", "Hello Graphic Facilitation", "Hello Doodlenotes", "Hello Debriefing", "Hello Experiential Learning", "Hello Reflective Practice", "Hello APPLE", "Hello V.I.B.E.S"]],
        ],
      },
    ],
  },
  {
    slug: "hot-csr-project",
    file: "hot-csr-project.html",
    nav: "HOT CSR",
    title: "Empower a child to think beyond their circumstances.",
    kicker: "CSR initiative by neOOne Associates",
    description:
      "The High Order Thinker Project supports B40 and underserved students through Doodlenotes learning workshops that build critical thinking, creativity, communication and lifelong learning skills.",
    image: hotImage,
    imageMode: "photo",
    sections: [
      {
        type: "values",
        kicker: "Contribution",
        title: "What a sponsor supports.",
        items: [
          ["RM3,500", "Sponsors 20 children through the HOT Project."],
          ["Included", "Doodlenotes learning workshop, meals and learning materials."],
          ["Reported", "Impact report provided to sponsors and partners."],
        ],
      },
      {
        type: "media",
        kicker: "HOT project visuals",
        title: "Learning support for underserved students.",
        images: [
          [hotImage, "HOT project students", "photo"],
          ["https://neoone.com.my/wp-content/uploads/2026/06/Hero-Checklist.png", "Sponsor checklist", "contain"],
          ["https://neoone.com.my/wp-content/uploads/2026/06/benefit-cards.png", "Programme benefits", "contain"],
        ],
      },
      {
        type: "split",
        kicker: "The challenge",
        title: "Every child deserves the opportunity to learn, grow and thrive.",
        body:
          "Many students from B40 families and underserved communities face barriers to enrichment opportunities that develop critical thinking, creativity and confidence. HOT was created to bridge that gap.",
      },
    ],
  },
  {
    slug: "contact",
    file: "contact.html",
    nav: "Contact",
    title: "Tell neOOne what your team needs to grow into next.",
    kicker: "Contact",
    description:
      "Reach neOOne for training, workshops, general enquiries and programme conversations.",
    image: heroTraining,
    imageMode: "photo",
    contact: true,
    sections: [
      {
        type: "contact-details",
        kicker: "Contact details",
        title: "NEOONE Accelerated Learning Center",
        details: [
          ["Training & Workshops", "tzeyasmin@neoone.com.my"],
          ["General Inquiries", "admin@neoone.com.my"],
          ["Phone", "013-4523292"],
          ["Address", "14-1, Jalan Wan Kadir 1, Taman Tun Dr Ismail, 60000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"],
        ],
      },
    ],
  },
  {
    slug: "privacy-policy",
    file: "privacy-policy.html",
    nav: "Privacy",
    title: "Privacy policy.",
    kicker: "Data protection",
    description:
      "neOOne Associates values trust and is committed to protecting personal information submitted through the website.",
    sections: [
      {
        type: "policy",
        kicker: "Privacy policy",
        title: "How personal information is handled.",
        points: [
          ["Information collected", "The website may collect name, email address, phone number and organisation details to manage programmes, respond to enquiries and share updates with consent."],
          ["Data protection", "Personal information is stored securely and is not shared, sold or disclosed to third parties without permission unless required by law."],
          ["Cookies", "Cookies may be used to enhance browsing. Visitors can disable cookies in browser settings."],
          ["Third-party links", "The site may link to external websites. neOOne is not responsible for those privacy practices or content."],
          ["Contact", "Questions about privacy can be sent to admin@neoone.com.my."],
        ],
      },
    ],
  },
  {
    slug: "thank-you",
    file: "thank-you.html",
    nav: "Thank You",
    title: "Thank you.",
    kicker: "Submission received",
    description:
      "A simple confirmation page for future form or payment flows.",
    image: thankYouImage,
    imageMode: "contain",
    sections: [
      {
        type: "notice",
        kicker: "Next step",
        title: "Your enquiry has been prepared.",
        body:
          "When the backend is connected, this page can confirm successful form submission, registration or payment completion without exposing sensitive payment data.",
      },
    ],
  },
  {
    slug: "the-power-of-being-understanding-the-be-do-have-model",
    file: "the-power-of-being-understanding-the-be-do-have-model.html",
    nav: "BE-DO-HAVE",
    title: "The Power of Being: Understanding the BE-DO-HAVE Model.",
    kicker: "Article",
    description:
      "A neOOne perspective on why identity, action and results need to work together for meaningful growth.",
    image: beDoHaveImage,
    imageMode: "contain",
    sections: [
      {
        type: "article",
        kicker: "Article summary",
        title: "Being shapes doing, and doing shapes what people have.",
        paragraphs: [
          "Many people begin with doing: plans, tasks and actions. neOOne's BE-DO-HAVE framing asks teams to first examine who they are being before expecting better outcomes.",
          "When action alone does not produce the intended result, the missing work may be identity, mindset, emotional stance or leadership presence. The model gives leaders and learners a practical way to reconnect behaviour with purpose.",
        ],
      },
    ],
  },
  {
    slug: "trainer-credibility-index-6p-building-the-foundation-of-trust",
    file: "trainer-credibility-index-6p-building-the-foundation-of-trust.html",
    nav: "Trainer Credibility",
    title: "Trainer Credibility Index (6P): Building the foundation of trust.",
    kicker: "Article",
    description:
      "A reflection on how learners choose programmes and how trainers build credibility that deserves attention.",
    image: trainerIndexImage,
    imageMode: "poster",
    sections: [
      {
        type: "article",
        kicker: "Article summary",
        title: "Credibility is built before a programme begins.",
        paragraphs: [
          "The article begins with a learner's practical checklist for deciding which training is worth time and money. Over time, that checklist becomes a trainer's guide for designing programmes that feel worth attending.",
          "The core message is that trust is not decorative. It is a foundation for learning transfer, participant confidence and long-term professional reputation.",
        ],
      },
    ],
  },
];

const navPages = pages.filter((page) =>
  ["home", "about", "our-solutions", "our-programs-and-certifications", "our-sustainability-impact", "blog", "contact"].includes(page.slug)
);

const morePages = pages.filter((page) =>
  !["home", "about", "our-solutions", "our-programs-and-certifications", "our-sustainability-impact", "blog", "contact", "thank-you"].includes(page.slug)
);

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const link = (slug) => pages.find((page) => page.slug === slug)?.file || "#";

function renderHeader(current) {
  const moreIsCurrent = morePages.some((page) => page.slug === current.slug);
  return `
    <header class="site-header" aria-label="Primary navigation">
      <a class="brand" href="index.html" aria-label="neOOne Associates home">
        <img src="${logo}" alt="neOOne Associates">
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        <span></span><span></span><span></span><span class="sr-only">Menu</span>
      </button>
      <nav id="site-nav" class="site-nav" aria-label="Main menu">
        ${navPages
          .map((page) => `<a ${page.slug === current.slug ? 'aria-current="page"' : ""} href="${page.file}">${escapeHtml(page.nav)}</a>`)
          .join("")}
        <div class="nav-more">
          <button class="more-toggle" type="button" aria-expanded="false" aria-controls="more-menu" ${moreIsCurrent ? 'aria-current="page"' : ""}>More</button>
          <div id="more-menu" class="more-menu" hidden>
            ${morePages
              .map((page) => `<a ${page.slug === current.slug ? 'aria-current="page"' : ""} href="${page.file}">${escapeHtml(page.nav || page.title)}</a>`)
              .join("")}
          </div>
        </div>
      </nav>
    </header>`;
}

function renderHero(page) {
  const cta = page.cta || { label: "Contact neOOne", href: link("contact") };
  const programmePages = ["public-program-2", "learning-pass-3", "hot-csr-project", "our-programs-and-certifications"];
  const solutionPages = ["our-solutions", "transformation-and-change", "pillar-two-entrepreneurship-innovation", "learning-development"];
  const articlePages = ["blog", "the-power-of-being-understanding-the-be-do-have-model", "trainer-credibility-index-6p-building-the-foundation-of-trust"];
  const secondary = page.slug === "home"
    ? { label: "Explore solutions", href: link("our-solutions") }
    : programmePages.includes(page.slug)
      ? { label: "Ask about a programme", href: link("contact") }
      : solutionPages.includes(page.slug)
        ? { label: "View programmes", href: link("our-programs-and-certifications") }
        : articlePages.includes(page.slug)
          ? { label: "Read articles", href: link("blog") }
          : { label: "Explore solutions", href: link("our-solutions") };
  const heroClass = page.slug === "home" ? "hero home-hero" : `hero page-hero standard-hero visual-${page.imageMode || "photo"}`;
  const imageMarkup = page.image
    ? page.slug === "home"
      ? `<div class="hero-media" aria-hidden="true"><img src="${page.image}" alt=""></div>`
      : `<figure class="hero-visual"><img src="${page.image}" alt=""></figure>`
    : "";

  return `
    <section class="${heroClass}">
      ${imageMarkup}
      <div class="hero-content">
        <p class="eyebrow">${escapeHtml(page.kicker)}</p>
        <h1>${escapeHtml(page.title)}</h1>
        <p class="hero-copy">${escapeHtml(page.description)}</p>
        <div class="hero-actions">
          <a class="button primary" href="${cta.href}">${escapeHtml(cta.label)}</a>
          <a class="button secondary" href="${secondary.href}">${escapeHtml(secondary.label)}</a>
        </div>
      </div>
    </section>`;
}

function renderHomeRibbon() {
  return `
    <section class="growth-ribbon" aria-label="neOOne growth approach">
      <div>
        <span>Diagnose</span>
        <strong>Understand the people, system and constraints.</strong>
      </div>
      <div>
        <span>Design</span>
        <strong>Shape the learning journey around the outcome.</strong>
      </div>
      <div>
        <span>Activate</span>
        <strong>Run practical sessions with adoption support.</strong>
      </div>
      <div>
        <span>Measure</span>
        <strong>Track change through feedback and behaviour.</strong>
      </div>
    </section>`;
}

function renderSection(section) {
  if (section.type === "split") {
    return `
      <section class="intro section-shell">
        <div><p class="section-kicker">${escapeHtml(section.kicker)}</p><h2>${escapeHtml(section.title)}</h2></div>
        <p>${escapeHtml(section.body)}</p>
      </section>`;
  }

  if (section.type === "cards") {
    return `
      <section class="solutions section-shell">
        <div class="section-heading"><p class="section-kicker">${escapeHtml(section.kicker)}</p><h2>${escapeHtml(section.title)}</h2></div>
        <div class="solution-grid">
          ${section.cards
            .map(
              ([mark, title, body, href]) => `
                <article class="solution-card">
                  <span class="card-mark">${escapeHtml(mark)}</span>
                  <h3>${escapeHtml(title)}</h3>
                  <p>${escapeHtml(body)}</p>
                  ${href ? `<a class="text-link" href="${href}">Learn more</a>` : ""}
                </article>`
            )
            .join("")}
        </div>
      </section>`;
  }

  if (section.type === "impact") {
    return `
      <section class="impact">
        <div class="impact-copy"><p class="section-kicker">${escapeHtml(section.kicker)}</p><h2>${escapeHtml(section.title)}</h2><p>${escapeHtml(section.body)}</p></div>
        <div class="impact-panel">
          ${section.items.map((item) => `<div><strong>${escapeHtml(item)}</strong><span>Built into programme design, facilitation and follow-up.</span></div>`).join("")}
        </div>
      </section>`;
  }

  if (section.type === "pathway") {
    return `
      <section class="programmes section-shell">
        <div class="section-heading"><p class="section-kicker">${escapeHtml(section.kicker)}</p><h2>${escapeHtml(section.title)}</h2></div>
        <ol class="pathway">${section.steps.map(([step, body]) => `<li><span>${escapeHtml(step)}</span><p>${escapeHtml(body)}</p></li>`).join("")}</ol>
      </section>`;
  }

  if (section.type === "values") {
    return `
      <section class="section-shell">
        <div class="section-heading"><p class="section-kicker">${escapeHtml(section.kicker)}</p><h2>${escapeHtml(section.title)}</h2></div>
        <div class="value-grid">${section.items.map(([title, body]) => `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("")}</div>
      </section>`;
  }

  if (section.type === "people") {
    return `
      <section class="section-shell">
        <div class="section-heading"><p class="section-kicker">${escapeHtml(section.kicker)}</p><h2>${escapeHtml(section.title)}</h2></div>
        <div class="people-grid">${section.people
          .map(
            (person) => `<article class="person-card"><img src="${person.image}" alt="${escapeHtml(person.name)}"><div><h3>${escapeHtml(person.name)}</h3><strong>${escapeHtml(person.role)}</strong><p>${escapeHtml(person.bio)}</p></div></article>`
          )
          .join("")}</div>
      </section>`;
  }

  if (section.type === "logos") {
    return `
      <section class="section-shell">
        <div class="section-heading"><p class="section-kicker">${escapeHtml(section.kicker)}</p><h2>${escapeHtml(section.title)}</h2></div>
        <div class="logo-grid">${section.logos.map((src) => `<div><img src="${src}" alt="Client logo"></div>`).join("")}</div>
      </section>`;
  }

  if (section.type === "media") {
    return `
      <section class="section-shell media-section">
        <div class="section-heading"><p class="section-kicker">${escapeHtml(section.kicker)}</p><h2>${escapeHtml(section.title)}</h2></div>
        <div class="media-grid">${section.images
          .map(([src, label, mode]) => `<figure class="media-card media-${mode || "photo"}"><img src="${src}" alt="${escapeHtml(label)}"><figcaption>${escapeHtml(label)}</figcaption></figure>`)
          .join("")}</div>
      </section>`;
  }

  if (section.type === "lists") {
    return `
      <section class="section-shell">
        <div class="section-heading"><p class="section-kicker">${escapeHtml(section.kicker)}</p><h2>${escapeHtml(section.title)}</h2></div>
        <div class="list-grid">${section.lists
          .map(([title, items]) => `<article><h3>${escapeHtml(title)}</h3><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></article>`)
          .join("")}</div>
      </section>`;
  }

  if (section.type === "articles") {
    return `
      <section class="section-shell">
        <div class="section-heading"><p class="section-kicker">${escapeHtml(section.kicker)}</p><h2>${escapeHtml(section.title)}</h2></div>
        <div class="article-grid">${section.articles.map(([title, body, href]) => `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p><a class="text-link" href="${href}">Read summary</a></article>`).join("")}</div>
      </section>`;
  }

  if (section.type === "programs") {
    return `
      <section class="section-shell">
        <div class="section-heading"><p class="section-kicker">${escapeHtml(section.kicker)}</p><h2>${escapeHtml(section.title)}</h2></div>
        <div class="program-list">${section.programs.map(([title, body, href]) => `<article><div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></div><a class="button secondary" href="${href}">Enquire</a></article>`).join("")}</div>
      </section>`;
  }

  if (section.type === "notice") {
    return `
      <section class="section-shell">
        <div class="notice"><p class="section-kicker">${escapeHtml(section.kicker)}</p><h2>${escapeHtml(section.title)}</h2><p>${escapeHtml(section.body)}</p></div>
      </section>`;
  }

  if (section.type === "contact-details") {
    return `
      <section class="section-shell">
        <div class="section-heading"><p class="section-kicker">${escapeHtml(section.kicker)}</p><h2>${escapeHtml(section.title)}</h2></div>
        <div class="details-grid">${section.details.map(([label, value]) => `<article><strong>${escapeHtml(label)}</strong><span>${escapeHtml(value)}</span></article>`).join("")}</div>
      </section>`;
  }

  if (section.type === "policy") {
    return `
      <section class="section-shell policy">
        <div class="section-heading"><p class="section-kicker">${escapeHtml(section.kicker)}</p><h2>${escapeHtml(section.title)}</h2></div>
        ${section.points.map(([title, body]) => `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("")}
      </section>`;
  }

  if (section.type === "article") {
    return `
      <section class="section-shell article-body">
        <div class="section-heading"><p class="section-kicker">${escapeHtml(section.kicker)}</p><h2>${escapeHtml(section.title)}</h2></div>
        ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </section>`;
  }

  return "";
}

function renderContactBlock() {
  return `
    <section class="contact compact-contact" aria-labelledby="contact-title">
      <div class="contact-copy">
        <p class="section-kicker">Contact</p>
        <h2 id="contact-title">Tell neOOne what your team needs to grow into next.</h2>
        <p>Share the team context, the growth challenge and the outcome you want to create.</p>
        <a class="email-link" href="mailto:admin@neoone.com.my">admin@neoone.com.my</a>
      </div>
      <form class="lead-form" novalidate>
        <div class="field-row"><label for="first-name">First name</label><input id="first-name" name="firstName" type="text" autocomplete="given-name" required></div>
        <div class="field-row"><label for="last-name">Last name</label><input id="last-name" name="lastName" type="text" autocomplete="family-name" required></div>
        <div class="field-row"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required></div>
        <div class="field-row"><label for="company">Company or organisation</label><input id="company" name="company" type="text" autocomplete="organization"></div>
        <div class="field-row full"><label for="message">How can neOOne help?</label><textarea id="message" name="message" rows="5" required></textarea></div>
        <label class="consent full"><input name="consent" type="checkbox" required><span>I consent to neOOne storing my submitted information and contacting me about this enquiry.</span></label>
        <p class="form-status full" role="status" aria-live="polite"></p>
        <button class="button primary full" type="submit">Prepare enquiry</button>
      </form>
    </section>`;
}

function renderSiteMap(current) {
  return `
    <section id="site-map" class="site-map section-shell">
      <div class="section-heading"><p class="section-kicker">Site map</p><h2>All pages from the public site.</h2></div>
      <div class="page-list">
        ${pages
          .filter((page) => !["home"].includes(page.slug))
          .map((page) => `<a ${page.slug === current.slug ? 'aria-current="page"' : ""} href="${page.file}">${escapeHtml(page.nav || page.title)}</a>`)
          .join("")}
      </div>
    </section>`;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-brand">
        <img src="${logoSmall}" alt="neOOne Associates">
        <p>Leadership Development, Innovation &amp; Learning Solutions.</p>
      </div>
      <div class="footer-links">
        <a href="${link("about")}">About</a>
        <a href="${link("our-solutions")}">Solutions</a>
        <a href="${link("our-programs-and-certifications")}">Programs</a>
        <a href="${link("our-sustainability-impact")}">Impact</a>
        <a href="${link("contact")}">Contact</a>
        <a href="${link("privacy-policy")}">Privacy</a>
      </div>
      <p class="footer-note">(c) 2026 neOOne Associates.</p>
    </footer>`;
}

function renderPage(page) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https://neoone.com.my data:; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; script-src 'self'; connect-src 'self'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests">
    <meta name="referrer" content="strict-origin-when-cross-origin">
    <meta name="description" content="${escapeHtml(page.description)}">
    <meta property="og:title" content="${escapeHtml(page.title)}">
    <meta property="og:description" content="${escapeHtml(page.description)}">
    ${page.image ? `<meta property="og:image" content="${page.image}">` : ""}
    <meta property="og:type" content="website">
    <title>${escapeHtml(page.nav || page.title)} | neOOne Associates</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap" rel="stylesheet">
    <link rel="icon" href="https://neoone.com.my/wp-content/uploads/2025/07/cropped-neoone-logo-32x32.jpg">
    <link rel="stylesheet" href="styles.css">
    <script src="app.js" defer></script>
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    ${renderHeader(page)}
    <main id="main">
      ${renderHero(page)}
      ${page.slug === "home" ? renderHomeRibbon() : ""}
      ${page.sections.map(renderSection).join("")}
      ${page.contact || page.slug === "home" ? renderContactBlock() : ""}
    </main>
    ${renderFooter()}
  </body>
</html>`;
}

for (const page of pages) {
  writeFileSync(page.file, renderPage(page), "utf8");
}

console.log(`Generated ${pages.length} pages.`);
