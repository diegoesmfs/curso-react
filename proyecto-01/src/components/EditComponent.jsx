import React from 'react'

export const EditComponent = ({movie}) => {

    const titleComponent = "Edit The Movie"

    return (
        <div className='edit-form'>

            <h3 className='title'>{titleComponent}</h3>
            <form>


                <input type="text" name="title" defaultValue={movie.title} />
                <textarea name="description" id="description" defaultValue={movie.description}></textarea>
                <input type="submit" className="save" value="Save" />

            </form>

        </div>
    )
}
