import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/global";
import { theme } from "./Styles/theme";
import Ddd from "./selects";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Ddd />
    </ThemeProvider>
  );
}

export default App;
