import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { UseFormRegister } from "react-hook-form";
import { MainPayload, StatsPayload } from "@/types";

function TweetInput({
  register,
  isSubmitting,
}: {
  register: UseFormRegister<MainPayload> | UseFormRegister<StatsPayload>;
  isSubmitting: boolean;
}) {
  return (
    <>
      <input
        disabled={isSubmitting}
        type="text"
        placeholder="Enter a tweet..."
        className="w-[80%] border-none bg-transparent bg-none px-[15px] text-lg leading-10 text-white outline-none duration-500 ease-in xs:w-[20rem] xs:px-[10px]"
        // @ts-expect-error Strict Type Checking
        {...register("tweet", {
          required: { value: true, message: "The Tweet is Required" },
        })}
        style={{ cursor: isSubmitting ? "not-allowed" : "" }}
      />
      <button
        disabled={isSubmitting}
        type="submit"
        className="group float-right flex aspect-square h-10 cursor-pointer items-center justify-center rounded-full border-none bg-[#1da1f2] text-center text-[#eafaf1] transition-[0.4s] hover:bg-white disabled:bg-[#1da1f2] disabled:opacity-40"
        style={{ cursor: isSubmitting ? "not-allowed" : "" }}
      >
        {isSubmitting ? (
          <FontAwesomeIcon
            icon={faSpinner}
            className="h-[20px] w-[20px] animate-spin"
          />
        ) : (
          <FontAwesomeIcon
            icon={faTwitter}
            className="h-[15px] w-[15px] group-hover:[&_path]:text-black"
          />
        )}
      </button>
    </>
  );
}

export default TweetInput;
