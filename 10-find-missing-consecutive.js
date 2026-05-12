function findMissing(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const set = new Set(arr);
    const missing = [];

    for (let i = min; i <= max; i++) {
        if (!set.has(i)) {
            missing.push(i);
        }
    }

    return missing;
}

console.log(findMissing([1,2,4,6]));
