import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from 'shared';
import {
  DreamTimePage,
  EconoEyePage,
  TaskMasterPage,
  RootLayoutPage,
  RootPage,
} from 'pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        element: <RootLayoutPage />,
        children: [
          { path: '/task-master', element: <TaskMasterPage /> },
          { path: '/econo-eye', element: <EconoEyePage /> },
          { path: '/dream-time', element: <DreamTimePage /> },
          // { path: "/statistics", element: <StatisticsPage /> },
          // { path: "/balances", element: <BalancesPage /> },
          // {
          //   path: "/settings",
          //   element: <SettingsPage />,
          // },
        ],
        errorElement: <ErrorPage />,
      },
      // {
      //   path: "/",
      //   element: <Navigate to="/transactions" replace />,
      // },
    ],
  },
]);
