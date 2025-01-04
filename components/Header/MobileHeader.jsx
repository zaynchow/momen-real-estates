import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../public/logo/MREL-Logo.png";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import bgLines from "../../public/bg-lines.png";

const Header = styled.header`
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  transition: all 0.3s ease-in-out;
  background-color: ${({ isScrolled, isMenuOpen }) =>
    isScrolled && !isMenuOpen ? "rgba(184,184,184,0.6)" : "transparent"};
  color: white;
  position: ${({ path, isScrolled }) =>
    path === "/" ? "fixed" : isScrolled ? "fixed" : "relative"};
  width: 100%;
  z-index: 1000;
  transform: ${({ isHidden }) =>
    isHidden ? "translateY(-100%)" : "translateY(0)"};
`;

const LogoContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const IconButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FullScreenMenu = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.5s ease-in-out;

  ul {
    list-style: none;
    padding: 0;
    color: white;

    li {
      margin: 1rem 0;

      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }

      a {
        font-size: 2rem;
      }
    }
  }
`;

const MobileHeader = ({ path }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past threshold
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header
        path={path}
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        isHidden={isHidden}
      >
        <LogoContainer>
          <Link href="/">
            <Image src={Logo} alt="logo" id="logo" height={65} width={75} />
          </Link>
        </LogoContainer>
        <IconButton onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseIcon
              style={{
                fontSize: "30px",
                color: "white",
                zIndex: "100",
              }}
            />
          ) : (
            <MenuIcon
              style={{
                fontSize: "30px",
                color: path === "/" ? "white" : "black",
                zIndex: "100",
              }}
            />
          )}
        </IconButton>
      </Header>
      <FullScreenMenu isOpen={isMenuOpen}>
        <ul>
          <li>
            <Link onClick={toggleMenu} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} href="/projects">
              Projects
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </FullScreenMenu>
    </>
  );
};

export default MobileHeader;
