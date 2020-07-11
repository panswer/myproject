const User = require('../models/user');
const bcrypt = require('bcrypt');

const RegisterUser = async(req, res) => {
    /* 
        body:{}
        header:{}
    */

    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, Number(process.env.SALT))
    });

    try {
        let userSave = await newUser.save();

        delete userSave.password;

        res.json({
            user: userSave
        });
    } catch (err) {
        let reg = /Error, expected `email` to be unique. Value:/;
        let email = reg.test(err.message);
        if (email) {
            err = 'El correo tiene que ser unico'
        }
        return res.status(422).json(err);
    }
}

const ViewUser = async(req, res) => {
    try {
        console.log(req.usuario);
        let [user] = await User.find({ _id: req.usuario._id }).lean();

        res.json({
            user
        });
    } catch (err) {
        res.status(412).json(err)
    }
}

module.exports = {
    RegisterUser,
    ViewUser
}