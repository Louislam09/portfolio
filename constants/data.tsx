import { Apple, BookOpenText, HandCoins, Joystick } from "lucide-react";

export const mockData = {
  en: {
    profile: {
      name: "Luis Alejandro Martinez Magallanes",
      title: "Frontend Developer",
      summary:
        "I am a software development student focused on web technologies in the Front-End part. I have strong knowledge of the ReactJS library, React Native with Expo, and the CSS Materialize framework with which I can build beautiful and modern web pages and mobile applications.",
      contact: {
        location: "Santo Domingo Norte, 11201, Santo Domingo",
        phone: "+1 (829) 286 - 7606",
        email: "louislam09@hotmail.com",
      },
    },
    employmentHistory: [
      {
        title: "Frontend Developer",
        company: "Media Revolutions",
        start_date: "November 2020",
        end_date: "October 2021",
        responsibilities: [
          "Worked implementing and creating new features and solving bugs for an EWallet with NextJs in a monorepo infrastructure.",
        ],
      },
      {
        title: "Software Engineer - Front of Site",
        company: "Newfold Digital",
        start_date: "November 2021",
        end_date: "Present",
        responsibilities: [
          "Offering support, improvements, and implementation of new features for the 'ECommerce' application called Ecomdash.",
          "Handling complex order processing, inventory, and back-end data integration for large, medium, and small businesses selling to multiple markets (e.g., eBay, Amazon).",
          "Attending and solving issues customers have with the software.",
          "Making code changes to keep the Ecomdash project working with its different integrations (e.g., eBay, Amazon).",
        ],
      },
      {
        title: "Software Developer",
        company: "Torre.co",
        start_date: "April 2022",
        end_date: "August 2022",
        responsibilities: [
          "Adding new features and solving bugs on the Torre platform using Vuejs and Nuxt.",
        ],
      },
    ],
    education: [
      {
        degree: "Software Development Technologist",
        institution: "ITLA, Santo Domingo",
        graduation_date: "October 2019",
      },
      {
        program: "English Immersion Program",
        institution: "UASD, Santo Domingo",
        start_date: "January 2016",
        end_date: "December 2016",
      },
    ],
    references: [
      {
        name: "Ing. Mikhael Santos Fernandez",
        phone: "(849) 351 - 8051",
      },
      {
        name: "Ing. Raúl Luna",
        company: "Media Revolutions",
        phone: "+1 (829) 450-5444",
      },
    ],
    projects: [
      {
        name: "Santa Escritura",
        description:
          '"Santa Escritura" es tu compañero espiritual digital, brindando acceso fácil y rápido a textos sagrados. Explora versículos, busca libros y capítulos, y sumérgete en una experiencia de estudio espiritual en esta aplicación intuitiva y amigable.',
        platform: "Google Play",
        icon: <BookOpenText color="#0b3e3d" />,
        link: "https://play.google.com/store/apps/details?id=com.louislam09.bible",
      },
      {
        name: "Gestor de Gastos",
        description:
          "Take control of your weekly spending with Gestor de Gastos. This intuitive budgeting tool, built to simplify financial management, allows you to set a budget and keep track of your expenses with ease. Designed with a clean interface and straightforward functionality, it’s the perfect companion for anyone looking to stay on top of their finances.",
        icon: <HandCoins color="gold" />,

        link: "https://administrar-presupuesto.netlify.app/",
      },
      {
        name: "Fruit Match Game",
        description:
          "A sleek, fast-paced puzzle game built with pure JavaScript. Match juicy fruits, strategize your moves, and enjoy smooth, dynamic gameplay with every click. Perfectly crafted for an engaging user experience, this game highlights my ability to blend fun with functionality.",
        icon: <Apple color="#fa0000" />,

        link: "https://louislam09.github.io/CombineFruits/",
      },
      {
        name: "ConnectFour Game",
        description:
          "A multiplayer game created using FrontEnd HTML5 and CSS3, and BackEnd NodeJs with Express.js and Socket.io for player communication with integrated voice chat via PeerJS.",
        icon: <Joystick color="lightblue" />,

        link: "https://github.com/Louislam09/connect-four",
      },
    ],
    projects2: [
      {
        name: "Santa Escritura",
        description:
          '"Santa Escritura" es tu compañero espiritual digital, brindando acceso fácil y rápido a textos sagrados.',
        longDescription:
          '"Santa Escritura" is your digital spiritual companion, providing easy and quick access to sacred texts. This intuitive and user-friendly application allows users to explore verses, search for books and chapters, and immerse themselves in a spiritual study experience.',
        platform: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.louislam09.bible",
        imageUrl: "/adaptive-icon.png",
        features: [
          "Extensive library of biblical texts",
          "Powerful search functionality",
          "Bookmarking and annotation tools",
          "Offline access to scriptures",
          "User-friendly interface",
          "Multiple translations available",
        ],
        technologies: [
          "React Native",
          "Expo",
          "JavaScript",
          "RESTful APIs",
          "AsyncStorage",
        ],
        learnings:
          "Developing 'Santa Escritura' deepened my understanding of mobile app development and working with large datasets. It also taught me the importance of creating intuitive user interfaces for diverse user groups.",
      },
      {
        name: "ConnectFour Game",
        description:
          "A multiplayer game created using FrontEnd HTML5 and CSS3, and BackEnd NodeJs with Express.js and Socket.io for player communication with integrated voice chat via PeerJS.",
        link: "https://connect-four-09.herokuapp.com/",
        imageUrl: "/connect-four.png", // Add this image to your public folder
        features: [
          "Real-time multiplayer gameplay",
          "Integrated voice chat",
          "Responsive design for various devices",
          "Custom room creation and joining",
        ],
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Node.js",
          "Express.js",
          "Socket.io",
          "PeerJS",
        ],
        learnings:
          "Building ConnectFour Game enhanced my skills in real-time web applications and taught me how to implement peer-to-peer communication in web browsers.",
      },
    ],
    links: {
      github: "https://github.com/Louislam09",
      linkedin:
        "https://www.linkedin.com/in/luis-alejandro-martinez-magallanes-643aba207",
    },
    skills: [
      "Node.js",
      "React",
      "Typescript",
      "NextJs",
      "JavaScript",
      "ReactJs",
      "React Native",
      "Expo",
      "Git",
      "CSS",
      "GraphQl",
      "HTML5",
      "Bootstrap",
      "Apollo Client",
      "CSS3",
      "Socket.io",
      "Express.js",
      "Python",
      "VueJs",
      "MongoDB",
      "PostgreSQL",
    ],
    languages: [
      { name: "Spanish", level: 100 },
      { name: "English", level: 95 },
      { name: "French", level: 20 },
    ],
  },
  es: {
    profile: {
      name: "Luis Alejandro Martinez Magallanes",
      title: "Desarrollador Frontend",
      summary:
        "Soy un estudiante de desarrollo de software enfocado en tecnologías web en la parte Front-End. Tengo un sólido conocimiento de la biblioteca ReactJS, React Native con Expo y el framework CSS Materialize con el que puedo construir páginas web y aplicaciones móviles hermosas y modernas.",
      contact: {
        location: "Santo Domingo Norte, 11201, Santo Domingo",
        phone: "+1 (829) 286 - 7606",
        email: "louislam09@hotmail.com",
      },
    },
    employmentHistory: [
      {
        title: "Desarrollador Frontend",
        company: "Media Revolutions",
        start_date: "Noviembre 2020",
        end_date: "Octubre 2021",
        responsibilities: [
          "Trabajé implementando y creando nuevas funciones y resolviendo errores para un EWallet con NextJs en una infraestructura de monorepo.",
        ],
      },
      {
        title: "Ingeniero de Software - Front of Site",
        company: "Newfold Digital",
        start_date: "Noviembre 2021",
        end_date: "Presente",
        responsibilities: [
          "Ofreciendo soporte, mejoras e implementación de nuevas funciones para la aplicación 'ECommerce' llamada Ecomdash.",
          "Manejando el procesamiento de pedidos complejos, inventario e integración de datos de back-end para empresas grandes, medianas y pequeñas que venden en múltiples mercados (por ejemplo, eBay, Amazon).",
          "Atendiendo y resolviendo problemas que los clientes tienen con el software.",
          "Haciendo cambios en el código para mantener el proyecto Ecomdash funcionando con sus diferentes integraciones (por ejemplo, eBay, Amazon).",
        ],
      },
      {
        title: "Desarrollador de Software",
        company: "Torre.co",
        start_date: "Abril 2022",
        end_date: "Agosto 2022",
        responsibilities: [
          "Añadiendo nuevas funciones y resolviendo errores en la plataforma Torre usando Vuejs y Nuxt.",
        ],
      },
    ],
    education: [
      {
        degree: "Tecnólogo en Desarrollo de Software",
        institution: "ITLA, Santo Domingo",
        graduation_date: "Octubre 2019",
      },
      {
        program: "Programa de Inmersión en Inglés",
        institution: "UASD, Santo Domingo",
        start_date: "Enero 2016",
        end_date: "Diciembre 2016",
      },
    ],
    references: [
      {
        name: "Ing. Mikhael Santos Fernandez",
        phone: "(849) 351 - 8051",
      },
      {
        name: "Ing. Raúl Luna",
        company: "Media Revolutions",
        phone: "+1 (829) 450-5444",
      },
    ],
    projects: [
      {
        name: "Santa Escritura",
        description:
          '"Santa Escritura" es tu compañero espiritual digital, brindando acceso fácil y rápido a textos sagrados. Explora versículos, busca libros y capítulos, y sumérgete en una experiencia de estudio espiritual con esta aplicación intuitiva y amigable.',
        platform: "Google Play",
        icon: <BookOpenText color="green" />,

        link: "https://play.google.com/store/apps/details?id=com.louislam09.bible",
      },
      {
        name: "Gestor de Gastos",
        description:
          "Toma HandCoins de tu gasto semanal con Gestor de Gastos. Esta herramienta de presupuesto intuitiva, diseñada para simplificar la gestión financiera, te permite establecer un presupuesto y llevar un seguimiento de tus gastos con facilidad. Diseñada con una interfaz limpia y funcionalidad sencilla, es el compañero perfecto para cualquier persona que busque mantenerse al tanto de sus finanzas.",
        icon: <HandCoins color="gold" />,

        link: "https://administrar-presupuesto.netlify.app/",
      },
      {
        name: "Fruit Match Game",
        description:
          "Un juego de rompecabezas elegante y rápido construido con JavaScript puro. Empareja frutas jugosas, planifica tus movimientos y disfruta de una jugabilidad fluida y dinámica con cada clic. Perfectamente elaborado para una experiencia de usuario atractiva, este juego destaca mi habilidad para combinar diversión con funcionalidad.",
        icon: <Apple color="#fa0000" />,
        link: "https://louislam09.github.io/CombineFruits/",
      },
      {
        name: "ConnectFour Game",
        description:
          "Un juego multijugador creado usando FrontEnd HTML5 y CSS3, y BackEnd NodeJs con Express.js y Socket.io para la comunicación entre jugadores con chat de voz integrado a través de PeerJS.",
        icon: <Joystick color="lightblue" />,

        link: "https://github.com/Louislam09/connect-four",
      },
    ],
    projects2: [
      {
        name: "Santa Escritura",
        description:
          '"Santa Escritura" es tu compañero espiritual digital, brindando acceso fácil y rápido a textos sagrados.',
        longDescription:
          '"Santa Escritura" is your digital spiritual companion, providing easy and quick access to sacred texts. This intuitive and user-friendly application allows users to explore verses, search for books and chapters, and immerse themselves in a spiritual study experience.',
        platform: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.louislam09.bible",
        imageUrl: "/adaptive-icon.png",
        features: [
          "Extensive library of biblical texts",
          "Powerful search functionality",
          "Bookmarking and annotation tools",
          "Offline access to scriptures",
          "User-friendly interface",
          "Multiple translations available",
        ],
        technologies: [
          "React Native",
          "Expo",
          "JavaScript",
          "RESTful APIs",
          "AsyncStorage",
        ],
        learnings:
          "Developing 'Santa Escritura' deepened my understanding of mobile app development and working with large datasets. It also taught me the importance of creating intuitive user interfaces for diverse user groups.",
      },
      {
        name: "ConnectFour Game",
        description:
          "A multiplayer game created using FrontEnd HTML5 and CSS3, and BackEnd NodeJs with Express.js and Socket.io for player communication with integrated voice chat via PeerJS.",
        link: "https://connect-four-09.herokuapp.com/",
        imageUrl: "/connect-four.png", // Add this image to your public folder
        features: [
          "Real-time multiplayer gameplay",
          "Integrated voice chat",
          "Responsive design for various devices",
          "Custom room creation and joining",
        ],
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Node.js",
          "Express.js",
          "Socket.io",
          "PeerJS",
        ],
        learnings:
          "Building ConnectFour Game enhanced my skills in real-time web applications and taught me how to implement peer-to-peer communication in web browsers.",
      },
    ],
    links: {
      github: "https://github.com/Louislam09",
      linkedin:
        "https://www.linkedin.com/in/luis-alejandro-martinez-magallanes-643aba207",
    },
    skills: [
      "Node.js",
      "React",
      "Typescript",
      "NextJs",
      "JavaScript",
      "ReactJs",
      "React Native",
      "Expo",
      "Git",
      "CSS",
      "GraphQl",
      "HTML5",
      "Bootstrap",
      "Apollo Client",
      "CSS3",
      "Socket.io",
      "Express.js",
      "Python",
      "VueJs",
      "MongoDB",
      "PostgreSQL",
    ],
    languages: [
      { name: "Spanish", level: 100 },
      { name: "English", level: 95 },
      { name: "French", level: 20 },
    ],
  },
};

// export default mockData;
