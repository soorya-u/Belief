function Static() {
  return (
    <>
      <section className="flex justify-center flex-col items-center w-[70%]">
        <p className="text-[1.1rem] text-center">
          A Sentiment Analysis Webpage which analyzes and identifies the
          sentiment of that keyword or Tweet and categorizes it to Either
          Positive, Negative or Neutral. <br />
          <br />
          Kindly note that, The Machine Learning Model is trained with
          <span className="text-[#1da1f2] font-semibold"> 200,000+ </span>{" "}
          Publicly available
          <span className="text-[#1da1f2] font-semibold">
            {" "}
            COVID-19 Case Study On Twitter Dataset{" "}
          </span>{" "}
          so the Keywords or Tweets must be related on COVID-19. <br />
          <br />
        </p>
      </section>
    </>
  );
}

export default Static;
