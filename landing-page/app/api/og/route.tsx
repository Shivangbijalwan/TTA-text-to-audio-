// app/api/og/route.tsx
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'My Website';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          padding: '60px',
        }}
      >
        <h1 style={{ color: 'white', fontSize: 72, margin: 0 }}>
          {title}
        </h1>
        <p style={{ color: '#94a3b8', fontSize: 32 }}>yoursite.com</p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}