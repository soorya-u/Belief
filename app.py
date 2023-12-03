from logic.preprocess import *
from logic.algorithms import *
from flask import Flask, render_template, request


app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def home():

    tweet = ''
    overall_prediction = ['']
    pos = ''
    neu = ''
    neg = ''

    if request.method == 'POST' and request.form['tweet'] != '':
        tweet = request.form['tweet']
        pre = PreProcessor(tweet)
        pr = pre.preProcess()
        algo = MLAlgorithms()
        overall_prediction = algo.getOverallPrediction(pr)
        pos, neu, neg = algo.getPercentagePrediction(pr)

    return render_template('index.html', output=overall_prediction[0], value=tweet, positive=pos, neutral=neu, negative=neg)


@app.route("/about")
def about():
    return render_template('about.html')


@app.route("/stats", methods=['GET', 'POST'])
def stats():

    tweet = ''
    model_name=''
    accuracy_score = 0
    confusion_matrix_path = ''
    overall_prediction = ['']
    pos = ''
    neu = ''
    neg = ''

    if request.method == 'POST' and request.form['tweet'] != '':
        tweet = request.form['tweet']
        model_name = request.form['model-name']
        pre = PreProcessor(tweet)
        pr = pre.preProcess()
        algo = MLAlgorithms(model_name=model_name)
        accuracy_score = algo.accuracy_score
        confusion_matrix_path = algo.confusion_matrix
        overall_prediction = algo.getOverallPrediction(pr)
        pos, neu, neg = algo.getPercentagePrediction(pr)

    return render_template('stats.html', output=overall_prediction[0], value=tweet, positive=pos, neutral=neu, negative=neg, accuracy_score = accuracy_score, img_path=confusion_matrix_path, model_name=model_name)


if __name__ == "__main__":
    app.run(debug=True, port=8000)
