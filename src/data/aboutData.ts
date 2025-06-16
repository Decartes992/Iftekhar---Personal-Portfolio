export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  date: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
  color: 'blue' | 'gold' | 'green' | 'purple';
}

export interface PersonalityTrait {
  trait: string;
  level: number;
  color: string;
}

// Skills data for the radar chart
export const skillsData: Skill[] = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "C/C++", level: 70 },
  { name: "Embedded Systems", level: 65 },
  { name: "UI/UX Design", level: 60 },
  { name: "DevOps", level: 55 }
];

// Experience data for the timeline
export const experienceData: Experience[] = [
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

export const achievements: Achievement[] = [
  { icon: 'code', title: 'Open Source Contributor', description: 'Contributed to 5+ major OS projects.', color: 'blue' },
  { icon: 'award', title: 'Hackathon Winner', description: '1st place in Dal Innovates Codefest 2023.', color: 'gold' },
  { icon: 'trophy', title: 'Top Student Award', description: "Dean's List for 4 consecutive semesters.", color: 'green' },
];

export const personalityTraits: PersonalityTrait[] = [
  { trait: "Creativity", level: 85, color: "#8B5CF6" },
  { trait: "Problem Solving", level: 92, color: "#3B82F6" },
  { trait: "Teamwork", level: 78, color: "#10B981" },
];