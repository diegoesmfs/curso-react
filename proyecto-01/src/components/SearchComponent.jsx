import React from 'react'

export const SearchComponent = () => {
    return (
        <>
            <div className="search">
                <h3 className="title">Find Your Movie</h3>
                <form action="search">

                    <input type="text" placeholder="What are you looking for?" />
                    <button type="button" className="search-button">Search</button>

                </form>
            </div>

        </>
    )
}
