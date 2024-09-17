import category from "../config/models/category";

class CategoryService {

  async createCategory(payload: any) {
    let { category_name } = payload;
    category_name = category_name.toLowerCase().trim();
    
    if (!category_name) {
      return { message: "category name is required", status: 400 };
    }

    // making category_slug with category name
    payload.category_slug = category_name.trim().split(" ").join("-").toLowerCase();
    payload.category_name = category_name;

    const categoryFound = await category.findOne({ category_name });
    if (categoryFound) {
      return { message: "category name is already exists", status: 400 };
    }
    
    await category.create(payload);
    return { message: "category created successfully!", status: 200 };
  }

  async fetchCategory() {
    const list = await category.find({ active: true });
    list.sort((a: any, b: any) => {
        if (a.category_name < b.category_name) return -1;
        if (a.category_name > b.category_name) return 1;
        return 0;  // if category_names are equal
    });
    
    return { message: "categories fetched!", status: 200, data: list };
  }

}

export default CategoryService;
