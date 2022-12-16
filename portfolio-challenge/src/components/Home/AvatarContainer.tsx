/* eslint-disable @next/next/no-img-element */
import { useUser } from "../../hooks/useUser";
import { IUser } from "../../pages";
import { Container } from "../Container";

export const AvatarContainer = () => {
  const {user} = useUser()
  return (
    <Container className="max-w-[348px] h-[292px] justify-center">
      <div className="flex flex-col justify-center items-center">
        <img
          src={user?.avatar_url}
          alt="avatar user"
          className="w-32 h-32 rounded-full border-2 border-green object-cover object-center"
        />
        <span className="text-purple-100 text-2xl font-bold mt-8">
          {user?.name}
        </span>
        <span className="text-purple-100 font-light text-sm mt-2">
          Full Stack Developer
        </span>
      </div>
    </Container>
  );
};
