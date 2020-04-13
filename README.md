A search algorithm for sorted and un sorted arrays.

For sorted arrays: binary search is used (sortedSearch.js)

For unsorted arrays, two ways can be implemented:
1. Linear Search (unSortedSearch.js)
2. Sort the array, then apply binary search (sortedSearch.js)

Time complexity for linear search
> Θ(n) (worst and average time complexity)

Sorting is achieved through merge sort
> Θ(nlogn) (worst and average time complexity)

Searching a sorted array is achieved through binary search
> Θ(logn) (worst and average time complexity)

To run
```sh
node search.js
```