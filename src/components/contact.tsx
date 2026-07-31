import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Contact() {
  console.log('test');
  return (
    <section id="contacto" className="scroll-mt-20 py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden px-6 md:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(145deg,var(--contact-from),var(--contact-to))] px-8 py-16 md:px-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] [background-size:22px_22px]"
          />
          <div className="relative grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-16">
            <div>
              <p className="mb-4 text-sm font-medium tracking-[0.16em] text-white/50 uppercase">
                Contacto
              </p>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-5xl">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                Cuéntame qué necesitas: un sitio nuevo, una mejora o una
                colaboración puntual. Este bloque usa datos de ejemplo.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-[oklch(0.9_0.008_250)] text-[oklch(0.22_0.02_255)] hover:bg-[oklch(0.94_0.006_250)]"
                  )}
                >
                  {site.email}
                </a>
                {site.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "border-white/20 bg-transparent text-white/90 hover:bg-white/8 hover:text-white"
                    )}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <dl className="space-y-5 border-t border-white/15 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
              <div>
                <dt className="text-xs tracking-[0.14em] text-white/45 uppercase">
                  Disponibilidad
                </dt>
                <dd className="mt-1.5 text-sm text-white/85 md:text-base">
                  {site.availability}
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] text-white/45 uppercase">
                  Tiempo de respuesta
                </dt>
                <dd className="mt-1.5 text-sm text-white/85 md:text-base">
                  {site.responseTime}
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] text-white/45 uppercase">
                  Ubicación
                </dt>
                <dd className="mt-1.5 text-sm text-white/85 md:text-base">
                  {site.location}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
