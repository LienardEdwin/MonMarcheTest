import {useEffect, useState} from "react";
import { useParams  } from "react-router-dom";
import {getFilmById} from '../../API/TMDBApi'
import Layout from "../../components/Layout/Layout";
import styled from 'styled-components'
import Poster from '../../components/Poster/Poster'

const MainContainer = styled.div `
  display: flex;
`

const DescriptionContainer = styled.div `

`
const PosterContainer = styled.div `

`

type Movie = {
  title: string
}

export default function MovieDetail(){
  const params =  useParams()
  const [movie, setMovie] = useState<Movie | any>([])

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
      <MainContainer>
        <DescriptionContainer>
          <p>{movie.title}</p>
          <p>{movie.overview}</p>
          <p>{movie.vote_average} / 10</p>
        </DescriptionContainer>
        <PosterContainer>
          <Poster data={movie}/>
        </PosterContainer>
        <PosterContainer/>
      </MainContainer>
    </>
  )
}
