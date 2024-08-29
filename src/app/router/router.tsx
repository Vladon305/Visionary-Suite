import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from 'shared';
import TaskMasterPage from 'pages/TaskMaster';
import EconoEyePage from 'pages/EconoEye';
import DreamTimePage from 'pages/DreamTime';
import { RootLayoutPage } from 'pages/root-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayoutPage />,
    children: [
      { path: '/task-master', element: <TaskMasterPage />, index: true },
      { path: '/econo-eye', element: <EconoEyePage /> },
      { path: '/dream-time', element: <DreamTimePage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
