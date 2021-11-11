import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const ScrumboardAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/Menu/Redacta',
      component: () => import("../../pages/profile/ProfilePage"),
    },
    {
      path: '/home',
      component: lazy(() => import('./boards/Boards')),
    },
    {
      path: '/apps/scrumboard',
      component: () => <Redirect to="/home" />,
    },
  ],
};

export default ScrumboardAppConfig;
