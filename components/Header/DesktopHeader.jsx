import Image from "next/image";
import Logo from "../../public/logo/MREL-Logo.png";
import styled from "styled-components";
import Link from "next/link";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${(props) => (props.path === "/" ? "auto" : "90px")};
  margin: auto;
  align-items: center;

  .header {
    display: flex;
    justify-content: space-between;
    width: 94%;
    height: 90px;
    margin: auto;
    align-items: center;
    background-image: url(../public/bg-lines.png);
    background-repeat: repeat;
    background-position: center top;
  }

  #header-logo {
    display: inline-block;
    height: 8.5rem;
    width: 8.5rem;
    position: absolute;
    left: 2rem;
    top: 2rem;
  }

  navbar {
    z-index: 2;
    /* position:absolute;  */
    right: 5.6rem;
    top: 1.3rem;
  }

  navbar ul {
    list-style: none;
    display: flex;

    column-gap: 50px;
    color: white;
  }
  navbar ul li a {
    font-weight: 600;
    font-size: 1.1rem;
  }

  .nav.home {
    z-index: 2;
    position: absolute;
    right: 5.6rem;
    top: 1.3rem;
  }

  .nav ul {
    list-style: none;
    display: flex;

    column-gap: 50px;
    color: black;
  }

  .home ul {
    color: white;
  }

  navbar ul li a {
    font-weight: 600;
  }

  .header.home {
    width: 100%;
    height: auto;
  }
`;

const DesktopHeader = ({ path }) => {
    return (
      <HeaderWrapper path={path}>
        <div
          className={path === "/" ? "header home" : "header"}
          href="localhost:3000/"
        >
          {path === "/" ? (
            <Link id="header-logo" href="/">
              <Image src={Logo} alt="logo" layout="fill" />
            </Link>
          ) : (
            <Link href="/">
              <Image src={Logo} alt="logo" id="logo" height={75} width={85} />
            </Link>
          )}
          <navbar className={path === "/" ? "nav home" : "nav"}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </navbar>
        </div>
      </HeaderWrapper>
    );
};

export default DesktopHeader;
