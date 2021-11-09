import React, { useEffect} from "react";


export default function VistaCliente(props) {

    useEffect(() => {
    }, [])

    const GoToClient = (nombre_empresa) => {
        window.location = "#/"+nombre_empresa
    }

    return (
        <div>
            {props.clientes.length > 0 ? (
                props.clientes.map((element, index) => (
                    <div key={element.key}>
                        <h1>Cliente # {index}</h1>
                        <p>{element.nombre_completo}</p>
                        <p onClick={ () =>  GoToClient(element.nombre_empresa)} >{element.nombre_empresa}</p>
                        <hr></hr>
                    </div>
                )
                )
            ) : (
                <p>No hay clientes creados</p>
            )}
        </div>
    )

}

