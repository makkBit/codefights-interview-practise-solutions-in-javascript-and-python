// finds first duplicate element in an array
// in O(n) time complexity and O(1) additional space complexity
// doesn't work for array which have -ve elements

function firstDuplicate(arr) {
    if (arr.length <= 1)
        return -1;
    for (let i = 0; i < arr.length; i++) {
        let pos = Math.abs(arr[i]) - 1;
        if (arr[pos] < 0)
            return pos + 1;
        else
            arr[pos] = -arr[pos];
    }
    return -1;
}


console.log(firstDuplicate([8, 4, 6, 2, 6, 4, 7, 9, 5, 8]));