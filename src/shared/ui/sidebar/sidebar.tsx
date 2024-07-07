import { Layout, Menu, MenuProps } from 'antd';
import { Dispatch, SetStateAction } from 'react';
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

  useEffect(() => {
    navigate(menuKeys[0]);
  }, [menuKeys]);

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
