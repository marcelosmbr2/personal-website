import { Button, buttonVariants } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import Link from "next/link";

import whatsIamge from "@/../public/images/whatsapp.svg";
import linkedinImage from "@/../public/images/linkedin.svg";
import youtubeImage from "@/../public/images/youtube.svg";
import gmailImage from "@/../public/images/gmail.svg";
import githubImage from "@/../public/images/github.svg";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Home() {
  return (
    <section className="relative container mx-auto">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://shadcnblocks.com/images/block/patterns/square-alt-grid.svg"
          className="opacity-90 [mask-image:radial-gradient(75%_75%_at_center,white,transparent)]"
        />
      </div>
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
              <img
                src="https://shadcnblocks.com/images/block/block-1.svg"
                alt="logo"
                className="h-16"
              />
            </div>
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
                Marcelosm.dev
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
                Desenvolvedor Full Stack
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="cursor-pointer dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <span>Currículo</span>
              </HoverBorderGradient>
            </div>
            <div className="mt-12 flex flex-col items-center gap-5">
              <p className="font-medium text-muted-foreground lg:text-left">
                Conecte-se
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Button
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "cursor-pointer group flex aspect-square h-12 items-center justify-center p-0"
                  )}
                >
                  <img
                    src="images/linkedin.svg"
                    alt="shadcn/ui logo"
                    className="h-6"
                  />
                </Button>
                <div
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "cursor-pointer group flex aspect-square h-12 items-center justify-center p-0"
                  )}
                >
                  <img
                    src="images/github.svg"
                    alt="TypeScript logo"
                    className="h-6"
                  />
                </div>

                <div
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "cursor-pointer group flex aspect-square h-12 items-center justify-center p-0"
                  )}
                >
                  <img
                    src="images/gmail.svg"
                    alt="React logo"
                    className="h-6"
                  />
                </div>
                <div
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "cursor-pointer group flex aspect-square h-12 items-center justify-center p-0"
                  )}
                >
                  <img
                    src="images/whatsapp.svg"
                    alt="Tailwind CSS logo"
                    className="h-6"
                  />
                </div>
                <div
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "cursor-pointer group flex aspect-square h-12 items-center justify-center p-0"
                  )}
                >
                  <img
                    src="images/youtube.svg"
                    alt="Tailwind CSS logo"
                    className="h-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
