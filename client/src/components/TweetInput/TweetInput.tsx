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
        className="w-[80%] border-none outline-none px-[15px] xs:px-[10px] bg-none text-lg transition-['0.5s_ease'] leading-10 text-white bg-transparent xs:w-[20rem]"
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
        <i className="fa fa-twitter group-hover:text-black"></i>
      </button>
    </>
  );
}

export default TweetInput;
