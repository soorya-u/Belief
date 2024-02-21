import { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import Header from "@/components/Header";
import Input from "./Input";
import Output from "./Output";
import ModelStats from "./ModelStats";

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

  const handleSubmit = async (
    event: { preventDefault: () => void },
    value: string,
    modelName: string
  ) => {
    setLoading(true);
    event.preventDefault();
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/stats`, {
        tweet: value,
        model_name: modelName,
      })
      .then((res) => setResponse(res.data));
    setLoading(false);
  };

  return (
    <>
      <Header heading="Stats for Nerds" />
      <Input handleSubmit={handleSubmit} />

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
