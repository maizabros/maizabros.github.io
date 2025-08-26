import emoji from "react-easy-emoji";
import loading_coffee from "../assets/lottie/loading_coffee";

const es = {
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
    section: "Inicio",
    title: "¡Hola!",
    subTitle: emoji(
      "Mi nombre es Adrian Maiza, Ingeniero de IA y Machine Learning con más de 2 años de experiencia en investigación y desarrollo. Actualmente trabajando en Computermind Corp. en Tokio, enfocado en investigación académica y desarrollo de tecnologías de IA."
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
    section: "Habilidades",
    title: "¿Qué puedo hacer?",
    subTitle:
      "Soy un Ingeniero de IA y Machine Learning con más de 2 años de experiencia en investigación y desarrollo. Desde investigar técnicas de Deep Learning de vanguardia hasta desarrollar sistemas de IA en producción, aquí tienes algunas de mis habilidades:",
    skills: [
      emoji(
        "🔍 Investigar en el estado del arte del Deep Learning y la IA Generativa"
      ),
      emoji("💻 Desarrollar modelos de Machine Learning con PyTorch"),
      emoji("🤖 Crear y entrenar modelos de IA Generativa"),
      emoji("📊 Análisis y visualización de datos"),
      emoji("🌐 Desarrollo web con React"),
      emoji("📝 Escribir artículos académicos"),
      emoji("🗣️ Dar charlas y presentaciones"),
      emoji("🔧 Uso avanzado de Linux y Windows"),
      emoji(
        "🗺️ Nativo en español, francés y euskera, fluido en inglés y nivel avanzado en japonés (~N2)"
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
      imageSrc: `https://img.shields.io/badge/${encodeURIComponent(
        name
      )}-${color}?style=for-the-badge&logo=${name.toLowerCase()}&logoColor=${logoColor}`,
    })),
    display: true,
  },

  educationInfo: {
    section: "Educación",
    title: emoji("Educación 📚🎓"),
    schools: [
      {
        schoolName: "Universidad Pública de Navarra",
        logo: require("../assets/images/logo_navarrensis_red.png"),
        subHeader: "Grado en Ingeniería Informática",
        duration: "Septiembre 2016 - Junio 2022",
        desc: "Especialización en Sistemas Inteligentes",
        descBullets: [
          "Cursos sobre Desarrollo de Software, Machine Learning, Sistemas Operativos, Redes, Seguridad, Bases de Datos, etc.",
          'Matrícula de Honor en el Trabajo Fin de Grado "Generación de rostros humanos etiquetados mediante GANs para reconocimiento de emociones faciales"',
          'Segundo lugar en el concurso de Trabajo Fin de Grado en la "Semana de la IA 2023"',
        ],
      },
      {
        schoolName: "Blekinge Tekniska Högskola",
        logo: require("../assets/images/bthlogo_svart_platt.png"),
        subHeader: "Programa de Intercambio ERASMUS",
        duration: " Enero 2022 - Junio 2022",
        desc:
          "Programa de intercambio de la Unión Europea en Ciencias de la Computación en Blekinge, Suecia",
        descBullets: [
          "Cursos sobre Testeo de Software, Visualización de Datos y Sistemas de Soporte a la Decisión",
          "Obtención de la certificación ERASMUS C1 en inglés",
        ],
      },
    ],
    display: true,
  },

  workExperiences: {
    section: "Experiencia",
    title: emoji("Experiencia 💻💼"),
    experience: [
      {
        role: "Ingeniero de IA y Software",
        company: "Computermind Corp.",
        companylogo: require("../assets/images/computermind_logo.jpg"), // You'll need to add this logo
        date: "Abril 2025 - Presente",
        desc:
          "Investigación académica y desarrollo de nuevas tecnologías de IA para proyectos de stakeholders",
        descBullets: [
          "Investigación académica a través del análisis exhaustivo de papers de investigación",
          "Desarrollo de nuevas tecnologías de IA para proyectos de stakeholders usando Python",
          "Contribución a iniciativas de I+D en soluciones de IA y machine learning",
        ],
      },
      {
        role: "Asistente de Investigación",
        company: "Universidad Pública de Navarra",
        companylogo: require("../assets/images/logo_navarrensis_red.png"),
        date: "Octubre 2022 - Diciembre 2023",
        desc:
          "Investigación sobre técnicas de IA Generativa y Deep Learning para la generación infinita de personajes audiovisuales consistentes en estilo",
        descBullets: [
          "Co-autor de artículo académico para IEEE WCCI 2024",
          "Desarrollo de técnicas de modelos de difusión para generación de personajes consistentes en estilo",
          "Participación en dos proyectos de investigación financiados por el Gobierno de Navarra",
          "Investigación sobre tecnologías de vanguardia en IA Generativa",
          "Seminarios sobre nuevas tecnologías del estado del arte en Deep Learning",
        ],
      },
      {
        role: "Desarrollador Full-Stack (Prácticas)",
        company: "Tracasa Instrumental S.L.",
        companylogo: require("../assets/images/TracasaLogo.png"),
        date: "Septiembre 2021 – Enero 2022",
        desc:
          "Prácticas curriculares como Desarrollador Full-Stack miembro de un equipo Scrum en el Departamento de Justicia",
        descBullets: [
          "Desarrollo Full Stack (SQL, C#, AngularJS, Javascript, Bootstrap, CSS, etc.)",
          "Desarrolo de soluciones software para gestión procesal",
          "Desarrollo de mock-ups de futuras funcionalidades con continuo feedback de cliente",
          "Trabajo en un entorno de desarrollo Ágil, basado en Scrum",
        ],
      },
    ],
    display: true,
  },

  openSource: {
    title: emoji("Open Source 🔓⌨️"),
    section: "Open Source",
    showGithubProfile: "false",
    buttonText: "Más proyectos",
    display: true,
  },

  bigProjects: {
    section: "Proyectos",
    title: "Proyectos Grandes",
    subtitle:
      "Aquí tienes algunos de los proyectos más importantes en los que he tenido la oportunidad de trabajar. ",
    projects: [
      {
        image: require("../assets/images/thesisFront.png"),
        projectName: "Tesis de Grado",
        projectDesc:
          "Generación de rostros humanos etiquetados mediante GANs para el reconocimiento de emociones faciales",
        footerLink: [
          {
            name: "Publicación",
            url:
              "https://academica-e.unavarra.es/entities/publication/c76e0405-6881-4a96-b895-02fae716f18c",
          },
          {
            name: "Tesis",
            url: require("../assets/pdf/Thesis.pdf"),
          },
        ],
      },
      {
        image: require("../assets/images/research_project.png"),
        projectName: "Artículo de Investigación",
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
          "Desarrollo en el Sistema de Gestión Procesal AVANTIUS para el Ministerio de Justicia de varias provincias españolas",
        footerLink: [
          {
            name: "Descripción del Sistema",
            url:
              "https://tracasa.es/proyectos/avantius-sistema-de-gestion-procesal-de-justicia/",
          },
        ],
      },
    ],
    display: true,
  },

  achievementSection: {
    section: "Logros",
    title: emoji("Logros y Certificaciones 🏆💯 "),
    subtitle:
      "He tenido la suerte de ser reconocido por mi trabajo en IA y Deep Learning. Aquí tienes algunos de mis logros y certificaciones.",

    achievementsCards: [
      {
        title: "2º Lugar en concurso de Trabajo Fin de Grado",
        subtitle:
          "Finalista y ganador del segundo premio en el concurso de Trabajo Fin de Grado de la Cátedra Tracasa-UPNA en la Semana de la IA 2023.",
        image: require("../assets/images/CatedraTracasUPNALogo.png"),
        imageAlt: "Tracasa-UPNA Logo",
        type: "achievement",
        footerLink: [
          {
            name: "Certificación",
            url: "",
          },
          {
            name: "Concurso",
            url:
              "https://www.unavarra.es/catedra-tracasa/semana-de-la-ia/ediciones-anteriores/2023/semana-ia-2023",
          },
          {
            name: "Póster",
            url: require("../assets/pdf/Poster TFG.pdf"),
          },
        ],
      },
      {
        title: "Especialización en Deep Learning de Coursera",
        subtitle:
          "Especialización en Deep Learning de Andrew Ng en Coursera. 5 cursos sobre Redes Neuronales, CNNs, RNNs, etc.",
        image: require("../assets/images/courseraLogo.png"),
        imageAlt: "Coursera Logo",
        type: "certification",
        footerLink: [
          {
            name: "Certificación",
            url:
              "https://www.coursera.org/account/accomplishments/specialization/certificate/3H3S7Y7E2U32",
          },
          {
            name: "Curso",
            url: "https://www.coursera.org/specializations/deep-learning",
          },
        ],
      },
      {
        title: "Especialización en GANs (Redes Generativas Adversarias)",
        subtitle:
          "Especialización en GANs de DeepLearning.AI en Coursera. 3 cursos sobre GANs, StyleGAN, etc.",
        image: require("../assets/images/courseraLogo.png"),
        imageAlt: "Coursera Logo",
        type: "certification",
        footerLink: [
          {
            name: "Certificación",
            url:
              "https://www.coursera.org/account/accomplishments/specialization/certificate/NV83LN4TJA22",
          },
          {
            name: "Curso",
            url:
              "https://www.coursera.org/specializations/generative-adversarial-networks-gans",
          },
        ],
      },
      {
        title: "Certificación SAFe® 5 Practitioner",
        subtitle:
          "Certificación Scaled Agile Framework (SAFe) 5 Practitioner otorgada por Scaled Agile, Inc.",
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
    section: "Presentaciones",
    title: emoji("Presentaciones 🧑‍🏫"),
    subtitle: emoji(
      "Me encanta crear presentaciones y dar charlas sobre mi trabajo en IA y Deep Learning."
    ),

    talks: [
      {
        title: "GANs: Redes Generativas Adversarias",
        subtitle:
          "Seminario en español sobre Redes Generativas Adversarias, sus aplicaciones y limitaciones.",
        slides_url: require("../assets/pdf/Seminario GANs.pdf"),
      },
      {
        title: "GANs: Arquitecturas GAN Avanzadas",
        subtitle:
          "Seminario en español sobre arquitecturas avanzadas de Redes Generativas Adversarias como StyleGAN, CycleGAN, etc.",
        slides_url: require("../assets/pdf/Arquitecturas_GAN_Avanzadas.pdf"),
      },
      {
        title: "Desde las bases hasta Stable Diffusion",
        subtitle:
          "Seminario en español sobre Difusión Estable, comenzando desde lo básico.",
        slides_url: require("../assets/pdf/Desde las bases hasta Stable Diffusion.pdf"),
      },
      {
        title: "Expandiendo Stable Diffusion",
        subtitle:
          "Seminario en español sobre métodos para re-entrenar y expandir las capacidades de la Difusión Estable.",
        slides_url: require("../assets/pdf/Expandiendo Stable Diffusion.pdf"),
      },
    ],
    display: true,
  },

  resumeSection: {
    section: "Currículum",
    title: "Currículum",
    buttonText: "Descargar Currículum",
    subtitle: "Descarga el Currículum aquí",
    display: true,
  },

  contactInfo: {
    section: "Contacto",
    title: emoji("Contáctame 📬"),
    buttonText: "Contáctame",
    subtitle:
      "Continúo buscando nuevos desafíos y oportunidades. ¡No dudes en contactarme!",
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

export { es };
