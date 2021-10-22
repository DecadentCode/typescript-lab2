import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test("The constructor correctly sets the greeting property", () => {
    const loudGreater = new LoudGreeter("Hello");
    expect(loudGreater.greeting).toBe("Hello");
  });
  test("Override the greet method to add the extra exclamation points to the end - call addVolume zero times", () => {
    const loudGreeter = new LoudGreeter("Hello");
    expect(loudGreeter.greet("Andrew")).toBe("Hello, Andrew!!");
  });
  test("Override the greet method to add the extra exclamation points to the end - call addVolume 2 times", () => {
    const loudGreeter = new LoudGreeter("Hello");
    loudGreeter.addVolume();
    loudGreeter.addVolume();
    expect(loudGreeter.greet("Andrew")).toBe("Hello, Andrew!!!!");
  });
});
