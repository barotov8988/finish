import portraitImg from "@/assets/khayyam-portrait.jpg";
import { Link } from "react-router-dom";
import { poems } from "@/data/poems";
import PoemCard from "@/components/PoemCard";
import { BookOpen, Star, Feather } from "lucide-react";

const Index = () => {
  const featuredPoems = poems.slice(0, 3);
  const heroBg = "https://cdn.builder.io/api/v1/image/assets%2F84ad1d5d73794b0ba7daeeaab5a2ab40%2Fbdcd0b6a345545feb267882607d9e8d9?format=webp&width=800&height=1200";

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Замон Омари Хайём"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 animate-fade-in px-4 text-right">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            1048 — 1131
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-foreground md:text-7xl">
            Умари <span className="text-gold-gradient">Хайём</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-foreground/70 ml-auto">
            Шоири бузург, риёзидон, ситорашинос ва файласуфи тоҷику форс
          </p>
          <div className="mt-8 flex flex-wrap justify-end gap-4">
            <Link
              to="/rubaiyat"
              className="bg-gold-gradient rounded-md px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-105"
            >
              Рубоиёт
            </Link>
            <Link
              to="/biography"
              className="rounded-md border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Тарҷумаи ҳол
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20">
        <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-lg shadow-elegant">
            <img
              src={portraitImg}
              alt="Умари Хайём"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Дар бораи <span className="text-gold-gradient">Умари Хайём</span>
            </h2>
            <div className="mt-2 h-1 w-16 bg-gold-gradient rounded" />
            <p className="mt-6 leading-relaxed text-foreground/70">
              Ғиёсуддин Абулфатҳ Умар ибни Иброҳим Хайёми Нишопурӣ — яке аз бузургтарин
              шоирон, риёзидонон ва ситорашиносони ҷаҳон аст. Ӯ дар соли 1048 дар шаҳри
              Нишопур таваллуд шудааст. Рубоиёти ӯ ба забонҳои гуногуни ҷаҳон тарҷума
              шудаанд ва дар саросари дунё маъруфанд.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Хайём на танҳо шоири бузург, балки олими барҷастаи замони худ буд. Ӯ дар
              риёзиёт, ситорашиносӣ ва фалсафа корҳои бузурге анҷом додааст.
            </p>
            <Link
              to="/biography"
              className="mt-6 inline-block text-sm font-semibold text-primary transition-colors hover:text-gold-light"
            >
              Бештар хондан →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/50 bg-secondary/30 py-16">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-3">
          {[
            { icon: BookOpen, label: "Рубоиёт", value: "400+" },
            { icon: Star, label: "Асрҳои таъсир", value: "10+" },
            { icon: Feather, label: "Забонҳои тарҷума", value: "50+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
              <p className="font-display text-3xl font-bold text-gold-gradient">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured poems */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-display text-3xl font-bold text-foreground">
            Рубоиёти <span className="text-gold-gradient">баргузида</span>
          </h2>
          <p className="ornament-divider mx-auto mt-2 max-w-xs text-center text-xs text-primary">✦</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredPoems.map((poem) => (
              <PoemCard key={poem.id} poem={poem} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/rubaiyat"
              className="bg-gold-gradient rounded-md px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-105"
            >
              Ҳамаи рубоиёт
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
