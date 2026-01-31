export class Category {
  _name?: string;

  /**
   * Constructor to initialize a Category instance.
   * Logs a message to the console to indicate initialization.
   */
  constructor() {
    console.info("Category initialized");
  }

  /**
   * Returns the name of the category.
   */
  get name(): string {
    return this._name ? this._name : "empty";
  }

  /**
   * Sets the name of the category.
   */
  set name(value: string) {
    value && (this._name = value);
  }
}
