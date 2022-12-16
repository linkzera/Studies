import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IUser } from "../pages";

export interface IUserContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

const initialUser: IUser = {
  avatar_url: "",
  bio: "",
  created_at: "",
  followers: 0,
  followers_url: "",
  following: 0,
  following_url: "",
  gists_url: "",
  gravatar_id: "",
  hireable: true,
  html_url: "",
  id: 0,
  location: "",
  login: "",
  name: "",
  node_id: "",
  organizations_url: "",
  public_gists: 0,
  public_repos: 0,
  received_events_url: "",
  repos_url: "",
  starred_url: "",
  subscriptions_url: "",
  updated_at: "",
  url: "",
};

export const UserContext = createContext<IUserContext>({} as IUserContext)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser>(initialUser);
  return (
    <UserContext.Provider value={{setUser, user}}>
      {children}
    </UserContext.Provider>
  )
}