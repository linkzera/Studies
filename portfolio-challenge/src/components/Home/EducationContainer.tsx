import { Container } from "../Container";

export const EducationContainer = () => {
  return (
    <Container className="max-w-[348px] min-h-[348px]">
      <p className="text-purple-100 text-xl font-bold pl-10 mb-5">Educação</p>
      <div className="pl-16 max-w-[320px] gap-6 flex flex-col">
        <Education />
        <Education />
        <Education />
        <Education />
        <Education />
      </div>
    </Container>
  );
};

const Education = () => {
  return (
    <ul className="list-disc text-purple-100">
      <li className="font-bold text-sm">Estácio</li>
      <p className="font-light text-xs">2021 - Atualmente</p>
      <p className="font-normal text-xs">
        Analise e desenvolvimento de sistemas
      </p>
    </ul>
  );
};
