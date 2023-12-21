import "./styles.css";

const About = () => {
  return (
    <>
      <main>
        <section className="logo">
          <img src="../static/img/logo_b.png" className="logo" alt="logo" />
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
                      src="../static/img/devs/soorya.jpg"
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
                      src="../static/img/devs/saanvi.jpg"
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
                      src="../static/img/devs/aishwarya.jpg"
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
                      src="../static/img/devs/devi.jpg"
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
            <div className="card">
              <div className="slide slide1">
                <div className="content">
                  <div className="icon">
                    <img
                      src="../static/img/devs/pratham.jpg"
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
