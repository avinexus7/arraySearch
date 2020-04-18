from flask import Flask, request, Response, json
import math
app = Flask(__name__)

@app.route('/')
def hello():
    return "Server up"

@app.route('/sort', methods = ['POST'])
def sortArray():
    if request.json.get('array') is None:
        return Response(json.dumps({'message':'array not given'}), status=400, mimetype='application/json')
    body = request.json
    arrayActions = ArrayActions(body['array'])
    sortedArray = arrayActions.sort()
    return Response(json.dumps(sortedArray), status=200, mimetype='application/json')

@app.route('/search', methods = ['POST'])
def searchArray():
    if request.json.get('array') is None or request.json.get('target') is None:
        return Response(json.dumps({'message':'array or target not given'}), status=400, mimetype='application/json')
    if not isinstance(request.json.get('array'), list):
        return Response(json.dumps({'message':'input is not array'}), status=400, mimetype='application/json')
    body = request.json
    arrayActions = ArrayActions(body['array'])
    searchResponse = arrayActions.search(body['target'])
    return Response(json.dumps(searchResponse), status=200, mimetype='application/json')

class Memoize:
    def __init__(self, inputFn):
        self.inputFn = inputFn
        self.memo = {}
    
    def __call__(self, *args):
        if args not in self.memo:
            self.memo[args] = self.inputFn(args)
        return self.memo[args]


class ArrayActions:
    def __init__(self, array = []):
        self.array = array

    def sort(self):
        if(len(self.array) is 0):
            return []
        else:
            sortedArray = self.mergeSort(self.array)
            return sortedArray

    # @Memoize
    def mergeSort(self, array):
        if (len(array) < 2):
            return
        mid = math.floor(len(array) / 2)
        # recursively calling sort (merge sort)
        leftArray = array[:mid]
        rightArray = array[mid:]
        self.mergeSort(leftArray)
        self.mergeSort(rightArray)
        self.mergeArray(leftArray, rightArray, array)
        return array

    def mergeArray(self, leftArray, rightArray, mainArray):
        i, j , k = 0, 0, 0
        while (i < len(leftArray) and j < len(rightArray)):
            if leftArray[i] <= rightArray[j]:
                mainArray[k] = leftArray[i]
                i += 1
                k += 1
            else:
                mainArray[k] = rightArray[j]
                j += 1
                k += 1
        while i < len(leftArray):
            mainArray[k] = leftArray[i]
            i += 1
            k += 1
        while j < len(rightArray):
            mainArray[k] = rightArray[j]
            j += 1
            k += 1


    def search(self, target):
        resp = { 'success': False, 'message': '', 'inputArray': [*self.array], 'target': target }
        self.array = self.sort()
        resp['sortedArray'] = self.array
        searchResp = self.binarySearch(target)
        if searchResp['targetPos'] is None: resp['message'] = 'targetPos not appended' 
        else: resp['success'] = True
        if searchResp['targetPos'] == -1: resp['message'] = 'element ' + target + ' not found in given array'
        return {**searchResp, **resp}

    def binarySearch(self, target):
        resp = {}
        startIndex = 0
        lastIndex = len(self.array) - 1
        if len(self.array) is 0: return -1
        if (self.array[startIndex] == target):
            resp['targetPos'] = startIndex
            resp['foundStartIndex'] = True
            return resp
        if (self.array[lastIndex] == target):
            resp['targetPos'] = lastIndex
            resp['foundLastIndex'] = True
            return resp
        while(startIndex <= lastIndex ):
            mid = math.floor((startIndex + lastIndex) / 2)
            if (self.array[mid] == target):
                resp['targetPos'] = mid
                resp['foundMiddleIndex'] = True
                return resp
            elif (self.array[mid] > target):
                # target lies within first half
                lastIndex = mid - 1
            else:
                # target is greater than mid, lies within second half of array
                startIndex = mid + 1
        return resp

if __name__ == '__main__':
    app.run(debug=True)