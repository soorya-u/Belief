import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-[3] w-full bg-gradient-to-b from-[#000000be] via-[95%] to-transparent backdrop-blur-[7px]">
      <nav className="flex h-[10vh] items-center justify-between p-2 px-4 2xs:px-10">
        <NavLink to="/">
          <h1 className="hidden px-2 text-center font-['Chakra_Petch'] text-3xl font-extrabold leading-tight text-[#1da1f2] 2xs:block">
            Belief
          </h1>
          <img
            src="/logo.png"
            alt="Logo"
            className="aspect-square 2xs:hidden"
            width={40}
            height={40}
          />
        </NavLink>
        <ul className="flex list-none gap-4 sm:gap-8 sm:px-8 md:gap-12 md:px-0">
          <li className="inline">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-['Prompt'] text-2xl text-[#1da1f2] no-underline"
                  : "font-['Prompt'] text-2xl text-white no-underline"
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
                  ? "font-['Prompt'] text-2xl text-[#1da1f2] no-underline"
                  : "font-['Prompt'] text-2xl text-white no-underline"
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
  );
};

export default NavBar;
