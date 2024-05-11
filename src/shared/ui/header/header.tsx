import { Layout } from 'antd';

const { Header } = Layout;

type Props = {
  children: React.ReactNode;
  background: string;
};

export const MainHeader = ({ children, background }: Props) => {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        background,
      }}
    >
      {children}
    </Header>
  );
};
