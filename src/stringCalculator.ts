import { IInputParser } from './parsers/IInputParser';
import { INumberValidator } from './validators/INumberValidator';

export class StringCalculator {
  private addCallCount = 0;
  constructor(
    private parser: IInputParser,
    private validator: INumberValidator
  ) {}

  public Add(numbers: string): number {
    const nums = this.parser.parseInput(numbers);
    this.validator.validate(nums);
    this.addCallCount++;
    return nums
      .filter(n => n <= 1000) // Ignore numbers larger than 1000
      .reduce((sum, current) => sum + current, 0);
  }

  public GetCalledCount(): number {
    return this.addCallCount;
  }
}
