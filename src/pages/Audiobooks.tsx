import { Play, Pause, Clock, Download } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { getAllAudioFiles, getAudioFile, type StoredAudioFile } from "@/lib/audioStorage";

export default function Audiobooks() {
  const [playing, setPlaying] = useState<number | null>(null);
  const [audiobooks, setAudiobooks] = useState<StoredAudioFile[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Load audiobooks from IndexedDB
  useEffect(() => {
    getAllAudioFiles().then((files) => {
      setAudiobooks(files);
    }).catch((e) => {
      console.error("Failed to load audiobooks", e);
    });
  }, []);

  const handlePlayPause = (id: number) => {
    if (playing === id) {
      setPlaying(null);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    } else {
      setPlaying(id);
    }
  };

  const handleDownload = async (audio: StoredAudioFile) => {
    try {
      const audioFile = await getAudioFile(audio.id);
      if (audioFile?.fileBlob) {
        const url = URL.createObjectURL(audioFile.fileBlob);
        const link = document.createElement("a");
        link.href = url;
        link.download = audio.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    } catch (e) {
      console.error("Failed to download audio file", e);
      alert("Хатога дар боргирифтани файл");
    }
  };

  return (
    <div className="pt-16">
      <section className="border-b border-border/50 bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            <span className="text-gold-gradient">Аудиокитобҳо</span>
          </h1>
          <p className="ornament-divider mx-auto mt-3 max-w-xs text-xs text-primary">✦</p>
          <p className="mt-4 text-sm text-muted-foreground">Гӯш кунед осори Умари Хайёмро</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          {audiobooks.length > 0 ? (
            <div className="space-y-3">
              {audiobooks.map((ab) => (
                <div
                  key={ab.id}
                  className="group flex items-center gap-4 rounded-lg border border-border/50 bg-card p-4 transition-all hover:border-primary/30 hover:shadow-gold"
                >
                  <button
                    onClick={() => handlePlayPause(ab.id)}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {playing === ab.id ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base font-bold text-foreground truncate">{ab.title}</h3>
                    {ab.narrator && <p className="text-sm text-muted-foreground">{ab.narrator}</p>}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    {ab.duration && (
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        <span>{ab.duration}</span>
                      </div>
                    )}
                    <button
                      onClick={() => handleDownload(ab)}
                      className="flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      title="Скачать"
                    >
                      <Download size={16} />
                    </button>
                  </div>

                  {playing === ab.id && ab.fileBlob && (
                    <audio
                      ref={audioRef}
                      src={URL.createObjectURL(ab.fileBlob)}
                      autoPlay
                      controls
                      className="hidden"
                      onPlay={() => setPlaying(ab.id)}
                      onPause={() => setPlaying(null)}
                      onEnded={() => setPlaying(null)}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-12 text-center">
              <p className="font-display text-lg font-bold text-foreground">Аудиокитобҳо</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Ҳанӯз аудиокитобҳо илова нашудаанд. Ба <a href="/admin" className="text-primary hover:underline">админ-панель</a> раванд ва аудио илова кунед.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
