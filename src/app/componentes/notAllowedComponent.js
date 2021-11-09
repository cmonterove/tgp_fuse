import { authRoles } from 'app/auth';
import React, { lazy } from "react"
// componentes
const Products = lazy(() => import("../main/apps/e-commerce/products/Products"))
const Profile = lazy(() => import("../main/pages/profile/ProfilePage"))

const notAllowedComponentConfig = {
    settings: {
        layout: {
            config: {
                navbar: {
                    display: true,
                },
                toolbar: {
                    display: true,
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
            path: '/Manage/Profile',
            exact: true,
            component: () => <Profile />,
        },
        {
            path: '/Manage/Products',
            exact: true,
            component: () => <Products />,
        },
    ],
};

export default notAllowedComponentConfig;
