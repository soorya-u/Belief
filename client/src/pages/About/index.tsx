import { useTitle } from "@/hooks/use-title";

import { devs } from "@/utils/devs";

import Static from "./Static";
import Avatar from "./Avatar";
import Gradient from "@/components/custom/Gradient";

export default function About() {
  useTitle("About");
  return (
    <main className="flex flex-col items-center justify-center gap-7 before:content-[''] after:content-['']">
      <Static />
      <Gradient />
      <section className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-[2rem] font-bold text-[#1da1f2]">Teammates</h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {devs.map((dev) => (
            <Avatar {...dev} />
          ))}
        </div>
      </section>
    </main>
  );
}
