import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../../action/User";
import { Field, withFormik, Formik } from "formik";
import * as Yup from "yup";
import {
  Form,
  List,
  Input,
  Icon,
  Layout,
  Select,
  Checkbox,
  Button,
  Card,
  Alert
} from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};
export const LoginForm = ({
  errors,
  touched,
  values,
  handleSubmit,
  handleChange,
  handleBlur,
  status,
  setFieldValue,
  setFieldTouched,
  name
}) => {
  return (
    <Card
      title="Enter Login Credentials"
      style={{
        maxWidth: 400,
        minWidth: 400,
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      {errors.name &&
        touched.name &&
        errors.map(error => {
          return (
            <Alert
              description={error.name}
              type="error"
              style={{ marginBottom: 2 }}
              closable
            />
          );
        })}

      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item
          label="username"
          htmlFor="username"
          {...(errors.username && touched.username
            ? {
                validateStatus: "error",
                help: errors.username
              }
            : {})}
        >
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            placeholder="username"
            label="username"
            name="username"
            id="username"
            type="username"
          />
        </Form.Item>
        <Form.Item
          label="Password"
          {...(errors.password && touched.password
            ? {
                validateStatus: "error",
                help: errors.password
              }
            : {})}
        >
          <Input
            prefix={<Icon type="bank" style={{ color: "rgba(0,0,0,.25)" }} />}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="password"
            label="password"
            name="password"
            id="password"
            type="password"
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" name="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      {status && (status.token || status.success) && (
        <div>{status.token || status.success}</div>
      )}
    </Card>
  );
};

const Login = withFormik({
  mapPropsToValues({ password, username }) {
    return {
      password: password || "test123",
      username: username || "tester"
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required")
  }),
  handleSubmit: (values, { props }) => {
    props.login(values);
    //actions.setStatus({token: props.token});
  }
})(LoginForm); // currying functions in Javascript

const mapStateToProps = ({
  error,
  loggingIn,
  loggedIn,
  fetching,
  saving,
  deleting,
  token
}) => ({
  error: error,
  loggingIn: loggingIn,
  loggedIn: loggedIn,
  fetching: fetching,
  saving: saving,
  deleting: deleting,
  token: token
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
