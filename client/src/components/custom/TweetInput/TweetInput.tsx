import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { UseFormRegister } from "react-hook-form";
import { MainPayload, StatsPayload } from "@/types";

function  TweetInput({
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
        className="w-[80%] border-none outline-none px-[15px] xs:px-[10px] bg-none text-lg duration-500 ease-in leading-10 text-white bg-transparent xs:w-[20rem]"
        // @ts-expect-error Strict Type Checking
        {...register("tweet", {
          required: { value: true, message: "The Tweet is Required" },
        })}
        style={{ cursor: isSubmitting ? "not-allowed" : "" }}
      />
      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-[#1da1f2] text-center border-none rounded-full text-[#eafaf1] float-right h-10 aspect-square flex justify-center items-center transition-[0.4s] cursor-pointer hover:bg-white disabled:bg-[#1da1f2] disabled:opacity-40 group"
        style={{ cursor: isSubmitting ? "not-allowed" : "" }}
      >
        {isSubmitting ? (
          <FontAwesomeIcon
            icon={faSpinner}
            className="animate-spin w-[20px] h-[20px]"
          />
        ) : (
          <FontAwesomeIcon
            icon={faTwitter}
            className="w-[15px] h-[15px] group-hover:[&_path]:text-black"
          />
        )}
      </button>
    </>
  );
}

export default TweetInput;
