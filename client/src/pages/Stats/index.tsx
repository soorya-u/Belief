import ReactLoading from "react-loading";
import { SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { StatsPayload } from "@/interface";
import { AxiosService } from "@/libs/axios";
import { useNetworkAlert } from "@/hooks/use-alert";

import Header from "@/components/custom/Header";
import Gradient from "@/components/custom/Gradient";

import Input from "./Input";
import Output from "./Output";
import ModelStats from "./ModelStats";

const Stats = () => {
  const { isPending, data, mutateAsync, isError } = useMutation({
    mutationFn: async (payload: StatsPayload) =>
      await AxiosService.getStatsAnalyzer(payload),
  });

  useNetworkAlert(isError);

  const onSubmit: SubmitHandler<StatsPayload> = async (payload) => {
    await mutateAsync(payload);
  };

  return (
    <>
      <Header heading="Stats for Nerds" />
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
    </>
  );
};

export default Stats;
