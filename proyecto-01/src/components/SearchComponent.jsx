import React from 'react'

export const SearchComponent = () => {
    return (
        <><aside className="lateral">
            <div className="search">
                <h3 className="title">Find Your Movie</h3>
                <form action="search">

                    <input type="text" placeholder="What are you looking for?" />
                    <button type="button" className="search-button">Search</button>

                </form>
            </div>

            <div className="add">

                <h3>Add a Movie</h3>
                <form>
                    <input type="text" placeholder="Title" />
                    <textarea name="description" id="description" placeholder="Movie Description"></textarea>
                    <input type="submit" className="save" value="Save" />
                </form>

            </div>
        </aside></>
    )
}
