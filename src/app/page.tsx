import Head from "next/head";
import Link from "next/link";
import {
	IconDownload,
	IconBrandLinkedin,
	IconBrandGithub,
	IconMail,
	IconBrandWhatsapp,
	IconBrandYoutube,
} from "@tabler/icons-react";
import skillsData from "@/utils/skills.json";
import coursesData from "@/utils/courses.json";
import experiencesData from "@/utils/experiences.json";
import projectsData from "@/utils/projects.json";
import Image from "next/image";

import { Articles } from "@/components/articles/articles";

export default function WelcomePage() {
	return (
		<>
			<Head>
				<title>Welcome</title>
				<link rel="preconnect" href="https://rsms.me/" />
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</Head>
			<div className="w-full max-w-3xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
				<div id="home" className="flex items-center gap-x-3">
					<div className="shrink-0">
						<img
							className="shrink-0 size-16 rounded-full"
							src="images/avatar.webp"
							alt="Avatar"
						/>
					</div>

					<div className="grow">
						<h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
							Marcelo Moreira
						</h1>
						<p className="text-sm text-gray-600 dark:text-neutral-400">
							Desenvolvedor Full Stack
						</p>
					</div>
				</div>

				<div className="mt-8">
					<p className="text-sm text-gray-600 dark:text-neutral-400">
						Sou formado em licenciatura em computação, e desenvolvedor full
						stack com cerca de 5 anos de experiência em desenvolvimento web,
						especializado no ecossistema PHP, utilizando frameworks como Laravel
						e Symfony. No front-end, trabalho principalmente com React.js,
						JavaScript e TypeScript.
					</p>
					<p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
						Atuei no desenvolvimento de aplicações de ponta a ponta, incluindo
						sistemas multi-tenant e SaaS, o que me proporcionou uma visão ampla
						do ciclo de vida do software, desde a concepção da arquitetura até a
						entrega em produção.
					</p>
					<p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
						Tenho também experiência com Node.js e seu ecossistema, além de
						conhecimento em engenharia de software, design e arquitetura de
						sistemas, integração e entrega contínuas (CI/CD), Docker e
						gerenciamento de infraestrutura em nuvem com AWS.
					</p>
					<div className="mt-5 flex items-center gap-x-4">
						<a
							href="mailto:marcelosmbr.dev@outlook.com"
							className="inline-flex items-center justify-center size-10 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800"
							aria-label="Email"
						>
							<IconMail size={20} />
						</a>

						<a
							href="https://github.com/marcelosmbr2"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center size-10 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800"
							aria-label="GitHub"
						>
							<IconBrandGithub size={20} />
						</a>

						<a
							href="https://linkedin.com/in/marcelosmbr"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center size-10 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800"
							aria-label="LinkedIn"
						>
							<IconBrandLinkedin size={20} />
						</a>

						<a
							href="https://wa.me/5553991082653"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center size-10 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800"
							aria-label="WhatsApp"
						>
							<IconBrandWhatsapp size={20} />
						</a>

						<div
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center size-10 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800"
							aria-label="YouTube"
						>
							<IconBrandYoutube size={20} />
						</div>
					</div>
				</div>

				<div id="skills" className="my-10 sm:my-14">
					<h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
						Skills
					</h2>

					<div className="space-y-3">
						<dl className="flex flex-col sm:flex-row gap-1">
							<dt className="min-w-40">
								<span className="block text-sm text-gray-500 dark:text-neutral-500">
									Frontend:
								</span>
							</dt>
							<dd>
								<ul>
									{skillsData.frontend.map((skill, index) => (
										<li
											key={skill.id}
											className={`me-1 ${index < skillsData.frontend.length - 1 ? "after:content-[',']" : ""} inline-flex items-center text-sm text-gray-800 dark:text-neutral-200`}
										>
											<img
												src={skill.devIcon}
												alt={skill.name}
												className="shrink-0 size-4 me-1"
											/>
											{skill.name}
										</li>
									))}
								</ul>
							</dd>
						</dl>

						<dl className="flex flex-col sm:flex-row gap-1">
							<dt className="min-w-40">
								<span className="block text-sm text-gray-500 dark:text-neutral-500">
									Backend:
								</span>
							</dt>
							<dd>
								<ul>
									{skillsData.backend.map((skill, index) => (
										<li
											key={skill.id}
											className={`me-1 ${index < skillsData.backend.length - 1 ? "after:content-[',']" : ""} inline-flex items-center text-sm text-gray-800 dark:text-neutral-200`}
										>
											<img
												src={skill.devIcon}
												alt={skill.name}
												className="shrink-0 size-4 me-1"
											/>
											{skill.name}
										</li>
									))}
								</ul>
							</dd>
						</dl>

						<dl className="flex flex-col sm:flex-row gap-1">
							<dt className="min-w-40">
								<span className="block text-sm text-gray-500 dark:text-neutral-500">
									Outros:
								</span>
							</dt>
							<dd>
								<ul>
									{skillsData.devops.map((skill, index) => (
										<li
											key={skill.id}
											className={`me-1 ${index < skillsData.devops.length - 1 ? "after:content-[',']" : ""} inline-flex items-center text-sm text-gray-800 dark:text-neutral-200`}
										>
											<img
												src={skill.devIcon}
												alt={skill.name}
												className="shrink-0 size-4 me-1"
											/>
											{skill.name}
										</li>
									))}
								</ul>
							</dd>
						</dl>

						<dl className="flex flex-col sm:flex-row gap-1">
							<dt className="min-w-40">
								<span className="block text-sm text-gray-500 dark:text-neutral-500">
									Soft Skills:
								</span>
							</dt>
							<dd>
								<ul>
									{skillsData.soft.map((skill, index) => (
										<li
											key={skill.id}
											className={`me-1 ${index < skillsData.soft.length - 1 ? "after:content-[',']" : ""} inline-flex items-center text-sm text-gray-800 dark:text-neutral-200`}
										>
											{skill.name}
										</li>
									))}
								</ul>
							</dd>
						</dl>
					</div>
					{/* End List */}
				</div>
				{/* End Skills */}

				<div id="projects" className="my-10 sm:my-14">
					<div className="flex items-center justify-between mb-5">
						<h2 className="font-medium text-gray-800 dark:text-neutral-200">
							Projetos
						</h2>
						<a
							href="/projects"
							className="inline-flex items-center gap-x-1 text-sm text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
						>
							Ver todos
							<svg
								className="shrink-0 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</a>
					</div>
					<div className="space-y-6">
						{projectsData.map((project, index) => (
							<article key={index} className="group">
								<a
									href={project.link || "#"}
									className="block"
									target={project.link ? "_blank" : undefined}
									rel={project.link ? "noopener noreferrer" : undefined}
								>
									<div className="flex gap-4">
										<div className="shrink-0">
											<Image
												className="w-40 h-40 object-cover rounded-lg bg-gray-100 dark:bg-neutral-800"
												width={160}
												height={160}
												src={project.image}
												alt={project.name}
											/>
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-2 mb-2">
												<span className="text-xs text-gray-500 dark:text-neutral-500">
													{project.status === "Completed"
														? "Concluído"
														: "Em andamento"}
												</span>
											</div>
											<h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
												{project.name}
											</h3>
											<p className="mt-1 text-sm text-gray-600 dark:text-neutral-400 line-clamp-2">
												{project.description}
											</p>
											<div className="mt-2 flex flex-wrap gap-2">
												{project.technologies
													.split(",")
													.map((tech, techIndex) => (
														<span
															key={techIndex}
															className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-md dark:bg-neutral-800 dark:text-neutral-300"
														>
															{tech.trim()}
														</span>
													))}
											</div>
										</div>
									</div>
								</a>
							</article>
						))}
					</div>
				</div>

				{/* Work Experience */}
				<div id="experiencia" className="mt-10 sm:mt-14">
					<div className="flex items-center justify-between mb-5">
						<h2 className="font-medium text-gray-800 dark:text-neutral-200">
							Experiência
						</h2>
						<a
							href="/docs/cv-ptbr.pdf"
							download
							className="inline-flex items-center gap-x-1 text-sm text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
						>
							Currículo
							<IconDownload className="shrink-0 size-4" />
						</a>
					</div>

					{/* Timeline */}
					<div>
						{experiencesData.map((experience, index) => (
							<div key={index} className="group relative flex gap-x-5">
								{/* Icon */}
								<div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
									<div className="relative z-10 size-6 flex justify-center items-center">
										<img
											src={experience.icon}
											alt={experience.company}
											className="shrink-0 size-6"
										/>
									</div>
								</div>
								{/* End Icon */}

								{/* Right Content */}
								<div className="grow pb-8 group-last:pb-0">
									<h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
										{experience.period}
									</h3>

									<p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
										{experience.title} - {experience.company}
									</p>

									<p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
										{experience.description}
									</p>

									{experience.technologies &&
										experience.technologies.length > 0 && (
											<div className="mt-3 flex flex-wrap gap-2">
												{experience.technologies.map((tech, techIndex) => (
													<span
														key={techIndex}
														className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-md dark:bg-neutral-800 dark:text-neutral-300"
													>
														{tech}
													</span>
												))}
											</div>
										)}
								</div>
								{/* End Right Content */}
							</div>
						))}
					</div>
					{/* End Timeline */}
				</div>
				{/* End Work Experience */}

				<div id="cursos" className="my-10 sm:my-14">
					<div className="flex items-center justify-between mb-5">
						<h2 className="font-medium text-gray-800 dark:text-neutral-200">
							Cursos
						</h2>
					</div>

					<div className="space-y-6">
						{coursesData.map((course, index) => (
							<article key={index} className="group">
								<a
									href={course.link || "#"}
									className="block"
									target={course.link ? "_blank" : undefined}
									rel={course.link ? "noopener noreferrer" : undefined}
								>
									<div>
										<div className="flex items-center gap-2 mb-2">
											<span className="text-xs text-gray-500 dark:text-neutral-500">
												{course.plataform}
											</span>
											<span className="text-xs text-gray-400 dark:text-neutral-600">
												•
											</span>
											<span className="text-xs text-gray-500 dark:text-neutral-500">
												{course.status === "Completed"
													? "Concluído"
													: "Em andamento"}
											</span>
										</div>
										<h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
											{course.name}
										</h3>
										<p className="mt-1 text-sm text-gray-600 dark:text-neutral-400 line-clamp-2">
											{course.description}
										</p>
									</div>
								</a>
							</article>
						))}
					</div>
				</div>

				<div id="blog" className="my-10 sm:my-14">
					<div className="flex items-center justify-between mb-5">
						<h2 className="font-medium text-gray-800 dark:text-neutral-200">
							Blog
						</h2>
						<Link
							href="/articles"
							className="inline-flex items-center gap-x-1 text-sm text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
						>
							Ver todos
							<svg
								className="shrink-0 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</Link>
					</div>
					<Articles />
				</div>
			</div>
		</>
	);
}
