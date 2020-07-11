const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
/* 
    Configuracion basica
*/
let pathENV = path.resolve(__dirname, '../../.env');
if (fs.existsSync(pathENV)) {
    dotenv.config({
        path: pathENV
    });
}

process.env.PORT = process.env.PORT || 3500;
process.env.DB = process.env.DB || 'mongodb://172.19.0.2/chat';

/* 
    Configuracion de bcrypt
*/
process.env.SALT = process.env.SALT || 10;