import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactElement, useEffect, useState } from 'react';
import { Theme } from '@mui/material/styles/createTheme';
import { Home } from './components/home/home';

const getThemePallete = (isOnDarkMode: boolean): Theme => {
  return createTheme({
    palette: {
      mode: isOnDarkMode ? "dark" : "light"
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "20px"
          }
        }
      }
    }
  });
}

export const DGAViagensApp = (): ReactElement => {
  const lightThemePallete = getThemePallete(false);
  const [dgaViagensAppTheme, setDGAViagensAppTheme] = useState(lightThemePallete);
  
  const defineThemePallete = (event: any) => {
    const isOnDarkMode = event.matches;
    const theme = getThemePallete(isOnDarkMode);
    setDGAViagensAppTheme(theme);
  }

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => defineThemePallete(event));
    const isOnDarkMode =  window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isOnDarkMode) {
      const darkThemePallete = getThemePallete(isOnDarkMode);
      setDGAViagensAppTheme(darkThemePallete);
    }
  }, []);

  return (
    <ThemeProvider theme={dgaViagensAppTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}