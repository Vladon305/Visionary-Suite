import { Layout, Menu, MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

type Props = { background?: string; menuItems?: MenuProps['items'] };

export const Sidebar = ({ background, menuItems }: Props) => {
  const [menuKeys, setMenuKeys] = useState(['task-master']);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(menuKeys[0]);
  }, [menuKeys]);

  return (
    <Sider width={200} style={{ background }}>
      <Menu
        mode='inline'
        openKeys={menuKeys}
        style={{ height: '100%', borderRight: 0 }}
        onSelect={({ key }) => {
          setMenuKeys([key]);
        }}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar;
