import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signUp } from "../../action/User";
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
export const RegisterForm = ({
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
      title="Register as a New User"
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
          label="Email"
          htmlFor="email"
          {...(errors.email && touched.email
            ? {
                validateStatus: "error",
                help: errors.email
              }
            : {})}
        >
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="email"
            label="email"
            name="email"
            id="email"
            type="email"
          />
        </Form.Item>
        <Form.Item
          label="Username"
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
            Register
          </Button>
        </Form.Item>
      </Form>
      {status && (status.registration || status.success) && (
        <div>{status.registration || status.success}</div>
      )}
    </Card>
  );
};

const Register = withFormik({
  mapPropsToValues({ password, username, email }) {
    return {
      password: password || "test123",
      username: username || "tester",
      email: email || "test@mail.com"
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    email: Yup.string().required("Required")
  }),
  handleSubmit: (values, { props }) => {
    props.signUp(values);
  }
})(RegisterForm); // currying functions in Javascript

//export default Register;

const mapStateToProps = ({
  error,
  loggingIn,
  loggedIn,
  fetching,
  saving,
  deleting
}) => ({
  error: error,
  loggingIn: loggingIn,
  loggedIn: loggedIn,
  fetching: fetching,
  saving: saving,
  deleting: deleting
});

export default connect(
  null,
  { signUp }
)(Register);
