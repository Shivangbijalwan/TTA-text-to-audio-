"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

// — Voice list —
const voices = [
  { id: "21m00Tcm4TlvDq8ikWAM", label: "Devik (Male)" },
];

// — CommentBox (inlined) —
function CommentBox({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <textarea
      placeholder="Type your text here..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full flex-1 min-h-40 md:min-h-0 md:h-full bg-transparent outline-none text-white placeholder-zinc-500 resize-none overflow-y-auto"
    />
  );
}

// — VoiceBox (inlined) —
function VoiceBox({
  voices,
  selected,
  onSelect,
  onConvert,
  loading,
}: {
  voices: { id: string; label: string }[];
  selected: string;
  onSelect: (id: string) => void;
  onConvert: () => void;
  loading: boolean;
}) {
  return (
    <div className="w-full md:w-52 bg-zinc-900 rounded-3xl p-4 sm:p-6 flex flex-row md:flex-col justify-between gap-4">
      <div className="flex flex-col gap-2 flex-1 md:flex-none">
        <p className="text-zinc-400 text-sm">Voice for free tier:</p>
        <div className="flex flex-row md:flex-col gap-2 flex-wrap">
          {voices.map((v) => (
            <button
              key={v.id}
              onClick={() => onSelect(v.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selected === v.id
                  ? "bg-white text-zinc-900"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={onConvert}
        disabled={loading}
        className="bg-white text-zinc-900 px-6 py-2 rounded-xl font-medium hover:bg-zinc-200 transition disabled:opacity-50 self-end md:self-stretch whitespace-nowrap"
      >
        {loading ? "Converting..." : "Convert"}
      </button>
    </div>
  );
}

// — AudioPlayer (inlined) —
function AudioPlayer({
  audioReady,
  isPlaying,
  progress,
  currentTime,
  duration,
  onPlay,
  onPause,
  onResume,
  onStop,
  onScrub,
  onDownload,
}: {
  audioReady: boolean;
  isPlaying: boolean;
  progress: number;
  currentTime: number;
  duration: number;
  onPlay: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  onScrub: (pct: number, time: number) => void;
  onDownload: () => void;
}) {
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-zinc-900 rounded-3xl px-4 sm:px-6 py-4 flex items-center gap-3">
      {audioReady ? (
        <>
          <button onClick={onStop} className="shrink-0 text-zinc-400 hover:text-white transition text-lg">
            ⏮
          </button>

          <button
            onClick={isPlaying ? onPause : progress > 0 ? onResume : onPlay}
            className="shrink-0 text-white w-9 h-9 rounded-full flex items-center justify-center text-lg hover:text-zinc-300 transition"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          <span className="hidden sm:inline text-zinc-400 text-xs shrink-0 w-9">
            {formatTime(currentTime)}
          </span>

          <div
            className="flex-1 relative h-2.5 bg-zinc-600 rounded-full cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
              onScrub(pct, Math.round((pct / 100) * duration));
            }}
          >
            <div
              className="absolute top-0 left-0 h-2.5 bg-orange-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-orange-400 transition-all duration-500"
              style={{ left: `calc(${progress}% - 8px)` }}
            />
          </div>

          <span className="hidden sm:inline text-zinc-400 text-xs shrink-0 w-9 text-right">
            {formatTime(duration)}
          </span>

          <button onClick={onDownload} className="shrink-0 text-zinc-400 hover:text-white transition">
            <Image src="/icon/downloading.png" alt="Download" width={28} height={28} className="invert" />
          </button>
        </>
      ) : (
        <p className="text-zinc-500 text-sm">Audio will appear here after converting...</p>
      )}
    </div>
  );
}

// — MainController (default export) —
export default function MainController() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("21m00Tcm4TlvDq8ikWAM");
  const [audioReady, setAudioReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const handleConvert = () => {
    if (!text) return;
    setLoading(true);
    window.speechSynthesis.cancel();
    setDuration(Math.ceil(text.length / 14));
    setAudioReady(true);
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setLoading(false);
  };

  const handlePlay = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    if (intervalRef.current) clearInterval(intervalRef.current);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utteranceRef.current = utterance;
    let startTime = Date.now();

    utterance.onstart = () => {
      startTime = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsed = Math.min(Math.floor((Date.now() - startTime) / 1000), duration);
        setCurrentTime(elapsed);
        setProgress(Math.round((elapsed / duration) * 100));
      }, 500);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setProgress(100);
      setCurrentTime(duration);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    utterance.onpause = () => { if (intervalRef.current) clearInterval(intervalRef.current); };

    utterance.onresume = () => {
      intervalRef.current = setInterval(() => {
        const elapsed = Math.min(Math.floor((Date.now() - startTime) / 1000), duration);
        setCurrentTime(elapsed);
        setProgress(Math.round((elapsed / duration) * 100));
      }, 500);
    };

    synth.speak(utterance);
    setIsPlaying(true);
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
    setIsPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleResume = () => {
    window.speechSynthesis.resume();
    setIsPlaying(true);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div className="flex flex-col gap-4 w-full">

      <div className="flex flex-col md:flex-row gap-4">
        {/* Text input */}
        <div className="flex-1 bg-zinc-900 rounded-3xl p-4 sm:p-6 min-h-48 md:min-h-0 flex flex-col">
          <CommentBox value={text} onChange={setText} />
        </div>

        {/* Voice selector + convert */}
        <VoiceBox
          voices={voices}
          selected={voice}
          onSelect={setVoice}
          onConvert={handleConvert}
          loading={loading}
        />
      </div>

      {/* Audio player */}
      <AudioPlayer
        audioReady={audioReady}
        isPlaying={isPlaying}
        progress={progress}
        currentTime={currentTime}
        duration={duration}
        onPlay={handlePlay}
        onPause={handlePause}
        onResume={handleResume}
        onStop={handleStop}
        onScrub={(pct, time) => { setProgress(pct); setCurrentTime(time); }}
        onDownload={() => router.push("/signup")}
      />

    </div>
  );
}