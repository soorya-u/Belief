import OverallPrediction from "@/components/OverallPrediction";
import PercentagePrediction from "@/components/PercentagePrediction";

type Response = {
  accuracy_score: null | string;
  img_path: undefined | string;
  model_name: null | string;
  negative: null | string | number;
  neutral: null | string | number;
  output: null | string;
  positive: null | string | number;
};

function Output({ response }: { response: Response }) {
  return (
    <>
      {" "}
      <section className="w-[95vw] flex flex-col justify-around md:justify-between lg:justify-evenly lg:w-[60vw] sm:flex-row gap-6 sm:gap-0">
        <section className="flex flex-col justify-center items-center gap-2 self-center sm:self-start">
          <OverallPrediction response={response.output} />
        </section>
        <section className="font-['Chakra_Petch'] flex flex-col justify-center items-center gap-2">
          {(response.positive || response.neutral || response.negative) && (
            <>
              <h2 className="font-['Chakra_Petch'] text-center px-2 text-2xl font-extrabold">
                Keyword Prediction
              </h2>
              <table border={0} cellPadding={7}>
                <tbody>
                  {[response.positive, response.neutral, response.negative].map(
                    (r, idx) => {
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
                    }
                  )}
                </tbody>
              </table>
            </>
          )}
        </section>
      </section>
    </>
  );
}

export default Output;