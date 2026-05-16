//https://www.geeksforgeeks.org/dsa/find-a-sorted-subsequence-of-size-3-in-linear-time/

function find3Numbers(arr) {
    let n = arr.length;
    if (n < 3)
        return [];

    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;
    let prevFirst = Number.MAX_VALUE;

    // Iterating through the array
    for (let i = 0; i < n; i++) {
        let x = arr[i];

        // Updating first and second smallest numbers
        if (x <= first) {
            first = x;
        } else if (x <= second) {
            second = x;
            prevFirst = first;
        }
        // If a third number greater than first and second is found
        else {
            return [prevFirst, second, x];
        }
    }

    return [];
}

function main() {
    let arr = [12, 11, 10, 5, 6, 2, 30];

    let res = find3Numbers(arr);

    console.log(res.join(" "));
}

if (require.main === module) {
    main();
}

module.exports = find3Numbers;
