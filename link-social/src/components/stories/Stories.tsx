import { Plus } from "phosphor-react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

export const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser?.profilePic} alt="" className="storyImg" />
        <span className="storyName">{currentUser?.name}</span>
        <button>
          <Plus size={24} />
        </button>
      </div>
      {stories.map((s) => {
        return (
          <div className="story" key={s.id}>
            <img src={s.img} alt="" className="storyImg" />
            <span className="storyName">{s.name}</span>
          </div>
        );
      })}
    </div>
  );
};
