import { StringCalculator } from './stringCalculator';
import { DefaultInputParser } from './parsers/DefaultInputParser';
import { DefaultNumberValidator } from './validators/DefaultNumberValidator';

const calculator = new StringCalculator(
  new DefaultInputParser(),
  new DefaultNumberValidator()
);
