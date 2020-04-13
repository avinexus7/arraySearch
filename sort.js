module.exports = function (array) {
    if (Array.isArray(array)) {
        if (array.length) {
            var sortedNumbers = sortAllNumbers(array)
            return sortedNumbers
        } else return {odd:[], even:[], main:[]}
    } else throw new Error('not given Array')
}

const sortAllNumbers = function(array) {
    var evens = [];
    var odds = [];
    for (var i = 0; i < array.length; i++) {
        if ((array[i] % 2) != 1) {
            evens.push(array[i]);
        }
        else {
            odds.push(array[i]);
        }
    }    
    return {odd: mergeSort(odds), even: mergeSort(evens), main: mergeSort(array)}
}

const mergeSort = function(array) {
    if (array.length < 2) {
        return
    }
    const mid = Math.floor(array.length / 2)
    const leftArray = array.slice(0, mid) 
    const rightArray = array.slice(mid)
    /* recursively calling sort (merge sort) */
    mergeSort(leftArray)
    mergeSort(rightArray)
    /* merge the result with the main array */
    mergeArray(leftArray, rightArray, array)
    return array
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
