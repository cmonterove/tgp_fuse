import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react"

// componentes
import Footer from '../footer/Footer'
import VistaContactos from "./VistaContacto"
import FuseLoading from '@fuse/core/FuseLoading';


// Services
import * as Service from '../../services/services.js'

export default function LogicaContactos() {
    let { nombre } = useParams()
    const [Loading, setLoading] = useState(false);
    const [contactos, setcontactos] = useState([{}]);  

    useEffect(() => {
        Service.getInfoCollectionAndWhere("contactoxEmpresa", "nombre_empresa", nombre)
        .then(resp=>{
            let contador = 0
            let infoFinal = []
            if (resp.length > 0){
                if(resp[0].contactos.length > 0){
                    resp[0].contactos.forEach((element,index) => {
                        Service.getDocumentDinamico("contacto",element)
                        .then(cadaContacto=>{
                            let info = {
                                nombre:cadaContacto.nombre,
                                icono:cadaContacto.icono,
                                cuenta:resp[0].cuenta[index]
                            }
                            infoFinal.push(info)
                            contador++
                            if(contador == resp[0].contactos.length){
                                setcontactos(infoFinal)
                                setLoading(true)
                            }
                        })
                    });
                } else {
                    setLoading(true)
                }
            } else {
                setLoading(true)
            }
        })
    }, [])

    if (Loading){
        return (
            <Fragment>
                <VistaContactos contactos={contactos}></VistaContactos>
                <Footer></Footer>
            </Fragment>
    
        )
    } else {
        return (
            <FuseLoading></FuseLoading>
        )
    }

}
