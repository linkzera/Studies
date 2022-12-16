import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IUser } from "..";
import { AvatarContainer } from "../../components/Home/AvatarContainer";
import { EducationContainer } from "../../components/Home/EducationContainer";
import { ExperiencesContainer } from "../../components/Home/ExperiencesContainer";
import { SocialContainer } from "../../components/Home/SocialsContainer";
import { TechnologiesContainer } from "../../components/Home/TechnologiesContainer";
import { RecentPosts } from "../../components/Posts/RecentPosts";
import { MyProjects } from "../../components/Projects/MyProjects";
import { useUser } from "../../hooks/useUser";

export default function Home() {
  const { setUser } = useUser();
  const router = useRouter();
  const { github } = router.query;

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://api.github.com/users/${github}`);
      const data: IUser = await response.json();
      setUser(data);
    };
    getData();
  }, [github]);

  return (
    <div className="max-w-screen min-h-screen bg-purple-800 px-10 py-10 flex overflow-y-hidden gap-2">
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="gap-8 flex flex-1 flex-col">
        <AvatarContainer />
        <SocialContainer />
        <TechnologiesContainer />
        <ExperiencesContainer />
        <EducationContainer />
      </div>
      <div className="gap-8 flex flex-[3] flex-col">
        <MyProjects />
        <RecentPosts />
      </div>
    </div>
  );
}
