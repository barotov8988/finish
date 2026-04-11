import { Play, Pause, Clock } from "lucide-react";
import { useState } from "react";

const audiobooks = [
  { id: 1, title: "Рубоиёти Хайём — Бахши 1", duration: "12:30", narrator: "Муҳаммад Ғуломӣ" },
  { id: 2, title: "Рубоиёти Хайём — Бахши 2", duration: "15:45", narrator: "Муҳаммад Ғуломӣ" },
  { id: 3, title: "Рубоиёти Хайём — Бахши 3", duration: "11:20", narrator: "Муҳаммад Ғуломӣ" },
  { id: 4, title: "Наврузнома", duration: "25:10", narrator: "Фирдавсӣ Раҳимов" },
  { id: 5, title: "Тарҷумаи ҳоли Хайём", duration: "30:00", narrator: "Фирдавсӣ Раҳимов" },
  { id: 6, title: "Фалсафаи Хайём", duration: "18:50", narrator: "Шодӣ Аҳмадов" },
];

export default function Audiobooks() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <div className="pt-16">
      <section className="border-b border-border/50 bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            <span className="text-gold-gradient">Аудиокитобҳо</span>
          </h1>
          <p className="ornament-divider mx-auto mt-3 max-w-xs text-xs text-primary">✦</p>
          <p className="mt-4 text-sm text-muted-foreground">Гӯш кунед осори Умари Хайёмро</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="space-y-3">
            {audiobooks.map((ab) => (
              <div
                key={ab.id}
                className="group flex items-center gap-4 rounded-lg border border-border/50 bg-card p-4 transition-all hover:border-primary/30 hover:shadow-gold"
              >
                <button
                  onClick={() => setPlaying(playing === ab.id ? null : ab.id)}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {playing === ab.id ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
                </button>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-bold text-foreground truncate">{ab.title}</h3>
                  <p className="text-sm text-muted-foreground">{ab.narrator}</p>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock size={14} />
                  <span>{ab.duration}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Аудиокитобҳо ҳоло дар ҳолати санҷишӣ ҳастанд. Баъди пайвастани бэкенд пурра кор хоҳанд кард.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
