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
});
