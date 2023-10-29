import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // mobile device
        lg: `"nav nav" "aside main"`, // large screen devices (larger than 1024 px)
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
        
      {/* whatever inside show will be display on large screen only*/}
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
        
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
