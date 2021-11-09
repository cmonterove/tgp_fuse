import React, { lazy } from "react"
import FuseUtils from '@fuse/utils';
import appsConfigs from 'app/main/apps/appsConfigs';
import authRoleExamplesConfigs from 'app/main/auth/authRoleExamplesConfigs';
import CallbackConfig from 'app/main/callback/CallbackConfig';
import DocumentationConfig from 'app/main/documentation/DocumentationConfig';
import LoginConfig from 'app/main/login/LoginConfig';
import LogoutConfig from 'app/main/logout/LogoutConfig';
import pagesConfigs from 'app/main/pages/pagesConfigs';
import RegisterConfig from 'app/main/register/RegisterConfig';
import UserInterfaceConfig from 'app/main/user-interface/UserInterfaceConfig';
import ComponentsConfig from "../componentes/EneableComponents"
import notAllowedComponentConfig from "../componentes/notAllowedComponent"
import { Redirect } from 'react-router-dom';


const routeConfigs = [
  // ...appsConfigs,
  // ...pagesConfigs,
  // ...authRoleExamplesConfigs,
  // UserInterfaceConfig,
  // DocumentationConfig,
  // LogoutConfig,
  // LogoutConfig,
  // CallbackConfig,
  RegisterConfig,
  LoginConfig,
  ComponentsConfig,
  notAllowedComponentConfig
];




const routes = [
  // if you want to make whole app auth protected by default change defaultAuth for example:
  // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
  // The individual route configs which has auth option won't be overridden.
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin']),
  // {
  //   path: '/apps/dashboards/analytics',
  //   exact: true,
  //   component: () => <Redirect to="/apps/dashboards/analytics" />,
  // },
  // {
  //   path: '/crear/producto',
  //   exact: true,
  //   component: () => <Products />,
  // },
];

export default routes;
