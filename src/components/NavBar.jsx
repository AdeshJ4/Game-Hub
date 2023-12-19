import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = ({onSearch}) => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px' />  {/* we use boxSize to limit the size of Image */}
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar