import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'shared';

// import { NavBar } from "@widgets/navigation";
type RootLayoutPageProps = {
  children?: ReactElement;
};

export const RootLayoutPage = ({ children }: RootLayoutPageProps) => {
  return (
    <div className='pb-26'>
      <Layout>
        <Outlet />
      </Layout>
      {/* <NavBar /> */}
    </div>
  );
};
