function Static() {
  return (
    <section className="mt-10 flex flex-col items-center justify-center gap-y-8">
      <img
        className="hidden 2xs:block"
        width={112}
        height={112}
        src={"/logo.png"}
        alt="Logo"
      />
      <div className="flex w-full flex-col items-center justify-center gap-y-3">
        <h2 className="w-11/12 text-center font-['Prompt'] text-4xl font-bold leading-tight text-[#1da1f2] 2xs:text-5xl">
          Deciphering the Digital Mood:
        </h2>
        <h2 className="w-11/12 text-center font-['Prompt'] text-4xl font-bold leading-tight text-[#1da1f2] 2xs:text-5xl">
          Find the Sentiment in Every Tweet
        </h2>
      </div>
      <p className="px-4 text-center text-2xl text-gray-400">
        Leveraging Insights from{" "}
        <span className="text-[#1da1f2]">200,000+</span> Tweets for
        Comprehensive Sentiment Analysis
      </p>
    </section>
  );
}

export default Static;
