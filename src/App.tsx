import React, {ReactChildren, ReactNode} from 'react';
import Layout from "./components/Layout/Layout";
import {ThemeProvider} from 'styled-components'
import GlobalStyle from './styles/Global';
import ThemeContext from './contexts/ThemeContext';
import { lightTheme, darkTheme } from './styles/Themes';
import useThemeMode from './hooks/useThemeMode';

type Props= {
  children: ReactNode | ReactChildren
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
        {children}
      </ThemeProvider>
    </ThemeContext>

  );
}

export default App;
