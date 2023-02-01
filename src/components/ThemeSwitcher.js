import React, { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import styled from 'styled-components';
import ThemeContext from '../contexts/ThemeContext';
import themeList from '../data/themeList';

const ThemeSwitcherStyles = styled.div`
  label {
    --size: 20px;
    --gap: 5px;
    width: 55px;
    height: 30px;
    background-color: #cfc8f4;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    position: relative;
    z-index: 1;
  }
  .icons {
    width: var(--size);
    height: var(--size);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    cursor: pointer;
  }
  svg {
    width: 75%;
  }
  label::after {
    position: absolute;
    content: '';
    top: 50%;
    transform: translateY(-50%);
    left: var(
      --gap
    ); // same as 0.5rem bcz in global style set html{font-size:10px}
    width: var(--size);
    height: var(--size);
    background-color: var(--mediumSlateBlue);
    border-radius: 50%;
    z-index: -1;
    transition: all 0.3s ease;
  }
  input:checked + label::after {
    left: calc(
      100% - var(--size) - var(--gap)
    ); // restart the starting point left
  }
  input {
    width: 0;
    height: 0;
    display: none;
    visibility: none;
  }
`;
function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <ThemeSwitcherStyles>
      <input
        type="checkbox"
        id="switcher"
        checked={theme === themeList.dark}
        onChange={toggleTheme}
      />
      <label htmlFor="switcher">
        <div className="icons">
          <FiSun />
        </div>
        <div className="icons">
          <FiMoon />
        </div>
      </label>
    </ThemeSwitcherStyles>
  );
}

export default ThemeSwitcher;
