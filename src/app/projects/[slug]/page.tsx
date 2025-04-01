import { Badge } from "@/components/ui/badge";

export default function Project() {
  return (
    <section className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="mb-6">
          Tipo
        </Badge>
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
