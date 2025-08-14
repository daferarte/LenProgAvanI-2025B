const generarPassword = require('./generarPassword');

test('Debe generar una contrasenia de la longitud especificada', () =>{
    expect(generarPassword(10)).toHaveLength(10)
})

test('Debe lanzar un error si la longitud es menor a 6', () =>{
    expect(() => generarPassword(5)).toThrow('La contrasenia debe tener al menos 6 caracteres')
})

