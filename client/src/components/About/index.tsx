import "./styles.css";
import b_logo from '../../assets/img/logo_b.png'
import dev_soo from '../../assets/img/devs/soorya.jpg'
import dev_saa from '../../assets/img/devs/saanvi.jpg'
import dev_ai from '../../assets/img/devs/aishwarya.jpg'
import dev_de from '../../assets/img/devs/devi.jpg'
import dev_pr from '../../assets/img/devs/pratham.jpg'

const About = () => {
  return (
    <>
      <main className="about">
        <section className="logo">
          <img src={b_logo} className="logo" alt="logo" />
        </section>

        <h1>About our Team</h1>
        <section className="para">
          <p>
            We are four in team from Adichunchanagiri Institute of Technology,
            AIML Department Chikkamagaluru, developed a webpage{" "}
            <span>be(;ef</span> as our Internship project for 3rd Year on
            Sentiment Analysis Of Lockdown In India During Covid-19 A case Study
            On Twitter using Machine Learning associated by Compsoft
            Technologies.
          </p>
        </section>
        <section className="devs">
          <h2>Teammates</h2>

          <div className="container">
            {/* Dev 1 */}
            <div className="card">
              <div className="slide slide1">
                <div className="content">
                  <div className="icon">
                    <img
                      src={dev_soo}
                      alt="Avatar"
                      className="image"
                    />
                  </div>
                </div>
              </div>

              <div className="slide slide2">
                <div className="content">
                  <h3>Soorya U</h3>
                  <p>4AI21AI052</p>
                  <p>
                    Department of Artificial Intelligence & Machine Learning
                  </p>
                </div>
              </div>
            </div>
            {/* Dev 2 */}
            <div className="card">
              <div className="slide slide1">
                <div className="content">
                  <div className="icon">
                    <img
                      src={dev_saa}
                      alt="Avatar"
                      className="image"
                    />
                  </div>
                </div>
              </div>

              <div className="slide slide2">
                <div className="content">
                  <h3>Saanvi MJ</h3>
                  <p>4AI21AI044</p>
                  <p>
                    Department of Artificial Intelligence & Machine Learning
                  </p>
                </div>
              </div>
            </div>
            {/* Dev 3 */}
            <div className="card">
              <div className="slide slide1">
                <div className="content">
                  <div className="icon">
                    <img
                      src={dev_ai}
                      alt="Avatar"
                      className="image"
                    />
                  </div>
                </div>
              </div>

              <div className="slide slide2">
                <div className="content">
                  <h3>Aishwarya HA</h3>
                  <p>4AI21AI003</p>
                  <p>
                    Department of Artificial Intelligence & Machine Learning
                  </p>
                </div>
              </div>
            </div>
            {/* Dev 4 */}
            <div className="card">
              <div className="slide slide1">
                <div className="content">
                  <div className="icon">
                    <img
                      src={dev_de}
                      alt="Avatar"
                      className="image"
                    />
                  </div>
                </div>
              </div>

              <div className="slide slide2">
                <div className="content">
                  <h3>Devika M</h3>
                  <p>4AI21AI015</p>
                  <p>
                    Department of Artificial Intelligence & Machine Learning
                  </p>
                </div>
              </div>
            </div>

            {/* Dev 5 */}
            {/*
            <div className="card">
              <div className="slide slide1">
                <div className="content">
                  <div className="icon">
                    <img
                      src={dev_pr}
                      alt="Avatar"
                      className="image"
                    />
                  </div>
                </div>
              </div>

              <div className="slide slide2">
                <div className="content">
                  <h3>Pratham KR</h3>
                  <p>4AI21AI039</p>
                  <p>
                    Department of Artificial Intelligence & Machine Learning
                  </p>
                </div>
              </div>
             */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
