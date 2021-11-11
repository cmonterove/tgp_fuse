import { authRoles } from 'app/auth';
import React, { lazy } from "react"

// componentes
const Clientes = lazy(() => import("./Clientes/LogicaCliente"))
const Menu = lazy(() => import("./Menu/LogicaMenu"))
const MetodoPago = lazy(() => import("./metodosPago/LogicaMetodosPago"))
const Contactos = lazy(() => import("./contacto/LogicaContacto"))
const Login = lazy(() => import("../main/login/Login"))
const Home = lazy(() => import("./Home/home"))
const Form = lazy(() => import("../main/apps/e-commerce/product/Product"));
// const Products = lazy(() =>
//   import("../main/apps/e-commerce/products/Products")
// );

const ComponentsConfig = {
    settings: {
        layout: {
            config: {
                navbar: {
                    display: false,
                },
                toolbar: {
                    display: false,
                },
                footer: {
                    display: false,
                },
                leftSidePanel: {
                    display: false,
                },
                rightSidePanel: {
                    display: false,
                },
            },
        },
    },
    auth: authRoles.onlyGuest,
    routes: [
        {
            path: '/',
            exact: true,
            component: () => <Login />,
        },
        // {
        //     path: '/home',
        //     exact: true,
        //     component: () => <Home />,
        // },
        {
            path: '/:nombre',
            exact: true,
            component: () => <Menu />,
        },
        {
            path: '/:nombre/metodos-pago',
            exact: true,
            component: () => <MetodoPago />,
        },
        {
            path: '/:nombre/contacto',
            exact: true,
            component: () => <Contactos />,
        },
        // {
        //     path: '/apps/e-commerce/products/new',
        //     exact: true,
        //     component: () => <Form />,
        // },
    ],
};

export default ComponentsConfig;
