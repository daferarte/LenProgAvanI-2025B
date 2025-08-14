const request = require('supertest');
const app = require('../index.js');

describe('POST /login', () =>{
    test('Debe devolver un token cuando las credenciales son correctas', async() => {
        const response = await request(app).post('/login').send({
            username: "usuario1",
            password: "Password@123"
        });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
    })

    test('Debe fallar si la contraseña no tiene mayusculas', async () => {
        const response = await request(app).post('/login').send({
            username: "usuario1",
            password: "password@123"
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error', 'La contraseña debe incluir al menos una mayuscula.');
    })

    test('Debe fallar si la contraseña no tiene caracteres especiales', async () => {
        const response = await request(app).post('/login').send({
            username: "usuario1",
            password: "Password123"
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error', 'La contraseña debe incluir al menos uncaracter especial.');
    })

    test('Debe fallar si la contraseña no tiene numeros', async () => {
        const response = await request(app).post('/login').send({
            username: "usuario1",
            password: "Password@"
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error', 'La contraseña debe incluir al menos un numero.');
    })

    test('Debe fallar si la contraseña es menor a 8 caracteres', async () => {
        const response = await request(app).post('/login').send({
            username: "usuario1",
            password: "Pas@12"
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error', 'La contraseña debe incluir al menos 8 caracteres.');
    })

    test('Debe fallar si las credenciales son incorrectas', async() => {
        const response = await request(app).post('/login').send({
            username: "usuario1",
            password: "Wrongpassword@123"
        });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error', 'Credenciales invalidas');
    })


})