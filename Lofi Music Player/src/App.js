import "./App.css";
import Home from "./Pages/Home/Home";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#04293a",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
