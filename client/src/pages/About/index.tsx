import { useTitle } from "@/hooks/use-title";

import { devs } from "@/utils/devs";

import Header from "@/components/custom/Header";
import Static from "./Static";
import Avatar from "./Avatar";
import Gradient from "@/components/custom/Gradient";

export default function About() {
  useTitle("About");
  return (
    <>
      <Header heading="About our Team" />
      <Gradient />
      <Static />
      <section className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-[#1da1f2] text-[2rem] font-bold">Teammates</h2>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {devs.map((dev) => (
            <Avatar {...dev} />
          ))}
        </div>
      </section>
    </>
  );
}
