import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/loginForm/Login";
import Register from "./components/registerForm/Register";
import "./App.css";
import { Layout, Menu } from "antd";

import "antd/dist/antd.css";

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout className="layout">
      <Router>
        <Route path="/" component={Navigation} />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />

        <Content style={{ padding: "0 50px" }} />
      </Router>
      <Footer style={{ textAlign: "center" }}>Copywrite 2019</Footer>
    </Layout>
  );
}

export default App;
