import { Separator } from "@/components/ui/separator";
import { about, experience, skillGroups } from "@/data/portfolio";

export function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-20 border-y border-border bg-muted/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div>
            <p className="mb-3 text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Perfil
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
              Sobre mí
            </h2>
          </div>

          <div className="space-y-6">
            <p className="font-heading text-xl leading-snug tracking-tight text-foreground md:text-2xl">
              {about.headline}
            </p>
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <Separator className="my-14 md:my-16" />

        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-6 text-sm font-medium tracking-[0.14em] text-muted-foreground uppercase">
              Recorrido
            </p>
            <ul className="space-y-0">
              {experience.map((item) => (
                <li
                  key={item.title}
                  className="grid gap-1 border-t border-border py-5 last:border-b sm:grid-cols-[8.5rem_1fr] sm:gap-6"
                >
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  <div>
                    <h3 className="font-heading text-base font-semibold tracking-tight md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-6 text-sm font-medium tracking-[0.14em] text-muted-foreground uppercase">
              Herramientas
            </p>
            <ul className="space-y-8">
              {skillGroups.map((group) => (
                <li key={group.label}>
                  <h3 className="font-heading text-base font-semibold tracking-tight">
                    {group.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {group.items.join("  ·  ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
