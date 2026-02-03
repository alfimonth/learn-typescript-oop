import { Person } from "@/classes";

describe("Inheritance", () => {
  it('should can have interface', () => {
    const person = new Person('John Doe');
    person.sayHello('John Doe');
  });
})