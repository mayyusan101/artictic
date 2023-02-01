import { Link } from 'react-scroll';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import themeList from '../data/themeList';

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'};
  border-color: var(--lightBlue_1);
  border-bottom: 1px solid var(--mediumSlateBlue);
  z-index: 10;

  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }
  ul li {
    display: inline-block;
    margin: 0 0.5rem;
  }
  a {
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
    &:hover {
      text-decoration: underline;
    }
  }
  a.active {
    text-decoration: underline;
  }
  .navMenu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .menuIcon,
  .closeIcon {
    width: 30px;
    height: 30px;
    margin-left: 15px;
    padding: 3px;
    display: none;
    svg {
      width: 100%;
      height: 100%;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
    }
    &:hover {
      background-color: #8080803b;
    }
  }
  .navOverLayArea {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: var(--darkBlue_3);
    opacity: 0.4;
  }
  @media screen and (max-width: 768px) {
    nav {
      display: none;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 80%;
      max-width: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: ${({ theme: { theme } }) =>
        theme === themeList.light ? 'var(--lightBlue_2)' : 'var(--darkBlue_4)'};
      transform: translateX(100%);
      z-index: 100;
      transition: all 0.3s ease;
      overflow: hidden;
    }
    ul li {
      display: block;
      margin: 1rem 0;
      padding: 1rem 0;
    }
    .open {
      display: flex;
      transform: translateX(0);
      box-shadow: -1px 4px 10px 3px rgb(0 0 0 / 16%);
    }
    .menuIcon {
      display: block;
    }
    .closeIcon {
      display: block;
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }
`;
function Header() {
  const [open, setOpen] = useState(false);
  const currentScrollY = useRef(0);
  const headerRef = useRef(null);

  useEffect(() => {
    function disableScroll() {
      document.body.style.overflow = 'hidden';
    }
    function enableScroll() {
      document.body.style.overflow = '';
    }

    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [open]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      currentScrollY.current = window.scrollY;
      if (currentScrollY.current > 50) {
        console.log(currentScrollY.current);
        headerRef.current.style.boxShadow =
          '0px 0px 10px 0px rgba(0, 0, 0, 0.5)';
      } else {
        headerRef.current.style.boxShadow = 'none';
      }
    });
  }, []);

  return (
    <HeaderStyles ref={headerRef}>
      <div className="container">
        <div className="navigation">
          <Logo />
          <div className="navMenu">
            <nav className={open ? 'open' : ''}>
              <div
                className="closeIcon"
                role="button"
                tabIndex="0"
                onClick={() => setOpen(false)}
                onKeyDown={() => setOpen(false)}
              >
                <FiX />
              </div>
              <ul>
                <li>
                  <Link to="hero" smooth activeClass="active" spy>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="services" smooth activeClass="active" spy>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth activeClass="active" spy>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth activeClass="active" spy>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            {open && (
              <div
                className="navOverLayArea"
                role="button"
                tabIndex="0"
                onClick={() => setOpen(false)}
                onKeyDown={() => setOpen(false)}
                aria-label="overlay"
              />
            )}
            <ThemeSwitcher />
            <div
              className="menuIcon"
              role="button"
              tabIndex="0"
              onClick={() => setOpen(true)}
              onKeyDown={() => setOpen(true)}
            >
              <FiMenu />
            </div>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
