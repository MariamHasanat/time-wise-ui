import './signup.css'
import React from 'react';
import Button from "../../components/button/button";
import Input from '../../components/input/input';
import Checkbox from '../../components/checkbox/checkbox';
import { Link, useNavigate } from 'react-router-dom';
import showMessage from '../../utils/message/message';
import { signup } from '../../services/users';
interface ISignup {
  username: string,
  email: string,
  password: string
}

const checkPasswords = (data: any) => {
  return data.get('password1') === data.get('password2');
}

const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  if (!checkPasswords(data)) {
    showMessage('error', 'passwords do not match');
  }
  else {
    const user: ISignup = {
      username: data.get('username') as string,
      email: data.get('email') as string,
      password: data.get('password1') as string
    }
    signup(user);
    // if everything is ok, go to '/login'
  }
}
const Signup = () => {
  const navigate = useNavigate();
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
      <form onSubmit={(e) => { submitHandler(e); }}>
        <Input name='username' label="Username" required />
        <Input name='email' label="Email" type='email' required />
        <Input name='password1' label="Password" type={showPassword ? "text" : "password"} required />
        <Input name='password2' label="Confirm Password" type={showPassword ? "text" : "password"} required />
        <Checkbox label="show password" style={{ "color": "var(--primary-color)" }} checked={showPassword} setChecked={setShowPassword} />
        <Button label="Sign up" primary={true} />
        <Link to="/login">already have an account?</Link>
      </form>
    </div>
  )
}
export default Signup;