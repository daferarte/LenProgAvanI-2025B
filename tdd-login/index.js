const express = require('express');
const {authenticateUser} = require('./auth');
const { isPasswordSecure } = require('./passwordValidator');

require('dotenv').config();

const app = express();
app.use(express.json());


app.post('/login', async(req, res) => {

    const {username, password} = req.body;

    //validar la seguridad de la contraseña
    const validationError =isPasswordSecure(password);
    if (validationError){
        res.status(400).json({'error': validationError});
    }

    const token = authenticateUser(username, password);

    if(token === 'Credenciales invalidas') return res.status(400).json({'error': token});
    
    
    res.json({token})
})



module.exports = app



