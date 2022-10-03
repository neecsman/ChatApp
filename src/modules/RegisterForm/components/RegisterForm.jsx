import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Input, Form } from "antd";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  ExclamationCircleTwoTone,
} from "@ant-design/icons";
import { Button, Block } from "components";

const RegisterForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  const userData = useSelector((state) => state.user);
  console.log(userData);

  const { isAuth } = userData;

  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!isAuth ? (
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
              validateStatus={
                !touched.email ? "" : errors.email ? "error" : "success"
              }
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
            <Form.Item name="username">
              <Input
                id="fullname"
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Логин"
                value={values.name}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              validateStatus={
                !touched.password ? "" : errors.password ? "error" : "success"
              }
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
            <Form.Item
              hasFeedback
              validateStatus={
                !touched.aproved_password
                  ? ""
                  : errors.aproved_password
                  ? "error"
                  : "success" && values.password !== values.aproved_password
                  ? "error"
                  : "success"
              }
              name="aproved_password"
              help={!touched.aproved_password ? "" : errors.aproved_password}
            >
              <Input
                id="aproved_password"
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Подтвердите пароль"
                value={values.aproved_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Button onClick={handleSubmit} size="large" type="primary">
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <ExclamationCircleTwoTone style={{ fontSize: "50px" }} />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              Мы отправили письмо Вам на почту со ссылкой для подтверждения
              вашего аккаунта.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
