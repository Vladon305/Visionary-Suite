import { Layout, Menu, MenuProps } from 'antd';

const { Sider } = Layout;

type Props = { background?: string; menuItems?: MenuProps['items'] };

export const Sidebar = ({ background, menuItems }: Props) => {
  return (
    <Sider width={200} style={{ background }}>
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar;
