export type MainPayload = {
  tweet: string;
};

export type ModelName =
  | "Ada-Boost-Classifier"
  | "Bernoulli-NB"
  | "Linear-SVC"
  | "Logistic-Regression"
  | "Multinomial-NB"
  | "Passive-Aggressive-Classifier"
  | "Perceptron"
  | "Ridge-Classifier";

export type StatsPayload = MainPayload & {
  modelName: ModelName;
};

export type MainResult = {
  output: string;
  positive: number;
  neutral: number;
  negative: number;
};

export type StatsResult = MainResult & {
  accuracy_score: number;
  img_path: string;
  model_name: string;
};
