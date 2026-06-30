import { ArrowRight, BrainCircuit, Handshake, Leaf, Lightbulb, Route, ShieldCheck } from "lucide-react";

export const navItems = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Vision and Mission", href: "/vision-mission" },
      { label: "Our People", href: "/people" },
      { label: "Partners and Clients", href: "/partners-clients" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Transformation and Change", href: "/transformation-and-change" },
      { label: "Entrepreneurship and Innovation", href: "/entrepreneurship-innovation" },
      { label: "Learning and Development", href: "/learning-development" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Public Program", href: "/public-program" },
      { label: "Learning Pass", href: "/learning-pass" },
      { label: "HOT CSR Project", href: "/hot-csr-project" },
    ],
  },
  { label: "A.P.P.L.E", href: "/apple-products" },
  { label: "Impact", href: "/impact" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const operatingSteps = [
  {
    label: "Diagnose",
    text: "Map people, systems, friction and growth constraints before the first workshop.",
  },
  {
    label: "Design",
    text: "Build a learning journey around the behaviour change the business needs.",
  },
  {
    label: "Activate",
    text: "Run practical sessions with reflection, tools and adoption support.",
  },
  {
    label: "Measure",
    text: "Track signals from feedback, workplace behaviour and follow-through.",
  },
];

export const solutions = [
  {
    title: "Transformation and change",
    description:
      "Help teams move through new structures, working rhythms and culture shifts with clear adoption support.",
    icon: Route,
    marker: "Change",
  },
  {
    title: "Entrepreneurship and innovation",
    description:
      "Build commercial thinking, problem discipline and experiment confidence for emerging teams.",
    icon: Lightbulb,
    marker: "Venture",
  },
  {
    title: "Learning and development",
    description:
      "Design leadership, communication and collaboration programmes that turn training into habit.",
    icon: BrainCircuit,
    marker: "Capability",
  },
];

export const impactPoints = [
  {
    title: "Responsible practice",
    description: "Programme decisions are tied to business outcomes, participant safety and useful follow-up.",
    icon: ShieldCheck,
  },
  {
    title: "Empowered communities",
    description: "CSR and public programmes are shaped to leave capability behind after the session ends.",
    icon: Handshake,
  },
  {
    title: "Sustainable innovation",
    description: "Teams learn how to test ideas, make better choices and keep improving over time.",
    icon: Leaf,
  },
];

export const defaultPrograms = [
  {
    id: "learning-pass",
    title: "Learning Pass",
    audience: "Trainers and facilitators",
    price: 0,
    description:
      "Four theory and methodology course selections plus a trainer's toolkit.",
  },
  {
    id: "trainers-toolkit",
    title: "Trainer's Toolkit Series",
    audience: "Facilitators and trainers",
    price: 0,
    description:
      "Half-day practical workshops for learner engagement, visuals, stories, music and room setup.",
  },
  {
    id: "theory-methodology",
    title: "Theory and Methodology Series",
    audience: "Learning professionals",
    price: 0,
    description:
      "Full-day programmes including accelerated learning, game-based learning, session design and debriefing.",
  },
  {
    id: "games-trainer-play",
    title: "GAMES Trainer's Play",
    audience: "Certification route",
    price: 0,
    description:
      "A certification-style programme for game-based and learner-centred facilitation.",
  },
  {
    id: "apple-products",
    title: "A.P.P.L.E Products",
    audience: "Learning tool buyers",
    price: 0,
    description:
      "Ti Yan Cards, user guides, booster packs and Alfa Cards package options.",
  },
  {
    id: "hot-project",
    title: "HOT Project",
    audience: "CSR sponsors and partners",
    price: 0,
    description:
      "Support children from B40 and underserved communities through Doodlenotes learning.",
  },
];

export const footerLinks = [
  { label: "Email", href: "mailto:admin@neoone.com.my" },
  { label: "Programs", href: "/programs" },
  { label: "A.P.P.L.E", href: "/apple-products" },
  { label: "Privacy", href: "/privacy" },
];

export { ArrowRight };
