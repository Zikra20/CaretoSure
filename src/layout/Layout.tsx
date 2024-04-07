import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import ScrollToTop from "../utils/ScrollToTop";

const Layout = () => {
  return (
    <div>
      <ScrollToTop />

      <header>
        <Navbar />
      </header>

      <main className="max-w-[2300px] my-0 mx-auto overflow-x-hidden">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
