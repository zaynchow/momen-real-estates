import Image from "next/image";
import Logo from "../public/logo/MREL-Logo.png";

const Header = ({ path }) => {
  return (
    <div className="header">
      {path === "/" ? (
        <span id="header-logo">
          <Image src={Logo} alt="logo" layout="fill" />
        </span>
      ) : (
        <div></div>
      )}
      <navbar>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>{" "}
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="news-events">News & Events</a>
          </li>
          <li>
            <a href="/career">Career</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </navbar>
    </div>
  );
};

export default Header;
