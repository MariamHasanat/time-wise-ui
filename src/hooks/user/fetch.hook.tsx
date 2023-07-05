import { useState } from 'react'
import showMessage from '../../utils/message/message'

interface userData {
  username: string,
  email: string
}

const UseFetchUser = () => {
  const [user, setUser] = useState<userData>({ username: "", email: "" });
  const token: string = localStorage.getItem('token') || "";

  const fetchUserData = async () => {
    fetch('http://localhost:3001/user', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "token": token
      }
    })
      .then(res => {
        if (res.status === 200) {
          res.json().then((res) => {
            setUser(res)
            return true;
          }
          )
        }
      }).catch(err => {
        showMessage("error", err);
        return false;
      })
  }
  return {
    fetchUserData, ...user,
  }
}

export default UseFetchUser;