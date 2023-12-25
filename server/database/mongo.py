import re
from flask import request


class Database:

    def __init__(self, dataBase):

        self.dataBase = dataBase

    def handleLogs(self, req_id):

        osRegex = r'(Windows|Macintosh|iPhone|iPad|Android|Linux)\b'
        browserRegex = r'(Chrome|Firefox|Safari|Edge|MSIE|Trident)\b'

        userAgent = request.headers.get('User-Agent')

        osMatch = re.search(osRegex, userAgent, re.I)
        browserMatch = re.search(browserRegex, userAgent, re.I)

        try:
            platform = request.headers.get('sec-ch-ua-platform')[1:-1]
        except Exception as e:
            platform = 'Unknown Platform'

        logData = {
            'origin': request.headers.get('Origin'),
            'path': request.path,
            'method': request.method,
            'os': osMatch.group(0) if osMatch else 'Unknown OS',
            'browser': browserMatch.group(0) if browserMatch else 'Unknown Browser',
            'platform': platform,
            'requestDetails': req_id
        }

        collection = self.dataBase['logs']
        collection.insert_one(logData)

    def handleDocumentCreation(self, payload, tweet, isStats=False):

        collection = self.dataBase['other-algorithms'] if isStats else self.dataBase['main-algorithm']
        payload['tweet'] = tweet
        insertedDocument = collection.insert_one(payload)
        self.handleLogs(insertedDocument.inserted_id)
