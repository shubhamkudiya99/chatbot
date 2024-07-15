const router = require('express').Router();
const {getMessage} = require('../controller/index');

router.post('/', getMessage);

module.exports.router = router;