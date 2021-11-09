import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Fragment} from "react"


// Componentes
import VistaMetodosPago from "./VistaMetodoPago"
import Footer from '../footer/Footer'
import FuseLoading from '@fuse/core/FuseLoading';


// Services
import { getInfoCollectionAndWhere } from '../../services/services.js'

export default function LogicaMetodosPago() {
    let { nombre } = useParams()
    const [metodosPago, setmetodosPago] = useState([{}]); 
    const [Loading, setLoading] = useState(false); 

    useEffect(() => {
        console.log(nombre)
        getInfoCollectionAndWhere("tipoPago", "nombre_empresa", nombre)
        .then(resp=>{
            setmetodosPago(resp)
            setLoading(true)
        })
      },[])

    if(Loading){
        return (
            <Fragment>
                <VistaMetodosPago metodos={metodosPago}></VistaMetodosPago>
                <Footer></Footer>
            </Fragment>

        )
    } else {
        return (
            <FuseLoading></FuseLoading>
        )
    }
}
