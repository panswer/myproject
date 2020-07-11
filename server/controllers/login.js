const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SingIn = async(req, res) => {
    try {
        let [user] = await User.find({ email: req.body.email }).lean();

        if (!user) {
            throw new Error('El usuario no existe');
        }

        let valido = bcrypt.compareSync(req.body.password, user.password);

        let random = parseInt(Math.random() * 1000);

        user.random = random;

        let token = jwt.sign(user, 'hola', {
            expiresIn: 1000 * 60 * 60
        });

        if (valido) {
            res.json({
                message: 'tienes acceso',
                token
            });
        } else {
            res.status(412).json({
                message: 'No tienes acceso'
            });
        }
    } catch (err) {
        res.status(412).json(err);
    }
}

module.exports = {
    SingIn
}