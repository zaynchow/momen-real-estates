import Image from "next/image";
import Logo from "../public/logo/MREL-Logo.png";
import styled from "styled-components";
import Link from "next/link";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;


  height: ${(props) => (props.path === "/" ? "auto" : "90px")};
  margin: auto;
  align-items: center;
`;

const Header = ({ path }) => {
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
              <Link href="news-events">News & Events</Link>
            </li>
            <li>
              <Link href="/career">Career</Link>
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

export default Header;
