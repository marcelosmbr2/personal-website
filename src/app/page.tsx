"use client";

import Head from "next/head";
import {
	IconDownload,
	IconBrandLinkedin,
	IconBrandGithub,
	IconMail,
	IconBrandWhatsapp,
	IconBrandYoutube,
} from "@tabler/icons-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect, useState } from "react";
import skillsData from "@/utils/skills.json";
import coursesData from "@/utils/courses.json";
import experiencesData from "@/utils/experiences.json";
import projectsData from "@/utils/projects.json";
import Image from "next/image";

export default function WelcomePage() {
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const sections = document.querySelectorAll("[id]");
		const observerOptions = {
			root: null,
			rootMargin: "-20% 0px -70% 0px",
			threshold: 0,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const sectionId = entry.target.getAttribute("id");
					if (
						sectionId &&
						[
							"home",
							"skills",
							"projects",
							"experiencia",
							"cursos",
							"blog",
						].includes(sectionId)
					) {
						setActiveSection(sectionId);
					}
				}
			});
		}, observerOptions);

		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	return (
		<>
			<Head>
				<title>Welcome</title>
				<link rel="preconnect" href="https://rsms.me/" />
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</Head>
			<div>
				<header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
					<nav className="mt-4 relative max-w-3xl w-full bg-white border border-gray-200 rounded-[24px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-1 ps-4 md:py-0 sm:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
						<h1 className="font-bold text-xl">
							SMBR
						</h1>

						<div className="flex items-center gap-1 md:order-4 md:ms-4">
							<ThemeToggle />
							<div className="md:hidden">
								<button
									type="button"
									className="hs-collapse-toggle flex justify-center items-center size-9.5 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
									id="hs-navbar-header-floating-collapse"
									aria-expanded="false"
									aria-controls="hs-navbar-header-floating"
									aria-label="Toggle navigation"
									data-hs-collapse="#hs-navbar-header-floating"
								>
									<svg
										className="hs-collapse-open:hidden shrink-0 size-3.5"
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
										<line x1="3" x2="21" y1="6" y2="6" />
										<line x1="3" x2="21" y1="12" y2="12" />
										<line x1="3" x2="21" y1="18" y2="18" />
									</svg>
									<svg
										className="hs-collapse-open:block hidden shrink-0 size-4"
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
										<path d="M18 6 6 18" />
										<path d="m6 6 12 12" />
									</svg>
								</button>
							</div>
						</div>

						<div
							id="hs-navbar-header-floating"
							className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
							aria-labelledby="hs-navbar-header-floating-collapse"
						>
							<div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
								<a
									className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 transition-colors ${
										activeSection === "home"
											? "border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
											: "border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
									} focus:outline-hidden`}
									href="#home"
								>
									Home
								</a>
								<a
									className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 transition-colors ${
										activeSection === "skills"
											? "border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
											: "border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
									} focus:outline-hidden`}
									href="#skills"
								>
									Skills
								</a>
								<a
									className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 transition-colors ${
										activeSection === "projects"
											? "border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
											: "border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
									} focus:outline-hidden`}
									href="#projects"
								>
									Projetos
								</a>
								<a
									className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 transition-colors ${
										activeSection === "experiencia"
											? "border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
											: "border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
									} focus:outline-hidden`}
									href="#experiencia"
								>
									Experiência
								</a>
								<a
									className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 transition-colors ${
										activeSection === "cursos"
											? "border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
											: "border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
									} focus:outline-hidden`}
									href="#cursos"
								>
									Cursos
								</a>
								<a
									className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 transition-colors ${
										activeSection === "blog"
											? "border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
											: "border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
									} focus:outline-hidden`}
									href="#blog"
								>
									Blog
								</a>
							</div>
						</div>
					</nav>
				</header>

				<main id="content">
					<div className="w-full max-w-3xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
						<div id="home" className="flex items-center gap-x-3">
							<div className="shrink-0">
								<img
									className="shrink-0 size-16 rounded-full"
									src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Avatar"
								/>
							</div>

							<div className="grow">
								<h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
									Marcelo Moreira
								</h1>
								<p className="text-sm text-gray-600 dark:text-neutral-400">
									Engenheiro de Software
								</p>
							</div>
						</div>

						<div className="mt-8">
							<p className="text-sm text-gray-600 dark:text-neutral-400">
								Sou um desenvolvedor full stack com mais de 8 anos de
								experiência em desenvolvimento web e mobile. Minha expertise
								abrange tecnologias modernas como React, Next.js, Node.js,
								TypeScript e Python, ajudando empresas a construir soluções
								digitais robustas e escaláveis.
							</p>

							<p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
								Atualmente trabalho como desenvolvedor sênior, focando em
								arquitetura de software, desenvolvimento de APIs RESTful e
								interfaces de usuário responsivas. Sou apaixonado por criar
								código limpo, performático e que proporcione excelente
								experiência ao usuário.
							</p>

							<div className="mt-5 flex items-center gap-x-4">
								<a
									href="mailto:marcelo@example.com"
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
									href="https://wa.me/5511999999999"
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

											{experience.tasks && experience.tasks.length > 0 && (
												<ul className="list-disc ms-6 mt-3 space-y-1.5">
													{experience.tasks.map((task, taskIndex) => (
														<li
															key={taskIndex}
															className="ps-1 text-sm text-gray-600 dark:text-neutral-400"
														>
															{task}
														</li>
													))}
												</ul>
											)}

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
									Principais Cursos
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
								<a
									href="/blog"
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
								{/* Blog Article Card 1 */}
								<article className="group">
									<a href="/blog/complete-guide-okrs" className="block">
										<div className="flex gap-4">
											<div className="shrink-0">
												<img
													className="w-40 h-40 object-cover rounded-lg bg-gray-100 dark:bg-neutral-800"
													src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3"
													alt="OKRs Guide"
												/>
											</div>
											<div className="flex-1 min-w-0">
												<div className="flex items-center gap-2 mb-2">
													<time className="text-xs text-gray-500 dark:text-neutral-500">
														2024
													</time>
													<span className="text-xs text-gray-400 dark:text-neutral-600">
														•
													</span>
													<span className="text-xs text-gray-500 dark:text-neutral-500">
														5 min read
													</span>
												</div>
												<h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
													The complete guide to OKRs
												</h3>
												<p className="mt-1 text-sm text-gray-600 dark:text-neutral-400 line-clamp-2">
													How to make objectives and key results work for your
													company. A comprehensive guide to implementing OKRs
													effectively.
												</p>
											</div>
										</div>
									</a>
								</article>
							</div>
						</div>
					</div>
				</main>

				<footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="py-6 border-t border-gray-200 dark:border-neutral-700">
						<div className="flex flex-wrap justify-between items-center gap-2">
							<div>
								<p className="text-xs text-gray-600 dark:text-neutral-400">
									© 2025 Marcelosmbr
								</p>
							</div>

							<ul className="flex flex-wrap items-center">
								<li className="inline-block">
									<span className="text-xs text-gray-600 dark:text-neutral-400">
										Next.js 15 + DatoCMS
									</span>
								</li>
							</ul>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
