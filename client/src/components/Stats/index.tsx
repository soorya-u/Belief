import "./styles.css";
import b_logo from '../../assets/img/logo_b.png'

const Stats = () => {
  function handleClick() {
    const detailElement = document.getElementById("detail-element");
    detailElement?.removeAttribute("open");
  }

  const output = undefined;
  const positive = undefined;
  const negative = undefined;
  const neutral = undefined;
  const model_name = undefined;
  const accuracy_score = undefined;

  return (
    <>
      <main className="about">
        <section className="logo">
          <img src={b_logo} className="logo" alt="logo" />
        </section>

        <h1>Stats for Nerds</h1>

        <form data-place="stats" action="/stats" method="post">
          <section className="input">
            <h2>Enter your Keyword or Tweets:</h2>
            <div className="search-box-stats">
              <input
                className="tweet-box"
                type="text"
                name="tweet"
                value="{{value}}"
                placeholder="Enter a tweet..."
              />
              <button type="submit" className="twitter-icon">
                <i className="fa fa-twitter"></i>
              </button>
            </div>
          </section>

          <section className="input">
            <h2>Select any of Our Trained Model:</h2>
            <details id="detail-element" className="custom-select">
              <summary className="radios">
                <input
                  type="radio"
                  value=""
                  name="model-name"
                  id="default"
                  title={model_name ?? 'Select a Model...'}
                  checked
                />
                <input
                  type="radio"
                  name="model-name"
                  value="Ada-Boost-classNameifier"
                  id="item1"
                  title="Ada Boost classNameifier"
                />
                <input
                  type="radio"
                  name="model-name"
                  value="Bernoulli-NB"
                  id="item2"
                  title="Bernoulli NB"
                />
                <input
                  type="radio"
                  name="model-name"
                  value="Linear-SVC"
                  id="item3"
                  title="Linear SVC"
                />
                <input
                  type="radio"
                  name="model-name"
                  value="Logistic-Regression"
                  id="item4"
                  title="Logistic Regression"
                />
                <input
                  type="radio"
                  name="model-name"
                  value="Multinomial-NB"
                  id="item5"
                  title="Multinomial NB"
                />
                <input
                  type="radio"
                  name="model-name"
                  value="Passive-Aggressive-classNameifier"
                  id="item6"
                  title="Passive Aggressive classNameifier"
                />
                <input
                  type="radio"
                  name="model-name"
                  value="Perceptron"
                  id="item7"
                  title="Perceptron"
                />
                <input
                  type="radio"
                  name="model-name"
                  value="Ridge-classNameifier"
                  id="item8"
                  title="Ridge classNameifier"
                />
              </summary>
              <ul className="list select">
                <li className="option">
                  <label onClick={handleClick} htmlFor="item1">
                    Ada Boost classNameifier
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
                    Passive Aggressive classNameifier
                  </label>
                </li>
                <li className="option">
                  <label onClick={handleClick} htmlFor="item7">
                    Perceptron
                  </label>
                </li>
                <li className="option">
                  <label onClick={handleClick} htmlFor="item8">
                    Ridge classNameifier
                  </label>
                </li>
              </ul>
            </details>
          </section>
        </form>
        <section className="output">
          <section className="overall">
            {output === "Positive" ? (
              <>
                <h2>Overall Prediction</h2>
                <div>
                  <img src="../static/img/positive.png" alt="positive" />
                  <h2 style={{ color: "#00ff00" }}>{output}</h2>
                </div>
              </>
            ) : (
              <></>
            )}
            {output === "Neutral" ? (
              <>
                <h2>Overall Prediction</h2>
                <div>
                  <img src="../static/img/neutral.png" alt="neutral" />
                  <h2 style={{ color: "#fbec5d" }}>{output}</h2>
                </div>
              </>
            ) : (
              <></>
            )}
            {output === "Negative" ? (
              <>
                <h2>Overall Prediction</h2>
                <div>
                  <img src="../static/img/negative.png" alt="negative" />
                  <h2 style={{ color: "#ff1201" }}>{output}</h2>
                </div>
              </>
            ) : (
              <></>
            )}
          </section>
          <section className="progress-bar">
            {positive && neutral && negative ? (
              <>
                <h2>Keyword Prediction</h2>
                <table border={0} cellPadding={7}>
                  {positive ? (
                    <tr>
                      <td className="progress-title">Positive:</td>
                      <td>
                        <div className="progress">
                          <span
                            style={{
                              color: "#000",
                              backgroundColor: "#00ff00",
                              width: positive + "%",
                            }}
                          >
                            {positive}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    <></>
                  )}

                  {neutral ? (
                    <tr>
                      <td className="progress-title">Neutral:</td>
                      <td>
                        <div className="progress">
                          <span
                            style={{
                              color: "#000",
                              backgroundColor: "#fbec5d",
                              width: neutral + "%",
                            }}
                          >
                            {neutral}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    <></>
                  )}
                  {negative ? (
                    <tr>
                      <td className="progress-title">Negative:</td>
                      <td>
                        <div className="progress">
                          <span
                            style={{
                              backgroundColor: "#ff1201",
                              width: negative + "%",
                            }}
                          >
                            {negative}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    <></>
                  )}
                </table>
              </>
            ) : (
              <></>
            )}
          </section>
        </section>
        <section className="stats">
          {model_name ? (
            <>
              <h2>Selected Model</h2>
              <h2 className="model-name">{model_name}</h2>
              <h3>
                Accuracy: <span>{accuracy_score}%</span>
              </h3>
              <h3>Confusion Matrix:</h3>
              <img src="{{img_path}}" alt="confusion-matrix" />
            </>
          ) : (
            <></>
          )}
        </section>
      </main>
    </>
  );
};

export default Stats;
