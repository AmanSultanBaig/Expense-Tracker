import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: true,
  },
  category_slug: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
}, {
  timestamps: true
});

const Category = mongoose.model('Category', categorySchema);

export default Category;