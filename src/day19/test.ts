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
		part1: runPart(part1, ['123', '123'], 0),
		part2: runPart(part2, ['123', '123'], 0)
	};
}

export default main;
