import ReactLoading from "react-loading";

import { useTitle } from "@/hooks/use-title";
import { useStatsPost } from "@/hooks/use-post";

import Gradient from "@/components/custom/Gradient";

import Static from "./Static";
import Input from "./Input";
import Output from "./Output";
import ModelStats from "./ModelStats";

const Stats = () => {
  useTitle("Stats");
  const { data, isPending, onSubmit } = useStatsPost();

  return (
    <main className="flex flex-col justify-center items-center gap-7 before:content-[''] after:content-['']">
      <Static />
      <Gradient />
      <Input onSubmit={onSubmit} />

      {isPending ? (
        <ReactLoading type="spinningBubbles" color="#1da1f2" />
      ) : (
        <>
          <Output response={data} />
          {data?.model_name && <ModelStats response={data} />}
        </>
      )}
    </main>
  );
};

export default Stats;
