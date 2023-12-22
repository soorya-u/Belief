from logic.preprocess import *
from logic.algorithms import *
from flask import Flask, request, jsonify
from waitress import serve


app = Flask(__name__)


@app.route("/", methods=['POST'])
def home():

    if request.json['tweet'] == '':
        return jsonify({
            'error': 'Empty String'
        })

    tweet = request.json['tweet']
    pre = PreProcessor(tweet)
    pr = pre.preProcess()
    algo = MLAlgorithms()
    overall_prediction = algo.getOverallPrediction(pr)
    pos, neu, neg = algo.getPercentagePrediction(pr)

    return jsonify({
        'output': overall_prediction[0],
        'value': tweet,
        'positive': pos,
        'neutral': neu,
        'negative': neg
    })


@app.route("/stats", methods=['GET', 'POST'])
def stats():

    tweet = ''
    model_name = ''
    accuracy_score = 0
    confusion_matrix_path = ''
    overall_prediction = ['']
    pos = ''
    neu = ''
    neg = ''

    if request.json['tweet'] == '':
        return jsonify({
            'error': 'Empty String'
        })

    tweet = request.json['tweet']
    model_name = request.json['model_name']
    pre = PreProcessor(tweet)
    pr = pre.preProcess()
    algo = MLAlgorithms(model_name=model_name)
    accuracy_score = algo.accuracy_score
    confusion_matrix_path = algo.confusion_matrix
    overall_prediction = algo.getOverallPrediction(pr)
    pos, neu, neg = algo.getPercentagePrediction(pr)

    return jsonify({
        'output': overall_prediction[0],
        'value': tweet,
        'positive': pos,
        'neutral': neu,
        'negative': neg,
        'accuracy_score': accuracy_score,
        'img_path': confusion_matrix_path,
        'model_name': model_name
    })


if __name__ == '__main__':
    # serve(app, host='0.0.0.0', port=7000) # For Production
    app.run(debug=True, port=7000)  # For Development
