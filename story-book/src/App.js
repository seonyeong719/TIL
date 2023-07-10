import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/global";
import { theme } from "./Styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
