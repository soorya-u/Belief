import ReactLoading from "react-loading";

import { useTitle } from "@/hooks/use-title";
import { useStatsPost } from "@/hooks/use-post";

import Gradient from "@/components/gradient";

import Static from "./static";
import Input from "./input";
import Output from "./output";
import ModelStats from "./model-stats";

const Stats = () => {
  useTitle("Stats");
  const { data, isPending, onSubmit } = useStatsPost();

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center gap-7 before:content-[''] after:content-['']">
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
