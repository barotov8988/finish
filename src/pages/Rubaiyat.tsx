import { useState, useMemo } from "react";
import { poems } from "@/data/poems";
import PoemCard from "@/components/PoemCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const POEMS_PER_PAGE = 6;

export default function Rubaiyat() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(poems.length / POEMS_PER_PAGE);

  const currentPoems = useMemo(() => {
    const start = (page - 1) * POEMS_PER_PAGE;
    return poems.slice(start, start + POEMS_PER_PAGE);
  }, [page]);

  const goTo = (p: number) => {
    if (p >= 1 && p <= totalPages) {
      setPage(p);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Generate page numbers to show
  const pageNumbers = useMemo(() => {
    const pages: number[] = [];
    const start = Math.max(1, page - 2);
    const end = Math.min(totalPages, page + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }, [page, totalPages]);

  return (
    <div className="pt-16">
      <section className="border-b border-border/50 bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            <span className="text-gold-gradient">Рубоиёт</span>
          </h1>
          <p className="ornament-divider mx-auto mt-3 max-w-xs text-xs text-primary">✦</p>
          <p className="mt-4 text-sm text-muted-foreground">
            {poems.length} рубоӣ — саҳифаи {page} аз {totalPages}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentPoems.map((poem) => (
              <PoemCard key={poem.id} poem={poem} />
            ))}
          </div>

          {/* Pagination */}
          <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Навигатсия">
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 text-foreground transition-colors hover:border-primary/50 hover:text-primary disabled:opacity-30 disabled:hover:border-border/50 disabled:hover:text-foreground"
              aria-label="Қаблӣ"
            >
              <ChevronLeft size={18} />
            </button>

            {pageNumbers[0] > 1 && (
              <>
                <button
                  onClick={() => goTo(1)}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  1
                </button>
                {pageNumbers[0] > 2 && <span className="text-muted-foreground">…</span>}
              </>
            )}

            {pageNumbers.map((p) => (
              <button
                key={p}
                onClick={() => goTo(p)}
                className={`flex h-10 w-10 items-center justify-center rounded-md border text-sm font-medium transition-colors ${
                  p === page
                    ? "bg-gold-gradient border-primary text-primary-foreground shadow-gold"
                    : "border-border/50 text-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                {p}
              </button>
            ))}

            {pageNumbers[pageNumbers.length - 1] < totalPages && (
              <>
                {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                  <span className="text-muted-foreground">…</span>
                )}
                <button
                  onClick={() => goTo(totalPages)}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 text-foreground transition-colors hover:border-primary/50 hover:text-primary disabled:opacity-30 disabled:hover:border-border/50 disabled:hover:text-foreground"
              aria-label="Баъдӣ"
            >
              <ChevronRight size={18} />
            </button>
          </nav>
        </div>
      </section>
    </div>
  );
}
