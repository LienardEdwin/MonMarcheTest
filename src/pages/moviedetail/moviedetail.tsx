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
  overview: string
  vote_average: number
  id: number
  poster_path: string
}

export default function MovieDetail(){
  const params =  useParams()
  const [movie, setMovie] = useState<Movie | null>()

  useEffect(() =>{
    loadMovieById()
  }, [])

  function loadMovieById(){
    if(params.movieId){
      getFilmById(params.movieId).then((data:Movie) => setMovie(data));
    }
  }
  
  return(
    <>
      <Layout/>
      <MainContainer>
        <DescriptionContainer>
          <p>{movie?.title}</p>
          <p>{movie?.overview}</p>
          <p>{movie?.vote_average} / 10</p>
        </DescriptionContainer>
        <PosterContainer>
          <Poster data={movie}/>
        </PosterContainer>
        <PosterContainer/>
      </MainContainer>
    </>
  )
}
