import { Greeter } from "../src/Greeter";

describe("Greeter class", () => {
  test("The constructor correctly sets the greeting property", () => {
    const greeter = new Greeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("It returns the composed greeting based on the greeting property and name parameter", () => {
    const greeter = new Greeter("Hello");
    expect(greeter.greet("Andrew")).toBe("Hello, Andrew!");
  });
});
