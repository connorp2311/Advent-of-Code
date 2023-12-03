import part1 from './part1';
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
			['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'],
			142
		),
		part2: runPart(
			part2,
			[
				'two1nine',
				'eightwothree',
				'abcone2threexyz',
				'xtwone3four',
				'4nineeightseven2',
				'zoneight234',
				'7pqrstsixteen'
			],
			281
		)
	};
}

export default main;
