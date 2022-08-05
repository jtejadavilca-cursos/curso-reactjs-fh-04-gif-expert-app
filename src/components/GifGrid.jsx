import PropTypes from 'prop-types';

import { GifGridItem } from './index.components';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>

            
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div aria-label='card-grid' className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem title={img.title} url={img.url} key={img.id}/>
                    ))
                }
            </div>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}