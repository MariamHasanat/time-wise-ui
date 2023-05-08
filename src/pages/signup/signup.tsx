import './signup.css'
import Button from "../../components/button/button";
import Input from '../../components/input/input';
import Checkbox from '../../components/checkbox/checkbox';

const Signup = () => {
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
        <Input label="Username" />
        <Input label="Email" type='email' />
        <Input label="Password" type='password' />
        <Input label="Confirm Password" type='password' />
        <Checkbox label="show password" style={{ "color": "var(--primary-color)" }} />
        <Button label="Sign up" primary />
      </form>
    </div>
  )
}
export default Signup;