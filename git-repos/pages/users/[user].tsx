import { Card } from "../../components/card/card";
import { CardProps } from "../../components/card/Interface/card";
import useSWR from "swr";
import { useRouter } from "next/router";
import { fetcher } from "../../utils/fetcher";
import { UserCard } from "../../components/user/user";
import Head from "next/head";

export default function User() {
  const router = useRouter();
  const { user } = router.query;
  const { data, error }: any = useSWR(
    `https://api.github.com/users/${user}/repos`,
    fetcher
  );

  console.log(data);
  if (error) return <div>failed to load</div>;

  return (
    <>
      <Head>
        <title>{user}</title>
      </Head>
      <h1 className="text-white font-bold text-4xl">User </h1>
      <UserCard user={user} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full min-h-screen p-4">
        {data?.map((repo: CardProps) => {
          return <Card key={repo.id} {...repo} />;
        })}
      </div>
    </>
  );
}
