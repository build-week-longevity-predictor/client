import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu,PageHeader,Button,Icon } from "antd";
import UserProfileDropdown from './UserProfileDropdown'





const menu = (
    <Menu>
        <Menu.Item key="11">Operation</Menu.Item>
        <Menu.Item key="22">Operation</Menu.Item>
        <Menu.Item key="33">Operation</Menu.Item>
    </Menu>
);


        const Navigation = props => {
        const isMainPage = ["","/"].includes(props.history.location.pathname );
        const pageHeaderOnBack = isMainPage?{}:{onBack:() => window.history.back()};
          return (
                    <div>
                        <PageHeader
                            {...pageHeaderOnBack}
                            title={<div style={{marginTop:"7px"}}>Basketball Player Stats</div>}
                            subTitle="Find Your Player"
                            extra={[<UserProfileDropdown />]}
                        />
                    </div>
                );}

export default Navigation;          