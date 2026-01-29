abstract class Customer {
  readonly id: number;
  abstract name?: string;

  constructor(id: number) {
    console.info("Customer initialized");
    this.id = id;
  }

  hello() {
    console.info("Hello");
  }

  abstract sayHello(name: string): void;
}

export class RegularCustomer extends Customer {
  name: string;
  age?: number;

  constructor(id: number, name = "John Doe") {
    super(id);
    this.name = name;
  }

  sayHello(name: string): void {
    console.info(`Hello, ${name}, my name is ${this.name}`);
  }
}
