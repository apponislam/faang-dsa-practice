function removeDuplicates(str) {
    let result = "";
    const seen = new Set();

    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    return result;
}

console.log(removeDuplicates("programming"));
