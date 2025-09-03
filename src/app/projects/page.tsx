import { ArrowRight } from "lucide-react";
import { performRequest } from "@/lib/datocms";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { IconBrandGithub } from "@tabler/icons-react";

interface Project {
  id: string;
  name: string;
  phase: string;
  description: string;
  technologies: string;
  image: { url: string };
  repositoryLink: string;
  deployLink: string;
  category: string;
}

const QUERY = `
  query {
    allProjects {
        id
        name
        phase
        technologies
        description
        repositoryLink
        deployLink
        category
        image {
          url
        }
      }
  }
`;

export default async function Projects() {
  const {
    data: { allProjects },
  } = await performRequest({ query: QUERY });

  const projetos = allProjects.filter(
    (project: Project) => project.category === "projeto"
  );
  const estudos = allProjects.filter(
    (project: Project) => project.category === "estudo"
  );

  return (
    <section className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center">
        <IconBrandGithub className="mx-auto mb-8 h-8 w-8 text-neutral-500 text-primary" />
        <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-5xl lg:mb-6">
          Meus Projetos
        </h2>
        <p className="mb-12 text-muted-foreground md:text-base lg:text-lg">
          Explore meus trabalhos mais recentes, como aplicações web completas e
          experimentos.
        </p>
      </div>
      <Tabs defaultValue="1" className="mx-auto max-w-5xl space-y-12 px-4">
        <TabsList className="w-full mx-auto max-w-sm">
          <TabsTrigger value="1">Projetos</TabsTrigger>
          <TabsTrigger value="2">Estudos</TabsTrigger>
        </TabsList>
        <TabsContent value="1">
          <div className="mx-auto max-w-5xl space-y-12">
            {projetos.length > 0 ? (
              projetos.map((project: Project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden border-0 bg-transparent shadow-none"
                >
                  <div className="flex flex-col gap-6 sm:flex-row">
                    <div className="shrink-0">
                      <div className="block transition-opacity duration-200 hover:opacity-90">
                        <img
                          src={project.image.url}
                          alt={project.name}
                          className="aspect-[16/9] w-full rounded-lg object-cover object-center sm:w-[260px]"
                        />
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge variant="secondary">{project.phase}</Badge>
                        <span>{project.technologies}</span>
                      </div>
                      <h3 className="text-xl leading-tight font-bold lg:text-2xl">
                        <div className="hover:underline">{project.name}</div>
                      </h3>
                      <p className="text-base text-muted-foreground">
                        {project.description}
                      </p>
                      <a
                        href={project.repositoryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        Repositório
                        <ArrowRight className="ml-2 size-4" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <p className="text-center text-muted-foreground">
                Nenhum projeto encontrado
              </p>
            )}
          </div>
        </TabsContent>
        <TabsContent value="2">
          <div className="mx-auto max-w-5xl space-y-12">
            {estudos.length > 0 ? (
              estudos.map((project: Project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden border-0 bg-transparent shadow-none"
                >
                  <div className="flex flex-col gap-6 sm:flex-row">
                    <div className="shrink-0">
                      <div className="block transition-opacity duration-200 hover:opacity-90">
                        <img
                          src={project.image.url}
                          alt={project.name}
                          className="aspect-[16/9] w-full rounded-lg object-cover object-center sm:w-[260px]"
                        />
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge variant="secondary">{project.phase}</Badge>
                        <span>{project.technologies}</span>
                      </div>
                      <h3 className="text-xl leading-tight font-bold lg:text-2xl">
                        <div className="hover:underline">{project.name}</div>
                      </h3>
                      <p className="text-base text-muted-foreground">
                        {project.description}
                      </p>
                      <a
                        href={project.repositoryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        Repositório
                        <ArrowRight className="ml-2 size-4" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <p className="text-center text-muted-foreground">
                Nenhum estudo encontrado
              </p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
