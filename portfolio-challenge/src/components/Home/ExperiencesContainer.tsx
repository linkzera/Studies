import { Container } from "../Container";

export const ExperiencesContainer = () => {
  return (
    <Container className="max-w-[348px] min-h-[348px]">
      <p className="text-purple-100 text-xl font-bold pl-10 mb-5">
        Experiências
      </p>
      <div className="pl-16 max-w-[320px] gap-6 flex flex-col">
        <Experience />
        <Experience />
        <Experience />
        <Experience />
        <Experience />
      </div>
    </Container>
  );
};

const Experience = () => {
  return (
    <ul className="list-disc text-purple-100">
      <li className="font-bold text-sm">Desenvolvedor Front-end</li>
      <p className="font-light text-xs">2019 - Atualmente</p>
      <p className="font-normal text-xs">
        Desenvolvimento de aplicações web e mobile utilizando ReactJS e NodeJS.
      </p>
    </ul>
  );
};
