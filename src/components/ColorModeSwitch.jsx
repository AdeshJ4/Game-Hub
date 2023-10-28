import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {

    // toggleColorMode is a function and property called colorMode which represent current Mode.
    const {toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack>
        {/* if colorMode is dark then we are going to check the switch. */}
        <Switch colorScheme='green' isChecked={colorMode === "dark"} onChange={toggleColorMode}/>
        <Text>Dark Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch