import { Target } from "lucide-react";

const ods = [
  { num: 9, title: "Indústria, Inovação e Infraestrutura", color: "from-orange-500 to-amber-500" },
  { num: 16, title: "Paz, Justiça e Instituições Eficazes", color: "from-blue-500 to-cyan-500" },
  { num: 8, title: "Trabalho Decente e Crescimento Econômico", color: "from-red-500 to-rose-500" },
];

const ODS = () => (
  <section id="ods" className="border-t border-border/40 bg-secondary/20 py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <Target className="h-3.5 w-3.5" />
          Agenda 2030 da ONU
        </span>
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
          Contribuição para os <span className="text-gradient">ODS</span>
        </h2>
        <p className="text-muted-foreground">
          A Segurança da Informação é base para a sociedade digital. Sem ela, infraestruturas
          críticas como energia, transporte, comunicação e o sistema bancário estariam expostas —
          comprometendo toda a Agenda 2030.
        </p>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-3">
        {ods.map((o) => (
          <article
            key={o.num}
            className="overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card transition-smooth hover:shadow-elegant"
          >
            <div className={`flex h-32 items-center justify-center bg-gradient-to-br ${o.color}`}>
              <span className="text-5xl font-extrabold text-white drop-shadow-lg">ODS {o.num}</span>
            </div>
            <div className="p-6">
              <h3 className="font-semibold">{o.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto max-w-4xl rounded-2xl border border-primary/20 bg-gradient-card p-8 shadow-card md:p-12">
        <h3 className="mb-4 text-xl font-bold md:text-2xl">
          Foco principal: ODS 9 — Indústria, Inovação e Infraestrutura
        </h3>
        <p className="leading-relaxed text-muted-foreground">
          A Segurança da Informação contribui de forma essencial para o ODS 9 ao garantir a proteção
          de sistemas e infraestruturas críticas — como energia, transporte, comunicação e setor
          bancário — assegurando seu funcionamento contínuo.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Sem a atuação dos profissionais da Segurança da Informação, toda a agenda da ONU seria
          comprometida por falhas casuais ou ações de hackers, e não teria chances de cumprir suas
          metas para 2030 — nem em nenhuma data posterior.
        </p>
      </div>
    </div>
  </section>
);

export default ODS;
