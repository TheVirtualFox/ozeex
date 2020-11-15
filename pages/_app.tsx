import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from "../global/styles/global-style.styled";
import {theme} from "../global/styles/global-theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    </>
  );
}

export default MyApp
