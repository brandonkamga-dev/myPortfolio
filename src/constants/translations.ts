export interface Translation {
  // Navigation
  nav: {
    home: string;
    about: string;
    experience: string;
    technologies: string;
    projects: string;
    certifications: string;
    lescracks: string;
    blog: string;
    contact: string;
  };

  // Hero Section
  hero: {
    name: string;
    title: string;
    description: string;
    viewProjects: string;
    contactMe: string;
  };

  // About Section
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    description3: string;
    downloadCV: string;
  };

  // Tech Stack Section
  techStack: {
    title: string;
    subtitle: string;
    categories: {
      frontend: string;
      backend: string;
      database: string;
      devopsCloud: string;
      aiDataScience: string;
      toolsOthers: string;
    };
  };

  // Projects Section
  projects: {
    title: string;
    subtitle: string;
    projectsList: {
      egolya: {
        title: string;
        description: string;
      };
      coachMyMove: {
        title: string;
        description: string;
      };
      lescracksWebsite: {
        title: string;
        description: string;
      };
      dishTrad: {
        title: string;
        description: string;
      };
      portfolioPersonnel: {
        title: string;
        description: string;
      };
    };
    buttons: {
      code: string;
      demo: string;
    };
  };

  // Experience Section
  experience: {
    title: string;
    subtitle: string;
    types: {
      education: string;
      leadership: string;
      teaching: string;
      work: string;
    };
    experiences: {
      baccalaureat: {
        title: string;
        organization: string;
        location: string;
      };
      gdscBackendLead: {
        title: string;
        organization: string;
        location: string;
        description: string[];
      };
      technicalInstructor: {
        title: string;
        organization: string;
        location: string;
        description: string[];
      };
      propentaTech: {
        title: string;
        organization: string;
        location: string;
        description: string[];
      };
      seesSoftengine: {
        title: string;
        organization: string;
        location: string;
        description: string[];
      };
    };
  };

  // Certifications Section
  certifications: {
    title: string;
    subtitle: string;
    idLabel: string;
    verifyButton: string;
  };

  // LesCracks Section
  lescracks: {
    title: string;
    description: string;
    visitButton: string;
  };

  // Contact Section
  contact: {
    title: string;
    description: string;
    whatsapp: string;
  };

  // Footer Section
  footer: {
    copyright: string;
    madeWith: string;
  };
}

export const translations: Record<'fr' | 'en', Translation> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      experience: "Parcours",
      technologies: "Technologies",
      projects: "Projets",
      certifications: "Certifications",
      lescracks: "LesCraCks",
      blog: "Blog",
      contact: "Contact"
    },

    hero: {
      name: "Brandon Kamga",
      title: "Développeur Full Stack & DevOps",
      description: "Passionné par l'ingénierie logicielle et le DevOps/Cloud, avec un intérêt particulier pour le machine learning. Je conçois et déploie des solutions techniques innovantes, alliant performance et fiabilité.",
      viewProjects: "Voir mes projets",
      contactMe: "Me contacter"
    },

    about: {
      title: "À propos",
      subtitle: "Développeur passionné et entrepreneur tech",
      description1: "Passionné par l'ingénierie logicielle, le développement web et le DevOps/Cloud, avec un intérêt marqué pour le machine learning.",
      description2: "Avec mes expériences professionnelles et mes side projects, j'ai acquis une expertise en développement web, automatisation DevOps et conception de solutions intelligentes.",
      description3: "Curieux et orienté impact, je transforme des idées ambitieuses en solutions concrètes. Je développe mon agence tech, LesCraKs, où mon équipe et moi formons et accompagnons de jeunes talents à bâtir une carrière solide dans la tech.",
      downloadCV: "Télécharger mon CV"
    },

    techStack: {
      title: "Stack Technique",
      subtitle: "Technologies et outils que j'utilise pour créer des solutions innovantes",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        devopsCloud: "DevOps & Cloud",
        aiDataScience: "AI & Data Science",
        toolsOthers: "Tools & Others"
      }
    },

    projects: {
      title: "Projets",
      subtitle: "Quelques réalisations qui illustrent mes compétences techniques",
      projectsList: {
        egolya: {
          title: "Egolya",
          description: "Extension web intelligente connectée à WhatsApp, agissant comme un assistant personnel d’apprentissage et de productivité. Elle permet d’analyser le contenu, reformuler, générer des résumés et interagir contextuellement grâce à l’IA."
        },
        coachMyMove: {
          title: "CoachMyMove",
          description: "Plateforme interactive conçue pour apprendre à jouer aux échecs avec un assistant IA. Elle guide les utilisateurs pas à pas, explique les stratégies et propose des scénarios personnalisés."
        },
        lescracksWebsite: {
          title: "LesCraKs Website",
          description: "Site vitrine officiel de LesCraKs, agence EdTech dédiée à la formation, au mentorat et à l’insertion professionnelle des jeunes talents dans la tech."
        },
        dishTrad: {
          title: "DishTrad",
          description: "Plateforme dédiée à la valorisation des mets traditionnels africains, intégrant un assistant IA conversationnel pour répondre aux questions, recommander des plats et partager leur histoire culinaire."
        },
        portfolioPersonnel: {
          title: "Portfolio Personnel",
          description: "Portfolio moderne développé avec les dernières technologies web."
        }
      },
      buttons: {
        code: "Code",
        demo: "Demo"
      }
    },

    experience: {
      title: "Parcours",
      subtitle: "Education, expériences professionnelles et leadership technique",
      types: {
        education: "Éducation",
        leadership: "Leadership",
        teaching: "Enseignement",
        work: "Professionnel"
      },
      experiences: {
        baccalaureat: {
          title: "Baccalauréat C – Mention Assez Bien",
          organization: "Collège FAPO",
          location: "Cameroun"
        },
        gdscBackendLead: {
          title: "Backend Co-Lead",
          organization: "Google Developer Student Club",
          location: "Université de yaounde 1 (Presentiel)",
          description: [
            "Organisation d'ateliers backend modernes (Spring Boot)",
            "Encadrement technique de projets étudiants",
            "Formation de 20+ développeurs juniors"
          ]
        },
        technicalInstructor: {
          title: "Technical Instructor",
          organization: "Technopole Training School",
          location: "Yaoundé (Presentiel & Remote)",
          description: [
            "Formateur HTML, CSS, JS, Node.js pour étudiants et pros en reconversion",
            "Développement de programmes de formation personnalisés",
            "Taux de réussite de 100% des apprenants"
          ]
        },
        propentaTech: {
          title: "DevOps & Full Stack Developer",
          organization: "PropentaTech Saving Solution",
          location: "Yaoundé (Presentiel & Remote)",
          description: [
            "Stack Spring Boot + React",
            "CI/CD avec Jenkins, GitHub Actions, Docker",
            "Architecture microservices scalable"
          ]
        },
        seesSoftengine: {
          title: "Full Stack AI Developer internship",
          organization: "Seed Softengine",
          location: "Yaoundé (Presentiel & Remote)",
          description: [
            "Développement d'extension web",
            "Développement backend avec Node.js",
            "Responsable de la culture DevOps d'équipe",
            "Intégration d'API d'IA générative"
          ]
        }
      }
    },

    certifications: {
      title: "Certifications",
      subtitle: "Certifications obtenues pour valider mes compétences techniques",
      idLabel: "ID de certification:",
      verifyButton: "Vérifier"
    },

    lescracks: {
      title: "LesCraCks",
      description: "LesCraCks est une agence EdTech que je dirige, dédiée à la diffusion de savoirs numériques et à l'accompagnement de jeunes talents dans le domaine tech. Je combine stratégie, innovation et action concrète pour créer un impact réel dans l'écosystème technologique.",
      visitButton: "Visiter LesCraCks"
    },

    contact: {
      title: "Contact",
      description: "Intéressé par une collaboration ? N'hésitez pas à me contacter.",
      whatsapp: "WhatsApp"
    },

    footer: {
      copyright: "© 2025 Brandon Kamga. Tous droits réservés.",
      madeWith: "Résoudre des problèmes est un art — et c’est ma passion ❤️"
    }
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      technologies: "Technologies",
      projects: "Projects",
      certifications: "Certifications",
      lescracks: "LesCraCks",
      blog: "Blog",
      contact: "Contact"
    },

    hero: {
      name: "Brandon Kamga",
      title: "Full Stack Developer & DevOps",
      description: "Passionate about software engineering and DevOps/Cloud, with a particular interest in machine learning. I design and deploy innovative technical solutions, combining performance and reliability.",
      viewProjects: "View my projects",
      contactMe: "Contact me"
    },

    about: {
      title: "About",
      subtitle: "Passionate developer and tech entrepreneur",
      description1: "Passionate about software engineering, web development and DevOps/Cloud, with a strong interest in machine learning.",
      description2: "Through my professional experiences and side projects, I have acquired expertise in web development, DevOps automation and intelligent solutions design.",
      description3: "Curious and impact-oriented, I transform ambitious ideas into concrete solutions. I develop my tech agency, LesCraKs, where my team and I train and support young talents to build a solid career in tech.",
      downloadCV: "Download my CV"
    },

    techStack: {
      title: "Tech Stack",
      subtitle: "Technologies and tools I use to create innovative solutions",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        devopsCloud: "DevOps & Cloud",
        aiDataScience: "AI & Data Science",
        toolsOthers: "Tools & Others"
      }
    },

    projects: {
      title: "Projects",
      subtitle: "Some achievements that illustrate my technical skills",
      projectsList: {
        egolya: {
          title: "Egolya",
          description: "Smart web extension connected to WhatsApp, acting as a personal learning and productivity assistant. It analyzes content, rephrases, generates summaries, and interacts contextually using AI."
        },
        coachMyMove: {
          title: "CoachMyMove",
          description: "Interactive platform designed to learn chess with an AI assistant. It guides users step-by-step, explains strategies, and offers personalized scenarios."
        },
        lescracksWebsite: {
          title: "LesCraKs Website",
          description: "Official showcase website for LesCraKs, an EdTech agency dedicated to training, mentoring, and professional integration of young tech talents."
        },
        dishTrad: {
          title: "DishTrad",
          description: "Platform dedicated to promoting traditional African dishes, integrating a conversational AI assistant to answer questions, recommend dishes, and share their culinary history."
        },
        portfolioPersonnel: {
          title: "Personal Portfolio",
          description: "Modern portfolio developed with the latest web technologies."
        }
      },
      buttons: {
        code: "Code",
        demo: "Demo"
      }
    },

    experience: {
      title: "My Journey",
      subtitle: "Education, professional experiences and technical leadership",
      types: {
        education: "Education",
        leadership: "Leadership",
        teaching: "Teaching",
        work: "Professional"
      },
      experiences: {
        baccalaureat: {
          title: "Baccalaureate C – Fairly Good Mention",
          organization: "FAPO College",
          location: "Cameroon"
        },
        gdscBackendLead: {
          title: "Backend Co-Lead",
          organization: "Google Developer Student Club",
          location: "University of Yaoundé I (On-site)",
          description: [
            "Organization of modern backend workshops (Spring Boot)",
            "Technical supervision of student projects",
            "Training of 20+ junior developers"
          ]
        },
        technicalInstructor: {
          title: "Technical Instructor",
          organization: "Technopole Training School",
          location: "Yaoundé (On-site & Remote)",
          description: [
            "Trainer in HTML, CSS, JS, Node.js for students and professionals in career transition",
            "Development of personalized training programs",
            "100% success rate among learners"
          ]
        },
        propentaTech: {
          title: "DevOps & Full Stack Developer",
          organization: "PropentaTech Saving Solution",
          location: "Yaoundé (On-site & Remote)",
          description: [
            "Spring Boot + React stack",
            "CI/CD with Jenkins, GitHub Actions, Docker",
            "Scalable microservices architecture"
          ]
        },
        seesSoftengine: {
          title: "Full Stack AI Developer Intern",
          organization: "Seed Softengine",
          location: "Yaoundé (On-site & Remote)",
          description: [
            "Web extension development",
            "Backend development with Node.js",
            "Responsible for team DevOps culture",
            "Integration of generative AI APIs"
          ]
        }
      }
    },

    certifications: {
      title: "Certifications",
      subtitle: "Certifications obtained to validate my technical skills",
      idLabel: "Certification ID:",
      verifyButton: "Verify"
    },

    lescracks: {
      title: "LesCraCks",
      description: "LesCraCks is an EdTech agency that I lead, dedicated to spreading digital knowledge and supporting young talents in the tech field. I combine strategy, innovation and concrete action to create real impact in the technology ecosystem.",
      visitButton: "Visit LesCraCks"
    },

    contact: {
      title: "Contact",
      description: "Interested in a collaboration? Feel free to contact me.",
      whatsapp: "WhatsApp"
    },

    footer: {
      copyright: "© 2025 Brandon Kamga. All rights reserved.",
      madeWith: "Solving problem is an art and is my passion ❤️"
    }
  }
};