from flask import Flask, request, Response, json
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


class ArrayActions:
    def __init__(self, array = []):
        self.array = array

    def sort(self):
        return self.array

    def search(self, target):
        return {'inputArray': self.array, 'target': target}

if __name__ == '__main__':
    app.run(debug=True)