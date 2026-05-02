import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#profissao", label: "Sobre a Profissão" },
  { href: "#tendencias", label: "Dicas e Tendências" },
  { href: "#contatos", label: "Redes e Contatos" },
  { href: "#ods", label: "ODS" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-2 font-bold">
          <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="bg-gradient-primary bg-clip-text text-transparent">Segurança da Informação</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-smooth hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul className="container mx-auto flex flex-col gap-3 border-t border-border/40 px-4 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-muted-foreground transition-smooth hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
