export type Member = {
  name: string;
  role: string;
  year: string;
  major: string;
  bio: string;
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
    bio: "Short bio placeholder.",
    linkedin: "https://www.linkedin.com/in/loganthomley/",
  },
  {
    name: "Marcelo Palmer",
    role: "Internal VP",
    year: "2028",
    major: "CPE",
    bio: "Short bio placeholder.",
    linkedin: "https://www.linkedin.com/in/marcelo-palmer/",
  },
  {
    name: "Minh Tran",
    role: "External VP",
    year: "2028",
    major: "CS",
    bio: "Short bio placeholder.",
    linkedin: "https://www.linkedin.com/in/minhtran605/",
  },
  {
    name: "Mirah Blanchard",
    role: "Treasurer",
    year: "2028",
    major: "ME",
    bio: "Short bio placeholder.",
    linkedin: "https://www.linkedin.com/in/mirah-blanchard/",
  },
  {
    name: "Davis Lester",
    role: "Workshop Director",
    year: "2028",
    major: "EE",
    bio: "Short bio placeholder.",
    linkedin: "https://www.linkedin.com/in/davis-lester/",
  },
];
