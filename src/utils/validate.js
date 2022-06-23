const validateFunc = ({ isAuth, values, errors }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = "Введите email адрес";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Неправильный email адрес";
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = "Введите пароль";
      } else if (!/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/i.test(value)) {
        errors.password = isAuth ? "Неверный пароль" : "Слишком легкий пароль";
      }
    },
  };

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};

export default validateFunc;
