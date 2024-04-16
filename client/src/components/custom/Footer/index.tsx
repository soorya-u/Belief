export default function Footer() {
  return (
    <footer className="flex flex-col justify-between items-center min-h-16 w-[85vw] m-auto gap-y-4 border-t-[2px] border-t-[#ffffff49] md-lg:flex-row py-3">
      <div className="flex justify-center gap-x-2 items-center gap-y-1 flex-wrap">
        <img src="/logo.png" width={28} height={28} alt="Elite-AIML-Logo" />
        <p className={"text-gray-200 text-center text-['Prompt']"}>
          Built by{" "}
          <a
            href="https://twitter.com/sooryaa_u"
            className="underline underline-offset-2"
            target="_blank"
          >
            soorya-u
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/soorya-u/Belief"
            className="underline underline-offset-2"
            target="_blank"
          >
            GitHub
          </a>
          .
        </p>
      </div>
      <div className="flex justify-center items-center gap-x-2 gap-y-1 flex-wrap">
        <p className={"text-gray-200 text-center text-['Prompt']"}>
          Check these Projects Out:
        </p>
        <a href="https://grade-grove.soorya-u.dev" target="_blank">
          <img
            src="https://grade-grove.soorya-u.dev/logo.png"
            width={28}
            height={28}
            alt="Grade-Grove-Logo"
          ></img>
        </a>
      </div>
    </footer>
  );
}
