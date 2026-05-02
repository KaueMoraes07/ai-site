import heroImage from "@/assets/hero-cyber.jpg";
import { Button } from "@/components/ui/button";
import { ShieldCheck, AlertTriangle, Eye, Activity, FileLock } from "lucide-react";

const functions = [
  { icon: AlertTriangle, title: "Identificar riscos e vulnerabilidades", desc: "Busca falhas que podem ser exploradas por atacantes." },
  { icon: ShieldCheck, title: "Proteger sistemas e dados", desc: "Implementa soluções para corrigir as falhas identificadas." },
  { icon: Eye, title: "Monitorar ameaças", desc: "Acompanha a evolução constante dos métodos de invasão." },
  { icon: Activity, title: "Responder a incidentes", desc: "Investiga, corrige e previne a repetição de ataques." },
  { icon: FileLock, title: "Criar políticas de prevenção", desc: "Disciplina equipes para evitar falhas humanas." },
];

const Hero = () => (
  <section id="inicio" className="relative overflow-hidden pt-16">
    <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" aria-hidden="true" />

    <div className="container relative mx-auto px-4 py-20 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <ShieldCheck className="h-4 w-4" />
          Carreira em Tecnologia da Informação
        </div>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Segurança da <span className="text-gradient">Informação</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          A primeira linha de defesa dos dados e sistemas de uma organização —
          protegendo a confidencialidade, integridade e disponibilidade da informação.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
            <a href="#profissao">Conheça a Profissão</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#ods">Contribuição para os ODS</a>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-5xl">
        <h2 className="mb-3 text-center text-2xl font-bold md:text-3xl">
          O que faz um profissional dessa área?
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-muted-foreground">
          Muito além de instalar antivírus, ele protege dados, sistemas e redes contra ataques,
          falhas e vazamentos. Suas principais funções são:
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {functions.map((f) => (
            <article
              key={f.title}
              className="group rounded-xl border border-border bg-gradient-card p-6 shadow-card transition-smooth hover:border-primary/50 hover:shadow-elegant"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
