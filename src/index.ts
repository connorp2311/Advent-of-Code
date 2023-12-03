import { readFileSync } from 'fs';
import path from 'path';
import utils from './utils/index';

let day = 0;
let part = 0;

process.argv.forEach((arg) => {
	if (arg.startsWith('--day=')) {
		day = parseInt(arg.split('=')[1], 10);
	}
	if (arg.startsWith('--part=')) {
		part = parseInt(arg.split('=')[1], 10);
	}
});

process.env.npm_config_day = day.toString();

const parseInput = (path: string) => {
	const input = readFileSync(path, {
		encoding: 'utf-8'
	});

	const lines = input.split('\n');
	if (lines[lines.length - 1] === '') {
		lines.pop();
	}

	return lines;
};

const outputSolution = async (part: number) => {
	const dayFormatted = utils.formatDay(day);
	const basePath = path.join(__dirname, `./day${dayFormatted}`);

	try {
		const solutionInput = parseInput(path.join(basePath, 'input.txt'));
		const solutionFunction = await import(
			`./day${dayFormatted}/part${part}.js`
		);
		const solution = solutionFunction.default(solutionInput);

		const testFunction = await import(`./day${dayFormatted}/test.js`);
		const test = testFunction.default();

		console.log('\n-------------------------------------');
		console.log(`Test: ${JSON.stringify(test, null, 2)}`);
		console.log(`Day ${day} Part ${part} Solution: ${solution}`);
		console.log('-------------------------------------');
	} catch (error) {
		console.error(
			`An error occurred while processing Day ${day} Part ${part}:`,
			error
		);
	}
};

const validate = (type: 'day' | 'part', num: number, max: number) => {
	if (num < 1 || num > max + 1)
		throw new Error(
			`The ${type} must be number between 1 and ${max}, you entered ${num}`
		);
};

validate('day', day, 25);
validate('part', part, 2);

outputSolution(part);
