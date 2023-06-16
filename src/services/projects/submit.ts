import showMessage from "../../utils/message/message";

interface IProject {
  name: string,
  color: string,
  description?: string
}
const token = localStorage.getItem('token') || '';

const createProject = async (props: IProject) => {
  return fetch('http://localhost:3001/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'token': token
    },
    body: JSON.stringify({ ...props })
  })
    .then(async response => {
      console.log(response.status);
      if (response.status === 401) {
        showMessage('error', 'Unauthorized');
        response.json().then(() => localStorage.setItem('token', "invalid"));
        return false;
      } else if (response.status === 409) {
        showMessage('error', 'project name already exists');
        return false;
      } else if (response.status === 201) {
        showMessage('success', `project ${props.name} was created`);
        return true;
      }
      else {
        showMessage('error', 'an unexpected error occured')
        throw new Error('Unexpected response status');
      }
    })
    .catch(error => {
      showMessage('error', error);
      return false
    });
};
export { createProject };