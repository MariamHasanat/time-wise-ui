import { Button } from 'antd';
import './user-icon.css';
import { ExportOutlined, UserOutlined, } from "@ant-design/icons"

const UserIcon = () => {
  return (
    <Button style={{ padding: 0, margin: 0, height: 'min-content' }}>
      <div className='user-icon'>
        <div className='profile-pic'>
          <UserOutlined style={{ fontSize: 24 }} />
        </div>
        <div className='user-details'>
          <h4 style={{ display: 'flex', justifyContent: 'space-between' }}>username</h4>
          <h5>username@company.com</h5>
        </div>
        <Button type='primary' style={{ border: 0 }} className='logout-btn'>
          <ExportOutlined />
          <p>logout</p>
        </Button>
      </div>
    </Button>
  )
}
export default UserIcon;