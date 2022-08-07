const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

app.use(express.static("public"));
app.use(express.static("files"));

app.use("/api", require("./routes/projectRoute"));
app.use("/api", require("./routes/socialRoute"));

app.get("/", (req, res) => {
  res.send("Be happy server is running...👍 ");
});

module.exports = app;
