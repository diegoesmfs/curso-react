import React from 'react'

export const EditComponent = ({movie, getMovies, setEdit, setListState}) => {

    const titleComponent = "Edit The Movie"

    const editMovie = (e, id) => {

        e.preventDefault();

        //get the event target
        let target = e.target;

        //find de index of the movie to edit
        const storageMovies = getMovies();

        const index = storageMovies.findIndex(movie => movie.id === id);
        
        //create an object with the index

        let movie = {

            id,
            title: target.title.value,
            description: target.description.value

        }

        //set the item with the index
        storageMovies[index] = movie;

        //save the new array in the local storage
        localStorage.setItem('movie', JSON.stringify(storageMovies));

        //set the states
        setListState(storageMovies);
        setEdit(0);

    }   

    return (
        <div className='edit-form'>

            <h3 className='title'>{titleComponent}</h3>
            <form onSubmit={e => editMovie(e, movie.id)}>


                <input type="text" name="title" defaultValue={movie.title} />
                <textarea name="description" id="description" defaultValue={movie.description}></textarea>
                <input type="submit" className="save" value="Save" />

            </form>

        </div>
    )
}
