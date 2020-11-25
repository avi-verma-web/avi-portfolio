import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Avinash Verma', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Avinash Verma',
  subtitle: 'I am a Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'a.jpeg',
  paragraphOne:
    'I am a dedicated web developer who specializes in developing full-stack web applications using practical frameworks.I am passionate about solving problems—a good solution usually requires a dose of creativity that then requires more effort to adapt and perfect.',
  paragraphTwo:
    'I speacialize in Reactjs | NodeJs | ExpressJs | MongoDB | Redux | CSS | Bootstrap | HTML | Javascript | Firebase | Python | Figma | Formik | React-Native.',
  paragraphThree: 'I love to code and create.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fullecom.png',
    title: 'Ecommerce Web App',
    info:
      'Ecommerce website built with MERN stack, React Context API for state management, pure CSS for style with paypal checkout integration.',
    info2:
      'Created backend express server. Mongodb to store the data in backend. React functional components to design the user interface. React context api for state management. CSS for styling. Cloudinary for image storage.Heroku for deployment is used.',
    url: 'https://avinash-react-fullecommerce.herokuapp.com/',
    repo: 'https://github.com/avi-verma-web/fullEcommerce-Mern-react', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'netflix.png',
    title: 'Netflix UI',
    info:
      'Netflix UI using reactjs functional components, React context API for state management, CSS flexbox for layout design and styling the components. Fisbase for hosting application',
    info2: '',
    url: 'https://netflix-clone-359d3.web.app/',
    repo: 'https://github.com/avi-verma-web/netflixclone-react', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'voice.png',
    title: 'Voice recognition news app',
    info:
      'Conversational Voice Controlled React News Application using Alan AI built using react.Created a backend server using Alan AI.Used material ui for styling react functional components.',
    info2: '',
    url: 'https://avinashvoicenews.netlify.app/',
    repo: 'https://github.com/avi-verma-web/avi-voice-news', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'search.png',
    title: 'Search Engine',
    info:
      'Prototype of search engine using react js. Used google api to perform searches. React Context api for state passing between components.CSS flexbox for layout and styling. Firebase as hosting platform.',
    info2: '',
    url: 'https://avi--clone.web.app/',
    repo: 'https://github.com/avi-verma-web/react-Search-engine', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'contactbook.png',
    title: 'Redux Contact Book',
    info:
      'A react contact book with Redux. Complete CRUD operations and management of contacts using react-redux. Bootstrap for styling while firebase for deploying the application',
    info2: '',
    url: 'https://avi-redux-contactbook.web.app/',
    repo: 'https://github.com/avi-verma-web/react-redux-contact-book', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'imavinashverma99@gmail.com',
  email: 'https://mail.google.com/mail/u/0/#inbox',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@imavinashverma99',
    },
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
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
