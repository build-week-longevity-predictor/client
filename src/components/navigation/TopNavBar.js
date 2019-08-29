import React from "react";
import {  withRouter } from "react-router-dom";
import { PageHeader} from "antd";
import UserProfileDropdown from "./UserProfileDropdown";
import { connect } from 'react-redux';
import logo from '../../assets/bball-icon-white.svg'

const TopNavBar = props => {
    const isMainPage = ["", "/"].includes(props.history.location.pathname);
    const pageHeaderOnBack = isMainPage
        ? {}
        // : { onBack: () => window.history.back() };
        : { onBack: () => props.history.push("/") };
    return (
        <div>
            <PageHeader
                {...pageHeaderOnBack}
                title={
                    <div style={{ marginTop: "7px" }}>
                        <img src={logo} alt="career longevity basketball logo" />
                        Player Career Longevity Predictor
                    </div>
                }
              
                extra={<UserProfileDropdown />}
            />
        </div>
    );
};

export default withRouter(connect(null)(TopNavBar));