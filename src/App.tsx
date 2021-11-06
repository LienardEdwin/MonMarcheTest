import React, {useEffect, useState} from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import { getFilmsFromApiWithSearchedText, getFilmsByPopularity } from './API/TMDBApi'
import styled from 'styled-components'
import Poster from "./components/Poster/Poster"

type Movies = {
  poster_path: string
  title: string
}

const TextInput = styled.input `
    width: 50%;
  `

const FlexContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  `

function App() {
  const [movies, setMovies] = useState<Movies[]>([])
  const [textInput, setTextInput] = useState('')

  useEffect(() => {
    loadFilms()
  }, [])

  useEffect(() =>{
    if(textInput.length === 0){
      loadFilms()
    }else{
      loadFilmByText()
    }
  },[textInput])

  function loadFilms() {
    getFilmsByPopularity().then(data => setMovies(data.results));
  }

  function handleTextInput(e: React.ChangeEvent<HTMLInputElement>){
    setTextInput(e.target.value)
  }

  function loadFilmByText(){
    if (textInput.length > 0) {
      getFilmsFromApiWithSearchedText(textInput).then(data => setMovies(data.results))
    }
  }

  return (
    <div className="App">
      <Layout/>
      <TextInput onChange={handleTextInput} value={textInput} placeholder={'Chercher ici'}/>
      <FlexContainer>
        {
          movies.map((res:Movies) =>(
            <Poster data={res}/>
          ))
        }
      </FlexContainer>
    </div>
  );
}

export default App;
