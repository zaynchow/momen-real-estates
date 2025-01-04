import DesktopHeader from "./Header/DesktopHeader";
import MobileHeader from "./Header/MobileHeader";
import { useMediaQuery } from "react-responsive";

const Header = ({ path }) => {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  console.log(isMobile);
  return isMobile ? (
    <MobileHeader path={path} />
  ) : (
    <DesktopHeader path={path} />
  );
};

export default Header;
