import Image from "next/image";
import type { BlogBlock, BlogListItem, InlineSpan } from "@/data/blog";
import { BlogNote } from "@/components/BlogNote";

const sectionAccents = [
  { text: "text-foreground", bar: "bg-foreground" },
  { text: "text-foreground", bar: "bg-foreground" },
  { text: "text-foreground", bar: "bg-foreground" },
  { text: "text-foreground", bar: "bg-foreground" },
] as const;

function RichText({ spans }: { spans: InlineSpan[] }) {
  return (
    <>
      {spans.map((span, index) => {
        if (typeof span === "string") {
          return <span key={index}>{span}</span>;
        }

        return (
          <a
            key={index}
            href={span.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-muted"
          >
            {span.text}
          </a>
        );
      })}
    </>
  );
}

function ListItemContent({ item }: { item: BlogListItem }) {
  if (typeof item === "string") {
    return item;
  }
  return <RichText spans={item} />;
}

function Block({
  block,
  index,
  inPanel = false,
}: {
  block: BlogBlock;
  index: number;
  inPanel?: boolean;
}) {
  const key = `${block.type}-${index}`;

  if (block.type === "p") {
    return (
      <p key={key} className={inPanel ? "" : "mb-5 last:mb-0 sm:mb-6"}>
        {"spans" in block ? <RichText spans={block.spans} /> : block.text}
      </p>
    );
  }

  if (block.type === "h2") {
    return (
      <h2
        key={key}
        className="clear-both mt-7 mb-5 text-xl font-medium tracking-[-0.03em] text-foreground first:mt-0 sm:mt-9 sm:mb-6 sm:text-2xl"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "h3") {
    return (
      <h3
        key={key}
        className="clear-both mt-6 mb-4 text-base font-medium tracking-[-0.02em] text-foreground first:mt-0 sm:mt-7 sm:mb-5 sm:text-lg"
      >
        {block.text}
      </h3>
    );
  }

  if (block.type === "ul" || block.type === "ol") {
    const ListTag = block.type === "ul" ? "ul" : "ol";
    return (
      <ListTag
        key={key}
        className={`${
          block.type === "ul" ? "list-disc" : "list-decimal"
        } ${inPanel ? "" : "mb-5 last:mb-0 sm:mb-6"} flex flex-col gap-2.5 pl-5`}
      >
        {block.items.map((item, itemIndex) => (
          <li key={itemIndex} className="pl-1">
            <ListItemContent item={item} />
          </li>
        ))}
      </ListTag>
    );
  }

  if (block.type === "image") {
    return (
      <figure
        key={key}
        className="my-2 sm:float-right sm:mt-0 sm:mb-4 sm:ml-6 sm:w-1/2"
      >
        <Image
          className="h-auto w-full !rounded-xl"
          src={block.src}
          alt={block.alt}
          width={768}
          height={500}
        />
        {block.caption ? (
          <figcaption className="mt-2.5 text-center text-sm text-muted whitespace-nowrap">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (block.type === "video") {
    return (
      <figure
        key={key}
        className="my-2 sm:clear-right sm:float-right sm:mt-1 sm:mb-4 sm:ml-6 sm:w-1/2"
      >
        <video
          className="w-full !rounded-xl"
          src={block.src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        {block.caption ? (
          <figcaption className="mt-2.5 text-center text-sm text-muted whitespace-nowrap">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (block.type === "panel") {
    const lead: BlogBlock[] = [];
    const sections: { title: string; blocks: BlogBlock[] }[] = [];

    for (const child of block.blocks) {
      if (child.type === "h3") {
        sections.push({ title: child.text, blocks: [] });
      } else if (sections.length === 0) {
        lead.push(child);
      } else {
        sections[sections.length - 1]?.blocks.push(child);
      }
    }

    return (
      <section key={key} className="clear-both mt-7 mb-5 border border-border bg-surface px-5 py-6 last:mb-0 sm:mt-9 sm:mb-6 sm:px-7 sm:py-8">
        <h2 className="text-xl font-medium tracking-[-0.03em] sm:text-2xl">
          {block.title}
        </h2>
        {lead.length > 0 ? (
          <div className="mt-5 flex flex-col gap-5">
            {lead.map((child, childIndex) => (
              <Block key={`${key}-lead-${childIndex}`} block={child} index={childIndex} inPanel />
            ))}
          </div>
        ) : null}
        <div className="mt-8 border-t border-border">
          {sections.map((section, sectionIndex) => {
            const accent = sectionAccents[sectionIndex % sectionAccents.length];
            return (
              <div
                key={section.title}
                className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-4 border-b border-border py-6 sm:gap-x-5"
              >
                <span className={`font-mono text-sm ${accent.text}`}>
                  {String(sectionIndex + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-medium tracking-[-0.02em] sm:text-lg">
                  {section.title}
                </h3>
                <span aria-hidden="true" className={`mt-3 w-1.5 justify-self-center ${accent.bar}`} />
                <div className="mt-3 flex flex-col gap-4">
                  {section.blocks.map((child, childIndex) => (
                    <Block
                      key={`${key}-${sectionIndex}-${childIndex}`}
                      block={child}
                      index={childIndex}
                      inPanel
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return <BlogNote key={key} text={block.text} />;
}

export function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flow-root text-base leading-[1.7] text-foreground/90 sm:text-[1.0625rem]">
      {blocks.map((block, index) => (
        <Block key={`${block.type}-${index}`} block={block} index={index} />
      ))}
    </div>
  );
}
