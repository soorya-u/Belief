export default function Footer() {
  return (
    <footer className="m-auto flex min-h-16 w-[85vw] flex-col items-center justify-between gap-y-4 border-t-[2px] border-t-[#ffffff49] py-3 md-lg:flex-row">
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <img src="/logo.png" width={28} height={28} alt="Elite-AIML-Logo" />
        <p className={"text-center text-['Prompt'] text-gray-200"}>
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
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <p className={"text-center text-['Prompt'] text-gray-200"}>
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
