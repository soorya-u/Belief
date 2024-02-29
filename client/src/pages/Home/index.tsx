import { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { SubmitHandler } from "react-hook-form";

import Header from "@/components/Header";
import Static from "./Static";
import Input from "./Input";
import Output from "./Output";
import Gradient from "@/components/Gradient";

import { MainPayload } from "@/interface";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    output: null,
    positive: null,
    neutral: null,
    negative: null,
  });

  const onSubmit: SubmitHandler<MainPayload> = async (payload) => {
    setLoading(true);
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/main`, payload)
      .then((res) => setResponse(res.data));
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
