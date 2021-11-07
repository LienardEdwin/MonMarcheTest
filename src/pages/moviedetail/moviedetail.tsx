import {useEffect, useState} from "react";
import { useParams  } from "react-router-dom";
import {getFilmById} from '../../API/TMDBApi'
import styled from 'styled-components'
import Poster from '../../components/Poster/Poster'
import {Movie} from '../../types/Movie'

const MainContainer = styled.div `
  display: flex;
`

const DescriptionContainer = styled.div `

`
const PosterContainer = styled.div `

`

export default function MovieDetail(){
  const params =  useParams()
  const [movie, setMovie] = useState<Movie | undefined>()


  useEffect(() =>{
    loadMovieById()
  }, [])

  function loadMovieById(){
    if(params.movieId){
      getFilmById(params.movieId).then((data:Movie) => setMovie(data));
    }
  }

  return movie ?(
    <>
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
  ) : null
}
