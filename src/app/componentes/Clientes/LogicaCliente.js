import React, { useEffect, useState } from "react";
import { Fragment } from "react"
import Button from '@material-ui/core/Button';

// componentes
import FuseLoading from '@fuse/core/FuseLoading';
import VistaCliente from "./VistaCliente"


// Services
import * as Service from '../../services/services.js'

export default function LogicaCliente() {
    const [Clientes, setClientes] = useState([{}]); 
    const [Loading, setLoading] = useState(false); 

    useEffect(() => {
        Service.getAllDocument("clientes")
        .then(resp=>{
            console.log(resp)
            setClientes(resp)
            setLoading(true)
        })
    }, [])

    const Navegar = () => {
        window.location = `/#/login`
    }



    if(Loading){
        return (
            <Fragment>
                <VistaCliente clientes={Clientes}></VistaCliente>
                <Button variant="contained" color="primary" onClick={ () =>  Navegar()}>Login</Button >
            </Fragment>
    
        )
    } else {
        return (
            <FuseLoading></FuseLoading>
        )
    }
}
