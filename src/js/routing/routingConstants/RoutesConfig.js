import { Navigate, useRoutes } from 'react-router-dom';
//pages
import FirstLevel from '@/js/containers/pages/test2/FirstLevel';
import SecondLevel from '@/js/containers/pages/test2/SecondLevel';
import Test1Page from '@/js/containers/pages/Test1Page';
import Test2Page from '@/js/containers/pages/Test2Page';
import Test3Page from '@/js/containers/pages/Test3Page';
//constants
import { constructBreadcrumbsLinks } from '@/js/routing/routingConstants/RoutingHelpers';

export const routes = [
  {
    path: '/',
    element: <Navigate to="/test1" replace />,
  },
  {
    element: <Test1Page />,
    path: '/test1',
    label: 'Test 1',
  },
  {
    element: <Test2Page />,
    path: '/test2',
    label: 'Test 2',
    children: [
      {
        element: <FirstLevel />,
        path: ':firstLevel',
        children: [
          {
            element: <SecondLevel />,
            path: ':secondLevel',
          },
        ],
      },
    ],
  },
  {
    element: <Test3Page />,
    path: '/test3',
    label: 'Test 3',
  },
];

export default function Router() {
  return useRoutes(constructBreadcrumbsLinks({ routes }));
}
