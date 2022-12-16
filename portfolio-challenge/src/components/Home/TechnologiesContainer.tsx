import { Container } from "../Container";

export const TechnologiesContainer = () => {
  return (
    <Container className="max-w-[348px] min-h-[348px]">
      <p className="text-purple-100 text-xl font-bold pl-10 mb-5">
        Tecnologias
      </p>
      <div className="grid grid-cols-3 px-10 gap-4 items-center text-center justify-center">
        {technologies.map((tec) => {
          return (
            <span
              className="bg-pink text-black text-xs rounded-3xl font-bold p-2 select-none"
              key={tec.name}
            >
              {tec.name}
            </span>
          );
        })}
      </div>
    </Container>
  );
};

const technologies = [
  { name: "React" },
  { name: "Next" },
  { name: "Tailwind" },
  { name: "Phosphor" },
  { name: "Typescript" },
  { name: "Javascript" },
  { name: "Storybook" },
  { name: "Nodejs" },
  { name: "Express" },
  { name: "MongoDB" },
  { name: "Docker" },
  { name: "Git" },
  { name: "Github" },
  { name: "Jest" },
  { name: "Figma" },
];
