import { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import logo from "../../assets/img/logo.png";
import "./styles.css";
import TweetInput from "../../components/TweetInput/TweetInput";
import DropDown from "../../components/Dropdown";
import OverallPrediction from "../../components/OverallPrediction";
import PercentagePrediction from "../../components/PercentagePrediction";

const Stats = () => {
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
      <main className="flex flex-col justify-center items-center gap-6">
        <section className="logo">
          <img src={logo} className="w-[8.5rem]" alt="logo" />
        </section>

        <h1 className="font-['Chakra_Petch'] text-[#1da1f2] text-center px-2 text-[4rem] font-extrabold">
          Stats for Nerds
        </h1>

        <form
          className="flex justify-center items-center flex-wrap-reverse gap-20"
          onSubmit={handleSubmit}
        >
          <section className="flex flex-col justify-center items-center gap-6">
            <h2 className="text-white text-2xl font-bold text-center">
              Enter your Keyword or Tweets:
            </h2>
            <div className="bg-[#202630] w-[80vw] xs:w-[25rem] rounded-[40px] border-[2px] border-[#1da1f2] py-[0.6rem] px-4 group">
              <TweetInput value={value} setValue={setValue} />
            </div>
          </section>
          <section className="flex flex-col justify-center items-center gap-6">
            <h2 className="text-white text-2xl font-bold text-center">
              Select any of Our Trained Model:
            </h2>
            <DropDown modelName={modelName} setModelName={setModelName} />
          </section>
        </form>

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
                    <h2 className="font-['Chakra_Petch'] text-center px-2 text-2xl font-extrabold">
                      Keyword Prediction
                    </h2>
                    <table border={0} cellPadding={7}>
                      <tbody>
                        {[
                          response.positive,
                          response.neutral,
                          response.negative,
                        ].map((r, idx) => {
                          if (r == 0) return <></>;
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
            <section className="flex justify-center items-center flex-col gap-2 pt-4">
              {response.model_name ? (
                <>
                  <h2 className="font-['Chakra_Petch'] text-white text-center px-2 text-[1.7rem]">
                    Selected Model
                  </h2>
                  <h2 className="font-['Chakra_Petch'] text-[#1da1f2] text-center px-2 pb-6 text-[1.5rem]">
                    {response.model_name}
                  </h2>
                  <h3 className="font-['Chakra_Petch'] text-white text-center px-2 text-[1.2rem]">
                    Accuracy:{" "}
                    <span className="text-[#1da1f2]">
                      {response.accuracy_score}%
                    </span>
                  </h3>
                  <h3 className="font-['Chakra_Petch'] text-white text-center px-2 text-[1.2rem]">
                    Confusion Matrix:
                  </h3>
                  <img
                    className="w-[70vw] xs:w-min"
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
