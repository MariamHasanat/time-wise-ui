import './signup.css'
import Button from "../../components/button/button";
import Input from '../../components/input/input';

const Signup = () => {
  return (
    <div className="signup">
      <div className='signup-logo'>
        <img src="logo.png" alt="logo" width={70} />
        <h4>time wise</h4>
      </div>
      <h3>Create a new  Account</h3>
      <form action="">
        <Input label="Username" />
        <Input label="Email" type='email' />
        <Input label="Password" type='password' />
        <Input label="Confirm Password" type='password' />
        <Input type='checkbox' label="show password" style={{ "color": "var(--primary-color)" }} />
        <Button label="Sign up" primary />
      </form>
    </div>
  )
}
export default Signup;