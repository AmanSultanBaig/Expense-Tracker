import { Router } from "express";
import expenseService from "../services/expense-service";
import moment from 'moment';
const router = Router();

router.post("/create-expense", async (req, res) => {
  try {
    const _expenseService = new expenseService();
    const response = await _expenseService.createExpense(req.body);
    res.status(response.status || 500).json({ message: response.message });
  } catch (error) {
    console.log(error);
  }
});

router.post("/list-expense", async (req: any, res) => {
  try {
    const { date } = req.body;
    const user_id = req.user.id;
    const year_month = Number(moment(date).format("YYYYMM"));
    const _expenseService = new expenseService();
    const response = await _expenseService.fetchExpense(user_id, year_month);
    res.status(response.status || 500).json({ message: response.message, data: response.data });
  } catch (error) {
    console.log(error);
  }
});

router.put("/update-expense", async (req: any, res) => {
  try {
    const { id, data } = req.body;
    const _expenseService = new expenseService();
    const response = await _expenseService.updateExpense(data, id);
    res.status(response.status || 500).json({ message: response.message });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete-expense", async (req: any, res) => {
  try {
    const { id } = req.body;
    const user_id = req.user.id;
    const _expenseService = new expenseService();
    const response = await _expenseService.removeExpense(user_id, id);
    res.status(response.status || 500).json({ message: response.message });
  } catch (error) {
    console.log(error);
  }
});

export default router;