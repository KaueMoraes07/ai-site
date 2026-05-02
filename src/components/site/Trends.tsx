import { TrendingUp, Award, Cpu, BriefcaseBusiness } from "lucide-react";

const market = [
  "Demanda crescente por profissionais — déficit global estimado em milhões de vagas.",
  "Setores que mais contratam: bancário, saúde, governo, e-commerce e tecnologia.",
  "Possibilidade de atuação remota e em empresas multinacionais.",
];

const certifications = [
  { name: "CompTIA Security+", level: "Iniciante" },
  { name: "CEH (Certified Ethical Hacker)", level: "Intermediário" },
  { name: "CISSP", level: "Avançado" },
  { name: "OSCP", level: "Avançado / Pentest" },
  { name: "ISO 27001 Lead Auditor", level: "Gestão" },
];

const trends = [
  { icon: Cpu, title: "Inteligência Artificial em Segurança", desc: "Detecção de anomalias e respostas automatizadas a incidentes." },
  { icon: TrendingUp, title: "Zero Trust", desc: "Modelo de segurança que não confia em nada por padrão — verifica tudo." },
  { icon: Award, title: "Computação em Nuvem", desc: "Cloud Security (AWS, Azure, GCP) é uma das áreas que mais cresce." },
  { icon: BriefcaseBusiness, title: "LGPD & Privacidade", desc: "Conformidade com leis de proteção de dados é prioridade nas empresas." },
];

const Trends = () => (
  <section id="tendencias" className="border-t border-border/40 bg-secondary/20 py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          Dicas e Tendências
        </span>
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
          Mercado, certificações e tecnologias emergentes
        </h2>
        <p className="text-muted-foreground">
          A área de Segurança da Informação está em forte expansão, exigindo atualização constante
          e investimento em qualificações reconhecidas internacionalmente.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card">
          <h3 className="mb-5 flex items-center gap-3 text-xl font-bold">
            <BriefcaseBusiness className="h-6 w-6 text-primary" aria-hidden="true" />
            Mercado de Trabalho
          </h3>
          <ul className="space-y-3">
            {market.map((m) => (
              <li key={m} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {m}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card">
          <h3 className="mb-5 flex items-center gap-3 text-xl font-bold">
            <Award className="h-6 w-6 text-accent" aria-hidden="true" />
            Certificações em Destaque
          </h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-center justify-between gap-3 rounded-lg border border-border/50 bg-background/40 px-4 py-3">
                <span className="text-sm font-medium">{c.name}</span>
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                  {c.level}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-10">
        <h3 className="mb-6 text-center text-2xl font-bold">Tecnologias Emergentes</h3>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trends.map((t) => (
            <article
              key={t.title}
              className="group rounded-xl border border-border bg-gradient-card p-6 shadow-card transition-smooth hover:border-primary/50 hover:shadow-elegant"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-smooth group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <t.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h4 className="mb-2 font-semibold">{t.title}</h4>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Trends;
