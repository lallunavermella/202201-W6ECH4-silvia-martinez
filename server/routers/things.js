const express = require("express");
const Thing = require("../db/models/Thing");

const router = express.Router();

router.get("/things", async (req, res) => {
  const things = await Thing.find();
  res.status(200);
  res.json({ things });
});

router.get("/things", async (req, res) => {
  const things = await Things.find();
  res.json({ things });
});

router.get("/things/:idThing", async (req, res) => {
  const thing = await Thing.find();
  res.json({ thing });
});

router.delete("/things/:idThing", async (req, res) => {
  const thing = await Thing.find();
  res.json({ thing });
});

router.post("/things", async (req, res) => {
  const Gatete = req.body;
  const createdThing = await Thing.create(newThing);
  res.status(201);
  res.json(createdThing);
});

router.put("/things", async (req, res) => {
  const newGatete = req.body;
  const modifiedThing = await Thing.create(newThing);
  res.status(201);
  res.json(modifiedThing);
});

module.exports = router;
