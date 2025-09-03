import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { IconBrain } from "@tabler/icons-react";

const data = [
  {
    id: 1,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    name: "HTML5",
  },
  {
    id: 2,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    name: "CSS3",
  },
  {
    id: 3,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    id: 4,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    id: 5,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React",
  },
  {
    id: 6,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "Next.js",
  },
  {
    id: 7,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    name: "Vue.js",
  },
  {
    id: 8,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    name: "PHP",
  },
  {
    id: 9,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    name: "Laravel",
  },
  {
    id: 10,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    name: "MySQL",
  },
  {
    id: 11,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    name: "PostgreSQL",
  },
  {
    id: 12,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    id: 13,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    name: "Node.js",
  },
  {
    id: 14,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    name: "Express.js",
  },
  {
    id: 15,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    name: "NestJS",
  },
  {
    id: 16,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    name: "AWS",
  },
  {
    id: 17,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
    name: "DigitalOcean",
  },
  {
    id: 18,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
  },
  {
    id: 19,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    name: "GitHub",
  },
  {
    id: 20,
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    name: "Docker",
  },
];

export default async function Stacks() {
  return (
    <section className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center">
        <IconBrain className="mx-auto mb-8 h-8 w-8 text-neutral-500 text-primary" />
        <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-5xl lg:mb-6">
          Habilidades
        </h2>
        <p className="mb-12 text-muted-foreground md:text-base lg:text-lg">
          Tecnologias que já utilizei e utilizo no meu dia a dia.
        </p>
      </div>
      <div className="max-w-sm md:max-w-xl mx-auto flex flex-wrap justify-center items-center gap-4">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="relative bg-white dark:bg-neutral-800 size-24 rounded-xl border border-background shadow-lg flex flex-col"
          >
            <div className="h-16 w-full p-4 flex-1">
              <img
                alt={`Skill ${index + 1}`}
                src={item.devIcon}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <Badge variant="secondary" className="mb-[-10px] text-xs">
                {item.name}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
