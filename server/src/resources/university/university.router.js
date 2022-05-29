const { Router } = require('express');

const universityControllers = require('./university.controllers');

const router = Router();

router
  .route("/")
  .get(universityControllers.findMany)
  .post(universityControllers.createOne);

router
  .route("/:id")
  .get(universityControllers.findOne)
  .put(universityControllers.updateOne)
  .delete(universityControllers.deleteOne);

module.exports = router;
