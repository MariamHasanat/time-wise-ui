import showMessage from '../utils/message/message';
import { signup } from '../services/user/signup';
import { useNavigate } from 'react-router-dom';

interface ISignup {
  username: string,
  email: string,
  password: string
}

const checkPasswords = (data: any) => {
  return data.get('password1') === data.get('password2');
}

const useSignup = () => {
  const navigate = useNavigate();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
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

      if (await signup(user)) {
        navigate('/login');
      }

    }
  }
  return {
    submitHandler
  }
}
export default useSignup;