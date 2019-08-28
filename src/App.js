import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import NavBar from "./components/navigation/NavBar";
import Login from "./components/loginForm/Login";
import Register from "./components/registerForm/Register";
import Welcome from "./components/welcome/Welcome";
import AllUsers from "./components/admin/AllUsers";
import "./App.css";
import { Layout } from "antd";

//import "antd/dist/antd.css";

function App() {
  const { Footer, Content } = Layout;
  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <Layout>
        <NavBar/>
        {/* <Route path="/" component={NavBar} /> */}
        <Layout>
          <Route path="/" component={Navigation} />
          <Route exact path="/" component={Welcome} />

          <Layout.Header
            style={{ background: "#fff", padding: 0 }}
            theme="light"
          ></Layout.Header>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/allUsers" component={AllUsers} />

          <Content style={{ padding: "0 50px" }} />
          <Footer style={{ textAlign: "center" }}>Copyright 2019</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
