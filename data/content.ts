export const siteConfig = {
  name: 'Andrew Castor',
  legalName: 'John Andrew Castor',
  title: 'Infrastructure & Security Engineer',
  domain: 'andrewcastor.dev',
  email: 'JohnAndrewCastor@gmail.com',
  location: 'Orlando, FL',
  availability: 'Open to cybersecurity, cloud & infrastructure roles',
  resumeFilename: 'Andrew_Castor_Resume.pdf',
  links: {
    github: 'https://github.com/osakhra',
    linkedin: 'https://linkedin.com/in/jandrewcastor',
  },
  meta: {
    description:
      'Andrew Castor · Infrastructure & Security Engineer. Building hardened Linux deployments, multi-site networks, and offline-first clinical systems for volunteer medical missions.',
    keywords: [
      'infrastructure engineer',
      'cloud security',
      'network architecture',
      'healthcare IT',
      'AWS',
      'Azure',
      'IAM',
      'RBAC',
      'Linux',
      'Security clearance eligible',
    ],
  },
};

export const summary = `Infrastructure and security engineer with 2+ years deploying healthcare IT and secure networks in production and austere field environments. Now heading into UCF's NSA-designated cybersecurity program on an accelerated B.S. to M.S. track. I build hardened Linux deployments, multi-site networks, and offline-first clinical systems: the kind of constrained, high-stakes environments that translate directly to cloud security and cleared work.`;
export const resumeSummary = `Infrastructure and security engineer with 2+ years deploying healthcare IT and secure networks in production and austere field environments. Built end-to-end offline-capable EMR systems, hardened access controls, and trained 50+ users. CompTIA Security+ and Network+ certified. Pursuing B.S. Information Technology at UCF (NSA CAE-CD) with accelerated M.S. Cyber Security & Privacy track. Targeting cybersecurity, cloud, and information security analyst roles.`;

export const capabilities = [
  {
    category: 'Cloud & Security',
    icon: 'cloud',
    items: [
      'Microsoft Azure',
      'Entra ID',
      'Microsoft 365',
      'SharePoint',
      'IAM/RBAC',
      'ACLs',
      'TLS/HTTPS',
      'least-privilege design',
      'vulnerability management',
    ],
  },
  {
    category: 'Infrastructure',
    icon: 'server',
    items: [
      'LAN/WAN',
      'Wi-Fi 6 mesh',
      'DHCP/DNS',
      'Active Directory',
      'Linux server administration',
    ],
  },
  {
    category: 'Healthcare IT',
    icon: 'shield',
    items: [
      'Offline-first clinical systems',
      'Custom EMR (Node.js · SQLite · React)',
      'OpenEMR',
      'OpenMRS',
    ],
  },
  {
    category: 'Programming & Tools',
    icon: 'code',
    items: [
      'Python',
      'C#',
      'JavaScript/TypeScript',
      'PowerShell',
      'SQL',
      'Git/GitHub',
      'AWS (learning)',
      'Splunk SIEM (home lab)',
      'TryHackMe SOC L1',
    ],
  },
];

// Certs without a verification URL render as plain (non-clickable) pills.
export const certifications = [
  { name: 'CompTIA Security+', status: 'earned' as const,   url: '' },
  { name: 'CompTIA Network+', status: 'earned' as const,    url: '' },
  { name: 'Google IT Support Professional', status: 'earned' as const, url: 'https://www.credly.com/badges/835f3b5d-8240-4fb8-a3c7-a4857ca1dded/public_url' },
];

type ExperienceBulletGroup = {
  heading?: string;
  items: string[];
};

type ExperienceLink = {
  url: string;
  label: string;
};

type ExperienceMetric = {
  value: string;
  label: string;
};

type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  dates: string;
  links?: ExperienceLink[];
  metrics?: ExperienceMetric[];
  bulletGroups?: ExperienceBulletGroup[];
  bullets?: string[];
  closingNote?: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Lead Systems Engineer / Implementation Lead',
    company: 'Medical Missionaries of Divine Mercy',
    location: 'Houston, TX',
    dates: '2023 – Present',
    links: [
      { url: '/projects/mmdm-clinical-platform', label: 'Case Study' },
      { url: 'https://mmdm.andrewcastor.dev', label: 'Field Journal' },
      { url: 'https://mmdm.org', label: 'MMDM.org' },
    ],

    metrics: [
      { value: '6', label: 'Clinics' },
      { value: '~40%', label: 'Intake Delay ↓' },
      { value: '50+', label: 'Users Trained' },
      { value: '1,121', label: 'Patients Served' },
    ],
    bulletGroups: [
      {
        heading: 'Security & Infrastructure',
        items: [
          'Rebuilt OpenEMR 7.0.x on Ubuntu 22.04 / Apache / MariaDB 10.6 / PHP 8.1 after diagnosing an AJAX/JSON failure rooted in globals.php; chose full rebuild over patch to eliminate latent config drift.',
          'Built private Certificate Authority and signed server certificate with OpenSSL; deployed the full chain to /etc/ssl/openemr/ and enforced HTTP → HTTPS 301 redirect for offline TLS coverage.',
          'Hardened OS for austere field conditions: UFW firewall scoped to ports 80/22, disabled snapd and unattended-upgrades to eliminate unplanned reboots, and configured daily cron-driven encrypted backups with 30-day rotation.',
          'Designed HIPAA-aligned RBAC across 8 station-specific service accounts with documented post-pilot tightening plan; provisioned VirtualBox snapshot rollback strategy for rapid recovery.',
          'Designed and deployed a 50,000 sq ft Wi-Fi 6 mesh network spanning four buildings with segmented VLANs, DHCP/DNS, and offline-tolerant routing.',
          "Subsequently redesigned the system from scratch as a custom Node.js / SQLite / React application after identifying constraints OpenEMR couldn't cleanly satisfy in the field; consolidated to a single-process, systemd-managed service with hourly automated SQLite backups.",
        ],
      },
      {
        heading: 'Clinical Systems & Operations',
        items: [
          'Mapped bilingual paper-based workflow (Spanish patient-facing, English provider-facing) to OpenEMR schema across all six clinics; selected native modules where possible and scoped custom Layout-Based Forms only for gaps.',
          'Built Spanish-language Registration LBF (Registro de Pacientes y la Forma de Examen) mirroring 2026 paper form: demographics, vitals, allergy/medication intake, routing checkboxes, and treatment/referral sections.',
          'Built specialized Vision and Dental LBFs with structured medical history alerts, bilateral acuity grids, 32-tooth charting, anesthesia selection, and Rx dispensing tracking; specified autorefractor CSV ingest as next-phase integration.',
          'Conducted workflow discovery interviews with 8+ station leads (including providers with 26–32 mission tenure); designed paper-shadow-then-collaborative-entry training protocol that onboarded 50+ users.',
          'Engineered secure cloud archival pipeline via Microsoft Entra ID and SharePoint for post-mission data continuity.',
        ],
      },
    ],
    closingNote:
      'Costa Rica Field Deployment (April 18–25, 2026, Grano de Oro): deployed offline LAN running the clinical platform in austere, no-internet environment supporting full-cycle traveling clinic operations. Roadmap: Laredo (Nov 4–10, 2026) LAN setup and UX skeleton test; Costa Rica (April 17–24, 2027) full incorporation; Philippines (Feb 16–25, 2027) first Asia-Pacific deployment.',
  },
  {
    role: 'Bartender · Event Operations',
    company: 'J. Martini Hospitality Group',
    location: 'Houston, TX',
    dates: 'Apr 2023 – Apr 2025',
    links: [
      { url: 'https://jmartiniservices.com/', label: 'View Company' },
    ],
    bullets: [
      'Worked client-facing event operations across the Houston metro area: corporate gatherings, weddings, and private events for a hospitality firm specializing in premium service delivery (high-end bar service, cigar service, full-event waitstaff coordination).',
      'Trusted by the company owner with multi-venue supply logistics across Houston, transporting setup and inventory between sites on schedules often extending past 2 AM; supported onboarding for new event staff and on-site setup verification. Averaged ~30 hours/week over 2 years.',
    ],
  },
  {
    role: 'Founder & Operations Lead',
    company: 'O Λ S I S',
    location: 'Remote · US / Ukraine / EU',
    dates: '2022 – 2024',
    bullets: [
      'Founded and operated a competitive playtesting organization partnering with indie PvP developers to run structured pre-release events using experienced esports participants for media, feedback, and community momentum.',
      'Built the first competitive scene for Shatterline (Frag Lab Studio, Ukraine) from scratch near the start of the Russia-Ukraine war: negotiated dedicated practice server access across language and time-zone barriers, drafted competitive rulesets, and operated tournament brackets with grant-funded prize pools up to $600.',
      'Expanded to a generalized dev-partnership model after Shatterline: pitched studios at gaming conventions, nearly secured a Stockholm residency with Alara Prime before their funding collapse, and managed community transition through the bankruptcy without losing partner trust.',
    ],
  },
];

export const education = [
  {
    institution: 'University of Central Florida',
    degree: 'B.S. Information Technology (CECS) · Accelerated M.S. Cyber Security & Privacy Track',
    location: 'Orlando, FL',
    dates: 'Expected Fall 2028',
  },
  {
    institution: 'Houston City College',
    degree: 'A.A.S. Artificial Intelligence · National Honor Society',
    location: 'Houston, TX',
    dates: 'Conferred 2025',
    gpa: '3.8',
  },
  {
    institution: 'Houston City College',
    degree: 'A.S. General Science',
    location: 'Houston, TX',
    dates: 'Conferred 2026',
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  status: 'shipped' | 'progress' | 'live';
  statusLabel: string;
  context?: string;
  description: string;
  bullets?: string[];
  technologies: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'mmdm-clinical-platform',
    title: 'MMDM · Offline-First Clinical Platform',
    category: 'Flagship Project',
    status: 'live',
    statusLabel: 'Deployed 2026 · Ongoing',
    context: 'Medical Missionaries of Divine Mercy · Houston → Costa Rica · 2024–Present',
    description:
      "Purpose-built offline clinical platform for a six-clinic volunteer medical mission across a four-building parish campus in Costa Rica. Started as an OpenEMR rebuild on Linux; evolved into a custom Node.js / SQLite / React system designed from first principles around the mission's actual constraints: no internet, non-technical volunteers, and hundreds of patients in a single week.",
    technologies: [
      'Node.js',
      'SQLite',
      'React',
      'Linux (Kubuntu)',
      'systemd',
      'Tailwind CSS',
      'LAN-only',
      'Offline-first',
      'RBAC',
    ],
    featured: true,
  },
  {
    slug: 'air-grid',
    title: 'air.grid - Live U.S. Air Quality & Emissions',
    category: 'Geospatial / Data',
    status: 'shipped',
    statusLabel: 'Live 2026',
    description:
      'Live atlas of what\'s in the air across the U.S.: industrial emitters sized by emissions, real-time air quality sensors, and the schools and neighborhoods next to them, together on one interactive map. 268,980 facilities, 15,897 live sensors, real proximity joins, no mock data.',
    bullets: [
      'Built and deployed in one day (Handshake AI Projects challenge, June 1, 2026) using Claude Code\'s multi-agent system: parallel ingestion subagents coordinated through a frozen data contract, with sequential gates for schema, joins, and QA.',
      'Pulls from 6 federal sources (EPA ECHO, FRS, TRI, GHGRP, NCES, Census ACS) plus AirNow, PurpleAir, and OpenAQ sensor networks; a geo-matcher joins 108,336 schools to their nearest emitters with scipy cKDTree.',
      'deck.gl over MapLibre renders 10k+ points at 60fps, with independent toggle layers for facilities, air quality, schools, demographics, and NWS wind drift.',
      'Hourly scheduled job keeps sensor readings live; every figure shows its timestamp and source, and an Analysis view ranks regions and surfaces the most-exposed campuses.',
    ],
    technologies: [
      'Next.js 14',
      'TypeScript',
      'Tailwind',
      'MapLibre GL',
      'deck.gl',
      'Recharts',
      'Python',
      'scipy cKDTree',
      'Vercel',
    ],
  },
  {
    slug: 'atlas',
    title: 'Atlas · Cinematic 3D Travel Globe',
    category: '3D / Geospatial',
    status: 'shipped',
    statusLabel: 'Live 2026',
    description:
      'Interactive 3D globe pinning everywhere I\'ve lived, vacationed, and done mission work, plus everywhere I plan to go. Styled after the Apple lock-screen Earth: deep space, city lights, atmospheric scattering, soft bloom. Custom-built with three.js and globe.gl plus hand-written GLSL; no UI kits, no state libraries.',
    bullets: [
      'Custom day/night shader pipeline: normal-mapped terrain, soft terminator blend, isolated and boosted city lights, Blinn-Phong ocean glint, and rotating cloud shadows cast onto the surface.',
      'Camera-relative sun direction recomputed every frame so the lighting reads cinematic from any angle; the day/night toggle sweeps the terminator across the globe in about a second.',
      'Procedural starfield of 4,500 stars from a seeded PRNG, identical on every load, with per-star size and color tiers for a realistic luminosity distribution.',
      'Automatic performance mode detects software rendering and low-RAM devices before any WebGL allocation, then falls back to lite shaders, no MSAA, and halved geometry for roughly 50x less fill work.',
      '107-node append-only place tree validated at build time; URL-hash deep links fly the camera straight to any pin.',
    ],
    technologies: [
      'Next.js 14',
      'TypeScript',
      'three.js',
      'globe.gl',
      'Custom GLSL',
      'Tailwind CSS',
      'Static export',
    ],
  },
  {
    slug: 'eegd',
    title: 'Emergency Evacuation Guidance Device',
    category: 'Embedded · IoT',
    status: 'shipped',
    statusLabel: 'Prototype',
    context: 'ENGR 1201 · Houston City College · Spring 2026',
    description: 
      'Handheld emergency evacuation device that computes and displays real-time escape routes from live temperature sensor data. Routes rebuild automatically as heat develops; reroutes around blocked zones, escalating through warning states, and triggering Shelter-In-Place when all exits are blocked.',
    bullets: [
      `5 DS18B20 probes on a shared 1-Wire bus monitor 10 building zones (6 rooms, 2 hallways, 2 exits), streaming one CSV line per second to the Pi over USB-serial at 115,200 baud.`,
      `Dijkstra's algorithm via NetworkX rebuilds the optimal evacuation route in under 1 ms on every sensor state change; edge weights are dynamically scaled by zone temperature.`,
      `D-pad navigation drives a top-down Pygame floor plan; RGB LED and piezo buzzer mirror the active threat state in real time.`,
    ],
    technologies: [
      'Raspberry Pi 4',
      'ESP32',
      'Python · Pygame',
      'NetworkX',
      'USB-Serial',
      'Systemd',
    ],
  },
  {
    slug: 'forecastor',
    title: 'foreCastor',
    category: 'Finance · Personal',
    status: 'shipped',
    statusLabel: 'Private',
    description:
      'A PIN-locked personal finance tracker with live bank integration, spending analytics, and a long-term savings goal engine, built entirely for personal use.',
    bullets: [
      'Connected to the bank via the Plaid API to automatically import, normalize, and categorize transactions without manual entry.',
      'Tracks a long-term savings goal with a compound-growth projection chart and a target date that changes color based on whether you\'re on pace.',
      'Per-category monthly spending limits with live progress bars that shift from teal to amber to red as you approach and exceed your budget.',
      'Scans transaction history to detect recurring charges and suggests adding them to your fixed expenses list automatically.',
      '31 unlockable achievements tied to real savings milestones, income streaks, and usage habits, with rarity tiers styled after Steam.',
    ],
    technologies: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS',
      'Cloudflare Pages',
      'SQLite',
      'Plaid API',
    ],
  },
];

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'About', href: '/about' },
];

// Flagship case study — full deep-dive content for /projects/mmdm-clinical-platform
export const mmdmCaseStudy = {
  metrics: [
    { value: '6', label: 'Clinics' },
    { value: '1,121', label: 'Patients · 40 hrs' },
    { value: '50+', label: 'Users Trained' },
    { value: 'Offline', label: 'Operations Posture' },
  ],
  problem:
    'Corrupted Windows XAMPP stack with Aria storage engine failure. Paper forms across six clinics. No backups, no encryption, no recovery path. Mission-critical with zero connectivity guarantee.',
  solution:
    "Rebuilt as a purpose-built Node.js / SQLite / React application running as a single process on a dedicated Linux machine. SQLite replaces MariaDB: one file, no server to configure. React frontend served as static files. systemd auto-start with no manual steps after reboot. Hourly automated backups using SQLite's online backup API. All dependencies installed before the mission; zero internet required during operation.",
  impact:
    'Replaced 20+ years of paper workflow with structured clinical data. Five clinic forms co-designed with named clinic leads, touch-optimized for tablet use by first-day volunteers. Reboot-tested for autonomous operation in the field; recoverable from hardware failure with no network engineer present.',
  shipped: [
    'Custom Node.js / SQLite / React system built and reboot-tested',
    'Five clinic forms co-designed with clinical leads (Registration, Triage, Medical, Vision, Dental)',
    '96-drug Spanish formulary with Costa Rica naming conventions preserved',
    'Automated hourly SQLite backups, offline-safe',
    'Role-based access: admin, station lead, volunteer PIN tiers',
    'Live patient routing and station capacity state management',
    'Reporting screen: patients by clinic, vision inventory consumed, computed live from DB',
  ],
  roadmap: [
    'Laredo, TX · Nov 4–10, 2026: LAN setup and UX skeleton test. No patient data. HIPAA compliance is the open question before any real deployment.',
    'Costa Rica · April 17–24, 2027: full clinical incorporation',
    'Philippines · Feb 16–25, 2027: first Asia-Pacific deployment',
  ],
  principles: [
    {
      title: 'Offline-first',
      desc: 'No cloud, no public DNS, no assumed internet. The system must work in a Costa Rican parish hall with nothing but a power strip.',
    },
    {
      title: 'HIPAA-aligned posture',
      desc: 'Even though Costa Rica patients aren\'t covered by HIPAA, the same controls protect everyone.',
    },
    {
      title: 'Structured data over free text',
      desc: 'Every paper form field becomes a queryable database column so the mission can produce real statistics.',
    },
    {
      title: 'Recoverable',
      desc: 'Snapshots, daily backups, and a documented rebuild path mean a single hardware failure doesn\'t end the mission.',
    },
  ],
};
