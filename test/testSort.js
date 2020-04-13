var expect  = require('chai').expect
var request = require('request')
var options = {
  'method': 'POST',
  'url': 'http://localhost:4000/sort',
  'headers': {
    'Content-Type': 'application/json'
  },
  json: {}
}

describe('Sort', function() {
    it('should return a sorted array when given an array', function(done) {
      const reqBody = {"array":[63,38,16,53,72,27,83,12,12,3]}
      var itOptions = {...options}
      itOptions.json = reqBody
      request(itOptions, function(error, response, data) {
        expect(data.data.main).to.eql([3, 12, 12, 16, 27, 38, 53, 63, 72, 83])
        done()
      })
    })
    it('should return empty list if given empy list', function(done) {
      const reqBody = {"array":[]}
      var itOptions = {...options}
      itOptions.json = reqBody
      request(itOptions, function(error, response, data) {
        expect(data.data.main).to.eql([])
        done()
      })
    })
    it('should return same sorted list if sorted list given', function(done) {
      const reqBody = {"array":[3,12,12,16,27,38,53,63,72,83]}
      var itOptions = {...options}
      itOptions.json = reqBody
      request(itOptions, function(error, response, data) {
        expect(data.data.main).to.eql([3,12,12,16,27,38,53,63,72,83])
        done()
      })
    })
    it('should return sorted list if reverse sorted list is given', function(done) {
      const reqBody = {"array":[83,72,63,53,38,27,16,12,12,3]}
      var itOptions = {...options}
      itOptions.json = reqBody
      request(itOptions, function(error, response, data) {
        expect(data.data.main).to.eql([3,12,12,16,27,38,53,63,72,83])
        done()
      })
    })
    it('should return the same array of an array with all same elements are given', function(done) {
      const reqBody = {"array":[5,5,5,5,5]}
      var itOptions = {...options}
      itOptions.json = reqBody
      request(itOptions, function(error, response, data) {
        expect(data.data.main).to.eql([5,5,5,5,5])
        done()
      })
    })
    it('should group duplicates preserving the sort order', function(done) {
      const reqBody = {"array":[56, 1, 25, 13, 56, 62, 25, 50]}
      var itOptions = {...options}
      itOptions.json = reqBody
      request(itOptions, function(error, response, data) {
        expect(data.data.main).to.eql([1,13,25,25,50,56,56,62])
        done()
      })
    })

})