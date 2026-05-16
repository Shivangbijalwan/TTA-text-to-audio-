export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { text, voice } = await req.json();

    const cleanText = text?.trim()?.slice(0, 900);

    if (!cleanText) {
      return Response.json(
        { error: "Text is required" },
        { status: 400 }
      );
    }

    const selectedVoice = voice || "en-US-JennyNeural";

    // STEP 1
    const genRes = await fetch("https://freetts.org/api/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({
        text: cleanText,
        voice: selectedVoice,
        rate: "+0%",
        pitch: "+0Hz",
      }),
    });

    // DEBUG
    const rawText = await genRes.text();
    console.log("GEN STATUS:", genRes.status);
    console.log("GEN RESPONSE:", rawText);

    if (!genRes.ok) {
      return Response.json(
        {
          error: `Generation failed (${genRes.status})`,
          details: rawText,
        },
        { status: 500 }
      );
    }

    const parsed = JSON.parse(rawText);

    if (!parsed.file_id) {
      return Response.json(
        {
          error: "No file_id returned",
          details: parsed,
        },
        { status: 500 }
      );
    }

    // STEP 2
    const audioRes = await fetch(
      `https://freetts.org/api/audio/${parsed.file_id}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );

    if (!audioRes.ok) {
      const errText = await audioRes.text();

      return Response.json(
        {
          error: "Audio download failed",
          details: errText,
        },
        { status: 500 }
      );
    }

    const buffer = Buffer.from(await audioRes.arrayBuffer());

    return new Response(buffer, {
      headers: {
        "Content-Type": "audio/mpeg",
      },
    });

  } catch (e: any) {
    console.error(e);

    return Response.json(
      {
        error: e.message || "TTS failed",
      },
      { status: 500 }
    );
  }
}