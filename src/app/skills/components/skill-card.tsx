"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function SkillCard({ skill, index }: { skill: any; index: number }) {
    const [imageLoaded, setImageLoaded] = React.useState(false)
    const [imageError, setImageError] = React.useState(false)
  
    return (
      <div
        className={cn(
          "group relative bg-white dark:bg-neutral-800/50 size-24 rounded-xl border shadow-sm",
          "hover:shadow-lg hover:scale-105 hover:border-primary/20 transition-all duration-300 ease-out",
          "backdrop-blur-sm",
          skill.preferred ? "border-secondary border-2" : "border-border/50",
        )}
        style={{
          animationDelay: `${index * 50}ms`,
        }}
      >
        <div className="h-20 w-full p-2 flex items-center justify-center">
          {!imageLoaded && !imageError && <div className="h-16 w-16 rounded bg-muted animate-pulse" />}
          {imageError ? (
            <div className="h-16 w-16 rounded bg-muted flex items-center justify-center">
              <span className="text-sm text-muted-foreground">?</span>
            </div>
          ) : (
            <Image
              alt={skill.name}
              src={skill.devIcon || "/placeholder.svg"}
              className={cn(
                "object-contain transition-opacity duration-300",
                imageLoaded ? "opacity-100" : "opacity-0",
              )}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              width={50}
              height={50}
              loading="lazy"
            />
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <Badge
            variant="secondary"
            className={cn(
              "mb-[-10px] text-xs px-2 py-0.5 font-medium",
              "group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300",
            )}
          >
            {skill.name}
          </Badge>
        </div>
      </div>
    )
  }