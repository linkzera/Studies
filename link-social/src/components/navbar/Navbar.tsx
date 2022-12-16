import {
  House,
  Moon,
  SquaresFour,
  MagnifyingGlass,
  User,
  EnvelopeSimple,
  Bell,
  Sun,
} from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";

export const Navbar = () => {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Link Social</span>
        </Link>
        <House size={24} />
        {darkMode ? (
          <Moon
            size={24}
            onClick={toggleDarkMode}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <Sun
            size={24}
            onClick={toggleDarkMode}
            style={{ cursor: "pointer" }}
          />
        )}

        <SquaresFour size={24} />
        <div className="search">
          <MagnifyingGlass size={24} />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <User size={24} />
        <EnvelopeSimple size={24} />
        <Bell size={24} />
        <div className="user">
          <img src={currentUser?.profilePic} alt="user image" />
          <span>{currentUser?.name}</span>
        </div>
      </div>
    </div>
  );
};
