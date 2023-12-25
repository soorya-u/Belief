from flask import request

class Database:

    def __init__(self, dataBase):

        self.dataBase = dataBase

    def handleLogs(self, req_id):

        logData = {
            'origin': request.headers.get('Origin'),
            'path': request.path,
            'method': request.method,
            'platform': request.headers.get('sec-ch-ua-platform')[1:-1],
            'isMobile': bool(int(request.headers.get('sec-ch-ua-mobile', 0)[1:])),
            'requestDetails': req_id
        }

        collection = self.dataBase['logs']
        collection.insert_one(logData)

    def handleDocumentCreation(self, payload, tweet, isStats=False):

        collection = self.dataBase['other-algorithms'] if isStats else self.dataBase['main-algorithm']
        payload['tweet'] = tweet
        insertedDocument = collection.insert_one(payload)
        self.handleLogs(insertedDocument.inserted_id)
