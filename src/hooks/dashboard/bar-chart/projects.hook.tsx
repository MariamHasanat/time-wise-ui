import { useState } from 'react';
import showMessage from '../../../utils/message/message';

const useFetchProjects = () => {
  const [projects, setProjects] = useState<[any] | null>();
  const fetchProjects = async () => {
    const token: string = localStorage.getItem('token') || "";
    fetch('http://localhost:3001/projects/cards', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "token": token
      }
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((res) => {
            setProjects(res)
            return true;
          })
        }
      })
      .catch(err => {
        showMessage("error", err);
        return false;
      })
  }
  return {
    projects,
    fetchProjects
  }
}
export default useFetchProjects;