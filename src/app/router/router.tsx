import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from 'shared/ui/error';
import {
  DreamTimePage,
  EconoEyePage,
  TaskMasterPage,
  RootLayoutPage,
} from 'pages';

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
