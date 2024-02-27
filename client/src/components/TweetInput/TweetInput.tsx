import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function TweetInput({
  value,
  setValue,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <input
        className="w-[80%] border-none outline-none px-[15px] xs:px-[10px] bg-none text-lg duration-500 ease-in leading-10 text-white bg-transparent xs:w-[20rem]"
        type="text"
        name="tweet"
        value={value}
        placeholder="Enter a tweet..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#1da1f2] text-center border-none rounded-full text-[#eafaf1] float-right h-10 aspect-square flex justify-center items-center transition-[0.4s] cursor-pointer group-hover:bg-white"
      >
        {/* <FontAwesomeIcon icon={faSpinner} className="animate-spin w-[20px] h-[20px]" /> */}
        {/* <FontAwesomeIcon icon={faTwitter} className="w-[15px] h-[15px]" /> */}
      </button>
    </>
  );
}

export default TweetInput;
