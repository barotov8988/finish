import portraitImg from "@/assets/khayyam-portrait.jpg";

export default function Biography() {
  return (
    <div className="pt-16">
      {/* Hero section - Book style */}
      <section className="bg-gradient-to-b from-primary/5 to-background border-b-2 border-primary/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs tracking-widest text-primary/70 uppercase">Тарғиб ба таълим</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-4">
            <span className="text-gold-gradient">Тарҷумаи ҳол</span>
          </h1>
          <div className="ornament-divider mx-auto mt-6 max-w-xs text-xs text-primary">✦</div>
          <p className="mt-6 text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Қиссаи ҷонибасти донишманди бузург, шоири, риёзидон ва астрономи машҳури миёнаасрӣ
          </p>
        </div>
      </section>

      {/* Main content - Book page style */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Portrait and intro section */}
          <div className="grid gap-12 md:gap-16 md:grid-cols-3 mb-20">
            {/* Portrait card */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="relative overflow-hidden rounded-lg border-2 border-primary/30 shadow-lg">
                  <img src={portraitImg} alt="Умари Хайём" className="w-full h-auto object-cover" loading="lazy" />
                  {/* Gold overlay accent */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/40 to-transparent p-6">
                    <h3 className="font-display text-xl font-bold text-foreground">Умари Хайём</h3>
                    <p className="text-xs text-muted-foreground mt-1">Нишопур, Хуросон</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content section */}
            <article className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground">Зиндагинома</h2>
                <div className="mt-3 h-1 w-16 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
              </div>

              <p className="text-base leading-relaxed text-foreground/85 italic">
                Ғиёсуддин Абулфатҳ Умар ибни Иброҳим Хайёми Нишопурӣ дар 18 майи соли 1048
                мелодӣ дар яке аз бузургтарин шаҳрҳои Хуросон — Нишопур таваллуд шудааст.
                Падари ӯ Иброҳим Хайём касби хаймадӯзӣ дошт, ки аз ҳамин ҷо лақаби «Хайём»
                пайдо шудааст.
              </p>

              <blockquote className="border-l-4 border-primary/50 pl-6 py-2 italic text-primary/80">
                "Мард он нест ки гуфтааст, балки мард он аст ки кушишро ба ишқ кардааст"
              </blockquote>
            </article>
          </div>

          {/* Main biography content - Book chapters style */}
          <div className="grid gap-16 lg:gap-20">
            {/* Таҳсил ва илм */}
            <section className="border-t border-primary/20 pt-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-display font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Таҳсил ва илм</h3>
                  <div className="h-0.5 w-12 bg-primary/30 rounded-full mb-6" />
                  <p className="text-base leading-relaxed text-foreground/80">
                    Хайём аз хурдсолагӣ ба илмомӯзӣ шурӯъ кард ва дар мадрасаҳои Нишопур таҳсил
                    намуд. Ӯ дар фанҳои риёзиёт, нуҷум, фалсафа ва адабиёт донишҳои амиқ пайдо
                    кард. Минбаъд ба Самарқанд, Балх ва Исфаҳон сафар карда, донишу таҷрибаи худро
                    такмил дод.
                  </p>
                </div>
              </div>
            </section>

            {/* Риёзиёт ва ситорашиносӣ */}
            <section className="border-t border-primary/20 pt-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-display font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Риёзиёт ва ситорашиносӣ</h3>
                  <div className="h-0.5 w-12 bg-primary/30 rounded-full mb-6" />
                  <p className="text-base leading-relaxed text-foreground/80">
                    Умари Хайём дар соҳаи алгебра асари бузурге таълиф кард, ки дар он муодилаҳои
                    кубиро бо роҳи геометрӣ ҳал мекунад. Ин асар яке аз муҳимтарин дастовардҳои
                    риёзиёти қурунҳои миёна ба шумор меравад. Инчунин, ӯ тақвими «Ҷалолӣ»-ро
                    эҷод кард, ки аз тақвими Грегорианӣ дақиқтар аст.
                  </p>
                </div>
              </div>
            </section>

            {/* Рубоиёт */}
            <section className="border-t border-primary/20 pt-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-display font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Рубоиёт — Воқиаи ҷовидон</h3>
                  <div className="h-0.5 w-12 bg-primary/30 rounded-full mb-6" />
                  <p className="text-base leading-relaxed text-foreground/80 mb-6">
                    Рубоиёти Хайём дар адабиёти ҷаҳон ҷойгоҳи хосса доранд. Дар ин рубоиёт
                    мавзӯъҳои фалсафӣ — зиндагӣ, марг, ишқ, вақт ва ҳастӣ бо забони содда ва
                    ҳунармандона баён шудаанд. Эдвард Фитсҷералд дар асри 19 рубоиёти ӯро ба
                    забони англисӣ тарҷума кард ва Хайём дар Ғарб маъруф гардид.
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 italic text-foreground/75">
                    <p className="mb-4">«Ба ҷои ки сухан ба гӯ гӯ аш, бегзар,
                    Ғам чун сояст, оҳисто гӯзар,
                    Баръаки ғам, шод бахур, шод хур,
                    Ки аммали хуб аст, оҳисто хур.»</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Мероси илмӣ */}
            <section className="border-t border-primary/20 pt-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-display font-bold text-primary">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Мероси илмӣ ва ривояти ҷовидон</h3>
                  <div className="h-0.5 w-12 bg-primary/30 rounded-full mb-6" />
                  <p className="text-base leading-relaxed text-foreground/80">
                    Хайём на танҳо дар адабиёт, балки дар илмҳои дақиқ низ мероси бузурге гузоштааст.
                    Кашфиёти ӯ дар соҳаи алгебра ва геометрия, тақвими дақиқи Ҷалолӣ ва
                    назарияҳои фалсафиаш ӯро ба яке аз бузургтарин мутафаккирони таърих табдил
                    додаанд. Дар даврони ҷавондии худ, вай содиқ ба донишву далоил боқи мондаас.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Timeline - Book style */}
          <section className="border-t-2 border-primary/30 mt-20 pt-16">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Санаҳои муҳим</h3>
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-10" />
            
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { year: "1048", event: "Таваллуди Умари Хайём дар Нишопур" },
                { year: "1070", event: "Таълифи намудаи «Рисола дар алгебра»" },
                { year: "1074", event: "Табиғ шуданаш ба сардорӣ расадхонаи Исфаҳон" },
                { year: "1079", event: "Эҷоди тақвими «Ҷалолӣ» дур аз тақвими Миёнзамон" },
                { year: "1092", event: "Сафари муқаддас ба Маккаи Мукаррама" },
                { year: "1131", event: "Вафот дар Нишопур, возҷае ҷовидон монанде аст" },
              ].map((t, idx) => (
                <div key={t.year} className="flex gap-4 pb-4 border-b border-primary/10 last:border-b-0">
                  <div className="flex-shrink-0">
                    <span className="text-sm font-display font-bold text-primary bg-primary/10 px-3 py-1 rounded">
                      {t.year}
                    </span>
                  </div>
                  <p className="text-foreground/80 pt-1">{t.event}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Closing quote */}
          <section className="border-t-2 border-primary/30 mt-20 pt-16 text-center">
            <blockquote className="font-display text-lg italic text-foreground/75 max-w-2xl mx-auto">
              "Дониши Хайём ба даврон тамом нашуд,
              Рубоиёти вай то қиёмат пойтахт монанд."
            </blockquote>
            <p className="mt-6 text-xs text-muted-foreground uppercase tracking-widest">- Фарҳанги донишманди таронаҳо -</p>
          </section>
        </div>
      </section>
    </div>
  );
}
