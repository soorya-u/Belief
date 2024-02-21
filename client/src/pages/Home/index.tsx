import { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import logo from "@/assets/img/logo.png";
import TweetInput from "@/components/TweetInput/TweetInput";
import OverallPrediction from "@/components/OverallPrediction";
import PercentagePrediction from "@/components/PercentagePrediction";

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
      <main className="flex flex-col justify-center items-center gap-6">
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
            className="bg-[#202630] w-[80vw] xs:w-[25rem] rounded-[40px] border-[2px] border-[#1da1f2] px-[18px] py-[10px] group box-content xs:box-border"
          >
            <TweetInput value={value} setValue={setValue} />
          </form>
        </section>

        {loading ? (
          <>
            <ReactLoading type="spinningBubbles" color="#1da1f2" />
          </>
        ) : (
          <>
            <section className="w-[95vw] flex flex-col justify-around md:justify-between lg:justify-evenly lg:w-[60vw] sm:flex-row gap-6 sm:gap-0">
              <section className="flex flex-col justify-center items-center gap-2 self-center sm:self-start">
                <OverallPrediction response={response.output} />
              </section>

              <section className="font-['Chakra_Petch'] flex flex-col justify-center items-center gap-2">
                {(response.positive ||
                  response.neutral ||
                  response.negative) && (
                  <>
                    <h2 className="font-extrabold text-2xl font-['Chakra_Petch'] text-center px-2">
                      Keyword Prediction
                    </h2>
                    <table border={0} cellSpacing={7}>
                      <tbody>
                        {[
                          response.positive,
                          response.neutral,
                          response.negative,
                        ].map((r, idx) => {
                          if (r == 0) return;
                          const feeling =
                            idx === 0
                              ? "Positive"
                              : idx === 1
                              ? "Neutral"
                              : "Negative";
                          return (
                            <PercentagePrediction
                              key={feeling}
                              response={feeling}
                              percentage={r}
                            />
                          );
                        })}
                      </tbody>
                    </table>
                  </>
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
