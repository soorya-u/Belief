import { useTitle } from "@/hooks/use-title";

import { devs } from "@/utils/devs";

import Static from "./Static";
import Avatar from "./Avatar";
import Gradient from "@/components/custom/Gradient";

export default function About() {
  useTitle("About");
  return (
    <main className="flex flex-col justify-center items-center gap-7 before:content-[''] after:content-['']">
      <Static />
      <Gradient />
      <section className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-[#1da1f2] text-[2rem] font-bold">Teammates</h2>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {devs.map((dev) => (
            <Avatar {...dev} />
          ))}
        </div>
      </section>
    </main>
  );
}
