import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import showMessage from '../../utils/message/message';

const Guard = (props: any) => {
  const navigate = useNavigate();
  const token: string = localStorage.getItem('token') || "";

  useEffect(() => {
    if (!token.length) {
      console.log("no one");
      
      showMessage('error', 'you are not logged in');
      navigate("/login")
    }
  }, [token])

  return (
    <div>
      {props.children}
    </div>
  )

}

export default Guard