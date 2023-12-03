// import utils from '../utils';
import * as common from './common';

function convertWordsToNumbers(input: string, reverse: boolean): string {
	const wordBank: Record<string, number> = {
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9
	};

	const reversedInput = input.split('').reverse().join('');
	let output = '';

	for (let i = 0; i < input.length; i++) {
		let found = false;
		for (const word in wordBank) {
			if (reverse) {
				const wordReversed = word.split('').reverse().join('');
				if (reversedInput.indexOf(wordReversed, i) === i) {
					found = true;
					output = wordBank[word] + output;
					i += word.length - 1;
					break;
				}
			} else {
				if (input.indexOf(word, i) === i) {
					found = true;
					output += wordBank[word];
					i += word.length - 1;
					break;
				}
			}
		}

		if (!found) {
			if (reverse) {
				output = reversedInput[i] + output;
			} else {
				output += input[i];
			}
		}
	}

	return output;
}

function main(input: string[]): number {
	let sum = 0;

	input.forEach((line) => {
		const convertedLine = convertWordsToNumbers(line, false);
		const reversedConvertedLine = convertWordsToNumbers(line, true)
			.split('')
			.reverse()
			.join('');

		const firstNum = common.getFirstNumber(convertedLine);
		const lastNum = common.getFirstNumber(reversedConvertedLine);

		if (!firstNum || !lastNum) {
			throw new Error(`No number found: ${line}`);
		}

		sum += common.joinNumbers([firstNum, lastNum]);
	});

	return sum;
}

export default main;
