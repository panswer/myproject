const jwt = require('jsonwebtoken');

const VerificaToken = (req, res, next) => {
    let token = req.headers.token;
    let usuario = jwt.verify(token, 'hola', (err, user) => {
        if (err) {
            return res.status(412).json(err);
        }
        req.usuario = user;
        next();
    });
}

module.exports = {
    VerificaToken
}