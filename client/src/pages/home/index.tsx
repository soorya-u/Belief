import ReactLoading from "react-loading";

import { useTitle } from "@/hooks/use-title";
import { useHomePost } from "@/hooks/use-post";

import Gradient from "@/components/gradient";

import Static from "./static";
import Input from "./input";
import Output from "./output";

export default function Home() {
  useTitle();
  const { data, isPending, onSubmit } = useHomePost();

  return (
    <main className="flex flex-col items-center justify-center gap-7 before:content-[''] after:content-['']">
      <Static />
      <Gradient />
      <Input onSubmit={onSubmit} />

      {isPending ? (
        <ReactLoading type="spinningBubbles" color="#1da1f2" />
      ) : (
        <Output response={data} />
      )}
    </main>
  );
}