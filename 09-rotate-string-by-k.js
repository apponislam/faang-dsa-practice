function rotateString(str, k) {
    k = k % str.length;

    return str.slice(-k) + str.slice(0, -k);
}

console.log(rotateString("hello", 2));
