import React, { useState } from 'react'
import { SaveStorage } from '../helpers/saveStorage';

export const AddMovieComponent = ({setListState}) => {
    
    const [movieState, setMovieState] = useState({

        title: "",
        description: ""

    });

    const {title, description} = movieState

    const componentTitle = "Add Movie";
    
    const getFormData = (e) => {

        e.preventDefault();

        //get the form data
        let target  = e.target;
        let title = target.title.value;
        let description = target.description.value;

        // create an object for the movie to save it
        let movie = {

            id: new Date().getTime(),
            title,
            description

        }

        //save the state
        setMovieState(movie);

        //set the principal state
        setListState((items) => {

            return [...items, movie]

        });

        //save in the local storage
        SaveStorage('movie', movie);

    }

    return (
        <>
            <div className="add">

                <h3 className='title'>{componentTitle}</h3>
                <strong>{(title && description) && "Movie Added: " + title}</strong>
                <form onSubmit={getFormData}>
                    <input type="text" name="title" placeholder="Title" />
                    <textarea name="description" id="description" placeholder="Movie Description"></textarea>
                    <input type="submit" className="save" value="Save" />
                </form>

            </div>
        </>
    )
}
