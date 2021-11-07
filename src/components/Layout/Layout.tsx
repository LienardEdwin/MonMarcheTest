import styled from 'styled-components'
import { Link } from "react-router-dom"
import Toggle from '../../components/Toggle/Toggle'

const Header = styled.div `
  background-color: #60A5FA;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`

const Text = styled.h1 `
  color: #FFFFFF;
`

const BackButton = styled.button `
`
const TitleContainer = styled.div `
  
`

const ToggleContainer = styled.div `
`

const ContainerButton = styled.div `
`
function Layout(){
  return(
    <Header>
      <ContainerButton>
        <Link to={'/'}>
         <BackButton>Retour</BackButton>
        </Link>
      </ContainerButton>
      <TitleContainer>
        <Text>Movies</Text>
      </TitleContainer>
      <ToggleContainer>
        <Toggle/>
      </ToggleContainer>
    </Header>

  )
}

export default Layout
