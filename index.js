import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.listen(80, () => {
  console.log("server is running at port :  ",80);
});
