import styled from 'styled-components'
import { Link } from "react-router-dom"


const Header = styled.div `
  background-color: #60A5FA;
  display: flex;
`

const Text = styled.h1 `
  color: #FFFFFF;
  text-align: center;
`

const BackButton = styled.button `
`
const TitleContainer = styled.div `
  display: flex;
  flex: 1;
  justify-content: center;
`

const ContainerButton = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
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
    </Header>

  )
}

export default Layout
