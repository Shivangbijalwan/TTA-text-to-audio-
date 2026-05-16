export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { text, voice } = await req.json();

    const cleanText = text?.trim()?.slice(0, 900);

    // TEXT VALIDATION
    if (!cleanText) {
      return Response.json(
        {
          error: "Please enter some text to convert.",
        },
        { status: 400 }
      );
    }

    const selectedVoice = voice || "en-US-JennyNeural";

    // STEP 1 - GENERATE AUDIO
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

    // READ RESPONSE
    const rawText = await genRes.text();

    console.log("GEN STATUS:", genRes.status);
    console.log("GEN RESPONSE:", rawText);

    // HUMAN FRIENDLY ERRORS
    if (!genRes.ok) {
      let userMessage = "Unable to generate audio right now.";

      switch (genRes.status) {
        case 400:
          userMessage = "Invalid text or voice selected.";
          break;

        case 401:
          userMessage = "Unauthorized request.";
          break;

        case 402:
          userMessage =
            "Free usage limit reached. Please try again later.";
          break;

        case 403:
          userMessage =
            "Access to this voice is restricted.";
          break;

        case 404:
          userMessage =
            "TTS service is currently unavailable.";
          break;

        case 408:
          userMessage =
            "Request timed out. Try shorter text.";
          break;

        case 429:
          userMessage =
            "Too many requests. Please wait a moment.";
          break;

        case 500:
        case 502:
        case 503:
          userMessage =
            "TTS servers are temporarily unavailable.";
          break;
      }

      return Response.json(
        {
          error: userMessage,
          details: rawText,
        },
        { status: genRes.status }
      );
    }

    // PARSE RESPONSE
    let parsed;

    try {
      parsed = JSON.parse(rawText);
    } catch {
      return Response.json(
        {
          error: "Invalid response received from TTS server.",
        },
        { status: 500 }
      );
    }

    // FILE CHECK
    if (!parsed.file_id) {
      return Response.json(
        {
          error: "Audio generation failed. No file was returned.",
        },
        { status: 500 }
      );
    }

    // STEP 2 - DOWNLOAD AUDIO
    const audioRes = await fetch(
      `https://freetts.org/api/audio/${parsed.file_id}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );

    // AUDIO ERRORS
    if (!audioRes.ok) {
      let audioMessage =
        "Failed to download generated audio.";

      switch (audioRes.status) {
        case 404:
          audioMessage =
            "Generated audio file was not found.";
          break;

        case 429:
          audioMessage =
            "Too many download requests. Please wait.";
          break;

        case 500:
        case 502:
        case 503:
          audioMessage =
            "Audio servers are temporarily unavailable.";
          break;
      }

      return Response.json(
        {
          error: audioMessage,
        },
        { status: audioRes.status }
      );
    }

    // AUDIO BUFFER
    const buffer = Buffer.from(
      await audioRes.arrayBuffer()
    );

    // RETURN AUDIO
    return new Response(buffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition":
          'attachment; filename="speech.mp3"',
      },
    });

  } catch (e: any) {
    console.error("TTS ERROR:", e);

    return Response.json(
      {
        error:
          "Something went wrong while generating audio.",
      },
      { status: 500 }
    );
  }
}