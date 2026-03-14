module.exports = (app) => {
  const voyage = require("../controllers/voyage.controller.js");
  const router = require("express").Router();
  router.get("/", voyage.findAll);
  router.post("/", voyage.create);
  router.get("/:id", voyage.findOne);
  router.put("/:id", voyage.update);
  router.delete("/:id", voyage.delete);
  app.use("/api/voyage", router);
};
