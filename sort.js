module.exports = function (array) {
    if (Array.isArray(array)) {
        if (array.length) {
            if (array.length < 2) {
                return
            }
            const mid = Math.floor(array.length / 2)    
            const leftArray = array.slice(0, mid) 
            const rightArray = array.slice(mid)
            /* recursively calling sort (merge sort) */
            module.exports(leftArray)
            module.exports(rightArray)
            /* merge the result with the main array */
            mergeArray(leftArray, rightArray, array)
            return {array}
        } else return {array}
    } else throw new Error('not given Array')
}

const mergeArray = (leftArray, rightArray, mainArray) => {
    var i = 0, j = 0, k = 0
    while(i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
            mainArray[k] = leftArray[i]
            i++
            k++
        } else {
            mainArray[k] = rightArray[j]
            j++
            k++
        }
    }
    while (i < leftArray.length) {
        mainArray[k] = leftArray[i]
        i++
        k++
    }
    while (j < rightArray.length) {
        mainArray[k] = rightArray[j]
        j++
        k++
    }
}
