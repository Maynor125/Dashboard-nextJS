'use client'
import React from 'react'
import { CssBaseline } from '@mui/material'
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
import { Header } from '../header';
import darkTheme from '@/theme/darkTheme';
import ligthTheme from '@/theme/ligthTheme';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Provider from '../provider/Provider';


 

const ThemeFuntional = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = React.useState< 'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const darkThemeChosen = React.useMemo(
    () =>
      createTheme({
       ...darkTheme
      }),
    [mode],
  );
  const ligthThemeChosen = React.useMemo(
    () =>
      createTheme({
       ...ligthTheme
      }),
    [mode],
  );

    return (
    <>
     <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === 'dark' ? darkThemeChosen: ligthThemeChosen}>
        <Provider>
         <Header ColorModeContext={ColorModeContext}/>
         {children}
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}

export default ThemeFuntional