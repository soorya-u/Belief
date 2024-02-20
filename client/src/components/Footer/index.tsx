import "./styles.css";
const Footer = () => {
  return (
    <>
      <footer className="flex justify-center items-center flex-col gap-4">
        <section className="sticky flex flex-col justify-center w-[90vw] items-center border-t-[3px] border-t-[#202630] gap-4 2xs:flex-row 2xs:justify-between 2xs:items-start">
          <div className="flex justify-center items-center flex-col gap-0 2xs:gap-4">
            <h2 className="text-[1.5rem] font-['Chakra_Petch'] text-[#1da1f2] font-extrabold">
              Our Products
            </h2>
            <h4 className="self-center 2xs:self-start">
              <a
                className="text-[1.2rem] no-underline font-['Audiowide']"
                href="https://su-elite-aiml.vercel.app/"
              >
                elite-AIML
              </a>
            </h4>
          </div>

          <div className="flex justify-center items-center flex-col gap-2 2xs:gap-4">
            <h2 className="text-[1.5rem] font-['Chakra_Petch'] text-[#1da1f2] font-extrabold">
              Get in Touch
            </h2>
            <div className="flex justify-center items-center gap-6">
              <a
                href="https://github.com/soorya-u/Sentiment-Analysis"
                target="_blank"
              >
                <i className="fa fa-github text-[2rem]"></i>
              </a>

              <a href="mailto:sooryau7@gmail.com" target="_blank">
                <i className="fa fa-envelope text-[2rem]"></i>
              </a>

              <a href="https://www.linkedin.com/in/soorya-u/" target="_blank">
                <i className="fa fa-linkedin-square text-[2rem]"></i>
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
