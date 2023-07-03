import './user-icon.css';
import { Button } from 'antd';
import { ExportOutlined, UserOutlined, } from "@ant-design/icons"
import { useNavigate } from 'react-router';


const UserIcon = () => {
const navigate = useNavigate();

  return (
    <div className='user-icon'>
      <div className='profile-pic'>
        <img src='/cat.png'/>
      </div>
      <div className='user-details'>
        <h4 style={{ display: 'flex', justifyContent: 'space-between' }}>username</h4>
        <h5>username@company.com</h5>
      </div>
      <Button type='primary' style={{ border: 0 }} className='logout-btn'
        onClick={
          () => {
            localStorage.setItem('token', "");
            navigate('/login');
          }
        }
      >
        <ExportOutlined />
        <p>logout</p>
      </Button>
    </div>
  )
}
export default UserIcon;