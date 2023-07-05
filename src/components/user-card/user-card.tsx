import './user-card.css';
import { Button } from 'antd';
import { ExportOutlined } from "@ant-design/icons"
import { useNavigate } from 'react-router';
interface userData {
  username: string,
  email: string
}
const UserCard = (user: userData) => {
  const navigate = useNavigate();
  return (
    <div className='user-card'>
      <div className='profile-pic'>
        <img src='/cat.png' alt='avatara' />
      </div>
      <div className='user-details'>
        <h4 className='username' style={{ display: 'flex', justifyContent: 'space-between' }}>{user.username || "..."}</h4>
        <h5 className='useremail'>{user.email || "..."}</h5>
      </div>
    </div>
  )
}
export default UserCard;