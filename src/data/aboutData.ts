/**
 * aboutData.ts
 *
 * This file serves as the single source of truth for all data related to the "About Me" section and resume.
 * It defines the data structures and exports a single, comprehensive `resumeData` object.
 * This modern, unified structure is designed to be flexible and easily maintainable.
 */

// SECTION: Data Type Definitions

export interface Skill {
  name: string;
  /** A numerical value from 0-100 representing proficiency. Used for charts. */
  level: number;
  /** The category for organizing and displaying skills. */
  category: 'Programming Languages' | 'Frameworks/Libraries' | 'Tools/Platforms' | 'Methodologies' | 'Software' | 'Hardware' | 'Soft Skills';
  /** Optional keywords for filtering or providing more detail. */
  keywords?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  /** Optional date of achievement. */
  date?: string;
  /** Optional link to the certificate for verification. */
  url?: string;
}

export interface TimelineEntry {
  /** The role or title of the position/project. */
  role: string;
  /** The company or affiliation (e.g., "Dalhousie University"). */
  entity: string;
  /** The location of the work or project. */
  location: string;
  /** The time period (e.g., "Oct 2021 – Apr 2023"). */
  period: string;
  /** A list of key responsibilities or highlights. */
  points: string[];
  /** A list of technologies or skills used. */
  technologies?: string[];
  /** The type of entry, used for sorting and display logic. */
  type: 'work' | 'project' | 'education';
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  details?: string[];
  gpa?: string;
}

export interface Achievement {
  icon: string; // e.g., 'code', 'award', 'trophy'
  title: string;
  description: string;
  color: 'blue' | 'gold' | 'green' | 'purple' | 'red';
}

export interface PersonalityTrait {
  trait: string;
  /** A numerical value from 0-100. */
  level: number;
  /** A hex color code for display in charts/indicators. */
  color: string;
}

// SECTION: Main Resume Data Structure

export interface ResumeData {
  skills: Skill[];
  certifications: Certification[];
  workExperience: TimelineEntry[];
  academicProjects: TimelineEntry[];
  education: EducationEntry[];
  achievements: Achievement[];
  personalityTraits: PersonalityTrait[];
}

// SECTION: Data Export

export const resumeData: ResumeData = {
  skills: [
    // Programming Languages
    { name: "Python", level: 90, category: "Programming Languages", keywords: ["Scripting", "Data Analysis", "Backend"] },
    { name: "JavaScript/TS", level: 88, category: "Programming Languages", keywords: ["Web Dev", "Frontend", "Backend"] },
    { name: "C/C++", level: 85, category: "Programming Languages", keywords: ["Embedded Systems", "Performance"] },
    { name: "HTML5", level: 95, category: "Programming Languages", keywords: ["Web Dev", "Frontend"] },
    { name: "CSS3/SCSS", level: 92, category: "Programming Languages", keywords: ["Web Dev", "Frontend", "Styling"] },
    { name: "SQL", level: 75, category: "Programming Languages", keywords: ["Databases"] },

    // Frameworks/Libraries
    { name: "React/Next.js", level: 85, category: "Frameworks/Libraries", keywords: ["Frontend", "Web Apps"] },
    { name: "Node.js/Express", level: 82, category: "Frameworks/Libraries", keywords: ["Backend", "APIs"] },
    { name: "Astro", level: 90, category: "Frameworks/Libraries", keywords: ["Static Sites", "Performance"] },
    { name: "Tailwind CSS", level: 95, category: "Frameworks/Libraries", keywords: ["CSS Framework", "Utility-first"] },
    { name: "Matplotlib/NumPy", level: 78, category: "Frameworks/Libraries", keywords: ["Data Viz", "Scientific Computing"] },

    // Tools/Platforms
    { name: "Git/GitHub", level: 95, category: "Tools/Platforms", keywords: ["Version Control"] },
    { name: "Linux/Unix", level: 85, category: "Tools/Platforms", keywords: ["OS", "CLI"] },
    { name: "Docker", level: 80, category: "Tools/Platforms", keywords: ["Containerization", "DevOps"] },
    { name: "VS Code", level: 98, category: "Tools/Platforms", keywords: ["IDE"] },
    { name: "Jira/Confluence", level: 88, category: "Tools/Platforms", keywords: ["Project Management"] },
    { name: "Firebase", level: 75, category: "Tools/Platforms", keywords: ["BaaS", "Cloud"] },
    { name: "Vercel/Netlify", level: 90, category: "Tools/Platforms", keywords: ["Deployment", "Hosting"] },

    // Methodologies
    { name: "Agile/Scrum", level: 85, category: "Methodologies" },
    { name: "RESTful APIs", level: 90, category: "Methodologies" },
    { name: "CI/CD", level: 78, category: "Methodologies" },

    // Software
    { name: "SolidWorks", level: 92, category: "Software", keywords: ["CAD", "3D Modeling"] },
    { name: "MS Office 365", level: 95, category: "Software" },
    { name: "Figma", level: 85, category: "Software", keywords: ["UI/UX Design"] },

    // Hardware
    { name: "Test Equipment", level: 90, category: "Hardware", keywords: ["Oscilloscope", "Signal Gen", "Multimeter"] },
    { name: "Soldering", level: 95, category: "Hardware", keywords: ["Electronics Assembly"] },
    { name: "Rapid Prototyping", level: 93, category: "Hardware", keywords: ["CNC", "Laser Cutter", "3D Print"] },
  ],
  certifications: [
    { name: "Diploma of Engineering", issuer: "Dalhousie University" },
    { name: "Emergency First Aid & CPR/AED Level C", issuer: "Canadian Red Cross" },
  ],
  workExperience: [
    {
      role: "Makerspace Coordinator",
      entity: "Dalhousie University (Emera IdeaHub)",
      location: "Halifax, NS",
      period: "Oct 2021 – Apr 2023",
      points: [
        "Advised and guided students on over 100 innovative engineering projects, utilizing industrial-grade mechanical and electrical equipment.",
        "Managed, maintained, and trained users on 25+ pieces of advanced equipment including 3D printers, CNC mills, and laser cutters.",
        "Implemented workflow management strategies that increased lab efficiency by approximately 30%.",
        "Collaborated with faculty and external professionals on prototyping and research projects.",
      ],
      technologies: ["3D Printing", "CNC Machining", "Laser Cutting", "SolidWorks", "Electronics Prototyping"],
      type: 'work',
    },
  ],
  academicProjects: [
    {
      role: "Core Software Developer",
      entity: "Dalhousie Space Systems Lab (LORIS)",
      location: "Halifax, NS",
      period: "Oct 2020 – Present",
      points: [
        "Developing embedded C software for the satellite's onboard computer using FreeRTOS.",
        "Engineered a custom file system module for efficient satellite data storage and management.",
        "Designed and implemented communication protocols (SPI, I2C, UART) for key satellite subsystems.",
        "Authored and presented bi-weekly progress reports on software development.",
      ],
      technologies: ["C", "FreeRTOS", "Embedded Systems", "Satellite Comms", "Git", "Jira"],
      type: 'project',
    },
    {
      role: "Electrical Team Member",
      entity: "Dalhousie Engineering Design II",
      location: "Halifax, NS",
      period: "Jan 2022 – Apr 2022",
      points: [
        "Programmed an ATmega328P microcontroller using C for detecting seawater electrical faults.",
        "Designed internal mechanical components using SolidWorks and prototyped enclosures using 3D printing.",
        "Developed and integrated an ultrasonic sensor-based module for fluid contamination detection.",
        "Co-authored a comprehensive 40-page technical design report, achieving a grade of A.",
      ],
      technologies: ["C", "ATmega328P", "Microchip Studio", "SolidWorks", "3D Printing", "Sensors"],
      type: 'project',
    },
  ],
  education: [
    {
      degree: "BEng Electrical Engineering, Computer Option",
      institution: "Dalhousie University",
      period: "Sep 2020 – Present",
      details: [
        "Relevant Coursework: Data Structures & Algorithms, Embedded Systems, Software Engineering, Digital Logic.",
        "Secretary for the Dalhousie IEEE Power and Energy Society, organizing 5+ technical events.",
      ],
    },
  ],
  achievements: [
    { icon: 'code', title: 'Open Source Contributor', description: 'Active contributor to several community projects.', color: 'blue' },
    { icon: 'award', title: 'Hackathon Winner', description: '1st place in Dal Innovates Codefest 2023.', color: 'gold' },
    { icon: 'trophy', title: 'Dean\'s List', description: 'Recognized for academic excellence for 4 consecutive semesters.', color: 'green' },
  ],
  personalityTraits: [
    { trait: "Creativity", level: 85, color: "#8B5CF6" },
    { trait: "Problem Solving", level: 92, color: "#3B82F6" },
    { trait: "Teamwork", level: 78, color: "#10B981" },
  ]
};
