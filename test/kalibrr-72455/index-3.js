function satisfy(x, y) {
    start = 1;
    result = [];
    for (var i = 1; i <= x; i++) {
        if (i % y == 0) {
            result.push(i);
        }
    }
    return result;
}

// 

console.log(satisfy(10, 3));