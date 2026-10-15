// All site copy lives here. Edit this file to update the portfolio's content.

export const profile = {
  name: { first: 'Pranjal', last: 'Sharma' },
  tagline: 'Full-stack developer. Builds with AI, tests like a skeptic.',
  email: 'pranjalsharma0211@gmail.com',
  location: 'Greater Philadelphia',
  links: {
    linkedin: 'https://www.linkedin.com/in/pranjal-sharma02/',
    github: 'https://github.com/Pranjal0211',
    resume: 'resume.pdf',
  },
  hero: {
    src: 'images/hero-thigh-centered.jpg',
    alt: 'Portrait of Pranjal Sharma',
    width: 2400,
    height: 1440,
  },
};

export const nav = [
  { href: '#about', label: 'Hello' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Study' },
  { href: '#skills', label: 'Skills' },
  { href: '#beyond', label: 'Play' },
];

export const about = {
  // Segments alternate plain / emphasized text in the big statement.
  statement: [
    { text: 'I write software from both sides of the bug: ' },
    { text: 'building the feature,', em: true },
    { text: ' then ' },
    { text: 'trying to break it.', em: true },
  ],
  paragraphs: [
    "I'm a full-stack developer with a Master's in Computer Science from Cal State Fullerton. On the front end I work in React, Next.js and TypeScript. On the back end it's Java and Spring Boot, REST APIs and microservices, running on AWS and Azure.",
    "Right now I'm a Software Development Engineer in Test at Norwegian Cruise Line and a Software Engineer at V.Two. Before that, I built healthcare apps at Humanitarians AI and Cognizant, and spent a year teaching 120+ undergrads at CSUF.",
    "Lately I've been going deep on agentic AI: the Claude API, tool use and the Model Context Protocol. I'm now an Anthropic-certified Claude Developer and Associate.",
  ],
  handnote: '— currently building from Greater Philadelphia ✦',
  stats: [
    { num: '5+', label: 'Years shipping software' },
    { num: '98%', label: 'Test coverage, JUnit' },
    { num: '120+', label: 'Students mentored' },
    { num: '6', label: 'Anthropic credentials' },
  ],
};

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full stack' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'web', label: 'Web' },
];

export const projects = [
  {
    title: 'LibManage',
    cats: ['fullstack'],
    tint: '#E9C9C1',
    motto: 'Check it out.',
    meta: 'Full stack · CSU Fullerton',
    hook: 'A library management system where the interesting part is trust: JWT, OAuth2 and OpenID Connect decide who can check out what, with role-based permissions on a Spring Boot API.',
    tags: ['React', 'Spring Boot', 'Java', 'OAuth2'],
    href: 'https://github.com/Pranjal0211/LibManage',
  },
  {
    title: 'WebSpeak',
    cats: ['web', 'ai'],
    tint: '#D9C7B5',
    motto: 'Read it to me.',
    meta: 'Accessibility · 2025',
    hook: "Turns any web page into speech, translated into the language you choose. Built for people with low vision, readers who struggle with text, and anyone who'd rather listen.",
    tags: ['React', 'Azure Speech SDK', 'Google TTS'],
    href: 'https://github.com/Pranjal0211/Webspeak-app',
  },
  {
    title: 'Heart Disease Diagnosis',
    cats: ['ai'],
    tint: '#E5D3C8',
    motto: 'Weigh the odds.',
    meta: 'Probabilistic AI · 2024',
    hook: 'An expert system that models heart-disease risk as a Bayesian network, so you can ask how each symptom or vital sign shifts the odds of a diagnosis.',
    tags: ['Python', 'pgmpy', 'Bayesian networks', 'pandas'],
    href: 'https://github.com/Pranjal0211/heart-disease-diagnosis',
  },
  {
    title: 'Virtual Police Station',
    cats: ['fullstack', 'web'],
    tint: '#CFB7AE',
    motto: 'File it online.',
    meta: 'Civic tech · 2025',
    hook: "A web app that brings police-station services online, so reporting something doesn't have to start with a trip to the station.",
    tags: ['JavaScript', 'EJS', 'Python'],
    href: 'https://github.com/Pranjal0211/Virtual-Police-Station',
  },
  {
    title: 'Reversi',
    cats: ['ai'],
    tint: '#DCC4BB',
    motto: 'Your move.',
    meta: 'Game AI · 2023',
    hook: "A Reversi opponent that searches ahead with minimax and alpha-beta pruning, skipping the moves that can't matter so it can think deeper, faster.",
    tags: ['Python', 'Alpha-beta pruning'],
    href: 'https://github.com/Pranjal0211/ReversiGame',
  },
  {
    title: 'This portfolio',
    cats: ['web'],
    tint: '#EAD6CF',
    motto: 'Hello.',
    meta: 'This site · 2026',
    hook: 'Built in React with Vite: an editorial serif, a hero that splits my name around the photo, and all the content kept in one data file.',
    tags: ['React', 'Vite', 'CSS'],
    href: 'https://github.com/Pranjal0211/portfolio',
  },
];

export const jobs = [
  {
    stat: 'E2E',
    statLabel: 'test automation',
    when: 'Dec 2025 – Present · Remote',
    role: 'Software Development Engineer in Test',
    company: 'Norwegian Cruise Line Holdings',
    points: [
      'Writing automated end-to-end tests with Playwright for Vue.js web applications.',
      'Catching regressions before they reach production, so releases go out with confidence.',
    ],
  },
  {
    stat: 'Now',
    statLabel: 'front end to back end',
    when: 'May 2025 – Present · Los Angeles, hybrid',
    role: 'Software Engineer',
    company: 'V.Two',
    points: [
      'Full-stack development across client projects, with a focus on back-end web services in JavaScript.',
    ],
  },
  {
    stat: 'React',
    statLabel: 'front-end development',
    when: 'Mar 2025 – May 2025 · Los Angeles',
    role: 'Software Developer',
    company: 'Product Perfect',
    points: ['Built front-end features in React for client products.'],
  },
  {
    stat: '98%',
    statLabel: 'test coverage with JUnit',
    when: 'Jun 2024 – Feb 2025 · Fullerton, CA',
    role: 'Software Developer',
    company: 'Humanitarians AI',
    points: [
      'Built Java microservices with Spring Boot and cut bug-related downtime by 40%.',
      'Created responsive React interfaces for healthcare applications.',
      'Reduced PostgreSQL query response times by 30% through schema optimization.',
      'Set up CI/CD with Jenkins and GitLab (95% deployment success) on AWS EC2, S3, RDS and Lambda.',
    ],
  },
  {
    stat: '120+',
    statLabel: 'undergraduates mentored',
    when: 'Apr 2023 – May 2024 · Fullerton, CA',
    role: 'Teaching Associate & Research Assistant',
    company: 'Cal State Fullerton',
    points: [
      'Taught Professional Ethics in Computing, covering networking, cybersecurity, privacy, intellectual property and data mining.',
      'Ran system design workshops on building scalable front ends and back ends.',
    ],
  },
  {
    stat: '26',
    statLabel: 'features shipped',
    when: 'Feb 2021 – Jul 2022 · India',
    role: 'Programmer Analyst',
    company: 'Cognizant',
    points: [
      'Shipped 26 features on a pharmaceutical portal using Scrum and Kanban.',
      'Built React front ends with at least 95% unit test coverage, backed by MySQL at 99.9% uptime.',
      'Managed access for 400+ employees through Active Directory, which cut service request resolution time by 20%.',
      'Started as an intern and earned ServiceNow CSA and CAD certifications.',
    ],
  },
];

export const education = {
  degree: 'M.S. in Computer Science',
  school: 'California State University, Fullerton',
  facts: [
    { label: 'Taught', value: '120+ students' },
    { label: 'Research', value: '2023' },
    { label: 'Built', value: 'LibManage' },
  ],
  lists: [
    {
      title: 'Anthropic credentials',
      items: [
        'Claude Certified Developer',
        'Claude Certified Associate',
        'Building with the Claude API',
        'Model Context Protocol',
        'Claude Code in Action',
        'Agent Skills',
      ],
    },
    {
      title: 'Other certifications',
      items: [
        'ServiceNow CSA & CAD',
        'Microsoft Software Development',
        'Docker Compose',
        'MTA: Programming in Java',
      ],
    },
  ],
};

export const skills = [
  {
    id: 'front',
    label: 'Front end',
    lede: 'Interfaces that load fast and feel obvious.',
    items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Redux', 'Tailwind CSS', 'Server-side rendering'],
  },
  {
    id: 'back',
    label: 'Back end',
    lede: 'APIs and data that hold up under load.',
    items: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Node.js', 'Flask', 'JWT & OAuth2', 'PostgreSQL', 'MySQL', 'MongoDB', 'JMS'],
  },
  {
    id: 'test',
    label: 'Testing',
    lede: 'Finding bugs before users do.',
    items: ['Playwright', 'JUnit', 'End-to-end testing', 'Unit testing', 'Jenkins', 'GitLab CI/CD', 'Agile & Scrum', 'JIRA'],
  },
  {
    id: 'ai',
    label: 'Cloud & AI',
    lede: 'Infrastructure underneath, and agents on top.',
    items: ['AWS (EC2, S3, RDS, Lambda)', 'Azure', 'Docker', 'Claude API', 'Model Context Protocol', 'Agentic workflows', 'Prompt engineering', 'Python'],
  },
];

export const sideQuests = [
  { glyph: '♫', caption: 'a drum kit you play with your keyboard', tint: '#E2C2B8', rot: '-3deg', href: 'https://github.com/Pranjal0211/drum-kit' },
  { glyph: 'ha!', caption: 'a meme page, for science', tint: '#D7C3B3', rot: '2deg', href: 'https://github.com/Pranjal0211/meme_webpage' },
  { glyph: '</>', caption: 'my React notebook', tint: '#E8D1C6', rot: '-1.5deg', href: 'https://github.com/Pranjal0211/Namaste-React' },
  { glyph: 'O(n)', caption: 'daily data structures reps', tint: '#CDB4AA', rot: '3deg', href: 'https://github.com/Pranjal0211/DSA-Programming' },
];

// The butterfly that replaces the mouse cursor.
// To change its colour, set `selected` to one of the names in `colors`.
export const butterflyCursor = {
  selected: 'lavender',
  colors: {
    lavender: { fill: '#B98AE0', ink: '#17121A' },
    rose: { fill: '#D97893', ink: '#2A1A17' },
    blush: { fill: '#F4BCCD', ink: '#5E2236' },
    // A list of colours makes a gradient across the wing.
    gilded: { fill: ['#FBE7B0', '#E9C46A', '#C8922B'], ink: '#3A2710' },
  },
};
