import { useState } from "react";
import TweetInput from "@/components/TweetInput/TweetInput";

type SubmitHandler = (
  event: React.FormEvent<HTMLFormElement>,
  value: string
) => Promise<void>;

function Input({ handleSubmit }: { handleSubmit: SubmitHandler }) {
  const [value, setValue] = useState("");
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-4 after:content-['']">
        <h2 className="text-[#1da1f2] font-['Chakra_Petch'] text-center px-2 text-2xl font-bold">
          Enter your Keyword or Tweets:
        </h2>
        <form
          onSubmit={(e) => handleSubmit(e, value)}
          className="bg-[#202630] w-[80vw] xs:w-[25rem] rounded-[40px] border-[2px] border-[#1da1f2] px-[18px] py-[10px] group box-content xs:box-border"
        >
          <TweetInput value={value} setValue={setValue} />
        </form>
      </section>
    </>
  );
}

export default Input;
