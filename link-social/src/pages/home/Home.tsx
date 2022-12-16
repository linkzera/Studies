import { Posts } from "../../components/posts/Posts";
import { Stories } from "../../components/stories/Stories";
import "./home.scss";
export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="stories">
          <Stories />
        </div>
        <div className="posts">
          <Posts />
        </div>
      </div>
    </div>
  );
};
