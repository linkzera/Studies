import { useState } from "react";
import { useRouter } from "next/router";
import { button } from "../styles/button";

const Home = () => {
  const router = useRouter();
  const [user, setUser] = useState("");

  const handleUser = (e: any) => {
    setUser(e.target.value);
  };

  const handleSearch = () => {
    router.push(`/users/${user}`);
  };

  return (
    <div className="flex flex-col w-full min-h-screen  items-center bg-black">
      <h1 className="font-bold text-4xl text-white">Home</h1>
      <input type="text" onChange={(e) => handleUser(e)} />
      <button className={button} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Home;
