function removeDuplicates(array, key = null) {
    if (key) {
        return [...new Map(array.map((item) => [item[key], item])).values()];
    }

    return [...new Set(array)];
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));

const fruits = ["apple", "banana", "apple", "orange", "banana"];
console.log(removeDuplicates(fruits));

const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 1, name: "John" },
    { id: 3, name: "Alice" },
    { id: 2, name: "Jane" },
];

console.log(removeDuplicates(users, "id"));
