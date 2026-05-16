export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { text, voice = "en-US-JennyNeural" } = await req.json();

    if (!text?.trim()) {
      return Response.json({ error: "Text is required" }, { status: 400 });
    }

    // Step 1: Generate and get file_id
    const genRes = await fetch("https://freetts.org/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, voice, rate: "+0%", pitch: "+0Hz" }),
    });

    if (!genRes.ok) {
      return Response.json({ error: "TTS generation failed" }, { status: 500 });
    }

    const { file_id } = await genRes.json();

    // Step 2: Download the MP3
    const audioRes = await fetch(`https://freetts.org/api/audio/${file_id}`);

    if (!audioRes.ok) {
      return Response.json({ error: "Audio download failed" }, { status: 500 });
    }

    const buffer = Buffer.from(await audioRes.arrayBuffer());

    return new Response(buffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": 'attachment; filename="speech.mp3"',
      },
    });

  } catch (e: any) {
    return Response.json({ error: e.message ?? "TTS failed" }, { status: 500 });
  }
}