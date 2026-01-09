import PicoGame from '../../../../../../components/PicoGame'
import LibraryPage from '../../../../../../components/LibraryPage'

interface GameParams {
  params: Promise<{
    gameName: string
  }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function GamePage({ params, searchParams }: GameParams) {
  const { gameName } = await params

  const paramsMap = await searchParams

  return (
    <LibraryPage paramsMap={paramsMap}>
      <PicoGame gameName={gameName} />
    </LibraryPage>
  )
}
