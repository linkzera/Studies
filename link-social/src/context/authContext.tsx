import { createContext, ReactNode, useEffect, useState } from "react";
type AuthContextType = {
  currentUser?: {
    id: string;
    name: string;
    profilePic: string;
  };
  setCurrentUser?: (currentUser: {}) => void;
  login: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  login: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") as string) || null
  );

  const login = () => {
    // login logic todo
    setCurrentUser({
      id: 1,
      name: "John Doe",
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
