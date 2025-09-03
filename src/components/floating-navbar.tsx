"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {  IconHome, IconBrain, IconBrandGithub, IconBrandBlogger, IconCertificate, IconFileTextSpark } from "@tabler/icons-react";

export function FloatingNavbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 text-neutral-800 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Experiências",
      icon: (
        <IconFileTextSpark className="h-full w-full text-neutral-500 text-neutral-800 dark:text-neutral-300" />
      ),
      href: "/resume",
    },
    {
      title: "Habilidades",
      icon: (
        <IconBrain className="h-full w-full text-neutral-500 text-neutral-800 dark:text-neutral-300" />
      ),
      href: "/skills",
    },
    {
      title: "Blog",
      icon: (
        <IconBrandBlogger className="h-full w-full text-neutral-500 text-neutral-800 dark:text-neutral-300" />
      ),
      href: "/blog",
    },
    {
      title: "Projetos",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 text-neutral-800 dark:text-neutral-300" />,
      href: "/projects",
    },
    {
      title: "Certificações",
      icon: <IconCertificate className="h-full w-full text-neutral-500 text-neutral-800 dark:text-neutral-300" />,
      href: "/certifications"
    },
  ];
  return (
    <FloatingDock
        items={links}
      />
  );
}
