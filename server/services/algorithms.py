import joblib
import pandas as pd


class MLAlgorithms:

    def __init__(self, model_name='Linear-SVC') -> None:

        if model_name == 'Ada-Boost-Classifier':
            self.model = self.adaBoostClassifier()
            self.accuracy_score = round(0.6926546283721476, 2)*100
            self.confusion_matrix = r'./static/img/confusion-matrix/ada-boost-classifier.png'
        elif model_name == 'Bernoulli-NB':
            self.model = self.bernoulliNB()
            self.accuracy_score = round(0.7134617641634391, 2)*100
            self.confusion_matrix = r'./static/img/confusion-matrix/bernoulli-nb.png'
        elif model_name == 'Logistic-Regression':
            self.model = self.logisticRegression()
            self.accuracy_score = round(0.8951259996982043, 2)*100
            self.confusion_matrix = r'./static/img/confusion-matrix/logistic-regression.png'
        elif model_name == 'Multinomial-NB':
            self.model = self.multinomialNB()
            self.accuracy_score = round(0.7085827339335714, 2)*100
            self.confusion_matrix = r'./static/img/confusion-matrix/multinomial-nb.png'
        elif model_name == 'Passive-Aggressive-Classifier':
            self.model = self.passiveAggressiveClassifier()
            self.accuracy_score = round(0.8682997166473853, 2)*100
            self.confusion_matrix = r'./static/img/confusion-matrix/passive-aggressive-classifier.png'
        elif model_name == 'Perceptron':
            self.model = self.perceptron()
            self.accuracy_score = round(0.8717368341632714, 2)*100
            self.confusion_matrix = r'./static/img/confusion-matrix/perceptron.png'
        elif model_name == 'Ridge-Classifier':
            self.model = self.ridgeClassifier()
            self.accuracy_score = round(0.8320507016749661, 2)*100
            self.confusion_matrix = r'./static/img/confusion-matrix/ridge-classifier.png'
        else:  # Linear-SVC
            self.model = self.linearSVC()
            self.accuracy_score = round(0.9011116141039183, 2)*100
            self.confusion_matrix = r'./static/img/confusion-matrix/linear-svc.png'

    def adaBoostClassifier(self):
        ada_boost_classifier = joblib.load(
            r'./services/models/AdaBoostClassifier.joblib')
        return ada_boost_classifier

    def bernoulliNB(self):
        bernoulli_nb = joblib.load(r'./services/models/BernoulliNB.joblib')
        return bernoulli_nb

    def linearSVC(self):
        linear_svc = joblib.load(r'./services/models/LinearSVC.joblib')
        return linear_svc

    def logisticRegression(self):
        logistic_regression = joblib.load(
            r'./services/models/LogisticRegression.joblib')
        return logistic_regression

    def multinomialNB(self):
        multinomial_nb = joblib.load(r'./services/models/MultinomialNB.joblib')
        return multinomial_nb

    def passiveAggressiveClassifier(self):
        passive_aggressive_classifier = joblib.load(
            r'./services/models/PassiveAggressiveClassifier.joblib')
        return passive_aggressive_classifier

    def perceptron(self):
        perceptron = joblib.load(r'./services/models/Perceptron.joblib')
        return perceptron

    def ridgeClassifier(self):
        ridge_classifier = joblib.load(
            r'./services/models/RidgeClassifier.joblib')
        return ridge_classifier

    def countVectorizer(self):
        count_vectorizer = joblib.load(
            r'./services/models/CountVectorizer.joblib')
        return count_vectorizer

    def getOverallPrediction(self, test_list: list):
        model = self.model
        count_vectorizer = self.countVectorizer()

        vectorized = count_vectorizer.transform(test_list)
        pred = model.predict(vectorized)
        return pred

    def getPercentagePrediction(self, test_list: list):
        model = self.model
        count_vectorizer = self.countVectorizer()
        res = []

        for s in test_list[0].split(" "):
            vectorized = count_vectorizer.transform([s])
            pred = model.predict(vectorized)
            res.append(pred[0])

        df = pd.DataFrame(res, columns=['result'])

        try:
            pos = df['result'].value_counts()['Positive']
        except Exception as e:
            pos = 0

        try:
            neu = df['result'].value_counts()['Neutral']
        except Exception as e:
            neu = 0
        try:
            neg = df['result'].value_counts()['Negative']
        except Exception as e:
            neg = 0

        total = neg+neu+pos

        pos_percent = round((pos*100/total), 2)
        neg_percent = round((neg*100/total), 2)
        neu_percent = 100-(pos_percent+neg_percent)

        return [pos_percent, neu_percent, neg_percent]
