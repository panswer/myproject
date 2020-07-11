/* 
    Dependencias
*/
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

/* 
    Configuracion
*/
const app = express();

app.use(cors());

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());
require('./config/config');

/* 
    Routas
*/
app.use(require('./routes/index'));

/* 
    Coneccion a la base de datos
*/
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Conected to data base`);
    }
});

/* 
    Inicio de servicio
*/
app.listen(process.env.PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server on port ${process.env.PORT}`);
    }
});