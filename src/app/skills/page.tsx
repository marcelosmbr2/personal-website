import * as React from "react";
import { IconBrain } from "@tabler/icons-react";
import { SkillCategory } from "./components/skill-category";

const skillsData = {
  frontend: [
    {
      id: 1,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      name: "HTML5",
      preferred: false,
    },
    {
      id: 2,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      name: "CSS3",
      preferred: false,
    },
    {
      id: 3,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      name: "JavaScript",
      preferred: false,
    },
    {
      id: 4,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      name: "TypeScript",
      preferred: false,
    },
    {
      id: 5,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      name: "React",
      preferred: true,
    },
    {
      id: 6,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      name: "Next.js",
      preferred: true,
    },
    {
      id: 7,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      name: "Vue.js",
      preferred: false,
    },
  ],
  backend: [
    {
      id: 8,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      name: "PHP",
      preferred: true,
    },
    {
      id: 9,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      name: "Laravel",
      preferred: true,
    },
    {
      id: 13,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      name: "Node.js",
      preferred: false,
    },
    {
      id: 14,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      name: "Express.js",
      preferred: false,
    },
    {
      id: 15,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      name: "NestJS",
      preferred: false,
    },
  ],
  database: [
    {
      id: 10,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      name: "MySQL",
      preferred: true,
    },
    {
      id: 11,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      name: "PostgreSQL",
      preferred: true,
    },
    {
      id: 12,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
      preferred: false,
    },
  ],
  tools: [
    {
      id: 16,
      devIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      name: "AWS",
      preferred: false,
    },
    {
      id: 17,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
      name: "DigitalOcean",
      preferred: false,
    },
    {
      id: 18,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      name: "Git",
      preferred: false,
    },
    {
      id: 19,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      name: "GitHub",
      preferred: false,
    },
    {
      id: 20,
      devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      name: "Docker",
      preferred: false,
    },
  ],
}

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
      <div className="max-w-5xl mx-auto space-y-12">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <SkillCategory key={category} category={category as keyof typeof skillsData} skills={skills} index={index} />
        ))}
      </div>
    </section>
  );
}
