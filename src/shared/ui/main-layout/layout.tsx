import { Layout, Skeleton, Space, theme } from 'antd';
import { Header } from '../header';
import { Sidebar } from '../sidebar';
import { sidebarItems } from 'shared';
import styles from './layout.module.scss';
import { useState } from 'react';

const { Content } = Layout;

type Props = {
  children: React.ReactNode;
};

type SizeType = 'default' | 'small' | 'large';
type ButtonShapeType = 'circle' | 'square' | 'round' | 'default';
type AvatarShapeType = 'circle' | 'square';

export const MainLayout = ({ children }: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [size, setSize] = useState<SizeType>('default');
  const [buttonShape, setButtonShape] = useState<ButtonShapeType>('default');
  const [avatarShape, setAvatarShape] = useState<AvatarShapeType>('circle');
  const [block, setBlock] = useState(false);

  return (
    <>
      <Layout className={styles.layout}>
        <Header background={colorBgContainer}>
          <div className={styles.header__container}>
            <div></div>
            <Space>
              <Skeleton.Button
                active={false}
                size={size}
                shape={buttonShape}
                block={block}
              />
              <Skeleton.Avatar active={false} size={size} shape={avatarShape} />
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
            </Space>
          </div>
        </Header>
        <Layout className={styles.layoutContentContainer}>
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
