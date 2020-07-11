const { Schema, model } = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
}, {
    timestamps: {
        createdAt: 'create',
        updatedAt: 'update'
    }
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = model('user', UserSchema);