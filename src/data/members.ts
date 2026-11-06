export type Member = {
  name: string;
  role: string;
  year?: string;
  major?: string;
  email?: string;
  linkedin?: string;
  website?: string;
  image?: string;
};

export type MemberSection = {
  id: string;
  title: string;
  members: Member[];
};

function lastName(name: string) {
  const parts = name.trim().split(/\s+/);
  return parts[parts.length - 1] ?? name;
}

function byLastName(a: Member, b: Member) {
  const last = lastName(a.name).localeCompare(lastName(b.name), undefined, {
    sensitivity: "base",
  });
  if (last !== 0) return last;
  return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
}

function sortedByLastName(members: Member[]) {
  return [...members].sort(byLastName);
}

export const memberSections: MemberSection[] = [
  {
    id: "eboard",
    title: "E-board",
    members: [
      {
        name: "Logan Thomley",
        role: "President",
        email: "thomley.logan@ufl.edu",
        linkedin: "https://www.linkedin.com/in/loganthomley/",
        image: "/headshots/LoganThomley.webp",
      },
      {
        name: "Mirah Blanchard",
        role: "Treasurer",
        email: "m.blanchard@ufl.edu",
        linkedin: "https://www.linkedin.com/in/mirah-blanchard/",
        image: "/headshots/MirahBlanchard-cropped.webp",
      },
      {
        name: "Marcelo Palmer",
        role: "Internal VP",
        email: "palmermarcelo@ufl.edu",
        linkedin: "https://www.linkedin.com/in/marcelo-palmer/",
        image: "/headshots/MarceloPalmer-cropped.webp",
      },
      {
        name: "Minh Tran",
        role: "External VP",
        email: "minhtran1@ufl.edu",
        linkedin: "https://www.linkedin.com/in/minhtran605/",
        image: "/headshots/MinhTran.jpg",
      },
      {
        name: "Davis Lester",
        role: "Workshop Director",
        email: "davislester@ufl.edu",
        linkedin: "https://www.linkedin.com/in/davis-lester/",
        image: "/headshots/DavisLester.webp",
      },
      {
        name: "Nathan Chau",
        role: "Outreach Director",
        email: "nathan.chau@ufl.edu",
        linkedin: "https://www.linkedin.com/in/nathan-chau-65a6ab381/",
        image: "/headshots/NathanChau.png",
      },
    ],
  },
  {
    id: "team-leads",
    title: "Team leads",
    members: [
      {
        name: "Krishiv Agarwal",
        role: "Software Lead",
        linkedin: "https://www.linkedin.com/in/krishiv-agarwal/",
      },
      {
        name: "Aian Borboev",
        role: "Mechanical Lead",
        linkedin: "https://www.linkedin.com/in/aian-borboev-147779238/",
      },
      {
        name: "Logan Green",
        role: "Electrical Lead",
        linkedin: "https://www.linkedin.com/in/loganagreen/",
      },
    ],
  },
  {
    id: "software",
    title: "Software",
    members: sortedByLastName([
      { name: "Michael Liguori", role: "Software" },
      { name: "Daniel Paez", role: "Software" },
      { name: "Olmer Azuaje", role: "Software" },
      { name: "Tanay Yarlagadda", role: "Software" },
      { name: "Rahul Sengupta", role: "Software" },
      { name: "David Zapata", role: "Software" },
      { name: "Victor Corona", role: "Software" },
      { name: "Diya Raj", role: "Software" },
      { name: "Nicholas Greiner", role: "Software" },
      { name: "Jack Gordon", role: "Software" },
      { name: "Jason Iduyan", role: "Software" },
      { name: "Janak Sanjay Vora", role: "Software" },
      { name: "Noah Elrom", role: "Software" },
    ]),
  },
  {
    id: "mechanical",
    title: "Mechanical",
    members: sortedByLastName([
      { name: "Marco Rivera", role: "Mechanical" },
      { name: "Luke Justin", role: "Mechanical" },
      { name: "Christian Philip", role: "Mechanical" },
      { name: "Yousef Amer", role: "Mechanical" },
      { name: "Joaquin Palacios", role: "Mechanical" },
      { name: "Peter Antonucci", role: "Mechanical" },
    ]),
  },
  {
    id: "electrical",
    title: "Electrical",
    members: sortedByLastName([
      { name: "Noah Kieval", role: "Electrical" },
      { name: "Theodore Marshall", role: "Electrical" },
      { name: "Haiden Wery", role: "Electrical" },
      { name: "James Considine", role: "Electrical" },
      { name: "Eddie Soto", role: "Electrical" },
      { name: "Alberto Castillo", role: "Electrical" },
      { name: "Alexander Salamon", role: "Electrical" },
      { name: "Lawson Killingsworth", role: "Electrical" },
      { name: "Zhuen Zhong", role: "Electrical" },
      { name: "Vaishnavi Vijayaraghavan", role: "Electrical" },
      { name: "Tejeshwar Sankaranarayanan", role: "Electrical" },
    ]),
  },
  {
    id: "advisor",
    title: "Advisor",
    members: [
      {
        name: "Dr. Jeremiah Blanchard",
        role: "Faculty Advisor",
      },
    ],
  },
];
