import { beforeEach, describe, expect, test } from "vitest";
import { Dog } from "../domain/Dog";

describe("Dog class tests", () => {
  let dog: Dog;

  beforeEach(() => {
    dog = new Dog("Buddy", "Golden Retriever", 2, "Golden");
  });

  test("Dog can bark", () => {
    expect(dog.bark()).toBe("Woof! Woof!");
  });

  test("Dog can sleep and wake up", () => {
    expect(dog.sleep()).toBe("Buddy is now sleeping.");
    expect(dog.isSleeping).toBe(true);
    expect(dog.wakeUp()).toBe("Buddy woke up.");
    expect(dog.isSleeping).toBe(false);
  });

  test("Dog can learn a new trick", () => {
    expect(dog.learnTrick("roll over")).toBe("Buddy learned a new trick: roll over.");
    expect(dog.tricks).toContain("roll over");
  });

  test("Dog cannot learn an empty trick", () => {
    expect(() => dog.learnTrick("")).toThrow("Trick cannot be empty");
  });

  test("Dog description is correct", () => {
    expect(dog.getDescription()).toBe("Buddy is a Golden Retriever.");
  });

  test("Dog display info is correct", () => {
    expect(dog.displayInfo()).toBe(
      "Name: Buddy, Breed: Golden Retriever, Age: 2, Color: Golden, Sleeping: false, Tricks: "
    );
  });
});
