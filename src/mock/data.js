import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Avinash Verma | Senior Software Engineer & AI Engineer',
  lang: 'en',
  description: 'Avinash Verma — Senior Software Engineer with 6+ years of experience in full-stack development and applied AI engineering.',
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm",
  name: 'Avinash Verma',
  subtitle: 'Senior Software Engineer | Full-stack & AI Engineering',
  cta: 'Explore my work',
};

// ABOUT DATA
export const aboutData = {
  img: 'a.jpeg',
  paragraphOne:
    'I am a Senior Software Engineer with 6+ years of experience building and improving full-stack web applications. I work across frontend, backend and cloud technologies, with experience in Angular, React, Node.js, TypeScript and AWS.',
  paragraphTwo:
    'I am also focused on applied AI engineering: LLM integrations, RAG, semantic search, embeddings, MCP and agentic workflows. I enjoy turning practical engineering problems into reliable, maintainable products.',
  paragraphThree:
    'I completed my postgraduate studies at ABV-IIITM Gwalior in 2019. I currently work at UnifyCX as a Senior Engineer.',
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'voice.png',
    title: 'Plant Analyzer',
    info:
      'AI-powered plant analysis application. Uses Google Gemini 2.0 Flash for plant identification, health analysis and care recommendations, with image processing and PDF report generation.',
    url: 'https://github.com/avi-verma-web/geminiAI-plant-analysis-tool',
    repo: 'https://github.com/avi-verma-web/geminiAI-plant-analysis-tool',
  },
  {
    id: nanoid(),
    img: 'mern_expense_jpeg.jpg',
    title: 'MERN Expense Tracker',
    info:
      'Full-stack expense tracker with authentication, income and expense management, category insights and charts. Built with React, Vite, Redux Toolkit, React Query, Tailwind CSS, Node.js, Express, MongoDB and JWT.',
    url: 'https://avi-mern-expense-tracker.netlify.app/',
    repo: 'https://github.com/avi-verma-web/MERN_EXPENSE_Tracker-2025',
  },
  {
    id: nanoid(),
    img: 'avi_seo_gen.jpg',
    title: 'Gen AI SEO Generator',
    info:
      'AI-powered SEO keyword generator using Cohere GenAI, Firebase Google Sign-In and Firestore. Built with React 19, Tailwind CSS, Vite and Axios.',
    url: 'https://avi-coheregen-ai-seo-generator.netlify.app/login',
    repo: 'https://github.com/avi-verma-web/gen-ai-seo-generator',
  },
  {
    id: nanoid(),
    img: 'chatSock.PNG',
    title: 'Real-time Chat Application',
    info:
      'Real-time chat application built with Socket.IO, Express and React Hooks.',
    url: 'https://avinash-chat-app.netlify.app/',
    repo: 'https://github.com/avi-verma-web/socket-chat-app-react-avi-frontend',
  },
  {
    id: nanoid(),
    img: 'voice.png',
    title: 'Voice Recognition News App',
    info:
      'Conversational voice-controlled React news application built with Alan AI and Material UI.',
    url: 'https://avinashvoicenews.netlify.app/',
    repo: 'https://github.com/avi-verma-web/avi-voice-news',
  },
  {
    id: nanoid(),
    img: 'netflix.png',
    title: 'Netflix UI',
    info:
      'Netflix-style interface built with React functional components, Context API and CSS Flexbox.',
    url: 'https://netflix-clone-359d3.web.app/',
    repo: 'https://github.com/avi-verma-web/netflixclone-react',
  },
  {
    id: nanoid(),
    img: 'search.png',
    title: 'React Search Engine',
    info:
      'Search-engine prototype using React, Google API and Context API.',
    url: 'https://avi--clone.web.app/',
    repo: 'https://github.com/avi-verma-web/react-Search-engine',
  },
  {
    id: nanoid(),
    img: 'contactbook.png',
    title: 'Redux Contact Book',
    info:
      'Contact management application with CRUD operations using React and Redux.',
    url: 'https://avi-redux-contactbook.web.app/',
    repo: 'https://github.com/avi-verma-web/react-redux-contact-book',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Have a project or opportunity in mind? Get in touch.',
  btn: 'Email Avinash',
  email: 'mailto:imavinashverma99@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/avinash-verma-ab0021b5/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/avi-verma-web',
    },
    {
      id: nanoid(),
      name: 'hashnode',
      url: 'https://aviverma.hashnode.dev/',
    },
  ],
};

// Github star/fork buttons
export const githubButtons = {
  isEnabled: false,
};
