const sortArray = require('./sort')
const sortedSearch = require('./sortedSearch')

module.exports.native = (array, target) => {
    if (Array.isArray(array)) {
        if (array.length) {
            for (var i in array) {
                if (array[i] === target) {
                    return i
                }
            }
            return -1
        } else {
            return -1
        }
     } else throw new Error('given in not array')
}

module.exports.sortAndSearch = (array, target) => {
    /* sort the array */
    const sortedArray = sortArray(array)
    /* binary search on sorted array */
    const targetPos = sortedSearch.binarySearch(sortedArray.array, target)
    return {sortedArray, targetPos}
}
