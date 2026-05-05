import { BookOpen } from "lucide-react";

const books = [
  {
    id: 1,
    title: "Рубоиёти Хайём",
    description: "Маҷмӯаи рубоиёти машҳури Умари Хайём, ки дар он мавзӯъҳои фалсафӣ, ишқ ва зиндагӣ баён шудаанд.",
    year: "Асри XI",
  },
  {
    id: 2,
    title: "Рисола дар алгебра",
    description: "Асари бузурги илмии Хайём дар бораи муодилаҳои кубӣ ва ҳалли онҳо бо роҳи геометрӣ.",
    year: "1070",
  },
  {
    id: 3,
    title: "Наврузнома",
    description: "Рисолае дар бораи идҳои навруз, расму оинҳо ва таърихи тақвими Ҷалолӣ.",
    year: "1079",
  },
  {
    id: 4,
    title: "Рисола дар мусиқӣ",
    description: "Рисолае дар бораи назарияи мусиқӣ ва алоқаи он бо риёзиёт.",
    year: "Асри XI",
  },
  {
    id: 5,
    title: "Мизони ҳикмат",
    description: "Рисолаи фалсафие, ки дар он масъалаҳои ҳастишиносӣ ва маърифатшиносӣ баррасӣ шудаанд.",
    year: "Асри XI",
  },
];

export default function Books() {
  return (
    <div className="pt-16">
      <section className="border-b border-border/50 bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-4xl">
            <span className="text-gold-gradient" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', serif", fontSize: "35px" }}>Китобҳо</span>
          </h1>
          <p className="ornament-divider mx-auto mt-3 max-w-xs text-xs text-primary">✦</p>
          <p className="mt-4 text-sm text-muted-foreground">Осори илмӣ ва адабии Умари Хайём</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <div
                key={book.id}
                className="group relative overflow-hidden rounded-lg border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-gold"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gold-gradient opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {book.year}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{book.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
