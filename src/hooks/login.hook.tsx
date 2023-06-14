import { useNavigate } from 'react-router-dom';
import { login } from '../services/user/login';

interface ILogin {
  email: string,
  password: string
}

const useLogin = () => {
  const navigate = useNavigate();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const user: ILogin = {
      email: data.get('email') as string,
      password: data.get('password') as string
    }

    if (await login(user)) {
      navigate('/dashboard');
    }
  }
  return {
    submitHandler
  }
}

export default useLogin;