const express = require("express");
const port = 4000;

const app = express();
app.use((req, res, next) => {
  res.send("Hellow Word");
  next();
});

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
