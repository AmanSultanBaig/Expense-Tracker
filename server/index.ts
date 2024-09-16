import express from "express";
import dotenv from "dotenv";

import dbConnection from "./config/connection";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const startApplication = async () => {
  await dbConnection;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startApplication();
