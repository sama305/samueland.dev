import Link from 'next/link'
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
      <div className='gameFooter'>
        <Link href={"/misc/games"}>&larr; See other games</Link>
      </div>
    </div>
  )
}
