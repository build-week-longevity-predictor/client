import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Layout, Menu, Icon } from "antd";
import { Link, withRouter } from "react-router-dom";

const SideNavBar = ({ location }) => {
    const [collapse, setCollapse] = useState(true);
    const onCollapse = () => {
        setCollapse(!collapse);
    };
    const [current, setCurrent] = useState([]);

  
    useEffect(() => {
        setCurrent([location.pathname]);
    }, [location]);

    const { Sider } = Layout;
    const navBarTheme = "light";
    return (
        <Sider
            collapsible
            collapsed={collapse}
            onCollapse={onCollapse}
            theme={navBarTheme}
            style={{padding: 0}}
        >
            <Menu 
                theme={navBarTheme} 
                mode="inline" 
                selectedKeys={current}
                >
                <Menu.Item key="">
                    <Link to="/">
                        <Icon type="home" />
                        <span>Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/predictor">
                    <Link to="/predictor">
                        <Icon type="calculator" />
                        <span>Predictor</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/players">
                    <Link to="/players">
                        <Icon type="table" />
                        <span>Players</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default withRouter(connect(null)(SideNavBar));
