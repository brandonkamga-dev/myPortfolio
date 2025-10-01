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
