import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="sticky top-0 w-full bg-gradient-to-b from-[#000000be] to-transparent via-[95%] backdrop-blur-[7px] z-[3]">
      <nav className="flex h-[10vh] p-2 px-4 2xs:px-10 items-center justify-between">
        <NavLink to="/">
          <h1 className="font-['Chakra_Petch'] text-[#1da1f2] text-center px-2 text-3xl font-extrabold leading-tight 2xs:block hidden">
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
        <ul className="list-none flex gap-4 md:gap-12 md:px-0 sm:gap-8 sm:px-8">
          <li className="inline">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-['Prompt'] text-[#1da1f2] no-underline text-2xl"
                  : "font-['Prompt']no-underline text-white text-2xl"
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
                  ? "font-['Prompt'] text-[#1da1f2] no-underline text-2xl"
                  : "font-['Prompt']no-underline text-white text-2xl"
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
