import React from "react";
import { Link } from "react-router-dom";
import { Input, Form } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Block } from "components";

const validate = (key, touched, errors) => {
  if (touched[key]) {
    if (errors[key]) {
      return "error";
    } else {
      return "success";
    }
  } else {
    return "";
  }
};

const LoginForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form
          onSubmit={handleSubmit}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            hasFeedback
            validateStatus={validate("email", touched, errors)}
            name="email"
            help={!touched.email ? "" : errors.email}
          >
            <Input
              id="email"
              size="large"
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            validateStatus={validate("password", touched, errors)}
            name="password"
            help={!touched.password ? "" : errors.password}
          >
            <Input
              id="password"
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            <Button onClick={handleSubmit} size="large" type="primary">
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/register">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;
