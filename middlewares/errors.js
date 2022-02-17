const errors = () => {
  app.use((req, res) => {
    res.status(404);
    res.json({ error: true, message: "Not found" });
  });
  app.use((err, req, res, next) => {
    res.status(500);
    res.json({ error: true, message: "ERRRRROR" });
  });
};

module.exports = errors;
