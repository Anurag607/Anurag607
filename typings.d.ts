interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: string;
  name: string;
  phoneNumber: string;
  profilePic: string;
}

export interface Technology {
  _type: "technology";
  image: string;
  progress: number;
  title: string;
}

export interface Skill {
  _type: "skill";
  image: string;
  progress: number;
  title: string;
}

export interface Experience {
  _type: "experience";
  company: string;
  companyImage: string;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project {
  _type: "project";
  title: string;
  linkToBuild: string;
  image: string;
  summary: string;
  technologies: Technology[];
}

export interface Social {
  _type: "social";
  title: string;
  url: string;
}
