import { Box, Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import ListSkeleton from "./ListSkeleton";

const GenreList = ({onSelectGenre, selectedGenre}) => {
  const { data, isLoading, error } = useGenres();

  if (error) return <Box children='error' />
  
  if (isLoading) return <ListSkeleton />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button onClick={()=>onSelectGenre(genre)} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize="lg" variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
