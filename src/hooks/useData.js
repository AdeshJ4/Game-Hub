import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

const useData = (endpoint, requestConfig, deps) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        const controller = new AbortController();
        setLoading(true); 
        apiClient
            .get(endpoint, {signal: controller.signal, ...requestConfig})
            .then((res)=>{
                setData(res.data.results); // result is array => [id, name, slug, games_count, image_background]
                setLoading(false);
            })
            .catch((err)=>{
                if(err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

            return ()=> controller.abort();
    }, deps ? [...deps] : []); // this array can be undefined  and we can't spread an undefined object

    return {data, error, isLoading}
}

export default useData;
