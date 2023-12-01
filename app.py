from logic.preprocess import *
from logic.algorithms import *
from flask import Flask, render_template, request


app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def home():
    prediction=['']
    if request.method == 'POST':
        tweet = request.form['tweet']
        pre = PreProcessor(tweet)
        pr = pre.preProcess()
        algo = MLAlgorithms(path=r'./logic')
        prediction = algo.getPrediction(pr)

    return render_template('index.html', output=prediction[0])


if __name__ == "__main__":
    app.run(debug=True, port=8000)


@app.route("/about", methods=['GET', 'POST'])
def about():
    return render_template('about.html')
