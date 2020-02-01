import '../css/style.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: "#202020",
  secondary: "white"
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}