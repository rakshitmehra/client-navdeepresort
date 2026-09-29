import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Navdeep Resort — Best Resort in Mukerian, Punjab';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #5C1A2B 0%, #8E4A5C 100%)',
          color: '#F7F0E3',
          fontFamily: 'Helvetica, Arial, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#CFA044',
            display: 'flex',
          }}
        >
          Navdeep Resort
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 30,
            color: '#F7F0E3',
            opacity: 0.85,
            display: 'flex',
          }}
        >
          GT Road · Mukerian, Punjab
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            color: '#CFA044',
            display: 'flex',
          }}
        >
          Weddings · Family Retreats · Corporate Events
        </div>
      </div>
    ),
    { ...size }
  );
}
