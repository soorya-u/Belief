import { useForm, SubmitHandler } from "react-hook-form";

import TweetInput from "@/components/custom/TweetInput/TweetInput";

import { MainPayload } from "@/interface";

function Input({ onSubmit }: { onSubmit: SubmitHandler<MainPayload> }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<MainPayload>();
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-4 after:content-['']">
        <h2 className="text-[#1da1f2] font-['Chakra_Petch'] text-center px-2 text-2xl font-bold">
          Enter your Keyword or Tweets:
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#202630] w-[80vw] xs:w-[25rem] rounded-[40px] border-[2px] border-[#1da1f2] px-[18px] py-[10px] box-content xs:box-border"
        >
          <TweetInput register={register} isSubmitting={isSubmitting} />
        </form>
      </section>
    </>
  );
}

export default Input;
