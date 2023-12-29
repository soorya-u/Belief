import { useState, useRef } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import logo from "../../assets/img/logo.png";
import positive_emoji from "../../assets/img/positive.png";
import negative_emoji from "../../assets/img/negative.png";
import neutral_emoji from "../../assets/img/neutral.png";
import "./styles.css";

const Stats = () => {
  const detailElement = useRef<HTMLDetailsElement>(null);

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [modelName, setModelName] = useState("Select a Model...");
  const [response, setResponse] = useState({
    accuracy_score: null,
    img_path: undefined,
    model_name: null,
    negative: null,
    neutral: null,
    output: null,
    positive: null,
  });

  function handleClick() {
    detailElement.current?.removeAttribute("open");
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    setLoading(true);
    event.preventDefault();
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/stats`, {
        tweet: value,
        model_name: modelName,
      })
      .then((res) => setResponse(res.data));
    setLoading(false);
  };

  return (
    <>
      <main className="about">
        <section className="logo">
          <img src={logo} className="logo" alt="logo" />
        </section>

        <h1>Stats for Nerds</h1>

        <form data-place="stats" onSubmit={handleSubmit}>
          <section className="input">
            <h2>Enter your Keyword or Tweets:</h2>
            <div className="search-box-stats">
              <input
                className="tweet-box"
                type="text"
                name="tweet"
                value={value}
                placeholder="Enter a tweet..."
                onChange={(e) => setValue(e.target.value)}
              />
              <button type="submit" className="twitter-icon">
                <i className="fa fa-twitter"></i>
              </button>
            </div>
          </section>

          <section className="input">
            <h2>Select any of Our Trained Model:</h2>
            <details
              ref={detailElement}
              id="detail-element"
              className="custom-select"
            >
              <summary className="radios">
                <input
                  type="radio"
                  value=""
                  name="model-name"
                  id="default"
                  title={modelName}
                  checked
                  readOnly
                />
                <input
                  type="radio"
                  name="model-name"
                  onClick={() => setModelName("Ada-Boost-Classifier")}
                  id="item1"
                  title="Ada Boost Classifier"
                  readOnly
                />
                <input
                  type="radio"
                  name="model-name"
                  onClick={() => setModelName("Bernoulli-NB")}
                  id="item2"
                  title="Bernoulli NB"
                  readOnly
                />
                <input
                  type="radio"
                  name="model-name"
                  onClick={() => setModelName("Linear-SVC")}
                  id="item3"
                  title="Linear SVC"
                  readOnly
                />
                <input
                  type="radio"
                  name="model-name"
                  onClick={() => setModelName("Logistic-Regression")}
                  id="item4"
                  title="Logistic Regression"
                  readOnly
                />
                <input
                  type="radio"
                  name="model-name"
                  onClick={() => setModelName("Multinomial-NB")}
                  id="item5"
                  title="Multinomial NB"
                  readOnly
                />
                <input
                  type="radio"
                  name="model-name"
                  onClick={() => setModelName("Passive-Aggressive-Classifier")}
                  id="item6"
                  title="Passive Aggressive Classifier"
                  readOnly
                />
                <input
                  type="radio"
                  name="model-name"
                  onClick={() => setModelName("Perceptron")}
                  id="item7"
                  title="Perceptron"
                  readOnly
                />
                <input
                  type="radio"
                  name="model-name"
                  onClick={() => setModelName("Ridge-Classifier")}
                  id="item8"
                  title="Ridge Classifier"
                  readOnly
                />
              </summary>
              <ul className="list select">
                <li className="option">
                  <label onClick={handleClick} htmlFor="item1">
                    Ada Boost Classifier
                  </label>
                </li>
                <li className="option">
                  <label onClick={handleClick} htmlFor="item2">
                    Bernoulli NB
                  </label>
                </li>
                <li className="option">
                  <label onClick={handleClick} htmlFor="item3">
                    Linear SVC <em>(Default)</em>
                  </label>
                </li>
                <li className="option">
                  <label onClick={handleClick} htmlFor="item4">
                    Logistic Regression
                  </label>
                </li>
                <li className="option">
                  <label onClick={handleClick} htmlFor="item5">
                    Multinomial NB
                  </label>
                </li>
                <li className="option">
                  <label onClick={handleClick} htmlFor="item6">
                    Passive Aggressive Classifier
                  </label>
                </li>
                <li className="option">
                  <label onClick={handleClick} htmlFor="item7">
                    Perceptron
                  </label>
                </li>
                <li className="option">
                  <label onClick={handleClick} htmlFor="item8">
                    Ridge Classifier
                  </label>
                </li>
              </ul>
            </details>
          </section>
        </form>

        {loading ? (
          <>
            <section className="loading-stats">
              <ReactLoading type="spinningBubbles" color="#1da1f2" />
            </section>
          </>
        ) : (
          <>
            <section className="output">
              <section className="overall">
                {response.output === "Positive" ? (
                  <>
                    <h2>Overall Prediction</h2>
                    <div>
                      <img src={positive_emoji} alt="positive" />
                      <h2 style={{ color: "#00ff00" }}>{response.output}</h2>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                {response.output === "Neutral" ? (
                  <>
                    <h2>Overall Prediction</h2>
                    <div>
                      <img src={neutral_emoji} alt="neutral" />
                      <h2 style={{ color: "#fbec5d" }}>{response.output}</h2>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                {response.output === "Negative" ? (
                  <>
                    <h2>Overall Prediction</h2>
                    <div>
                      <img src={negative_emoji} alt="negative" />
                      <h2 style={{ color: "#ff1201" }}>{response.output}</h2>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </section>
              <section className="progress-bar">
                {response.positive || response.neutral || response.negative ? (
                  <>
                    <h2>Keyword Prediction</h2>
                    <table border={0} cellPadding={7}>
                      <tbody>
                        {response.positive ? (
                          <tr>
                            <td className="progress-title">Positive:</td>
                            <td>
                              <div className="progress">
                                <span
                                  style={{
                                    color: "#000",
                                    backgroundColor: "#00ff00",
                                    width: response.positive + "%",
                                  }}
                                >
                                  {response.positive}%
                                </span>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          <></>
                        )}

                        {response.neutral ? (
                          <tr>
                            <td className="progress-title">Neutral:</td>
                            <td>
                              <div className="progress">
                                <span
                                  style={{
                                    color: "#000",
                                    backgroundColor: "#fbec5d",
                                    width: response.neutral + "%",
                                  }}
                                >
                                  {response.neutral}%
                                </span>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          <></>
                        )}
                        {response.negative ? (
                          <tr>
                            <td className="progress-title">Negative:</td>
                            <td>
                              <div className="progress">
                                <span
                                  style={{
                                    backgroundColor: "#ff1201",
                                    width: response.negative + "%",
                                  }}
                                >
                                  {response.negative}%
                                </span>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          <></>
                        )}
                      </tbody>
                    </table>
                  </>
                ) : (
                  <></>
                )}
              </section>
            </section>
            <section className="stats">
              {response.model_name ? (
                <>
                  <h2>Selected Model</h2>
                  <h2 className="model-name">{response.model_name}</h2>
                  <h3>
                    Accuracy: <span>{response.accuracy_score}%</span>
                  </h3>
                  <h3>Confusion Matrix:</h3>
                  <img
                    src={import.meta.env.VITE_BACKEND_URL + response.img_path}
                    alt="confusion-matrix"
                  />
                </>
              ) : (
                <></>
              )}
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default Stats;
