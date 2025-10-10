"use client";

import * as React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function NavigationHeader() {
	const [activeSection, setActiveSection] = useState("home");

	return (
		<header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
			<nav className="mt-4 relative max-w-3xl w-full bg-white border border-gray-200 rounded-[24px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-1 ps-4 md:py-0 sm:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
				<h1 className="font-bold text-xl">SMBR</h1>
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
						<Link
							onClick={() => setActiveSection("home")}
							className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 transition-colors ${
								activeSection === "home"
									? "border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
									: "border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
							} focus:outline-hidden`}
							href="#home"
						>
							Home
						</Link>
						<Link
							onClick={() => setActiveSection("skills")}
							className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 transition-colors ${
								activeSection === "skills"
									? "border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
									: "border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
							} focus:outline-hidden`}
							href="#skills"
						>
							Skills
						</Link>
						<Link
							onClick={() => setActiveSection("projects")}
							className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 transition-colors ${
								activeSection === "projects"
									? "border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
									: "border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
							} focus:outline-hidden`}
							href="#projects"
						>
							Projetos
						</Link>
						<Link
							onClick={() => setActiveSection("experiencia")}
							className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 transition-colors ${
								activeSection === "experiencia"
									? "border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
									: "border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
							} focus:outline-hidden`}
							href="#experiencia"
						>
							Experiência
						</Link>
						<Link
							onClick={() => setActiveSection("cursos")}
							className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 transition-colors ${
								activeSection === "cursos"
									? "border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
									: "border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
							} focus:outline-hidden`}
							href="#cursos"
						>
							Cursos
						</Link>
						<Link
							onClick={() => setActiveSection("blog")}
							className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 transition-colors ${
								activeSection === "blog"
									? "border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
									: "border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
							} focus:outline-hidden`}
							href="#blog"
						>
							Blog
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
}
