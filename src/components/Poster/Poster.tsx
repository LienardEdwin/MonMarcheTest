import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  data: {
    id: number
    poster_path: string
    title: string
  }
}

const ImgMovie = styled.img `
    height: 200px;
    width: 200px;
    padding: 10px;
  `

function Poster(props:Props){
  const {data} = props

  return(
    <Link to={`/movie/${data.id}`} key={data.id}>
      <ImgMovie src={'https://image.tmdb.org/t/p/w300' + data.poster_path} alt={data.title} title={data.title}/>
    </Link>
  )
}

export default Poster
