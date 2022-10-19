import React from 'react'
import {useTheme,useThemeUpdate} from './ThemeContext'

function ContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

  return (
    <div>
        <h1>Context Component</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div style={themeStyles}>Function Theme</div>
        
    </div>
  )
}

export default ContextComponent