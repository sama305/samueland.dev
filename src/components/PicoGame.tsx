interface PicoGameProps {
  gameName: string
}

export default function PicoGame({ gameName }: PicoGameProps) {
  return (
    <div className="gameScreen">
      <iframe
        src={`/pico/${gameName}/${gameName}.html`}
        title="PICO-8 Game"
        allowFullScreen
      ></iframe>
    </div>
  );
}

