import { SimpleGrid, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"
import useGames from "../hooks/useGames"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { GameQuery } from "../App"

interface Props{
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {

  // const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform)
  const { data, error, isLoading } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6]

  if(error) return <Text>{error}</Text>
  
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3}>
      {
        isLoading && 
        skeletons.map(skeleton => 
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton/>
          </GameCardContainer>
        )
      }
      {
        data.map(game => 
          <GameCardContainer key={game.id}>
            <GameCard game={game}/>
          </GameCardContainer>
        )
      }
    </SimpleGrid>
  )
}

export default GameGrid