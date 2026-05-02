import { Linkedin, Github, Mail } from "lucide-react";

const members = [
  { name: "Kauê Moraes Archanjo", role: "Pesquisa & Conteúdo", initials: "KM", linkedin: "#", github: "https://github.com/KaueMoraes07", email: "#" },
 { name: "Marcos Vinícius Ribeiro da Silva Santos", role: "Design & UX", initials: "MV", linkedin: "#", github: "#", email: "#" },
 { name: "Yuri Lima", role: "Desenvolvimento", initials: "YL", linkedin: "#", github: "#", email: "#" },
  { name: "Integrante 4", role: "Apresentação", initials: "I4", linkedin: "#", github: "#", email: "#" },
];

const Contacts = () => (
  <section id="contatos" className="border-t border-border/40 py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          Redes e Contatos
        </span>
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">Conheça nosso grupo</h2>
        <p className="text-muted-foreground">
          Conecte-se com os integrantes responsáveis pela pesquisa e construção deste projeto.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m) => (
          <article
            key={m.name}
            className="group flex flex-col items-center rounded-2xl border border-border bg-gradient-card p-6 text-center shadow-card transition-smooth hover:border-primary/50 hover:shadow-elegant"
          >
            <div
              className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary text-2xl font-bold text-primary-foreground shadow-glow"
              aria-hidden="true"
            >
              {m.initials}
            </div>
            <h3 className="font-semibold">{m.name}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{m.role}</p>

            <div className="mt-auto flex items-center gap-2">
              <a
                href={m.linkedin}
                aria-label={`LinkedIn de ${m.name}`}
                className="rounded-lg border border-border p-2 text-muted-foreground transition-smooth hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={m.github}
                aria-label={`GitHub de ${m.name}`}
                className="rounded-lg border border-border p-2 text-muted-foreground transition-smooth hover:border-primary hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={m.email}
                aria-label={`E-mail de ${m.name}`}
                className="rounded-lg border border-border p-2 text-muted-foreground transition-smooth hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Contacts;
