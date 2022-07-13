import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="layout">
      <header>
        <Header path={router.pathname} />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
