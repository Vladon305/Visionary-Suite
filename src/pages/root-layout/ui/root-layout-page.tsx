import { Outlet } from 'react-router-dom';
import { Layout } from 'shared';

// import { NavBar } from "@widgets/navigation";

export const RootLayoutPage = () => {
  return (
    <div className='pb-26'>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};
