"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 8000;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || projects.length <= 1) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % projects.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [paused]);

  const project = projects[active];

  return (
    <div
      className="relative animate-[rise_1.1s_ease-out_0.12s_both]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute -inset-4 rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_20%,var(--orb-a),transparent_60%)] opacity-70" />

      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="relative block overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[0_24px_80px_-28px_rgba(20,28,45,0.45)] outline-none transition-transform duration-500 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`Ver proyecto ${project.title}`}
      >
        <div className="flex h-10 items-center gap-2 border-b border-border bg-muted/60 px-4">
          <span className="size-2 rounded-full bg-foreground/20" />
          <span className="size-2 rounded-full bg-foreground/20" />
          <span className="size-2 rounded-full bg-foreground/20" />
          <span className="ml-2 flex h-5 min-w-0 flex-1 items-center truncate rounded-md bg-background/80 px-2.5 text-[0.65rem] text-muted-foreground">
            {project.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </span>
        </div>

        <div className="relative aspect-[1600/776] overflow-hidden bg-muted">
          {projects.map((item, index) => {
            const itemImage = "image" in item ? item.image : undefined;
            const isActive = index === active;

            return (
              <div
                key={item.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-[1400ms] ease-in-out",
                  isActive ? "opacity-100" : "opacity-0"
                )}
                aria-hidden={!isActive}
              >
                {itemImage ? (
                  <Image
                    src={itemImage}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-contain object-top"
                    priority={index === 0}
                  />
                ) : (
                  <div
                    className="flex h-full w-full flex-col justify-end p-6 md:p-8"
                    style={{ backgroundColor: item.accent }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),transparent_50%)]" />
                    <p className="relative text-sm tracking-[0.14em] text-white/55 uppercase">
                      {item.type}
                    </p>
                    <p className="relative mt-2 font-heading text-2xl font-semibold text-white md:text-3xl">
                      {item.title}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border bg-card px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-[0.7rem] tracking-[0.12em] text-muted-foreground uppercase">
              {project.type}
            </p>
            <p className="truncate font-heading text-sm font-semibold text-foreground">
              {project.title}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1.5" aria-hidden>
            {projects.map((item, index) => (
              <span
                key={item.id}
                className={cn(
                  "h-1 rounded-full transition-all duration-700",
                  index === active
                    ? "w-5 bg-foreground"
                    : "w-1.5 bg-foreground/25"
                )}
              />
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}
