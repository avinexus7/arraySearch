module.exports.binarySearch = (array, target) => {
    if (!array.length) return -1
    var startIndex = 0
    var lastIndex = array.length - 1
    /* check if high and low indices store the target value */
    if (array[startIndex] === target) return startIndex
    if (array[lastIndex] === target) return lastIndex
    while(startIndex <= lastIndex) {
        const mid = Math.floor((startIndex + lastIndex) / 2)
        if (array[mid] === target) {
            return mid
        } else if (array[mid] < target) {
            /* if target is greater than median, search the latter half od array */
            startIndex = mid + 1
        } else {
            /* if target is lesser than median, search the former half od array */
            lastIndex = mid - 1
        }
    }
    return -1
}
