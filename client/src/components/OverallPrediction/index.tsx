import positive_emoji from "../../assets/img/positive.png";
import negative_emoji from "../../assets/img/negative.png";
import neutral_emoji from "../../assets/img/neutral.png";

const responseType = [
  {
    result: "Positive",
    emoji: positive_emoji,
    color: "#00ff00",
  },
  {
    result: "Neutral",
    emoji: neutral_emoji,
    color: "#fbec5d",
  },
  {
    result: "Negative",
    emoji: negative_emoji,
    color: "#ff1201",
  },
];

function OverallPrediction({ response }: { response: string | null }) {
  if (response === null) return;

  const output = responseType.filter((r) => r.result === response)[0];

  return (
    <>
      <h2 className="font-['Chakra_Petch'] text-center px-2 text-2xl font-extrabold">
        Overall Prediction
      </h2>
      <div className="flex gap-2">
        <img className="w-8" src={output.emoji} alt="positive" />
        <h2
          style={{ color: output.color }}
          className="font-['Chakra_Petch'] text-center px-2 text-2xl font-extrabold"
        >
          {output.result}
        </h2>
      </div>
    </>
  );
}

export default OverallPrediction;
