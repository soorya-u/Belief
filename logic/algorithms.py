import joblib
import pandas as pd


class MLAlgorithms:

    def __init__(self, path: str, model_name='Logistic-Regression') -> None:

        self.path = path

        match model_name:
            case 'Ada-Boost-Classifier':
                self.model = self.adaBoostClassifier()
            case 'Bernoulli-NB':
                self.model = self.bernoulliNB()
            case 'Linear-SVC':
                self.model = self.linearSVC()
            case 'Logistic-Regression':
                self.model = self.logisticRegression()
            case 'Multinomial-NB':
                self.model = self.multinomialNB()
            case 'Passive-Aggressive-Classifier':
                self.model = self.passiveAggressiveClassifier()
            case 'Perceptron':
                self.model = self.perceptron()
            case 'Ridge-Classifier':
                self.model = self.ridgeClassifier()

    def adaBoostClassifier(self):
        ada_boost_classifier = joblib.load(
            self.path+r'/models/AdaBoostClassifier.joblib')
        return ada_boost_classifier

    def bernoulliNB(self):
        bernoulli_nb = joblib.load(self.path+r'/models/BernoulliNB.joblib')
        return bernoulli_nb

    def linearSVC(self):
        linear_svc = joblib.load(self.path+r'/models/LinearSVC.joblib')
        return linear_svc

    def logisticRegression(self):
        logistic_regression = joblib.load(
            self.path+r'/models/LogisticRegression.joblib')
        return logistic_regression

    def multinomialNB(self):
        multinomial_nb = joblib.load(self.path+r'/models/MultinomialNB.joblib')
        return multinomial_nb

    def passiveAggressiveClassifier(self):
        passive_aggressive_classifier = joblib.load(
            self.path+r'/models/PassiveAggressiveClassifier.joblib')
        return passive_aggressive_classifier

    def perceptron(self):
        perceptron = joblib.load(self.path+r'/models/Perceptron.joblib')
        return perceptron

    def ridgeClassifier(self):
        ridge_classifier = joblib.load(
            self.path+r'/models/RidgeClassifier.joblib')
        return ridge_classifier

    def countVectorizer(self):
        count_vectorizer = joblib.load(
            self.path+r'/models/CountVectorizer.joblib')
        return count_vectorizer

    def getOverallPrediction(self, test_list: list):
        print(test_list)
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
