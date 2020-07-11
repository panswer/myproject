const { Router } = require('express');

const router = Router();

// routas de usuario
router.use(require('./user'));
// rutas de iniciar sesion
router.use(require('./login'));

module.exports = router;