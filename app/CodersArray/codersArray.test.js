import CodersArray from "./codersArray";

describe("Given an object CodersArray", () => {
  describe("When it receives 5", () => {
    test("Then it returns 1", () => {
      const inputNumber = 5;
      const expectedresult = 1;

      const result = new CodersArray().push(inputNumber);

      expect(result).toBe(expectedresult);
    });
  });
});
