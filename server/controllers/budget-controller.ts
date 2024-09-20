import { Router } from "express";
import budgetService from "../services/budget-service";
const router = Router();

router.post("/create-budget", async (req: any, res) => {
  try {
    req.body.user_id = req.user.id;
    const _budgetService = new budgetService();
    const response = await _budgetService.createBudget(req.body);
    res.status(response.status || 500).json({ message: response.message });
  } catch (error) {
    console.log(error);
  }
});

router.post("/get-budget", async (req: any, res) => {
  try {
    req.body.user_id = req.user.id;
    const _budgetService = new budgetService();
    const response = await _budgetService.fetchBudget(req.body);
    res.status(response.status || 500).json({ message: response.message, data: response.data });
  } catch (error) {
    console.log(error);
  }
});

export default router;
