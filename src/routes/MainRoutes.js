import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// Real Reports routing
const RealReport = Loadable(lazy(() => import('views/report/real')));

// Support routing
const Support = Loadable(lazy(() => import('views/support')));

// Account routing
const Account = Loadable(lazy(() => import('views/account')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <RealReport />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'realreport',
          element: <RealReport />
        },
        {
          path: 'account',
          element: <Account />
        },
        {
          path: 'support',
          element: <Support />
        }
      ]
    },
  ]
};

export default MainRoutes;
