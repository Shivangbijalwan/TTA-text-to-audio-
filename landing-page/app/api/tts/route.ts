import { NextRequest, NextResponse } from "next/server";
import { execSync } from "child_process";
import { readFileSync, unlinkSync, existsSync, writeFileSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  const { text, voice = "en-US-JennyNeural" } = await req.json();

  if (!text?.trim()) {
    return NextResponse.json({ error: "No text provided" }, { status: 400 });
  }

  const outPath = join(tmpdir(), `${randomUUID()}.mp3`).replace(/\\/g, "/");
  const scriptPath = join(tmpdir(), `${randomUUID()}.py`).replace(/\\/g, "/");

  const scriptContent = `
import asyncio
import edge_tts

async def main():
    tts = edge_tts.Communicate(${JSON.stringify(text)}, ${JSON.stringify(voice)})
    await tts.save(${JSON.stringify(outPath)})

asyncio.run(main())
`;

  writeFileSync(scriptPath, scriptContent);

  try {
    try {
      execSync(`python3 "${scriptPath}"`, { timeout: 30000 });
    } catch {
      execSync(`python "${scriptPath}"`, { timeout: 30000 });
    }

    if (!existsSync(outPath)) throw new Error("Audio file was not created");

    const buffer = readFileSync(outPath);
    try { unlinkSync(outPath); } catch {}
    try { unlinkSync(scriptPath); } catch {}

    return new NextResponse(buffer, {
      headers: { "Content-Type": "audio/mpeg" },
    });

  } catch (err: any) {
    try { unlinkSync(scriptPath); } catch {}
    try { unlinkSync(outPath); } catch {}
    console.error("TTS Error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}