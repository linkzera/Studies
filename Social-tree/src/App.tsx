import { Button } from "./components/button";
import avatarImage from "./assets/avatar.jpg";
import { TwitterIcon } from "./assets/twitter";
import { TwitchIcon } from "./assets/twitch";
import { InstagramIcon } from "./assets/instagram";
import { LinkedinIcon } from "./assets/linkedin";
import { GitHubIcon } from "./assets/github";
import { useState } from "react";

export default function App() {
  const [hoverName, setHoverName] = useState("Instagram");
  return (
    <div className="bg-bgWhite min-h-screen">
      <main className="w-full flex flex-col justify-center">
        {/* avatar and instagram */}
        <div className="flex flex-col items-center justify-center pb-10 pt-[100px] gap-5">
          <img
            src={avatarImage}
            alt="Avatar Image"
            className="rounded-full w-52 h-52 border-2 border-purple p-1"
          />
          <a
            href="https://www.instagram.com/douglasviniciusrx/"
            target="_blank"
            className="old"
          >
            <span
              className="font-light text-base text-purple"
              onMouseEnter={() => setHoverName("douglasviniciusrx")}
              onMouseLeave={() => setHoverName("Instagram")}
            >
              @{hoverName}
            </span>
          </a>
        </div>
        {/* buttons link group */}
        <div className="px-11 md:px-64 lg:px-[30%] 2xl:px-[40%] flex flex-col gap-4 w-full justify-center ">
          <Button
            text="Link 1"
            link="https://www.instagram.com/douglasviniciusrx/"
          />
          <Button
            text="Link 2"
            link="https://www.instagram.com/douglasviniciusrx/"
          />
          <Button
            text="Link 3"
            link="https://www.instagram.com/douglasviniciusrx/"
          />
          <Button
            text="Link 4"
            link="https://www.instagram.com/douglasviniciusrx/"
          />
        </div>
        {/* socials badges links */}
        <div className="w-full px-14 md:px-72 lg:px-[35%] 2xl:px-[42%] flex gap-7 justify-between pt-16">
          <TwitterIcon link="linkzerax" />
          <TwitchIcon link="linkzerax" />
          <InstagramIcon link="douglasviniciusrx" />
          <LinkedinIcon link="douglasvinicius1" />
          <GitHubIcon link="linkzera" />
        </div>
      </main>
    </div>
  );
}
