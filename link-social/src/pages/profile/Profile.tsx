import "./profile.scss";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
  PinterestLogo,
  EnvelopeSimple,
  DotsThree,
  MapPin,
  Globe,
} from "phosphor-react";
import { Posts } from "../../components/posts/Posts";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a target="_blank" href="https://www.facebook.com/">
              <FacebookLogo size={24} />
            </a>
            <a target="_blank" href="https://twitter.com/">
              <TwitterLogo size={24} />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <InstagramLogo size={24} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/">
              <LinkedinLogo size={24} />
            </a>
            <a target="_blank" href="https://www.pinterest.com/">
              <PinterestLogo size={24} />
            </a>
          </div>
          <div className="center">
            <span>John doe</span>
            <div className="info">
              <div className="item">
                <MapPin size={24} />
                <span>Los Angeles, CA</span>
              </div>
              <div className="item">
                <Globe size={24} />
                <span>link.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EnvelopeSimple size={24} />
            <DotsThree size={24} />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};
