import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

const App = () => {
  // const [selectedGenre, setSelectedGenre] = useState(null);
  // const [selectedPlatform, setSelectedPlatform] = useState(null);

  const [gameQuery, setGameQuery] = useState({});

  const onSelectGenre = (genre) => {
    setGameQuery({...gameQuery, genre});
  }

  const onSelectPlatform = (platform)=> {
    setGameQuery({...gameQuery, platform});
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // mobile device
        lg: `"nav nav" "aside main"`, // large screen devices (larger than 1024 px)
      }}
      templateColumns={{
        base: '1fr',  // 1 fraction -> our column stretches and takes all the space
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
        
      {/* whatever inside show will be display on large screen only*/}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre}  onSelectGenre={onSelectGenre}/>
        </GridItem>
      </Show>
        
      <GridItem area="main">
        <HStack spacing={5} padding={2} marginBottom={1}>
          <PlatformSelector onSelectPlatform={onSelectPlatform} selectedPlatform={gameQuery.platform}/>
          <SortSelector/>
        </HStack>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
};

export default App;
