import { Layout, Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

type Props = { background?: string; menuItems?: MenuProps['items'] };

export const Sidebar = ({ background, menuItems }: Props) => {
  const navigate = useNavigate();
  return (
    <Sider width={200} style={{ background }}>
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
