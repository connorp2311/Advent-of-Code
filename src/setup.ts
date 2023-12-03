import { existsSync, mkdirSync, writeFileSync } from 'fs';
import utils from './utils/index';

const genPart = (part: 1 | 2) => `// import utils from '../utils';
// import * as common from './common';

function main(input: string[]): number {
	let sum = 0;

	// TODO: Complete Part ${part}

	input.forEach((line) => {
		console.log(line);
		sum++;
	});

	return sum;
}

export default main;


`;

const genTest = () => `import part1 from './part1';
import part2 from './part2';

interface Result {
	passed: boolean;
	answer: number;
	result: number;
}

interface Results {
	part1: Result;
	part2: Result;
}

function runPart(
	part: (input: string[]) => number,
	input: string[],
	expectedAnswer: number
): Result {
	let result: number;

	try {
		result = part(input);
	} catch (error) {
		result = NaN;
		console.log(error);
	}

	return {
		passed: expectedAnswer === result,
		answer: expectedAnswer,
		result
	};
}

function main(): Results {
	return {
		part1: runPart(
			part1,
			['123', '123'],
			0
		),
		part2: runPart(
			part2,
			['123', '123'],
			0
		)
	};
}

export default main;

`;

const genCommon = () => `// import utils from '../utils';

function test() {
	console.log('test');
}

export default test;

`;

const setupDay = (day: number) => {
	const dir = `./src/day${utils.formatDay(day)}`;

	mkdirSync(dir);
	writeFileSync(`${dir}/input.txt`, '');
	writeFileSync(`${dir}/part1.ts`, genPart(1));
	writeFileSync(`${dir}/part2.ts`, genPart(2));
	writeFileSync(`${dir}/common.ts`, genCommon());
	writeFileSync(`${dir}/test.ts`, genTest());
};

const checkDay = (day: number) => {
	try {
		if (existsSync(`./src/day${utils.formatDay(day)}`)) {
			return true;
		}
	} catch (error) {
		return false;
	}
	return false;
};

for (let day = 1; day <= 25; day++) {
	// check if the days folder exists
	if (!checkDay(day)) {
		setupDay(day);
		console.log(`Day ${day} setup complete`);
	} else {
		console.log(`Day ${day} already exists`);
	}
}
