import { lazy } from 'react';

const ProfilePageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/perfil',
      component: lazy(() => import('./ProfilePage')),
    },
  ],
};

export default ProfilePageConfig;
