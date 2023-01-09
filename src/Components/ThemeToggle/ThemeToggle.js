import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import './ThemeToggleStyle.css'

const ThemeToggle = () => {

    const{toggleTheme} = useContext(ThemeContext);
    const {theme} = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={theme ? 'toggle light':'toggle dark'}>{theme ? 'Dark Theme' : 'Light Theme'}</button>
  )
}

export default ThemeToggle