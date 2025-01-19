import { StatsResult } from "@/types";

function ModelStats({ response }: { response: StatsResult | undefined }) {
  if (response === undefined) return;
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-2 pt-4">
        <h2 className="px-2 text-center font-['Chakra_Petch'] text-[1.7rem] text-white">
          Selected Model
        </h2>
        <h2 className="px-2 pb-6 text-center font-['Chakra_Petch'] text-[1.5rem] text-[#1da1f2]">
          {response.model_name}
        </h2>
        <h3 className="px-2 text-center font-['Chakra_Petch'] text-[1.2rem] text-white">
          Accuracy:{" "}
          <span className="text-[#1da1f2]">{response.accuracy_score}%</span>
        </h3>
        <h3 className="px-2 text-center font-['Chakra_Petch'] text-[1.2rem] text-white">
          Confusion Matrix:
        </h3>
        <img
          className="w-[70vw] xs:w-min"
          src={import.meta.env.VITE_BACKEND_URL + response.img_path}
          alt="confusion-matrix"
        />
      </section>
    </>
  );
}

export default ModelStats;