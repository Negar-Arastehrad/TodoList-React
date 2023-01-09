import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext ();

const ThemeContextProvider = (props) => {

  const[theme,setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
  }


  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider