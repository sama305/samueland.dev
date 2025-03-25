interface PicoGameProps {
  gameName: string
}

export default function PicoGame({ gameName }: PicoGameProps) {
  return (
    <div style={{ position: 'relative', paddingTop: '75%', height: 0 }}>
      <iframe
        src={`/pico/${gameName}/${gameName}.html`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        title="PICO-8 Game"
        allowFullScreen
      ></iframe>
    </div>
  );
}

