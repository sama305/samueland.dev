import PicoGame from '../../../../../components/PicoGame'

interface GameParams {
  params: Promise<{
    gameName: string
  }>
}

export default async function GamePage({ params }: GameParams) {
  const { gameName } = await params

  return (
    <div>
      <PicoGame gameName={gameName} />
    </div>
  )
}
