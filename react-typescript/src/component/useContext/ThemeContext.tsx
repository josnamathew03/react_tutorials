import { theme } from './theme'
import React, { createContext } from 'react'

type childrenProps ={
    children : React.ReactNode
}

export const ContextTheme = createContext(theme)

const ThemeContext = ({children}: childrenProps) => {
  return (
    <ContextTheme.Provider value={theme}>
        {children}
    </ContextTheme.Provider>
  )
}

export default ThemeContext
