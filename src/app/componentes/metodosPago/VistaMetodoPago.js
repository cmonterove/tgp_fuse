import React, { useEffect } from "react";


export default function VistaMetodosPago(props) {


    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <div>
            {props.metodos.length > 0 ? (
                props.metodos.map(element => (
                    <div>
                        <h1>{element.nombre}</h1>
                        <h1>{element.icono}</h1>
                    </div>
                )
                )
            ) : (
                <p>el cliente no tiene metodos asignados</p>
            )}
        </div>
    )

}

