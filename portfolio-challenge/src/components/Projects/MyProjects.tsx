import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { Container } from "../Container";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";

async function getProjects(gitUser: string) {
  const response = await fetch(`https://api.github.com/users/${gitUser}/repos`);
  const data = await response.json();
  return data;
}

export const MyProjects = () => {
  const { user } = useUser();
  const [repos, setRepos] = useState<ProjectCardProps[]>([]);

  useEffect(() => {
    async function getRepos() {
      const repos = await getProjects(user?.login || "linkzera");
      const firstFiveRepos = repos.slice(0, 5);
      setRepos(firstFiveRepos);
    }
    getRepos();
  }, [user?.login]);

  return (
    <div className="flex flex-col gap-8">
      <Container>
        <div className="flex items-center justify-between text-purple-100 font-bold text-xl px-8">
          <span>My Projects</span>
          <button className="text-sm hover:underline">Veja todos</button>
        </div>
      </Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {repos?.map((repo) => {
          return <ProjectCard key={repo.id} repo={repo} />;
        })}
      </div>
    </div>
  );
};
