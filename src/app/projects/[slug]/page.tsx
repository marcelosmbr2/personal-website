import { IconBrandGithub } from "@tabler/icons-react";

export default function Project() {
  return (
    <section className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center">
        <IconBrandGithub className="mx-auto mb-8 h-8 w-8 text-neutral-500 text-primary" />
        <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-5xl lg:mb-6">
          Titulo
        </h2>
        <p className="mb-12 text-muted-foreground md:text-base lg:text-lg">
          Descrição
        </p>
      </div>
    </section>
  );
}
