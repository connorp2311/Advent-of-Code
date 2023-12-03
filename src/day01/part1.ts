// import utils from '../utils';
import * as common from './common';

function main(input: string[]): number {
	let sum = 0;

	input.forEach((line) => {
		const firstNum = common.getFirstNumber(line);
		const lastNum = common.getFirstNumber(line.split('').reverse().join(''));

		if (!firstNum || !lastNum) {
			throw new Error(`No number found: ${line}`);
		}

		sum += common.joinNumbers([firstNum, lastNum]);
	});

	return sum;
}

export default main;
