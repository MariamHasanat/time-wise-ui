import showMessage from "../../utils/message/message";
import { IProject } from "../../types/project-interface";

const getProjects = async (): Promise<IProject[] | null> => {
  const token: string = localStorage.getItem('token') || "";
  if (!token.length) {
    showMessage('error', 'You are not logged in');
    return null;
  }

  return fetch('http://localhost:3001/projects/cards', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'token': token
    },
  })
    .then(async response => {
      console.log(response.status);
      if (response.status === 401 || response.status === 403) {
        showMessage('error', 'Please log in to continue');
        response.json().then(() => localStorage.setItem('token', "invalid"));
        return null;
      } else if (response.status === 200) {
         console.log(response.json());
         return response.json();
       
      } else {
        showMessage('error', 'An unexpected error occurred');
        throw new Error('Unexpected response status');
      }
    })
    .catch(error => {
      showMessage('error', error);
      return null;
    });
};

export default getProjects;
