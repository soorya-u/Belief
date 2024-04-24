function Static() {
  return (
    <section className="mt-16 flex flex-col items-center justify-center gap-y-8">
      <h1 className="w-10/12 text-center font-['Prompt'] text-4xl font-extrabold text-[#1da1f2] 2xs:text-5xl">
        About Us
      </h1>
      <p className="w-10/12 text-center text-2xl text-gray-400">
        <span className="font-['Chakra_Petch'] font-extrabold text-[#1da1f2]">
          Belief
        </span>{" "}
        offers precise sentiment analysis for tweets, categorizing them as
        positive, negative, or neutral powered by a robust machine learning
        model trained on extensive Twitter data.
      </p>
    </section>
  );
}

export default Static;
