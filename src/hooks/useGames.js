import useData from "./useData";

const useGames = () => useData('/games')
 
export default useGames;



















// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";

// const useGames = () => {
//     const [games, setGames] = useState([]);
//     const [error, setError] = useState("");
//     const [isLoading, setLoading] = useState(false);
  
//     useEffect(() => {
//         const controller = new AbortController();
//         setLoading(true);
//       apiClient
//         .get("/games", {signal: controller.signal})
//         .then((res) => {
//           setGames(res.data.results);
//           setLoading(false);
//         })
//         .catch((err) => {
//             if(err instanceof CanceledError) return;
//           setError(err.message);
//           setLoading(false);
//         });

//         return ()=> controller.abort();
//     }, []);

//     return {games, error, isLoading};
// }


// export default useGames;