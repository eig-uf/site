export type Robot = {
  name: string;
  platform: string;
  bio: string;
  image?: string;
};

export const robots: Robot[] = [
  {
    name: "Robot name",
    platform: "Manipulator",
    bio: "Platform details placeholder.",
  },
  {
    name: "Robot name",
    platform: "Mobile base",
    bio: "Platform details placeholder.",
  },
];
