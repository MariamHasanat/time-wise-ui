import React from 'react';
import { CaretDownFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';


const DropDown = (props: any) => {
  const items : MenuProps['items'] = props.projects;
  
  return (
    <Dropdown menu={{ items }} trigger={['click']} >
      <a href='./' onClick={(e) => e.preventDefault()}>
        <Space style={{ fontSize: '15px', color: '#52469C' }}>
          Projects
          <CaretDownFilled />
        </Space>
      </a>
    </Dropdown>
  )
};

export default DropDown;