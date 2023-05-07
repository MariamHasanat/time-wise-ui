import './signup.css'
import Button from "../../components/button/button";
import Input from '../../components/input/input';

const Signup = () => {
  return (
    <div className="signup">
      <h3>sign up</h3>
      <Input label="username" placeholder='hello'/>
      <Input label="email" type='email'/>
      <Input label="password" type='password'/>
      <Input label="re-enter password" type='password'/>
      <Button label="sign up" primary/>
    </div>
  )
}
export default Signup;