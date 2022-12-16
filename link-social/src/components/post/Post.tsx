import "./post.scss";
import { ChatDots, DotsThree, Heart, ShareNetwork } from "phosphor-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../comments/Comments";
export type TPost = {
  id: number;
  name: string;
  userId: number;
  profilePic: string;
  desc: string;
  img?: string;
};

export const Post = ({ post }: { post: TPost }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  //TEMPORARY
  const liked = false;
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" className="userImg" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <DotsThree size={24} />
        </div>
        <div className="content">
          <p className="desc">{post.desc}</p>
          {post.img && <img src={post.img} alt="" className="postImg" />}
        </div>
        <div className="info">
          <div className="item">
            {liked ? (
              <Heart size={24} color="#d22828" weight="fill" />
            ) : (
              <Heart size={24} />
            )}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <ChatDots size={24} />
            12 Comments
          </div>
          <div className="item">
            <ShareNetwork size={24} />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};
