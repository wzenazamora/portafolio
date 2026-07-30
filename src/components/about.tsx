import { Separator } from "@/components/ui/separator";
import { about, skills } from "@/data/portfolio";

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
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

            <Separator className="my-8" />

            <div>
              <p className="mb-4 text-sm font-medium tracking-[0.14em] text-muted-foreground uppercase">
                Herramientas
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-sm text-foreground md:text-base">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
