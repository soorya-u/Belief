import { StatsResult } from "@/types";

function ModelStats({ response }: { response: StatsResult | undefined }) {
  if (response === undefined) return;
  return (
    <>
      <section className="flex justify-center items-center flex-col gap-2 pt-4">
        <h2 className="font-['Chakra_Petch'] text-white text-center px-2 text-[1.7rem]">
          Selected Model
        </h2>
        <h2 className="font-['Chakra_Petch'] text-[#1da1f2] text-center px-2 pb-6 text-[1.5rem]">
          {response.model_name}
        </h2>
        <h3 className="font-['Chakra_Petch'] text-white text-center px-2 text-[1.2rem]">
          Accuracy:{" "}
          <span className="text-[#1da1f2]">{response.accuracy_score}%</span>
        </h3>
        <h3 className="font-['Chakra_Petch'] text-white text-center px-2 text-[1.2rem]">
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
