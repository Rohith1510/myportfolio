export const profile = {
  name: "Rohith Pranav Bala",
  email: "rohithpranav567@gmail.com",
  github: "https://github.com/Rohith1510",
  linkedin: "https://www.linkedin.com/in/rohithpranavbala/",
  resume: "/Full_Resume.pdf",
  location: "Coimbatore, India",
  site: "https://rohithpranavbala.vercel.app",
};

export type Project = {
  slug: string;
  name: string;
  context: string;
  year: string;
  category: string;
  headline: string;
  summary: string;
  role: string;
  outcome: string;
  status?: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  links: { label: string; href: string }[];
  story: { title: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "silent",
    name: "Silent",
    context: "ETHGlobal Mumbai",
    year: "2026",
    category: "Web3 · Digital inheritance",
    headline: "A path forward for the people you trust.",
    summary:
      "Privacy-first digital inheritance and emergency recovery. A visual vault builder makes the rules clear before they ever need to be used.",
    role: "Product & full-stack engineering",
    outcome:
      "Working Sepolia MVP with isolated vaults, guardian approvals, and phased beneficiary claims.",
    stack: ["Next.js", "Solidity", "ENSv2", "Chainlink CRE", "Anon-RPC"],
    image: "/projects/silent.webp",
    imageAlt:
      "Silent inheritance builder showing a vault, heartbeat, guardians, owner challenge, and release conditions",
    imageCaption:
      "The public inheritance builder, captured without a connected wallet. The draft has no beneficiaries; it is not a funded vault.",
    links: [
      { label: "Live demo", href: "https://silent-nu.vercel.app" },
      { label: "Source", href: "https://github.com/Rohith1510/silent" },
    ],
    story: [
      {
        title: "The problem",
        body: "Digital assets need a recovery plan that does not hand control to a custodian. A missed check-in is a useful signal, but it cannot establish that an owner is gone or that assets should be released.",
      },
      {
        title: "What I built",
        body: "I built the visual inheritance planner and vault workflows around isolated Solidity vaults: beneficiaries, liveness intervals, guardian quorum, owner challenge windows, and scheduled or emergency claims. The interface reads actual contract state and distinguishes unsigned drafts from saved plans.",
      },
      {
        title: "Identity without redirected inheritance",
        body: "ENSv2 supports family names, beneficiary subnames, profiles, and address resolution. The resolved beneficiary address is pinned in the vault. Later changes to a name do not redirect the inheritance.",
      },
      {
        title: "Monitoring with explicit boundaries",
        body: "An official Chainlink CRE workflow monitors real Sepolia vaults and calls the notification service. A CLI simulation inspected two real vaults and received successful API responses. This demonstrates a simulation; continuous DON deployment is not claimed.",
      },
      {
        title: "Private reads, separate signing",
        body: "The official Anon-RPC browser harness routes supported application reads through its anonymous transport. Public RPC requires explicit consent. Wallet signing and public transactions remain separate; this is not a claim that every visit, balance, or transaction is private.",
      },
      {
        title: "The result",
        body: "A public, testnet-only MVP with a working planner, ENS identity flows, wallet-free vault inspection, guardian-controlled recovery, and notification orchestration. It is unaudited and is not intended for real-value deposits.",
      },
    ],
  },
  {
    slug: "sourcerer",
    status: "Deprecated by the organization",
    name: "Sourcerer",
    context: "ProQube.AI",
    year: "2025-26",
    category: "AI · Talent sourcing",
    headline: "From first build to first thousand users.",
    summary:
      "An AI talent-sourcing product. As a core engineer, I helped take the first version from zero to a production launch in 10 days.",
    role: "Core engineer · Software Engineer I",
    outcome: "1,000+ users onboarded in the first week.",
    stack: ["Full-stack development", "REST APIs", "k6", "GitHub Actions"],
    links: [],
    story: [
      {
        title: "The problem",
        body: "A new talent-sourcing product needed to become usable quickly. The work was to turn an early product direction into customer-facing software that could support a real launch.",
      },
      {
        title: "My contribution",
        body: "As a core engineer at ProQube.AI, I contributed to Sourcerer’s first production release. The team shipped the first version in 10 days, and the platform onboarded more than 1,000 users in its first week. These are team launch outcomes, not an individual attribution of all product work.",
      },
      {
        title: "Broader engineering scope",
        body: "Alongside Sourcerer, I built customer workflows, backend services, and REST APIs for the AAFN B2B marketplace. My work also covered performance testing with k6, frontend optimization, browser QA, and GitHub Actions release improvements.",
      },
      {
        title: "The result",
        body: "A production launch under a short deadline, followed by first-week onboarding with 1000+ users.",
      },
    ],
  },
  {
    slug: "promptora",
    name: "Promptora",
    context: "Warpspeed",
    year: "2025",
    category: "AI × Web3 · Prompt marketplace",
    headline: "Better prompts. A more private way to vote.",
    summary:
      "A zero-knowledge prompt marketplace for discovering, voting on, and supporting AI prompts without turning every vote into a public identity trail.",
    role: "Full-stack & Web3 engineering",
    outcome: "Runner-up · Base track, Warpspeed Agentic AI Hackathon.",
    stack: ["Next.js", "Semaphore", "Solidity", "Base Sepolia"],
    image: "/projects/promptora-landing.webp",
    imageAlt:
      "Promptora’s published prompt discovery interface with voting and creator tipping controls",
    imageCaption:
      "Landing-page screenshot published with the Warpspeed submission. Displayed prompt, creator, and transaction metrics are hackathon demonstration data.",
    links: [
      { label: "Source", href: "https://github.com/Rohith1510/Promptora" },
      {
        label: "Project & result",
        href: "https://devfolio.co/projects/promptora-22d5",
      },
      {
        label: "Recorded demo",
        href: "https://www.loom.com/share/6db31988d34341808b2692b5aee4436a",
      },
    ],
    story: [
      {
        title: "The problem",
        body: "Good AI prompts are scattered, and public popularity signals are easy to spam. Creators also need a way to offer premium prompts and receive support from the people who use their work.",
      },
      {
        title: "What I built",
        body: "I co-built the marketplace and its wallet-connected workflows: prompt discovery, Semaphore-based zero-knowledge voting, NFT-gated access, and onchain creator tipping. The frontend connected private voting to Base smart-contract interactions.",
      },
      {
        title: "Why private voting mattered",
        body: "Semaphore separates a vote from the voter’s identity while using a nullifier to reject duplicate voting within a group and scope. It supports private participation; group admission still determines the strength of the system’s Sybil resistance.",
      },
      {
        title: "The result",
        body: "The team earned runner-up recognition in the Base track at Warpspeed Agentic AI Hackathon. The public submission was created in June 2025 and documents Base Sepolia, which supersedes the repository README’s stale Goerli reference.",
      },
    ],
  },
  {
    slug: "aidnet",
    name: "AidNet",
    context: "Rescue Chain · ETHIndia 2024",
    year: "2024–25",
    category: "Web3 · Emergency aid",
    headline: "Make emergency aid easier to follow.",
    summary:
      "Transparent campaign funding and traceable allocation for emergency aid. The Rescue Chain hackathon work continued as AidNet.",
    role: "Frontend & smart-contract integration",
    outcome:
      "ETHIndia 2024 finalist recognition · continued development as AidNet.",
    stack: ["Next.js", "TypeScript", "Solidity", "Ethers.js"],
    image: "/aidnet.png",
    imageAlt:
      "AidNet’s original emergency aid platform homepage with a link to campaign funding",
    imageCaption:
      "Screenshot retained from the original portfolio. The interface’s “100+” campaign label is demonstration copy, not a verified usage metric.",
    links: [
      { label: "Source", href: "https://github.com/Rohith1510/Aid_Net" },
      {
        label: "My contribution",
        href: "https://github.com/Rithik2211/decentralized-aidchain/pull/2",
      },
    ],
    story: [
      {
        title: "The problem",
        body: "Emergency aid needs clear coordination and visibility into where contributions go. Donors should be able to inspect campaigns and verify transfers rather than rely only on opaque progress reports.",
      },
      {
        title: "What I built",
        body: "I contributed the campaign and contribution interfaces, wallet integration, and blockchain-backed donation flows. A public pull request records my work on the contribution page. AidNet extends this work with campaign management, onchain fund transfers, and transaction verification.",
      },
      {
        title: "One project lineage",
        body: "Rescue Chain was the ETHIndia 2024 hackathon name; AidNet is the name used by the current repository and latest résumé. They are presented together here rather than counted as separate projects.",
      },
      {
        title: "The result",
        body: "This project records ETHIndia 2024 finalist recognition and a quadratic-voting rank.",
      },
    ],
  },
];

export const archive = [
  {
    name: "Avax Studio",
    note: "Visual Avalanche subnet builder · repository name: Subnet Studio",
    stack: "React · Avalanche",
    href: "https://github.com/Rohith1510/avax",
    label: "Source",
  },
  {
    name: "BS-GPT",
    note: "AI-assisted balance-sheet analysis and company reports",
    stack: "React · LLMs",
    href: "https://github.com/Rohith1510/BS_GPT",
    label: "Source",
  },
  {
    name: "Goat Notes",
    note: "AI summaries and organization for study notes",
    stack: "Next.js · OpenAI",
    href: "https://github.com/Rohith1510/Goat_Notes",
    label: "Source",
  },
  {
    name: "EcoSync",
    note: "A decentralized social network for sustainability",
    stack: "Next.js · Solidity",
    href: "https://github.com/Rithik2211/eco-sync-main",
    label: "Source",
  },
];

export const experiences = [
  {
    id: "runtime",
    company: "RuntimeBRT",
    title: "Freelance Technical Researcher & Scriptwriter",
    dates: "Jul 2026–Present",
    start: "2026-07",
    mode: "Remote · Freelance",
    bullets: [
      "Research engineering, emerging technology, and Indian deep tech; turn source material into evidence-based scripts for short-form videos.",
      "Researched and wrote short-form tech scripts for videos that reached over 1 million views across Instagram and YouTube.",
    ],
    skills: "Technical research · Scriptwriting · Source verification",
    links: [
      {
        label: "RuntimeBRT channel",
        href: "https://www.youtube.com/@RuntimeBRT",
      },
    ],
  },
  {
    id: "croma",
    company: "Croma Campus",
    title: "Blockchain Trainer",
    dates: "Feb 2026–Present",
    start: "2026-02",
    mode: "Remote · Part-time",
    bullets: [
      "Teach blockchain through practical sessions, hands-on demonstrations, and technical onboarding for developers and students.",
    ],
    skills: "Blockchain · Practical demonstrations · Developer education",
    links: [],
  },
  {
    id: "proqube",
    company: "ProQube.AI",
    title: "Software Engineer I",
    dates: "Dec 2025–Mar 2026",
    start: "2025-12",
    mode: "Atlanta, USA · Remote",
    bullets: [
      "Core engineer on Sourcerer: helped ship the first production version in 10 days. The platform onboarded 1,000+ users in week one.",
      "Built customer workflows, backend services, REST APIs, and data-backed features for the AAFN B2B marketplace.",
      "Improved performance and release reliability through k6 testing, frontend optimization, browser-based QA, and GitHub Actions CI/CD.",
    ],
    skills:
      "Full-stack engineering · REST APIs · k6 · BrowserStack · GitHub Actions",
    links: [{ label: "Sourcerer case study", href: "/projects/sourcerer" }],
  },
  {
    id: "beetlex",
    company: "BeetleX",
    title: "Developer Relations Engineer",
    dates: "Oct–Dec 2025",
    start: "2025-10",
    mode: "Bengaluru, India · Remote",
    bullets: [
      "Delivered technical demos and onboarding for an AI and Web3 learning platform; helped support hackathon activities involving 1,000+ participants across India.",
    ],
    skills: "Developer relations · Product demos · Community",
    links: [],
  },
  {
    id: "meteorite",
    company: "Meteorite Labs",
    title: "Software Engineering Intern",
    dates: "Jun–Jul 2025",
    start: "2025-06",
    mode: "Hyderabad, India · Remote",
    bullets: [
      "Shipped features and UI fixes across social networking and logistics applications. Refactored existing code and wrote technical documentation to make ongoing maintenance easier.",
    ],
    skills: "Application development · UI debugging · Documentation",
    links: [],
  },
  {
    id: "invsto",
    company: "Invsto",
    title: "Frontend Engineer Intern",
    dates: "Jun–Dec 2024",
    start: "2024-06",
    mode: "Pennsylvania, USA · Remote",
    bullets: [
      "Built the company website frontend through production launch; migrated React interfaces to Next.js, TypeScript, and Tailwind CSS and integrated Web3 workflows.",
    ],
    skills: "React · Next.js · TypeScript · Web3",
    links: [],
  },
];

export const recognition = [
  {
    result: "Runner-up · Base track",
    event: "Warpspeed Agentic AI Hackathon",
    year: "2025",
    href: "https://devfolio.co/projects/promptora-22d5",
  },
  {
    result: "Finalist",
    event: "ETHIndia",
    year: "2024",
    href: "/projects/aidnet",
  },
  {
    result: "Winner · Blockchain & Cybersecurity",
    event: "Sri Eshwar · Thiran",
    year: "2025",
    href: "/Full_Resume.pdf",
  },
  {
    result: "Winner · ETHIndia track",
    event: "TIC Pinnacle Hack",
    year: "2025",
    href: "/Full_Resume.pdf",
  },
];

export const publications = [
  {
    title:
      "A Survey on the Evolution of Business Models From Web2 to Web3: Adoption and the Future of Digital Enterprises",
    publisher: "IEEE · ICECONF",
    year: "2025",
    description:
      "Co-authored survey of business-model shifts, adoption challenges, and decentralized enterprises.",
    href: "https://doi.org/10.1109/ICECONF65644.2025.11379418",
  },
  {
    title: "Decentralized Social Media Web3.0",
    publisher: "IRJEdT",
    year: "2023",
    description:
      "Research on social-network privacy, smart contracts, IPFS, and wallet-based identity.",
    href: "https://www.irjweb.com/viewarticle.php?aid=Decentralized-Social-Media-Web3.0",
  },
];
