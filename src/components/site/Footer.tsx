import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/40 bg-background py-10">
    <div className="container mx-auto flex flex-col items-center gap-3 px-4 text-center">
      <div className="flex items-center gap-2 font-bold">
        <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
        <span className="text-gradient">SecInfo</span>
      </div>
      <p className="text-sm text-muted-foreground">
        Projeto educacional sobre Segurança da Informação e os Objetivos de Desenvolvimento Sustentável.
      </p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} — Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
