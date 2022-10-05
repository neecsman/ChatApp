import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import { Auth, Home } from "pages";

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
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Auth />}>
            {/* <Route path="/login" element={<Auth />} /> */}
            <Route path="/register" element={<Auth />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
