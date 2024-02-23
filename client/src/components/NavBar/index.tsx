import { NavLink } from "react-router-dom";
import logo from "@/assets/img/logo_belief.png";

const NavBar = () => {
  return (
    <>
      <header className="sticky top-0 bg-gradient-to-b from-[#000000be] to-transparent via-[95%] backdrop-blur-[7px] z-[3]">
        <nav className="flex justify-center items-center py-4 px-8 sm:justify-between">
          <a href="https://github.com/soorya-u/Sentiment-Analysis">
            <img
              className="w-[10rem] invert hidden sm:block"
              src={logo}
              alt="logo"
            />
          </a>
          <ul className="list-none flex gap-4 md:gap-12 md:px-0 sm:gap-8 sm:px-8">
            <li className="inline">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "2xs:text-[2rem] font-['Prompt'] text-[#1da1f2] no-underline text-[1.5rem]"
                    : "2xs:text-[2rem] font-['Prompt']no-underline text-white text-[1.5rem]"
                }
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li className="inline">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "2xs:text-[2rem] font-['Prompt'] text-[#1da1f2] no-underline text-[1.5rem]"
                    : "2xs:text-[2rem] font-['Prompt']no-underline text-white text-[1.5rem]"
                }
                to="/about"
                end
              >
                About
              </NavLink>
            </li>
            <li className="inline">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "2xs:text-[2rem] font-['Prompt'] text-[#1da1f2] no-underline text-[1.5rem]"
                    : "2xs:text-[2rem] font-['Prompt']no-underline text-white text-[1.5rem]"
                }
                to="/stats"
                end
              >
                Stats
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
