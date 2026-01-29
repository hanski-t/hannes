export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image?: string;
  tags: string[];
  url?: string;
  github?: string;
  featured: boolean;
  year: number;
}
