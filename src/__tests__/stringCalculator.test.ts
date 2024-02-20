import { DefaultInputParser } from '../parsers/DefaultInputParser';
import { StringCalculator } from '../stringCalculator';
import { DefaultNumberValidator } from '../validators/DefaultNumberValidator';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    const parser = new DefaultInputParser();
    const validator = new DefaultNumberValidator();
    calculator = new StringCalculator(parser, validator);
  });

  it('returns 0 for an empty string', () => {
    expect(calculator.Add("")).toBe(0);
  });

  it('returns the number itself when only one number is provided', () => {
    expect(calculator.Add("1")).toBe(1);
  });

  it('returns the sum of two comma-separated numbers', () => {
    expect(calculator.Add("1,2")).toBe(3);
  });

  it('handles an unknown amount of numbers', () => {
    expect(calculator.Add("1,2,3,4,5")).toBe(15);
  });

  it('supports new line as a valid delimiter', () => {
    expect(calculator.Add("1\n2,3")).toBe(6);
  });

  it('supports custom delimiter of any length', () => {
    expect(calculator.Add("//[***]\n1***2***3")).toBe(6);
  });

  it('allows multiple delimiters', () => {
    expect(calculator.Add("//[*][%]\n1*2%3")).toBe(6);
  });

  it('handles multiple delimiters with length longer than one char', () => {
    expect(calculator.Add("//[**][%%]\n1**2%%3")).toBe(6);
  });

  it('ignores numbers greater than 1000', () => {
    expect(calculator.Add("2,1001")).toBe(2);
  });

  it('throws an exception with negatives not allowed and shows negative numbers', () => {
    expect(() => calculator.Add("1,-2,3,-4")).toThrow('Negatives not allowed: -2, -4');
  });

  it('returns the number of Add invocations', () => {
    calculator.Add("1");
    calculator.Add("2,3");
    expect(calculator.GetCalledCount()).toBe(2);
  });

  it('handles complex input with multiple custom delimiters and ignores >1000', () => {
    expect(calculator.Add("//[***][%%%]\n1***2%%%3,1002\n1001***4")).toBe(10);
  });

  it('correctly processes input with no numbers as 0', () => {
    expect(calculator.Add("//;\n")).toBe(0);
  });
});
