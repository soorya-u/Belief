import { useForm, SubmitHandler } from "react-hook-form";

import { MainPayload } from "@/types";
import { useToast } from "@/components/ui/use-toast";

import TweetInput from "@/components/tweet-input";

function Input({ onSubmit }: { onSubmit: SubmitHandler<MainPayload> }) {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<MainPayload>();

  const onSubmitError = () => {
    toast({ title: "Form Error", description: "The Tweet Field is Required" });
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 after:content-['']">
        <h2 className="px-2 text-center font-['Chakra_Petch'] text-2xl font-bold text-[#1da1f2]">
          Enter your Keyword or Tweets:
        </h2>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit, onSubmitError)}
          className="box-content w-[85vw] rounded-[40px] border-[2px] border-[#1da1f2] bg-[#202630] px-[18px] py-[10px] xs:box-border xs:w-[25rem]"
        >
          <TweetInput register={register} isSubmitting={isSubmitting} />
        </form>
      </section>
    </>
  );
}

export default Input;
