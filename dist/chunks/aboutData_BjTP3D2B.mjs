const resumeData = {
  skills: [
    // Programming Languages
    { name: "Python", category: "Programming Languages", keywords: ["Scripting", "Data Analysis", "Backend"] },
    { name: "JavaScript/TypeScript", category: "Programming Languages", keywords: ["Web Development", "Frontend", "Backend"] },
    { name: "C/C++", category: "Programming Languages", keywords: ["Embedded Systems", "Performance"] },
    { name: "HTML5", category: "Programming Languages", keywords: ["Web Development", "Frontend"] },
    { name: "CSS3/SCSS", category: "Programming Languages", keywords: ["Web Development", "Frontend", "Styling"] },
    { name: "SQL", category: "Programming Languages", keywords: ["Databases"] },
    // Frameworks/Libraries
    { name: "React/Next.js", category: "Frameworks/Libraries", keywords: ["Frontend", "Web Applications"] },
    { name: "Node.js/Express.js", category: "Frameworks/Libraries", keywords: ["Backend", "APIs"] },
    { name: "Astro", category: "Frameworks/Libraries", keywords: ["Static Site Generation", "Content Sites"] },
    { name: "Tailwind CSS", category: "Frameworks/Libraries", keywords: ["CSS Framework", "Utility-first"] },
    { name: "Matplotlib/NumPy", category: "Frameworks/Libraries", keywords: ["Data Visualization", "Scientific Computing"] },
    // Tools/Platforms
    { name: "Git/GitHub", category: "Tools/Platforms", keywords: ["Version Control"] },
    { name: "Linux/Unix", category: "Tools/Platforms", keywords: ["Operating Systems", "CLI"] },
    { name: "Docker", category: "Tools/Platforms", keywords: ["Containerization", "DevOps"] },
    { name: "VS Code", category: "Tools/Platforms", keywords: ["IDE"] },
    { name: "Jira/Confluence", category: "Tools/Platforms", keywords: ["Project Management"] },
    { name: "Firebase", category: "Tools/Platforms", keywords: ["BaaS", "Cloud"] },
    { name: "Vercel/Netlify", category: "Tools/Platforms", keywords: ["Deployment", "Hosting"] },
    // Methodologies
    { name: "Agile/Scrum", category: "Methodologies" },
    { name: "RESTful APIs", category: "Methodologies" },
    { name: "CI/CD", category: "Methodologies" },
    // Software
    { name: "SolidWorks", category: "Software", keywords: ["CAD", "3D Modeling"] },
    { name: "Microsoft Office 365", category: "Software" },
    { name: "Figma", category: "Software", keywords: ["UI/UX Design"] },
    // Hardware
    { name: "Oscilloscope, Signal Generator, Multimeter", category: "Hardware", keywords: ["Electronics Testing"] },
    { name: "Soldering", category: "Hardware", keywords: ["Electronics Assembly"] },
    { name: "CNC, Laser Cutter, 3D Printers (FDM/Resin)", category: "Hardware", keywords: ["Prototyping", "Fabrication"] },
    // Soft Skills
    { name: "Technical Communication", category: "Soft Skills" },
    { name: "Problem Solving & Critical Thinking", category: "Soft Skills" },
    { name: "Project Management", category: "Soft Skills" },
    { name: "Teamwork & Collaboration", category: "Soft Skills" },
    { name: "Adaptability & Flexibility", category: "Soft Skills" },
    { name: "Self-Directed Learning", category: "Soft Skills" },
    { name: "Time Management", category: "Soft Skills" }
  ],
  certifications: [
    { name: "Diploma of Engineering", issuer: "Dalhousie University" },
    { name: "Emergency First Aid & CPR/AED Level C", issuer: "Canadian Red Cross" }
    // Add more certifications here if any, e.g., cloud certifications, language proficiency
  ],
  workExperience: [
    {
      role: "Makerspace Coordinator",
      company: "Dalhousie University (Emera IdeaHub)",
      location: "Halifax, NS",
      period: "Oct 2021 – Apr 2023",
      responsibilities: [
        "Advised and guided students on over 100 innovative engineering projects, utilizing industrial-grade mechanical and electrical equipment.",
        "Managed, maintained, and trained users on 25+ pieces of advanced equipment including 3D printers (FDM, SLA), CNC mills, laser cutters, and electronics workstations.",
        "Implemented innovative workflow management strategies that increased student project throughput and lab efficiency by approximately 30%.",
        "Collaborated with faculty, external professionals, and organizations on prototyping and research projects.",
        "Developed and delivered safety and equipment operation training workshops."
      ],
      technologies: ["3D Printing (FDM/SLA)", "CNC Machining", "Laser Cutting", "SolidWorks", "Electronics Prototyping", "Safety Protocols"]
    }
    // Add other work experiences if any
  ],
  academicProjects: [
    {
      name: "Low Orbit Reconnaissance Imagery Satellite (LORIS)",
      affiliation: "Dalhousie Space Systems Lab (Core Software Developer)",
      period: "Oct 2020 – Present",
      highlights: [
        "Developing embedded C software for the satellite's onboard computer, focusing on modular, fault-tolerant systems within FreeRTOS environment.",
        "Engineered a custom file system module for efficient satellite data storage, retrieval, and management, achieving an 8% improvement in module unit testing efficiency.",
        "Designed and implemented communication protocols (SPI, I2C, UART) for key satellite subsystems including RF telemetry, command handling, and mission control interfaces.",
        "Authored and presented bi-weekly progress reports on software development, fostering cross-functional team collaboration for hardware-software integration.",
        "Contributed to system architecture design and participated in rigorous code reviews and testing phases."
      ],
      technologies: ["C", "FreeRTOS", "Embedded Systems", "Satellite Communication", "Git", "Jira"]
    },
    {
      name: "Subsea Infrastructure Sensory Pod",
      affiliation: "Dalhousie Engineering Design II (Electrical Team)",
      period: "Jan 2022 – Apr 2022",
      highlights: [
        "Programmed an ATmega328P microcontroller using C (Microchip Studio/AVR GCC) for detecting seawater electrical faults and fluid contamination.",
        "Designed internal mechanical components using SolidWorks and prototyped enclosures using FDM 3D printing.",
        "Developed and integrated an ultrasonic sensor-based module for precise fluid contamination detection.",
        "Delivered two professional technical presentations covering system methodology, architecture, software components, and testing results.",
        "Co-authored a comprehensive 40-page technical design report, achieving a grade of A."
      ],
      technologies: ["C", "ATmega328P", "Microchip Studio", "SolidWorks", "3D Printing", "Sensors", "Technical Writing"]
    }
    // Add MILTON project details here if it's to be included in resume
  ],
  education: [
    {
      degree: "BEng Electrical Engineering with Computer Option",
      institution: "Dalhousie University",
      period: "Sep 2020 – Present",
      // Update to graduation year when applicable
      details: [
        "Relevant Coursework: Data Structures & Algorithms, Embedded Systems, Software Engineering, Digital Logic Design, Communication Systems, Control Systems.",
        "Served as Secretary for the Dalhousie IEEE Power and Energy Society, organizing 5+ technical events and workshops."
      ]
      // gpa: "3.X/4.3" // Optional: Add GPA if desired
    }
    // Add other education entries if any (e.g., relevant online courses, previous degrees)
  ]
};
const skillsData = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "C/C++", level: 70 },
  { name: "Embedded Systems", level: 65 },
  { name: "UI/UX Design", level: 60 },
  { name: "DevOps", level: 55 }
];
const experienceData = [
  {
    date: "2023 - Present",
    title: "Core Software Developer",
    description: "Dalhousie Space Systems Lab, LORIS satellite project. Developing flight software and ground control systems.",
    technologies: ["Python", "C++", "Git", "Linux"]
  },
  {
    date: "2022 - 2023",
    title: "Software Developer",
    description: "MILTON AI-powered training application. Designed and implemented core algorithms and API integration.",
    technologies: ["JavaScript", "React", "Node.js", "Docker"]
  },
  {
    date: "2021 - 2022",
    title: "Makerspace Coordinator",
    description: "Dalhousie's Emera Ideahub. Advised students on engineering projects and maintained advanced equipment.",
    technologies: ["3D Printing", "CAD", "Electronics"]
  },
  {
    date: "2020 - 2021",
    title: "Student Researcher",
    description: "Research in electrical engineering with focus on renewable energy systems and smart grid technology.",
    technologies: ["MATLAB", "Data Analysis", "Circuit Design"]
  }
];

export { experienceData as e, resumeData as r, skillsData as s };
