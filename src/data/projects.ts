export type Project = {
  id: string;
  title: string;
  status: string;
  summary: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [];
