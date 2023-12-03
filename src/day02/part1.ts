// import utils from '../utils';
import * as common from './common';

function isPossible(game: common.Game, colors: common.Set): boolean {
	let possible = true;

	game.sets.forEach((set) => {
		if (
			set.red > colors.red ||
			set.blue > colors.blue ||
			set.green > colors.green
		) {
			possible = false;
		}
	});

	return possible;
}

function main(input: string[]): number {
	let sum = 0;

	input.forEach((line) => {
		console.log(line);
		const game = common.parseGame(line);
		const possible = isPossible(game, {
			red: 12,
			blue: 14,
			green: 13
		});

		if (possible) {
			sum += game.id;
		}
	});

	return sum;
}

export default main;
