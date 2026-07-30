import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden px-6 md:px-8">
        <div className="relative rounded-2xl bg-[linear-gradient(145deg,var(--contact-from),var(--contact-to))] px-8 py-16 md:px-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)] [background-size:22px_22px]"
          />
          <div className="relative max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-5xl">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
              Escríbeme y conversamos. Este bloque es solo estructura: cambia el
              correo y los enlaces cuando quieras.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-white text-[var(--contact-from)] hover:bg-white/90"
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
                    "border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
