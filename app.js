var express = require('express')
var app = express()
const bodyParser = require('body-parser')
const searchUnsorted = require('./unSortedSearch').sortAndSearch
const sort = require('./sort')

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Working')
})

app.get('/generate/:length', (req, res) => {
  var newArray = []
  var arrayLength = req.params.length
  for (var i = 0; i < arrayLength; i++) {
    newArray[i] = Math.floor(Math.random() * (100 - 0 + 1)) + 0
  }
  res.status(201).send({newArray: newArray})
})

app.post('/search', (req, res) => {
  if (req.body) {
    if (Array.isArray(req.body.array)) {
      if (!req.body.target) res.status(400).send('send target value to search for')
      if (req.body.native) {}
      const searchResult = searchUnsorted(req.body.array, req.body.target)
      if (searchResult.sorted && searchResult.targetPos) {
        res.status(200).send({data: searchResult})
      }
    }
  } else {
    res.status(400).send('did not send data to search')
  }
})

app.post('/sort', (req, res) => {
  if (req.body) {
    if (Array.isArray(req.body.array)) {
      const searchResult = sort(req.body.array)
      if (searchResult) {
        res.status(200).send({data: searchResult})
      }
    }
  } else {
    res.status(400).send('did not send data to search')
  }
})

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), function () {
  console.log('App listening on port:', app.get('port'))
})
