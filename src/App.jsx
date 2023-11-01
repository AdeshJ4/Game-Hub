import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

const App = () => {

  const [gameQuery, setGameQuery] = useState({});

  console.log('GameQuery: ' + JSON.stringify(gameQuery));

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
      templateAreas={{
        base: `"nav" "main"`, // mobile device
        lg: `"nav nav" "aside main"`, // large screen devices (larger than 1024 px)
      }}
      templateColumns={{
        base: '1fr',  // 1 fraction -> our column stretches and takes all the space
        lg: '230px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={onSearch} />
      </GridItem>
        
      {/* whatever inside show will be display on large screen only*/}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre}  onSelectGenre={onSelectGenre}/>
        </GridItem>
      </Show>
        
      <GridItem area="main">
        <Box paddingLeft={2}>
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
