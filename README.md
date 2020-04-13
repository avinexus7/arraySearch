A search algorithm for sorted and un sorted arrays.

For sorted arrays: binary search is used (sortedSearch.js)

For unsorted arrays, two ways can be implemented:
1. Linear Search (unSortedSearch.js)
2. Sort the array, then apply binary search (sortedSearch.js)

Time complexity for linear search
> Θ(n) (worst and average time complexity)

Sorting is achieved through merge sort
> Θ(nlogn) (worst and average time complexity)

Searching an unsorted array is achieved through binary search
> Θ(logn) (worst and average time complexity)

To run
```sh
node search.js
```

#Routes

To sort an array
```sh
curl --location --request POST 'localhost:4000/sort' \
--header 'Content-Type: application/json' \
--data-raw '{
	"array": [
        63,
        38,
        16,
        53,
        72,
        27,
        83,
        12,
        12,
        3
    ]
}'
```

To find an element in an array (sorted or unsorted)
```sh
curl --location --request POST 'http://localhost:4000/search' \
--header 'Content-Type: application/json' \
--data-raw '{
	"array": [
        63,
        38,
        16,
        53,
        72,
        27,
        83,
        12,
        12,
        3
    ],
	"target": 27
}'
```