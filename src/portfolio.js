/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Adrian Maiza",
  title: "Hello!",
  subTitle: emoji(
    "My name is Adrian Maiza, a passionate Developer 💻 and AI Engineer 📊. Currenty advancing my Japanese language skills 📚  while looking for a full-time job 💼 here in Tokyo, Japan 🗾 "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/maizabros",
  linkedin: "https://www.linkedin.com/in/adrianmaiza/",
  gmail: "adrian.maiza@gmail.com",
  researchGate: "https://www.researchgate.net/profile/Adrian-Maiza",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What can I do?",
  subTitle:
    "I'm very curious polyglot who is always looking for new challenges. From researching the state-of-the-art in Deep Learning to learning languages, here are some of my skills:",
  skills: [
    emoji(
      "🔍 Research on novel techniques for Deep Learning and Generative AI"
    ),
    emoji("💻 Develop Machine Learning models with PyTorch"),
    emoji("🤖 Create and train Generative AI models"),
    emoji("📊 Data analysis and visualization"),
    emoji("🌐 Web Development with React"),
    emoji("📝 Write academic papers and reports"),
    emoji("🗣️ Give talks and presentations"),
    emoji("🔧 Advance use of Linux and Windows"),
    /* Add languages I can speak*/
    emoji(
      "🗺️ Native in Spanish, French and Basque; fluent in English and Intermediate in Japanese"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      // skillName: "Python",
      // fontAwesomeClassname: "fab fa-python",
      imageSrc:
        "https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    },
    {
      // skillName: "PyTorch",
      // fontAwesomeClassname: "fab fa-gripfire",
      imageSrc:
        "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white",
    },
    // {
    //   skillName: "Deep Learning",
    //   // fontAwesomeClassname: "fas fa-brain",
    // },
    {
      // skillName: "html-5",
      // fontAwesomeClassname: "fab fa-html5",
      imageSrc:
        "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    },
    {
      // skillName: "css3",
      // fontAwesomeClassname: "fab fa-css3-alt",
      imageSrc:
        "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    },
    {
      // skillName: "JavaScript",
      // fontAwesomeClassname: "fab fa-js",
      imageSrc:
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    },
    {
      // skillName: "reactjs",
      // fontAwesomeClassname: "fab fa-react",
      imageSrc:
        "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
    },
    {
      // skillName: "Angular",
      // fontAwesomeClassname: "fab fa-node",
      imageSrc:
        "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white",
    },
    {
      // skillName: "npm",
      // fontAwesomeClassname: "fab fa-npm",
      imageSrc:
        "https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white",
    },
    {
      // skillName: "C",
      // fontAwesomeClassname: "fas fa-laptop-code",
      imageSrc:
        "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
    },
    {
      // skillName: "LaTeX",
      // fontAwesomeClassname: "fas fa-laptop-code",
      imageSrc:
        "https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white",
    },
    {
      // skillName: "pandas",
      // fontAwesomeClassname: "fas fa-laptop-code",
      imageSrc:
        "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",
    },
    {
      // skillName: "numpy",
      // fontAwesomeClassname: "fas fa-laptop-code",
      imageSrc:
        "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
    },
    {
      // skillName: "Java",
      // fontAwesomeClassname: "fab fa-java",
      imageSrc:
        "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
    },
    {
      // skillName: "git",
      // fontAwesomeClassname
      imageSrc:
        "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
    },
    {
      // skillName: "sql-database",
      // fontAwesomeClassname: "fas fa-database",
      imageSrc:
        "https://img.shields.io/badge/SQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
      // skillName: "Weights & Biases",
      // fontAwesomeClassname: "fas fa-fire",
      imageSrc:
        "https://img.shields.io/badge/Weights%20%26%20Biases-FFBE00?style=for-the-badge&logo=weightsandbiases&logoColor=white",
    },
    {
      // skillName: "docker",
      // fontAwesomeClassname: "fab fa-docker",
      imageSrc:
        "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
    },
    {
      // skillName: "linux",
      // fontAwesomeClassname: "fab fa-linux",
      imageSrc:
        "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Public University of Navarra",
      logo: require("./assets/images/logo_navarrensis_red.png"),
      subHeader: "Bachellor's Degree in Computer Engineering",
      duration: "September 2016 - June 2022",
      desc: "Specialized on Intelligent Systems",
      descBullets: [
        "Took courses on Software Development, Machine Learning, Operative Systems, Networking, Security, Databases, etc.",
        'Honors on Bachelor\'s Thesis "Generating labeled human faces using GANs for Facial Emotion Recognition"',
        'Second place on Honors on Bachelor\'s Thesis contest in "AI Week 2023"',
      ],
    },
    {
      schoolName: "Blekinge Tekniska Högskola",
      logo: require("./assets/images/bthlogo_svart_platt.png"),
      subHeader: "ERASMUS Exchange Program",
      duration: " January 2022 - June 2022",
      desc:
        "European Union Exchange Program on Computer Science in Blekinge, Sweden",
      descBullets: [
        "Took courses on Software Testing, Data Visualization and Decision Support Systems",
        "Obtained C1 English ERASMUS certification",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning / Deep Learning",
      progressPercentage: "80%",
    },
    {
      Stack: "Programming",
      progressPercentage: "75%",
    },
    {
      Stack: "Generative AI",
      progressPercentage: "70%",
    },
    {
      Stack: "Research and Development",
      progressPercentage: "65%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Reseach Assistant",
      company: "Public University of Navarra",
      companylogo: require("./assets/images/logo_navarrensis_red.png"),
      date: "October 2022 - December 2023",
      desc:
        "Research on Generative AI and Deep Learning techniques for infinte style-consistent audiovisual character generation.",
      descBullets: [
        "Colaboration between University and Business teams",
        "Research on state-of-the-art technologies regarding Generative AI",
        "Infinite style-consistent audiovisual character generation project",
        "Experiment setup and result analysis",
        "Monthly seminars explaining new technologies",
        "Writting of academic research papers for AI journals",
        "Government funded projects",
      ],
    },
    {
      role: "Full-Stack Developer (Intern)",
      company: "Tracasa Instrumental S.L.",
      companylogo: require("./assets/images/TracasaLogo.png"),
      date: "September 2021 – December 2021",
      desc:
        "Curricular Internship as Scrum member Full-Stack Developer on the Justice Department",
      descBullets: [
        "Development of AVANTIUS Justice Process Management System",
        "Full Stack Development (SQL, C#, AngularJS, Javascript, Bootstrap, CSS, etc.)",
        "Scrum methodologies practitioner",
        "Design of web mock-ups for future features",
        "Preparation of the internship report",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of the most import projects I've worked on.",
  projects: [
    {
      image: require("./assets/images/thesisFront.png"),
      projectName: "Bachellor's Thesis",
      projectDesc:
        "Generating labeled human faces using GANs for Facial Emotion Recognition",
      footerLink: [
        {
          name: "Publication",
          url:
            "https://academica-e.unavarra.es/entities/publication/c76e0405-6881-4a96-b895-02fae716f18c",
        },
        {
          name: "Thesis (Spanish)",
          url: require("./assets/pdf/Thesis.pdf"),
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/research_project.png"),
      projectName: "Research Paper",
      projectDesc:
        "Enhancing DreamBooth With LoRA for Generating Unlimited Characters With Stable Diffusion. Presented at WCCI 2024 in Yokohama, Japan.",
      footerLink: [
        {
          name: "IEEE",
          url: "https://ieeexplore.ieee.org/document/10651300",
        },
      ],
    },
    {
      image: require("./assets/images/tracasa-instrumental-thumbnail.png"),
      projectName: "AVANTIUS",
      projectDesc:
        "Development of AVANTIUS Justice Process Management System for the Spanish Justice Department",
      footerLink: [
        {
          name: "System Description (Spanish)",
          url:
            "https://tracasa.es/proyectos/avantius-sistema-de-gestion-procesal-de-justicia/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆💯 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "2nd Place at Bachellor's Thesis contest",
      subtitle:
        "Finalist and Second price winner at Catedra Tracasa-UPNA 2023 AI Week's Bachellor's Thesis contest.",
      image: require("./assets/images/CatedraTracasUPNALogo.png"),
      imageAlt: "Tracasa-UPNA Logo",
      type: "achievement",
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Contest",
          url:
            "https://www.unavarra.es/catedra-tracasa/semana-de-la-ia/ediciones-anteriores/2023/semana-ia-2023",
        },
        {
          name: "Thesis Poster",
          url: require("./assets/pdf/Poster TFG.pdf"),
        },
      ],
    },
    {
      title: "Coursera Deep Learning Specialization",
      subtitle:
        "Deep Learning Specialization by Andrew Ng on Coursera. 5 courses on Neural Networks, CNNs, RNNs, etc.",
      image: require("./assets/images/courseraLogo.png"),
      imageAlt: "Coursera Logo",
      type: "certification",
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.coursera.org/account/accomplishments/specialization/certificate/3H3S7Y7E2U32",
        },
        {
          name: "Course",
          url: "https://www.coursera.org/specializations/deep-learning",
        },
      ],
    },
    {
      title: "Coursera Genertive Adversarial Networks Specialization",
      subtitle:
        "GAN Specialization by DeepLearning.AI on Coursera. 3 courses on GANs, StyleGAN, etc.",
      image: require("./assets/images/courseraLogo.png"),
      imageAlt: "Coursera Logo",
      type: "certification",
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.coursera.org/account/accomplishments/specialization/certificate/NV83LN4TJA22",
        },
        {
          name: "Course",
          url:
            "https://www.coursera.org/specializations/generative-adversarial-networks-gans",
        },
      ],
    },
    {
      title: "Certified SAFe® 5 Practitioner",
      subtitle:
        "Scaled Agile Framework (SAFe) 5 Practitioner certification by Scaled Agile, Inc.",
      image: require("./assets/images/safeLogo.png"),
      imageAlt: "SAFe Logo",
      type: "certification",
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: emoji("Presentations 🧑‍🏫"),
  subtitle: emoji(
    "I love to create powerpoints and give talks about my work in AI and Deep Learning."
  ),

  talks: [
    {
      title: "GANs: Generative Adversarial Networks",
      subtitle:
        "Seminar in Spanish about Generative Adversarial Networks, their applications and limitations.",
      slides_url: require("./assets/pdf/Seminario GANs.pdf"),
    },
    {
      title: "GANs: Advanced GAN Architectures",
      subtitle:
        "Seminar in Spanish about more advanced Generative Adversarial Networks architectures like StyleGAN, CycleGAN, etc.",
      slides_url: require("./assets/pdf/Arquitecturas_GAN_Avanzadas.pdf"),
    },
    {
      title: "Towards Stable Diffusion",
      subtitle:
        "Seminar in Spanish about Stable Diffusion, starting from the basics.",
      slides_url: require("./assets/pdf/Desde las bases hasta Stable Diffusion.pdf"),
    },
    {
      title: "Expanding Stable Diffusion",
      subtitle:
        "Seminar in Spanish about methods to re-train and expand Stable Diffusion's capabilities.",
      slides_url: require("./assets/pdf/Expandiendo Stable Diffusion.pdf"),
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📬"),
  subtitle:
    "I'm always looking for new challenges and opportunities. Feel free to contact me.",
  number: "+81-080-1360-8103",
  email_address: "adrian.maiza@gmail.com",
  display: true,
};

// Twitter Section

const twitterDetails = {
  userName: "maizabros", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};
