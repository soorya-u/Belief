import positive_emoji from "@/assets/positive.png";
import negative_emoji from "@/assets/negative.png";
import neutral_emoji from "@/assets/neutral.png";

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

function OverallPrediction({ response }: { response: string }) {
  const output = responseType.filter((r) => r.result === response)[0];

  return (
    <>
      <h2 className="px-2 text-center font-['Chakra_Petch'] text-2xl font-extrabold">
        Overall Prediction
      </h2>
      <div className="flex gap-2">
        <img className="w-8" src={output.emoji} alt="positive" />
        <h2
          style={{ color: output.color }}
          className="px-2 text-center font-['Chakra_Petch'] text-2xl font-extrabold"
        >
          {output.result}
        </h2>
      </div>
    </>
  );
}

export default OverallPrediction;
