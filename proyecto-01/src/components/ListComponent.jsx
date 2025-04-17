import React, { useEffect, useState } from 'react'
import { EditComponent } from './EditComponent';

export const ListComponent = ({listState, setListState}) => {

    const [edit, setEdit] = useState(0)

    useEffect(() => {

        getMovies();

    }, []);

    const getMovies = () => {

        let movies = JSON.parse(localStorage.getItem('movie'));

        setListState(movies);

        return movies;

    }

    const deleteMovie = (id) => {

        //get all movies

        let addedMovies = getMovies();

        //filter the movies to delete the movie that we want

        let newMovieList = addedMovies.filter(movies => movies.id !== parseInt(id));

        //set the list state

        setListState(newMovieList);

        //set the new data in the local storage

        localStorage.setItem('movie', JSON.stringify(newMovieList));

    }

    return (
        <>

            {listState != null ? 
                listState.map((movie) => {

                    return (

                        <article className="movie-item" key={movie.id}>

                            <h3 className="title">{movie.title}</h3>
                            <p className="description">{movie.description}</p>

                            <button type="button" className="edit" onClick={() => {

                                setEdit(movie.id)

                            }}>Edit Movie</button>
                            {/* edit form */}
                            {edit === movie.id && (

                                <EditComponent movie={movie} getMovies={getMovies} setEdit={setEdit} setListState={setListState} />

                            )}

                            <button type="button" className="delete" onClick={() => deleteMovie(movie.id)}>Delete Movie</button>


                        </article>

                    )

                })
                :

                <h2 className='title'>No movies to watch</h2>

            }

        </>
    )
}
