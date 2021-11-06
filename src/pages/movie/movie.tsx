import {useEffect, useState} from "react";
import { useParams  } from "react-router-dom";
import {getFilmById} from '../../API/TMDBApi'
import Layout from "../../components/Layout/Layout";
import styled from 'styled-components'


export default function Movie(){
  const params =  useParams()
  const [movie, setMovie] = useState([])


  useEffect(() =>{
    loadMovieById()
  }, [])

  function loadMovieById(){
    if(params.movieId){
      getFilmById(params.movieId).then(data => setMovie(data));
    }
  }

  return(
    <>
      <Layout/>
        <h1>{params.movieId}</h1>
    </>

  )
}
