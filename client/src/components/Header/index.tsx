import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo_belief.png";
import "./styles.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <a href="https://github.com/soorya-u/Sentiment-Analysis">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" end>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/stats" end>
                Stats
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
