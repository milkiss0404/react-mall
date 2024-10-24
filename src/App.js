import "./App.css";
import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import { ThemeProvider } from './context/ThemeProvider'; // 사용자 정의 ThemeProvider import
import { GlobalStyle } from "./theme/GlobalStyle";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <RouterProvider router={root} />
    </ThemeProvider>
  );
}

export default App;
