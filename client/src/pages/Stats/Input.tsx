import { useForm, SubmitHandler } from "react-hook-form";

import { StatsPayload } from "@/types";
import { useToast } from "@/components/shadcn/use-toast";

import TweetInput from "@/components/custom/TweetInput/TweetInput";
import Dropdown from "@/components/custom/Dropdown";

function Input({ onSubmit }: { onSubmit: SubmitHandler<StatsPayload> }) {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<StatsPayload>({
    defaultValues: {
      modelName: "Linear-SVC",
    },
  });

  const onSubmitError = () => {
    toast({ title: "Form Error", description: "The Tweet Field is Required" });
  };

  return (
    <>
      <form
        className="flex justify-center items-center flex-wrap-reverse gap-20"
        onSubmit={handleSubmit(onSubmit, onSubmitError)}
      >
        <section className="flex flex-col justify-center items-center gap-6">
          <h2 className="text-white text-2xl font-bold text-center">
            Enter your Keyword or Tweets:
          </h2>
          <div className="bg-[#202630] w-[85vw] xs:w-[25rem] rounded-[40px] border-[2px] border-[#1da1f2] py-[0.6rem] px-4">
            <TweetInput register={register} isSubmitting={isSubmitting} />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center gap-6">
          <h2 className="text-white text-2xl font-bold text-center">
            Select any of Our Trained Model:
          </h2>
          <Dropdown control={control} isSubmitting={isSubmitting} />
        </section>
      </form>
    </>
  );
}

export default Input;
