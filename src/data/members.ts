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
  },
  {
    name: "Marcelo Palmer",
    role: "Internal VP",
    year: "2028",
    major: "CPE",
    linkedin: "https://www.linkedin.com/in/marcelo-palmer/",
  },
  {
    name: "Mirah Blanchard",
    role: "Treasurer",
    year: "2028",
    major: "ME",
    linkedin: "https://www.linkedin.com/in/mirah-blanchard/",
  },
  {
    name: "Davis Lester",
    role: "Workshop Director",
    year: "2028",
    major: "EE",
    linkedin: "https://www.linkedin.com/in/davis-lester/",
  },
  {
    name: "Minh Tran",
    role: "External VP",
    year: "2028",
    major: "CS",
    linkedin: "https://www.linkedin.com/in/minhtran605/",
  },
];
