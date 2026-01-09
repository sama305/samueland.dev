import PicoGame from '../../../../../../components/PicoGame'
import LibraryPage from '../../../../../../components/LibraryPage'
import { DefaultPageParams } from '@/lib/types'

interface GameParams {
  params: Promise<{
    gameName: string
  }>
}

export default async function GamePage({ params, searchParams }: GameParams & DefaultPageParams) {
  const { gameName } = await params

  const paramsMap = await searchParams

  return (
    <LibraryPage paramsMap={paramsMap}>
      <PicoGame gameName={gameName} />
    </LibraryPage>
  )
}
