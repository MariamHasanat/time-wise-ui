import React from 'react';
import { CaretDownFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';


const DropDown = (props: any) => {
  console.log("props from drop-down : ", props.projects);
  const items : MenuProps['items'] = props.projects;
  console.log("items : ", items);
  
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