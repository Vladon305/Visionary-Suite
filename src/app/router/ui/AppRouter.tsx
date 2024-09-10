import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';
import { routes } from 'app/index';
import TaskMasterPage from 'pages/TaskMaster';
import EconoEyePage from 'pages/EconoEye';
import DreamTimePage from 'pages/DreamTime';
import { Layout } from 'shared';

export const AppRouter = () => {
  return (
    <Suspense fallback={<Spin size='large' fullscreen />}>
      <Layout>
        <Routes>
          <Route path={routes.econoEye} element={<EconoEyePage />} />
          <Route path={routes.taskMaster} element={<TaskMasterPage />} />
          <Route path={routes.dreamTime} element={<DreamTimePage />} />
          <Route path='*' element={<Navigate to={routes.home} />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};
