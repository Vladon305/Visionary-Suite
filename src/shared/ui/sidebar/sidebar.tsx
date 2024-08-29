import { Layout, Menu, MenuProps } from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

type Props = {
  background?: string;
  menuItems?: MenuProps['items'];
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
};

export const Sidebar = ({
  background,
  menuItems,
  isCollapsed,
  setIsCollapsed,
}: Props) => {
  const navigate = useNavigate();
  return (
    <Sider
      style={{ background }}
      trigger={null}
      breakpoint='lg'
      collapsedWidth='0'
      collapsible
      collapsed={isCollapsed}
      onBreakpoint={broken => {
        setIsCollapsed(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu
        mode='inline'
        // defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        onSelect={({ key }) => {
          navigate(key);
        }}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar;
