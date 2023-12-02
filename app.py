from logic.preprocess import *
from logic.algorithms import *
from flask import Flask, render_template, request


app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def home():
    tweet=''
    overall_prediction=['']
    pos= ''
    neu= ''
    neg= ''
    if request.method == 'POST' and request.form['tweet']!='':
        tweet = request.form['tweet']
        pre = PreProcessor(tweet)
        pr = pre.preProcess()
        algo = MLAlgorithms(path=r'./logic')
        overall_prediction = algo.getOverallPrediction(pr)
        pos, neu, neg = algo.getPercentagePrediction(pr)

    return render_template('index.html', output=overall_prediction[0], value=tweet, positive=pos, neutral=neu, negative=neg)

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/stats", methods=['GET', 'POST'])
def stats():
    return render_template('stats.html')


if __name__ == "__main__":
    app.run(debug=True, port=8000)