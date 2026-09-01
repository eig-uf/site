export type Member = {
  name: string;
  role: string;
  year: string;
  major: string;
  linkedin: string;
  website?: string;
  image?: string;
};

export const members: Member[] = [
  {
    name: "Logan Thomley",
    role: "President",
    year: "2028",
    major: "CS",
    linkedin: "https://www.linkedin.com/in/loganthomley/",
    image: "/headshots/LoganThomley.webp",
  },
  {
    name: "Marcelo Palmer",
    role: "Internal VP",
    year: "2028",
    major: "CPE",
    linkedin: "https://www.linkedin.com/in/marcelo-palmer/",
    image: "/headshots/MarceloPalmer.webp",
  },
  {
    name: "Mirah Blanchard",
    role: "Treasurer",
    year: "2028",
    major: "ME",
    linkedin: "https://www.linkedin.com/in/mirah-blanchard/",
    image: "/headshots/MirahBlanchard-cropped.webp",
  },
  {
    name: "Davis Lester",
    role: "Workshop Director",
    year: "2028",
    major: "EE",
    linkedin: "https://www.linkedin.com/in/davis-lester/",
    image: "/headshots/DavisLester.webp",
  },
  {
    name: "Minh Tran",
    role: "External VP",
    year: "2028",
    major: "CS",
    linkedin: "https://www.linkedin.com/in/minhtran605/",
    image: "/headshots/MinhTran.webp",
  },
];
