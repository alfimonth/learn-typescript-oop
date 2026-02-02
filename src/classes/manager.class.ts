import { Employee } from "./employee.class";

export class Manager extends Employee {
  sayHello(name: string): void {
    super.sayHello(name);
    console.info(`Hello, ${name}, my name is ${this.name}, I am your manager`);
  }
}