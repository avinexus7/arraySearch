Implementation of searching an un sorted array using binary search in Python

To sort an array
```sh
curl --location --request POST 'http://localhost:5000/sort' \
--header 'Content-Type: application/json' \
--data-raw '{
	"array": [6,4,8,9,25,41,25]
}'
```

To search for a number
```sh
curl --location --request POST 'http://localhost:5000/search' \
--header 'Content-Type: application/json' \
--data-raw '{
	"array": [6,4,8,9,25,41,25],
	"target": 8
}'
```