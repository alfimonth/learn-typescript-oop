import { Employee, Manager } from "@/classes";

describe("Instance Of", () => {
  const employee = new Employee("John Doe", "IT");
  const manager = new Manager("Jane Doe", "IT");

  it("should have proble using typeof", () => {
    console.info(typeof employee);
    console.info(typeof manager);
  });

  it("should support instanceof", () => {
    expect(employee instanceof Employee).toBe(true);
    expect(employee instanceof Manager).toBe(false);

    expect(manager instanceof Manager).toBe(true);
    expect(manager instanceof Employee).toBe(true);
  });
});
