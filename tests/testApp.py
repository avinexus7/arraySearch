import unittest
from app import ArrayActions

class TestStringMethods(unittest.TestCase):

    def testSearch(self):
        arrayActions = ArrayActions([8, 2, 47, 5, 96, 8])
        searchResponse = arrayActions.search(2)
        self.assertEqual(searchResponse['targetPos'], 0)

    def testSort(self):
        arrayActions = ArrayActions([8, 2, 47, 5, 96, 8])
        searchResponse = arrayActions.sort()
        self.assertEqual(searchResponse, [2, 5, 8, 8, 47, 96])

if __name__ == '__main__':
    unittest.main()