import { Icons } from "./github";

export function TwitchIcon({ link }: Icons) {
  return (
    <a href={`https://www.twitch.tv/${link}`} target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="hover:fill-purple/30"
      >
        <path
          stroke="#B9D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 11V7m5-5H3v16h5v4l4-4h5l4-4V2zm-10 9V7v4z"
        ></path>
      </svg>
    </a>
  );
}
