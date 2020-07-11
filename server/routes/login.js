const { Router } = require('express');

const { SingIn } = require('../controllers/login');

const router = Router();

router.post('/api/singIn', SingIn);

module.exports = router;