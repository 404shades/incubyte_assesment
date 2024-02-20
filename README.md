
# String Calculator CLI

The String Calculator CLI is a command-line application written in TypeScript that allows users to input a string of numbers and calculate their sum based on specified delimiters. This application supports custom delimiters, ignores numbers greater than 1000, and provides functionality to handle new lines between numbers and multiple delimiters.

## Features

- Calculate the sum of numbers provided in a string format.
- Support for custom delimiters of any length.
- Ability to handle new lines between numbers as an alternative to commas.
- Ignore numbers larger than 1000.
- Support for multiple delimiters.
- Throws an exception for negative numbers, listing all negatives in the input.

## Prerequisites

- Node.js installed on your system.
- npm (Node Package Manager), which comes with Node.js.

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/404shades/incubyte_assesment.git
   cd string-calculator-cli
   ```

2. **Install dependencies**

   Navigate to the project directory and run:

   ```bash
   npm install
   ```

3. **Build the project** 

   ```bash
   npm run tsc
   ```
4. **Execute Test Cases**

    ```bash
    npm run test
    ```

## Usage

After installation, you can run the String Calculator CLI directly using `npm` scripts or `ts-node`.

- **Using npm script**

  ```bash
  npm run cli -- "<input-string>"
  ```

- **Using ts-node**

  First, ensure `ts-node` is installed globally or use the local version in the project:

  ```bash
  npm install -g ts-node
  ```

  Then, you can run:

  ```bash
  ts-node src/cli.ts "<input-string>"
  ```

### Examples

- **Simple sum**

  ```bash
  npm run cli -- "1,2,3"
  ```

- **Using custom delimiters**

  ```bash
  npm run cli -- "//[***]
1***2***3"
  ```

- **Multiple delimiters**

  ```bash
  npm run cli -- "//[*][%]
1*2%3"
  ```



