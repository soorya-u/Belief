import logo from "@/assets/img/logo.png";

function Header({ heading }: { heading: string }) {
  return (
    <>
      <section>
        <img src={logo} className="w-[8.5rem]" alt="logo" />
      </section>

      <h1 className="font-['Chakra_Petch'] text-[#1da1f2] text-center px-2 text-[4rem] font-extrabold leading-tight">
        {heading}
      </h1>
    </>
  );
}

export default Header;
