import { StringCalculator } from "../string_calculator";

describe('StringCalculator', () => {
  it('should return 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("")).toBe(0);
  });
});
