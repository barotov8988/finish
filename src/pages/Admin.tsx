import { useState } from "react";
import { poems as initialPoems, type Poem } from "@/data/poems";
import { Plus, Pencil, Trash2, Save, X, BookOpen, Image, Headphones, FileText } from "lucide-react";

type Tab = "poems" | "books" | "photos" | "audiobooks";

export default function Admin() {
  const [tab, setTab] = useState<Tab>("poems");
  const [poemList, setPoemList] = useState<Poem[]>(initialPoems);
  const [editing, setEditing] = useState<Poem | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ line1: "", line2: "", line3: "", line4: "" });

  const tabs: { key: Tab; label: string; icon: typeof BookOpen }[] = [
    { key: "poems", label: "Рубоиёт", icon: FileText },
    { key: "books", label: "Китобҳо", icon: BookOpen },
    { key: "photos", label: "Суратҳо", icon: Image },
    { key: "audiobooks", label: "Аудиокитобҳо", icon: Headphones },
  ];

  const startAdd = () => {
    setAdding(true);
    setEditing(null);
    setForm({ line1: "", line2: "", line3: "", line4: "" });
  };

  const startEdit = (poem: Poem) => {
    setEditing(poem);
    setAdding(false);
    setForm({ line1: poem.line1, line2: poem.line2, line3: poem.line3, line4: poem.line4 });
  };

  const savePoem = () => {
    if (!form.line1.trim()) return;
    if (adding) {
      const newId = poemList.length > 0 ? Math.max(...poemList.map((p) => p.id)) + 1 : 1;
      setPoemList([...poemList, { id: newId, ...form }]);
    } else if (editing) {
      setPoemList(poemList.map((p) => (p.id === editing.id ? { ...p, ...form } : p)));
    }
    setAdding(false);
    setEditing(null);
  };

  const deletePoem = (id: number) => {
    if (confirm("Оё мутмаин ҳастед?")) {
      setPoemList(poemList.filter((p) => p.id !== id));
    }
  };

  const cancel = () => {
    setAdding(false);
    setEditing(null);
  };

  return (
    <div className="pt-16">
      <section className="border-b border-border/50 bg-secondary/30 py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl font-bold text-foreground">
            <span className="text-gold-gradient">Панели идоракунӣ</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">Идоракунии мӯҳтаво</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-2 border-b border-border/50 pb-4">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                tab === t.key
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <t.icon size={16} />
              {t.label}
            </button>
          ))}
        </div>

        {/* Poems Tab */}
        {tab === "poems" && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-foreground">
                Рубоиёт ({poemList.length})
              </h2>
              <button
                onClick={startAdd}
                className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Plus size={16} /> Илова кардан
              </button>
            </div>

            {/* Add/Edit form */}
            {(adding || editing) && (
              <div className="mb-6 rounded-lg border border-primary/30 bg-card p-6">
                <h3 className="mb-4 font-display text-lg font-bold text-foreground">
                  {adding ? "Рубоии нав" : `Таҳрири рубоии №${editing?.id}`}
                </h3>
                <div className="space-y-3">
                  {(["line1", "line2", "line3", "line4"] as const).map((key, i) => (
                    <div key={key}>
                      <label className="mb-1 block text-xs text-muted-foreground">Мисраи {i + 1}</label>
                      <input
                        value={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                        placeholder={`Мисраи ${i + 1}-ро ворид кунед...`}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={savePoem}
                    className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    <Save size={16} /> Сабт кардан
                  </button>
                  <button
                    onClick={cancel}
                    className="flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-muted-foreground hover:bg-secondary"
                  >
                    <X size={16} /> Бекор кардан
                  </button>
                </div>
              </div>
            )}

            {/* Poem list */}
            <div className="space-y-2">
              {poemList.map((poem) => (
                <div
                  key={poem.id}
                  className="flex items-start gap-4 rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-primary/20"
                >
                  <span className="shrink-0 rounded bg-primary/10 px-2 py-1 text-xs font-bold text-primary">
                    №{poem.id}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-foreground/80 italic truncate">{poem.line1}</p>
                    <p className="text-sm text-foreground/80 italic truncate">{poem.line2}</p>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <button
                      onClick={() => startEdit(poem)}
                      className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      <Pencil size={14} />
                    </button>
                    <button
                      onClick={() => deletePoem(poem.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other tabs placeholder */}
        {tab !== "poems" && (
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-12 text-center">
            <p className="font-display text-lg font-bold text-foreground">
              {tab === "books" && "Идоракунии китобҳо"}
              {tab === "photos" && "Идоракунии суратҳо"}
              {tab === "audiobooks" && "Идоракунии аудиокитобҳо"}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Барои кори пурра бо ин бахш, лозим аст Lovable Cloud пайваст шавад.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
