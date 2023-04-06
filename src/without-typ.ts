import express from "express";

const app = express();

app.route("/").get((req, res) => {
  res.send("hi.. coba router express");
});

app.listen(8000);
