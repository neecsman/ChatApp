import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router";

import { Auth, Home } from "pages";
import { Dialogs, Users } from "./containers";
import { Profile } from "./components";
import { LoginForm, RegisterForm } from "modules";

import { checkAuth } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const { isAuth } = users;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Routes>
        {isAuth ? (
          <Route path="/*" element={<Home />}>
            <Route path="users" element={<Users />} />
            <Route index element={<Dialogs />} />
            <Route path="account" element={<Profile />} />
          </Route>
        ) : (
          <Route path="/*" element={<Auth />}>
            {/* <Route path="/login" element={<Auth />} /> */}
            <Route index element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="*" element={<LoginForm />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
