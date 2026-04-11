export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/30 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-lg text-primary">Умари Хайём</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Шоир, риёзидон ва ситорашинос — 1048–1131
        </p>
        <div className="mx-auto mt-4 h-px w-24 bg-gold-gradient" />
        <p className="mt-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Ҳамаи ҳуқуқҳо ҳифз шудаанд
        </p>
      </div>
    </footer>
  );
}
