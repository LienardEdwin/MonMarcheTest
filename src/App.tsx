import React, {useEffect, useState} from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import { getFilmsFromApiWithSearchedText, getFilmsByPopularity } from './API/TMDBApi'
import Poster from "./components/Poster/Poster"


type Movies = {
  poster_path: string
  title: string
}

function App() {
  const [movies, setMovies]= useState<Movies[]>([])

  useEffect(() => {
    loadFilms()
  }, [])

  function loadFilms() {
    getFilmsByPopularity().then(data => setMovies(data.results));
  }

  return (
    <div className="App">
      <Layout/>
      {
        movies.map((res:Movies) =>(
          <Poster data={res}/>
        ))
      }
    </div>
  );
}

export default App;
