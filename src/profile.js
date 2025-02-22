// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Vijay",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};

const section2title = "About Me";
const about = {
  paragraph:
    "I am second year student at VIIT, Pune pursuing B.Tech in Information Technology, I am a full stack developer and MERN stack enthusiast. I am passionate about exploring new things. Below are some of my skills. ",
};
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "React",
    // svg: '',
    // faClass: "fa- brands fa - react",
    faClass: "fab fa-react",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "PHP",
    // svg: '',
    faClass: "fab fa-php",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "GitHub",
    // svg: '',
    // faClass: "fab fa-aws",
    faClass: "fab fa-github",
  },
];
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Score-Go",
    skills: ["BootStarp5, JavaScript (node.js, express.js), MongoDB"],
    url: "https://www.scorego.live/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Get-Notes",
    skills: ["HTML, CSS, JavaScript (LocalStorage)"],
    url: "https://vjymisal0.github.io/GetNotes/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Dental Care System",
    skills: ["Java, (JDBC, Swing), MySQL "],
    url: "https://github.com/vjymisal0/dental_care_system.git",
  }
  // {
  //   // Add image in './styles/images.css' in #project4
  //   id: "project4",
  //   name: "Project 4",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/vjymisal0",
  // },
  // {
  //   // Add image in './styles/images.css' in #project5
  //   id: "project5",
  //   name: "Project 5",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/vjymisal0",
  // },
  // {
  //   // Add image in './styles/images.css' in #project6
  //   id: "project6",
  //   name: "Project 6",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/vjymisal0",
  // },
];
// const section4Title = "Miscellaneous";
const miscellaneous = [
  // {
  //   // Add image in './styles/images.css' in #misc1
  //   id: "misc1",
  //   name: "Miscellaneous 1",
  //   url: "https://github.com/vjymisal0",
  // },
  // {
  //   // Add image in './styles/images.css' in #misc2
  //   id: "misc2",
  //   name: "Miscellaneous 2",
  //   url: "https://github.com/vjymisal0",
  // },
  // {
  //   // Add image in './styles/images.css' in #misc3
  //   id: "misc3",
  //   name: "Miscellaneous 3",
  //   url: "https://github.com/vjymisal0",
  // },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you have the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "I am currently looking for internship opportunities and new connections over professionall life. If you have any questions or want to say hi, please feel free to reach me...",
  copyright: "Vijay Misal",
  contactUrl: "misalvijay153@gmail.com",
};
const social = {
  github: "https://github.com/vjymisal0",
  facebook: "#",
  twitter: "https://twitter.com/me_vijay07",
  instagram: "https://www.instagram.com/vjy_.07/",
  linkedin: "https://www.linkedin.com/in/vijay-misal-b4b19b222/",
  resume: "https://drive.google.com/file/d/1pzGBY56WEsY7a_AjP_nv-aonVmvchkcD/view?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  // section4Title,
  section5Title,
};
