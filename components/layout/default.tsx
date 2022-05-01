import React from "react";
import Menu from "./menu";

interface LayoutProps {
  children: React.ReactElement;
}
const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <main className="container">{children}</main>
    </div>
  );
};

export default DefaultLayout;
