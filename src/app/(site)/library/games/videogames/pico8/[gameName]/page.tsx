import PicoGame from '@/components/PicoGame'
import LibraryPage from '@/components/LibraryPage'

interface GameParams {
  params: Promise<{
    gameName: string
  }>
}

export default async function GamePage({ params }: GameParams) {
  const { gameName } = await params

  return (
    <LibraryPage>
      <PicoGame gameName={gameName} />
    </LibraryPage>
  )
}
