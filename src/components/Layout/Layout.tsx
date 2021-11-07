import styled from 'styled-components'
import { Link } from "react-router-dom"
import Toggle from '../../components/Toggle/Toggle'
import {ThemeTogglerProps} from '../../types/Theme'
import { useLocation } from 'react-router-dom'

const Header = styled.div `
  background-color: #60A5FA;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

const Text = styled.h1 `
  color: #FFFF
`

const BackButton = styled.button `
  background-color: transparent;
  border: none;
  cursor: pointer;
`

function Layout({themeToggler}: ThemeTogglerProps){
  const location = useLocation()

  return(
    <>
      <Header>
        <div>
          {
            location.pathname !== '/' && <Link to={'/'}>
              <BackButton>
                <span className="material-icons">arrow_back</span>
              </BackButton>
            </Link>
          }
        </div>
        <div>
          <Text>Movies</Text>
        </div>
        <div>
          <Toggle themeToggler={themeToggler}/>
        </div>
      </Header>
    </>


  )
}

export default Layout
