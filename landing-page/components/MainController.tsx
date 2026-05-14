"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const VOICES = [
  { id: "en-US-JennyNeural",   label: "Jenny",   gender: "Female", accent: "US", mood: "Friendly" },
  { id: "en-US-AriaNeural",    label: "Aria",    gender: "Female", accent: "US", mood: "Cheerful" },
  { id: "en-GB-SoniaNeural",   label: "Sonia",   gender: "Female", accent: "UK", mood: "Calm" },
  { id: "en-AU-NatashaNeural", label: "Natasha", gender: "Female", accent: "AU", mood: "Neutral" },
  { id: "en-US-GuyNeural",     label: "Guy",     gender: "Male",   accent: "US", mood: "Neutral" },
  { id: "en-US-DavisNeural",   label: "Davis",   gender: "Male",   accent: "US", mood: "Casual" },
  { id: "en-GB-RyanNeural",    label: "Ryan",    gender: "Male",   accent: "UK", mood: "Calm" },
  { id: "en-AU-WilliamNeural", label: "William", gender: "Male",   accent: "AU", mood: "Neutral" },
];

const FILTERS = ["All", "Female", "Male", "Calm", "Cheerful", "Friendly", "Confident", "Casual", "Neutral"];

export default function MainController() {
  const [text, setText] = useState("");
  const [selectedVoice, setSelectedVoice] = useState(VOICES[0].id);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [audioReady, setAudioReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const blobRef = useRef<Blob | null>(null);
  const tickRef = useRef<NodeJS.Timeout | null>(null);

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
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

  const filteredVoices = filter === "All"
    ? VOICES
    : VOICES.filter(v => v.gender === filter || v.accent === filter || v.mood === filter);

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

      const url = URL.createObjectURL(blob);
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
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = pct * duration;
    setCurrentTime(pct * duration);
  };

  const handleDownload = () => {
    const blob = blobRef.current;
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
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

          <div className="flex flex-col gap-1.5 max-h-48 overflow-y-auto pr-1">
            {filteredVoices.map((v) => (
              <button
                key={v.id + v.label}
                onClick={() => setSelectedVoice(v.id)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all ${
                  selectedVoice === v.id
                    ? "bg-white text-zinc-900"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                <span className="font-medium">{v.label}</span>
                <span className="text-xs text-zinc-500">
                  {v.mood} · {v.gender === "Female" ? "♀" : "♂"}
                </span>
              </button>
            ))}
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