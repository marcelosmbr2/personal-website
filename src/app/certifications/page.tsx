import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { IconCertificate } from "@tabler/icons-react"

const items = [
  {
    devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    name: "Laravel 11: Framework, Ecossistema e Projetos Web",
    plataform: "Udemy",
    description:
      "Domine o framework Laravel 11 e construa aplicações web modernas e robustas com as melhores práticas do mercado.",
    link: "https://www.udemy.com/course/laravel-11-framework-ecossistema-e-projetos-web/?couponCode=KEEPLEARNINGBR",
  },
  {
    devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    name: "Dominando Banco de Dados com MySQL",
    plataform: "Udemy",
    description:
      "Aprenda MySQL do básico ao avançado, incluindo modelagem, consultas complexas e otimização de performance.",
    link: "https://www.udemy.com/course/curso-mysql/",
  },
  {
    devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    name: "Curso Completo de PHP 7",
    plataform: "Udemy",
    description:
      "Desenvolva aplicações web dinâmicas com PHP 7, desde conceitos básicos até recursos avançados da linguagem.",
    link: "https://www.udemy.com/course/curso-php-7-online/",
  },
  {
    devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    name: "The Complete Node.js Developer Course",
    plataform: "Udemy",
    description: "Master Node.js by building real-world applications with Express, MongoDB, Socket.io and more.",
    link: "The Complete Node.js Developer Course (3rd Edition)",
  },
  {
    devIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    name: "Docker: Ferramenta essencial para Desenvolvedores",
    plataform: "Udemy",
    description: "Containerize suas aplicações com Docker e aprenda sobre orquestração, volumes e redes.",
    link: "https://www.udemy.com/course/curso-docker/?couponCode=KEEPLEARNINGBR",
  },
  {
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    name: "Amazon Web Services (AWS): Essencial",
    plataform: "Udemy",
    description: "Explore os principais serviços da AWS e aprenda a construir infraestrutura escalável na nuvem.",
    link: "https://www.udemy.com/course/amazon-web-services-essencial/",
  },
  {
    devIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "MongoDB do básico ao avançado (c/ Mongoose e projetos)",
    plataform: "Udemy",
    description: "Aprenda tudo sobre MongoDB, NoSQL e Mongoose, do básico ao avançado e criando projetos práticos!",
    link: "https://www.udemy.com/course/mongodb-do-basico-ao-avancado-c-mongoose-e-projetos",
  },
  {
    devIcon:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    name: "Laravel + Vue 3 + Inertia: From Zero to Production SPA",
    plataform: "Udemy",
    description: "From Zero to Launch: Build Advanced SPAs with Vue, Inertia, Laravel & Tailwind and Ship a Portfolio Project",
    link: "https://www.udemy.com/course/master-laravel-6-with-vuejs-fullstack-development/", 
  },
  {
    devIcon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    name: "GitHub Actions - The Complete Guide",
    plataform: "Udemy",
    description: "Learn how to build automated CI / CD workflows with GitHub's DevOps service.",
    link: "https://www.udemy.com/course/github-actions-the-complete-guide/", 
  },
]

export default function Certifications() {
  return (
    <section className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <IconCertificate className="mx-auto mb-8 h-8 w-8 text-primary" />
        <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-5xl lg:mb-6">Cursos</h2>
        <p className="mb-12 text-muted-foreground md:text-base lg:text-lg">
          Conhecimento validado por cursos reconhecidos no mercado.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader className="pb-4">
              <div className="mx-auto mb-4 bg-white dark:bg-neutral-800 size-16 rounded-xl border border-background shadow flex items-center justify-center">
                <img alt={item.name} src={item.devIcon || "/placeholder.svg"} className="h-10 w-10 object-contain" />
              </div>
              <Badge variant="secondary" className="w-fit mx-auto mb-2">
                {item.plataform}
              </Badge>
            </CardHeader>

            <CardContent className="flex-1 text-center">
              <h3 className="font-semibold text-lg mb-2 text-balance">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
            </CardContent>

            <CardFooter className="pt-0">
              <Button variant="secondary" className="w-full" asChild>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Ver Curso
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
