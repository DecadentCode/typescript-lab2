import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter class", () => {
  test("The constructor correctly sets the greeting property", () => {
    const greeter = new JavaScriptGreeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("Overrides .greet('') so it says 'console.log('Hello, Andrew!')", () => {
    const greeter = new JavaScriptGreeter("Hello");
    expect(greeter.greet("Andrew")).toBe("console.log('Hello, Andrew!')");
  });
});
