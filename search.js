const originalArray = [3, 108, 1, 65, 24, 99, 5]

const searchUnsortedArray = require('./unSortedSearch')

console.log(originalArray)
const unSortedResultIndex = searchUnsortedArray.native(originalArray, 5)
console.log('native unsorted search', unSortedResultIndex)
/* 
[
   3, 108, 1, 65,
  24,  99, 5
]
native unsorted search 6
 */

const sortedResultIndex = searchUnsortedArray.sortAndSearch(originalArray, 108)
console.log('search using merge sort first and binary search combined', sortedResultIndex)
/* 
search using merge sort first and binary search combined {
  sortedArray: [
     1,  3,   5, 24,
    65, 99, 108
  ],
  targetPos: 6
}
 */