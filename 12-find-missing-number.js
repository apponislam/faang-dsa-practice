function findMissingNumber(arr, n) {
    const expected = (n * (n + 1)) / 2;
    const actual = arr.reduce((a, b) => a + b, 0);

    return expected - actual;
}

console.log(findMissingNumber([1,2,3,5], 5));
