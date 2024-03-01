import { useState } from "react";
import ReactLoading from "react-loading";
import { SubmitHandler } from "react-hook-form";

import Header from "@/components/custom/Header";
import Static from "./Static";
import Input from "./Input";
import Output from "./Output";
import Gradient from "@/components/custom/Gradient";

import { MainPayload, MainResult } from "@/interface";
import { AxiosService } from "@/libs/axios";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<MainResult>();

  const onSubmit: SubmitHandler<MainPayload> = async (payload) => {
    setLoading(true);
    const res = await AxiosService.getMainAnalyzer(payload);
    setResponse(res);
    setLoading(false);
  };

  return (
    <>
      <Header heading="Belief" />
      <Gradient />
      <Static />
      <Input onSubmit={onSubmit} />

      {loading ? (
        <ReactLoading type="spinningBubbles" color="#1da1f2" />
      ) : (
        <Output response={response} />
      )}
    </>
  );
};

export default Home;
