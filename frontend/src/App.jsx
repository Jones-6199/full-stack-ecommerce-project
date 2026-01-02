import Header1 from "./Components/Header/Header1";
import Header2 from "./Components/Header/Header2";
import Header3 from "./Components/Header/Header3";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/scroll/ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />


            <Hero   />
            <Main />
            <Footer />
            

            <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
