import useData from './useData';


const useGenres = () => useData('/genres');


export default useGenres;


 










// import { useState, useEffect } from 'react';
// import apiClient from '../services/api-client';
// import { CanceledError } from 'axios';

// const useGenres = () => {
//     const [genres, setGenres] = useState([]);
//     const [error, setError] = useState("");
//     const [isLoading, setLoading] = useState(false);

//     useEffect(()=>{
//         const controller = new AbortController();
//         setLoading(true);
//         apiClient
//             .get("/genres", {signal: controller.signal})
//             .then((res)=>{
//                 setGenres(res.data.results); // result is array => [id, name, slug, games_count, image_background]
//                 setLoading(false);
//             })
//             .catch((err)=>{
//                 if(err instanceof CanceledError) return;
//                 setError(err.message);
//                 setLoading(false);
//             });

//             return ()=> controller.abort();
//     }, []);

//     return {genres, error, isLoading}
// }

// export default useGenres;
