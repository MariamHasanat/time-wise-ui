import { useEffect } from 'react';
import { CaretDownFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Menu } from 'antd';

const DropDown = (props: any) => {
  const items: MenuProps['items'] = props.projects;
  // const [dropdownLabel, setDropdownLabel] = useState<string>(localStorage.getItem('projectName')?.toString() || 'Projects');
  const { dropdownLabel, setDropdownLabel } = props;
  const handleItemClick = (e: any) => {
    setDropdownLabel(e.key);
  };

  const menuItems = items?.map((item: any) => (
    <Menu.Item key={item.label}>{item.label}</Menu.Item>
  ));

  useEffect(() => {
    localStorage.setItem("projectName", dropdownLabel);
  }, [dropdownLabel])

  return (
    <Dropdown
      overlay={<Menu onClick={handleItemClick}>{menuItems}</Menu>}
      trigger={['click']}
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