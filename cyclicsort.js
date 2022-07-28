// [1,3,4,6,2,5] -> [1,2,3,4,5,6]
// array within a number of Range, and for array like
// finding duplicate, sorting, time complexity of onabort(n)
// not crate any new array, loop 1 or 5 or any fixed number, constant loop
function cyclicSort (arr) {
    let i = 0;
    while (i < arr.length) {
        const toSort = arr[i] //3
        // whrew 3 is going
        const newSpot = toSort - 1;
        // check they are not already sorted
        if (toSort !== arr[newSpot]) {
            const swapWith = arr[newSpot] // 5
            arr[newSpot] = toSort // 3
            arr[i] = swapWith
            console.log(i)
        } else {
            // increment i untill I find unsorted numbers
            i++;
        }
    }

    return arr;
}

console.log(cyclicSort([3,1,5,4,2]));
// console.log(cyclicSort([2,6,4,3,1,5]));
// console.log(cyclicSort([1,7,5,6,4,3,2]));