import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import "./SideMenuTenant.scss";

export function SideMenuTenant(props) {
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

  return (
    <Menu fixed="left" borderless className="side" vertical>
      <Menu.Item as={Link} to={"/tenant"} active={pathname === "/admin"}>
        <Icon name="home" /> Home
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={"/tenant/visit"}
        active={pathname === "/tenant/visit"}
      >
        <Icon name="calendar plus" /> Generar Invitado
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={"/tenant/payments-history"}
        active={pathname === "/tenant/payments-history"}
      >
        <Icon name="history" /> Historial de pagos
      </Menu.Item>

    </Menu>
  );
}