const { Router } = require('express');

const professorControllers = require('./professor.controllers');

const router = Router();

router
  .route("/")
  .get(professorControllers.findMany)
  .post(professorControllers.createOne);

router
  .route("/:id")
  .get(professorControllers.findOne)
  .put(professorControllers.updateOne)
  .delete(professorControllers.deleteOne);

router
  .route("/:id/university")
  .get(professorControllers.findMany);

module.exports = router;