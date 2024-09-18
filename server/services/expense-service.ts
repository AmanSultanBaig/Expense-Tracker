import expenseModel from "../config/models/expense";
import { ObjectId } from "mongodb";

class ExpenseService {
  async createExpense(expense: any) {
    await expenseModel.create(expense);
    return { message: "expense added successfully!", status: 200 };
  }

  async fetchExpense(user_id: string, year_month: Number) {
    let userId = new ObjectId(user_id);
    const data = await expenseModel.find({ user_id: userId, year_month });
    return { message: "expense fetched", status: 200, data };
  }

  async updateExpense(data: any, id: string) {
    const objectId = new ObjectId(id);
    await expenseModel.updateOne({ _id: objectId }, data);
    return { message: "expense updated successfully!", status: 200 };
  }

  async removeExpense(user_id: string, id: string) {
    const objectId = new ObjectId(id);
    await expenseModel.deleteOne({ user_id, _id: objectId });
    return { message: "expense deleted successfully!", status: 200 };
  }
}

export default ExpenseService;
