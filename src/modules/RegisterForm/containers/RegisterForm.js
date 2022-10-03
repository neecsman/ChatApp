import { withFormik } from "formik";
import { connect } from "react-redux";
import RegisterForm from "../components/RegisterForm";
import validateFunc from "utils/validate";
import { registration } from "../../../redux/userSlice";

export default connect()(
  withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      email: "",
      password: "",
      fullname: "",
      aproved_password: "",
    }),

    validate: (values) => {
      let errors = {};
      validateFunc({ isAuth: false, values, errors });

      return errors;
    },

    handleSubmit: (values, { props, setSubmitting }) => {
      props.dispatch(registration(values));
    },

    displayName: "RegisterForm",
  })(RegisterForm)
);
