const { Router } = require('express');

const universityControllers = require('./university.controllers');

const router = Router();

router.post("/", universityControllers.createOne);

module.exports = router;
