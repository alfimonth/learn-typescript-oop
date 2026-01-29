import { RegularCustomer as Customer, Order } from "@/classes";

describe("Class", () => {
  it("should can create class", () => {
    const customer: Customer = new Customer(1, 'John One');
    const order: Order = new Order();
  });

  it("should can create constructor", () => {
    new Customer(2, 'John Two');
    new Order();
  });
});
