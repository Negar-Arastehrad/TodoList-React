import React from "react";
import Main from "./Components/Main/Main";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <Main />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
