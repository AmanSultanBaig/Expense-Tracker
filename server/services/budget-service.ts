import budget from "../config/models/budget";

class BudgetService {
  async createBudget(payload: any) {
    const { year_month, user_id } = payload;
    await budget.deleteOne({ year_month, user_id });
    await budget.create(payload);

    return { message: "Budget saved successfully!", status: 200 };
  }

  async fetchBudget(payload: any) {
    const { year_month, user_id } = payload;
    const data = await budget.findOne({ year_month, user_id });

    return { message: "Budget fetched successfully!", status: 200, data };
  }
}

export default BudgetService;
