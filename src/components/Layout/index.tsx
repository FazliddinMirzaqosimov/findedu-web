import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import css from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className={css.layout}>
        <div className="container">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
