import showMessage from "../../utils/message/message";

export interface IProject {
  name: string;
  color: string;
  description?: string;
}

const createProject = async (props: IProject) => {
  const token: string = localStorage.getItem('token') || "";
  if (!token.length) {
    showMessage('error', 'You are not logged in');
    return false;
  }

  return fetch('http://localhost:3001/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'token': token
    },
    body: JSON.stringify({ ...props })

  })
    .then(async response => {
      if (response.status === 401 || response.status === 403) {
        showMessage('error', 'Please log in to continue');
        response.json().then(() => localStorage.setItem('token', "invalid"));
        return false;
      } else if (response.status === 409) {
        showMessage('error', 'Project name already exists');
        return false;
      } else if (response.status === 200) {
        showMessage('success', `Project "${props.name}" was created`);

        return true;
      } else {
        showMessage('error', 'An unexpected error occurred');
        throw new Error('Unexpected response status');
      }
    })
    .catch(error => {
      showMessage('error', error);
      return false;
    });
};

export default createProject;
