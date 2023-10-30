import { Box, List, ListItem, Skeleton, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react";

const ListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  return (

      <List>
        {skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY="5px">
            <Skeleton>
                <SkeletonText />
            </Skeleton>
          </ListItem>
        ))}
      </List>
  );
};

export default ListSkeleton;
