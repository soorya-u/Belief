import { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import { SubmitHandler } from "react-hook-form";
import Header from "@/components/Header";
import Input from "./Input";
import Output from "./Output";
import ModelStats from "./ModelStats";
import Gradient from "@/components/Gradient";
import { StatsPayload } from "@/interface";

const Stats = () => {
  const [loading, setLoading] = useState(false);

  const [response, setResponse] = useState({
    accuracy_score: null,
    img_path: undefined,
    model_name: null,
    negative: null,
    neutral: null,
    output: null,
    positive: null,
  });

  const onSubmit: SubmitHandler<StatsPayload> = async (payload) => {
    setLoading(true);
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/stats`, payload)
      .then((res) => setResponse(res.data));
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
          {response.model_name && <ModelStats response={response} />}
        </>
      )}
    </>
  );
};

export default Stats;
