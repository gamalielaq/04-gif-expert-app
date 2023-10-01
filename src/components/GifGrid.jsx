import { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    console.log(images);
    console.log(isLoading);
    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h3>Cargando...</h3> )
            }
            {/* <h5>{images}</h5> */}
            {/* <button onClick={ () => setCounter(counter + 1)}> +1 </button> */}
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifGridItem key={ image.id } { ...image }/>
                    ))
                }
            </div>
        </>
    )
}

