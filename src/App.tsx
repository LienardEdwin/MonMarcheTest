import React, {ReactChildren, ReactNode} from 'react';
import Layout from "./components/Layout/Layout";
import styled, {ThemeProvider} from 'styled-components'
import GlobalStyle from './styles/Global';
import ThemeContext from './contexts/ThemeContext';
import { lightTheme, darkTheme } from './styles/Themes';
import useThemeMode from './hooks/useThemeMode';

const MainContainer = styled.div `
  display: flex;
  justify-content: center;
`
const ChildrenContainer = styled.div `
  width: 50vw;
  @media only screen and (min-width:321px) and (max-width:1024px)
  {
    width: 100%;
    padding: 20px;
  }
`

type Props= {
  children?: ReactNode | ReactChildren
}

function App(props:Props) {
  const {children} = props
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle/>
        <Layout themeToggler={themeToggler}/>
        <MainContainer>
          <ChildrenContainer>
            {children}
          </ChildrenContainer>
        </MainContainer>
      </ThemeProvider>
    </ThemeContext>

  );
}

export default App;
