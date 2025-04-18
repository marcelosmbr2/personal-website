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
        children: Array<Paragraph | List | Blockquote>;
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

interface Blockquote {
  type: "blockquote";
  children: Array<Paragraph>;
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

  const renderSpan = (span: Span, spanIndex: number) => (
    <span
      key={spanIndex}
      className={`
        ${span.marks?.includes("strong") ? "font-bold" : ""}
        ${span.marks?.includes("emphasis") ? "italic" : ""}
        text-gray-700 dark:text-gray-300
      `}
    >
      {span.value}
    </span>
  );

  const renderParagraph = (paragraph: Paragraph, pIndex: number) => (
    <p key={pIndex} className="my-2">
      {paragraph.children.map((child, childIndex) => {
        if (child.type === "span") {
          return renderSpan(child, childIndex);
        }
        // Handle links if needed
        return null;
      })}
    </p>
  );

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
          (block: Paragraph | List | Blockquote, index: number) => {
            switch (block.type) {
              case "paragraph":
                return renderParagraph(block, index);

              case "list":
                return (
                  <ul key={index} className="my-4 list-disc pl-6 space-y-2">
                    {block.children.map(
                      (listItem: ListItem, listItemIndex: number) => (
                        <li key={listItemIndex}>
                          {listItem.children.map(
                            (paragraph: Paragraph, pIndex: number) =>
                              renderParagraph(paragraph, pIndex)
                          )}
                        </li>
                      )
                    )}
                  </ul>
                );

              case "blockquote":
                return (
                  <blockquote
                    key={index}
                    className="my-6 border-l-4 border-gray-300 pl-4 italic text-gray-600 dark:border-gray-600 dark:text-gray-400"
                  >
                    {block.children.map(
                      (paragraph: Paragraph, pIndex: number) =>
                        renderParagraph(paragraph, pIndex)
                    )}
                  </blockquote>
                );

              default:
                const _exhaustiveCheck: never = block;
                return _exhaustiveCheck;
            }
          }
        )}
      </article>
    </section>
  );
}
