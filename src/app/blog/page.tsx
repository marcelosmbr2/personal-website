import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { performRequest } from "@/lib/datocms";
import Link from "next/link";
import { IconBrandBlogger } from "@tabler/icons-react";

interface Post {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string;
  externalLink?: string;
  image: { url: string };
  _createdAt: string;
  _updatedAt: string;
}

const QUERY = `
  query {
    allPosts(filter: {
      isPublished: { eq: true }
    }) {
      category
      description
      id
      name
      tags
      externalLink
      image {
        url
      }
      _createdAt
      _updatedAt
    }
  }
`;

export default async function Blog() {
  const {
    data: { allPosts },
  } = await performRequest({ query: QUERY });

  const philosophy = allPosts.filter(
    (project: Post) => project.category === "Filosofia"
  );
  const tech = allPosts.filter(
    (project: Post) => project.category === "Tecnologia"
  );

  function formatDate(dateString: string): string {
    return format(new Date(dateString), "dd MMMM yyyy", { locale: ptBR });
  }

  return (
    <section className="container mx-auto">
      <div className="mx-auto text-center">
        <IconBrandBlogger className="mx-auto mb-8 h-8 w-8 text-neutral-500 text-primary" />
        <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-5xl lg:mb-6">
          Blog Pessoal
        </h2>
        <p className="mb-12 text-muted-foreground md:text-base lg:text-lg">
          Espaço onde compartilho artigos e reflexões que despertam o meu
          interesse.
        </p>
      </div>

      <Tabs defaultValue="1" className="mx-auto max-w-5xl space-y-12 px-4">
        <TabsList className="w-full mx-auto max-w-sm">
          <TabsTrigger value="1">Tecnologia</TabsTrigger>
          <TabsTrigger value="2">Filosofia</TabsTrigger>
        </TabsList>
        <TabsContent value="1">
          <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tech.map((post: Post) => (
              <Card
                key={post.id}
                className="overflow-hidden border shadow-sm p-0 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <img
                  src={post.image.url || "/placeholder.svg"}
                  alt="alt"
                  className="aspect-[4/3] w-full object-cover object-center"
                />
                <div className="px-6 py-4 flex flex-col h-48">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <Badge variant="secondary">{formatDate(post._createdAt)}</Badge>
                    <span>{post.tags}</span>
                  </div>
                  <h3 className="text-lg leading-tight font-bold lg:text-xl mb-3">{post.name}</h3>
                  <p className="text-sm text-muted-foreground flex-1 overflow-hidden text-ellipsis line-clamp-3 mb-3">
                    {post.description}
                  </p>
                  <div className="mt-auto">
                    {post.externalLink && (
                      <a
                        target="_blank"
                        href={post.externalLink}
                        className="inline-flex items-center text-secondary hover:underline text-sm"
                        rel="noreferrer"
                      >
                        Ler no LinkedIn
                        <ArrowRight className="ml-2 size-4" />
                      </a>
                    )}

                    {!post.externalLink && (
                      <Link
                        href={"/blog/" + post.id}
                        className="inline-flex items-center text-secondary hover:underline text-sm"
                      >
                        Ler mais
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="2">
          <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            {philosophy.map((post: Post) => (
              <Card
                key={post.id}
                className="overflow-hidden border shadow-sm p-0 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <img
                  src={post.image.url || "/placeholder.svg"}
                  alt="alt"
                  className="aspect-[4/3] w-full object-cover object-center"
                />
                <div className="px-6 py-4 flex flex-col h-48">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <Badge variant="secondary">{formatDate(post._createdAt)}</Badge>
                    <span>{post.tags}</span>
                  </div>
                  <h3 className="text-lg leading-tight font-bold lg:text-xl mb-3">{post.name}</h3>
                  <p className="text-sm text-muted-foreground flex-1 overflow-hidden text-ellipsis line-clamp-3 mb-3">
                    {post.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={"/blog/" + post.id}
                      className="inline-flex items-center text-secondary hover:underline text-sm"
                    >
                      Ler mais
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
