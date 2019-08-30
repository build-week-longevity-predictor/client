import React from "react";
import { Dropdown, Menu, Icon } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../action/User";

const UserProfileDropdown = ({
  history,
  loggedIn,
  token,
  logoutUser,
  user
}) => {
  const logout = cb => {
    logoutUser();
    setTimeout(cb, 100);
  };
  return (
    <Dropdown
      overlay={
        <>
          {token ? (
            <Menu>
              <Menu.Item key="0">
                <Link to="/users">Edit Profile</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <span onClick={() => logout(() => history.push("/login"))}>
                  Logout
                </span>
              </Menu.Item>
            </Menu>
          ) : (
            <Menu>
              <Menu.Item key="0">
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/register">Register</Link>
              </Menu.Item>
            </Menu>
          )}
        </>
      }
    >
      <a className="ant-dropdown-link" href="#">
        {user ? (
          <>
            {" "}
            {user.userName} <Icon type="down" />{" "}
          </>
        ) : (
          <>
            <Icon type="user" />{" "}
          </>
        )}
      </a>
    </Dropdown>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  user: state.user.user,
  token: state.user.token
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserProfileDropdown)
);
