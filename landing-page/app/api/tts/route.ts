export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { text, voice = "en-US-JennyNeural" } = await req.json();

    if (!text?.trim()) {
      return Response.json({ error: "Text is required" }, { status: 400 });
    }

    // Character limit warning (freetts free tier = 1000 chars/generation)
    if (text.length > 1000) {
      return Response.json(
        { error: "Text too long. Free tier allows max 1,000 characters." },
        { status: 400 }
      );
    }

    // Step 1: Generate and get file_id
    const genRes = await fetch("https://freetts.org/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, voice, rate: "+0%", pitch: "+0Hz" }),
    });

    // Handle rate limit
    if (genRes.status === 429) {
      return Response.json(
        { error: "Rate limit hit. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    if (!genRes.ok) {
      const body = await genRes.json().catch(() => ({}));
      return Response.json(
        { error: body?.error || `TTS generation failed (${genRes.status})` },
        { status: 500 }
      );
    }

    const json = await genRes.json();

    if (!json?.file_id) {
      return Response.json(
        { error: "No file_id returned. You may have hit the daily limit (2,000 chars/day)." },
        { status: 500 }
      );
    }

    const { file_id } = json;

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