const express = require("express");
const app = express();

app.set("view engine", "pug");
app.listen(process.env.PORT || 3000, () => {
  console.log("listening on *:5000");
});

app.use("/assets", express.static(__dirname + "/assets/"));

app.get("/", (req, res) => {
  res.render("index");
});
