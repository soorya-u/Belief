import { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import logo from "../../assets/img/logo.png";
import positive_emoji from "../../assets/img/positive.png";
import negative_emoji from "../../assets/img/negative.png";
import neutral_emoji from "../../assets/img/neutral.png";

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
      <main className="flex flex-col justify-center items-center gap-5">
        <section>
          <img className="w-[8.5rem]" src={logo} alt="logo" />
        </section>
        <h1 className="font-['Chakra_Petch'] text-[#1da1f2] text-center px-2 text-6xl font-bold">
          Belief
        </h1>
        <section className="flex justify-center flex-col items-center w-[70%]">
          <p className="text-[1.1rem] text-center">
            A Sentiment Analysis Webpage which analyzes and identifies the
            sentiment of that keyword or Tweet and categorizes it to Either
            Positive, Negative or Neutral. <br />
            <br />
            Kindly note that, The Machine Learning Model is trained with
            <span className="text-[#1da1f2] font-semibold">
              {" "}
              200,000+{" "}
            </span>{" "}
            Publicly available
            <span className="text-[#1da1f2] font-semibold">
              {" "}
              COVID-19 Case Study On Twitter Dataset{" "}
            </span>{" "}
            so the Keywords or Tweets must be related on COVID-19. <br />
            <br />
          </p>
        </section>

        <section className="flex flex-col justify-center items-center gap-4 after:content-['']">
          <h2 className="text-[#1da1f2] font-['Chakra_Petch'] text-center px-2 text-2xl font-bold">
            Enter your Keyword or Tweets:
          </h2>
          <form
            onSubmit={handleSubmit}
            data-place="home"
            className="bg-[#202630] w-[80vw] xs:w-[25rem] rounded-[40px] border-[2px] border-[#1da1f2] px-[18px] py-[10px] group box-content xs:box-border"
          >
            <input
              className="w-[80%] border-none outline-none px-[15px] xs:px-[10px] bg-none text-lg transition-['0.5s_ease'] leading-10 text-white bg-transparent xs:w-[20rem]"
              type="text"
              name="tweet"
              value={value}
              placeholder="Enter a tweet..."
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#1da1f2] text-center border-none rounded-full text-[#eafaf1] float-right h-10 aspect-square flex justify-center items-center transition-[0.4s] cursor-pointer group-hover:bg-white"
            >
              <i className="fa fa-twitter group-hover:text-black"></i>
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
            <section className="w-[95vw] flex flex-col justify-around md:justify-between lg:justify-evenly lg:w-[60vw] sm:flex-row gap-6 sm:gap-0">
              <section className="flex flex-col justify-center items-center gap-2 self-center sm:self-start">
                {response.output === "Positive" ? (
                  <>
                    <h2 className="font-['Chakra_Petch'] text-center px-2 text-2xl font-extrabold">
                      Overall Prediction
                    </h2>
                    <div className="flex gap-2">
                      <img
                        className="w-8"
                        src={positive_emoji}
                        alt="positive"
                      />
                      <h2 className="font-['Chakra_Petch'] text-center px-2 text-[#00ff00] text-2xl font-extrabold">
                        {response.output}
                      </h2>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {response.output === "Neutral" ? (
                  <>
                    <h2 className="font-['Chakra_Petch'] text-center px-2 text-2xl font-extrabold">
                      Overall Prediction
                    </h2>
                    <div className="flex gap-2">
                      <img className="w-8" src={neutral_emoji} alt="neutral" />
                      <h2 className="font-['Chakra_Petch'] text-center px-2 text-[#fbec5d] text-2xl font-extrabold">
                        {response.output}
                      </h2>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {response.output === "Negative" ? (
                  <>
                    <h2 className="font-['Chakra_Petch'] text-center px-2 text-2xl font-extrabold">
                      Overall Prediction
                    </h2>
                    <div className="flex gap-2">
                      <img
                        className="w-8"
                        src={negative_emoji}
                        alt="negative"
                      />
                      <h2 className="font-['Chakra_Petch'] text-center px-2 text-[#ff1201] text-2xl font-extrabold">
                        {response.output}
                      </h2>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </section>
              <section className="font-['Chakra_Petch'] flex flex-col justify-center items-center gap-2">
                {response.positive || response.neutral || response.negative ? (
                  <>
                    <h2 className="font-extrabold text-2xl font-['Chakra_Petch'] text-center px-2">
                      Keyword Prediction
                    </h2>
                    <table border={0} cellSpacing={7}>
                      <tbody>
                        {response.positive != 0 ? (
                          <tr>
                            <td className="font-['Chakra_Petch'] text-[1.3rem] pr-2">
                              Positive:
                            </td>
                            <td className="font-['Chakra_Petch']">
                              <div className="flex justify-start items-center gap-2 xs:w-[230px] border-[2px] border-white rounded-[15px] overflow-hidden text-white h-[1.3rem] w-[60vw]">
                                <span
                                  className="font-['Chakra_Petch'] self-start flex justify-center items-center px-6 overflow-hidden h-full text-black bg-[#00ff00]"
                                  style={{
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
                            <td className="font-['Chakra_Petch'] text-[1.3rem] pr-2">
                              Neutral:
                            </td>
                            <td>
                              <div className="flex justify-start items-center gap-2 xs:w-[230px] border-[2px] border-white rounded-[15px] overflow-hidden text-white h-[1.3rem] w-[60vw]">
                                <span
                                  className="font-['Chakra_Petch'] self-start flex justify-center items-center px-6 overflow-hidden h-full text-black bg-[#fbec5d]"
                                  style={{
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
                            <td className="font-['Chakra_Petch'] text-[1.3rem] pr-2">
                              Negative:
                            </td>
                            <td>
                              <div className="flex justify-start items-center gap-2 xs:w-[230px] border-[2px] border-white rounded-[15px] overflow-hidden text-white h-[1.3rem] w-[60vw]">
                                <span
                                  className="font-['Chakra_Petch'] self-start flex justify-center items-center px-6 overflow-hidden h-full text-black bg-[#ff1201]"
                                  style={{
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
