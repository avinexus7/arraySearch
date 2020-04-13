var expect  = require('chai').expect
var request = require('request')

describe('Sort', function() {
    it('should return a sorted array when given an array', function(done) {
        const reqBody = {"array":[63,38,16,53,72,27,83,12,12,3]}
        var options = {
            'method': 'POST',
            'url': 'http://localhost:4000/sort',
            'headers': {
              'Content-Type': 'application/json'
            },
            json: reqBody   
          
          }
          request(options, function(error, response, data) {
              expect(data.data.array).to.eql([3, 12, 12, 16, 27, 38, 53, 63, 72, 83])
              done()
          })
    })
})