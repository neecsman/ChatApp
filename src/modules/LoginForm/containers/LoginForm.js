import { withFormik } from "formik";
import { connect } from "react-redux";
import LoginForm from "../components/LoginForm";
import validateFunc from "utils/validate";
import { login } from "../../../redux/userSlice";

export default connect()(
  withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      email: "",
      password: "",
    }),

    validate: (values) => {
      let errors = {};
      validateFunc({ isAuth: true, values, errors });

      return errors;
    },

    handleSubmit: (values, { props, setSubmitting }) => {
      props.dispatch(login(values));
    },

    displayName: "LoginForm",
  })(LoginForm)
);
