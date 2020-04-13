var expect  = require('chai').expect
var request = require('request')

describe('Search', function() {
    it('should return a sorted array and the targets pos in it', function(done) {
        const reqBody = {"array":[63,38,16,53,72,27,83,12,12,3], target: 27}
        var options = {
            'method': 'POST',
            'url': 'http://localhost:4000/search',
            'headers': {
              'Content-Type': 'application/json'
            },
            json: reqBody   
          
          }
          request(options, function(error, response, data) {
              const sortedArray = data.data.sortedArray.array
              expect(sortedArray[data.data.targetPos]).to.eql(27)
              done()
          })
    })
})