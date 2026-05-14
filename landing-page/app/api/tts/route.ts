export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { text, voice = "21m00Tcm4TlvDq8ikWAM" } = await req.json();

    if (!text?.trim()) {
      return Response.json({ error: "Text is required" }, { status: 400 });
    }

    const res = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voice}`,
      {
        method: "POST",
        headers: {
          "xi-api-key": process.env.ELEVENLABS_API_KEY!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          model_id: "eleven_multilingual_v2",
          voice_settings: { stability: 0.5, similarity_boost: 0.5 },
        }),
      }
    );

    if (!res.ok) {
      const err = await res.json();
      return Response.json({ error: err.detail?.message ?? "TTS failed" }, { status: 500 });
    }

    const buffer = Buffer.from(await res.arrayBuffer());

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