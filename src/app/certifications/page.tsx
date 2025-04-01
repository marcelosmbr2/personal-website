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
    icon: <Trophy />,
    title: "Industry Recognition",
    category: "Achievement",
    description: "Outstanding Performance Award.",
    link: "#",
  },
  {
    icon: <Award />,
    title: "Excellence Award",
    category: "Recognition",
    description: "Best in Category Winner.",
    link: "#",
  },
  {
    icon: <Lightbulb />,
    title: "Innovation Prize",
    category: "Technology",
    description: "Breakthrough Solution of the Year.",
    link: "#",
  },
  {
    icon: <HeartHandshake />,
    title: "Customer Success",
    category: "Service",
    description: "Top-Rated Solution Provider.",
    link: "#",
  },
  {
    icon: <Building2 />,
    title: "Global Leadership",
    category: "Management",
    description: "Executive Team of the Year.",
    link: "#",
  },
  {
    icon: <Leaf />,
    title: "Sustainability Impact",
    category: "Environmental",
    description: "Green Initiative Excellence.",
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
            <div className="grid items-center gap-4 px-4 py-5 md:grid-cols-4">
              <div className="order-2 flex items-center gap-2 md:order-none">
                <span className="flex h-14 w-16 shrink-0 items-center justify-center rounded-md bg-muted">
                  {item.icon}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.category}
                  </p>
                </div>
              </div>
              <p className="order-1 text-2xl font-semibold md:order-none md:col-span-2">
                {item.description}
              </p>
              <Button variant="outline" asChild>
                <a
                  className="order-3 ml-auto w-fit gap-2 md:order-none"
                  href={item.link}
                >
                  <span>View project</span>
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
