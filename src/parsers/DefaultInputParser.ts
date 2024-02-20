import { IInputParser } from "./IInputParser";

export class DefaultInputParser implements IInputParser {
    parseInput(input: string): number[] {
        let delimiters = [',', '\n'];
        let numbers = input;
        // Check for custom delimteres
        const match = input.match(/\/\/(.*?)\n/); // Store the match result to a variable

        if (match) { // Check if match is not null
            const delimiterPart = match[1]; // Safe to access since we checked match is not null
            numbers = input.split('\n').slice(1).join('\n');

            if (delimiterPart.startsWith('[') && delimiterPart.endsWith(']')) {
                delimiters = delimiterPart.slice(1, -1).split('][');
            } else {
                delimiters.push(delimiterPart);
            }
        }
        //converting string of numbers to array of numbers
        const regex = new RegExp(`[${delimiters.map(d => d.replace(/[*+.?^${}()|[\]\\]/g, '\\$&')).join('')}]`);
        return numbers
            .split(regex)
            .filter(n => n !== '')
            .map(n => parseInt(n, 10))
            .filter(n => !isNaN(n) && n <= 1000);
    }
}
