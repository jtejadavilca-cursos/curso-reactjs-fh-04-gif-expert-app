import { useState, useEffect } from 'react';

import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const loadImages = async () => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading(false);
    };

    useEffect( () => {
        loadImages();
    }, []);

    return {
        images,
        isLoading
    }
}
