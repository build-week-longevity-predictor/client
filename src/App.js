import React from "react";
import { Route, Switch } from "react-router-dom";
import TopNavBar from "./components/navigation/TopNavBar";
import SideNavBar from "./components/navigation/SideNavBar";
import Login from "./components/loginForm/Login";
import Register from "./components/registerForm/Register";
import Welcome from "./components/welcome/Welcome";
import AllUsers from "./components/admin/AllUsers";
import "./App.css";
import { Layout } from "antd";
import PrivateRoute from "./utilities/PrivateRoute";
import Predictor from "./components/predictor/Predictor";
import UsersList from "./components/predictor/UsersList";
//import UsersList from './components/users/UsersList'
import Players from "./components/players/Players";

function App() {
  const { Footer, Content, Header } = Layout;
  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <Layout>
        <TopNavBar />

        <Layout>
          <SideNavBar />
          <Layout style={{ padding: '0 24px 24px',margin: "18px 12px 0" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: "76.1vh"
              }}
            >
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/allUsers" component={AllUsers} />
                <PrivateRoute exact path="/predictor" component={Predictor} />
                <PrivateRoute exact path="/users" component={UsersList} />
                <PrivateRoute exact path="/players" component={Players} />
              </Switch>
            </Content>
            </Layout>
        </Layout>
        <Footer style={{ textAlign: "center" }}>Copyright 2019</Footer>
      </Layout>
    </div>
  );
}
export default App;
