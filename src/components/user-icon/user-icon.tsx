import { Button, Dropdown } from 'antd';
import './user-icon.css';
import { DownOutlined, ExportOutlined, UserOutlined, } from "@ant-design/icons"
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [{
  key: '1',
  label: (
    <Button style={{backgroundColor:"transparent", border: 0}} className='logout-btn'>
      <ExportOutlined />
      <p>logout</p>
    </Button>
  ),
}];

const UserIcon = () => {
  return (
      <Button style={{ padding: 0, margin: 0, height: 'min-content'}}>
        <div className='user-icon'>
          <div className='profile-pic'>
            <UserOutlined style={{ fontSize: 24 }} />
          </div>
          <div className='user-details'>
            <h4 style={{ display: 'flex', justifyContent: 'space-between' }}>
              username
            </h4>
            <h5>username@company.com</h5>
          </div>
        </div>
      </Button>
  )
}
export default UserIcon;