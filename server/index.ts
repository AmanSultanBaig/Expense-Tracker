import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import userController from "./controllers/user-controller";
import categoryController from "./controllers/category-controller";
import expenseController from "./controllers/expense-controller";
import budgetController from "./controllers/budget-controller";
import dbConnection from "./config/connection";
import { errorHandler } from "./middlewares/error-handler";
import { authenticate } from "./middlewares/authenticate";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors())
app.use("/api/v1", userController);
app.use("/api/v1", authenticate, categoryController);
app.use("/api/v1", authenticate, expenseController);
app.use("/api/v1", authenticate, budgetController);

// Error Handling Middleware
app.use(errorHandler);

const startApplication = async () => {
  await dbConnection;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startApplication();
