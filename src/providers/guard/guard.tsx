import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import showMessage from '../../utils/message/message';

const Guard = (props: any) => {
  const navigate = useNavigate();
  const token: string = localStorage.getItem('token') || "";

  useEffect(() => {
    if (!token.length) {
      showMessage('error', 'you should login to continue');
      navigate("/login")
    }// eslint-disable-next-line
  }, [])
  return (
    <div>
      {props.children}
    </div>
  )

}

export default Guard