import portraitImg from "@/assets/khayyam-portrait.jpg";

export default function Biography() {
  return (
    <div className="pt-16">
      {/* Hero banner */}
      <section className="border-b border-amber-600/20 bg-transparent py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-amber-100 md:text-5xl">
            Тарҷумаи <span className="text-amber-300">ҳол</span>
          </h1>
          <p className="ornament-divider mx-auto mt-3 max-w-xs text-xs text-amber-300">✦</p>
        </div>
      </section>

      <section className="relative min-h-screen bg-cover bg-center py-16" style={{backgroundImage: `url(${portraitImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        {/* Blur effect */}
        <div className="absolute inset-0 backdrop-blur-sm" />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="container relative z-10 mx-auto grid gap-12 px-4 lg:grid-cols-3">
          {/* Sidebar portrait on the left */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 overflow-hidden rounded-lg border border-amber-600/30 shadow-elegant">
              <img src={portraitImg} alt="Умари Хайём" className="h-auto w-full object-cover" loading="lazy" />
              <div className="p-4 text-center">
                <h3 className="font-display text-lg font-bold text-amber-100">Умари Хайём</h3>
                <p className="text-xs text-amber-200/70">1048 – 1131, Нишопур</p>
              </div>
            </div>
          </div>

          {/* Content on the right */}
          <article className="prose-invert lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-amber-100">Зиндагинома</h2>
            <div className="mt-2 h-1 w-12 bg-amber-300 rounded" />

            <p className="mt-6 leading-relaxed text-amber-50/90">
              Ғиёсуддин Абулфатҳ Умар ибни Иброҳим Хайёми Нишопурӣ дар 18 майи соли 1048
              мелодӣ дар яке аз бузургтарин шаҳрҳои Хуросон — Нишопур таваллуд шудааст.
              Падари ӯ Иброҳим Хайём касби хаймадӯзӣ дошт, ки аз ҳамин ҷо лақаби «Хайём»
              пайдо шудааст.
            </p>

            <h3 className="mt-10 font-display text-xl font-bold text-amber-100">Таҳсил ва илм</h3>
            <div className="mt-2 h-0.5 w-8 bg-amber-300 rounded" />
            <p className="mt-4 leading-relaxed text-amber-50/90">
              Хайём аз хурдсолагӣ ба илмомӯзӣ шурӯъ кард ва дар мадрасаҳои Нишопур таҳсил
              намуд. Ӯ дар фанҳои риёзиёт, нуҷум, фалсафа ва адабиёт донишҳои амиқ пайдо
              кард. Минбаъд ба Самарқанд, Балх ва Исфаҳон сафар карда, донишу таҷрибаи худро
              такмил дод.
            </p>

            <h3 className="mt-10 font-display text-xl font-bold text-amber-100">Риёзиёт ва ситорашиносӣ</h3>
            <div className="mt-2 h-0.5 w-8 bg-amber-300 rounded" />
            <p className="mt-4 leading-relaxed text-amber-50/90">
              Умари Хайём дар соҳаи алгебра асари бузурге таълиф кард, ки дар он муодилаҳои
              кубиро бо роҳи геометрӣ ҳал мекунад. Ин асар яке аз муҳимтарин дастовардҳои
              риёзиёти қурунҳои миёна ба шумор меравад. Инчунин, ӯ тақвими «Ҷалолӣ»-ро
              эҷод кард, ки аз тақвими Грегорианӣ дақиқтар аст.
            </p>

            <h3 className="mt-10 font-display text-xl font-bold text-amber-100">Рубоиёт</h3>
            <div className="mt-2 h-0.5 w-8 bg-amber-300 rounded" />
            <p className="mt-4 leading-relaxed text-amber-50/90">
              Рубоиёти Хайём дар адабиёти ҷаҳон ҷойгоҳи хосса доранд. Дар ин рубоиёт
              мавзӯъҳои фалсафӣ — зиндагӣ, марг, ишқ, вақт ва ҳастӣ бо забони содда ва
              ҳунармандона баён шудаанд. Эдвард Фитсҷералд дар асри 19 рубоиёти ӯро ба
              забони англисӣ тарҷума кард ва Хайём дар Ғарб маъруф гардид.
            </p>

            <h3 className="mt-10 font-display text-xl font-bold text-amber-100">Мероси илмӣ</h3>
            <div className="mt-2 h-0.5 w-8 bg-amber-300 rounded" />
            <p className="mt-4 leading-relaxed text-amber-50/90">
              Хайём на танҳо дар адабиёт, балки дар илмҳои дақиқ низ мероси бузурге гузоштааст.
              Кашфиёти ӯ дар соҳаи алгебра ва геометрия, тақвими дақиқи Ҷалолӣ ва
              назарияҳои фалсафиаш ӯро ба яке аз бузургтарин мутафаккирони таърих табдил
              додаанд.
            </p>

            {/* Timeline */}
            <h3 className="mt-10 font-display text-xl font-bold text-amber-100">Санаҳои муҳим</h3>
            <div className="mt-2 h-0.5 w-8 bg-amber-300 rounded" />
            <div className="mt-6 space-y-4">
              {[
                { year: "1048", event: "Таваллуд дар Нишопур" },
                { year: "1070", event: "Таълифи «Рисола дар алгебра»" },
                { year: "1074", event: "Сардори расадхонаи Исфаҳон" },
                { year: "1079", event: "Эҷоди тақвими Ҷалолӣ" },
                { year: "1092", event: "Сафар ба Маккаи Мукаррама" },
                { year: "1131", event: "Вафот дар Нишопур" },
              ].map((t) => (
                <div key={t.year} className="flex items-start gap-4">
                  <span className="shrink-0 rounded bg-amber-600/40 px-3 py-1 font-display text-sm font-bold text-amber-200">
                    {t.year}
                  </span>
                  <p className="text-amber-50/85">{t.event}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
