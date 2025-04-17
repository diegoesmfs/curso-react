import React, { useEffect, useState } from 'react'

export const ListComponent = () => {

    const [listState, setListState] = useState([]);

    useEffect(() => {

        getMovies();

    }, []);

    const getMovies = () => {

        let movies = JSON.parse(localStorage.getItem('movie'));

        setListState(movies);

    }

    return (
        <>

            {listState != null ? 
                listState.map((movie) => {

                    return (

                        <article className="movie-item" key={movie.id}>

                            <h3 className="title">{movie.title}</h3>
                            <p className="description">{movie.description}</p>

                            <button type="button" className="edit">Edit Movie</button>
                            <button type="button" className="delete">Delete Movie</button>


                        </article>

                    )

                })
                :

                <h2 className='title'>No movies to watch</h2>

            }

        </>
    )
}
