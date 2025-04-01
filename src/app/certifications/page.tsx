import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Award,
  Building2,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Trophy,
} from "lucide-react";
import React from "react";

const items = [
  {
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    name: "Laravel 11: Framework, Ecossistema e Projetos Web",
    plataform: "Udemy",
    link: "#",
  },
  {
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    name: "Dominando Banco de Dados com MySQL",
    plataform: "Udemy",
    link: "#",
  },
  {
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    name: "Curso Completo de PHP 7",
    plataform: "Udemy",
    link: "#",
  },
  {
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    name: "The Complete Node.js Developer Course",
    plataform: "Udemy",
    link: "#",
  },
  {
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    name: "Docker: Ferramenta essencial para Desenvolvedores",
    plataform: "Udemy",
    link: "#",
  },
  {
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    name: "Amazon Web Services (AWS): Essencial",
    plataform: "Udemy",
    link: "#",
  },
  {
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
    name: "Sustainability Impact",
    plataform: "Udemy",
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="mb-6">
          Cursos
        </Badge>
        <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-5xl lg:mb-6">
          Certificações
        </h2>
        <p className="mb-12 text-muted-foreground md:text-base lg:text-lg">
          Conhecimento validado por cursos reconhecidos no mercado.
        </p>
      </div>
      <div className="flex flex-col">
        <Separator />
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center gap-2">
                <div
                  key={index}
                  className="bg-white dark:bg-neutral-800 cursor-pointer size-18 rounded-xl border border-background shadow"
                >
                  <div className="h-full w-full p-4">
                    <img
                      alt="alt"
                      src={item.devIcon}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.plataform}
                  </p>
                </div>
              </div>
              <Button asChild>
                <a href={item.link} target="_blank">
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <Separator />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
