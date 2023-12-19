
import { Box, Grid, GridItem, HStack, Show, Hide, Button } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

const App = () => {
  const [gameQuery, setGameQuery] = useState({});
  const [isGenreListVisible, setIsGenreListVisible] = useState(false);

  const toggleGenreListVisibility = () => {
    setIsGenreListVisible(!isGenreListVisible);
  };

  const onSelectGenre = (genre) => {
    setGameQuery({...gameQuery, genre});
  }

  const onSelectPlatform = (platform)=> {
    setGameQuery({...gameQuery, platform});
  }

  const onSelectOrder = (sortOrder) => {
    setGameQuery({...gameQuery, sortOrder});
  }

  const onSearch = (searchText) => {
    setGameQuery({...gameQuery, searchText});
  }

  return (
    <Grid
    /**
     * Inside templateArea instead of setting templateArea as a string we want to set as an object.
     * Inside this object we can set various properties like base, small, medium, large, extra large, these are breakpoints.
     * for more info go to "https://chakra-ui.com/docs/styled-system/responsive-styles".
     * for our application we have define two different layouts, one for mobile devices and other for large devices
     */
      templateAreas={{  // templateAreas to define layout of our component. here we use backtick(``) to define multiple string.
        base: `"nav" "main"`, // mobile device
        lg: `"nav nav" "aside main"`, // large screen devices (larger than 1024 px)
      }}
      templateColumns={{
        base: '1fr',  // 1 fraction -> our column stretches and takes all the space
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">  {/* To put GridItem in specific area we set area property */}
        <NavBar onSearch={onSearch} />
      </GridItem>

      {/* 
      Show GenreList on large screens 
      To make sure our aside panel only rendered on large devices we should wrap this inside Show component.
      what we put inside <Shoe> will be rendered on large screen.
      */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={onSelectGenre}/>
        </GridItem>
      </Show>



      <GridItem area="main">
        {/* Hide GenreList on small screens */}
        <Hide above="lg">
          <GridItem area="aside" paddingX={5}>
            <Button onClick={toggleGenreListVisibility} marginBottom={4}>
              {isGenreListVisible ? "Hide" : "Genres"}
            </Button>
            {isGenreListVisible && (
              <GenreList selectedGenre={gameQuery.genre} onSelectGenre={onSelectGenre}/>
            )}
          </GridItem>
        </Hide>
        <Box paddingLeft={2} >
          <GameHeading gameQuery={gameQuery}/>
          <HStack spacing={5} marginBottom={1}>
            <PlatformSelector onSelectPlatform={onSelectPlatform} selectedPlatform={gameQuery.platform}/>
            <SortSelector onSelectOrder={onSelectOrder} sortOrder={gameQuery.sortOrder}/>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
};

export default App;


