import React from "react";
import { Dropdown, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../action/User";

const UserProfileDropdown = ({ loginStatus, logoutUser }) => (
  <Dropdown
    overlay={
      <Menu>
        {loginStatus === "yes" ? (
          <Menu.Item key="0">
            <span onClick={() => logoutUser()}>Logout</span>
          </Menu.Item>
        ) : (
          <Menu.Item key="1">
            <Link to="/">Login</Link>
          </Menu.Item>
        )}
      </Menu>
    }
  >
    <Icon type="user" />
  </Dropdown>
);

const mapStateToProps = state => ({
  loginStatus: state.user.loginStatus
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileDropdown);
