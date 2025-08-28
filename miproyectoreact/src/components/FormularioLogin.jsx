import React, {useState} from "react";
import { useFormularioLogin } from "../hooks/useFormularioLogin";


export default function FormularioLogin(){
    
    const {
        usuario,
        clave,
        errores,
        mensaje,
        handleChange,
        handleSubmit
    } = useFormularioLogin()

    return (
        <form onSubmit={handleSubmit} >
            <input
                placeholder="Usuario"
                name="usuario"
                value={usuario}
                onChange={handleChange}
            />
            {errores.usuario && <p>{errores.usuario}</p>}
            <input
                type="password"
                name="clave"
                placeholder="Contraseña"
                value={clave}
                onChange={handleChange}
            />
            {Array.isArray(errores.clave)
            ? errores.clave.map((err, i) => <p key={i}>{err}</p>)
            : errores.clave && <p>{errores.clave}</p>
            }

            <button type="submit">Iniciar sesion</button>

            {mensaje && <p>{mensaje}</p>}

        </form>
    )
}