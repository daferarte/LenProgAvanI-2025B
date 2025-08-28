import React from "react";
import Boton from "./Boton";

function Saludo({ nombre }){
    return(
        <>
            <h2>Hola, {nombre}!, Bienvenido a react en la UNIREMINGTON</h2>
            <Boton/>
        </>
    )
}

export default Saludo;