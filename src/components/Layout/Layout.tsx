import React from 'react'
import styled from 'styled-components'

const Header = styled.div `
  height: 50px;
  background-color: #60A5FA;
`

const Text = styled.h1 `
  color: #FFFFFF;
`

function Layout(){
  return(
    <Header>
      <Text>Movies</Text>
    </Header>

  )
}

export default Layout
