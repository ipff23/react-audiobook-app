import React from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router";

import { NavWrapper, Link } from "./Navbar.styled";

const LinkAction = ({ children, href }) => {
  const match = useRouteMatch({
    path: href,
    exact: true,
  });

  return (
    <Link isActive={match} href={href}>
      {children}
    </Link>
  );
};
LinkAction.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};
LinkAction.defaultProps = {
  href: "#",
};

const Navbar = () => {
  return (
    <NavWrapper>
      <LinkAction href="/">Browse</LinkAction>
      <LinkAction href="/add-new-book">Add New</LinkAction>
    </NavWrapper>
  );
};

export default Navbar;
