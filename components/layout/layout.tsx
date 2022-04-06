import React from "react";
import Menu from "./menu";

interface LayoutProps {
  children: React.ReactElement;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Menu />
      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;
