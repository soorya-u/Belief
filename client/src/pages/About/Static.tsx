function Static() {
  return (
    <section className="flex justify-center items-center flex-col gap-y-8 mt-16">
      <h1 className="font-['Prompt'] text-[#1da1f2] text-4xl 2xs:text-5xl font-extrabold text-center w-10/12">
        About Us
      </h1>
      <p className="text-center text-2xl w-10/12 text-gray-400">
        <span className="font-['Chakra_Petch'] text-[#1da1f2] font-extrabold">
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
