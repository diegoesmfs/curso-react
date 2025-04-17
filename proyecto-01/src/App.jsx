import { ListComponent } from "./components/ListComponent"
import { SearchComponent } from "./components/SearchComponent"
import { AddMovieComponent } from "./components/AddMovieComponent"
import { useState } from "react";

function App() {

    const [listState, setListState] = useState([]);
  


  return (

    <div className="layout">

      <header className="header">
        <div className="logo">
          <i className="play-logo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-bi-play-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
          </svg></i>
        </div>
        <h1>MovieShack</h1>

      </header>

      <nav className="nav">

        <ul>

          <li><a href="/">Home</a></li>
          <li><a href="/">Movies</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>

      </nav>

      {/* all the movies*/}

      <section className="content">
        <ListComponent listState={listState} setListState={setListState}/>
        </section>

      {/*the search section / form to add movies*/}
      <aside className="lateral">
        <SearchComponent listState={listState} setListState={setListState}/>
        <AddMovieComponent setListState={setListState}/>
      </aside>

      <footer className="footer">

        &copy; MovieShack

      </footer>

    </div>

  )
}

export default App
