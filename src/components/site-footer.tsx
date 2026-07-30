import { site } from "@/data/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-sm text-muted-foreground">
          © {year} {site.name}. Todos los derechos reservados.
        </p>
        <p className="text-sm text-muted-foreground">{site.location}</p>
      </div>
    </footer>
  );
}
