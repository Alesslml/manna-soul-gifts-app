import { useMemo, useState } from "react";

const STEPS = [
  {
    key: "para",
    title: "¿Para quién es?",
    options: ["Para ella", "Para él", "Para mamá", "Para papá", "Para una amiga", "Para turistas", "Para empresas"],
  },
  {
    key: "ocasion",
    title: "¿Cuál es la ocasión?",
    options: ["Cumpleaños", "Amor", "Graduación", "Agradecimiento", "Viaje", "Navidad", "Open house", "Sin motivo, porque sí"],
  },
  {
    key: "estilo",
    title: "¿Qué estilo buscas?",
    options: ["Peruano y cultural", "Elegante", "Divertido", "Romántico", "Decorativo", "Wellness", "Único y creativo"],
  },
] as const;

export function GiftQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);

  const current = STEPS[step];
  const done = step >= STEPS.length;

  const recs = useMemo(() => {
    const all = [
      { tag: "Gift Boxes", desc: "Listos para sorprender con alma.", keys: ["Para ella", "Para mamá", "Para una amiga", "Cumpleaños", "Amor", "Navidad", "Elegante", "Romántico"] },
      { tag: "Souvenirs peruanos", desc: "Cultura y diseño para llevar contigo.", keys: ["Para turistas", "Viaje", "Sin motivo, porque sí", "Peruano y cultural", "Único y creativo"] },
      { tag: "Bienestar", desc: "Pequeños rituales con cariño.", keys: ["Para ella", "Para mamá", "Para una amiga", "Wellness", "Agradecimiento", "Open house"] },
      { tag: "Joyería", desc: "Piezas con identidad y carácter.", keys: ["Para ella", "Para mamá", "Para una amiga", "Amor", "Graduación", "Romántico", "Elegante"] },
      { tag: "Regalos corporativos", desc: "Packs especiales para empresas.", keys: ["Para empresas", "Agradecimiento", "Elegante"] },
      { tag: "Decoración", desc: "Objetos únicos para tu espacio.", keys: ["Para él", "Para papá", "Decorativo", "Open house", "Bienvenida"] },
      { tag: "Ramos y flores secas", desc: "Detalles delicados y duraderos.", keys: ["Para ella", "Para mamá", "Amor", "Romántico", "Sin motivo, porque sí"] },
      { tag: "Moda & Joyería", desc: "Accesorios con personalidad.", keys: ["Para ella", "Para mamá", "Para una amiga", "Graduación", "Elegante", "Único y creativo"] },
    ];
    const selected = Object.values(answers);
    const scored = all.map((r) => ({
      ...r,
      score: r.keys.filter((k) => selected.includes(k)).length,
    }));
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 4);
  }, [answers]);

  const waMsg = encodeURIComponent(
    `Hola Manna, busco un regalo. ${answers.para ?? ""} · ${answers.ocasion ?? ""} · ${answers.estilo ?? ""}`,
  );

  return (
    <section id="quiz" className="py-24 px-6 bg-hueso">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
            Encuentra el regalo perfecto
          </p>
          <h2 className="text-4xl md:text-5xl text-balance">
            ¿No sabes <span className="text-primary">qué regalar?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Te ayudamos a encontrarlo en tres pasitos. Sin presión, con mucho cariño.
          </p>
        </div>

        <div className="rounded-3xl bg-background p-8 md:p-12 border border-foreground/5 shadow-sm shadow-cacao/5">
          <div className="flex items-center gap-2 mb-8">
            {STEPS.map((s, i) => (
              <div
                key={s.key}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= step ? "bg-primary" : "bg-foreground/10"
                }`}
              />
            ))}
          </div>

          {!done ? (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                Paso 0{step + 1} de 0{STEPS.length}
              </p>
              <h3 className="text-2xl md:text-3xl mb-8">{current.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {current.options.map((opt) => {
                  const active = answers[current.key] === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => {
                        setAnswers((a) => ({ ...a, [current.key]: opt }));
                        setTimeout(() => setStep((s) => s + 1), 160);
                      }}
                      className={`px-5 py-3 rounded-full text-sm border transition-all ${
                        active
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-foreground/15 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {step > 0 && (
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className="mt-8 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground hover:text-primary"
                >
                  ← Volver
                </button>
              )}
            </div>
          ) : (
            <div className="animate-fade-up">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-3">
                Tenemos algo para ti
              </p>
              <h3 className="text-2xl md:text-3xl mb-6">
                Estas categorías van con tu búsqueda
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {recs.map((r) => (
                  <a
                    key={r.tag}
                    href="#mundos"
                    className="group flex items-center justify-between p-5 rounded-2xl bg-hueso hover:bg-rosado/30 transition-colors"
                  >
                    <div>
                      <p className="font-display italic text-xl">{r.tag}</p>
                      <p className="text-xs text-muted-foreground mt-1">{r.desc}</p>
                    </div>
                    <span className="text-primary text-xl group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/51955993404?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                >
                  Quiero ayuda por WhatsApp
                </a>
                <button
                  onClick={() => {
                    setAnswers({});
                    setStep(0);
                  }}
                  className="px-6 py-3 rounded-full border border-foreground/15 text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  Empezar de nuevo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
