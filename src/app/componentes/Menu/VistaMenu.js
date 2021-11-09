import React, { useEffect } from "react";
import './estilosMenu.css'

export default function VistaMenu(props) {

    console.log(props)

    useEffect(() => {
    }, [])

    return (
        <div>
            {props.menu.length > 0 ? (
                props.menu.map((element, index) => (
                    <div key={element.categoria}>
                        <h1 className="clase1">{element.categoria}</h1>
                        {element.productos.length > 0 ? (
                            element.productos.map(producto => (
                                <div key={producto.nombre}>
                                    <p className = "clase2">{producto.nombre}</p>
                                    <p className = "clase2">{producto.descripcion}</p>
                                    <p className = "clase2">{producto.like}</p>
                                    <p className = "clase2">{producto.precio}</p>
                                    <p className = "clase2">{producto.cantidad}</p>
                                </div>
                            )
                            )
                        ) : (
                            <p>Esta categoria no tiene productos</p>
                        )}
                    </div>
                )
                )
            ) : (
                <p>el cliente no tiene menu</p>
            )}
        </div>
    )

}

