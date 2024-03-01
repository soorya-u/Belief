import { useState } from "react";
import ReactLoading from "react-loading";

import { SubmitHandler } from "react-hook-form";
import Header from "@/components/custom/Header";
import Input from "./Input";
import Output from "./Output";
import ModelStats from "./ModelStats";
import Gradient from "@/components/custom/Gradient";
import { StatsPayload, StatsResult } from "@/interface";
import { AxiosService } from "@/libs/axios";

const Stats = () => {
  const [loading, setLoading] = useState(false);

  const [response, setResponse] = useState<StatsResult>();

  const onSubmit: SubmitHandler<StatsPayload> = async (payload) => {
    setLoading(true);
    const res = await AxiosService.getStatsAnalyzer(payload);
    setResponse(res);
    setLoading(false);
  };

  return (
    <>
      <Header heading="Stats for Nerds" />
      <Gradient />
      <Input onSubmit={onSubmit} />

      {loading ? (
        <ReactLoading type="spinningBubbles" color="#1da1f2" />
      ) : (
        <>
          <Output response={response} />
          {response?.model_name && <ModelStats response={response} />}
        </>
      )}
    </>
  );
};

export default Stats;
