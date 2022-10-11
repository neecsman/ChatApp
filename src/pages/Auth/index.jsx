import React from "react";
import { Outlet } from "react-router";

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
