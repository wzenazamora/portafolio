import { process } from "@/data/portfolio";

export function Process() {
  return (
    <section id="proceso" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-14 max-w-2xl md:mb-16">
          <p className="mb-3 text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Forma de trabajo
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
            Proceso
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Un flujo simple, de punta a punta, para pasar de la idea al
            lanzamiento sin perder claridad.
          </p>
        </div>

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {process.map((item) => (
            <li key={item.step} className="relative">
              <p className="font-heading text-4xl font-semibold tracking-tight text-foreground/15 md:text-5xl">
                {item.step}
              </p>
              <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight md:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
