const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const USERS = [
    {
        username: "usuario1",
        password: bcrypt.hashSync("password123", 10)
    }
]

const authenticateUser = (username, password) =>{
    const user = USERS.find(u => u.username === username);
    if(!user || !bcrypt.compareSync(password, user.password)){
        return null;
    }

    return jwt.sign({
        username: user.username
    },
    'secreto',{ expiresIn:'1h'});

}

module.exports = {authenticateUser}



