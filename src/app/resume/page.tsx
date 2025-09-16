import * as React from "react";
import { IconDownload, IconFileTextSpark } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

interface ExperienceItem {
  title: string
  company: string
  period: string
  location: string
  description: string
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Desenvolvedor Full Stack",
    company: "Freelancer",
    period: "11/2024 – Presente",
    location: "Remoto",
    description:
      "Desenvolvimento de uma aplicação moderna e responsiva para clubes esportivos, conectando-os diretamente a seus clientes. O sistema possui um painel administrativo para gerenciar e fornecer suporte aos usuários, uma dashboard para clubes administrarem seu negócio, incluindo quadras, horários, partidas, torneios, aulas e demais atividades e serviços, e uma dashboard para jogadores, permitindo buscar clubes, reservar partidas públicas ou privadas, gerenciar seu perfil, inscrever-se em torneios, agendar aulas e acompanhar suas atividades. A plataforma inclui notificações, envio de e-mails, autenticação e autorização de usuários, gerenciamento de filas e jobs para processamento assíncrono, além de integração com pagamentos e outras funcionalidades.",
    technologies: [
      "Laravel",
      "PHP",
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "TypeScript",
      "Inertia.js",
      "Docker",
      "Tailwind CSS",
      "GitHub",
      "MySQL",
      "CI/CD",
      "Digital Ocean"
    ],
  },
  {
    title: "Bolsista - Capes",
    company: "Colégio Municipal Pelotense",
    period: "01/2022 – 03/2024",
    location: "Pelotas, RS",
    description:
      "No estágio obrigatório do curso de Licenciatura em Computação, ministrei aulas de informática básica na escola Pelotense, ensinando o básico sobre uso de computadores, sistema operacional Windows, pacote Office e navegação na Internet.",
    technologies: ["Informática Básica", "Docência"],
  },
  {
    title: "Desenvolvedor Full Stack",
    company: "Birdview",
    period: "07/2023 – 02/2024",
    location: "Remoto",
    description:
      "Deu-se continuidade ao projeto que havia sido vinculado anteriormente como bolsista, neste caso como prestador de serviço para a Birdview. Continuamos o desenvolvimento do software de criação de rotas para execução de missões programáticas com drones em plantações, bem como da plataforma em que seria integrado, e serviria para gerenciar as missões.",
    technologies: [
      "Laravel",
      "PHP",
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "HTML5",
      "MySQL",
      "Inertia.js",
      "GitHub",
      "CSS3",
      "CI/CD",
      "Digital Ocean",
    ],
  },
  {
    title: "Bolsista de Desenvolvimento Tecnológico",
    company: "Bolsa, IFSUL",
    period: "08/2021 – 07/2023",
    location: "Remoto",
    description:
      "Atuei como desenvolvedor da plataforma para o gerenciamento, planejamento e execução de missões utilizando drones no controle biológico de pragas. Foi desenvolvido um software para criação de rotas programáticas a serem executadas pelos drones com Mapbox, e fiquei encarregado de criar uma plataforma em que essas missões poderiam ser gerenciadas e em que esse software estaria integrado. A plataforma foi estruturada como um sistema multi-tenancy, contemplando diferentes tipos de usuários, como administradores, gerentes, pilotos e clientes, cada um com permissões e funções específicas. As rotas eram criadas, salvas e vinculadas a missões ou ordens de serviço, que por sua vez geravam logs detalhados utilizados na elaboração de relatórios para acompanhamento e finalização das missões.",
    technologies: ["Laravel", "React.js", "JavaScript", "PHP", "CSS3", "HTML5", "GitHub", "MySQL"],
  },
  {
    title: "Desenvolvedor PHP",
    company: "Escola Mario Quintana",
    period: "04/2021 – 08/2021",
    location: "Pelotas, RS",
    description:
      "Atuei no desenvolvimento de módulos da plataforma open-source Helpdezk, aplicando conhecimentos em PHP, jQuery e componentes do Bootstrap para implementar novas funcionalidades.",
    technologies: ["PHP", "jQuery", "MySQL", "CSS", "HTML5", "GitHub", "Smarty Engine", "JavaScript"],
  },
]

export default async function Stacks() {
  return (
    <section className="container mx-auto px-4 lg:px-0">
      <div className="mx-auto max-w-3xl text-center">
        <IconFileTextSpark className="mx-auto mb-8 h-8 w-8 text-neutral-500 text-primary" />
        <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-5xl lg:mb-6">Experiências</h2>
        <p className="mb-12 text-muted-foreground md:text-base lg:text-lg">Experiências profissionais e acadêmicas.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center gap-3">
          <Button size="lg" variant="secondary" asChild>
            <a href="/docs/cv-ptbr.pdf" target="_blank" className="flex items-center gap-2">
              <IconDownload size={20} />
              Ver Currículo
            </a>
          </Button>
        </div>
        <div className="relative">
          {/* Linha vertical da timeline */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Ponto da timeline */}
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                  <div className="h-3 w-3 rounded-full bg-primary-foreground"></div>
                </div>

                {/* Conteúdo da experiência */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                      <p className="text-sm italic text-muted-foreground">{experience.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{experience.period}</p>
                      <p className="text-sm text-muted-foreground">{experience.location}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-justify">
                    {experience.description}
                  </p>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-1">
                    {experience.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs text-muted-foreground">
                        {tech}
                        {techIndex < experience.technologies.length - 1 && " • "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
