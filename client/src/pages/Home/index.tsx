import ReactLoading from "react-loading";

import { useTitle } from "@/hooks/use-title";
import { useHomePost } from "@/hooks/use-post";

import Header from "@/components/custom/Header";
import Gradient from "@/components/custom/Gradient";

import Static from "./Static";
import Input from "./Input";
import Output from "./Output";

export default function Home() {
  useTitle();
  const { data, isPending, onSubmit } = useHomePost();

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
}
