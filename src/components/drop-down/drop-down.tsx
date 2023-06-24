import React, { useState } from 'react';
import { CaretDownFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { Dropdown, Space, Menu } from 'antd';

interface IProName {
  label: string,
  key: string
}
const DropDown = (props: any) => {
  const items: MenuProps['items'] = props.projects;
  const [dropdownLabel, setDropdownLabel] = useState<string>(' Projects');
  
  const handleItemClick = (e: any) => {
    setDropdownLabel(e.key);
  };

  const menuItems = items?.map((item: any) => (
    <Menu.Item key={item.label}>{item.label}</Menu.Item>
  ));

  const menu = <Menu>{menuItems}</Menu>;

  return (
    <Dropdown
      trigger={['click']}
      menu={{ onClick: handleItemClick, items: items }}
    >
      <a href='./' onClick={(e) => e.preventDefault()}>
        <Space style={{ fontSize: '15px', color: '#52469C' }}>
          {dropdownLabel}
          <CaretDownFilled />
        </Space>
      </a>
    </Dropdown>
  )
};

export default DropDown;