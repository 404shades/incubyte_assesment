import { INumberValidator } from './INumberValidator';

export class DefaultNumberValidator implements INumberValidator {
  validate(numbers: number[]): void {
    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }
  }
}
