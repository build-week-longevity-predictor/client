import React from "react";
import { Dropdown, Menu, Icon } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../action/User";

const UserProfileDropdown = ({history, loggedIn, logoutUser }) => {
      const logout = (cb) => {
        logoutUser()
        setTimeout(cb, 100);
      }

 
  return (

  <Dropdown
    overlay={
      <Menu>
        {loggedIn ? (
          <Menu.Item key="0">
            <span onClick={() => logout(()=> history.push('/'))}>Logout</span>
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
)};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileDropdown));
