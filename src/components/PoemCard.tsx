import type { Poem } from "@/data/poems";

interface PoemCardProps {
  poem: Poem;
}

export default function PoemCard({ poem }: PoemCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-gold">
      <div className="absolute left-0 top-0 h-full w-1 bg-gold-gradient opacity-0 transition-opacity group-hover:opacity-100" />
      <p className="font-display text-sm leading-relaxed text-foreground/80 italic">
        «{poem.line1}
      </p>
      <p className="font-display text-sm leading-relaxed text-foreground/80 italic">
        {poem.line2}
      </p>
      <p className="font-display text-sm leading-relaxed text-foreground/80 italic">
        {poem.line3}
      </p>
      <p className="font-display text-sm leading-relaxed text-foreground/80 italic">
        {poem.line4}»
      </p>
      <p className="mt-3 text-right text-xs text-primary">— Рубоии №{poem.id}</p>
    </div>
  );
}
