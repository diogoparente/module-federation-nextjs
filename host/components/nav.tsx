import React, { cloneElement } from "react";
import Link from "next/link";

const NavLink = ({ children, href }) => {
  return (
    <Link href={href} style={{ marginRight: "1rem" }}>
      {children}
    </Link>
  );
};

const Nav = () => (
  <nav style={{ display: "flex", height: "4rem", alignItems: "center" }}>
    <NavLink href="/">Host</NavLink>
    <NavLink href="/remote/react">React remote</NavLink>
  </nav>
);

export default Nav;
