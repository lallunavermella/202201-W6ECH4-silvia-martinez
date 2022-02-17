const express = require("express");
const Thing = require("../db/models/Thing");

const router = express.Router();

router.get("/", async (req, res) => {
  const things = await Thing.find();
  res.status(200);
  res.json({ things });
});

router.get("/:idThing", async (req, res) => {
  const thing = await Thing.findById(req.params.idThing);
  res.status(200);
  res.json({ thing });
});

router.delete("/:idThing", async (req, res) => {
  const thing = await Thing.findByIdAndDelete(req.params.idThing);
  res.status(202);
  res.json({ thing });
});

router.post("/", async (req, res) => {
  const newThing = req.body;
  const createdThing = await Thing.create(newThing);
  res.status(201);
  res.json(createdThing);
});

router.put("/", async (req, res) => {
  const { _id: id } = req.body;
  const createdThing = await Thing.findByIdAndUpdate(id, req.body);
  res.status(201);
  res.json(createdThing);
});

module.exports = router;
