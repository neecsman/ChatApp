import React from "react";
import { Route, Routes, Outlet } from "react-router";
import { LoginForm, RegisterForm } from "modules";

import "./Auth.scss";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Outlet />
      </div>
    </section>
  );
};

export default Auth;
