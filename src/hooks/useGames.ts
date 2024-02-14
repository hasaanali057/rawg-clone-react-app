import { GameQuery } from "../App"
import useData from "./useData"

export interface Platform{
  id: number
  name: string
  slug: string
}


export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  rating_top: number
}

// const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', { params: {
//   genres: selectedGenre?.id,
//   platforms: selectedPlatform?.id
// }}, [selectedGenre?.id, selectedPlatform?.id])

const useGames = (gameQuery: GameQuery) => useData<Game>('/games', { params: {
  genres: gameQuery.genre?.id,
  platforms: gameQuery.platform?.id,
  ordering: gameQuery.sortOrder,
  search: gameQuery.searchText
}}, [gameQuery])

export default useGames