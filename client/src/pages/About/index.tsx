import logo from "../../assets/img/logo.png";
import dev_soo from "../../assets/img/devs/soorya.jpg";
import dev_saa from "../../assets/img/devs/saanvi.jpg";
import dev_ai from "../../assets/img/devs/aishwarya.jpg";
import dev_de from "../../assets/img/devs/devi.jpg";
import dev_pr from "../../assets/img/devs/pratham.jpg";

const About = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center gap-6">
        <section>
          <img src={logo} className="w-[8.5rem]" alt="logo" />
        </section>

        <h1 className="font-['Chakra_Petch'] text-[#1da1f2] text-center px-2 text-[4rem] font-extrabold leading-tight">
          About our Team
        </h1>
        <section className="flex justify-center items-center flex-col gap-4">
          <p className="w-[70%] text-center">
            We are four in team from Adichunchanagiri Institute of Technology,
            AIML Department Chikkamagaluru, developed a webpage{" "}
            <span className="text-[1.2rem] font-extrabold text-[#1da1f2]">
              be(;ef
            </span>{" "}
            as our Internship project for 3rd Year on Sentiment Analysis Of
            Lockdown In India During Covid-19 A case Study On Twitter using
            Machine Learning associated by Compsoft Technologies.
          </p>
        </section>
        <section className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-[#1da1f2] text-[2rem] font-bold">Teammates</h2>

          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Dev 1 */}
            <div className="h-[300px] group">
              <div className="w-[12rem] h-[12rem] overflow-hidden relative flex justify-center items-center z-[1] duration-[0.7s] translate-y-[35px] group-hover:translate-y-0">
                <div className="flex justify-center items-center flex-col gap-1">
                  <div className="absolute top-0 left-0 w-1/2 h-1/2">
                    <img
                      src={dev_soo}
                      alt="Avatar"
                      className="w-[12rem] overflow-hidden border-[2px] border-[#1da1f2] rounded-[25%] max-w-max"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[12rem] h-[12rem] overflow-hidden relative flex justify-center items-center box-border duration-[0.8s] -translate-y-[8.5rem] shadow-['0_20px_40px_rgba(0,0,0,0.4)'] group-hover:-translate-y-4">
                <div className="flex justify-center items-center flex-col gap-1">
                  <h3 className="mb-[10px] p-0 text-[24px] text-center text-white">
                    Soorya U
                  </h3>
                  <p className="m-0 p-0 text-center text-white">4AI21AI052</p>
                  <p className="m-0 p-0 text-center text-white">
                    Department of Artificial Intelligence & Machine Learning
                  </p>
                </div>
              </div>
            </div>
            {/* Dev 2 */}
            <div className="h-[300px] group">
              <div className="w-[12rem] h-[12rem] overflow-hidden relative flex justify-center items-center z-[1] duration-[0.7s] translate-y-[35px] group-hover:translate-y-0">
                <div className="flex justify-center items-center flex-col gap-1">
                  <div className="absolute top-0 left-0 w-1/2 h-1/2">
                    <img
                      src={dev_saa}
                      alt="Avatar"
                      className="w-[12rem] overflow-hidden border-[2px] border-[#1da1f2] rounded-[25%] max-w-max"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[12rem] h-[12rem] overflow-hidden relative flex justify-center items-center box-border duration-[0.8s] -translate-y-[8.5rem] shadow-['0_20px_40px_rgba(0,0,0,0.4)'] group-hover:-translate-y-4">
                <div className="flex justify-center items-center flex-col gap-1">
                  <h3 className="mb-[10px] p-0 text-[24px] text-center text-white">
                    Saanvi MJ
                  </h3>
                  <p className="m-0 p-0 text-center text-white">4AI21AI044</p>
                  <p className="m-0 p-0 text-center text-white">
                    Department of Artificial Intelligence & Machine Learning
                  </p>
                </div>
              </div>
            </div>
            {/* Dev 3 */}
            <div className="h-[300px] group">
              <div className="w-[12rem] h-[12rem] overflow-hidden relative flex justify-center items-center z-[1] duration-[0.7s] translate-y-[35px] group-hover:translate-y-0">
                <div className="flex justify-center items-center flex-col gap-1">
                  <div className="absolute top-0 left-0 w-1/2 h-1/2">
                    <img
                      src={dev_ai}
                      alt="Avatar"
                      className="w-[12rem] overflow-hidden border-[2px] border-[#1da1f2] rounded-[25%] max-w-max"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[12rem] h-[12rem] overflow-hidden relative flex justify-center items-center box-border duration-[0.8s] -translate-y-[8.5rem] shadow-['0_20px_40px_rgba(0,0,0,0.4)'] group-hover:-translate-y-4">
                <div className="flex justify-center items-center flex-col gap-1">
                  <h3 className="mb-[10px] p-0 text-[24px] text-center text-white">
                    Aishwarya HA
                  </h3>
                  <p className="m-0 p-0 text-center text-white">4AI21AI003</p>
                  <p className="m-0 p-0 text-center text-white">
                    Department of Artificial Intelligence & Machine Learning
                  </p>
                </div>
              </div>
            </div>
            {/* Dev 4 */}
            <div className="h-[300px] group">
              <div className="w-[12rem] h-[12rem] overflow-hidden relative flex justify-center items-center z-[1] duration-[0.7s] translate-y-[35px] group-hover:translate-y-0">
                <div className="flex justify-center items-center flex-col gap-1">
                  <div className="absolute top-0 left-0 w-1/2 h-1/2">
                    <img
                      src={dev_de}
                      alt="Avatar"
                      className="w-[12rem] overflow-hidden border-[2px] border-[#1da1f2] rounded-[25%] max-w-max"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[12rem] h-[12rem] overflow-hidden relative flex justify-center items-center box-border duration-[0.8s] -translate-y-[8.5rem] shadow-['0_20px_40px_rgba(0,0,0,0.4)'] group-hover:-translate-y-4">
                <div className="flex justify-center items-center flex-col gap-1">
                  <h3 className="mb-[10px] p-0 text-[24px] text-center text-white">
                    Devika M
                  </h3>
                  <p className="m-0 p-0 text-center text-white">4AI21AI015</p>
                  <p className="m-0 p-0 text-center text-white">
                    Department of Artificial Intelligence & Machine Learning
                  </p>
                </div>
              </div>
            </div>

            {/* Dev 5 */}

            <div className="h-[300px] group">
              <div className="w-[12rem] h-[12rem] overflow-hidden relative flex justify-center items-center z-[1] duration-[0.7s] translate-y-[35px] group-hover:translate-y-0">
                <div className="flex justify-center items-center flex-col gap-1">
                  <div className="absolute top-0 left-0 w-1/2 h-1/2">
                    <img
                      src={dev_pr}
                      alt="Avatar"
                      className="w-[12rem] overflow-hidden border-[2px] border-[#1da1f2] rounded-[25%] max-w-max"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[12rem] h-[12rem] overflow-hidden relative flex justify-center items-center box-border duration-[0.8s] -translate-y-[8.5rem] shadow-['0_20px_40px_rgba(0,0,0,0.4)'] group-hover:-translate-y-4">
                <div className="flex justify-center items-center flex-col gap-1">
                  <h3 className="mb-[10px] p-0 text-[24px] text-center text-white">
                    Pratham KR
                  </h3>
                  <p className="m-0 p-0 text-center text-white">4AI21AI039</p>
                  <p className="m-0 p-0 text-center text-white">
                    Department of Artificial Intelligence & Machine Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
