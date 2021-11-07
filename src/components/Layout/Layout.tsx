import styled from 'styled-components'
import { Link } from "react-router-dom"
import Toggle from '../../components/Toggle/Toggle'
import {ThemeTogglerProps} from '../../types/Theme'
import { useLocation } from 'react-router-dom'
import {useState} from "react";

const Header = styled.div `
  background-color: #60A5FA;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`

const Text = styled.h1 `
  color: #FFFF
`

const BackButton = styled.button `
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const TitleContainer = styled.div `
  
`

const ToggleContainer = styled.div `
`

const ContainerButton = styled.div `
`

function Layout({themeToggler}: ThemeTogglerProps){
  const location = useLocation()

  return(
    <>
      <Header>
        <ContainerButton>
          {
            location.pathname !== '/' && <Link to={'/'}>
              <BackButton>
                <span className="material-icons">arrow_back</span>
              </BackButton>
            </Link>
          }
        </ContainerButton>
        <TitleContainer>
          <Text>Movies</Text>
        </TitleContainer>
        <ToggleContainer>
          <Toggle themeToggler={themeToggler}/>
        </ToggleContainer>
      </Header>
    </>


  )
}

export default Layout
