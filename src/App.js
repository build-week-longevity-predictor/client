import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/loginForm/Login";
import Register from "./components/registerForm/Register";
import AllUsers from './components/admin/AllUsers';
import "./App.css";
import { Layout, Menu } from "antd";

import "antd/dist/antd.css";

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout className="layout">
      <Route path="/" component={Navigation} />
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/allUsers" component={AllUsers} />      

      <Content style={{ padding: "0 50px" }} />
      <Footer style={{ textAlign: "center" }}>Copywrite 2019</Footer>
    </Layout>
  );
}

export default App;
