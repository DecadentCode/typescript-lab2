import { HtmlGreeter } from "../src/HtmlGreeter";

describe("HtmlGreeter class", () => {
  test("The constructor correctly sets the tagName property", () => {
    const htmlGreeter = new HtmlGreeter("hello", "div");
    expect(htmlGreeter.tagName).toBe("div");
  });
  test("Default value for tagName is h1", () => {
    const htmlGreeter = new HtmlGreeter("Hello");
    expect(htmlGreeter.tagName).toBe("h1");
  });
  test("The second parameter sets the tag", () => {
    const htmlGreeter = new HtmlGreeter("hello", "div");
    expect(htmlGreeter.tagName).toBe("div");
  });
  test("Override the greet method to wrap the result in the specified HTML tag", () => {
    const htmlGreeter = new HtmlGreeter("Hello", "div");
    expect(htmlGreeter.greet("Mitch")).toBe("<div>Hello, Mitch!</div>");
  });
});
