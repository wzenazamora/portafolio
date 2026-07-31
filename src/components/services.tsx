import { services } from "@/data/portfolio";

export function Services() {
  return (
    <section
      id="servicios"
      className="scroll-mt-20 border-y border-border bg-muted/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-14 max-w-2xl md:mb-16">
          <p className="mb-3 text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Qué ofrezco
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
            Servicios
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Tres líneas de trabajo claras. Ajusta títulos y descripciones a tu
            oferta real.
          </p>
        </div>

        <ul className="grid gap-0 md:grid-cols-3">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="border-t border-border py-8 md:border-t-0 md:border-l md:px-8 md:py-2 first:md:border-l-0 first:md:pl-0 last:md:pr-0"
            >
              <p className="font-heading text-sm text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
