import "./styles.css";
const Footer = () => {
  return (
    <>
      <footer>
        <section className="upper">
          <div className="products">
            <h2>Our Products</h2>
            <h4>
              <a href="https://su-elite-aiml.vercel.app/">Elite-AIML</a>
            </h4>
          </div>

          <div className="connect">
            <h2>Get in Touch</h2>
            <div className="social-icons">
              <a
                href="https://github.com/soorya-u/Sentiment-Analysis"
                target="_blank"
              >
                <i className="fa fa-github"></i>
              </a>

              <a href="mailto:sooryau7@gmail.com" target="_blank">
                <i className="fa fa-envelope"></i>
              </a>

              <a href="https://www.linkedin.com/in/soorya-u/" target="_blank">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
