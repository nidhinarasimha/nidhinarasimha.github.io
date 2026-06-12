export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  problem: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  status?: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type TimelineItem = {
  date: string;
  title: string;
  subtitle: string;
  details: string[];
};

export const name = 'Nidhi Narasimha';
export const title = 'Computer Science Student | Full-Stack Developer';
export const shortBio =
  'I build user-focused web experiences, secure systems, and AI-driven applications while studying Computer Science at PES University.';

export const socials = [
  { label: 'GitHub', href: 'https://github.com/nidhinarasimha' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nidhi-n-udupa' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI'],
  },
  {
    title: 'Databases & Cloud',
    skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Cloud Computing', 'AWS'],
  },
  {
    title: 'AI & Tools',
    skills: ['Machine Learning', 'LangChain', 'Hugging Face', 'FAISS', 'Git', 'Linux'],
  },
];

export const projects: Project[] = [
  {
    slug: 'blockchain-shipment-tracking',
    title: 'ShipLedger',
    summary: 'A decentralized shipment tracking system using Ethereum, IPFS, and Node.js for transparent logistics management.',
    description:
      'A decentralized shipment tracking system using Ethereum, IPFS, and Node.js for transparent logistics management.',
    problem:
      'Built to replace centralized shipment tracking systems with a secure and immutable solution where stakeholders can verify shipment records without relying on a single authority.',
    features: [
      'Create shipment records with on-chain hash storage',
      'Verify shipment authenticity using blockchain hash comparison',
      'Role-based access control for staff and carriers',
      'Real-time event-driven tracking through smart contract events',
      'Secure document storage using IPFS',
      'Optimized design with no sensitive data stored on-chain',
    ],
    techStack: ['Ethereum', 'Solidity', 'Express', 'IPFS'],
    githubUrl: 'https://github.com/harshithjn/ShipLedger.git',
  },
  {
    slug: 'online-peer-evaluation',
    title: 'Online Peer Evaluation',
    summary:
      'A team project evaluation platform with role-based dashboards and automated feedback summaries.',
    description:
      'This evaluation system helps engineering teams collect structured feedback, compare performance metrics, and create a transparent review experience.',
    problem:
      'Designed to reduce bias and improve accountability in collaborative projects through centralized peer reviews and automated summaries.',
    features: [
      'Role-based dashboards for students and evaluators',
      'Project management with evaluation forms and progress tracking',
      'Automated feedback summary generation for team reviews',
      'Authentication flow and end-to-end testing using Cypress and Vitest',
    ],
    techStack: ['React', 'Vite', 'Convex', 'Clerk', 'Cypress', 'Vitest'],
    githubUrl: 'https://github.com/pestechnology/PESU_EC_CSE_F_P45_Online_Peer_Evaluation_Tool_Meraki.git',
  },
  {
    slug: 'shadowexec',
    title: 'ShadowExec',
    summary:
      'A secure remote command execution system using Python sockets and TLS encryption.',
    description:
      'ShadowExec provides authenticated remote command execution between a GUI client and server, emphasizing encrypted communication and audit logging.',
    problem:
      'Created to safely execute remote commands over insecure networks while ensuring only trusted clients connect to the server.',
    features: [
      'TLS/SSL-secured client-server communication',
      'Certificate-based authentication and encrypted command exchange',
      'Graphical interface for command control and output monitoring',
      'Logging mechanisms for command audit and usage tracking',
    ],
    techStack: ['Python', 'Socket Programming', 'TLS/SSL', 'Client-Server Architecture'],
    githubUrl: 'https://github.com/nidhinarasimha/shadow-exec--CN.git',
  },
  {
    slug: 'ai-job-tracker',
    title: 'AI-Powered Job Tracker',
    summary:
      'A full-stack job tracker with AI-based description summarization and resume suggestions.',
    description:
      'This platform helps job seekers organize applications, review role details, and get AI-generated improvements for resumes and job matching.',
    problem:
      'Built to simplify job search management and provide intelligent guidance for application improvement.',
    features: [
      'User authentication and job CRUD operations',
      'AI summarization of job descriptions using LangChain and Hugging Face',
      'Personalized resume improvement suggestions for applicants',
      'PostgreSQL-backed persistence and modern React interface',
    ],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'LangChain', 'Hugging Face'],
    githubUrl: 'https://github.com/nidhinarasimha/ai_job_tracker_full_project.git',
  },
  {
    slug: 'plantiq',
    title: 'PlantIQ',
    summary:
      'An AI platform for coffee cultivation, disease detection, and market discovery.',
    description:
      'PlantIQ combines image-based leaf diagnostics with market discovery tools to help coffee farmers detect disease and sell produce more efficiently.',
    problem:
      'Created to support coffee farmers with localized disease insights, farming advisories, and buyer connections through AI.',
    features: [
      'ResNet50 model for coffee leaf disease detection',
      'LangChain-powered RAG assistant for localized farming advice',
      'PostgreSQL data persistence and Google Maps integration',
      'Buyer discovery and market intel for coffee producers',
    ],
    techStack: ['ResNet50', 'FastAPI', 'React', 'Node.js', 'PostgreSQL', 'LangChain', 'LLaMA-2', 'FAISS'],
    githubUrl: 'https://github.com/nidhinarasimha/Plantiq.git',
    status: 'Ongoing',
  },
  {
    slug: 'e-commerce-platform',
    title: 'E-commerce Platform',
    summary:
      'A hackathon-built online marketplace featuring an integrated recommendation engine.',
    description:
      'Built during a hackathon, this platform includes product management, customer flows, and an intelligent recommendation system to improve user discovery.',
    problem:
      'Developed to demonstrate efficient product retrieval and recommendation using data structures in a fast-paced team environment.',
    features: [
      'User and product management for marketplace flows',
      'Recommendation logic for personalized product suggestions',
      'Performance-focused data retrieval using hash tables',
    ],
    techStack: ['JavaScript', 'React', 'Node.js', 'Hash Tables'],
    githubUrl: 'https://github.com/nidhiudupa17/e-commerce-platform',
  },
  {
    slug: 'hospital-management-system',
    title: 'ML Hackathon (Team 7)',
    summary:
      'A reinforcement learning and HMM-based Hangman agent from a hackathon team project.',
    description:
      'ML Hackathon Team 7: Mem1: Nidhi N | SRN: PES2UG23CS384 | Mem2: Muskan Goenka | SRN: PES2UG23CS355 | Mem3: Anish Nagula | SRN: PES2UG23CS358 | Mem4: Nidhi CR | SRN: PES2UG23CS382. This project explored a hybrid Hangman solver using a Q-learning agent with HMM-guided heuristics and a corpus-based lexicon. It emphasizes the challenges of state space explosion, the hidden Markov model as the effective decision engine, and strategies for robust exploration, reward shaping, and future improvements.',
    problem:
      'The main challenge was that the RL agent9s state representation created an astronomically large Q-table, making learning ineffective and forcing reliance on HMM heuristics for meaningful gameplay.',
    features: [
      'Primary challenge: state space explosion made the RL Q-table sparse and ineffective',
      'HMM acted as the real agent when the Q-table had no entry for almost every state',
      'Corpus-based dictionary matching with positional and bigram fallback heuristics',
      'Guided epsilon-greedy exploration using HMM probability distributions',
      'Future improvements: abstract state design, larger corpus, and stronger N-gram models',
    ],
    techStack: ['Python', 'Reinforcement Learning', 'Hidden Markov Model', 'NLP', 'Data Engineering'],
    githubUrl: 'https://github.com/nidhiudupa17/hospital-management-system',
  },
  {
    slug: 'hepatitis-c-analysis',
    title: 'Hepatitis C Analysis Case Study',
    summary:
      'A data analysis case study focused on Hepatitis C data quality and insights.',
    description:
      'This analysis project involved cleaning, preprocessing, and visualizing Hepatitis C data to extract actionable health insights.',
    problem:
      'Created to improve the reliability of medical data analysis by ensuring high data quality and meaningful exploratory insights.',
    features: [
      'Exploratory data analysis and visualization',
      'Data cleaning and preprocessing for accuracy',
      'Statistical techniques to validate data quality before modeling',
    ],
    techStack: ['Python', 'Data Analytics', 'Statistical Analysis'],
    githubUrl: 'https://github.com/nidhiudupa17/hepatitis-c-analysis',
  },
];

export const timeline: TimelineItem[] = [
  {
    date: 'Aug 2023 - Present',
    title: 'B.Tech in Computer Science',
    subtitle: 'PES University, Bangalore',
    details: [
      'Relevant coursework: DSA, DBMS, Web Technology, Networks, OS, ML, Cloud Computing, Blockchain',
      'Active member of IEEE PESU branch, Kannada Koota, and CodeChef community',
    ],
  },
  {
    date: 'May 2024',
    title: 'E-commerce Hackathon Project',
    subtitle: 'DSA-focused team implementation',
    details: [
      'Designed an online marketplace with a recommendation system',
      'Used hash tables to optimize product retrieval and updates',
    ],
  },
  {
    date: '2025',
    title: 'ML Hackathon',
    subtitle: 'Hackathon development',
    details: [
      'Primary challenge: state space explosion rendered the Q-table sparse and ineffective',
      'HMM heuristics dominated gameplay when the RL agent had no Q-table entries',
      'Corpus mismatch and fallback heuristics led to weak generalization on unseen words',
    ],
  },
  {
    date: '2024',
    title: 'AI & Cloud Certifications',
    subtitle: 'Microsoft and AWS introductory certificates',
    details: [
      'Microsoft Introduction to AI in Azure',
      'Amazon Virtual Private Cloud (VPC) fundamentals',
      'Introduction to Data Engineering in Google Cloud',
    ],
  },
];

export const contactInfo = {
  email: 'nidhiudupa17@gmail.com',
  location: 'Bangalore, India',
};
