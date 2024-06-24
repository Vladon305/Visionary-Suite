import { Layout, theme } from 'antd';
import { Header } from '../header';
import { Sidebar } from '../sidebar';
import { sidebarItems } from 'shared';
import styles from './layout.module.scss';

const { Content } = Layout;

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout className={styles.layout}>
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
          <Layout className={styles.content__layout}>
            <Content
              className={styles.content}
              style={{
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
