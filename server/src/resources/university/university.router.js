const { Router } = require("express");

const universityControllers = require("./university.controllers");

const router = Router();

router
  .route("/")
  .get(universityControllers.findMany)
  .post(universityControllers.createOne)
  .delete(universityControllers.deleteAll);

router
  .route("/:id")
  .get(universityControllers.findOne)
  .put(universityControllers.updateOne)
  .delete(universityControllers.deleteOne);

router.route("/:id/professors").get(universityControllers.findMany);

module.exports = router;
