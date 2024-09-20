import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema(
  {
    budget: {
      type: Number,
      required: true,
    },
    saving: {
      type: Number,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    year_month: {
        type: Number,
        required: true
    },
  },
  {
    timestamps: true,
  }
);

const Budget = mongoose.model("Budget", budgetSchema);

export default Budget;
