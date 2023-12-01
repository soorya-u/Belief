from logic.preprocess import *
from logic.algorithms import *
from flask import Flask, render_template
# import pandas as pd


# tweets = pd.read_csv(r'./static/data/tweets-dataset-2020-04-30.csv')['text']
# tweets = tweets.iloc[:10000]

# for tweet in tweets:
#     pre = PreProcessor(tweet)
#     pr = pre.preProcess()

#     algo = MLAlgorithms(path=r'./logic')
#     algo.getPrediction(pr)

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

if __name__=="__main__":
    app.run(debug=True, port=8000)