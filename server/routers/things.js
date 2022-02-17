const express = require("express");
const Things = require("../db/models/Thing");

const router = express.Router();

router.get("/things", async (req, res) => {
  const things = await Things.find();
  res.json({ things });
});

/* router.get("/things/:idThing", async (req, res) => {
  const thing = await Thing.find();
  res.json({ thing });
});

router.delete("/things/:idThing", async (req, res) => {
  const thing = await Thing.find();
  res.json({ thing });
});

router.post("/things", async (req, res) => {
  const thing = req.body;
  const createdThing = await Thing.create(thing);
  res.status(201);
  res.json(createdThing);
});

router.put("/things", async (req, res) => {
  const thing = req.body;
  const modifiedThing = await Thing.create(newThing);
  res.status(201);
  res.json(modifiedThing);
}); */

module.exports = router;
