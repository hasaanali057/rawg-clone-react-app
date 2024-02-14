import { 
  FaWindows, 
  FaApple, 
  FaXbox, 
  FaPlaystation, 
  FaLinux, 
  FaAndroid
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
// import { Platform } from './GameGrid'
import { HStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { Platform } from '../hooks/useGames'

interface Props{
  platforms: Platform[]
}

const PLatFormIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe
  }
  return (
    <HStack marginY={'10px'}>
      {platforms.map((platform) => <Icon key={platform.id} as={ iconMap[platform.slug] } color='gray.500'>{platform.name}</Icon>)}
    </HStack>
  )
}

export default PLatFormIconList