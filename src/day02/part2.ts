// import utils from '../utils';
import * as common from './common';

function main(input: string[]): number {
	let sum = 0;

	input.forEach((line) => {
		const game = common.parseGame(line);
		sum += game.power;
	});

	return sum;
}

export default main;
