import { CardProps } from "./Interface/card";

export const Card = (repo: CardProps) => {
  const date = new Date(repo.updated_at);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return (
    <>
      <div className="relative mx-auto w-full">
        <a
          href={repo.html_url}
          className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
        >
          <div className="shadow p-4 rounded-lg bg-white">
            <div className="mt-4">
              <h2
                className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                title="New York"
              >
                {repo.name}
              </h2>
              <p
                className="mt-2 text-sm text-gray-800 line-clamp-1"
                title="New York, NY 10004, United States"
              >
                {repo.description || "No description"}
              </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <span className="mt-2 xl:mt-0">Forks: {repo.forks_count}</span>
              </p>
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <span className="mt-2 xl:mt-0">
                  Watchers: {repo.watchers_count}
                </span>
              </p>
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <span className="mt-2 xl:mt-0">
                  Stars: {repo.stargazers_count}
                </span>
              </p>
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <span className="mt-2 xl:mt-0">
                  Issues: {repo.open_issues_count}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 mt-8">
              <div className="flex items-center">
                <p className="ml-2 text-gray-800 line-clamp-1">
                  {repo.language || "No language yet"}
                </p>
              </div>
              <div className="flex justify-end">
                <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                  <span className="text-sm uppercase">Update: </span>
                  <span className="text-lg">{`${day}/${month}/${year} ${hour}:${minutes}`}</span>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
