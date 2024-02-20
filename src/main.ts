import { DefaultInputParser } from './parsers/DefaultInputParser';
import { StringCalculator } from './stringCalculator';
import { DefaultNumberValidator } from './validators/DefaultNumberValidator';

const calculator = new StringCalculator(
  new DefaultInputParser(),
  new DefaultNumberValidator()
);
