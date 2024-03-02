import ReactLoading from "react-loading";
import { SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { MainPayload } from "@/interface";
import { AxiosService } from "@/libs/axios";
import { useNetworkAlert } from "@/hooks/use-alert";

import Header from "@/components/custom/Header";
import Gradient from "@/components/custom/Gradient";

import Static from "./Static";
import Input from "./Input";
import Output from "./Output";

const Home = () => {
  const { data, isPending, mutateAsync, isError } = useMutation({
    mutationFn: async (payload: MainPayload) =>
      await AxiosService.getMainAnalyzer(payload),
  });

  useNetworkAlert(isError);

  const onSubmit: SubmitHandler<MainPayload> = async (payload) => {
    await mutateAsync(payload);
  };

  return (
    <>
      <Header heading="Belief" />
      <Gradient />
      <Static />
      <Input onSubmit={onSubmit} />

      {isPending ? (
        <ReactLoading type="spinningBubbles" color="#1da1f2" />
      ) : (
        <Output response={data} />
      )}
    </>
  );
};

export default Home;
