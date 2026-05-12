export async function POST(req: Request) {
  const { text, voice } = await req.json();

  console.log("KEY:", process.env.ELEVENLABS_KEY);
  console.log("VOICE:", voice);
  console.log("TEXT:", text);

  const res = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voice}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": process.env.ELEVENLABS_KEY!,
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v1",
        voice_settings: { stability: 0.5, similarity_boost: 0.5 },
      }),
    }
  );

  console.log("ELEVENLABS STATUS:", res.status);

  if (!res.ok) {
    const error = await res.text();
    console.error("ELEVENLABS ERROR:", error);
    return new Response(error, { status: res.status });
  }

  const audio = await res.arrayBuffer();
  return new Response(audio, {
    headers: { "Content-Type": "audio/mpeg" },
  });
}