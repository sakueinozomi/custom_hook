import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function useForm({ initialValues, validation, onSubmit }) {
<<<<<<< HEAD
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const handleChange = ({ target }) => {
    const val = target.value;
    const name = target.name;
    const newVal = Object.assign({}, values, { [name]: val });
    const err = validation(newVal);
    setValues(newVal);
    setErrors(err);
  };
  const handleSubmit = () => {
    const err = validation(values);
    setErrors(err);
    if (Object.keys(err).length > 0) {
      console.log(err);
    } else {
      onSubmit(values);
    }
  };
  return {
    handleChange,
=======
  const [values, setValues] = useState(initialValues); //set form data to value
  const [errors, setErrors] = useState(validation); // validation return the error msg
  const handleSubmit = () => {
  }
  const handleChange = ({target}) => {
    const val = target.value;
    const name = target.name;
  }
  return {
    values,
    errors,
>>>>>>> b04bc89709a76e480d40f26993f280815d0e332b
    handleSubmit,
    values,
    errors
  };
}

function FormComponent() {
  const { handleChange, handleSubmit, values, errors } = useForm({
    initialValues: {
      account: "",
      password: "",
      rememberMe: false
    },
    validation: (values) => {
      const errors = {};
      if (!values.account) {
        errors.account = "請輸入帳號";
      } else if (!values.password) {
        errors.password = "請輸入密碼";
      }
      return errors;
    },
    onSubmit: (values) => console.table(values)
  });

  return (
    <React.Fragment>
      <input
        name="account"
        onChange={handleChange}
        value={values.account}
        replaceholder="Account"
      />
      <br />
      {errors.account && <div>{errors.account}</div>}
      <input
        name="password"
        onChange={handleChange}
        value={values.password}
        replaceholder="Password"
      />
      <br />
      {errors.password && <div>{errors.password}</div>}
      <label>
        <input
          type="checkbox"
          name="rememberMe"
          onChange={handleChange}
          checked={values.rememberMe}
        />{" "}
        Remember Me
      </label>
      <br />
      <button onClick={handleSubmit}>Login</button>
    </React.Fragment>
  );
}
class App extends React.Component {
  render() {
    return <FormComponent />;
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
