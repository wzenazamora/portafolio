import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Selección
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
              Proyectos
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Una selección de sitios y productos digitales en los que he
              trabajado. Tocá cada proyecto para abrirlo.
            </p>
          </div>
          <p className="text-sm text-muted-foreground md:pb-1">
            {projects.length} proyectos destacados
          </p>
        </div>

        <ul className="flex flex-col">
          {projects.map((project, index) => (
            <li key={project.id}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-8 border-t border-border py-10 transition-colors md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-12 md:py-14 last:border-b"
              >
                <div className="relative">
                  {"image" in project && project.image ? (
                    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_18px_50px_-28px_rgba(15,20,30,0.55)] transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
                      <div className="flex h-9 items-center gap-1.5 border-b border-border bg-muted/70 px-3">
                        <span className="size-2 rounded-full bg-foreground/20" />
                        <span className="size-2 rounded-full bg-foreground/20" />
                        <span className="size-2 rounded-full bg-foreground/20" />
                        <span className="ml-2 flex h-5 flex-1 items-center rounded-md bg-background/80 px-2.5 text-[0.65rem] text-muted-foreground">
                          {project.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        </span>
                      </div>
                      <div className="relative aspect-[1600/776] bg-muted">
                        <Image
                          src={project.image}
                          alt={`Captura de ${project.title}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 45vw"
                          className="object-cover object-top"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="relative aspect-[16/10] overflow-hidden rounded-xl md:aspect-[5/4]"
                      style={{ backgroundColor: project.accent }}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_50%)]" />
                      <div className="absolute inset-5 rounded-lg border border-white/12 bg-black/25 transition-transform duration-500 ease-out group-hover:scale-[1.02] md:inset-7">
                        <div className="flex h-7 items-center gap-1.5 border-b border-white/10 px-3">
                          <span className="size-1.5 rounded-full bg-white/30" />
                          <span className="size-1.5 rounded-full bg-white/30" />
                          <span className="size-1.5 rounded-full bg-white/30" />
                          <span className="ml-2 h-3 w-24 rounded-sm bg-white/10" />
                        </div>
                        <div className="space-y-2.5 p-4 md:p-5">
                          <div className="h-2.5 w-1/3 rounded-full bg-white/20" />
                          <div className="h-2 w-2/3 rounded-full bg-white/12" />
                          <div className="h-2 w-1/2 rounded-full bg-white/8" />
                          <div className="mt-5 grid grid-cols-3 gap-2">
                            <div className="aspect-square rounded-md bg-white/10" />
                            <div className="aspect-square rounded-md bg-white/8" />
                            <div className="aspect-square rounded-md bg-white/6" />
                          </div>
                        </div>
                      </div>
                      <span className="absolute right-4 bottom-4 font-heading text-5xl font-semibold text-white/25 md:text-6xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                  <span className="mt-3 inline-flex rounded-md border border-border bg-secondary px-2.5 py-1 text-[0.7rem] tracking-wide text-secondary-foreground">
                    {project.type}
                  </span>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {project.year}
                        <span className="mx-2 text-border">·</span>
                        {project.client}
                      </p>
                      <h3 className="mt-1 font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Rol: {project.role}
                      </p>
                    </div>
                    <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm text-foreground/85"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/50" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
