const { Router } = require('express');

const { VerificaToken } = require('../middelwares/autenticacion');

const { RegisterUser, ViewUser } = require('../controllers/user');

const router = Router();

router.post('/api/register', RegisterUser);
router.get('/api/user', [VerificaToken], ViewUser);

module.exports = router;