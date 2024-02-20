// src/cli.ts

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { DefaultInputParser } from './parsers/DefaultInputParser';
import { DefaultNumberValidator } from './validators/DefaultNumberValidator';
import { StringCalculator } from './stringCalculator';

// Configure yargs to parse command-line arguments
yargs(hideBin(process.argv))
  .command(
    '$0 <input>',
    'Calculate the sum of numbers in a string',
    (yargs) => {
      yargs.positional('input', {
        describe: 'Input string to calculate',
        type: 'string',
      });
    },
    (argv) => {
      const input = argv.input as string;
      console.log(input)
      const calculator = new StringCalculator(new DefaultInputParser(), new DefaultNumberValidator());

      try {
        const result = calculator.Add(input);
        console.log(`The result is: ${result}`);
      } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
      }
    }
  )
  .parse();
