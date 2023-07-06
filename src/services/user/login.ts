import showMessage from "../../utils/message/message";

interface ILogin {
  email: string,
  password: string
}

const login = async (props: ILogin) => {
  return fetch('http://localhost:3001/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...props })
  })
    .then(async response => {
      if (response.status === 200) {
        return response.json()
          .then((res) => {
            localStorage.setItem('token', res.token)
            showMessage('success', 'welcome back!');
            return true;
          })
      } else if (response.status === 400 || response.status === 401) {
        showMessage('error', 'email/password combination is not valid');
        return false;
      } else {
        showMessage('error', 'an unexpected error occurred')
        throw new Error('Unexpected response status');
      }
    })
    .catch(error => {
      showMessage('error', error);
      return false
    });
};
export { login };