import useData from "./useData";
// we pass selectedGenre as a query string parameter to the data hook
const useGames = (gameQuery) =>
  useData(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder
      },
    },
    [gameQuery]
  );

export default useGames;
