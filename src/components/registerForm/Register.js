import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../action/User";
import { withFormik } from "formik";
import * as Yup from "yup";
import { Form, message, Input, Icon, Button, Card, Alert } from "antd";

message.config({
  top: 100,
  maxCount: 1
});

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
  name,
  loginStatus,
  message,
  error
}) => {
  return (
    <Card
      title="Register New User"
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
        {errors.signup &&
          message.error(errors.signup.response.data.message.detail)}
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
      {loginStatus === "yes" && <Redirect to={"/"} />}
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
    username: Yup.string()
      .required("Required")
      .min(2, "Min 2")
      .max(50, "Max 50"),
    password: Yup.string()
      .required("Required")
      .min(2, "Min 6")
      .max(50, "Max 50"),
    email: Yup.string()
      .required("Required")
      .email("Invalid email")
  }),
  handleSubmit: (values, { props, setErrors, setSubmitting }) => {
    props.signUp(values, props, setErrors, setSubmitting);
  }
})(RegisterForm);

const mapStateToProps = state => ({
  loginStatus: state.user.loginStatus,
  message: state.user.message,
  error: state.user.error
});

const mapDispatchToProps = dispatch => ({
  signUp: (values, props, setErrors, setSubmitting) => {
    dispatch(signUp(values, props, setErrors, setSubmitting));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
