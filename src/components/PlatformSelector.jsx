import { Menu, MenuButton, MenuItem, MenuList, Button, Box} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelector = ({onSelectPlatform, selectedPlatform}) => {

  const {data, error } = usePlatforms();

  if(error) return null;
  
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList>
            {data.map((platform)=> <MenuItem key={platform.id} onClick={()=>onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector