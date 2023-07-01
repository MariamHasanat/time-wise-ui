
import { ITask } from "../../hooks/tasks/submit-task";
import showMessage from "../../utils/message/message";

const submitTask = async (props: ITask) => {

  const token: string = localStorage.getItem("token") || "";
  if (!token.length) {
    showMessage("error", "you are logged out, invalid token")
  }
  try {

    return await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'token': token
      },
      body: JSON.stringify({ ...props })
    })
      .then(async response => {
        // console.log(response.status);
        if (response.status === 401 || response.status === 403) {
          showMessage('error', 'Please log in to continue');
          response.json().then(() => localStorage.setItem('token', "invalid"));
          return false;
        } else if (response.status === 200) {
          showMessage('success', `task begins successfully`);

          return true;
        } else {
          showMessage('error', 'An unexpected error occurred');
          throw new Error('Unexpected response status');
        }
      })
      .catch(error => {
        showMessage('error', error);
        return false;
      }
      )
  } catch (error) {
    showMessage('error', `${error}`)
  }
}

export default submitTask;

