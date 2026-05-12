function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    arr1 = [...arr1].sort();
    arr2 = [...arr2].sort();

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(arraysEqual([1,2,3], [3,2,1]));
