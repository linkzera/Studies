import { GetStaticProps } from "next";
import Head from "next/head";
import { Dispatch, SetStateAction, useEffect } from "react";
import { AvatarContainer } from "../components/Home/AvatarContainer";
import { EducationContainer } from "../components/Home/EducationContainer";
import { ExperiencesContainer } from "../components/Home/ExperiencesContainer";
import { SocialContainer } from "../components/Home/SocialsContainer";
import { TechnologiesContainer } from "../components/Home/TechnologiesContainer";
import { RecentPosts } from "../components/Posts/RecentPosts";
import { MyProjects } from "../components/Projects/MyProjects";
import { useUser } from "../hooks/useUser";

export interface IUser {
  avatar_url: string;
  bio: string;
  created_at: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: true;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  starred_url: string;
  subscriptions_url: string;
  updated_at: string;
  url: string;
}

export default function Home({ data }: { data: IUser }) {
  const {setUser} = useUser()
  
  useEffect(() => {
    setUser(data);
  }, [data, setUser]);

  return (
    <div className="max-w-screen min-h-screen bg-purple-800 px-10 py-10 flex overflow-y-hidden gap-2">
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="gap-8 flex flex-1 flex-col">
        <AvatarContainer  />
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/linkzera");
  const data: IUser = await response.json();

  return {
    props: { data },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
