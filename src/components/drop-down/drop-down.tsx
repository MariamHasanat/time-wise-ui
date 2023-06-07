import React from 'react';
import { CaretDownFilled, CaretDownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '0',
  },
  {
    label: '2nd menu item',
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
      <Space style={{fontSize : '15px', color:'#52469C'}}>
        Projects
        <CaretDownFilled />
      </Space>
    </a>
  </Dropdown>
);

export default DropDown;