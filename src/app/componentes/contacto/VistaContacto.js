import React, { useEffect } from "react";


export default function VistaContactos(props) {


    useEffect(() => {
        console.log(props.contactos)
    }, [])

    return (
        <div>
            {props.contactos.length > 0 ? (
                props.contactos.map(element => (
                    <div>
                        <h1>{element.icono}</h1>
                        <h1>{element.nombre}</h1>
                        {/* lo lleva al whatsapp */}
                        {element.nombre == "whatsapp" ?
                            <a href={`https://api.whatsapp.com/send?phone=${element.cuenta}&text=test para probar la api?`} style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noopener noreferrer">{element.cuenta}</a>
                            :
                            ''
                        }

                        {/* Lo lleva a la web */}

                        {element.nombre == "web" ?
                            <a target="_blank" href={element.cuenta} rel="noopener noreferrer">
                                {element.cuenta}
                            </a>
                            :
                            ''
                        }

                        {element.nombre == "facebook" ?
                            <a target="_blank" href={element.cuenta} rel="noopener noreferrer">
                                {element.cuenta}
                            </a>
                            :
                            ''
                        }

                        {element.nombre == "instagram" ?
                            <a target="_blank" href={element.cuenta} rel="noopener noreferrer">
                                {element.cuenta}
                            </a>
                            :
                            ''
                        }

                        {element.nombre == "twitter" ?
                            <a target="_blank" href={element.cuenta} rel="noopener noreferrer">
                                {element.cuenta}
                            </a>
                            :
                            ''
                        }

                        {element.nombre == "correo" ?
                            <a href={`mailto:${element.cuenta}?subject= Contacto por pedido&body=Hola, como estas?`} style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noopener noreferrer">
                                {element.cuenta}
                            </a>
                            :
                            ''
                        }

                        {element.nombre == "local" || element.nombre == "celular"  ?
                            <a href={`tel:+${element.cuenta}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color:'black'}}>
                            {element.cuenta}
                            </a>
                            :
                            ''
                        }

                    </div>
                )
                )
            ) : (
                <p>El cliente no tiene contactos asignados</p>
            )}
        </div>

    )

}

