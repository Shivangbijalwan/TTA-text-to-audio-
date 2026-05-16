"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const VOICES = [
  // English
  { id: "en-US-JennyNeural",    label: "Jenny",    gender: "Female", accent: "US", mood: "Friendly", lang: "EN" },
  { id: "en-US-AriaNeural",     label: "Aria",     gender: "Female", accent: "US", mood: "Cheerful", lang: "EN" },
  { id: "en-US-GuyNeural",      label: "Guy",      gender: "Male",   accent: "US", mood: "Neutral",  lang: "EN" },
  { id: "en-US-DavisNeural",    label: "Davis",    gender: "Male",   accent: "US", mood: "Casual",   lang: "EN" },
  { id: "en-GB-SoniaNeural",    label: "Sonia",    gender: "Female", accent: "UK", mood: "Calm",     lang: "EN" },
  { id: "en-GB-RyanNeural",     label: "Ryan",     gender: "Male",   accent: "UK", mood: "Calm",     lang: "EN" },
  { id: "en-AU-NatashaNeural",  label: "Natasha",  gender: "Female", accent: "AU", mood: "Neutral",  lang: "EN" },
  { id: "en-AU-WilliamNeural",  label: "William",  gender: "Male",   accent: "AU", mood: "Neutral",  lang: "EN" },
  { id: "en-IN-NeerjaNeural",   label: "Neerja",   gender: "Female", accent: "IN", mood: "Friendly", lang: "EN" },
  { id: "en-IN-PrabhatNeural",  label: "Prabhat",  gender: "Male",   accent: "IN", mood: "Neutral",  lang: "EN" },

  // Hindi
  { id: "hi-IN-SwaraNeural",    label: "Swara",    gender: "Female", accent: "IN", mood: "Cheerful", lang: "HI" },
  { id: "hi-IN-AaravNeural",    label: "Aarav",    gender: "Male",   accent: "IN", mood: "Neutral",  lang: "HI" },
  { id: "hi-IN-AnanyaNeural",   label: "Ananya",   gender: "Female", accent: "IN", mood: "Friendly", lang: "HI" },
  { id: "hi-IN-KavyaNeural",    label: "Kavya",    gender: "Female", accent: "IN", mood: "Calm",     lang: "HI" },
  { id: "hi-IN-KunalNeural",    label: "Kunal",    gender: "Male",   accent: "IN", mood: "Calm",     lang: "HI" },
  { id: "hi-IN-RehaanNeural",   label: "Rehaan",   gender: "Male",   accent: "IN", mood: "Casual",   lang: "HI" },

  // Spanish
  { id: "es-ES-ElviraNeural",   label: "Elvira",   gender: "Female", accent: "ES", mood: "Friendly", lang: "ES" },
  { id: "es-ES-AlvaroNeural",   label: "Alvaro",   gender: "Male",   accent: "ES", mood: "Neutral",  lang: "ES" },
  { id: "es-MX-DaliaNeural",    label: "Dalia",    gender: "Female", accent: "MX", mood: "Cheerful", lang: "ES" },
  { id: "es-MX-JorgeNeural",    label: "Jorge",    gender: "Male",   accent: "MX", mood: "Neutral",  lang: "ES" },

  // French
  { id: "fr-FR-DeniseNeural",   label: "Denise",   gender: "Female", accent: "FR", mood: "Calm",     lang: "FR" },
  { id: "fr-FR-HenriNeural",    label: "Henri",    gender: "Male",   accent: "FR", mood: "Neutral",  lang: "FR" },

  // German
  { id: "de-DE-KatjaNeural",    label: "Katja",    gender: "Female", accent: "DE", mood: "Neutral",  lang: "DE" },
  { id: "de-DE-ConradNeural",   label: "Conrad",   gender: "Male",   accent: "DE", mood: "Neutral",  lang: "DE" },

  // Japanese
  { id: "ja-JP-NanamiNeural",   label: "Nanami",   gender: "Female", accent: "JP", mood: "Friendly", lang: "JA" },
  { id: "ja-JP-KeitaNeural",    label: "Keita",    gender: "Male",   accent: "JP", mood: "Neutral",  lang: "JA" },

  // Chinese
  { id: "zh-CN-XiaoxiaoNeural", label: "Xiaoxiao", gender: "Female", accent: "CN", mood: "Cheerful", lang: "ZH" },
  { id: "zh-CN-YunxiNeural",    label: "Yunxi",    gender: "Male",   accent: "CN", mood: "Cheerful", lang: "ZH" },

  // Arabic
  { id: "ar-SA-ZariyahNeural",  label: "Zariyah",  gender: "Female", accent: "SA", mood: "Calm",     lang: "AR" },
  { id: "ar-SA-HamedNeural",    label: "Hamed",    gender: "Male",   accent: "SA", mood: "Neutral",  lang: "AR" },

  // Portuguese
  { id: "pt-BR-FranciscaNeural",label: "Francisca",gender: "Female", accent: "BR", mood: "Friendly", lang: "PT" },
  { id: "pt-BR-AntonioNeural",  label: "Antonio",  gender: "Male",   accent: "BR", mood: "Neutral",  lang: "PT" },

  // Korean
  { id: "ko-KR-SunHiNeural",    label: "SunHi",    gender: "Female", accent: "KR", mood: "Friendly", lang: "KO" },
  { id: "ko-KR-InJoonNeural",   label: "InJoon",   gender: "Male",   accent: "KR", mood: "Neutral",  lang: "KO" },

  // Italian
  { id: "it-IT-ElsaNeural",     label: "Elsa",     gender: "Female", accent: "IT", mood: "Friendly", lang: "IT" },
  { id: "it-IT-DiegoNeural",    label: "Diego",    gender: "Male",   accent: "IT", mood: "Neutral",  lang: "IT" },
];

const FILTERS = ["All", "Female", "Male", "Calm", "Cheerful", "Friendly", "Neutral", "Casual"];

const LANGUAGE_FILTERS = [
  { id: "All", label: "🌐 All"        },
  { id: "EN",  label: "🇺🇸 English"   },
  { id: "HI",  label: "🇮🇳 Hindi"     },
  { id: "ES",  label: "🇪🇸 Spanish"   },
  { id: "FR",  label: "🇫🇷 French"    },
  { id: "DE",  label: "🇩🇪 German"    },
  { id: "JA",  label: "🇯🇵 Japanese"  },
  { id: "ZH",  label: "🇨🇳 Chinese"   },
  { id: "AR",  label: "🇸🇦 Arabic"    },
  { id: "PT",  label: "🇧🇷 Portuguese"},
  { id: "KO",  label: "🇰🇷 Korean"    },
  { id: "IT",  label: "🇮🇹 Italian"   },
];

export default function MainController() {
  const [text, setText] = useState("");
  const [selectedVoice, setSelectedVoice] = useState(VOICES[0].id);
  const [filter, setFilter] = useState("All");
  const [activeLang, setActiveLang] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [audioReady, setAudioReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const blobRef  = useRef<Blob | null>(null);
  const tickRef  = useRef<NodeJS.Timeout | null>(null);

  const fmt = (s: number) => {
    const m   = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const startTick = (audio: HTMLAudioElement) => {
    if (tickRef.current) clearInterval(tickRef.current);
    tickRef.current = setInterval(() => setCurrentTime(audio.currentTime), 200);
  };

  const stopTick = () => {
    if (tickRef.current) clearInterval(tickRef.current);
  };

  const filteredVoices = VOICES.filter((v) => {
    const matchMood = filter === "All" || v.gender === filter || v.mood === filter;
    const matchLang = activeLang === "All" || v.lang === activeLang;
    return matchMood && matchLang;
  });

  const handleConvert = async () => {
    if (!text.trim()) return;

    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    stopTick();
    blobRef.current = null;
    setAudioReady(false);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, voice: selectedVoice }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Error ${res.status}`);
      }

      const blob = await res.blob();
      blobRef.current = blob;

      const url   = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;

      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
        setAudioReady(true);
        setLoading(false);
      });

      audio.addEventListener("ended", () => {
        setIsPlaying(false);
        stopTick();
      });

      audio.addEventListener("error", () => {
        setError("Failed to load audio.");
        setLoading(false);
      });

    } catch (e: any) {
      setError(e.message ?? "Something went wrong.");
      setLoading(false);
    }
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      stopTick();
    } else {
      audio.play();
      setIsPlaying(true);
      startTick(audio);
    }
  };

  const handleStop = () => {
    const audio = audioRef.current;
    if (audio) { audio.pause(); audio.currentTime = 0; }
    setIsPlaying(false);
    setCurrentTime(0);
    stopTick();
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = pct * duration;
    setCurrentTime(pct * duration);
  };

  const handleDownload = () => {
    const blob = blobRef.current;
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a   = document.createElement("a");
    a.href     = url;
    a.download = "speech.mp3";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col gap-4 w-full">

      {error && (
        <div className="bg-red-950 border border-red-800 text-red-300 text-sm px-4 py-3 rounded-2xl">
          {error}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4">

        {/* Text input */}
        <div className="flex-1 bg-zinc-900 rounded-3xl p-4 sm:p-6 min-h-48 flex flex-col">
          <textarea
            placeholder="Type your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full flex-1 bg-transparent outline-none text-white placeholder-zinc-500 resize-none"
          />
        </div>

        {/* Voice selector */}
        <div className="w-full md:w-64 bg-zinc-900 rounded-3xl p-4 sm:p-6 flex flex-col gap-3">

          {/* Mood / gender filter */}
          <p className="text-zinc-400 text-sm">Filter by:</p>
          <div className="flex flex-wrap gap-1.5">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  filter === f
                    ? "bg-orange-400 text-zinc-900"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Language filter */}
          <p className="text-zinc-400 text-sm">Language:</p>
          <div className="flex flex-wrap gap-1.5">
            {LANGUAGE_FILTERS.map((l) => (
              <button
                key={l.id}
                onClick={() => setActiveLang(l.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeLang === l.id
                    ? "bg-orange-400 text-zinc-900"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Voice list */}
          <div className="flex flex-col gap-1.5 max-h-48 overflow-y-auto pr-1">
            {filteredVoices.length === 0 ? (
              <p className="text-zinc-500 text-xs text-center py-4">No voices match filters</p>
            ) : (
              filteredVoices.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVoice(v.id)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all ${
                    selectedVoice === v.id
                      ? "bg-white text-zinc-900"
                      : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                  }`}
                >
                  <span className="font-medium">{v.label}</span>
                  <span className="text-xs opacity-60">
                    {v.mood} · {v.gender === "Female" ? "♀" : "♂"}
                  </span>
                </button>
              ))
            )}
          </div>

          <button
            onClick={handleConvert}
            disabled={loading}
            className="bg-white text-zinc-900 px-6 py-2 rounded-xl font-medium hover:bg-zinc-200 transition disabled:opacity-50 mt-auto"
          >
            {loading ? "Converting..." : "Convert"}
          </button>
        </div>
      </div>

      {/* Audio player */}
      <div className="bg-zinc-900 rounded-3xl px-4 sm:px-6 py-4 flex items-center gap-3">
        {audioReady ? (
          <>
            <button onClick={handleStop} className="shrink-0 text-zinc-400 hover:text-white transition text-lg">⏮</button>

            <button
              onClick={handlePlayPause}
              className="shrink-0 text-white w-9 h-9 rounded-full flex items-center justify-center text-lg hover:text-zinc-300 transition"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>

            <span className="hidden sm:inline text-zinc-400 text-xs shrink-0 w-9">{fmt(currentTime)}</span>

            <div
              className="flex-1 relative h-2.5 bg-zinc-600 rounded-full cursor-pointer"
              onClick={handleScrub}
            >
              <div
                className="absolute top-0 left-0 h-2.5 bg-orange-400 rounded-full transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-orange-400"
                style={{ left: `calc(${progress}% - 8px)` }}
              />
            </div>

            <span className="hidden sm:inline text-zinc-400 text-xs shrink-0 w-9 text-right">{fmt(duration)}</span>

            <button
              onClick={handleDownload}
              className="shrink-0 text-zinc-400 hover:text-white transition"
              title="Download audio"
            >
              <Image src="/icon/downloading.png" alt="Download" width={28} height={28} className="invert" />
            </button>
          </>
        ) : (
          <p className="text-zinc-500 text-sm">
            {loading ? "Converting audio, please wait…" : "Audio will appear here after converting..."}
          </p>
        )}
      </div>

    </div>
  );
}