import re, nltk
from nltk.stem.snowball import SnowballStemmer 
import numpy as np

# Data Preprocessing

class PreProcessor:

    def __init__(self, string) -> None:

        self.string = string
        
    def getCleanTweet(self) -> str:

        self.string = re.sub('COVID-19', 'COVID-19', self.string)
        self.string = re.sub('COVID19', 'COVID19', self.string)
        self.string = re.sub('#[A-Za-z0-9]+', '', self.string)
        self.string = re.sub('\\n', '', self.string)
        self.string = re.sub('https?:\/\/\S+', '', self.string)
        self.string = re.sub('@[^\s]+', '', self.string)
        self.string = re.sub('RT', '', self.string)
        self.string = re.sub('!', '', self.string)

        self.string = ''.join([i if ord(i) < 128 else '' for i in self.string])

        return self.string

    def preProcess(self):

        clean_tweet = self.getCleanTweet()
        clean_tweet_array = [clean_tweet]

        return clean_tweet_array
