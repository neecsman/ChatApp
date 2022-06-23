import React from "react";
import { Route, Routes } from "react-router";
import { LoginForm, RegisterForm } from "modules";

import "./Auth.scss";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Routes>
          <Route path="/*" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </section>
  );
};

export default Auth;
