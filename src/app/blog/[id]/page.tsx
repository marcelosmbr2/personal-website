import { Badge } from "@/components/ui/badge";
import { performRequest } from "@/lib/datocms";
import { format } from "date-fns/format";

interface Post {
  id: string;
  name: string;
  tags: string;
  text: {
    value: {
      schema: string;
      document: {
        type: string;
        children: Array<Paragraph | List>;
      };
    };
  };
  image: {
    url: string;
  };
  description: string;
  category: string;
  _updatedAt: string;
}

interface Paragraph {
  type: "paragraph";
  children: Array<Span | Link>;
}

interface List {
  type: "list";
  style: "bulleted";
  children: Array<ListItem>;
}

interface ListItem {
  type: "listItem";
  children: Array<Paragraph>;
}

interface Span {
  type: "span";
  value: string;
  marks?: Array<string>;
}

interface Link {
  type: "link";
  url: string;
  children: Array<Span>;
}

interface Data {
  post: Post;
}

interface Response {
  data: Data;
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const QUERY = `
    query GetPost($id: ItemId) {
        post(filter: {id: {eq: $id}}) {
            category
            description
            id
            name
            tags
            text {
                value
            }
            image {
                url
            }
            _updatedAt
        }
    }`;

  const variables = {
    id: (await params).id,
  };

  const { data } = await performRequest({ query: QUERY, variables });

  return (
    <section className="container mx-auto">
      <div className="mx-auto text-center">
        <Badge variant="secondary" className="mb-6">
          {format(new Date(data.post._updatedAt), "MMM. d, yyyy")}
        </Badge>
        <h2 className="mb-8 text-3xl font-semibold text-pretty md:text-5xl">
          {data.post.name}
        </h2>
      </div>
      <article className="mx-auto w-full max-w-2xl px-4">
        <figure className="mb-4">
          <img
            src={data.post.image.url}
            alt="Digital art by Anonymous"
            className="rounded-md"
          />
          <figcaption>{""}</figcaption>
        </figure>
        {data.post.text.value.document.children.map(
          (
            block: { type: string; children: any[] },
            index: React.Key | null | undefined
          ) => {
            if (block.type === "paragraph") {
              return (
                <p key={index} className="my-2">
                  {block.children.map((span, spanIndex) => (
                    <span
                      key={spanIndex}
                      className={
                        span.marks && span.marks.includes("strong")
                          ? "font-bold text-xl text-gray-900 dark:text-white"
                          : "text-gray-700 dark:text-gray-300"
                      }
                    >
                      {span.value}
                    </span>
                  ))}
                </p>
              );
            } else if (block.type === "list") {
              return (
                <ul key={index} className="list-disc pl-5">
                  {block.children.map((listItem, listItemIndex) => (
                    <li key={listItemIndex}>
                      {listItem.children.map(
                        (
                          paragraph: { children: any[] },
                          paragraphIndex: React.Key | null | undefined
                        ) => (
                          <p key={paragraphIndex} className="my-2">
                            {paragraph.children.map((span, spanIndex) => (
                              <span
                                key={spanIndex}
                                className={
                                  span.marks && span.marks.includes("strong")
                                    ? "font-bold text-xl text-gray-900 dark:text-white"
                                    : "text-gray-700 dark:text-gray-300"
                                }
                              >
                                {span.value}
                              </span>
                            ))}
                          </p>
                        )
                      )}
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          }
        )}
      </article>
    </section>
  );
}
