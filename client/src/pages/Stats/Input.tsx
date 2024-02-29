import TweetInput from "@/components/TweetInput/TweetInput";
import DropDown from "@/components/Dropdown";
import { useForm, SubmitHandler } from "react-hook-form";

import { StatsPayload } from "@/interface";

function Input({ onSubmit }: { onSubmit: SubmitHandler<StatsPayload> }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    getValues,
  } = useForm<StatsPayload>({
    defaultValues: {
      modelName: "Select a Model...",
    },
  });

  return (
    <>
      <form
        className="flex justify-center items-center flex-wrap-reverse gap-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className="flex flex-col justify-center items-center gap-6">
          <h2 className="text-white text-2xl font-bold text-center">
            Enter your Keyword or Tweets:
          </h2>
          <div className="bg-[#202630] w-[80vw] xs:w-[25rem] rounded-[40px] border-[2px] border-[#1da1f2] py-[0.6rem] px-4 group">
            <TweetInput register={register} isSubmitting={isSubmitting} />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center gap-6">
          <h2 className="text-white text-2xl font-bold text-center">
            Select any of Our Trained Model:
          </h2>
          <DropDown
            value={getValues("modelName")}
            register={register}
            isSubmitting={isSubmitting}
          />
        </section>
      </form>
    </>
  );
}

export default Input;
