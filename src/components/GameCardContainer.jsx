import { Box } from '@chakra-ui/react'

const GameCardContainer = ({children}) => {
  return (
    <Box width='300px' borderRadius={10} overflow='hidden'>
        {children}
    </Box>
  )
}

export default GameCardContainer