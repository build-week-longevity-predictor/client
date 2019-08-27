import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import UserProfileDropdown from './UserProfileDropdown'
import { blue } from '@ant-design/colors';

function Navigation() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        //>defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Login</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/register">Register</Link>
        </Menu.Item>
            <div style={{ float: "right", padding: "0 20px", fontSize: 20 }}>
              <UserProfileDropdown />
            </div>        
      </Menu>
    </Header>
  );
}

export default Navigation;
