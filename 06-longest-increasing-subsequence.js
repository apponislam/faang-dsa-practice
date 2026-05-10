function longestIncreasingSubsequence(arr) {
    const dp = new Array(arr.length).fill(1);

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));
