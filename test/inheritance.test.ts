import { Employee, Manager, Director } from "@/classes";
describe("Inheritance", () => {
  it("should can have inheritance", () => {
    const employee: Employee = new Employee('John Doe', 'IT');
    console.info(employee.name);

    const manager: Manager = new Manager('John Doe', 'IT');
    console.info(manager.name);

    const director: Director = new Director('John Doe', 'IT');
    console.info(director.name);
  });
});
