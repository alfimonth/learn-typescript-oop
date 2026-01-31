import { Category } from "@/classes";

describe ("Getter and Setter", () => {
  it('should can have getter and setter', () => {
    const category: Category = new Category();
    
    category.name = 'Electronics';
    console.info(category.name);
  })
})