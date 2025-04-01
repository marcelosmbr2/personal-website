import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative container mx-auto">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="blocks background"
          src="https://shadcnblocks.com/images/block/patterns/square-alt-grid.svg"
          className="opacity-90 [mask-image:radial-gradient(75%_75%_at_center,white,transparent)]"
        />
      </div>
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
              <Image
                src="https://shadcnblocks.com/images/block/block-1.svg"
                alt="app logo"
                width={28}
                height={28}
              />
            </div>
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
                MarceloSMBR
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
                <a href="/docs/cv.pdf" target="_blank">
                  Currículo
                </a>
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
                  <a
                    href="https://www.linkedin.com/in/marcelosmbr"
                    target="_blank"
                  >
                    <Image
                      src="images/linkedin.svg"
                      alt="linkedin logo"
                      width={24}
                      height={24}
                    />
                  </a>
                </Button>
                <div
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "cursor-pointer group flex aspect-square h-12 items-center justify-center p-0"
                  )}
                >
                  <a href="https://github.com/Marcelosmbrrr" target="_blank">
                    <Image
                      src="images/github.svg"
                      alt="github logo"
                      width={24}
                      height={24}
                    />
                  </a>
                </div>

                <div
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "cursor-pointer group flex aspect-square h-12 items-center justify-center p-0"
                  )}
                >
                  <a href="mailto:marcelosmbr.dev@outlook.com" target="_blank">
                    <Image
                      src="images/gmail.svg"
                      alt="gmail logo"
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
                <div
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "cursor-pointer group flex aspect-square h-12 items-center justify-center p-0"
                  )}
                >
                  <a
                    href="https://wa.me/5553991082653"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="images/whatsapp.svg"
                      alt="whatsapp logo"
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
                <div
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "cursor-pointer group flex aspect-square h-12 items-center justify-center p-0"
                  )}
                >
                  <a href="#" target="_blank">
                    <Image
                      src="images/youtube.svg"
                      alt="youtube logo"
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
