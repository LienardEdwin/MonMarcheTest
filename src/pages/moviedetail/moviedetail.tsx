import {useEffect, useState} from "react";
import { useParams  } from "react-router-dom";
import {getFilmById} from '../../API/TMDBApi'
import styled from 'styled-components'
import Poster from '../../components/Poster/Poster'
import {Movie} from '../../types/Movie'

const MainContainer = styled.div `
  display: flex;
  margin-top: 20px;
  @media only screen and (min-width:321px) and (max-width:1024px)
  {
    flex-direction: column;
    text-align: center;
  }
`

const MovieTitle = styled.h2 `
  margin: 20px;
`

const MovieRating = styled.p `
  margin: 20px;
`

const MovieDescription = styled(MovieRating) `
  text-align: justify;
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
    <MainContainer>
      <div>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDescription>{movie.overview}</MovieDescription>
        <MovieRating>{movie.vote_average} / 10</MovieRating>
      </div>
      <div>
        <Poster data={movie}/>
      </div>
    </MainContainer>
  ) : null
}
