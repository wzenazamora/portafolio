import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-14 max-w-2xl md:mb-20">
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
            Proyectos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Una selección de sitios y productos digitales. Datos de ejemplo para
            armar la estructura; cámbialos cuando quieras.
          </p>
        </div>

        <ul className="flex flex-col">
          {projects.map((project, index) => (
            <li key={project.id}>
              <a
                href={project.href}
                className="group grid gap-6 border-t border-border py-10 transition-colors md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-12 md:py-14 last:border-b"
              >
                <div
                  className="relative aspect-[16/10] overflow-hidden rounded-xl md:aspect-[4/3]"
                  style={{ backgroundColor: project.accent }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_45%)]" />
                  <div className="absolute inset-6 rounded-lg border border-white/20 bg-black/10 backdrop-blur-[2px] transition-transform duration-500 ease-out group-hover:scale-[1.02] md:inset-8">
                    <div className="flex h-7 items-center gap-1.5 border-b border-white/15 px-3">
                      <span className="size-1.5 rounded-full bg-white/40" />
                      <span className="size-1.5 rounded-full bg-white/40" />
                      <span className="size-1.5 rounded-full bg-white/40" />
                    </div>
                    <div className="space-y-2 p-4 md:p-5">
                      <div className="h-2 w-1/3 rounded-full bg-white/25" />
                      <div className="h-2 w-2/3 rounded-full bg-white/15" />
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="aspect-square rounded-md bg-white/12" />
                        <div className="aspect-square rounded-md bg-white/12" />
                        <div className="aspect-square rounded-md bg-white/12" />
                      </div>
                    </div>
                  </div>
                  <span className="absolute right-4 bottom-4 font-heading text-5xl font-semibold text-white/25 md:text-6xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{project.year}</p>
                      <h3 className="mt-1 font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                        {project.title}
                      </h3>
                    </div>
                    <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
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
