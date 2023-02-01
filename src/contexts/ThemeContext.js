import React, { createContext, useReducer } from 'react';
import themeList from '../data/themeList';

const ThemeContext = createContext(null);
const darkTheme = themeList.dark;
const lightTheme = themeList.light;

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'Toggle-Theme':
      localStorage.setItem(
        'theme',
        state.theme === darkTheme ? lightTheme : darkTheme
      );
      return {
        theme: state.theme === darkTheme ? lightTheme : darkTheme,
      };
    default:
      return state;
  }
};

// when first render page, check browser theme
const isBrowserDefaultDark = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

// render theme
const getDefaultTheme = () => {
  const localStorageTheme = localStorage.getItem('theme');
  const browserDefault = isBrowserDefaultDark() ? darkTheme : lightTheme;
  return localStorageTheme || browserDefault;
};
const initialState = {
  theme: getDefaultTheme(),
};
export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const value = {
    theme: state.theme,
    toggleTheme: () => dispatch({ type: 'Toggle-Theme' }),
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export default ThemeContext;
