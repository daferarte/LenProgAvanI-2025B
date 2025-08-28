import { useState } from "react";

const validarClave = (clave) =>{
    const errores = []
    if (clave.length < 8 ) errores.push("la contraseña debe tener al menos 8 caracteres")
    if (!/[A-Z]/.test(clave)) errores.push("una mayuscula")
    if (!/[0-9]/.test(clave)) errores.push("un numero")
    if (!/[!@#$%^&*()-+_]/.test(clave)) errores.push("un caracter especial")
    return errores
}

export const useFormularioLogin = ()=>{
    const [usuario, setUsuario] = useState('')
    const [clave, setClave] = useState('')
    const [errores, setErrores] = useState({})
    const [mensaje, setMensaje] = useState('')

    const handleChange = (e)=>{
        const {name, value } = e.target
        if (name === 'usuario') setUsuario(value)
        if (name === 'clave') setClave(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        setMensaje('');

        if (!usuario) newErrors.usuario="usuario requerido"
        if (!clave) 
            newErrors.clave="contraseña requerido"
        else {
            const erroresClave = validarClave(clave)
            if (erroresClave.length > 0) newErrors.clave = erroresClave
        }
        setErrores(newErrors)

        if(Object.keys(newErrors).length === 0){
            setMensaje("Inicio de sesion exitoso")
        }
    }

    return{
        usuario,
        clave,
        errores,
        mensaje,
        handleChange,
        handleSubmit
    }
}