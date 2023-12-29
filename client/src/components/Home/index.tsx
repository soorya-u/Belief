import { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

// import lobo_b from "../../assets/img/logo_b.png";
import logo from "../../assets/img/logo.png";
import positive_emoji from "../../assets/img/positive.png";
import negative_emoji from "../../assets/img/negative.png";
import neutral_emoji from "../../assets/img/neutral.png";

import "./styles.css";

const Home = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    output: null,
    positive: null,
    neutral: null,
    negative: null,
  });

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    setLoading(true);
    event.preventDefault();
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/main`, {
        tweet: value,
      })
      .then((res) => setResponse(res.data));
    setLoading(false);
  };

  return (
    <>
      <main>
        <section className="logo-img">
          <img src={logo} alt="logo" />
        </section>
        <h1>Belief</h1>
        <section className="intro">
          <p>
            A Sentiment Analysis Webpage which analyzes and identifies the
            sentiment of that keyword or Tweet and categorizes it to Either
            Positive, Negative or Neutral. <br />
            <br />
            Kindly note that, The Machine Learning Model is trained with
            <span> 200,000+ </span> Publicly available
            <span> COVID-19 Case Study On Twitter Dataset </span> so the
            Keywords or Tweets must be related on COVID-19. <br />
            <br />
          </p>
        </section>

        <section className="input-home">
          <h2>Enter your Keyword or Tweets:</h2>
          <form
            onSubmit={handleSubmit}
            data-place="home"
            className="search-box-home"
          >
            <input
              data-place="home"
              type="text"
              name="tweet"
              value={value}
              placeholder="Enter a tweet..."
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="twitter-icon-home">
              <i className="fa fa-twitter"></i>
            </button>
          </form>
        </section>

        {loading ? (
          <>
            <section className="loading-home">
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
                    <table border={0} cellSpacing={7}>
                      <tbody>
                        {response.positive != 0 ? (
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
                        {response.neutral != 0 ? (
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

                        {response.negative != 0 ? (
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
          </>
        )}
      </main>
    </>
  );
};

export default Home;
