import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'


const ColorModeSwitch = () => {

    // toggleColorMode is a function and property called colorMode which represent current color Mode.
    const {toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack>
        {/* 
        if colorMode is dark then we are going to check the switch. 
        colorScheme means color of toggle button 
        if colorMode is dark then color og button will be green
        */}
        <Switch colorScheme='green' isChecked={colorMode === "dark"} onChange={toggleColorMode}/>
        <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch