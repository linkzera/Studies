interface Button {
  text: string;
  link: string;
}
export const Button = ({ text, link }: Button) => {
  return (
    <a href={link} target="_blank">
      <button className="text-purple w-full py-4 border-2 border-purple font-semibold rounded hover:bg-purple hover:text-white">
        {text}
      </button>
    </a>
  );
};
