import './login.css'
import React from 'react';
import Button from "../../components/button/button";
import Input from '../../components/input/input';
import Checkbox from '../../components/checkbox/checkbox';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
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
      <form action="">
        <Input label="Email" type='email' required />
        <Input label="Password" type={showPassword ? "text" : "password"} required />
        <Checkbox label="show password" style={{ "color": "var(--primary-color)" }} checked={showPassword} setChecked={setShowPassword} />
        <Button label="Log in" primary />
      </form>
    </div>
  )
}
export default Login;