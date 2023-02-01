import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './contexts/ThemeContext';
import LandingPage from './pages/LandingPage';
import GlobalStyles from './styles/GlobleStyle';

function App() {
  const { theme } = useContext(ThemeContext);
  console.log('theme is', theme);
  return (
    <>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
        <LandingPage />
      </ThemeProvider>
    </>
  );
}
export default App;
