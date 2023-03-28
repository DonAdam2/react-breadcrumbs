import { Navigate, useRoutes } from 'react-router-dom';
import FirstLevel from '@/js/containers/pages/test2/FirstLevel';
import SecondLevel from '@/js/containers/pages/test2/SecondLevel';
import Test1Page from '@/js/containers/pages/Test1Page';
import Test2Page from '@/js/containers/pages/Test2Page';
import Test3Page from '@/js/containers/pages/Test3Page';

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
  },
  {
    element: <FirstLevel />,
    path: '/test2/:firstLevel',
  },
  {
    element: <SecondLevel />,
    path: '/test2/:firstLevel/:secondLevel',
  },
  {
    element: <Test3Page />,
    path: '/test3',
    label: 'Test 3',
  },
];

export default function Router() {
  return useRoutes(routes);
}
