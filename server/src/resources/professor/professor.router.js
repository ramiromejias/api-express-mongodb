const { Router } = require('express');

const professorControllers = require('./professor.controllers');

const router = Router();

router
  .route("/")
  .get(professorControllers.findMany)
  .post(professorControllers.createOne)
  .delete(professorControllers.deleteAll);

router
  .route("/:id")
  .get(professorControllers.findOne)
  .put(professorControllers.updateOne)
  .delete(professorControllers.deleteOne);

module.exports = router;