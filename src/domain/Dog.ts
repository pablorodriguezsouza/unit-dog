/**
 * Represents a dog object.
 *
 * @class
 */
export class Dog {
  name: string;
  breed: string;
  age: number;
  color: string;
  isSleeping: boolean;
  tricks: string[];

  /**
   * Creates an instance of the Dog class.
   *
   * @constructor
   * @param name - The name of the dog.
   * @param breed - The breed of the dog.
   * @param age - The age of the dog.
   * @param color - The color of the dog's fur.
   */
  constructor(name: string, breed: string, age: number, color: string) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.color = color;
    this.isSleeping = false;
    this.tricks = [];
  }

  /**
   * Returns a string that contains the name and breed of the dog.
   *
   * @return The description of a dog.
   */
  getDescription(): string {
    return `${this.name} is a ${this.breed}.`;
  }

  /**
   * Makes the dog sleep.
   *
   * @return A message indicating that the dog is now sleeping.
   */
  sleep(): string {
    this.isSleeping = true;
    return `${this.name} is now sleeping.`;
  }

  /**
   * Wakes up the sleeping dog.
   *
   * @return A message indicating that the dog woke up.
   */
  wakeUp(): string {
    this.isSleeping = false;
    return `${this.name} woke up.`;
  }

  /**
   * Teaches the dog a new trick.
   *
   * @param trick - The trick to be taught to the dog.
   * @return A message indicating that the dog learned a new trick.
   */
  learnTrick(trick: string): string {
    if (trick === null || trick === "") {
      throw new Error("Trick cannot be empty");
    }
    this.tricks.push(trick);
    return `${this.name} learned a new trick: ${trick}.`;
  }

  /**
   * Makes the dog bark.
   *
   * @return A message indicating "Woof! Woof!".
   */
  bark(): string {
    return "Woof! Woof!";
  }

  /**
   * Displays information about the dog.
   *
   * @return All the information about the dog.
   */
  displayInfo(): string {
    return `Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age}, Color: ${this.color}, Sleeping: ${this.isSleeping}, Tricks: ${this.tricks.join(", ")}`;
  }
}
