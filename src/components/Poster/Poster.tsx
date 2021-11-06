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

function Poster(props:Props){
  const {data} = props
  console.log(data)

  const Poster = styled.img `
    height: 200px;
    width: 200px;
    padding: 10px;
  `

  return(
    <Link to={`/movie/${data.id}`}>
      <Poster src={'https://image.tmdb.org/t/p/w300' + data.poster_path} alt={data.title} title={data.title}/>
    </Link>
  )
}

export default Poster
