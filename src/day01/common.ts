// import utils from '../utils';

export function joinNumbers(input: number[]): number {
	return parseInt(input.join(''));
}

export function getFirstNumber(input: string): number | null {
	for (let i = 0; i < input.length; i++) {
		const num = parseInt(input[i]);
		if (num) {
			return num;
		}
	}
	return null;
}
