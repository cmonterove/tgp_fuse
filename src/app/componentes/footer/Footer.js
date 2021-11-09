import React from "react";
import { useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default function Footer() {
    let { nombre } = useParams()

    const Navegar = (GoTo) => {
        switch (GoTo){
            case "Menu": window.location = `/#/${nombre}`; break
            case "Metodos de Pago": window.location =`/#/${nombre}/metodos-pago`; break
            case "Contacto": window.location = `/#/${nombre}/contacto`; break
            case "Clientes": window.location = `/#`; break
            case "Login": window.location = `/#/login`; break
            default: console.log("Algo esta mal"); break
        }
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={ () =>  Navegar("Menu")}>Menu</Button >
            <Button variant="contained" color="primary" onClick={ () =>  Navegar("Metodos de Pago")}>Metodos de Pago</Button >
            <Button variant="contained" color="primary" onClick={ () =>  Navegar("Contacto")}>Contacto</Button >
            <Button variant="contained" color="primary" onClick={ () =>  Navegar("Clientes")}>Clientes</Button >
            <Button variant="contained" color="primary" onClick={ () =>  Navegar("Login")}>Login</Button >
        </div>
    )
}
