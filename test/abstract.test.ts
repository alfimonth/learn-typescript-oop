import { RegularCustomer as Customer } from "@/classes";

describe('Abstract Class', () => {
  it('should support abstract class', () => {
    const customer1 = new Customer(1);
    customer1.sayHello('John Doe');
  })
})