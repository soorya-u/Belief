import { useForm, SubmitHandler } from "react-hook-form";

import { StatsPayload } from "@/types";
import { useToast } from "@/components/ui/use-toast";

import TweetInput from "@/components/tweet-input";
import Dropdown from "@/components/modules/dropdown";

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
        className="flex flex-wrap-reverse items-center justify-center gap-20"
        onSubmit={handleSubmit(onSubmit, onSubmitError)}
      >
        <section className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-center text-2xl font-bold text-white">
            Enter your Keyword or Tweets:
          </h2>
          <div className="w-[85vw] rounded-[40px] border-[2px] border-[#1da1f2] bg-[#202630] px-4 py-[0.6rem] xs:w-[25rem]">
            <TweetInput register={register} isSubmitting={isSubmitting} />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-center text-2xl font-bold text-white">
            Select any of Our Trained Model:
          </h2>
          <Dropdown control={control} isSubmitting={isSubmitting} />
        </section>
      </form>
    </>
  );
}

export default Input;
