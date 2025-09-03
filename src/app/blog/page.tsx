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
      <div className="mx-auto max-w-3xl text-center">
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
          <div className="mx-auto max-w-5xl space-y-12">
            {tech.map((post: Post) => (
              <Card
                key={post.id}
                className="overflow-hidden border-0 bg-transparent shadow-none"
              >
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="shrink-0">
                    <div className="block transition-opacity duration-200 hover:opacity-90">
                      <img
                        src={post.image.url}
                        alt="alt"
                        className="aspect-[16/9] w-full rounded-lg object-cover object-center sm:w-[260px]"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Badge variant="secondary">
                        {formatDate(post._createdAt)}
                      </Badge>
                      <span>{post.tags}</span>
                    </div>
                    <h3 className="text-xl leading-tight font-bold lg:text-2xl">
                      {post.name}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {post.description}
                    </p>
                    {post.externalLink && (
                      <a
                        target="_blank"
                        href={post.externalLink}
                        className="inline-flex items-center text-secondary hover:underline"
                      >
                        Ler no LinkedIn
                        <ArrowRight className="ml-2 size-4" />
                      </a>
                    )}

                    {!post.externalLink && (
                      <Link
                        href={"/blog/" + post.id}
                        className="inline-flex items-center text-secondary hover:underline"
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
          <div className="mx-auto max-w-5xl space-y-12">
            {philosophy.map((post: Post) => (
              <Card
                key={post.id}
                className="overflow-hidden border-0 bg-transparent shadow-none"
              >
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="shrink-0">
                    <div className="block transition-opacity duration-200 hover:opacity-90">
                      <img
                        src={post.image.url}
                        alt="alt"
                        className="aspect-[16/9] w-full rounded-lg object-cover object-center sm:w-[260px]"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Badge variant="secondary">
                        {formatDate(post._createdAt)}
                      </Badge>
                      <span>{post.tags}</span>
                    </div>
                    <h3 className="text-xl leading-tight font-bold lg:text-2xl">
                      {post.name}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {post.description}
                    </p>
                    <Link
                      href={"/blog/" + post.id}
                      className="inline-flex items-center text-secondary hover:underline"
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
