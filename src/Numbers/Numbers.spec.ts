import { sum, subtract, multiply } from "./Numbers";

describe("Numbers", () => {
  test("sum() should add two numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });
  test("subtract() should subtract two numbers", () => {
    expect(subtract(3, 1)).toEqual(2);
  });
  test("multiply() should multiply two numbers", () => {
    expect(multiply(3, 1)).toEqual(3);
  });
});
