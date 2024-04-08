# Environment Modules
import os
from dotenv import load_dotenv

# Database Modules
from pymongo import MongoClient

# Backend Modules
from flask import Flask, request, jsonify
from flask_cors import CORS

# WSGI Modules
from waitress import serve

# Defined Modules
from services import Database, MLAlgorithms, PreProcessor

# Environment Files
if os.getenv("PY_ENV") == None or os.getenv("DATABASE_URL") == None:
    load_dotenv()

PY_ENV = os.getenv("PY_ENV")
DATABASE_URL = os.getenv("DATABASE_URL")
PORT = os.getenv("PORT") or 7000

# Backend Framework and CORS
app = Flask(__name__)
CORS(app)

# Database Client and Database
client = MongoClient(DATABASE_URL)
database = Database(client['Belief'])


# Main Route
@app.route("/api/v1/main", methods=['POST'])
def home():

    # Handling Request Body Requirements
    if request.json['tweet'] == '':
        return jsonify({
            'error': 'Empty String'
        })

    # Getting Body
    tweet = request.json['tweet']

    # Object Init
    pre = PreProcessor(tweet)
    pr = pre.preProcess()
    algo = MLAlgorithms()

    # Applying Algorithms
    overall_prediction = algo.getOverallPrediction(pr)
    pos, neu, neg = algo.getPercentagePrediction(pr)

    # Response Payload
    payload = {
        'output': overall_prediction[0],
        'positive': pos,
        'neutral': neu,
        'negative': neg
    }

    # Actual Response
    response = jsonify(payload)

    # Database Addition
    database.handleDocumentCreation(payload, tweet)

    return response

# Stats Route


@app.route("/api/v1/stats", methods=['POST'])
def stats():

    # Handling Request Body Requirements
    if request.json['tweet'] == '':
        return jsonify({
            'error': 'Empty String'
        })

    # Getting Body
    tweet = request.json['tweet']
    model_name = request.json['modelName']

    # Object Init
    pre = PreProcessor(tweet)
    pr = pre.preProcess()
    algo = MLAlgorithms(model_name=model_name)

    # Applying Algorithms
    accuracy_score = algo.accuracy_score
    confusion_matrix_path = algo.confusion_matrix[1:]
    overall_prediction = algo.getOverallPrediction(pr)
    pos, neu, neg = algo.getPercentagePrediction(pr)

    # Response Payload
    payload = {
        'output': overall_prediction[0],
        'positive': pos,
        'neutral': neu,
        'negative': neg,
        'accuracy_score': accuracy_score,
        'img_path': confusion_matrix_path,
        'model_name': model_name
    }

    # Actual Response
    response = jsonify(payload)

    # Database Addition
    database.handleDocumentCreation(payload, tweet, isStats=True)

    return response


@app.route("/api/v1/health")
def wake():
    return jsonify({
        'wakeStatus': True
    })


if __name__ == '__main__':
    if PY_ENV == "production":
        serve(app, host='0.0.0.0', port=PORT)  # For Production
    else:
        app.run(host='0.0.0.0', debug=True, port=PORT)  # For Development
