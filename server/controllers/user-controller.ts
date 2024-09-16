import { Router } from "express";
import userService from "../services/user-service";
const router = Router();

router.post("/sign-up", async (req, res) => {
  try {
    const _userService = new userService();
    const response = await _userService.createUser(req.body);
    res.status(response.status || 500).json({ message: response.message });
  } catch (error) {
    console.log(error);
  }
});

export default router;