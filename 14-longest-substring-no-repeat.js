function longestSubstring(str) {
    let set = new Set();
    let left = 0;
    let max = 0;

    for (let right = 0; right < str.length; right++) {
        while (set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }

        set.add(str[right]);
        max = Math.max(max, right - left + 1);
    }

    return max;
}

console.log(longestSubstring("abcabcbb"));
