import { authRoles } from "app/auth";
import React, { lazy } from "react";
// componentes
const Products = lazy(() =>
  import("../main/apps/e-commerce/products/Products")
);
const Profile = lazy(() => import("../main/pages/profile/ProfilePage"));
const Home = lazy(() => import("../main/apps/scrumboard/boards/Boards"));
const Redacta = lazy(() => import("../main/apps/academy/courses/Courses"));
const Form = lazy(() => import("../main/apps/e-commerce/product/Product"));
const Calendario = lazy(() => import("../main/apps/calendar/CalendarApp"));

const notAllowedComponentConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: true,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: true,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: authRoles.admin,
  routes: [
    {
      path: "/Manage/Profile",
      exact: true,
      component: () => <Profile />,
    },
    {
      path: "/Menu/Redacta",
      exact: true,
      component: () => <Redacta />,
    },
    {
      path: "/Manage/Products",
      exact: true,
      component: () => <Products />,
    },
    {
      path: '/Main/Home',
      exact: true,
      component: () => <Home />,
    },
    {
      path: '/apps/calendar',
      exact: true,
      component: () => <Calendario />,
  },
  {
    path: '/apps/e-commerce/products/new',
    exact: true,
    component: () => <Form />,
},
{
  path: '/apps/e-commerce/products',
  exact: true,
  component: () => <Products />,
},


  ],
};

export default notAllowedComponentConfig;
