var expect  = require('chai').expect
var request = require('request')

var options = {
  'method': 'POST',
  'url': 'http://localhost:4000/search',
  'headers': {
    'Content-Type': 'application/json'
  },
  json: {}   

}

describe('Search', function() {
    it('should return a sorted array and the targets pos in it', function(done) {
        const reqBody = {"array":[63,38,16,53,72,27,83,12,12,3], target: 27}
        var itOptions = {...options}
        itOptions.json = reqBody
          request(itOptions, function(error, response, data) {
              const sortedArray = data.data.sorted
              expect(sortedArray[data.data.targetPos]).to.eql(27)
              done()
          })
    })

    it('should return false if target is not found', function(done) {
      const reqBody = {"array":[63,38,16,53,72,27,83,12,12,3], target: 127}
      var itOptions = {...options}
      itOptions.json = reqBody
      request(itOptions, function(error, response, data) {
          const sortedArray = data.data.sorted
          expect(sortedArray[data.data.targetPos]).to.eql(undefined)
          done()
      })
    })

    it('should return false if array is empty', function(done) {
      const reqBody = {"array":[], target: 127}
      var itOptions = {...options}
      itOptions.json = reqBody
      request(itOptions, function(error, response, data) {
          const sortedArray = data.data.sorted
          expect(sortedArray[data.data.targetPos]).to.eql(undefined)
          done()
      })
    })

    describe('target element shouldnt exist in opp types even odd', function() {

      it('odd target should not exist in even', function(done) {
        const reqBody = {"array":[63,38,16,53,72,27,83,12,12,3], target: 27}
        var itOptions = {...options}
        itOptions.json = reqBody
        request(itOptions, function(error, response, data) {
          const sortedArray = data.data.even
          expect(sortedArray.indexOf(27)).to.eql(-1)
          done()
        })
      })

      it('even target should not exist in odd', function(done) {
        const reqBody = {"array":[63,38,16,53,72,27,83,12,12,3], target: 12}
        var itOptions = {...options}
        itOptions.json = reqBody
        request(itOptions, function(error, response, data) {
          const sortedArray = data.data.odd
          expect(sortedArray.indexOf(12)).to.eql(-1)
          done()
        })
      })

    })

    it('target element found within first iteration of array', function(done) {
      const reqBody = {"array":[63,38,16,53,72,27,83,12,12,3], target: 3}
      var itOptions = {...options}
      itOptions.json = reqBody
      request(itOptions, function(error, response, data) {
        const sortedArray = data.data.sorted
        expect(sortedArray.indexOf(3)).to.eql(data.data.targetPos)
        done()
      })
    })
})