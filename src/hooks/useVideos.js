import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defauleSearchTerm) => {
    const [videos, setVideos] = useState([]);


    useEffect(() => {
        search(defauleSearchTerm);
    }, [defauleSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
            },
        });

        setVideos(response.data.items);

    };

    return [videos, search]; // can also array [videos, on]

}

export default useVideos;