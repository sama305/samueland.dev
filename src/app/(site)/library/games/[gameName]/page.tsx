import PicoGame from '../../../../../../components/PicoGame'
import LibraryPage from '../../../../../../components/LibraryPage'
import { Suspense } from 'react'

interface GameParams {
  params: Promise<{
    gameName: string
  }>
}

export default async function GamePage({ params }: GameParams) {
  const { gameName } = await params

  return (
    <Suspense fallback={(<>Loading...</>)}>
      <LibraryPage>
        <PicoGame gameName={gameName} />
      </LibraryPage>
    </Suspense>
  )
}
