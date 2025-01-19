import OverallPrediction from "@/components/modules/prediction/overall";
import PercentagePrediction from "@/components/modules/prediction/percentage";
import { MainResult } from "@/types";

function Output({ response }: { response: MainResult | undefined }) {
  if (response === undefined) return <></>;

  return (
    <section className="flex w-[95vw] flex-col justify-around gap-6 sm:flex-row sm:gap-0 md:justify-between lg:w-[60vw] lg:justify-evenly">
      <section className="flex flex-col items-center justify-center gap-2 self-center sm:self-start">
        <OverallPrediction response={response.output} />
      </section>

      <section className="flex flex-col items-center justify-center gap-2 font-['Chakra_Petch']">
        {(response.positive || response.neutral || response.negative) && (
          <>
            <h2 className="px-2 text-center font-['Chakra_Petch'] text-2xl font-extrabold">
              Keyword Prediction
            </h2>
            <table border={0} cellSpacing={7}>
              <tbody>
                {[response.positive, response.neutral, response.negative].map(
                  (r, idx) => {
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
                  },
                )}
              </tbody>
            </table>
          </>
        )}
      </section>
    </section>
  );
}

export default Output;
