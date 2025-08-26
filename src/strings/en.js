import emoji from "react-easy-emoji";
import loading_coffee from "../assets/lottie/loading_coffee";

const en = {
  splashScreen: {
    enabled: true,
    animation: loading_coffee,
    duration: 3000,
  },

  illustration: {
    animated: true,
  },

  greeting: {
    username: "Adrian Maiza",
    section: "Home",
    title: "Hello!",
    subTitle: emoji(
      "My name is Adrian Maiza, an AI and Machine Learning Engineer with over 2 years of research and development experience. Currently working at Computermind Corp. in Tokyo, focusing on academic research and AI technology development."
    ),
    resumeLink: require("../assets/pdf/Maiza_Adrian__CV.pdf"),
    display: true,
  },

  socialMediaLinks: {
    github: "https://github.com/maizabros",
    linkedin: "https://www.linkedin.com/in/adrianmaiza/",
    gmail: "adrian.maiza@gmail.com",
    researchGate: "https://www.researchgate.net/profile/Adrian-Maiza",
    display: true,
  },

  skillsSection: {
    section: "Skills",
    title: "What can I do?",
    subTitle:
      "I'm an AI and Machine Learning Engineer with over 2 years of research and development experience. From researching state-of-the-art Deep Learning techniques to developing production AI systems, here are some of my skills:",
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
      emoji("🔧 Advanced use of Linux and Windows"),
      emoji(
        "🗺️ Native in Spanish, French and Basque, fluent in English and Advanced in Japanese (~N2)"
      ),
    ],
    softwareSkills: [
      { name: "Python", color: "3670A0", logoColor: "ffdd54" },
      { name: "PyTorch", color: "EE4C2C", logoColor: "white" },
      { name: "HTML5", color: "E34F26", logoColor: "white" },
      { name: "CSS3", color: "1572B6", logoColor: "white" },
      { name: "JavaScript", color: "F7DF1E", logoColor: "black" },
      { name: "React", color: "61DAFB", logoColor: "black" },
      { name: "Angular", color: "DD0031", logoColor: "white" },
      { name: "NPM", color: "CB3837", logoColor: "white" },
      { name: "C", color: "00599C", logoColor: "white" },
      { name: "LaTeX", color: "008080", logoColor: "white" },
      { name: "Pandas", color: "150458", logoColor: "white" },
      { name: "NumPy", color: "013243", logoColor: "white" },
      { name: "Java", color: "ED8B00", logoColor: "white" },
      { name: "Git", color: "F05032", logoColor: "white" },
      { name: "SQL", color: "00000F", logoColor: "white" },
      { name: "Weights & Biases", color: "FFBE00", logoColor: "white" },
      { name: "Docker", color: "2496ED", logoColor: "white" },
      { name: "Linux", color: "FCC624", logoColor: "black" },
    ].map(({ name, color, logoColor }) => ({
      imageSrc: `${"https://img.shields.io/badge/"}${encodeURIComponent(
        name
      )}-${color}?style=for-the-badge&logo=${name.toLowerCase()}&logoColor=${logoColor}`,
    })),
    display: true,
  },

  educationInfo: {
    section: "Education",
    title: emoji("Education 📚🎓"),
    schools: [
      {
        schoolName: "Public University of Navarra",
        logo: require("../assets/images/logo_navarrensis_red.png"),
        subHeader: "Bachelor's Degree in Computer Engineering",
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
        logo: require("../assets/images/bthlogo_svart_platt.png"),
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
    display: true,
  },

  workExperiences: {
    section: "Experience",
    title: emoji("Experience 💻💼"),
    experience: [
      {
        role: "AI and Software Engineer",
        company: "Computermind Corp.",
        companylogo: require("../assets/images/computermind_logo.jpg"), // You'll need to add this logo
        date: "April 2025 - Present",
        desc:
          "Conducting academic research and developing new AI technologies for stakeholder projects",
        descBullets: [
          "Conduct academic research through comprehensive analysis of research papers",
          "Develop new AI technologies for stakeholder projects using Python",
          "Contribute to R&D initiatives in AI and machine learning solutions",
        ],
      },
      {
        role: "Research Assistant",
        company: "Public University of Navarra",
        companylogo: require("../assets/images/logo_navarrensis_red.png"),
        date: "October 2022 - December 2023",
        desc:
          "Research on Generative AI and Deep Learning techniques for infinite style-consistent audiovisual character generation",
        descBullets: [
          "Co-authored academic paper for IEEE WCCI 2024",
          "Developed diffusion model techniques for style-consistent character generation",
          "Participated in two government-funded research projects",
          "Research on state-of-the-art technologies regarding Generative AI",
          "Monthly seminars explaining new technologies",
        ],
      },
      {
        role: "Full-Stack Developer (Intern)",
        company: "Tracasa Instrumental S.L.",
        companylogo: require("../assets/images/TracasaLogo.png"),
        date: "September 2021 – January 2022",
        desc:
          "Curricular Internship as Scrum member Full-Stack Developer on the Justice Department",
        descBullets: [
          "Full Stack Development (SQL, C#, AngularJS, Javascript, Bootstrap, CSS, etc.)",
          "Development on judicial procedure software solutions",
          "Design of web mock-ups for future features with client feedback integration",
          "Worked in Agile, Scrum-based development environment",
        ],
      },
    ],
    display: true,
  },

  openSource: {
    title: emoji("Open Source 🔓⌨️"),
    section: "Open Source",
    showGithubProfile: "false",
    buttonText: "More Projects",
    display: true,
  },

  bigProjects: {
    section: "Projects",
    title: "Big Projects",
    subtitle:
      "Here are some of the most important projects I had the opportunity to work on. ",
    projects: [
      {
        image: require("../assets/images/thesisFront.png"),
        projectName: "Bachelor's Thesis",
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
            url: require("../assets/pdf/Thesis.pdf"),
          },
        ],
      },
      {
        image: require("../assets/images/research_project.png"),
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
        image: require("../assets/images/tracasa-instrumental-thumbnail.png"),
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
    display: true,
  },

  achievementSection: {
    section: "Achievements",
    title: emoji("Achievements And Certifications 🏆💯 "),
    subtitle:
      "I have been fortunate enough to have been recognized for my work in AI and Deep Learning. Here are some of my achievements and certifications.",

    achievementsCards: [
      {
        title: "2nd Place at Bachelor's Thesis contest",
        subtitle:
          "Finalist and Second price winner at Catedra Tracasa-UPNA 2023 AI Week's Bachelor's Thesis contest.",
        image: require("../assets/images/CatedraTracasUPNALogo.png"),
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
            name: "Poster",
            url: require("../assets/pdf/Poster TFG.pdf"),
          },
        ],
      },
      {
        title: "Coursera Deep Learning Specialization",
        subtitle:
          "Deep Learning Specialization by Andrew Ng on Coursera. 5 courses on Neural Networks, CNNs, RNNs, etc.",
        image: require("../assets/images/courseraLogo.png"),
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
        title: "Coursera Generative Adversarial Networks Specialization",
        subtitle:
          "GAN Specialization by DeepLearning.AI on Coursera. 3 courses on GANs, StyleGAN, etc.",
        image: require("../assets/images/courseraLogo.png"),
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
        image: require("../assets/images/safeLogo.png"),
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
    display: true,
  },

  talkSection: {
    section: "Presentations",
    title: emoji("Presentations 🧑‍🏫"),
    subtitle: emoji(
      "I love to create powerpoints and give talks about my work in AI and Deep Learning."
    ),
    extra: "✱Spanish ver.",

    talks: [
      {
        title: "GANs: Generative Adversarial Networks",
        subtitle:
          "Seminar in Spanish about Generative Adversarial Networks, their applications and limitations.",
        slides_url: require("../assets/pdf/Seminario GANs.pdf"),
      },
      {
        title: "GANs: Advanced GAN Architectures",
        subtitle:
          "Seminar in Spanish about more advanced Generative Adversarial Networks architectures like StyleGAN, CycleGAN, etc.",
        slides_url: require("../assets/pdf/Arquitecturas_GAN_Avanzadas.pdf"),
      },
      {
        title: "Towards Stable Diffusion",
        subtitle:
          "Seminar in Spanish about Stable Diffusion, starting from the basics.",
        slides_url: require("../assets/pdf/Desde las bases hasta Stable Diffusion.pdf"),
      },
      {
        title: "Expanding Stable Diffusion",
        subtitle:
          "Seminar in Spanish about methods to re-train and expand Stable Diffusion's capabilities.",
        slides_url: require("../assets/pdf/Expandiendo Stable Diffusion.pdf"),
      },
    ],
    display: true,
  },

  resumeSection: {
    section: "Resume",
    title: "Resume",
    buttonText: "Download my Resume",
    subtitle: "Feel free to download my resume",
    display: true,
  },

  contactInfo: {
    section: "Contact",
    title: emoji("Contact Me 📬"),
    buttonText: "Contact me",
    subtitle:
      "I am continually seeking new challenges and opportunities. Feel free to contact me.",
    number: "+81-080-1360-8103",
    email_address: "adrian.maiza@gmail.com",
    display: true,
  },

  isHireable: true,

  footer: {
    display: true,
    credit: emoji("Copyright © 2025. Created by Adrian Maiza"),
  },
};

export { en };
