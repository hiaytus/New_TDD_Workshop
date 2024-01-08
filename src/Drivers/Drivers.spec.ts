// Don't forget to import your functions
import { ageTest, valid } from "./Drivers";
describe("Drivers", () => {
  // ageTest(15);
  test("expect < 16 too young", () => {
    expect(ageTest(15)).toBe("too young")
  })
  test("test eligible age", () => {
    expect(ageTest(18)).toBe("eligible")
  })
  test("test too old", () => {
    expect(ageTest(90)).toBe("too old")
  })
});

// describe("Drivers", () => {
//   // ageTest(18);
//   test("test eligible age", () => {
//     expect(ageTest(18)).toBe("eligible")
//   })
// });

// describe("Drivers", () => {
//   // ageTest(90);
//   test("test too old", () => {
//     expect(ageTest(90)).toBe("too old")
//   })
// });


