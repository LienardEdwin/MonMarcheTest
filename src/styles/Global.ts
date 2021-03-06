import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './Themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {
    //dark-mode
    --dark-background: #4B5563;
    --dark-text: #F5F5F7;

    //light-mode
    --light-background: #FFFFF;
    --light-text: black;

  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  #root{
    width: 100%;
  }
  body  {
    margin: 0 auto;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2{
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }
  p{
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }
  span{
    color: #FFFF
  }
`;

export default withTheme(globalStyle);
