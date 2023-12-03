// import utils from '../utils';

// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green

export interface Set {
	[color: string]: number;
	red: number;
	blue: number;
	green: number;
}

export interface Game {
	id: number;
	power: number;
	sets: Set[];
	minSet: Set;
}

export function parseSet(input: string): Set {
	const set: Set = {
		red: 0,
		blue: 0,
		green: 0
	};

	const colors = input.split(', ');

	colors.forEach((color) => {
		const parts = color.split(' ');
		const colorName = parts[1];
		const colorValue = parseInt(parts[0], 10);

		if (colorName in set) {
			set[colorName] += colorValue;
		}
	});

	return set;
}

export function getMinPossibleColors(game: Game): Set {
	const minSet: Set = {
		red: 0,
		blue: 0,
		green: 0
	};

	game.sets.forEach((set) => {
		if (set.red > minSet.red) {
			minSet.red = set.red;
		}

		if (set.blue > minSet.blue) {
			minSet.blue = set.blue;
		}

		if (set.green > minSet.green) {
			minSet.green = set.green;
		}
	});

	return minSet;
}

export function getPower(game: Game): number {
	return game.minSet.red * game.minSet.blue * game.minSet.green;
}

export function parseGame(input: string): Game {
	const game: Game = {
		id: 0,
		power: 0,
		sets: [],
		minSet: {
			red: 0,
			blue: 0,
			green: 0
		}
	};

	const parts = input.split(': ');

	game.id = parseInt(parts[0].split(' ')[1], 10);

	const setStrings = parts[1].split('; ');

	setStrings.forEach((setString) => {
		game.sets.push(parseSet(setString));
	});

	game.minSet = getMinPossibleColors(game);
	game.power = getPower(game);

	return game;
}
