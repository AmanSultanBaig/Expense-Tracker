import { Router } from "express";
import categoryService from "../services/category-service";
const router = Router();

router.post("/create-category", async (req, res) => {
  try {
    const _categoryService = new categoryService();
    const response = await _categoryService.createCategory(req.body);
    res.status(response.status || 500).json({ message: response.message });
  } catch (error) {
    console.log(error);
  }
});

router.get("/list-category", async (req: any, res) => {
  try {
    const _categoryService = new categoryService();
    const response = await _categoryService.fetchCategory();
    res.status(response.status || 500).json({ message: response.message, data: response.data });
  } catch (error) {
    console.log(error);
  }
});

export default router;