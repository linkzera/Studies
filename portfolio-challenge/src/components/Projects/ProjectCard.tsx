import { Folder, GitFork, Star } from "phosphor-react";
import { Container } from "../Container";

export interface ProjectCardProps {
  id: number;
  created_at: string;
  description?: string;
  forks: number;
  html_url: string;
  language?: string;
  name: string;
  stargazers_count: number;
  homepage?: string;
}

export const ProjectCard = ({ repo }: { repo: ProjectCardProps }) => {
  return (
    <Container>
      <div className="flex flex-col px-8 bg-purple-300 text-purple-100 rounded-3xl gap-8">
        <div className="flex items-center gap-4">
          <Folder size={20} />
          <span>{repo?.name || "No Name"}</span>
        </div>

        <span>
          {repo?.description || "No description provided"}
        </span>

        <div className="flex justify-between">
          <div className="flex gap-4">
            <span className="flex gap-2 items-center">
              <Star size={20} /> {repo?.stargazers_count || 0}
            </span>
            <span className="flex gap-2 items-center">
              <GitFork size={20} /> {repo?.forks || 0}
            </span>
          </div>

          <span>{repo?.language || "No language yet"}</span>
        </div>
      </div>
    </Container>
  );
};
