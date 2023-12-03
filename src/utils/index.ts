class utils {
	public formatDay(day: number | string) {
		return day.toString().padStart(2, '0');
	}
}

export default new utils();
