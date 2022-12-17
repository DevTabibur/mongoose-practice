const express = require("express");
const Services = require("../../controllers/services.controller");
const router = express.Router();

router
  .route("/")
  .get(Services.getServicesController)
  .post(Services.postServiceController);

router.route("/:id").get(Services.loadServiceWithId);

module.exports = router;
