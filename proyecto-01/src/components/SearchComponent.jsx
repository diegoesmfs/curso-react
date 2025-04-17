import React, { useState } from 'react'

export const SearchComponent = ({ listState, setListState }) => {

    const [search, setSearch] = useState("");
    const [notFound, setNotFound] = useState(false);

    const searchMovie = (e) => {

        //create state y set it 
        setSearch(e.target.value);

        //filter the results 
        let foundMovies = listState.filter(movie => {

            return movie.title.toLowerCase().includes(search.toLocaleLowerCase());

        });

        if (search.length <= 1 || foundMovies <= 0) {

            foundMovies = JSON.parse(localStorage.getItem('movie'));
            setNotFound(true);

        } else {

            setNotFound(false);

        }

        //set the main list with the filter
        setListState(foundMovies);

    }

    return (
        <>
            <div className="search">
                <h3 className="title">Find Your Movie</h3>
                {(notFound == true && search.length > 1)&& (

                    <span className='not-found'>No Coincidence Found</span>

                )}
                <form action="search">

                    <input type="text" placeholder="What are you looking for?" name="search" autoComplete='off' onChange={e => searchMovie(e)} />
                    <button type="button" className="search-button">Search</button>

                </form>
            </div>

        </>
    )
}
