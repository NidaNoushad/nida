// import nida from './assets/Images/image.jpg'
import nida from '../src/assets/images/image.jpg'
import logo1 from '../src/assets/images/logo1.png'
import logo2 from '../src/assets/images/logo2.png'
import logo3 from '../src/assets/images/logo3.png'
import logo4 from '../src/assets/images/logo4.png'
const logotext = ".";
const meta = {
    title: "Nida Noushad",
    description: "I’m Nida Noushad-frontEnd Developer",
};

const introdata = {
    title: "I’m Nida Noushad",
    animated: {
        first: "I love coding",
        // second: "I code cool websites",
        third: "I am Front-End Developer",
    },
    description: "I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO",
    // your_img_url: "react-portfolio\src\assets\images\image.jpg",
    your_img_url: nida,
};

const dataabout = {
    title: "about my self",
    aboutme: "Ambitious and self-motivated individual with a passion for technology and a developing skill set in front-end development. Committed to continuous learning and seeking opportunities to expand my knowledge",
};
 const worktimeline = [{
         jobtitle: "",
         where: "",
         date: "",
     },
     {
         jobtitle: "",
         where: "",
         date: "",
     },
     {
         jobtitle: "",
         where: "",
         date: "",
     },
 ];

const skills = [{
        name: "React js",
        value: 70,
    },
    {
        name: "Python",
        value: 40,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "HTML5",
        value: 85,
    },
    {
        name: "css",
        value: 85,
    },
    {
        name: "Bootstrap",
        value: 75,
    },
    {
        name: "c",
        value: 60,
    },
];

const services = [{
        title: "Landing Page",
        description: "Designed and developed a static landing page for a company website. Created a clean and modern UI with HTML and CSS, focusing on simplicity and elegance. Implemented responsive design techniques to ensure the website looks great on desktop and mobile devices.",
    },
    {
        title: "Responsive Website Redesign",
        description: "Redesigned an existing website to be fully responsive and mobile-friendly. Utilized media queries and flexbox to ensure optimal layout and styling across various screen sizes.",
    },
    
];

const dataportfolio = [{
        img: logo1,
        description: "designed and developed a modern,user-friendly static website of a travel agency, Utilized HTML, CSS, and ReactJs .",
        link: "https://nidanoushad.github.io/RoamX/",
    },
    {
        img: logo2,
        description: "Created 'GlowUp,' a captivating static website using ReactJS and FramerMotion",
        link: "https://nidanoushad.github.io/GlowUp/",
    },
    {
        img: logo3,
        description: "Developed the 'Bingo' static website from scratch using HTML, CSS, and Sass to craft a visually appealing and responsive platform",
        link: "https://nidanoushad.github.io/Bootstrap-with-sass/",
    },
    {
        img: logo4,
        description: "",
        link: "https://nidanoushad.github.io/Contact-us/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "nida11noushad@gmail.com",
    // YOUR_FONE: "(555)123-4567",
    description:  "Thank you for visiting my portfolio! If you have any questions, inquiries, or would like to discuss potential collaborations, please feel free to send me a message using the form below. Let's connect and explore how we can work together to bring your ideas to life!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_26v9bvu",
    YOUR_TEMPLATE_ID: "template_45v32eg",
    YOUR_USER_ID: "o1kI_v4RcN7Y5nzhD",
};

const socialprofils = {
    github: "https://github.com/NidaNoushad",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/nida-noushad/",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};