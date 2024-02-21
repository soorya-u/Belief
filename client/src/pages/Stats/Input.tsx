import { useState } from "react";

import TweetInput from "@/components/TweetInput/TweetInput";
import DropDown from "@/components/Dropdown";

type SubmitHandler = (
  event: React.FormEvent<HTMLFormElement>,
  value: string,
  modelName: string
) => Promise<void>;

function Input({ handleSubmit }: { handleSubmit: SubmitHandler }) {
  const [value, setValue] = useState("");
  const [modelName, setModelName] = useState("Select a Model...");
  return (
    <>
      <form
        className="flex justify-center items-center flex-wrap-reverse gap-20"
        onSubmit={(e) => handleSubmit(e, value, modelName)}
      >
        <section className="flex flex-col justify-center items-center gap-6">
          <h2 className="text-white text-2xl font-bold text-center">
            Enter your Keyword or Tweets:
          </h2>
          <div className="bg-[#202630] w-[80vw] xs:w-[25rem] rounded-[40px] border-[2px] border-[#1da1f2] py-[0.6rem] px-4 group">
            <TweetInput value={value} setValue={setValue} />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center gap-6">
          <h2 className="text-white text-2xl font-bold text-center">
            Select any of Our Trained Model:
          </h2>
          <DropDown modelName={modelName} setModelName={setModelName} />
        </section>
      </form>
    </>
  );
}

export default Input;
