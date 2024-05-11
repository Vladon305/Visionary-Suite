import { createBrowserRouter } from 'react-router-dom';
import { RootPage } from 'pages/root';
import { RootLayoutPage } from 'pages/root-layout';

export const router = createBrowserRouter([
  {
    element: <RootPage />,
    children: [
      {
        element: <RootLayoutPage />,
        children: [
          // { path: "/transactions", element: <TransactionsPage /> },
          // { path: "/statistics", element: <StatisticsPage /> },
          // { path: "/balances", element: <BalancesPage /> },
          // {
          //   path: "/settings",
          //   element: <SettingsPage />,
          // },
        ],
      },
      // {
      //   path: "/",
      //   element: <Navigate to="/transactions" replace />,
      // },
    ],
  },
]);
