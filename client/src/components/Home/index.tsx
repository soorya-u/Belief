import "./styles.css";

const Home = () => {
  const output = null;
  const positive = null;
  const neutral = null;
  const negative = null;

  return (
    <>
      <main>
        <section className="logo-img">
          <img src="../static/img/logo_b.png" alt="logo" />
        </section>
        <h1>Belief</h1>
        <section className="intro">
          <p>
            A Sentiment Analysis Webpage which analyzes and identifies the
            sentiment of that keyword or Tweet and categorizes it to Either
            Positive, Negative or Neutral. <br />
            <br />
            Kindly note that, The Machine Learning Model is trained with
            <span>200,000+</span> Publicly available
            <span>COVID-19 Case Study On Twitter Dataset</span> so the Keywords
            or Tweets must be related on COVID-19. <br />
            <br />
          </p>
        </section>

        <section className="input-home">
          <h2>Enter your Keyword or Tweets:</h2>
          <form data-place="home" className="search-box-home" action="/" method="post">
            <input
              data-place="home"
              type="text"
              name="tweet"
              value="{{value}}"
              placeholder="Enter a tweet..."
            />
            <button type="submit" className="twitter-icon-home">
              <i className="fa fa-twitter"></i>
            </button>
          </form>
        </section>

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
                <table border={0} cellSpacing={7}>
                  {positive != 0 ? (
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
                  {neutral != 0 ? (
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

                  {negative != 0 ? (
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
      </main>
    </>
  );
};

export default Home;
