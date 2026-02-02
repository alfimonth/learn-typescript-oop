import { Person } from "./person.class";

export class Employee extends Person {
  department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  sayHello(name: string): void {
    console.info(`Hello, ${name}, my name is ${this.name}`);
  }
}