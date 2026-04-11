import { useState } from "react";
import { X } from "lucide-react";

const photos = [
  { id: 1, title: "Портрети Умари Хайём", category: "Аксҳо", url: "https://cdn.builder.io/api/v1/image/assets%2F84ad1d5d73794b0ba7daeeaab5a2ab40%2F935c8844d1d34dd794e4926faccbb547?format=webp&width=800&height=1200" },
  { id: 2, title: "Портрети Хайём", category: "Аксҳо", url: "https://cdn.builder.io/api/v1/image/assets%2F84ad1d5d73794b0ba7daeeaab5a2ab40%2F5d28f7b73e224e9d99eaecdc8a566428?format=webp&width=800&height=1200" },
  { id: 3, title: "Ҳейкали Умари Хайём", category: "Ёдгориҳо", url: "https://cdn.builder.io/api/v1/image/assets%2F84ad1d5d73794b0ba7daeeaab5a2ab40%2Fb73ab57fd9e24669ad1f601a1de09789?format=webp&width=800&height=1200" },
  { id: 4, title: "Нақши Хайём", category: "Аксҳо", url: "https://cdn.builder.io/api/v1/image/assets%2F84ad1d5d73794b0ba7daeeaab5a2ab40%2F53196a8fa11e45129bb6111f24f85aa9?format=webp&width=800&height=1200" },
  { id: 5, title: "Портрети Хайёми донишманд", category: "Аксҳо", url: "https://cdn.builder.io/api/v1/image/assets%2F84ad1d5d73794b0ba7daeeaab5a2ab40%2Fd15ed7a42c9144458605cc57ef5c7029?format=webp&width=800&height=1200" },
  { id: 6, title: "Портрети Хайём ҳанузи номуҳаррар", category: "Аксҳо", url: "https://cdn.builder.io/api/v1/image/assets%2F84ad1d5d73794b0ba7daeeaab5a2ab40%2F49b9abb3ba5d445797dd8b81ec6c04f3?format=webp&width=800&height=1200" },
];

export default function Photos() {
  const [selected, setSelected] = useState<typeof photos[0] | null>(null);

  return (
    <div className="pt-16">
      <section className="border-b border-border/50 bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold text-foreground md:text-6xl">
            <span className="text-gold-gradient">Аксҳо</span>
          </h1>
          <p className="ornament-divider mx-auto mt-4 text-2xl text-gold-gradient">✦</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Gallery grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <button
                key={photo.id}
                onClick={() => setSelected(photo)}
                className="group relative overflow-hidden rounded-lg border border-border/50 transition-all hover:border-primary/30 hover:shadow-gold"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="font-display text-sm font-bold text-foreground">{photo.title}</p>
                  <p className="text-xs text-primary">{photo.category}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border/50 text-foreground hover:bg-secondary"
            onClick={() => setSelected(null)}
          >
            <X size={20} />
          </button>
          <div className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={selected.url} alt={selected.title} className="max-h-[75vh] w-auto rounded-lg object-contain" />
            <p className="mt-4 text-center font-display text-lg font-bold text-foreground">{selected.title}</p>
            <p className="text-center text-sm text-primary">{selected.category}</p>
          </div>
        </div>
      )}
    </div>
  );
}
