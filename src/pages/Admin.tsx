import { useState, useEffect } from "react";
import { poems as initialPoems, type Poem } from "@/data/poems";
import { Plus, Pencil, Trash2, Save, X, BookOpen, Image, Headphones, FileText, Upload } from "lucide-react";
import { saveAudioFile, getAllAudioFiles, deleteAudioFile, type StoredAudioFile } from "@/lib/audioStorage";

type Tab = "poems" | "books" | "photos" | "audiobooks";

export default function Admin() {
  const [tab, setTab] = useState<Tab>("poems");
  const [poemList, setPoemList] = useState<Poem[]>(initialPoems);
  const [editing, setEditing] = useState<Poem | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ line1: "", line2: "", line3: "", line4: "" });
  const [audioFiles, setAudioFiles] = useState<StoredAudioFile[]>([]);
  const [audioForm, setAudioForm] = useState({ title: "", narrator: "", duration: "" });
  const [selectedAudioFile, setSelectedAudioFile] = useState<File | null>(null);

  // Load audiobooks from IndexedDB on mount
  useEffect(() => {
    getAllAudioFiles().then((files) => {
      setAudioFiles(files);
    }).catch((e) => {
      console.error("Failed to load audiobooks", e);
    });
  }, []);

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

  const handleAudioFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedAudioFile(file);
    }
  };

  const handleSaveAudioFile = () => {
    if (!selectedAudioFile || !audioForm.title.trim()) return;

    const newAudio: StoredAudioFile = {
      id: audioFiles.length > 0 ? Math.max(...audioFiles.map((a) => a.id)) + 1 : 1,
      title: audioForm.title,
      fileName: selectedAudioFile.name,
      mimeType: selectedAudioFile.type || "audio/mpeg",
      duration: audioForm.duration || undefined,
      narrator: audioForm.narrator || undefined,
      uploadedAt: new Date().toISOString(),
      fileBlob: selectedAudioFile,
    };

    saveAudioFile(newAudio).then(() => {
      setAudioFiles([...audioFiles, newAudio]);
      setAudioForm({ title: "", narrator: "", duration: "" });
      setSelectedAudioFile(null);
    }).catch((e) => {
      console.error("Failed to save audio file", e);
      alert("Хатога дар сабт кардани файл");
    });
  };

  const handleDeleteAudioFile = (id: number) => {
    if (confirm("Оё мутмаин ҳастед?")) {
      deleteAudioFile(id).then(() => {
        setAudioFiles(audioFiles.filter((a) => a.id !== id));
      }).catch((e) => {
        console.error("Failed to delete audio file", e);
        alert("Хатога дар ҳазф кардани файл");
      });
    }
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
                  <div>
                    <label className="mb-2 block text-xs text-muted-foreground">Чор мисраи рубоӣ (ҳар мисра бар сатри нав)</label>
                    <textarea
                      value={`${form.line1}\n${form.line2}\n${form.line3}\n${form.line4}`.trim()}
                      onChange={(e) => {
                        const lines = e.target.value.split('\n');
                        setForm({
                          line1: lines[0] || "",
                          line2: lines[1] || "",
                          line3: lines[2] || "",
                          line4: lines[3] || "",
                        });
                      }}
                      rows={6}
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none"
                      placeholder="Мисраи 1&#10;Мисраи 2&#10;Мисраи 3&#10;Мисраи 4"
                    />
                  </div>
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

        {/* Audiobooks Tab */}
        {tab === "audiobooks" && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-foreground">
                Аудиокитобҳо ({audioFiles.length})
              </h2>
            </div>

            {/* Add audio form */}
            <div className="mb-6 rounded-lg border border-primary/30 bg-card p-6">
              <h3 className="mb-4 font-display text-lg font-bold text-foreground">Илова кардани аудио</h3>
              <div className="space-y-3">
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Номи аудиокитоб</label>
                  <input
                    value={audioForm.title}
                    onChange={(e) => setAudioForm({ ...audioForm, title: e.target.value })}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="Номро ворид кунед..."
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Фироғсеро</label>
                  <input
                    value={audioForm.narrator}
                    onChange={(e) => setAudioForm({ ...audioForm, narrator: e.target.value })}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="Номи фироғсеро ворид кунед..."
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Давомад (ихтиёрӣ)</label>
                  <input
                    value={audioForm.duration}
                    onChange={(e) => setAudioForm({ ...audioForm, duration: e.target.value })}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="мас., 12:30"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs text-muted-foreground">Файли аудио</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      accept="audio/*"
                      onChange={handleAudioFileSelect}
                      className="flex-1 text-sm text-muted-foreground file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-4 file:py-2 file:text-xs file:font-medium file:text-primary-foreground hover:file:bg-primary/90"
                    />
                    {selectedAudioFile && (
                      <span className="text-xs text-muted-foreground">{selectedAudioFile.name}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={handleSaveAudioFile}
                  className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  <Upload size={16} /> Илова кардан
                </button>
              </div>
            </div>

            {/* Audio files list */}
            <div className="space-y-2">
              {audioFiles.map((audio) => (
                <div
                  key={audio.id}
                  className="flex items-start gap-4 rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-primary/20"
                >
                  <span className="shrink-0 rounded bg-primary/10 px-2 py-1 text-xs font-bold text-primary">
                    №{audio.id}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground truncate">{audio.title}</p>
                    {audio.narrator && <p className="text-xs text-muted-foreground">{audio.narrator}</p>}
                    <p className="text-xs text-muted-foreground mt-1">Файл: {audio.fileName}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2 text-xs text-muted-foreground">
                    {audio.duration && <span>{audio.duration}</span>}
                    <button
                      onClick={() => handleDeleteAudioFile(audio.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {audioFiles.length === 0 && (
              <div className="rounded-lg border border-border/50 bg-secondary/30 p-8 text-center">
                <p className="text-sm text-muted-foreground">Ҳанӯз аудиокитобҳо илова нашудаанд</p>
              </div>
            )}
          </div>
        )}

        {/* Other tabs placeholder */}
        {tab !== "poems" && tab !== "audiobooks" && (
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-12 text-center">
            <p className="font-display text-lg font-bold text-foreground">
              {tab === "books" && "Идоракунии китобҳо"}
              {tab === "photos" && "Идоракунии суратҳо"}
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
