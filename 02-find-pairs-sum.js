function findPairs(arr, target) {
    const seen = new Set();
    const pairs = [];

    for (let num of arr) {
        const diff = target - num;
        if (seen.has(diff)) pairs.push([diff, num]);
        seen.add(num);
    }

    return pairs;
}

console.log(findPairs([1, 2, 3, 4, 5], 5));
