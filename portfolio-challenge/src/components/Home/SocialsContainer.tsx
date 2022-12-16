import {
  MapPin,
  Suitcase,
  GithubLogo,
  LinkedinLogo,
  GlobeSimple,
  EnvelopeSimple,
} from "phosphor-react";
import { ReactNode } from "react";
import { Container } from "../Container";

export const SocialContainer = () => {
  return (
    <Container className="max-w-[348px] min-h-[348px]">
      <div className="flex flex-col pl-10 gap-7">
        <Text icon={<MapPin size={24} />}>Brasil</Text>
        <Text
          icon={<Suitcase size={24} />}
          link="https://app.rocketseat.com.br/me/douglas-05067"
        >
          Rocketseat
        </Text>
        <Text
          icon={<GithubLogo size={24} />}
          link="https://github.com/linkzera"
        >
          linkzera
        </Text>
        <Text
          icon={<LinkedinLogo size={24} />}
          link="https://www.linkedin.com/in/douglasvinicius1/"
        >
          douglasvinicius1
        </Text>
        <Text icon={<GlobeSimple size={24} />} link="">
          Site
        </Text>
        <Text
          icon={<EnvelopeSimple size={24} />}
          link="mailto:douglasviniciusenator@gmail.com"
        >
          douglasviniciusenator@gmail.com
        </Text>
      </div>
    </Container>
  );
};

const Text = ({
  children,
  icon,
  link,
}: {
  children: ReactNode;
  icon?: ReactNode;
  link?: string;
}) => {
  return (
    <div className="flex items-center gap-5">
      {<span className="text-purple-100">{icon}</span>}
      {link ? (
        <a
          target={"_blank"}
          rel="noreferrer"
          href={link}
          className="text-purple-100"
        >
          <span className="text-purple-100 text-sm font-normal">
            {children}
          </span>
        </a>
      ) : (
        <span className="text-purple-100 text-sm font-normal">{children}</span>
      )}
    </div>
  );
};
