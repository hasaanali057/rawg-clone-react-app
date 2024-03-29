import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PLatFormIconList from './PLatFormIconList'
import getCroppedImageUrl from '../services/image-url'
import { Game } from '../hooks/useGames'
import CriticScore from './CriticScore'

interface Props{
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}/>
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PLatFormIconList platforms={game.parent_platforms.map(p => p.platform)}/>
          <CriticScore score={game.metacritic}/>
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard