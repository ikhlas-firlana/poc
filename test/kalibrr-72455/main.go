func pow(x int64, y int64) {
	if y == 0 {
		return 1;
	} else {
		return x * pow(x, y - 1)
	}
}