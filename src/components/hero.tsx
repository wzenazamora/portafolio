import { buttonVariants } from "@/components/ui/button";
import { HeroCarousel } from "@/components/hero-carousel";
import { site } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:justify-center md:pb-24 md:pt-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_10%,var(--hero-glow),transparent_55%),linear-gradient(165deg,var(--hero-from)_0%,var(--hero-via)_45%,var(--hero-to)_100%)]" />
        <div className="absolute inset-0 opacity-[0.45] [background-image:linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="absolute -right-[12%] top-[18%] h-[58vmin] w-[58vmin] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--orb-a),transparent_62%)] opacity-90 animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-[8%] left-[-8%] h-[42vmin] w-[42vmin] rounded-full bg-[radial-gradient(circle_at_60%_40%,var(--orb-b),transparent_65%)] opacity-80 animate-[float_16s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-end gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16 md:px-8">
        <div className="max-w-xl animate-[rise_0.9s_ease-out_both]">
          <p className="mb-4 text-sm font-medium tracking-[0.18em] text-muted-foreground uppercase">
            {site.role}
          </p>
          <h1 className="font-heading text-[clamp(3rem,9vw,5.75rem)] leading-[0.92] font-semibold tracking-tight text-foreground">
            {site.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {site.tagline}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#proyectos" className={buttonVariants({ size: "lg" })}>
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Contacto
            </a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            {site.availability}
            <span className="mx-2 text-border">·</span>
            {site.location}
          </p>
        </div>

        <HeroCarousel />
      </div>
    </section>
  );
}
