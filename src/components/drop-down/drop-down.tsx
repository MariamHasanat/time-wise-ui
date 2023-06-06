import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const DropDown: React.FC = () => (
  <Dropdown menu={{ items }} trigger={['click']} >
    <a href='./' onClick={(e) => e.preventDefault()}>
      <Space style={{ border: '1px solid #ccc', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '5px', paddingTop: '5px', borderRadius: '10px', marginRight:'20px' }}>
        Projects
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default DropDown;