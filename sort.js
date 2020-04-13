module.exports = function (array) {
    if (Array.isArray(array)) {
        if (array.length) {
            if (array.length < 2) {
                return
            }
            const mid = Math.floor(array.length / 2)    
            const leftArray = array.slice(0, mid) 
            const rightArray = array.slice(mid)
            module.exports(leftArray)
            module.exports(rightArray)
            mergeArray(leftArray, rightArray, array)
            return array
        } else return array
    } else throw new Error('not given Array')
}

const mergeArray = (left, right, mainArray) => {
    var i = 0, j = 0, k = 0
    while(i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            mainArray[k] = left[i]
            i++
            k++
        } else {
            mainArray[k] = right[j]
            j++
            k++
        }
    }
    while (i < left.length) {
        mainArray[k] = left[i]
        i++
        k++
    }
    while (j < right.length) {
        mainArray[k] = right[j]
        j++
        k++
    }
}
