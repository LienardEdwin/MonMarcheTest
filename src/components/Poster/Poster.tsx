import React from 'react'
import styled from "styled-components";

type Props = {
  data: {
    poster_path: string
    title: string
  }
}

function Poster(props:Props){
  const {data} = props

  const Poster = styled.img `
    height: 200px;
    width: 200px;
    padding: 10px;
  `

  return(
    <Poster src={'https://image.tmdb.org/t/p/w300' + data.poster_path} alt={data.title} title={data.title}/>
  )
}

export default Poster
