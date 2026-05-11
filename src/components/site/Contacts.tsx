import { Linkedin, Github } from "lucide-react";
import kaueImg from "@/assets/member-kaue.jpg";
import marcosImg from "@/assets/member-marcos.jpg";
import yuriImg from "@/assets/member-yuri.jpg";
import denisImg from "@/assets/member-denis.jpg";

const members = [
  { name: "Kauê Moraes Archanjo", role: "analistas e desenvolvedores", initials: "KM", photo: kaueImg, linkedin: "#", github: "https://github.com/KaueMoraes07" },
  { name: "Marcus Vinicius", role: "analistas e desenvolvedores", initials: "MV", photo: marcosImg, linkedin: "https://www.linkedin.com/in/marcus-vinicius-rs-santos", github: "https://github.com/Marcuvini21" },
  { name: "Yuri Lima", role: "analistas e desenvolvedores", initials: "YL", photo: yuriImg, linkedin: "https://www.linkedin.com/in/yuri-lima-208805405", github: "https://github.com/YuriLima88" },
  { name: "Dênis Pereira da Silva", role: "analistas e desenvolvedores", initials: "DP", photo: denisImg, linkedin: "https://www.linkedin.com/in/denis-pereira-a8b7a5242/", github: "https://github.com/deepereiraaa-art" },
];

const Contacts = () => (
  <section id="contatos" className="border-t border-border/40 py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          Equipe criadora
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
            {m.photo ? (
              <img
                src={m.photo}
                alt={`Foto de ${m.name}`}
                className="mb-4 h-20 w-20 rounded-full object-cover shadow-glow"
              />
            ) : (
              <div
                className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary text-2xl font-bold text-primary-foreground shadow-glow"
                aria-hidden="true"
              >
                {m.initials}
              </div>
            )}
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
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Contacts;
