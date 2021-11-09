import { authRoles } from 'app/auth';
import React, { lazy } from "react"

// componentes
const Clientes = lazy(() => import("./Clientes/LogicaCliente"))
const Menu = lazy(() => import("./Menu/LogicaMenu"))
const MetodoPago = lazy(() => import("./metodosPago/LogicaMetodosPago"))
const Contactos = lazy(() => import("./contacto/LogicaContacto"))

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
            component: () => <Clientes />,
        },
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
    ],
};

export default ComponentsConfig;
