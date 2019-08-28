import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/loginForm/Login";
import Register from "./components/registerForm/Register";
import "./App.css";
import { Layout, Menu } from "antd";

import PrivateRoute from './components/PrivateRoute'
import Predictor from './components/predictor/Predictor'

import "antd/dist/antd.css";

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout className="layout">
        <Route path="/" component={Navigation} />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/Predictor" component={Predictor} />
        <Content style={{ padding: "0 50px" }} />
      <Footer style={{ textAlign: "center" }}>Copyright 2019</Footer>
    </Layout>
  );
}

export default App;
