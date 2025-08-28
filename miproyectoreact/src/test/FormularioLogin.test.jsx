import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormularioLogin from '../components/FormularioLogin'

test('Muestra mensaje de error si los campos estan vacios', ()=>{
    render(<FormularioLogin/>)

    const boton = screen.getByRole('button',{name: /iniciar sesion/i})
    fireEvent.click(boton)

    expect(screen.getByText(/usuario requerido/i)).toBeInTheDocument()
    expect(screen.getByText(/contraseña requerido/i)).toBeInTheDocument()

})

test('Muestra error si la contrasenia no cumple con requisitos de seguridad', () =>{

    render(<FormularioLogin/>)

    const inputUsuario = screen.getByPlaceholderText(/Usuario/i)
    const inputClave = screen.getByPlaceholderText(/Contraseña/i)
    const boton = screen.getByRole('button',{name: /iniciar sesion/i})

    fireEvent.change(inputUsuario, { target:{ value: 'daniel'}})
    fireEvent.change(inputClave, { target:{ value: 'abc'}})
    fireEvent.click(boton)

    expect(screen.getByText(/la contraseña debe tener al menos 8 caracteres/i)).toBeInTheDocument()
    expect(screen.getByText(/una mayuscula/i)).toBeInTheDocument()
    expect(screen.getByText(/un numero/i)).toBeInTheDocument()
    expect(screen.getByText(/un caracter especial/i)).toBeInTheDocument()

})