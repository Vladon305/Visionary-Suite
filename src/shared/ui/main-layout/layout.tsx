import { Layout, theme } from 'antd';
import { Header } from '../header';
import { Sidebar } from '../sidebar';
import { sidebarItems } from 'shared';
import { ReactElement } from 'react';

const { Content } = Layout;

type Props = {
  children?: ReactElement;
};

export const MainLayout = ({ children }: Props) => {
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
