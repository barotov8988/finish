import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";

const navItems = [
  { label: "Асосӣ", path: "/" },
  { label: "Тарҷумаи ҳол", path: "/biography" },
  { label: "Рубоиёт", path: "/rubaiyat" },
  { label: "Китобҳо", path: "/books" },
  { label: "Аксҳо", path: "/photos" },
  { label: "Аудиокитобҳо", path: "/audiobooks" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="font-display text-xl font-bold text-gold-gradient">
          Умари Хайём
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/admin"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Shield size={14} />
            Админ
          </Link>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border/50 bg-background/95 backdrop-blur-md lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary ${
                pathname === item.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/admin"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary"
          >
            <Shield size={14} />
            Админ
          </Link>
        </nav>
      )}
    </header>
  );
}
