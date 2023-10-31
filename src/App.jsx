import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  console.log('selectedGenre : ' + selectedGenre);
  const onSelectGenre = (genre) => {
    setSelectedGenre(genre);
  }

  console.log('Platform: ' + selectedPlatform);
  const onSelectPlatform = (platform)=> {
    setSelectedPlatform(platform);
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
          <GenreList selectedGenre={selectedGenre}  onSelectGenre={onSelectGenre}/>
        </GridItem>
      </Show>
        
      <GridItem area="main">
        <PlatformSelector onSelectPlatform={onSelectPlatform} selectedPlatform={selectedPlatform}/>
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
};

export default App;
