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
			[
				'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
				'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
				'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
				'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
				'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
			],
			8
		),
		part2: runPart(
			part2,
			[
				'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
				'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
				'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
				'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
				'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
			],
			2286
		)
	};
}

export default main;
