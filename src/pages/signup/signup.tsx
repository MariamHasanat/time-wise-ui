import './signup.css'
import React from 'react';
import Button from "../../components/button/button";
import Input from '../../components/input/input';
import Checkbox from '../../components/checkbox/checkbox';

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  return (
    <div className="signup">
      <div className='signup-logo'>
        <img src="logo.png" alt="logo" width={70} />
        <div className='logo-text'>
          <h4>Time Wise</h4>
          <h5>track your time wisely</h5>
        </div>
      </div>
      <h3>Create a new  Account</h3>
      <form action="">
        <Input label="Username" required/>
        <Input label="Email" type='email' required/>
        <Input label="Password" type={showPassword ? "text" : "password"} required/>
        <Input label="Confirm Password" type={showPassword ? "text" : "password"} required/>
        <Checkbox label="show password" style={{ "color": "var(--primary-color)" }} checked={showPassword} setChecked={setShowPassword} />
        <Button label="Sign up" primary />
      </form>
    </div>
  )
}
export default Signup;