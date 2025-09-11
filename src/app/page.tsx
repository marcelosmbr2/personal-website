import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  IconDownload, 
  IconBrandLinkedin, 
  IconBrandGithub, 
  IconMail, 
  IconBrandWhatsapp, 
  IconBrandYoutube 
} from "@tabler/icons-react";

export default function Home() {
  return (
    <section className="relative container mx-auto flex items-start justify-center pt-4">
      <div className="relative z-10 container">
        <div className="mx-auto flex flex-col items-center">
        <Badge variant="secondary" className="mb-12">Next.js 15</Badge>
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-pretty lg:text-7xl">
                Marcelo Moreira
              </h1>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-pretty lg:text-7xl">
                Dev <span className="text-primary">Full Stack</span>
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl leading-relaxed mt-8">
                Meu nome é Marcelo, sou desenvolvedor de software com experiência full stack e especializado em PHP, Laravel e React.js.
              </p>
            </div>
            <div className="mt-4 flex flex-col items-center gap-6">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://www.linkedin.com/in/marcelosmbr"
                  target="_blank"
                  className={cn(
                    "group flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-secondary hover:scale-105 transition-all"
                  )}
                >
                  <IconBrandLinkedin 
                    size={24} 
                    className="text-white" 
                  />
                </a>
                <a
                  href="https://github.com/Marcelosmbr2"
                  target="_blank"
                  className={cn(
                    "group flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-secondary hover:scale-105 transition-all"
                  )}
                >
                  <IconBrandGithub 
                    size={24} 
                    className="text-white" 
                  />
                </a>
                <a
                  href="mailto:marcelosmbr.dev@outlook.com"
                  target="_blank"
                  className={cn(
                    "group flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-secondary hover:scale-105 transition-all"
                  )}
                >
                  <IconMail 
                    size={24} 
                    className="text-white" 
                  />
                </a>
                <a
                  href="https://wa.me/5553991082653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-secondary hover:scale-105 transition-all"
                  )}
                >
                  <IconBrandWhatsapp 
                    size={24} 
                    className="text-white" 
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className={cn(
                    "group flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-secondary hover:scale-105 transition-all"
                  )}
                >
                  <IconBrandYoutube 
                    size={24} 
                    className="text-white" 
                  />
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
