import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react"

// componentes
import VistaMenu from "./VistaMenu"
import Footer from '../footer/Footer'
import FuseLoading from '@fuse/core/FuseLoading';


// Services
import * as Service from '../../services/services.js'


export default function LogicaMenu() {
    let { nombre } = useParams()
    const [menu, setmenu] = useState([{}]); 
    const [Loading, setLoading] = useState(false); 



    useEffect(() => {
        console.log("id")
        Service.getInfoCollectionAndWhere("clientes", "nombre_empresa", nombre)
        .then(resp=>{
            if(resp.length > 0){
                Service.getInfoCollectionAndWhere("productos", "nombre_empresa", nombre)
                .then(menu=>{
                    console.log(menu)
                    let infomenu = menu.map(val=>{
                        let productos = []
                        menu.forEach(element => {
                            if(element.nombre_categoria == val.nombre_categoria){
                                productos.push(element)
                            }
                        });
                        console.log(productos)
                        return ({
                            categoria:val.nombre_categoria,
                            productos:productos
                        })
                    })
                    var hash = {};
                    infomenu = infomenu.filter(function(current) {
                        var exists = !hash[current.categoria];
                        hash[current.categoria] = true;
                        return exists;
                    });
                    console.log(infomenu)
                    setmenu(infomenu)
                    setLoading(true)
                })
            } else {
                window.location = "#/"
            }
        })
    }, [])

    if(Loading){
        return (
            <Fragment>
                <VistaMenu menu={menu}></VistaMenu>
                <Footer></Footer>
            </Fragment>
    
        )
    } else {
        return (
            <FuseLoading></FuseLoading>
        )
    }
}
