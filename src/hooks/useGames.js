import useData from "./useData";
// we pass selectedGenre as a query string parameter to the data hook
const useGames = (gameQuery) =>
  useData(
    "/games",
    {
      params: { // query object to query the games
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      },
    },
    [gameQuery]
  );

export default useGames;
