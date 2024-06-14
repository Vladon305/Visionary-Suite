import { Layout, theme } from 'antd';
import { Header } from '../header';
import { Sidebar } from '../sidebar';
import { sidebarItems } from 'shared';

const { Content } = Layout;

export const MainLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Header background={colorBgContainer}>
          <>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
          </>
        </Header>
        <Layout>
          <Sidebar background={colorBgContainer} menuItems={sidebarItems} />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
