import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Dropdown, Menu, PageHeader, Button, Icon } from "antd";
import UserProfileDropdown from "./UserProfileDropdown";
import { connect } from 'react-redux';

const TopNavBar = props => {
    const isMainPage = ["", "/"].includes(props.history.location.pathname);
    const pageHeaderOnBack = isMainPage
        ? {}
        : { onBack: () => window.history.back() };
    return (
        <div>
            <PageHeader
                {...pageHeaderOnBack}
                title={
                    <div style={{ marginTop: "7px" }}>
                        Basketball Player Stats
                    </div>
                }
                subTitle="Find Your Player"
                extra={[<UserProfileDropdown />]}
            />
        </div>
    );
};



const mapStateToProps = (state, props) => {
    return {...state,...props};
};
export default withRouter(connect(mapStateToProps)(TopNavBar));