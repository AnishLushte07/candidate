const express = require('express');
const controller = require('./candidate.controller');

const router = express.Router();

router.get('/download', controller.download);

router.post('/', controller.create);

module.exports = router;
