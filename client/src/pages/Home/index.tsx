import { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import Header from "@/components/Header";
import Static from "./Static";
import Input from "./Input";
import Output from "./Output";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    output: null,
    positive: null,
    neutral: null,
    negative: null,
  });

  const handleSubmit = async (
    event: { preventDefault: () => void },
    value: string
  ) => {
    setLoading(true);
    event.preventDefault();
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/main`, {
        tweet: value,
      })
      .then((res) => setResponse(res.data));
    setLoading(false);
  };

  return (
    <>
      <Header heading="Belief" />
      <Static />

      <Input handleSubmit={handleSubmit} />

      {loading ? (
        <ReactLoading type="spinningBubbles" color="#1da1f2" />
      ) : (
        <Output response={response} />
      )}
    </>
  );
};

export default Home;
