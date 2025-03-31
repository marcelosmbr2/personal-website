import * as React from "react";
import { performRequest } from "@/lib/datocms";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface Stack {
  name: string;
  description: string;
  icons: string[];
  studied: boolean;
}

const QUERY = `
  query {
    allStacks {
      id
      name
      icons
      description
      studied
    }
  }
`;

export default async function Stacks() {
  const {
    data: { allStacks },
  } = await performRequest({ query: QUERY });

  function getIconCdn(icon: string) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`;
  }

  function renderIcons(icons: string[]) {
    return icons.map((icon) => (
      <Image
        width={10}
        height={10}
        key={icon}
        src={getIconCdn(icon)}
        alt={`${icon} icon`}
      />
    ));
  }

  return (
    <section className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="mb-6">
          Skills
        </Badge>
        <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-5xl lg:mb-6">
          Habilidades
        </h2>
        <p className="mb-12 text-muted-foreground md:text-base lg:text-lg">
          Descrição
        </p>
      </div>
      <div className="max-w-sm md:max-w-xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-2 place-items-center">
        {[...Array(23)].map((_, index) => (
          <div
            key={index}
            className="size-22 rounded-xl border border-background bg-background shadow-xl"
          >
            <div className="h-full w-full bg-muted/20 p-4">
              <img
                alt={`Skill ${index + 1}`}
                src="https://www.shadcnblocks.com/images/block/block-3.svg"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
