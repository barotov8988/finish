import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "system";
    }
    return "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    const apply = (t: Theme) => {
      if (t === "system") {
        const sys = window.matchMedia("(prefers-color-scheme: dark)").matches;
        root.classList.toggle("dark", sys);
      } else {
        root.classList.toggle("dark", t === "dark");
      }
    };
    apply(theme);
    localStorage.setItem("theme", theme);

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => apply("system");
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [theme]);

  const cycle = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "system";
      return "light";
    });
  };

  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <button
      onClick={cycle}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-border/50 text-foreground transition-colors hover:bg-secondary hover:text-primary"
      aria-label="Иваз кардани мавзӯъ"
      title={theme === "light" ? "Рӯшан" : theme === "dark" ? "Торик" : "Системавӣ"}
    >
      <Icon size={16} />
    </button>
  );
}
