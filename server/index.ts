import express from "express";
import dotenv from "dotenv";
import userController from "./controllers/user-controller";
import categoryController from "./controllers/category-controller";
import dbConnection from "./config/connection";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/api/v1", userController);
app.use("/api/v1", categoryController);

const startApplication = async () => {
  await dbConnection;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startApplication();
