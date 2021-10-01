import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function useForm({ initialValues, validation, onSubmit }) {
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
    handleSubmit,
    handleChange
  }
}
function FormComponent() {
  const { handleChange, handleSubmit, values, errors } = useForm({
    initialValues: { 
      account: "",
      password: "", 
      rememberMe: false
    },
    validation: (values) => {
      const errors = {}
      if (!values.account) {
        errors.account = "請輸入帳號"
      } else if (!values.password) {
        errors.password = "請輸入密碼"
      }
        return errors
    },
    onSubmit: (values) => console.table(values),
  })
  return (
    <>
      <input 
        name="account" 
        onChange={handleChange} 
        value={values.account} 
        placeholder="Account" 
      />
      {errors.account && (<div>{errors.account}</div>)}
      <br/>
      <input 
        name="password" 
        onChange={handleChange} 
        value={values.password} 
        placeholder="password"
      />
      {errors.password && (<div>{errors.password}</div>)}
      <br/>
      <label>
        <input 
          type="checkbox" 
          name="rememberMe" 
          // onChange={handleChange} 
          checked={values.rememberMe} 
        />Remember Me
      </label>
      <br/>
      <button onClick={handleSubmit}>Login</button>
    </>
  )
}
  
class App extends React.Component {
  render() {
    return <FormComponent />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
