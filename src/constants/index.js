import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  python,
  sql,
} from "../assets";

export const profile = {
  name: "Mohd Asif",
  role: "Software Engineer",
  email: "01Mohdasif03@gmail.com",
  github: "https://github.com/01Mohdasif",
  linkedin: "https://linkedin.com/in/mohd-asif-3a159913b",
  location: "Noida, India",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "5", label: "Production platforms shipped" },
  { value: "60%", label: "Faster project setup (ReqTrack)" },
  { value: "Lead", label: "Team Lead at Apexpath" },
];

const services = [
  { title: "Enterprise Web Apps (React / Next.js)", icon: web },
  { title: "Multi-Tenant SaaS & ERP Architecture", icon: reactjs },
  { title: "Desktop & Offline-First (Electron, IndexedDB)", icon: mobile },
  { title: "REST APIs & Backend (FastAPI, SQL)", icon: backend },
];

const technologies = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Next.js", icon: nextjs },
  { name: "Redux", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "SQL", icon: sql },
  { name: "Python", icon: python },
  { name: "Git", icon: git },
];

const experiences = [
  {
    title: "Software Engineer & Team Lead",
    company_name: "Apexpath Pvt Ltd · Sonipat",
    icon: web,
    iconBg: "#383E56",
    date: "Mar 2023 - Present",
    points: [
      "Lead and mentor a team delivering enterprise apps, including the EHRP HR & Payroll system for the GUAM Government (React, Redux, Swagger APIs).",
      "Architect multi-tenant SaaS ERP, hospital, lab and e-commerce platforms with Next.js, Electron.js and role-based access control.",
      "Built POS workflows with QR/barcode scanning, thermal-printer receipts and IndexedDB offline storage for reliable desktop use.",
      "Own code reviews, reusable component architecture, REST/FastAPI integration and performance tuning.",
      "Recognised with the Founding Commitment Award (2026).",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Appsums Pvt Ltd · Noida",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Apr 2023",
    points: [
      "Built responsive React UIs for Turegu, an e-commerce platform on React, Node.js, MongoDB and Firebase.",
      "Integrated REST APIs and managed application state for seamless data flow.",
      "Debugged and tested across devices and browsers within an Agile workflow.",
    ],
  },
  {
    title: "Web Developer & Support Engineer (Team Lead)",
    company_name: "Virtual Studio Pvt. Ltd · Noida",
    icon: backend,
    iconBg: "#383E56",
    date: "Aug 2018 - Dec 2021",
    points: [
      "Led Adobe Connect support for Novartis: webinars, virtual training and live troubleshooting.",
      "Optimised HTML-based websites for performance and accessibility.",
      "Handled ticketing, client communication and timely issue resolution.",
    ],
  },
];

const projects = [
  {
    name: "SidhaHisab",
    subtitle: "Multi-Tenant SaaS ERP & Admin Panel",
    period: "Nov 2024 - Present",
    description:
      "ERP and e-commerce platform for Indian SMBs (web + desktop). I built the full System Admin Panel, the Enterprise CRM, a dynamic Invoice Template Designer, Multi-Store management with inter-store transfers, WebSocket notifications and a two-way support ticket system.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Electron", color: "green-text-gradient" },
      { name: "Redux", color: "pink-text-gradient" },
      { name: "WebSockets", color: "blue-text-gradient" },
    ],
    gradient: "from-[#7c3aed] to-[#2563eb]",
    live_link: "https://sidhahisab.com/",
  },
  {
    name: "EHRP Web",
    subtitle: "Government HR & Payroll (GUAM)",
    period: "Apr 2023 - Present",
    description:
      "Secure, role-based HR and payroll system used by Guam government agencies. Interfaces for Admins, Directors and Certifying Officers with department-level permissions, salary increment workflows, job history and multi-step approvals.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "Swagger", color: "pink-text-gradient" },
      { name: "RBAC", color: "blue-text-gradient" },
    ],
    gradient: "from-[#0f766e] to-[#1d4ed8]",
    live_link: "https://gfmis-uat-hr-ui.azurewebsites.us/dashboard/default",
    note: "UAT environment - login required",
  },
  {
    name: "ReqTrack",
    subtitle: "Requirements Management System",
    period: "Nov 2025 - Present",
    description:
      "Owned architecture, UX and implementation. Git-style version control with diff and rollback, a client approval portal that needs no account, bulk creation and a markdown spec editor. Cut project setup time by 60% and miscommunication by 40%.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Markdown", color: "green-text-gradient" },
      { name: "Version Control", color: "pink-text-gradient" },
    ],
    gradient: "from-[#db2777] to-[#7c3aed]",
    live_link: "https://reqtrack.apexpath.com/",
  },
  {
    name: "HealthBridge",
    subtitle: "Hospital Management System",
    period: "Jun 2024 - Nov 2024",
    description:
      "Doctor and patient portals with appointment booking, doctor availability by date and area, medicine tracking, full patient history, PDF slips, analytics charts and a video consultation module.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "Axios", color: "pink-text-gradient" },
      { name: "Swagger", color: "blue-text-gradient" },
    ],
    gradient: "from-[#059669] to-[#0891b2]",
    live_link: "https://test.healthbridge.live/",
    note: "Test environment",
  },
  {
    name: "LabSync",
    subtitle: "Laboratory Information System",
    period: "Sep 2025 - Jan 2026",
    description:
      "Full-stack LIMS for pathology labs covering patient management, test registration, automated reporting, billing and secure sample tracking to digitise lab workflows.",
    tags: [
      { name: "Full-Stack", color: "blue-text-gradient" },
      { name: "LIMS", color: "green-text-gradient" },
      { name: "Reporting", color: "pink-text-gradient" },
    ],
    gradient: "from-[#ea580c] to-[#db2777]",
    live_link: "https://labsync.apexpath.com/",
  },
];

const awards = [
  {
    title: "Founding Commitment Award",
    org: "ApexPath Pvt. Ltd.",
    date: "29 Jul 2026",
    description:
      "Recognised for long-standing commitment, consistency and dedication as an early team member contributing to the company's growth since the beginning of its journey.",
  },
];

const education = [
  { school: "Galgotias University", degree: "B.Tech (CSE)", period: "2014 - 2018" },
];

export { stats, services, technologies, experiences, projects, awards, education };
