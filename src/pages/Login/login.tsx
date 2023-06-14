import './login.css'
import React from 'react';
import Button from "../../components/button/button";
import Input from '../../components/input/input';
import Checkbox from '../../components/checkbox/checkbox';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/login.hook';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const loginHook = useLogin();
  return (
    <div className="login">
      <div className='login-logo'>
        <img src="logo.png" alt="logo" width={70} />
        <div className='logo-text'>
          <h4>Time Wise</h4>
          <h5>track your time wisely</h5>
        </div>
      </div>
      <h3>Welcome Back!</h3>
      <form onSubmit={loginHook.submitHandler}>
        <Input name="email" label="Email" type='email' required />
        <Input name="password" label="Password" type={showPassword ? "text" : "password"} required />
        <Checkbox label="show password" style={{ "color": "var(--primary-color)" }} checked={showPassword} setChecked={setShowPassword} />
        <Button label="Log in" primary />
        <Link to="/signup">don't have an account?</Link>
      </form>
    </div>
  )
}
export default Login;