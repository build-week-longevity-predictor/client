import React from "react";
import { withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import UserProfileDropdown from "./UserProfileDropdown";
import { connect } from "react-redux";
import logo from "../../assets/bball-icon-white.svg";

const TopNavBar = () => {
    const { Header } = Layout;
    return (
        <Header 
            theme="light"
            style={{ padding: 0, background: "#fff",borderBottom: "1px solid #e9e9e9"  }}
            >
            <div className="logo">
                <img src={logo} alt="career longevity basketball logo" />
                Player Career Longevity Predictor
            </div>


            <UserProfileDropdown />

        </Header>
    );
};

export default withRouter(connect(null)(TopNavBar));
