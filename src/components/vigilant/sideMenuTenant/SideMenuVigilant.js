import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks";
import "./SideMenuVigilant.scss";

export function SideMenuVigilant(props) {
  const { children } = props;
  const { pathname } = useLocation();

  return (
    <div className="side-menu-admin">
      <MenuLeft pathname={pathname} />
      <div className="content">{children}</div>
    </div>
  );
}

function MenuLeft(props) {
  const { pathname } = props;
  const { auth } = useAuth();

  return (
    <Menu fixed="left" borderless className="side" vertical>
      <Menu.Item as={Link} to={"/vigilant"} active={pathname === "/vigilant"}>
        <Icon name="home" /> Home
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={"/vigilant/access"}
        active={pathname === "/vigilant/access"}
      >
        <Icon name="address book" /> accesos
      </Menu.Item>

    </Menu>
  );
}